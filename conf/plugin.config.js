/**
 * 一些插件
 */
module.exports = {
  // 网站全文搜索
  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || U1W8OU7EZK, // 在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || 608bf674fee5c37c02903554e99ab45d, // 管理后台的KEY，不要暴露在代码中，在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY:
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || c0f818e3c341fc1e1c22b063069f2b73, // 客户端搜索用的KEY
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || notionnext, // 在Algolia中创建一个index用作数据库

  // AI 文章摘要生成

  AI_SUMMARY_API: process.env.AI_SUMMARY_API || '',
  AI_SUMMARY_KEY: process.env.AI_SUMMARY_KEY || '',
  AI_SUMMARY_CACHE_TIME: process.env.AI_SUMMARY_CACHE_TIME || 1800, // 缓存时间，单位秒
  AI_SUMMARY_WORD_LIMIT: process.env.AI_SUMMARY_WORD_LIMIT || 1000,

  //   ********挂件组件相关********
  // AI 文章摘要生成 @see https://docs_s.tianli0.top/
  TianliGPT_CSS:
    process.env.NEXT_PUBLIC_TIANLI_GPT_CSS ||
    'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.css',
  TianliGPT_JS:
    process.env.NEXT_PUBLIC_TIANLI_GPT_JS ||
    'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.js',
  TianliGPT_KEY: process.env.NEXT_PUBLIC_TIANLI_GPT_KEY || '',

  // 邮件
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // 开启mailichimp邮件订阅 客户列表ID ，具体使用方法参阅文档
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null // 开启mailichimp邮件订阅 APIkey

    // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || true, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY: process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_SHOW_LRC: process.env.NEXT_PUBLIC_MUSIC_PLAYER_SHOW_LRC || false, // 是否展示歌词（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL: process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL || 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: 'list', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [ // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
      name: '风を共に舞う気持ち',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
      cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '王都グランセル',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || true, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）
  
}
