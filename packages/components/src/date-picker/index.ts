import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { NDatePicker } from 'naive-ui'

import { PreviewText } from '../preview-text'

export type DatePickerProps = typeof NDatePicker

const TransformNDatePicker = transformComponent<DatePickerProps>(NDatePicker, {
  change: 'confirm',
})

export const DatePicker = connect(
  TransformNDatePicker,
  mapProps({
    value: 'value',
    readOnly: 'readonly',
  }),
  mapReadPretty(PreviewText.DatePicker)
)

export default DatePicker
