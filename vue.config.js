const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,
  lintOnSave:false, //关闭语法检查
})
// module.exports = {
//   lintOnSave:false, //关闭语法检查
//   publicPath: './',
// }