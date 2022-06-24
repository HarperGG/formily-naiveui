import { defineComponent, SetupContext } from 'vue'
import { h, useParentForm } from '@formily/vue'
import { IFormFeedback } from '@formily/core'
import { observer } from '@formily/reactive-vue'

import type { NButton as NButtonProps } from 'naive-ui'
import { NButton } from 'naive-ui'

export type ISubmitProps = {
  onClick?: (e: MouseEvent) => any
  onSubmit?: (values: any) => any
  onSubmitSuccess?: (payload: any) => void
  onSubmitFailed?: (feedbacks: IFormFeedback[]) => void
} & typeof NButtonProps

export const Submit = observer(
  defineComponent({
    name: 'FSubmit',
    props: ['onClick', 'onSubmit', 'onSubmitSuccess', 'onSubmitFailed'],
    setup(props, { attrs, slots }: SetupContext) {
      const formRef = useParentForm()

      return () => {
        const {
          onClick = attrs?.onClick,
          onSubmit = attrs?.onSubmit,
          onSubmitSuccess = attrs?.onSubmitSuccess,
          onSubmitFailed = attrs?.onSubmitFailed,
        } = props

        const form = formRef?.value
        return h(
          NButton,
          {
            nativeType: attrs?.submit ? 'button' : 'submit',
            type: 'primary',
            ...attrs,
            loading:
              attrs.loading !== undefined ? attrs.loading : form?.submitting,
            onClick: (e: any) => {
              if (onClick) {
                if (onClick(e) === false) return
              }
              if (onSubmit) {
                form
                  ?.submit(onSubmit as (e: any) => void)
                  .then(onSubmitSuccess as (e: any) => void)
                  .catch(onSubmitFailed as (e: any) => void)
              }
            },
          },
          slots
        )
      }
    },
  })
)

export default Submit
