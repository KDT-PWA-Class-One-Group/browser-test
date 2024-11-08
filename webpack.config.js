const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',  // 진입 파일 경로
  output: {
    filename: 'bundle.js',  // 번들된 파일 이름
    path: path.resolve(__dirname, 'dist'),  // 번들 파일이 저장될 경로
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // js, jsx, ts, tsx 파일을 처리하는 규칙
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }], // `runtime: 'automatic'` 추가
              // 자동으로 import React from 'react'
              '@babel/preset-typescript', // TypeScript 지원을 위해 추가
            ]
          }
        }
      },
      {
        test: /\.css$/,     // .css 파일을 처리하는 규칙
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],  // .ts 파일과 .js 파일을 모듈로 해결
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 템플릿 HTML 파일 경로
      filename: 'index.html'
    })
  ],
  devServer: {
    // static: './dist',       // dev server가 제공할 정적 파일 경로
    static: path.resolve(__dirname, 'dist'), // 개발 서버 루트
    compress: true,
    port: 3000
  },
  mode: 'development',       // 개발 모드로 설정
}