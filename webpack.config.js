const path = require('path');

module.exports = {
  entry: './src/index.js',
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  // optimization: {
  //   minimize: false
  // },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
};
