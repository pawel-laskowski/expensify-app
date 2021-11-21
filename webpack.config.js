const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (env) => {
  const isProduction = env.production
  const CSSExtract = new MiniCssExtractPlugin({
    filename: "styles.css"
  })

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname,'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            "presets": [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            "plugins": [
              "@babel/plugin-proposal-class-properties", 
              "@babel/plugin-proposal-object-rest-spread"
            ]
          }
        }
      }, {
        test: /\.s?css$/,
        use: [
          {
						loader: MiniCssExtractPlugin.loader
					},
          {
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
          {
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
        ]
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true
    },
    mode: 'development'
  }
}
