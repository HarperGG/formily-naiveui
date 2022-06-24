import { FormProvider, FragmentComponent } from '@formily/vue'
import { toJS } from '@formily/reactive'
import { observer } from '@formily/reactive-vue'
import { createForm, Form, IFormProps } from '@formily/core'
import {
  isNum,
  isStr,
  isBool,
  isFn,
  IMiddleware,
  applyMiddleware,
} from '@formily/shared'
import { NModal, NButton } from 'naive-ui'
import {
  Component,
  VNode,
  defineComponent,
  Teleport,
  createApp,
  PropType,
  h,
} from 'vue'
import {
  isValidElement,
  resolveComponent,
  createPortalProvider,
  getPortalContext,
  loading,
} from '../__builtins__'
import { stylePrefix } from '../__builtins__'

type FormDialogContentProps = { form: Form }

type FormDialogContent = Component | ((props: FormDialogContentProps) => VNode)

type DialogTitle = string | number | Component | VNode | (() => VNode)

type IFormModalProps = Omit<typeof NModal, 'title'> & {
  title?: DialogTitle
  footer?: null | Component | VNode | (() => VNode)
  cancelText?: string | Component | VNode | (() => VNode)
  cancelButtonProps?: typeof NButton
  okButtonProps?: typeof NButton
  loadingText?: string
}

const PORTAL_TARGET_NAME = 'FormDialogFooter'

const isDialogTitle = (props: any): props is DialogTitle => {
  return isNum(props) || isStr(props) || isBool(props) || isValidElement(props)
}

const getDialogProps = (props: any): IFormModalProps => {
  if (isDialogTitle(props)) {
    return {
      title: props,
    } as IFormModalProps
  } else {
    return props
  }
}

export interface IFormDialog {
  forOpen(middleware: IMiddleware<IFormProps>): IFormDialog
  forConfirm(middleware: IMiddleware<IFormProps>): IFormDialog
  forCancel(middleware: IMiddleware<IFormProps>): IFormDialog
  open(props?: IFormProps): Promise<any>
  close(): void
}

export interface IFormDialogComponentProps {
  content: FormDialogContent
  resolve: () => any
  reject: () => any
}

export function FormDialog(
  title: IFormModalProps | DialogTitle,
  content: FormDialogContent
): IFormDialog

export function FormDialog(
  title: IFormModalProps | DialogTitle,
  id: string | symbol,
  content: FormDialogContent
): IFormDialog

export function FormDialog(
  title: DialogTitle,
  id: string,
  content: FormDialogContent
): IFormDialog

