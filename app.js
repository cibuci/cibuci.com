const Koa = require('koa');
const app = new Koa();
const hbs = require('koa-hbs');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require('koa-generic-session');
const MongoStore = require('koa-generic-session-mongo');

const index = require('./routes/index');
const user = require('./routes/user');
const post = require('./routes/post');
const sign = require('./routes/sign');
const misc = require('./routes/misc');
const pk = require('./routes/pk');
const topic = require('./routes/topic');
const meetup = require('./routes/meetup');

// error handler
onerror(app);

// middlewares
app.use(bodyparser());
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(hbs.middleware({
  viewPath: __dirname + '/views',
  partialsPath: __dirname + '/views/partials',
  layoutsPath: __dirname + '/views/layouts',
  defaultLayout: 'default',
  templateOptions: {
    helpers: require('handlebars-helpers')()
  },
  disableCache: true
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// session
app.keys = ['keys', 'keykeys'];
app.use(session({
  store: new MongoStore({
    db: process.env.SESSION_DB_NAME
  })
}));

// insert some state for render
app.use(async (ctx, next) => {
  ctx.state = ctx.state || {};
  ctx.state.currentUser = ctx.session.user;

  await next();
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(user.routes(), user.allowedMethods());
app.use(post.routes(), post.allowedMethods());
app.use(meetup.routes(), meetup.allowedMethods());
app.use(sign.routes(), sign.allowedMethods());
app.use(misc.routes(), misc.allowedMethods());
app.use(pk.routes(), pk.allowedMethods());
app.use(topic.routes(), topic.allowedMethods());

module.exports = app;
