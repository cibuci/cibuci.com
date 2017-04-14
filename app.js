const Koa = require('koa');
const app = new Koa();
const hbs = require('koa-hbs');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('./routes/index');
const users = require('./routes/users');
const articles = require('./routes/articles');
const meetups = require('./routes/meetups');
const session = require('./routes/session');
const misc = require('./routes/misc');

// error handler
onerror(app);

// middlewares
app.use(bodyparser);
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

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(articles.routes(), articles.allowedMethods());
app.use(meetups.routes(), meetups.allowedMethods());
app.use(session.routes(), session.allowedMethods());
app.use(misc.routes(), misc.allowedMethods());

module.exports = app;
