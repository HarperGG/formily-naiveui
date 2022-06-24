import { composeExport, transformComponent } from '../__builtins__'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { PreviewText } from '../preview-text'
import { NInput } from 'naive-ui'

export type InputProps = typeof NInput

const TransformNInput = transformComponent<InputProps>(NInput, {
  change: 'update:value',
})

const InnerInput = connect(
  TransformNInput,
  mapProps({
    readOnly: 'readonly',
  }),
  mapReadPretty(PreviewText.Input)
)

const TextArea = connect(
  InnerInput,
  mapProps((props) => {
    return {
      ...props,
      type: 'textarea',
    }
  }),
  mapReadPretty(PreviewText.Input)
)

export const Input = composeExport(InnerInput, {
  TextArea,
})

export default Input
