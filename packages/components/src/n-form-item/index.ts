import { isVoidField } from '@formily/core'
import { connect, mapProps } from '@formily/vue'

import { NFormItem as NFormItemComponent } from 'naive-ui'

export type NFormItemProps = typeof NFormItem & { title: string }

export const NFormItem = connect(
  NFormItemComponent,
  mapProps({ title: 'label', required: true }, (props, field) => ({
    error: !isVoidField(field) ? field.selfErrors[0] ?? undefined : undefined,
  }))
)

export default NFormItem
