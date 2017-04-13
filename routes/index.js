var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    currentNav: 'home',
    list: [
      {
        title: '你的兴趣能谋生吗？',
        summary: '你的兴趣能谋生吗？☽ 王 瑞摄影 | 肉肉ROME 01 读大学的时候，有个学金融专业的学弟，长得很帅，歌唱的好，他就是那种走在校园就会有一堆的女生偷偷拍照，窃喜着幻想成为...',
        source: 'http://www.jianshu.com/p/afc920134c96',
        sourceName: '简书',
        stats: {
          view: 194,
          comment: 10,
          love: 10
        },
        cover: 'http://upload-images.jianshu.io/upload_images/2890962-a3352ecead5fa371?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300'
      },
      {
        title: '对不起，我其实就是一条咸鱼',
        summary: '两个礼拜以前，我从原来的公司辞职，在没有找好下家没有退路的情况下我执意辞职，那个时候我觉于金钱与束缚，享受即将到来的孤独。 那...',
        source: 'http://www.jianshu.com/p/cc88ebb1051d',
        sourceName: '简书',
        stats: {
          view: 49,
          comment: 4,
          love: 2
        },
        cover: 'http://upload-images.jianshu.io/upload_images/2762413-c1a9d2cca53a323f.png?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300'
      },
      {
        title: '你的兴趣能谋生吗？',
        summary: '你的兴趣能谋生吗？☽ 王 瑞摄影 | 肉肉ROME 01 读大学的时候，有个学金融专业的学在校园就会有一堆的女生偷偷拍照，窃喜着幻想成为...',
        source: 'http://www.jianshu.com/p/afc920134c96',
        sourceName: '简书',
        stats: {
          view: 194,
          comment: 10,
          love: 10
        },
        cover: 'http://upload-images.jianshu.io/upload_images/2890962-a3352ecead5fa371?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300'
      },
      {
        title: '对不起，我其实就是一条咸鱼',
        summary: '两个礼拜以前，我从原来的公司辞职，在没有找好下家没有退路的情况下我执意辞职，那个时候我觉得自己像极了美国电影里的西部牛仔：形单影只，不屑于金钱与束缚，享受即将到来的孤独。 那...',
        source: 'http://www.jianshu.com/p/cc88ebb1051d',
        sourceName: '简书',
        stats: {
          view: 49,
          comment: 4,
          love: 2
        },
        cover: 'http://upload-images.jianshu.io/upload_images/2762413-c1a9d2cca53a323f.png?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300'
      },
      {
        title: '你的兴趣能谋生吗？',
        summary: '你的兴趣能谋生吗？☽ 王 瑞摄影 | 肉肉ROME 01 读大学的时候业的学弟，长得很帅，歌唱的好，他就是那种走在校园就会有一堆的女生偷偷拍照，窃喜着幻想成为...',
        source: 'http://www.jianshu.com/p/afc920134c96',
        sourceName: '简书',
        stats: {
          view: 194,
          comment: 10,
          love: 10
        },
        cover: 'http://upload-images.jianshu.io/upload_images/2890962-a3352ecead5fa371?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300'
      },
      {
        title: '对不起，我其实就是一条咸鱼',
        summary: '两个礼拜以前，我从原来的公司辞职，在没有找好下家没有退路的情况我觉得自己像极了美国电影里的西部牛仔：形单影只，不屑于金钱与束缚，享受即将到来的孤独。 那...',
        source: 'http://www.jianshu.com/p/cc88ebb1051d',
        sourceName: '简书',
        stats: {
          view: 49,
          comment: 4,
          love: 2
        },
        cover: 'http://upload-images.jianshu.io/upload_images/2762413-c1a9d2cca53a323f.png?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300'
      },
      {
        title: '对不起，我其实就是一条咸鱼',
        summary: '两个礼拜以前，我从原来的公司辞职，在没有找好下家没有退路的情况下我执意辞职，那个时候我觉得自己像极了美国电影里的西部牛仔：形单影只，不屑于金钱与束缚，享受即将到来的孤独。 那...',
        source: 'http://www.jianshu.com/p/cc88ebb1051d',
        sourceName: '简书',
        stats: {
          view: 49,
          comment: 4,
          love: 2
        },
        cover: 'http://upload-images.jianshu.io/upload_images/2762413-c1a9d2cca53a323f.png?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300'
      },
      {
        title: '你的兴趣能谋生吗？',
        summary: '你的兴趣能谋生吗？☽ 王 瑞摄影 | 肉肉ROME 01 读大学的时候业的学弟，长得很帅，歌唱的好，他就是那种走在校园就会有一堆的女生偷偷拍照，窃喜着幻想成为...',
        source: 'http://www.jianshu.com/p/afc920134c96',
        sourceName: '简书',
        stats: {
          view: 194,
          comment: 10,
          love: 10
        },
        cover: 'http://upload-images.jianshu.io/upload_images/2890962-a3352ecead5fa371?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300'
      },
      {
        title: '对不起，我其实就是一条咸鱼',
        summary: '两个礼拜以前，我从原来的公司辞职，在没有找好下家没有退路的情况我觉得自己像极了美国电影里的西部牛仔：形单影只，不屑于金钱与束缚，享受即将到来的孤独。 那...',
        source: 'http://www.jianshu.com/p/cc88ebb1051d',
        sourceName: '简书',
        stats: {
          view: 49,
          comment: 4,
          love: 2
        },
        cover: 'http://upload-images.jianshu.io/upload_images/2762413-c1a9d2cca53a323f.png?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300'
      },
    ]
  };
  await ctx.render('index', {
  });
})

router.get('/coming-soon', async function (ctx, next) {
  await ctx.render('coming-soon', {
    title: '即将到来'
  });
});

module.exports = router;
