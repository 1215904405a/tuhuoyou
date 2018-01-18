const webpack = require('webpack');

module.exports = {
  // devtool: "source-map",
  entry: "./src/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "webpack.app.js"
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    // new webpack.optimize.ModuleConcatenationPlugin(), //作用域提升（模块代码放一起）
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') })
  ]
}
