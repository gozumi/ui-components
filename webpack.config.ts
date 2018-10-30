/*tslint:disable:object-literal-sort-keys*/

import * as CleanPlugin from 'clean-webpack-plugin'
import * as CopyPlugin from 'copy-webpack-plugin'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
  mode: 'development',

  entry: {
    demo: './src/demo/index.tsx',
    lib: './src/index.ts'
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      utilities: path.resolve(__dirname, 'src/utilities')
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  output: {
    filename: 'index.[name].js',
    library: ['ui-components'],
    libraryTarget: 'umd',
    path: `${__dirname}/demo`
  },

  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/
      }
    ]
  },

  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 3333,
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanPlugin(['./demo']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/demo/index.html'
    }),
    new CopyPlugin([
      { from: './src/_typings/index.d.ts' }
    ])
  ]
}

export default config
