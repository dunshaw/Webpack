# Webpack 4

```
webpack需要设置mode：development和production

针对开发模式的特性：
·浏览器调试工具
·注释、开发阶段的提示日志
·快速和优化的增量构建机制

针对生产模式的特性：
·开启所有的优化代码
·更小的bundle大小
·去除只在开发模式运行的代码
·scope hosting和tree-shaking

```

## Basics 1 安装和基本使用
```
安装  npm i install webpack-cli -g

基本使用  webpack 输入文件.js 输出文件.js   (默认生产模式)
        webpack -- development 输入文件.js 输出文件.js

0CGS:默认入口文件是src文件夹index.jx；出口文件是dist文件夹main；(不需要配置)


```

## Basics 2 出口入口配置
```
webpack.config.js

const path = require('path');

module.exports = {
  entry:'./input.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'output.bundle.js'
  }
};


```

## Basics 3.1 加载器
```
Loaders :对源文件进行预处理，生成浏览器能够识别的js文件。
种类 {files,json,transpiling,templating,styling,linting&&testing,frameworks}

(1) url-loader||file-loader
    npm init -y
    npm i url-loader -S   (安装完同时记录到package.json里面)
    npm i file-loader -S

(2) babel-loader
    npm install -D babel-loader @babel/core @babel/preset-env webpack

(3) sass-loader
    npm install sass-loader node-sass webpack --save-dev
    npm install style-loader css-loader --save-dev
```
## Basics 3.2 插件
```
Plugins

(1) MiniCssExtractPlugin
    --  将css文件分离出bundle.js，生成独立的css文件
        npm install --save-dev mini-css-extract-plugin
        const MiniCssExtractPlugin = require('mini-css-extract-plugin');

(2) DefinePlugin
    --  用来做定义的;
    ::  SERVICE_URL

(3) HtmlWebpackPlugin
    --  将我们打包的js/css文件放入到html文件中
        plugins: [new HtmlWebpackPlugin()]
    定义html:
        new HtmlWebpackPlugin({
          title: 'Good Morning SC',
          filename: 'index.html',
          template: 'template.html'
        }),
```

## Basics 3.3 热替换
```
（1）安装DevServer
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000
    },
    "scripts": {
      "start":"webpack-dev-server"
    },
```

## Basics 4 实战(vue)
```

```