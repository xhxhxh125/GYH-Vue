<template>
  <div>
    <script :id="id==null?'ueditor':id" type="text/plain" ></script>
  </div>
</template>

<script>
// document.write('<script src="'+appsettings.gyhpluginsPrefix+'ueditor/ueditor.simple.config.js"><\/script>');
// document.write('<script src="'+appsettings.gyhpluginsPrefix+'ueditor/ueditor.all.js"><\/script>');
// document.write('<script src="'+appsettings.gyhpluginsPrefix+'ueditor/lang/zh-cn/zh-cn.js"><\/script>');

  import '../../assets/gyh/plugins/ueditor/ueditor.simple.config.js'
  import '../../assets/gyh/plugins/ueditor/ueditor.all.js'
  import '../../assets/gyh/plugins/ueditor/lang/zh-cn/zh-cn.js'
  import Vue from 'vue';
  export default {
    name: "UEditor",
    props: {
      id: {
          type: String
      },
      config: {
          type: Object
      },
      code:{
        type:String
      }
    },
    data() {
      return {
        editor: null,
        _config:null
      }
    },
    created:function(){
    },
    mounted() {
    
      this._config =  {
            /*//可以在此处定义工具栏的内容
            toolbars: [
              ['fullscreen', 'source','|', 'undo', 'redo','|','bold', 'italic', 'underline', 'fontborder', 'strikethrough',
                '|','superscript','subscript','|', 'forecolor', 'backcolor','|', 'removeformat','|', 'insertorderedlist', 'insertunorderedlist',
                '|','selectall', 'cleardoc','fontfamily','fontsize','justifyleft','justifyright','justifycenter','justifyjustify','|',
                'link','unlink']
            ],*/
            autoHeightEnabled: true,
            autoFloatEnabled: true,　　//是否工具栏可浮动
            initialContent:'',   //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
            autoClearinitialContent:true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
            initialFrameWidth: null,
            initialFrameHeight: 300,
            BaseUrl: '',
            UEDITOR_HOME_URL: appsettings.gyhpluginsPrefix+'ueditor/',
            serverUrl: appsettings.apiroot+"ueditor/do?cattype="+this.code,
            zIndex:1,
          };
      //初始化UE
      const _this = this;
      this.editor = UE.getEditor(this.id==null?'ueditor':this.id,this.config==null?this._config:this.config);

      this.editor.addListener("contentchange", function () {
        _this.contentChanged();
      } );
    },
    destoryed() {
      this.editor.destory();
    },
    methods:{
      contentChanged:function(){
        this.$emit("change",this.editor.getContent());
      },
      getUEContent: function(){
       return this.editor.getContent();
      },
      setUEContent: function(content){
            this.editor.setContent(content);
      }
    }
  }
</script>