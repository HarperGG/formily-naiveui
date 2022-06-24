import { transformComponent } from '../__builtins__'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { NInputNumber } from 'naive-ui'
import { PreviewText } from '../preview-text'

export type InputNumberProps = typeof NInputNumber

const TransformElInputNumber = transformComponent<InputNumberProps>(
  NInputNumber,
  {
    change: 'update:value',
  }
)

export const InputNumber = connect(
  TransformElInputNumber,
  mapProps(
    {
      value: 'value',
      readOnly: 'readonly',
    },
    (props) => {
      let controlsPosition = 'right'
      if (props.controlsPosition) {
        controlsPosition = props.controlsPosition
      }
      return {
        controlsPosition,
        modelValue: props.modelValue,
      }
    }
  ),
  mapReadPretty(PreviewText.Input)
)

export default InputNumber
