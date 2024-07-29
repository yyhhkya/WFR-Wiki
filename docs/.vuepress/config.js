import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

// import { gitPlugin } from '@vuepress/plugin-git'

export default defineUserConfig({
  lang: 'zh_CN',

  title: '濯花域 Wiki',
  description: '常见问题快速自查手册',

  theme: defaultTheme({
    logo: '/img/logo.png',

    // 顶部导航
    navbar: [
      { text: '首页', link: '/' },

      {
        text: '守则',
        children: [
          { text: '服务器玩家守则', link: '/守则/服务器玩家守则' },
          { text: 'QQ群群员守则', link: '/守则/QQ群群员守则' },
          // { text: 'git-test', link: '/git-test' },
        ]
      },

      { text: '游玩教程', link: '/游玩教程' },

      { text: '常见问题', link: '/常见问题' },

    ],

    repo: "https://github.com/yyhhkya/WFR-Wiki",

  }),

  // repo: "https://gitlab.com/yyhhkya/WFR-Wiki",
  // docsRepo: 'https://gitlab.com/yyhhkya/WFR-Wiki',
  // docsBranch: 'master',
  // docsDir: 'docs',
  // editLinkPattern: ':repo/-/edit/:branch/:path',
  
  // 插件
  plugins: [

  ],

  bundler: viteBundler(),

})
