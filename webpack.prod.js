const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      }, {
        test: /\.s[ac]ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64]',
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      }, {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[contenthash].[ext]',
            },
          },
        ],
      }, {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name: '[contenthash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
