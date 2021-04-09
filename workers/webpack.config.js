// eslint-disable-next-line import/no-nodejs-modules
const path = require('path');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: './src/index.ts',
  mode,
  module: {
    rules: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        test: /\.tsx?$/,
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  output: {
    filename: 'worker.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [],
  },
};
