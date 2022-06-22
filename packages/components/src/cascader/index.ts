import { defineComponent, h } from 'vue'
import { connect, mapProps, mapReadPretty, useField } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { isVoidField, Field } from '@formily/core'
import { NCascader } from 'naive-ui'

import { PreviewText } from '../preview-text'

export type CascaderProps = typeof NCascader

// export const Cascader = connect(
//   ElCascader,
//   mapProps({ dataSource: 'options', value: 'modelValue' }),
//   mapReadPretty(PreviewText.Cascader)
// )

export const Cascader = observer(
  defineComponent({
    name: 'FCascader',
    props: ['onChange'],
    setup(props, { attrs, slots }: { [key: string]: any }) {
      const fieldRef = useField()
      return () => {
        const field = fieldRef.value as Field
        const Comp =
          field && !isVoidField(field) && field.pattern === 'readPretty'
            ? PreviewText.Cascader
            : NCascader
        return h(
          Comp,
          {
            ...attrs,
            options: field?.dataSource,
            value: field?.value,
            'on-update:value': (...args: any[]) => {
              props.onChange(...args)
            },
          },
          slots
        )
      }
    },
  })
)

export default Cascader
