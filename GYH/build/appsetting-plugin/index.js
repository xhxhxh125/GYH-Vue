var fs = require('fs');
var path = require('path');
function AppsettingPlugin(options) {
  // Setup the plugin instance with options...
  this.options=options;
 
}

AppsettingPlugin.prototype.apply = function(compiler) {
  var self=this;

  compiler.plugin('emit', function(compilation, callback) {

//      var filename = self.options.filename;

// console.log("path="+filename);

//    if (path.resolve(filename) === path.normalize(filename)) {
//      self.options.filename = path.relative(compiler.options.output.path, filename);
//    }
//       //get file content 
//       var content=fs.readFileSync(filename);
//       content=content.replace("appsetting","aaaaaaaaaaaaaaaaa");
//     console.log('Hello World!'); 

//      compilation.assets[filename] = {
//       source: function() {
//         return content;
//       },
//       size: function() {
//         return content.length;
//       }
//     };

  });
};

module.exports = AppsettingPlugin;