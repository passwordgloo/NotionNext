/**
 * 落地页主题,替换heoweb项目
 */
const CONFIG = {
  PROXIO_WELCOME_COVER_ENABLE: true, //是否显示页面进入的欢迎文字
  PROXIO_WELCOME_TEXT: '孤寂无垠，以笔为舟，织梦成海', // 欢迎文字，留空则不启用

  // 英雄区块导航
  PROXIO_HERO_ENABLE: true, // 开启英雄区
  PROXIO_HERO_TITLE_1: '将星辰大海的诗意与绮丽梦境相融。', // 英雄区文字
  PROXIO_HERO_TITLE_2: '想象与现实交织成璀璨星图', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  PROXIO_HERO_BUTTON_1_TEXT: '开始体验', // 英雄区按钮
  PROXIO_HERO_BUTTON_1_URL:
    'https://note.iglooblog.top/archive', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_TEXT: '在Github上关注', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_URL: 'https://github.com/passwordgloo', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github-mark.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
  PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/

  // 文章区块
  PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
  PROXIO_BLOG_TITLE: '博客',
  PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
  PROXIO_BLOG_TEXT_1: '我的最新动态',
  PROXIO_BLOG_AUTO_SHOW_COVER: false, // 首页博文区块是否默认显示文章主图；false 时保持悬浮显示主图的旧效果

  // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

  PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

  // 特性区块
  PROXIO_FEATURE_ENABLE: true, // 特性区块开关
  PROXIO_FEATURE_TITLE: '为什么选我',
  PROXIO_FEATURE_TEXT_1: '我能让你的笔记更好看，项目更好展示',
  PROXIO_FEATURE_TEXT_2: '基于Markdown语法，多种站点方案部署教程总有一款适合你',

  // 特性1
  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
  PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
  PROXIO_FEATURE_1_TITLE_1: '高效工作流程',
  PROXIO_FEATURE_1_TEXT_1:
    'AI时代，搭建基础框架与工作流，然后审阅AI给的答案',

  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
  PROXIO_FEATURE_2_ICON_IMG_URL: '',
  PROXIO_FEATURE_2_TITLE_1: '协作式流程',
  PROXIO_FEATURE_2_TEXT_1: '与你紧密合作，融合反馈意见，打造超越预期的设计',

  PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
  PROXIO_FEATURE_3_ICON_IMG_URL: '',
  PROXIO_FEATURE_3_TITLE_1: '细节把控',
  PROXIO_FEATURE_3_TEXT_1:
    '每一个元素美化，都经过深思熟虑考量',

  PROXIO_FEATURE_BUTTON_TEXT: '项目详情', // 按钮文字
  PROXIO_FEATURE_BUTTON_URL: 'https://core.iglooblog.top', // 按钮跳转

  // 首页兴趣区块
  PROXIO_CAREER_ENABLE: true, // 区块开关
  PROXIO_CAREER_TITLE: '兴趣',
  PROXIO_CAREER_TEXT: '以下是我的兴趣爱好',



  // 关于作者区块
  PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
  PROXIO_ABOUT_TITLE: '关于作者',
  PROXIO_ABOUT_TEXT_1: '会编程的设计师，双线互通，游刃有余。',
  PROXIO_ABOUT_TEXT_2:
    '在这里，万物重构于方寸之间，想象与现实交织成璀璨星图。用100%原创设计打破维度边界，让每个作品都成为穿越时空的绮梦之舟。',
  PROXIO_ABOUT_PHOTO_URL: '/avatar.png',
  PROXIO_ABOUT_KEY_1: '喜爱颜色',
  PROXIO_ABOUT_VAL_1: '天鹅蓝',
  PROXIO_ABOUT_KEY_2: '最爱水果',
  PROXIO_ABOUT_VAL_2: '西瓜🍉',
  PROXIO_ABOUT_KEY_3: '偶像歌手',
  PROXIO_ABOUT_VAL_3: '张杰💗',
  PROXIO_ABOUT_KEY_4: '累积字数',
  PROXIO_ABOUT_VAL_4: '凑字数中',

  PROXIO_ABOUT_BUTTON_URL: '/about',
  PROXIO_ABOUT_BUTTON_TEXT: '关于我',

  // 横向滚动文字
  PROXIO_BRANDS_ENABLE: true, // 滚动文字
  PROXIO_BRANDS: [
    'Web Design',
    'Logo Design',
    'Mobile App Design',
  ],

  PROXIO_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  // 页脚菜单
  PROXIO_FOOTER_LINKS: [
    {
      name: '我的项目',
      menus: [
        {
          title: '星海绮梦',
          href: 'https://core.iglooblog.top'
        },
        {
          title: '云帆导航',
          href: 'https://nav.iglooblog.top'
        }
      ]
    },
    {
      name: '文库百科',
      menus: [
        { 
          title: '万象维基',
          href: 'https://wiki.iglooblog.top' 
        },
        {
          title: '彗星法律',
          href: 'https://law.iglooblog.top'
        },
        {
          title: '听潮公考',
          href: 'https://tide.iglooblog.top'
        },
      ]
    },
    {
      name: '博客',
      menus: [
        {
          title: '及时雨博客',
          href: 'https://iglooblog.top'
        }
      ]
    },
    {
      name: '主题',
      menus: [
        { 
          title: '星月博客',
          href: 'https://star.iglooblog.top' 
        },
        {
          title: 'Typora主题',
          href: 'https://github.com/passwordgloo/Typora-foresee-theme'
        },
        {
          title: 'Anki主题',
          href: 'https://github.com/passwordgloo/anki-foresee'
        }
      ]
    }
  ],

  PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  // 404页面的提示语
  PROXIO_404_TITLE: '我们似乎找不到您要找的页面。',
  PROXIO_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  PROXIO_404_BACK: '回到主页',

  PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  PROXIO_POST_REDIRECT_URL: 'https://note.iglooblog.top', // 重定向域名
  PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
