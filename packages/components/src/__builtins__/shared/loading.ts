import type { MessageReactive } from 'naive-ui'
export const loading = async (
  loadingText = 'Loading...',
  processor: () => Promise<any>
) => {
  const message = window.$message
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
