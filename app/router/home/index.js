const router = require('koa-router')();

// 首页模板
router.get('/', async (ctx) => {
    let title = 'hi you';
    let arr = [{
        name: 'react-lazy',
        link: '/react/#/reactlazy'
    }, {
        name: 'node基础框架koa服务配置ssl',
        link: '/react/#nodessl'
    }, {
        name: 'react-context',
        link: '/react/#reactcontext'
    }, {
        name: 'commonjs',
        link: '/react/#commonjs'
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

module.exports = router;