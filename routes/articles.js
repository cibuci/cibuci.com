var router = require('koa-router')();

router.prefix('/articles');

router.get('/', async function (ctx, next) {
  ctx.state = {
    currentNav: 'articles',
    page: {
      title: '文章'
    }
  };

  await ctx.render('articles', {

  });
});

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response';
});

module.exports = router;
