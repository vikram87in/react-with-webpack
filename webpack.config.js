const path = require('path');
const mode = process.env.NODE_ENV == 'production' ? 'production' : 'development';
module.exports = {
  mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
        /* without additional settings, it refers to the .babelrc. It also looks at the .browserslistrc file to see how much backward compatibility to provide*/
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'dist')
  },
  devtool: 'source-map'
}