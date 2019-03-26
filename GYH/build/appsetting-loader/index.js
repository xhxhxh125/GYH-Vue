//var appsettings =require("./appsettings");
//var config =require("../config");
//import appsettings from "./appsettings";
//import config from  "../config";
module.exports=function(source){
    this.cacheable();
    var appsettings =require("../../src/common/appsettings");
    
    //get all appsettings
    var settings=null;
    if(process.env.NODE_ENV === "\"production\""){
        settings=appsettings.pro;
    }else if(process.env.NODE_ENV === "\"development\""){
        settings=appsettings.dev;
    }
    //replace appsettings 占位符 with appsetting values
   // console.log("settings="+settings);
    for(var key in settings){
   //     console.log("key="+key);
        var oldstr="/"+"<\%=appsettings\."+key+"\%>"+"/g";
        source=source.replace(eval(oldstr),settings[key]);
    }

//console.log(source);
    this.callback(null, source);
  //  return source;
}