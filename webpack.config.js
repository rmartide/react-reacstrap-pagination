const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./dev/index.js",
  output: {
    path: path.resolve(__dirname, "dev"),
    filename: "webpack.bundle.js"
  },
  mode: "development",
  devServer: {
    contentBase: "./dev"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css|scss|sass$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./dev/index.html" })]
};
