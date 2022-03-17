const MCEP = require('mini-css-extract-plugin');
const path = require('path');
const mode = process.env.NODE_ENV == 'production' ? 'production' : 'development';
module.exports = {
  mode,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
        /* without additional settings, it refers to the .babelrc. It also looks at the .browserslistrc file to see how much backward compatibility to provide*/
      },
      {
        test: /\.(s[ac]|c)ss$/,
        exclude: /node_modules/,
        use: [
          // The order below is important. Works in the reverse order.
          MCEP.loader,          //3. creates a separate css file instead of injecting into the DOM. Either use this or style-loader, but not both.
          // 'style-loader',                    // 3.inject the css into the DOM (head probably)
          'css-loader',                         // 2. converts the css into js
          'postcss-loader',                      // looks at the .browserslistrc file
          'sass-loader'                        // 1. compiles the scss into css
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [new MCEP()],
  devServer: {
    static: path.join(__dirname, 'dist')
  },
  devtool: 'source-map'
}