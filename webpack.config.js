
// 把相对路径转换为绝对路径
let path = require('path')

module.exports = {
  // 开发模式
  mode: 'development',
  // 打包文件入口
  entry: './src/index.js',
  // 打包输出出口
  output: {
    // 打包后的文件名
    filename: 'bondel.js', 
    // 路径必须是个绝对路径, `__dirname` 当前目录下产生一个文件
    path: path.resolve(__dirname,'dist')
  }
}