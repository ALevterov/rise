const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$|css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
}
