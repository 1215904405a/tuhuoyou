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
app.use(views(__dirname+'/template', { extension: 'ejs' }));

// 识别内嵌浏览器
app.use(async (ctx, next) => {
  let agent = (ctx.headers['user-agent'] || '').toLowerCase();
  console.log('获取浏览器信息');
  console.log(agent);
  await next();
});

// 返回静态资源
app.use(async(ctx, next) => {
    if (ctx.path.startsWith('/assets/')) {
      return await send(ctx, ctx.path, {
        root: './',
        maxage: 365 * 24 * 60 * 60,
      });
    }
    await next();
});

// parse form
app.use(parser({
    // strict: false,
    jsonLimit: 1024 * 1024 * 2, // 2MB
    formLimit: 1024 * 1024 * 2, // 2MB
    textLimit: 1024 * 1024 * 2, // 2MB
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, '../upload'),
    }
  }));


const rt = require('./router/home'); // 多了可以脚本加载扩展

app.use(rt.routes())//启动路由
app.use(router.allowedMethods()) 

app.listen(port, function() {
  let decorator = new Array(40).fill('*').join('');
  console.info(colors.cyan(decorator));
  console.info(colors.green(`成功:服务已经启动, http://localhost:${port}`));
  console.info(colors.cyan(decorator));
});
