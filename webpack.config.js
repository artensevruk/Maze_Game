const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry : "./src/index.js",
  output : {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8000,
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader" , "css-loader"]
      }
    ]
  }
}
