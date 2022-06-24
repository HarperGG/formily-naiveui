import { defineComponent, ref, h } from 'vue'
import { observer } from '@formily/reactive-vue'
import { ArrayField } from '@formily/core'
import { useField, useFieldSchema, RecursionField } from '@formily/vue'
import { NTabs, NTabPane, NBadge } from 'naive-ui'
import { stylePrefix } from '../__builtins__/configs'

export const ArrayTabs = observer(
  defineComponent({
    name: 'ArrayTabs',
    props: ['onChange'],
    setup(props, { attrs }) {
      const fieldRef = useField<ArrayField>()
      const schemaRef = useFieldSchema()

      const prefixCls = `${stylePrefix}-array-tabs`
      const activeKey = ref('tab-0')

      return () => {
        const field = fieldRef.value
        const schema = schemaRef.value
        const value = Array.isArray(field.value) ? field.value : []
        const dataSource = value?.length ? value : [1]

        const onEdit = (targetKey: any, type: 'add' | 'remove') => {
          if (type == 'add') {
            const id = dataSource.length
            if (field?.value?.length) {
              field.push(null)
            } else {
              field.push(null, null)
            }
            activeKey.value = `tab-${id}`
          } else if (type == 'remove') {
            const index = targetKey.match(/-(\d+)/)?.[1]
            field.remove(Number(index))
            if (activeKey.value === targetKey) {
              activeKey.value = `tab-${index - 1}`
            }
          }
        }

        const badgedTab = (index: number) => {
          const tab = `${field.title || 'Untitled'} ${index + 1}`
          const path = field.address.concat(index)
          const errors = field.form.queryFeedbacks({
            type: 'error',
            address: `${path}.**`,
          })
          if (errors.length) {
            return h(
              'span',
              {},
              {
                default: () => [
                  h(
                    NBadge,
                    {
                      class: [`${prefixCls}-errors-badge`],
                      value: errors.length,
                    },
                    {
                      default: () => [tab],
                    }
                  ),
                ],
              }
            )
          }
          return h(
            'span',
            {},
            {
              default: () => [tab],
            }
          )
        }

        const renderItems = () =>
          dataSource?.map((item, index) => {
            const items = Array.isArray(schema.items)
              ? schema.items[index]
              : schema.items
            const key = `tab-${index}`
            return h(
              NTabPane,
              {
                closable: index !== 0,
                name: key,
                tab: item,
              },
              {
                default: () =>
                  h(
                    RecursionField,
                    {
                      schema: items,
                      name: index,
                    },
                    {}
                  ),
                tab: () => [badgedTab(index)],
              }
            )
          })
        return h(
          NTabs as any,
          {
            class: [prefixCls],
            type: 'card',
            addable: true,
            closable: true,
            tabStyle: 'min-width: 80px;',
            ...attrs,
            value: activeKey.value,
            'onUpdate:value': (key: any) => {
              activeKey.value = key
            },
            onClose: (target: any) => {
              onEdit(target, 'remove')
              !(attrs as any)?.['tab-remove']?.(target)
            },
            onAdd: () => {
              onEdit(null, 'add')
              !(attrs as any)?.['tab-add']?.()
            },
          },
          {
            default: () => [renderItems()],
          }
        )
      }
    },
  })
)

export default ArrayTabs
