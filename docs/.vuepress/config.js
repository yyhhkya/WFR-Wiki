import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

import { gitPlugin } from '@vuepress/plugin-git'

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
          { text: 'QQ群群员守则', link: '/QQ群群员守则' },
          { text: 'git-test', link: '/git-test' },
        ]
      },
    ]

  }),

  bundler: viteBundler(),

  // 插件
  // plugins: [
  //   gitPlugin({
  //     createdTime: true, // 是否收集页面的创建时间。
  //     updatedTime: true, // 是否收集页面的更新时间。
  //   }),
  // ],

})
