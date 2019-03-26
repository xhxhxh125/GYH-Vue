//修改页面的head信息
var _arr 	= {};

module.exports={
    setPageTitle:function(title){
        if(title!=="" && title!=null && title!=undefined){
            document.title=title;
        }
    },
    setPageKeywords:function(keywords){
        if(keywords!=="" && keywords!=null && keywords!=undefined){
             var oMeta = document.createElement('meta');
                oMeta["name"]="keywords";
                oMeta["content"]=keywords;
                document.getElementsByTagName('head')[0].appendChild(oMeta);
        }
    },
    loadScript:function(url,callback){
		if (!_arr[url]) {
			_arr[url] = true;
			var body 		= document.getElementsByTagName('body')[0];
			var script 		= document.createElement('script');
			script.type 	= 'text/javascript';
			script.src 		= url;
			// then bind the event to the callback function
			// there are several events for cross browser compatibility
			// script.onreadystatechange = callback;
			script.onload = callback;
			// fire the loading
			body.appendChild(script);
		} else if (callback) {
			callback();
	    };
    },
    isImg: function (type) {
				type = (type || "").toUpperCase();
				if (type == ".JPG" || type == ".JPEG" || type == ".BMP" || type == ".PNG") {
					return true;
				}
				return false;
    },
    isVideo: function (type) {
        type = (type || "").toUpperCase();
        if (type == ".MP4"|| type == ".WMA") {
            return true;
        }
        return false;
	},
    validateMobile:function(mobile) {
        var mobilereg = /^1(3|4|5|7|8)\d{9}$/;
        if (!mobilereg.test(mobile)) {
            return false;
        }
        return true;
    },
    validateEmail:function(email){
        var emailreg = /^([a-zA-Z0-9]+[-|_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!emailreg.test(email)) {
            return false;
        }
        return true;
    },
    toPlainText:function(html){
        var dd=html.replace(/<\/?.+?>/g,"");
        return dd.replace(/ /g,"");
    },
    //SetRemainTime();
    isInteger:function(value){
        return /^[0-9]+$/.test(value);
    },
    isGuid:function(value){
        return /^[0-9a-fA-F\-]{36}$/.test(value);
    }
    
}