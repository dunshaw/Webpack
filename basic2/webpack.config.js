const path = require('path');


// 基本配置
// module.exports = {
//   entry:'./input.js',    //当前入口文件
//   output:{
//     path:path.resolve(__dirname,'dist'),
//     filename:'output.bundle.js'
//   }
// };


// 多种配置
module.exports = {
  entry:{
    hemo:'./home.js',
    about:'./about.js',
    other:'./other.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].bundle.js'
  },
  // mode:'development',
  mode:'production'
  
};