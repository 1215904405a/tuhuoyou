export default {
  input: 'src/app.js',
  output: [{
    file: 'dist/app_bundle.js',
    format: 'iife', //Type of output (amd, cjs, es, iife, umd)
    // amd - 输出成AMD模块规则， RequireJS可以用
    // cjs - CommonJS规则， 适合Node， Browserify， Webpack 等
    // es - 默认值， 不改变代码
    // iife - 输出自执行函数， 最适合导入html中的script标签， 且代码更小
    // umd - 通用模式， amd,
    // cjs,
    // iife都能用
  }]
}

//提示：
//rollup main.js --format iife --output bundle.js
//
