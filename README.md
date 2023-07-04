---
home: true
modules:
  - BannerBrand
  - Footer
bannerBrand:
  bgImage: '/bg.svg'
  title: 川·Faith
  video: 'http://www.hirresume.top/i/video/yanjian.mp4' 
  # imgSrc: '/logo.png' //图片
  description: 学习不是生活的一部分，而是生活本身
  tagline: 这是我基于vuepress的文档储存器，它也将成为我的知识库包括FAQ的文档，也同时欢迎大家共同学习，Learning is not a burden.
  buttons:
    - { text: 个人简介, link: '/docs/guide/introduce' }
    - { text: 开往下一站, link: 'http://hirakawa.top', type: 'plain' }
    # - { text: 开往下一站, link: 'http://hirakawa.top', type: 'plain' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/91faith' }
    - { icon: 'LogoDiscord', link: 'https://discord.com/channels/1121708647391690882/1121708647932772396' }
    - { icon: 'LogoWechat', text: 'https://github.com/91faith' }
    - { icon: 'LogoYoutube', link: 'https://www.youtube.com/channel/UCjKb7AiYikQop-RFqRFXBJw' }
    - { icon: 'MailAll', text: '2060768145@qq.com' }

blog:
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/91faith' }
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
footer: # 底部模块的配置
  record:
  recordLink: https://beian.miit.gov.cn/
  cyberSecurityRecord: 公安备案
  cyberSecurityLink: https://beian.miit.gov.cn/
  startYear: 2018
---

<!--备注  -->
imgSrc 图片路径
video 视频路径

提示
警告
删除
三种写法
<ClientOnly>
<tip-com type='tip' title='title' content='这是一个提示'/>
</ClientOnly>
<ClientOnly>
<tip-com  type='warning' content='这是一个提示'/>
</ClientOnly>
<ClientOnly>
<tip-com type='danger' content='这是一个提示'/>
</ClientOnly>

tagVal: 标签名称
taglink: 要跳转的页面路径