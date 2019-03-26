<template>
    <div :id="id" v-show="false"></div>
</template>
<script>
    export default {
        name: "el-uploader",
        props: [],
        data: function () {
            return {
                id:'webuploader_'+(new Date().getTime())+Math.floor(Math.random()*(999)),
              //id:"id123",
                uploadingFiles:[],//正在上传的文件列表
                uploader:{},
                source_oid:null,
                source_type:null,
                oid:null,
                progresschange_callback:null,
                success_callback:null,
                attachment:{}
            };
        },
        components: {},
        mounted: function () {
            var self = this;
            setTimeout(() => {
                self.__InitUploader();
            }, 1000);
            
        },
        created: function () {

        },
        watch: {
            update:function(newVal,oldVal){
                if(newVal==true){
                    //only one file when updating
                    this.uploader.options.duplicate = false;
                }else{
                    this.uploader.options.duplicate = true;
                }
            },
        },
        methods: {
            //上传多个新附件
            uploadNewFiles:function(source_oid,source_type,progresschange_callback,success_callback){
                if((source_oid||'').length<20){
                    //source_oid不能为空
                    return;
                }
                this.action = "create";

                this.uploader.server=appsettings.apiroot + "utility/attachment/upload";
                this.uploader.options.duplicate = true;
                this.source_oid = source_oid;
                this.source_type = source_type;
                this.success_callback = success_callback;
                this.progresschange_callback = progresschange_callback;
               // $("#"+this.id+" input").trigger("click"); 
                $(document.getElementById(this.id).getElementsByClassName("webuploader-element-invisible")[0]).click()    
            },
            __InitUploader: function () {
                var self = this;
                this.uploader = WebUploader.create({
                    // swf文件路径
                    swf: appsettings.gyhpluginsPrefix + "webuploader/Uploader.swf",
                    // 文件接收服务端。
                    server: appsettings.apiroot + "utility/attachment/upload",
                    chunked: true,
                    threads: 1,
                    auto: true,
                    fromData: {
                        guid: "guid"
                    },
                    // 选择文件的按钮。可选。
                    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                    pick: "#"+self.id,
                    multiple: true,
                    // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
                    resize: false,
                    chunkSize: 4000880,
                    duplicate: (self.update==true?"false":true)
                });

                this.uploader.on("fileQueued", function (file) {
                    file.index = self.uploadingFiles.length;
                    file.fid = "fid_"+(new Date().getTime())+Math.floor(Math.random()*(999));
                    file.progress = 0;
                    file.action = self.action;
                    file.formData = {};
                    file.formData.guid = Math.random();
                    file.formData.token = window.localStorage.getItem("token");
                    file.formData.oid = self.oid;
                    file.formData.file_type = file.ext;
                    file.formData.file_size = file.size;
                    file.formData.file_name = file.name;
                    file.formData.source_oid = self.source_oid;
                    file.source_type = self.source_type;
                    file.file_name = file.name;
                    file.file_type = file.ext;
                    self.uploadingFiles.push(file);

                });
                this.uploader.on("uploadProgress", function (file, percentage) {
                    file.progress = (percentage * 100 + "").substring(0, 5);
                   // Vue.set(self.uploadingFiles, file.index, file);
                   if(file.progress=='100'){
                       file.progress = '99.99';
                   }
                    self.uploadingFiles[file.index] = file;

                    self.progresschange_callback(self.uploadingFiles)
                });

                this.uploader.on("uploadBeforeSend", function (obj,data,headers) {
                    Object.keys(obj.file.formData).forEach(function(key){
                        data[key] = obj.file.formData[key];
                    });
                });

                

                this.uploader.on("uploadAccept", function (file, response) {
                    response = JSON.parse(response);
                    if (response != null) {
                        if (response.status == 0) {
                            return true;
                        } else if (response.status == 9999) {
                            window.location.href =
                                "/com/login.html?ref=" + encodeURIComponent(window.location.href);
                            return false;
                        }
                    }
                });

                this.uploader.on("uploadSuccess", function (file, response) {
                    response = JSON.parse(response);
                    if (response != null) {
                        if (response.status == 0) {
                            //一个附件上传成功了
                            // file.oid = response.data.oid;
                            // file.update_time = response.data.update_time;
                            response.data.progress = "100";
                            response.data.action = file.action;
                            response.data.index  = file.index;
                            response.data.fid = file.fid;
                            response.data.ok = true;
                            self.uploadingFiles[file.index] = response.data;
                            //this.$emit('uploadSuccess', self.uploadingFiles);
                            self.success_callback(self.uploadingFiles)
                        } else if (response.status == 9999) {
                            window.location.href =
                                "/com/login.html?ref=" + encodeURIComponent(window.location.href);
                        }
                    }
                });

                this.uploader.on("uploadError", function (file) {});

                this.uploader.on("uploadComplete", function (file) {});
            },
            refresh:function(){
                this.uploader.refresh();
            }
        }
    }
</script>
<style>

</style>