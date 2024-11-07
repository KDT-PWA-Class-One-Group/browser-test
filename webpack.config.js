const path = require('path')

module.exports = {
  entry: './src/index.ts',  // 진입 파일 경로
  output: {
    filename: 'bundle.js',  // 번들된 파일 이름
    path: path.resolve(__dirname, 'dist'),  // 번들 파일이 저장될 경로
  },
  module: {
    rules: [
      {
        test: /\.ts$/,  // .ts 파일을 처리
        use: 'ts-loader',  // ts-loader를 사용하여 TypeScript 파일을 자바스크립트로 변환
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,     // .css 파일을 처리하는 규칙
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],  // .ts 파일과 .js 파일을 모듈로 해결
  },
  devServer: {
    static: './dist',       // dev server가 제공할 정적 파일 경로
    port: 3000
  },
  mode: 'development',       // 개발 모드로 설정
}