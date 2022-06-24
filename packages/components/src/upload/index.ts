import { Field } from '@formily/core'
import { defineComponent, h } from 'vue'
import { connect, mapProps, useField, FragmentComponent } from '@formily/vue'
import {
  NUpload,
  NButton,
  NIcon,
  UploadFileInfo,
  NUploadDragger,
} from 'naive-ui'
import { composeExport } from '../__builtins__'

export type UploadProps = typeof NUpload & {
  textContent?: string
  errorAdaptor?: (error?: ErrorEvent) => string
}

export type IUploadOnchange = (fileList: UploadFileInfo[]) => void

export type IUploadProps = Omit<UploadProps, 'onChange'> & {
  onChange?: IUploadOnchange
}

export type IDraggerUploadProps = Omit<UploadProps, 'onChange'> & {
  onChange?: IUploadOnchange
}

const UploadWrapper = defineComponent<IUploadProps>({
  name: 'UploadWrapper',
  setup(_, { slots, attrs, emit }) {
    return () => {
      return h(
        NUpload,
        {
          attrs,
          change: ({ fileList }) => {
            ;(attrs.onChange as IUploadOnchange)?.(fileList)
            emit('change', fileList)
          },
        },
        {
          ...slots,
        }
      )
    }
  },
})

const UploadDraggerWrapper = defineComponent<IUploadProps>({
  name: 'UploadDraggerWrapper',
  setup(_, { slots, attrs, emit }) {
    return () => {
      return h(
        Upload,
        {
          ...attrs,
          change: ({ fileList }) => {
            ;(attrs.onChange as IUploadOnchange)?.(fileList)
            emit('change', fileList)
          },
        },
        {
          default: () =>
            h(
              NUploadDragger,
              {},
              {
                ...slots,
              }
            ),
        }
      )
    }
  },
})

const _Upload = connect(
  UploadWrapper,
  mapProps({
    value: 'fileList',
    onInput: 'onChange',
  })
)

const UploadDragger = connect(
  UploadDraggerWrapper,
  mapProps({
    value: 'fileList',
    onInput: 'onChange',
  })
)

export const Upload = composeExport(_Upload, {
  Dragger: UploadDragger,
})

export default Upload
