import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/jay-blog',
  // 请不要忘记设置默认语言
  lang: 'zh-CN',
  theme: plumeTheme({
  }),
  bundler: viteBundler(),
})