var router = require('koa-router')();

router.prefix('/topic');

router.get('/', async function (ctx, next) {
  ctx.state.currentNav = 'topic';
  ctx.state.page = {
    title: '话题'
  };

  await ctx.render('topic', {

  });
});

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a meetups/bar response';
});

module.exports = router;
