import { Component, VNode } from 'vue'

export type SlotTypes =
  | Component
  | string
  | number
  | ((props: Record<string, any>) => VNode[] | VNode)
  | VNode

export type Recordable<T = any> = Record<string, T>
