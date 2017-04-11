var router = require('koa-router')();

router.prefix('/events');

router.get('/', async function (ctx, next) {
  ctx.state = {
    currentNav: 'events',
    page: {
      title: '活动'
    }
  };

  await ctx.render('events', {

  });
});

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response';
});

module.exports = router;
