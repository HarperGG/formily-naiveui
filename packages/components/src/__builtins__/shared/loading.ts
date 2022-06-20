import type { MessageReactive } from 'naive-ui'
import { useMessage } from 'naive-ui'
export const loading = async (
  loadingText = 'Loading...',
  processor: () => Promise<any>
) => {
  const message = useMessage()
  let loadingInstance: MessageReactive = null
  let loading = setTimeout(() => {
    loadingInstance = message.loading(loadingText)
  }, 100)
  try {
    return await processor()
  } finally {
    loadingInstance?.destroy()
    clearTimeout(loading)
  }
}
