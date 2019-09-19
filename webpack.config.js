const path = require('path');

module.exports = {
  entry: "./src/javascripts/application.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },
  devtool: "sourcemap"
};
