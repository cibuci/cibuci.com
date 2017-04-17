var router = require('koa-router')();

router.prefix('/pk');

router.get('/', async function (ctx, next) {
  ctx.state.currentNav = 'pk';
  ctx.state.page = {
    title: 'PK'
  };

  await ctx.render('pk', { layout: 'fluid' });
});

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response';
});

module.exports = router;
