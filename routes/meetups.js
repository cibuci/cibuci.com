var router = require('koa-router')();

router.prefix('/meetups');

router.get('/', async function (ctx, next) {
  ctx.state = {
    currentNav: 'meetups',
    page: {
      title: '聚会'
    }
  };

  await ctx.render('meetups', {

  });
});

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a meetups/bar response';
});

module.exports = router;
