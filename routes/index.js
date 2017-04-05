var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
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
