import { connect, mapProps } from '@formily/vue'

import { NTransfer } from 'naive-ui'
import { transformComponent } from '../__builtins__'

export type TransferProps = typeof NTransfer

const TransformTimePicker = transformComponent<TransferProps>(NTransfer, {
  change: 'update:value',
})

export const Transfer = connect(
  TransformTimePicker,
  mapProps({ dataSource: 'options', value: 'value' })
)

export default Transfer
