const path = require('path')

module.exports = {
  entry: './src/index.js',  // 진입 파일 경로
  output: {
    filename: 'bundle.js',  // 번들된 파일 이름
    path: path.resolve(__dirname, 'public'),  // 번들 파일이 저장될 경로
  },
  module: {
    rules: [
      {
        test: /\.css$/,     // .css 파일을 처리하는 규칙
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: './public',       // dev server가 제공할 정적 파일 경로
    port: 3000
  },
  mode: 'development',       // 개발 모드로 설정
}