var router = require('koa-router')();

router.get('/about', async function (ctx, next) {
  await ctx.render('about', {
    title: '关于我们'
  });
});

router.get('/join', async function (ctx, next) {
  await ctx.render('join', {
    title: '加入我们'
  });
});

router.get('/feedback', async function (ctx, next) {
  await ctx.render('feedback', {
    title: '意见反馈'
  });
});

module.exports = router;
