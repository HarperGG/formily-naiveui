import { Recordable } from './types'
import type { Component } from 'vue'
import { defineComponent } from 'vue'
import { merge, each } from '@formily/shared'
import { h } from '@formily/vue'
import { omit } from 'naive-ui/es/_utils'

type ListenersTransformRules = Record<string, string>

export const transformComponent = <T extends Recordable>(
  tag: any,
  transformRules?: ListenersTransformRules,
  defaultProps?: Partial<T>
): Component<T> | any => {
  return defineComponent({
    setup(_, { attrs, slots }) {
      return () => {
        let data = {
          ...attrs,
        }
        if (transformRules) {
          const listeners = transformRules
          each(listeners, (event, extract) => {
            data[`on${event[0].toUpperCase()}${event.slice(1)}`] =
              attrs[`on${extract[0].toUpperCase()}${extract.slice(1)}`]
            delete data[`on${extract[0].toUpperCase()}${extract.slice(1)}`]
          })
        }
        if (defaultProps) {
          data = merge(defaultProps, attrs)
        }
        return h(tag, data, slots)
      }
    },
  })
}

export const transformObject = <T extends Recordable>(
  props: Recordable,
  targetKey?: string,
  replaceKey?: string,
  rest?: Recordable
): T | Recordable => {
  if (Object.hasOwnProperty.call(props, targetKey)) {
    const value = props[targetKey]
    const newProps = omit(props, [targetKey], rest)
    if (replaceKey) {
      newProps[replaceKey] = value
    }
    return newProps
  }
  return props
}
