module.exports = {
  mode: 'development',
  entry: './test/index.js',
  output: {
    path: require('path').resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].[ext]' }},
          { loader: require('path').resolve('./lib/index') }
        ]
      }
    ]
  }
}
