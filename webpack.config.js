const $ = require('load-webpack-plugins')()
const path = require('path')

module.exports = {
  entry: { app: './src/app.js' },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    publicPath: ''
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader', options: { plugins: ['syntax-dynamic-import', 'dual-import'] } }]
      },
      {
        test: /\.css$/,
        use: $.ExtractCssChunksPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader' }]
        })
      }
    ]
  },
  plugins: [
    // new $.ExtractTextPlugin({ filename: '[name].[contenthash].css', allChunks: true }),
    new $.ExtractCssChunksPlugin({ filename: '[name]' }),
    new $.FlushCssChunksPlugin({ entryOnly: true }),
    new $.NamedModulesPlugin(),
    new $.HtmlPlugin()
  ]
}
