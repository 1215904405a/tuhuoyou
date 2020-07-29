const router = require('koa-router')();

// 模板
router.get('/home', async (ctx) => {
    let title = 'hi you';
    let arr = ['今天', '明天', '将来'];
    await ctx.render('home/index', {
       title: title,
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