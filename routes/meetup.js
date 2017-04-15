var router = require('koa-router')();

router.prefix('/meetup');

router.get('/', async function (ctx, next) {
  ctx.state = {
    currentNav: 'meetup',
    page: {
      title: '聚会'
    }
  };

  await ctx.render('meetup', {

  });
});

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a meetups/bar response';
});

module.exports = router;
