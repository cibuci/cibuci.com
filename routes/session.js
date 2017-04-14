var router = require('koa-router')();

router.prefix('/session');

router.get('/signin', async function (ctx, next) {
  await ctx.render('signin', {
    layout: 'single'
  });
});

router.get('/signup', async function (ctx, next) {
  await ctx.render('signup', {
    layout: 'single'
  });
});

module.exports = router;
