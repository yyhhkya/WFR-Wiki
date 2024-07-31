import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'



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
          { text: 'QQ群群员守则', link: '/守则/QQ群群员守则' }
        ]
      },

      { text: '游玩教程', link: '/游玩教程' },

      { text: '常见问题', link: '/常见问题' },

    ],

    // 仓库链接
    repo: 'https://github.com/yyhhkya/WFR-Wiki',
    repoLabel: '仓库链接',

    // 编辑链接
    docsRepo: 'https://github.com/yyhhkya/WFR-Wiki',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkText: '编辑此页',

    // 编辑信息
    lastUpdatedText: '更新时间',
    contributorsText: '贡献者',

    // 404页面
    notFound: ['找不到该页面'],
    backToHome: '返回首页',

    // 侧边栏最大深度
    sidebarDepth: 4,

  }),



  // 插件
  plugins: [

  ],

  bundler: viteBundler(),

})
