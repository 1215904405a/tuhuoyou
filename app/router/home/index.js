const router = require('koa-router')();

// 首页模板
router.get('/', async (ctx) => {
    let title = 'hi you';
    let arr = [{
        name: 'react',
        link: '/react/#/reactlazy'
    }, {
        name: 'css',
        link: '/css'
    }, {
        name: 'brower',
        link: '/brower'
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