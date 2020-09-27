const fs = require('fs');
const cluster = require('cluster');
const config = require('./app/config');
const child_process = require('child_process');

const start = Date.now();

// 热重启处理
let env = '';
process.argv.forEach((item) => {
    if (item.match(/--env=\w*/)) {
        env = item.split('=')[1];
    }
});

// 正式环境先安装依赖 方便运维部署
console.log(env);
if (env === 'prod') {
    child_process.execSync('yarn add colors@1.4.0', { stdio: ['pipe'] });
    const colors = require('colors/safe');

    // 停止所有进程
    try {
        console.log(colors.red('警告:开始停止you进程'));
        child_process.execSync('pm2 delete you');
    } catch (e) { } finally {
        console.log(colors.red('警告:已经停止you进程'));
    }

    // 由于运维上线是手动发布，这里做一个自动拉取并更新子模块
    try {
        console.info(colors.green('更新:更新工程'));
        child_process.execSync('git pull origin dev', {
            stdio: 'inherit',
        });
    } catch (e) {
        console.log(colors.red('警告:更新代码失败'));
    }

    if (fs.existsSync('./resources/cra-type-react')) {
        console.info(colors.green('前台:开始构建cra-type-react工程'));
        child_process.execSync('yarn build', {
            stdio: 'inherit',
            cwd: './resources/cra-type-react',
        });
    }

    console.info(colors.cyan('服务:安装node工程依赖包'));
    child_process.execSync('yarn install', {
        stdio: 'inherit',
    });

    // 正式环境采用PM2管理进程
    child_process.execSync('NODE_ENV=production pm2 start app/index.js --name=you -o /dev/null -e /dev/null -i ' + config.cluster, {
        stdio: 'inherit',
    });

    console.log(colors.green('发布完成，累计耗时:' + Math.round((Date.now() - start) / 1000) + 'S'));
}
// 开发环境分布式启动
else {
    // 设置主进程
    cluster.setupMaster({ exec: './app/index' });

    // 启动多进程
    //   var nums = require('os').cpus().length;
    for (var i = 0; i < 1; i++) {
        cluster.fork();
    }
}
