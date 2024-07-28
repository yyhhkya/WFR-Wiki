import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh_CN',

  title: '濯花域 Wiki',
  description: '常见问题快速自查手册',

  theme: defaultTheme({
    logo: '/img/logo.png',

    navbar: [
      { text: '首页', link: '/' },
      
      {
        text: '守则',
        children: [
          { text: '服务器玩家守则', link: '/服务器玩家守则' },
          { text: 'QQ群群员守则', link: '/QQ群群员守则' }
        ]
      },
    ],

    lastUpdated: '上次更新',

  }),

  bundler: viteBundler(),
})
