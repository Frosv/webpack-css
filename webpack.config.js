const path = require('path');//路径文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');//输入css文件
const HtmlWebpackPlugin = require('html-webpack-plugin');//html

const config = {
  entry: './src/entry.js',//文件入口
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')//生成地址
  },
  devServer: {
    compress: true, //使用gzip压缩
    port: 8080, //端口号
    hot: true //热处理
  },
  module: {
    rules: [{
      test: /\.css$/, //匹配css
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        loader: 'css-loader?id=css'
      })
    }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({ //html注入文件插件
      filename: 'index.html', //文件名
      template: './src/index.html', //渲染模板
    }),
    new ExtractTextPlugin('styles.css')
  ]
};

module.exports = config;