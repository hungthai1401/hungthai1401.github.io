module.exports = {
  title: 'Thai Nguyen Hung',
  description: 'Thai Nguyen Hung',

  // deploy options
  url: 'https://hungthai.is-a.dev',
  base: '/',
  dest: '.vuepress/dist',

  // profile
  author: 'Thai Nguyen Hung',
  email: 'hungthai1401@gmail.com',

  theme: 'vuepress-theme-typewriter',
  // scss: {
  //   data: '@import "@theme/styles/global-variables.scss";'
  // },
  head: [
    ['link', {
      rel: 'preconnect',
      href: 'https://utteranc.es/'
    }]
  ],
  themeConfig: {
    nav: [
      { text: 'Resume', link: '/resume', outLink: true, newWindow: false },
    ],
    copyright: 'Copyright 2010-2024 Thai Nguyen Hung all rights reserved.',
    github: 'hungthai1401',
    feed: 'rss.xml',
    comment: {
      'repo': 'hungthai1401/hungthai1401.github.io',
      'issue-term': 'url'
    }
  },
  markdown: {
    lineNumbers: true,
    anchor: {
      permalinkBefore: false
    }
  },
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/',
          itemPermalink: '/:year/:month/:day/:slug',
          pagination: {
            lengthPerPage: 10,
          },
        }
      ],
      frontmatters: [
        {
          id: 'category',
          keys: ['categories'],
          path: '/category/',
          layout: 'Categories',
          scopeLayout: 'Category'
        }
      ]
    }],
    '@vuepress/active-header-links',
    'vuepress-plugin-container',
    'vuepress-plugin-medium-zoom',
    'vuepress-plugin-nprogress',
    'vuepress-plugin-sitemap'
  ],
  evergreen: true
}
