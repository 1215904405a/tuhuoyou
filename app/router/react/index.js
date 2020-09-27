const send = require('koa-send');
const router = require('koa-router')();

// react相关
router.get('/react', async (ctx) => {
    return await send(ctx, `/resources/cra-type-react/build/index.html`, {
        root: './',
        maxage: 365 * 24 * 60 * 60,
    });
})

module.exports = router;