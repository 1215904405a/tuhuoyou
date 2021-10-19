const _ = require('lodash');
const fs = require('fs');
const Koa = require('koa');
const path = require('path');
const util = require('util');
const crypto = require('crypto'); // 加密模块
const colors = require('colors/safe');
const ejs = require('ejs');
const parser = require('koa-body');
const session = require('koa-session');
const send = require('koa-send');
const views = require('koa-views')
const router = require('koa-router')();
const sslify = require('koa-sslify').default; // http强制HTTPS
const https = require('https'); // node内置https server
const config = require('./config');
const utils = require('./utils')

// init koa
const app = module.exports = new Koa();
const port = config.port;

// 自己生成ssl
// app.use(sslify())

// 加载ejs模板
app.use(views(__dirname + '/template', { extension: 'ejs' }));

// 识别内嵌浏览器
app.use(async (ctx, next) => {
    let agent = (ctx.headers['user-agent'] || '').toLowerCase();
    // console.log('获取浏览器信息');
    console.log(agent);
    await next();
});

// 返回静态资源
app.use(async (ctx, next) => {
    if (ctx.path.startsWith('/assets/') || ctx.path.startsWith('/resources/')) {
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
const rt2 = require('./router/react');

app.use(rt.routes()) // 启动路由
app.use(rt2.routes())
app.use(router.allowedMethods())

const options = {
    /*
        openssl genrsa -out private_key.pem 1024
        参数解释：genrsa -- 用RSA算法， 
        private_key.pem导出的私钥名称
    */
    // key: fs.readFileSync('./private_key.pem'),  // 私钥文件路径 自己命令生成
    // key: fs.readFileSync('./certificate/4564894_www.tuhuoyou.com.key'), // 阿里云购买
    key: fs.readFileSync('./certificate/6284402_www.tuhuoyou.com.key'),

    /*
        openssl req -new -out ca-req.csr -key private_key.pem
        参数解释：ca-req.csr -- 证书请求名称， 
        private_key.pem前面生成的传输私钥的名称
        openssl x509 -req -in ca-req.csr -out ca-cert.pem -signkey private_key.pem -days 3650
    */
    // cert: fs.readFileSync('./.pem')  // 证书文件路径 自己生成
    // cert: fs.readFileSync('./certificate/4564894_www.tuhuoyou.com.pem') // 阿里云购买
    cert: fs.readFileSync('./certificate/6284402_www.tuhuoyou.com.pem')
};

https.createServer(options, app.callback()).listen(port, () => {
    const decorator = new Array(40).fill('*').join('');
    console.info(colors.cyan(decorator));
    console.info(colors.green(`成功:服务已经启动, https://localhost:${port}`));
    console.info(colors.cyan(decorator));
});

// app.listen(port, function () {
//     let decorator = new Array(40).fill('*').join('');
//     console.info(colors.cyan(decorator));
//     console.info(colors.green(`成功:服务已经启动, http://localhost:${port}`));
//     console.info(colors.cyan(decorator));
// });
