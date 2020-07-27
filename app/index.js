const _ = require('lodash');
const Koa = require('koa');
const path = require('path');
const util = require('util');
const crypto = require('crypto'); // 加密模块
const colors = require('colors/safe');
const ejs = require('ejs');
const parser = require('koa-body');
const session = require('koa-session');
const send = require('koa-send');
const views =require('koa-views')
const router = require('koa-router')();
const config = require('./config');

// init koa
const app = module.exports = new Koa();
const port = config.port;

// 加载ejs模板
app.use(views(__dirname+'/views', { extension: 'ejs' }));

router.get('/', async (ctx) => {
    let title = 'hi you';
    let arr = ['今天', '明天', '将来'];
    await ctx.render('index', {
       title: title,
       arr: arr
    })
  })

// 识别内嵌浏览器
app.use(async (ctx, next) => {
  let agent = (ctx.headers['user-agent'] || '').toLowerCase();
  console.log('1212121212');
  console.log(agent);
  await next();
});

// app.use(async (ctx) => {
//   ctx.body = 'hello 敬请期待web前端demo平台  有梦想就要去走下去！'
// });

app.use(router.routes())//启动路由
app.use(router.allowedMethods()) 

app.listen(port, function() {
  let decorator = new Array(40).fill('*').join('');
  console.info(colors.cyan(decorator));
  console.info(colors.green(`成功:服务已经启动, http://localhost:${port}`));
  console.info(colors.cyan(decorator));
});
