import path from 'path'
import utils from './util'
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import vueJsx from '@vitejs/plugin-vue-jsx'

const componentFiles = utils
  .getFiles(path.resolve(__dirname, '../guide'))
  .map((item) => item.replace(/(\.md)$/, ''))
  .filter((item) => !['n-form', 'n-form-item', 'index'].includes(item))

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  title: 'NaiveUI',
  description: 'Alibaba unified front-end form solution',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '//img.alicdn.com/imgextra/i3/O1CN01XtT3Tv1Wd1b5hNVKy_!!6000000002810-55-tps-360-360.svg',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/naive-ui/dist/index.css',
      },
    ],
  ],
  theme: 'vuepress-theme-dumi',
  themeConfig: {
    logo: '//img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg',
    navbar: [
      {
        text: 'naive-ui',
        link: '/guide/',
      },
      {
        text: '主站',
        link: 'https://formilyjs.org',
      },
      {
        text: 'GITHUB',
        link: 'https://github.com/formilyjs/naive-ui.git',
      },
    ],
    sidebar: {
      '/guide/': ['/guide/index.md', ...componentFiles],
    },
    lastUpdated: true,
    smoothScroll: true,
  },
  markdown: {
    code: {
      lineNumbers: false,
    },
  },
  alias: {
    '@formily/naive-ui': path.resolve(
      __dirname,
      '../../packages/components/src'
    ),
  },
  plugins: [
    'vuepress-plugin-typescript',
    // '@vuepress/back-to-top',
    // '@vuepress/last-updated',
    // '@vuepress-dumi/dumi-previewer',
    // [
    //   '@vuepress/medium-zoom',
    //   {
    //     selector: '.content__default :not(a) > img',
    //   },
    // ],
  ],
  bundlerConfig: {
    viteOptions: {
      plugins: [vueJsx({})],
      ssr: {
        noExternal: ['naive-ui'],
      },
    },
  },
})
