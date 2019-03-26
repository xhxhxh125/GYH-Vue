var path = require('path');
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var glob = require('glob')
var appsettings = require('../src/common/appsettings')

//var appsettingplugin = require('./appsetting-plugin')

var HtmlScriptPlugin=require('./html-script-plugin');

//console.log("apiroot="+JSON.stringify(appsettings.dev.apiroot));
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

var jsappsettings={};
Object.keys(appsettings).forEach(function (key) {
  jsappsettings["appsettings."+key] = JSON.stringify(appsettings[key]);
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders:utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin(merge(jsappsettings,{
      'process.env': config.dev.env
    //  'APIROOT': JSON.stringify(appsettings.dev.apiroot)
    //  apiroot: JSON.stringify(appsettings.dev.apiroot)
    })),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
})

function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;
  if (typeof (globPath) != "object") {
    globPath = [globPath]
  }
  globPath.forEach((itemPath) => {
    
    glob.sync(itemPath).forEach(function (entry) {
      basename = path.basename(entry, path.extname(entry));
      if (entry.split('/').length > 5) {
        //tmp = entry.split('/').splice(-3);
        tmp = entry.split('/');
        tmp.splice(0,3);
        tmp = tmp.splice(0,tmp.length-2);
        //pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
        pathname = tmp.join("/") + '/' + basename; // 正确输出js和html的路径
        entries[pathname] = entry;
       // console.log("entry1="+entry);
      } else {
      //  console.log("entry2="+entry);
        entries[basename] = entry;
      }
    });
  });
  return entries;
}

var pages = getEntry(['./src/module/*.html','./src/module/**/*.html','./src/module/**/**/*.html','./src/module/**/**/**/*.html','./src/module/**/**/**/**/*.html','./src/module/**/**/**/**/**/*.html']);



module.exports.plugins.push(
  new HtmlScriptPlugin({
        paths: [appsettings.gyhjsPrefix+ "gyh-f.js",appsettings.gyhjsPrefix+"custom.js?"+appsettings.jsVertion]
    }));


for (var pathname in pages) {
  // 配置生成的html文件，定义路径等
 // console.log("path="+pathname);
  //index 需要放到生产根目录下
  var conf = {
    filename: pathname=="module/index"?("index.html"):(pathname + '.html'),
    template: pages[pathname],   // 模板路径
    inject: true,              // js插入位置
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'

  };

  if (pathname in module.exports.entry) {
    conf.chunks = ['manifest', 'vendor', pathname];
    conf.hash = true;
  }

  //静态资源路径：wanli
  {
  conf.appsettings=appsettings;
  }




  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
//module.exports.plugins.push(new appsettingplugin(conf));
  


}
