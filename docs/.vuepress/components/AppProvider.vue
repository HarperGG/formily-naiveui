<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { useDialog, useMessage } from 'naive-ui'

export default defineComponent({
  name: 'AppProvider',
  inheritAttrs: false,
  setup(props, { slots }) {
    // Inject message into the window
    window.$message = useMessage()
    window.$dialog = useDialog()

    return () => slots.default?.()
  },
})
</script>
