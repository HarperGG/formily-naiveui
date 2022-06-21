import { Slots, VNode, VNodeArrayChildren, renderSlot, h } from 'vue'
export function isValidElement(element) {
  return (
    isVueOptions(element) ||
    (element &&
      typeof element === 'object' &&
      'componentOptions' in element &&
      'context' in element &&
      element.tag !== undefined)
  ) // remove text node
}

export function isVnode(element: any): boolean {
  return (
    element &&
    typeof element === 'object' &&
    'componentOptions' in element &&
    'context' in element &&
    element.tag !== undefined
  )
}

export function isVueOptions(options) {
  return (
    options &&
    (typeof options.template === 'string' ||
      typeof options.render === 'function')
  )
}

export function composeExport<T0 extends {}, T1 extends {}>(
  s0: T0,
  s1: T1
): T0 & T1 {
  return Object.assign(s0, s1)
}

export function renderChildren<T extends Record<string, unknown>>(
  slots: Slots,
  name?: string,
  props?: T,
  fallback?: () => VNodeArrayChildren
): { [key: string]: () => VNode } {
  if (!name) {
    return { default: () => h(slots, props, fallback) }
  }
  return { [name]: () => h(slots, props, fallback) }
}
