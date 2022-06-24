import { connect, mapProps } from '@formily/vue'

import { NSwitch } from 'naive-ui'

export type SwitchProps = typeof NSwitch

export const Switch = connect(NSwitch, mapProps({ readOnly: 'readonly' }))

export default Switch
