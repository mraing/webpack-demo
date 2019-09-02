# 初始化 webpack

```JS
npm init -y
npm install webpack webpack-cli --save-dev
```

# 打包

```JS
npx webpack
```

然后就会自动生成一个名为 `dist` 的文件夹，这里面的就是打包之后的文件


# module.exports 配置详情

**默认配置的文件的名字是 `webpack.config.js`**

+ mode

  告知 webpack 使用相应模式的内置优化。
  
  `production` 生成环境，`development` 开发环境.
  
  如果不进行设置，那么默认就是采用生产环境模式。

+ `entry`
  输入：入口文件，写文件路径
  

+ `output`
  输出：打包之后的文件配置

  + `filename` 打包后的文件名
  
  + `path` 打包后的文件路径, **路径必须是绝对路径**
 
      ```JS
        // 将相对路径转为绝对路口
        let path = require('path')

        path: path.resolve('dist')
      ```

      