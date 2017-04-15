var router = require('koa-router')();

router.prefix('/post');

router.get('/', async function (ctx, next) {
  ctx.state.currentNav = 'post';
  ctx.state.page = {
    title: '文章'
  };

  await ctx.render('post', {

  });
});

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response';
});

module.exports = router;
