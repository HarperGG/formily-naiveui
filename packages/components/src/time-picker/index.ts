import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { PreviewText } from '../preview-text'
import { NTimePicker } from 'naive-ui'

export type TimePickerProps = typeof NTimePicker

const TransformTimePicker = transformComponent<TimePickerProps>(NTimePicker, {
  change: 'update:value',
})

export const TimePicker = connect(
  TransformTimePicker,
  mapProps({ readOnly: 'readonly', value: 'value' }),
  mapReadPretty(PreviewText.TimePicker)
)

export default TimePicker
