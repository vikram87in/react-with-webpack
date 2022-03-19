const MCEP = require('mini-css-extract-plugin');
const miniSVG = require('mini-svg-data-uri');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const mode = process.env.NODE_ENV == 'production' ? 'production' : 'development';
module.exports = {
  mode,
  output: {
    clean: true // use this option and there is no need to clean dist manually or use clean-webpack-plugin
  },
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
          // 'style-loader',                    // 4.inject the css into the DOM (head probably)
          'css-loader',                         // 3. converts the css into js
          'postcss-loader',                      // 2. looks at the .browserslistrc file
          'sass-loader'                        // 1. compiles the scss into css
        ]
      },
      {
        test: /\.jpe?g$/,
        type: 'asset/resource',  // emits a file in dist.
        generator: {
          filename: 'images/[hash][ext][query]' // will emit in dist/images folder
        }
      },
      {
        test: /\.svg$/,
        type: 'asset/inline', // doesnt emit a file. writes it inline in the css file
        generator: {
          dataUrl: content => {
            content = content.toString();
            return miniSVG(content);
          }
        }
      },
      {
        test: /\.png$|\.gif$/,
        type: 'asset', // upto a particular limit, it acts as asset/inline. If file size bigger, acts as asset/resource
        generator: {
          filename: 'images/[hash][ext][query]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb; default is 8kb
          }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new MCEP(),
    new HtmlWebpackPlugin(
      {
        template: './src/index.html'
      }
    )
  ],
  devServer: {
    static: path.join(__dirname, 'dist')
  },
  devtool: 'source-map'
}