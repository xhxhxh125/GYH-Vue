(function ($) {
    //首先备份下jquery的ajax方法  
    var _ajax = $.ajax;
    //重写jquery的ajax方法  
    $.ajax = function (opt) {
        opt = opt || {};
        opt.data = opt.data || {};
        //var tokencookie=this.getCookie("usertoken");
        // var tokencookie = window.localStorage.getItem("usertoken");
        // opt.data.token = (tokencookie==null||tokencookie.length==0)?"NULL":tokencookie;

        //备份opt中error和success方法  
        var fn = {
            error: function (XMLHttpRequest, textStatus, errorThrown) {},
            success: function (data, textStatus) {}
        }
        if (opt.error) {
            fn.error = opt.error;
        }
        if (opt.success) {
            fn.success = opt.success;
        }
        //扩展增强处理  
        var _opt = $.extend(opt, {
            success: function (data, textStatus) {
                //成功回调方法增强处理 
                try {
                    data = JSON.parse(data) || {};
                } catch (e) {
                    var obj = data;
                    if (typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length) {
                        data = (data) || {};
                    }
                }

                if (data.status == 9999) {
                    window.location.replace(appsettings.login_url + encodeURIComponent(window.location.href));
                    // window.location.replace(appsettings.login_portal_root+"com/login.html?ref="+encodeURIComponent(window.location.href));
                    //App.ToLogin();

                }
                if (data != null && data.status == 0) {
                    if (data.data != null && data.data.token != null && data.data.token.length > 0) {
                        window.localStorage.setItem("token", data.data.token);
                    }
                }
                fn.success(data, textStatus);
            }
        });
        return _ajax(_opt);

    };


    $.getUrlParam = function (name, ignore_null) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        var val = null;
        if (r != null) val = decodeURIComponent(r[2]);
        if (ignore_null === true && val != null && val != undefined && (val.toUpperCase() === 'NULL' || val.toUpperCase() == 'UNDEFINED')) {
            return null;
        }
        return val;
        // if (r!=null) return val; return null; //返回参数值
    };

    $.setUrlParam = function (key, value) {
        var href = window.location.href;
        var ps = href.split("?");
        var newurl = href;
        if (ps.length > 1) {
            if (href.indexOf("?" + key + "=") > 0) {
                var reg = new RegExp(key + "=([^&]*)");
                newurl = ps[0] + "?" + key + "=" + encodeURIComponent(value) + ps[1].replace(reg, "");
            } else if (ps[1].indexOf("&" + key + "=") > 0) {
                var reg = new RegExp("&" + key + "=([^&]*)");
                newurl = ps[0] + "?" + ps[1].replace(reg, "&" + key + "=" + encodeURIComponent(value));
            } else {
                newurl = newurl + (newurl.indexOf(".html?") > 0 ? "&" : "?") + key + "=" + encodeURIComponent(value);
            }
        } else {
            newurl = newurl + "?" + key + "=" + encodeURIComponent(value);
        }
        window.history.pushState(null, document.title, newurl);
    };

    $.setCookie = function (c_name, value, expiredays) {
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = c_name + "=" + encodeURIComponent(value) +
            ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
    };

    $.getCookie = function (c_name) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
                var c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length
                return decodeURIComponent(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    };

    Array.prototype.removeByKey = function (key, value) {
        if (this != null && this != undefined && this.length > 0) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] instanceof Object) {
                    if (this[i][key] === value) {
                        this.splice(i, 1);
                        i--;
                    }
                }
            }
        }
    };

    Array.prototype.findByKey = function (key, value) {
        if (this != null && this != undefined && this.length > 0) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] instanceof Object) {
                    if (this[i][key] === value) {
                        return this[i];
                    }
                }
            }
        }
        return null;
    };

})($);



(function ($) {
    $.setCookie = function (name, value, time) {
        var strsec = (time);
        var exp = new Date();
        exp.setTime(exp.getTime() + strsec * 1);
        document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString();
    }
    $.getCookie = function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return decodeURIComponent(arr[2]);
        else
            return null;
    }

    $.post_json = function (url, data, response, callback_data = null) {
        //get token from cookie
        data = data || {};
        var token = $.getUrlParam("tok");
        if (token != undefined && token.length > 0) {
            window.localStorage.setItem("token", token);
        }
        data.token = window.localStorage.getItem("token") || "gyh";
        //  console.log("got token="+data.token);
        $.ajax({
            type: "post",
            dataType: "json",
            data: data,
            url: url,
            success: function (result) {
                response(result, callback_data);
            },
            error: function (XMLHttpRequest, status, errorThrown) {
                var result = {};
                result.status = -1;
                if (status == 'timeout') {
                    result.message = "请求超时";
                } else {
                    result.message = errorThrown.length == 0 ? "请求失败" : errorThrown;
                }
                response(result, callback_data);
            },
            complete: function (XMLHttpRequest, status) {

            }
        });
    };

    $.checklogin = function (callback) {
        $.post_json(appsettings.apiroot + "account/info", null, callback_checklogin, callback)
    };

    function callback_checklogin(result, callback) {
        if (result != null && result.status == 0) {
            if (callback != null && callback != undefined) {
                callback();
            }
        } else {
            // window.location.href = appsettings.login_portal_root+"com/login.html?ref="+encodeURI(window.location.href);
            window.location.href = appsettings.login_url + encodeURIComponent(window.location.href);
        }

    };
    $.S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    $.guid = function () {
            return (this.S4() + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + this.S4() + this.S4()).toUpperCase();
        },
        $.showPoster = function (source_data, callback) {
            source_data.qrcode_width = 430;
            var apiurl = source_data.api ? source_data.api : "utility/wx/poster";
            this.post_json(
                appsettings.apiroot + apiurl,
                source_data,
                function (result) {
                    callback(result);
                }
            );
        }

})($);

//对于对象组成的数组，按照对象中某一特定key的值，找到元素的index。如果没有，则返回-1
Array.prototype.findByKeyAndValue = function (key, val) {
    for (var i = 0; i < this.length; i++) {
      if (this[i][key] === val) {
        return i;
      }
    }
    return -1;
}