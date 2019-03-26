function HtmlScriptPlugin(options) {
this.options = options;
}

HtmlScriptPlugin.prototype.apply = function(compiler) {
    var paths = this.options.paths;
    compiler.plugin('compilation', function(compilation, options) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
            for (var i = paths.length - 1; i >= 0; i--) {
                htmlPluginData.assets.js.unshift(paths[i]);
            }

          //  console.log("hahah="+ JSON.stringify(htmlPluginData.assets.js));
            callback(null, htmlPluginData);
        });
    });
};

module.exports = HtmlScriptPlugin;