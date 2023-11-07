const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  experiments: {
    outputModule: true,
  },
  entry: './lib/index.ts',
  output: {
    filename: 'esm.js',
    libraryTarget: 'module',
    path: path.resolve(__dirname, 'dist'),
    module: true, // 声明输出文件为ES Module
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
}
