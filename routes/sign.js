const User = require('../models/user');
const debug = require('debug')('sign');

var router = require('koa-router')();

router.get('/signin', async function (ctx) {
  ctx.session._signinReferer = ctx.request.headers.referer;
  debug(`referer when signin: ${ctx.session._signinReferer}`);
  await ctx.render('signin', { layout: 'single' });
});

router.get('/signup', async function (ctx) {
  await ctx.render('signup', { layout: 'single' });
});

router.post('/signin', async function (ctx, next) {
  var body = ctx.request.body;

  const query = User.where({ email: body.email });
  let user = false;

  try {
    user = await query.findOne({ email: body.email });
  } catch (e) {
    console.log(e);
  } finally {

  }

  if(!user) {

  }

  // Compare password with the one within the DB
  const isMatch = user.tryPassword(body.password);

  if(isMatch) {
    debug(`LOL: user(${user.email}) sign suesscess.`);

    

    var refer = ctx.session._signinReferer || '/';
    ctx.redirect(refer);

  } else {
    console.log('T.T');
    ctx.body = 'T.T';
  }

  await next();
});

router.post('/signup', async function (ctx, next) {
  var body = ctx.request.body;

  var user = new User(body);
  try {
    await user.save();
  } catch(err) {
    console.log(err);
  }

  ctx.redirect('/');
});

module.exports = router;
