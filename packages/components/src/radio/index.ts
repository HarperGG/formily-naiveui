import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { defineComponent, PropType, h } from 'vue'
import {
  composeExport,
  transformComponent,
  resolveComponent,
  SlotTypes,
} from '../__builtins__/shared'
import { PreviewText } from '../preview-text'

import { NRadio, NRadioGroup, NRadioButton } from 'naive-ui'

export type NRadioProps = typeof NRadio
export type RadioGroupProps = typeof NRadioGroup & {
  value: any
  options?: (
    | (Omit<NRadioProps, 'value'> & {
        value: NRadioProps['label']
        label: SlotTypes
      })
    | string
  )[]
  optionType: 'default' | 'button'
}

const TransformElRadioGroup = transformComponent(NRadioGroup, {
  change: 'update:value',
})

const RadioGroupOption = defineComponent({
  name: 'FRadioGroup',
  props: {
    options: {
      type: Array as PropType<RadioGroupProps['options']>,
      default: () => [],
    },
    optionType: {
      type: String as PropType<RadioGroupProps['optionType']>,
      default: 'default',
    },
  },
  setup(customProps, { attrs, slots }) {
    return () => {
      const options = customProps.options || []
      const OptionType =
        customProps.optionType === 'button' ? NRadioButton : NRadio
      const children =
        options.length !== 0
          ? {
              default: () =>
                options.map((option) => {
                  if (typeof option === 'string') {
                    return h(
                      OptionType,
                      { label: option },
                      {
                        default: () => [
                          resolveComponent(slots?.option ?? option, { option }),
                        ],
                      }
                    )
                  } else {
                    return h(
                      OptionType,
                      {
                        ...option,
                        value: String(option.value),
                        label: option.value,
                      },
                      {
                        default: () => [
                          resolveComponent(slots?.option ?? option.label, {
                            option,
                          }),
                        ],
                      }
                    )
                  }
                }),
            }
          : slots
      return h(
        TransformElRadioGroup,
        {
          ...attrs,
        },
        children
      )
    }
  },
})

const RadioGroup = connect(
  RadioGroupOption,
  mapProps({ dataSource: 'options', value: 'value' }),
  mapReadPretty(PreviewText.Select)
)
export const Radio = composeExport(NRadio, {
  Group: RadioGroup,
})

export default Radio
