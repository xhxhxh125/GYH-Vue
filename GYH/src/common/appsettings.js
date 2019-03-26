// version: 1.0.0
// appsettings.js

var appsettings = {}
if (process.env.NODE_ENV == "production") {
    appsettings = require('./appsettings-pro')
} else {
    appsettings = require('./appsettings-dev')
}

// 核心部分，插件的具体逻辑均在此实现
appsettings.install = function (Vue) {
    if (appsettings.installed) return;
    appsettings.installed = true;
    Vue.prototype.appsettings = appsettings
}
module.exports = appsettings