export function FormDialog(
  title: IFormModalProps | DialogTitle,
  id: string | symbol | FormDialogContent,
  content?: FormDialogContent
): IFormDialog {
  if (isFn(id) || isValidElement(id)) {
    content = id as FormDialogContent
    id = 'form-dialog'
  }

  const prefixCls = `${stylePrefix}-form-dialog`
  const env = {
    root: document.createElement('div'),
    form: null,
    promise: null,
    app: null,
    instance: null,
    openMiddlewares: [],
    confirmMiddlewares: [],
    cancelMiddlewares: [],
  }

  document.body.appendChild(env.root)

  const props = getDialogProps(title)
  const dialogProps = {
    ...props,
    onClosed: () => {
      props.onClosed?.()
      env.app?.unmount?.()
      env.app = null
      env.instance = null
      env.root?.parentNode?.removeChild(env.root)
      env.root = undefined
    },
  }

  const component = observer(
    defineComponent({
      setup() {
        return () =>
          h(
            FragmentComponent,
            {},
            {
              default: () =>
                resolveComponent(content, {
                  form: env.form,
                }),
            }
          )
      },
    })
  )

  const render = (visible = true, resolve?: () => any, reject?: () => any) => {
    if (!env.instance) {
      const ComponentConstructor = defineComponent({
        props: { dialogProps: Object as PropType<typeof NModal> },
        data() {
          return {
            visible: false,
          }
        },
        render() {
          const {
            onNegativeClick,
            negativeText,
            title,
            footer,
            onPositiveClick,
            positiveText,
            okButtonProps,
            cancelButtonProps,
            ...dialogProps
          } = this.dialogProps

          return h(
            FormProvider,
            { form: env.form },
            {
              default: () =>
                h(
                  NModal,
                  {
                    class: [`${prefixCls}`],
                    preset: 'card',
                    ...dialogProps,
                    show: this.visible,
                    'onUpdate:show': (val) => {
                      this.visible = val
                    },
                  },
                  {
                    default: () => h(component, {}, {}),
                    header: () =>
                      h('div', {}, { default: () => resolveComponent(title) }),
                    footer: () =>
                      h(
                        'div',
                        {},
                        {
                          default: () => {
                            const FooterPortalTarget = h(
                              'span',
                              {
                                id: PORTAL_TARGET_NAME,
                              },
                              {}
                            )
                            if (footer === null) {
                              return [null, FooterPortalTarget]
                            } else if (footer) {
                              return [
                                resolveComponent(footer),
                                FooterPortalTarget,
                              ]
                            }

                            return [
                              h(
                                NButton,
                                {
                                  ...cancelButtonProps,
                                  onClick: (e) => {
                                    onNegativeClick?.(e)
                                    reject()
                                  },
                                },
                                {
                                  default: () =>
                                    resolveComponent(negativeText || '取消'),
                                }
                              ),
                              h(
                                NButton,
                                {
                                  type: 'primary',
                                  ...okButtonProps,
                                  loading: env.form.submitting,
                                  onClick: (e) => {
                                    onPositiveClick?.(e)
                                    resolve()
                                  },
                                },
                                {
                                  default: () =>
                                    resolveComponent(positiveText || '确定'),
                                }
                              ),
                              FooterPortalTarget,
                            ]
                          },
                        }
                      ),
                  }
                ),
            }
          )
        },
      })

      env.app = createApp(ComponentConstructor, {
        dialogProps,
        parent: getPortalContext(id as string | symbol),
      })
      env.instance = env.app.mount(env.root)
    }
    env.instance.visible = visible
  }

  const formDialog = {
    forOpen: (middleware: IMiddleware<IFormProps>) => {
      if (isFn(middleware)) {
        env.openMiddlewares.push(middleware)
      }
      return formDialog
    },
    forConfirm: (middleware: IMiddleware<Form>) => {
      if (isFn(middleware)) {
        env.confirmMiddlewares.push(middleware)
      }
      return formDialog
    },
    forCancel: (middleware: IMiddleware<Form>) => {
      if (isFn(middleware)) {
        env.cancelMiddlewares.push(middleware)
      }
      return formDialog
    },
    open: (props: IFormProps) => {
      if (env.promise) return env.promise

      env.promise = new Promise(async (resolve, reject) => {
        try {
          props = await loading(dialogProps.loadingText, () =>
            applyMiddleware(props, env.openMiddlewares)
          )
          env.form = env.form || createForm(props)
        } catch (e) {
          reject(e)
        }

        render(
          true,
          () => {
            env.form
              .submit(async () => {
                await applyMiddleware(env.form, env.confirmMiddlewares)
                resolve(toJS(env.form.values))
                formDialog.close()
              })
              .catch(reject)
          },
          async () => {
            await loading(dialogProps.loadingText, () =>
              applyMiddleware(env.form, env.cancelMiddlewares)
            )
            formDialog.close()
          }
        )
      })
      return env.promise
    },
    close: () => {
      if (!env.root) return
      render(false)
    },
  }
  return formDialog as never
}

const FormDialogFooter = defineComponent({
  name: 'FFormDialogFooter',
  setup(props, { slots }) {
    return () => {
      // 临时解决方案
      if (document.querySelector(`#${PORTAL_TARGET_NAME}`)) {
        return h(
          Teleport as any,
          {
            to: `#${PORTAL_TARGET_NAME}`,
          },
          slots
        )
      } else {
        return null
      }
    }
  },
})

FormDialog.Footer = FormDialogFooter
FormDialog.Portal = createPortalProvider('form-dialog')

export default FormDialog
