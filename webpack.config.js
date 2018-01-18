const webpack = require('webpack');

module.exports = {
  // devtool: "source-map",
  entry: "./src/entry.js",
  output: {
    path: __dirname + "/dist",
    filename: "webpack.bundle3.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
