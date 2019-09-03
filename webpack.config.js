// 把相对路径转换为绝对路径
let path = require('path')
// 初始化 html-webpack-plugin
let HTMLWebpackPlugin = require('html-webpack-plugin')
// 初始化 mini-css-extract-plugin
let MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // 开发模式 development，生产模式 production
  mode: 'development',
  // 打包文件入口
  entry: './src/index.js',
  // 打包输出出口
  output: {
    // 打包后的文件名,添加 hash ,每次打包后的文件名都不一样，放在出现缓存问题
    // :8 表示 哈希值只取8位
    filename: 'bondel.[hash:8].js', 
    // 路径必须是个绝对路径, `__dirname` 当前目录下产生一个文件
    path: path.resolve(__dirname,'dist')
  },
  // 开发服务配置
  devServer: {
    // 端口号
    port: 3000,
    // 显示进度条
    progress: true,
    // 默认指定文件 index.html
    contentBase: './dist/',
    // 是否压缩
    compress: true
  },
  // 插件集合，所有的 webpack 插件都存放在这里
  plugins: [
    new HTMLWebpackPlugin ({
      // html模板文件
      template: './src/index.html',
      // 打包后的文件名
      filename: 'index.html',
      // 压缩配置
      minify: {
        // 删除属性引用（删除双引号）
        // removeAttributeQuotes: true,
        // 折叠空白（压缩成一行）
        // collapseWhitespace: true
      },
      // 如果webpack为所有包含的脚本和CSS文件附加唯一的编译哈希。这对缓存清除很有用
      hash: true
    }),
    new MiniCSSExtractPlugin ({
      // 整合CSS之后的文件名
      filename: 'main.css'
    })
  ],
  // 模块
  module: {
    // 规则
    rules: [
      {
        // 处理 .css 文件的规则
        test: /\.css$/,
        // 使用 loader
        // loader 可以是一个对象，也可以是一个字符串，多个 loader 用数组表示
        // loader的顺序是：到左 <- 从右， 从下 -> 上 的执行方式
        // style-loader: 把 CSS 插入到 head 中
        // css-loader: 解析 @improt 这种语法
        use: [
          MiniCSSExtractPlugin.loader, // 整合CSS
          'css-loader', // 解析 @inport
          'postcss-loader', // 添加内核前缀
        ]
      },
      {
        // 处理 .less 文件的规则
        test: /\.less$/,
        use: [
          // 'style-loader', // 解析输出到 head
          MiniCSSExtractPlugin.loader,  // 整合CSS
          'css-loader', // 解析 @inport
          'postcss-loader', // 添加内核前缀
          'less-loader' // 解析 less
        ]
      }
    ]
  }
}