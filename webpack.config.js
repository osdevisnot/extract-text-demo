const $ = require('load-webpack-plugins')();

module.exports = {
  entry: { 'app': './src/app.js' },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, use: [{ loader: 'babel-loader' }] },
      {
        test: /\.css$/,
        use: $.ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader' }]
        })
      }
    ]
  },
  plugins: [
    new $.ExtractTextPlugin({ filename: '[name].[contenthash].css', allChunks: true }),
    new $.NamedModulesPlugin(),
  ]
}

