const path = require('path')

module.exports = {
  entry: './scss/index.scss',
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]

  },
  watch: true
}


//loader 的执行顺序是从下到上的