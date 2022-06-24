// import pageComponents from '@internal/page-components'
import { defineClientAppEnhance } from '@vuepress/client'
import naive from 'naive-ui'

import DumiPreviewer from './components/dumi-previewer.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('dumi-previewer', DumiPreviewer)
  app.use(naive)
})
