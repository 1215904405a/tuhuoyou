const _ = require('lodash');
const Koa = require('koa');
const path = require('path');
const util = require('util');
const crypto = require('crypto');
const colors = require('colors/safe');
const nunjucks = require('nunjucks');
const parser = require('koa-body');
const session = require('koa-session');
const send = require('koa-send');
const config = require('./config');

// init koa
const app = module.exports = new Koa();

// 识别内嵌浏览器
app.use(async (ctx, next) => {
  let agent = (ctx.headers['user-agent'] || '').toLowerCase();

  console.log(agent);
  await next();
});

app.use(async (ctx) => {
  ctx.body = 'hello 敬请期待web前端demo平台  有梦想就要去走下去！'
});

const port = config.port;
app.listen(port, function() {
  let decorator = new Array(40).fill('*').join('');
  console.info(colors.cyan(decorator));
  console.info(colors.green(`成功:服务已经启动, http://localhost:${port}`));
  console.info(colors.cyan(decorator));
});
