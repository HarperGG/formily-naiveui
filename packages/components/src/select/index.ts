import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { PreviewText } from '../preview-text'

import { NSelect } from 'naive-ui'
import { transformComponent } from '../__builtins__'

export type SelectProps = typeof NSelect

const TransformNSelect = transformComponent<SelectProps>(NSelect, {
  change: 'update:value',
})

export const Select = connect(
  TransformNSelect,
  mapProps({
    readOnly: 'readonly',
    value: 'value',
    dataSource: 'options',
    loading: true,
  }),
  mapReadPretty(PreviewText.Select)
)

export default Select
