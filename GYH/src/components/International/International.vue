<template></template>

<script>
import VueI18n from 'vue-i18n';
import Vue from 'vue';
import 'common/httputils'; 
Vue.use(VueI18n);

var i18n = new VueI18n();


 
export default {
  lang:i18n,
  name:"",
        props:['pageid'],
        data:function(){
            return{
              lang:i18n
			  };
    },
    created:function(){
      var data={};
      var lang=window.localStorage.getItem("lang")||"zh";
      data.lang=lang;
      data.pageid=this.pageid;
      $.post_json(appsettings.apiroot+"account/lang",data,function(result){   
          if(result!=null && result.status===0){    
                i18n.locale=lang;
                i18n.setLocaleMessage(lang,result.data.messages[lang]);
          }
      });
    } 
}
</script>
