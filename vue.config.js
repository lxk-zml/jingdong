const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  /*configureWebpack:{
    resolve:{
      alias:{
        '@':resolve('src'),
        'components':resolve('src/components'),
        'assets':resolve('src/assets'),
        'config':resolve('src/config')
      }
    },
    plugins:[

    ]
  }*/
  chainWebpack:(config)=>{
    //只会在生产环境（上线）时进行按需加载，本地开发就不需要按需加载。
    if(process.env.NODE_ENV=='production'){
      //生产环境
      new LodashModuleReplacementPlugin()
    }
    config.resolve.alias
      .set('@',resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('components',resolve('src/components'))
      .set('config',resolve('src/config'))
    ;
  }
}
