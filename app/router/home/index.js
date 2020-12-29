const router = require('koa-router')();

// 首页模板
router.get('/', async (ctx) => {
    let title = 'hi you';
    let arr = [{
        name: 'react相关',
        link: '/cra1/#/react'
    }, {
        name: 'node基础框架koa服务配置ssl',
        link: '/cra1/#nodessl'
    }, {
        name: 'commonjs',
        link: '/cra1/#commonjs'
    }, {
        name: 'pm2',
        link: '/cra1/#pm2'
    }, {
        name: 'refereandhost',
        link: '/cra1/#refereandhost'
    }, {
        name: 'css',
        link: '/'
    }, {
        name: 'brower',
        link: '/'
    }];
    await ctx.render('home/index', {
        //    title: title,
        arr: arr
    })
})

// 接口
router.get('/api/home', async (ctx) => {
    console.log(232323232)
    ctx.body = {
        test: 'wy'
    }
})
const obj = {
    '张杰': '还未开始',
    '周林': '还未开始',
    '王永': '还未开始'
};
// 抽检
router.get('/api/luckdraw', async (ctx) => {
    console.log(ctx.request.query.name);
    console.log(ctx.request.query.num);
    if (!obj[ctx.request.query.name]) {
        ctx.body = { message: '姓名不在抽检范围', obj }
        return;
    }
    if (obj[ctx.request.query.name] !== '还未开始') {
        ctx.body = { message: '已经抽签', obj }
        return;
    }
    obj[ctx.request.query.name] = ctx.request.query.num;
    ctx.body = obj
})


module.exports = router;