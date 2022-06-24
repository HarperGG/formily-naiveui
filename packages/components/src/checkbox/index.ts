import { defineComponent, PropType, h, Component } from 'vue'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import {
  composeExport,
  transformComponent,
  SlotTypes,
} from '../__builtins__/shared'

import { NCheckbox, NCheckboxGroup } from 'naive-ui'
import { PreviewText } from '../preview-text'

type NCheckboxProps = Omit<typeof NCheckbox, 'value'> & {
  value: NCheckboxProps['label']
}

export interface CheckboxProps extends NCheckboxProps {
  option: Omit<typeof NCheckbox, 'value'> & {
    value: NCheckboxProps['label']
    label: SlotTypes
  }
}
const TransformNCheckbox = transformComponent(NCheckbox, {
  change: 'update:checked',
})

const CheckboxOption = defineComponent({
  name: 'FCheckbox',
  inheritAttrs: false,
  props: {
    option: {
      type: Object,
      default: null,
    },
  },
  setup(customProps, { attrs, slots }) {
    return () => {
      const props = attrs as unknown as CheckboxProps
      const option = customProps?.option
      if (option) {
        const newProps = {} as Partial<NCheckboxProps>
        Object.assign(newProps, option)
        newProps.label = option.label
        return h(
          NCheckbox,
          {
            ...newProps,
          },
          slots
        )
      }

      return h(
        TransformNCheckbox,
        {
          ...props,
        },
        slots
      )
    }
  },
})

export type CheckboxGroupProps = typeof NCheckboxGroup & {
  value: any[]
  options?: Array<CheckboxProps | string>
  optionType: 'default' | 'button'
}

const TransformNCheckboxGroup = transformComponent(NCheckboxGroup, {
  change: 'update:value',
})

const CheckboxGroupOption: Component = defineComponent({
  name: 'FCheckboxGroup',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    optionType: {
      type: String as PropType<CheckboxGroupProps['optionType']>,
      default: 'default',
    },
  },
  setup(customProps, { attrs, slots }) {
    return (): any => {
      const options = customProps.options || []
      const children =
        options.length !== 0
          ? {
              default: () =>
                options.map((option) => {
                  if (typeof option === 'string') {
                    return h(
                      Checkbox,
                      {
                        option: {
                          label: option,
                          value: option,
                        },
                        optionType: customProps.optionType,
                      },
                      slots?.option
                        ? { default: () => slots.option!({ option }) }
                        : {}
                    )
                  } else {
                    return h(
                      Checkbox,
                      {
                        option,
                        optionType: customProps.optionType,
                      },
                      slots?.option
                        ? { default: () => slots.option!({ option }) }
                        : {}
                    )
                  }
                }),
            }
          : slots
      return h(
        TransformNCheckboxGroup,
        {
          ...attrs,
        },
        children
      )
    }
  },
})

const CheckboxGroup = connect(
  CheckboxGroupOption,
  mapProps({
    dataSource: 'options',
    value: 'value',
  }),
  mapReadPretty(PreviewText.Select, {
    multiple: true,
  })
)
const CheckboxInner = connect(CheckboxOption)
export const Checkbox = composeExport(CheckboxInner, {
  Group: CheckboxGroup,
})

export default Checkbox
