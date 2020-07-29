const path = require('path');
let conf = {};

try {
  conf = require('../../config');
} catch (e) {
  console.log('使用生产环境');
}

module.exports = {
  // port
  port: conf.port || 80,

  // 接口信息
  api: { version: '1.2.0' },

  whost: conf.whost || 'https://api.qdingnet.com',

  cluster: conf.cluster || 1,

  // view folder
  views: 'templates',

  // watch tempalte change
  watch: conf.watch || false,

  // favicon
  favicon: path.resolve(__dirname, '../favicon.ico'),

  // assets file
  assets: conf.assets || path.join(__dirname, '../../assets'),

  // assets target
  target: 'dist',

  // log file
  logger: '/data/logs/mobile-sh/20',

  startMode: conf.startMode
};
