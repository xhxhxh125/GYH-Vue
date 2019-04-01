<template>
  <div id="app">
    <ElPageFrame ref="pf">
<div slot="mainslot">

  <div class="col g-ml-45 g-ml-0--lg g-pb-65--md">
          <div class="g-pa-20">
            <div class="row">
              <div class="col-md-12">
                <div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-20--md">
                  <form class="js-validate">
                    <header>
                      <h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">编辑新闻</h2>
                    </header>

                    <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-30--md">

                    <div class="row g-mb-20">
                      <div class="col-md-3">
                        <label class="mb-0">新闻类别</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <input v-model="news.tags" type="text" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12">
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#firstName">新闻名称</label>
                      </div>

                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                            <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                          </span>
                          <input v-model="news.caption" id="firstName" name="firstName" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                            type="text" value="Charlie" required="required" data-msg="This field is mandatory"
                            data-error-class="u-has-error-v3" data-success-class="has-success" aria-required="true">
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12" style="padding:0;">
                      <div class="g-pos-rel h-100 g-brd-around g-rounded-4">
                        <header>
                          <div class="align-self-center g-mb-5 g-mb-20">
                            <label class="mb-0" for="#location">上传封面</label>
                          </div>
                        </header>
                        
                        
           <form>
             <div  v-if="news.default_image!=undefined&&news.default_image.length>0">
              <div class="form-group">
                <div class="align-self-center d-flex g-mb-15">
 
                <div class="cbp-item identity design col-md-3">
                    <div class="u-block-hover g-parent">
                      <img
                        class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
                        :src="(appsettings.news_attachment+news.default_image)"
                      >
                      <div
                        class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-15"
                      >
                        <ul class="align-items-end flex-column list-inline mt-auto ml-auto mb-0">
                          <li class="list-inline-item">
                            <a
                              class="cbp-lightbox u-icon-v2 u-icon-size--xs g-brd-white g-color-black g-bg-white rounded-circle"
                              :href="(appsettings.news_attachment+news.default_image)"
                            >
                              <i class="hs-admin-image u-line-icon-pro"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="g-bg-white text-center g-pa-15">
                      <h3 class="h6 g-color-black g-font-weight-700 mb-1"></h3>
                      <p class="g-font-size-13 mb-0"></p>
                    </div>
                  </div>
                  </div>
                  <!-- End Cube Portfolio Blocks - Item -->
                </div>
                <!-- <input class="js-file-attachment" type="file" name="fileAttachment[]"> -->
                <div
                 @click="chooseLocalPicture()"
                  class="g-parent g-pos-rel g-height-230 g-bg-gray-light-v8--hover g-brd-around g-brd-style-dashed g-brd-gray-light-v7 g-brd-lightblue-v3--hover g-rounded-4 g-transition-0_2 g-transition--ease-in g-pa-15 g-pa-30--md"
                >
                  <div
                    class="d-md-flex align-items-center g-absolute-centered--md w-100 g-width-auto--md"
                  >
                    <div>
                      <div
                        class="g-pos-rel g-width-80 g-width-100--lg g-height-80 g-height-100--lg g-bg-gray-light-v8 g-bg-white--parent-hover rounded-circle g-mb-20 g-mb-0--md g-transition-0_2 g-transition--ease-in mx-auto mx-0--md"
                      >
                        <i
                          class="hs-admin-cloud-up g-absolute-centered g-font-size-30 g-font-size-36--lg g-color-lightblue-v3"
                        ></i>
                      </div>
                    </div>
                    <div class="text-center text-md-left g-ml-20--md">
                      <h3 class="g-font-weight-400 g-font-size-16 g-color-black g-mb-10">点击更新</h3>
                      <p class="g-font-weight-300 g-color-gray-dark-v6 mb-0">单击“上传”按钮并从计算机中浏览。</p>
                    </div>
                  </div>
                </div>
             </div>
             <div v-else>
                <div
                 @click="chooseLocalPicture()"
                  class="g-parent g-pos-rel g-height-230 g-bg-gray-light-v8--hover g-brd-around g-brd-style-dashed g-brd-gray-light-v7 g-brd-lightblue-v3--hover g-rounded-4 g-transition-0_2 g-transition--ease-in g-pa-15 g-pa-30--md"
                >
                  <div
                    class="d-md-flex align-items-center g-absolute-centered--md w-100 g-width-auto--md"
                  >
                    <div>
                      <div
                        class="g-pos-rel g-width-80 g-width-100--lg g-height-80 g-height-100--lg g-bg-gray-light-v8 g-bg-white--parent-hover rounded-circle g-mb-20 g-mb-0--md g-transition-0_2 g-transition--ease-in mx-auto mx-0--md"
                      >
                        <i
                          class="hs-admin-cloud-up g-absolute-centered g-font-size-30 g-font-size-36--lg g-color-lightblue-v3"
                        ></i>
                      </div>
                    </div>
                    <div class="text-center text-md-left g-ml-20--md">
                      <h3 class="g-font-weight-400 g-font-size-16 g-color-black g-mb-10">上传新闻封面图</h3>
                      <p class="g-font-weight-300 g-color-gray-dark-v6 mb-0">单击“上传”按钮并从计算机中浏览。</p>
                    </div>
                  </div>
                </div>
             </div>
        </form>
                      </div>
                    </div>

                    <div class="g-mb-20">
                        <label class="g-mb-10" for="#location">编辑正文</label>
                      <div class="form-group mb-0">
                        <div class="g-brd-around g-brd-gray-light-v7 g-rounded-4 g-mb-30">
                          <ElUEditor ref="ueditor" :code="'2'"></ElUEditor>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12" style="padding:0;">
                      <div class="g-pos-rel h-100 g-brd-around g-rounded-4">
                        <header>
                          <div class="align-self-center g-mb-5 g-mb-20">
                            <label class="mb-0" for="#location">上传附件</label>
                          </div>
                        </header>
                        
            <form>
           
              <div class="form-group">
                <div class="align-self-center d-flex g-mb-15">
 
                <div v-for="(f,index) in attachment_list" :key="index" class="cbp-item identity design col-md-3">
                    <!-- <div class="u-block-hover g-parent">
                      <img
                        class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
                        :src="(appsettings.news_attachment+news.default_image)"
                      >
                      <div
                        class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-15"
                      >
                        <ul class="align-items-end flex-column list-inline mt-auto ml-auto mb-0">
                          <li class="list-inline-item">
                            <a
                              class="cbp-lightbox u-icon-v2 u-icon-size--xs g-brd-white g-color-black g-bg-white rounded-circle"
                              :href="(appsettings.news_attachment+news.default_image)"
                            >
                              <i class="hs-admin-image u-line-icon-pro"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div> -->
                    <div>
                      <h3 >{{f.file_name}}</h3>
                      <p >{{f.create_time}}</p>
                    </div>
                  </div>
                  </div>
                  <!-- End Cube Portfolio Blocks - Item -->
                </div>
                <!-- <input class="js-file-attachment" type="file" name="fileAttachment[]"> -->
                <div
                
                @click="uploadAttachment()"
                  class="g-parent g-pos-rel g-height-230 g-bg-gray-light-v8--hover g-brd-around g-brd-style-dashed g-brd-gray-light-v7 g-brd-lightblue-v3--hover g-rounded-4 g-transition-0_2 g-transition--ease-in g-pa-15 g-pa-30--md"
                >
                  <div
                    class="d-md-flex align-items-center g-absolute-centered--md w-100 g-width-auto--md"
                  >
                    <div>
                      <div
                        class="g-pos-rel g-width-80 g-width-100--lg g-height-80 g-height-100--lg g-bg-gray-light-v8 g-bg-white--parent-hover rounded-circle g-mb-20 g-mb-0--md g-transition-0_2 g-transition--ease-in mx-auto mx-0--md"
                      >
                        <i
                          class="hs-admin-cloud-up g-absolute-centered g-font-size-30 g-font-size-36--lg g-color-lightblue-v3"
                        ></i>
                      </div>
                    </div>
                    <div class="text-center text-md-left g-ml-20--md">
                      <h3 class="g-font-weight-400 g-font-size-16 g-color-black g-mb-10">上传附件</h3>
                      <p class="g-font-weight-300 g-color-gray-dark-v6 mb-0">单击“上传”按钮并从计算机中浏览。</p>
                    </div>
                  </div>
                </div>
             
        </form>
                      </div>
                    </div>
                    <div>
                     
                       <button  @click="saveNews()" :class="basicInfoSuc?'btn-success':'btn-danger'" class="btn btn-xl u-btn-secondary g-font-size-default g-px-40">保存</button>
                      <button  @click="applyPublish()"  class="btn btn-xl u-btn-secondary g-font-size-default g-px-40 g-bg-darkblue-v2">发布</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>

   

    
    </ElPageFrame>

    

    <div id="uploaderInput" ref="uploaderInput1" v-show="false"></div>
    <input
      type="file"
      ref="uploadPic"
      v-show="false"
      @change="uploadPicChanged()"
      accept="image/gif, image/jpeg, image/jpg, image/png, image/svg"
    >
    <ElLoading ref="loading"></ElLoading>

    <ElConfirmDialog @confirm="doConfirm()" ref="confirmDlg"></ElConfirmDialog>
  </div> 
</template>

<script>
import "common/httputils"; //引用js
import htmlHelper from "common/htmlutils";
import ElPageFrame from "components/el-PageFrame/el-PageFrame";

import ElPager from "components/el-Pager/el-Pager";
import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
import ElLoading from "components/el-Loading/el-Loading";
import ElConfirmDialog from "components/el-ConfirmDialog/el-ConfirmDialog";
import ElUEditor from "components/el-UEditor/el-UEditor";
import Vue from "vue";
import ElProCategory from "components/el-ProCategory/el-ProCategory";
import ElCompanyIntellisense from "components/el-CompanyIntellisense/el-CompanyIntellisense";

export default {
  name: "app",
  data: function() {
    return {
      uploader: null,
      uploading_progresses: [],
      uploading_files: [],
      uploading_ok_count: 0,
      init_cat: null,
      news_oid: null,
      uploadingPicBase64: null,
      basicInfoSuc: false, //基本信息保存成功

      attachment_list: [],
      news: {
        company_oid: "",
        company_name: "",
        picture: [],
        default_image: ""
      },
      company_options: null,
      functionlist: [],
      action_result: ""
    };
  },
  watch: {},
  computed: {
    edit_mode: function() {
      if (
        this.news_oid != "" &&
        this.news_oid != null &&
        this.news_oid != undefined
      ) {
        return "edit";
      } else {
        return "new";
      }
    }
  },
  components: {
    ElPageFrame,
    ElPager,
    ElBlockAlert,
    ElLoading,
    ElUEditor,
    ElConfirmDialog,
    ElProCategory,
    ElCompanyIntellisense
  },
  created: function() {
    this.news.company_name = $.getUrlParam("cn");
    this.news_oid = $.getUrlParam("id");
    this.action_result = $.getUrlParam("a");
    this.news.oid = this.news_oid;

    if (this.edit_mode == "edit") {
      this.getNews();
    }
  },
  mounted: function() {
    if (this.edit_mode == "edit") {
      this.$refs.pf.showLoading("正在加载数据...");
    }
    jQuery(document).on("mouseover", ".imgbox", function() {
      jQuery(this)
        .find("i")
        .show();
      event.preventDefault();
      event.stopPropagation();
    });
    jQuery(document).on("mouseout", ".imgbox", function() {
      jQuery(this)
        .find("i")
        .hide();
      event.preventDefault();
      event.stopPropagation();
    });

    this.InitUploader();
    setTimeout(function() {
      //初始化datatable组件
      InitDatatable({
        tableid: "datatable_tabletools",
        jslocation: appsettings.jsPrefix
      });
    }, 0);
  },

  methods: {
    applyPublish: function() {
      if (this.edit_mode == "edit") {
        var that = this;
        //confirm
        this.$refs.pf.confirmShow({
          action_code: "publishNews",
          title: "工业汇将对您发布的新闻进行审核，确定要发布该新闻吗？",
          msg: "新闻名称：" + that.news.caption,
          success: function(res) {
            if (res.confirm == true) {
              var data = {
                oid: that.news.oid
              };
              $.post_json(
                appsettings.apiroot + "home/news/publish",
                data,
                that.cb_applyPublish
              );

              //show loading
              that.$refs.pf.showLoading("正在提交....");
              setTimeout(function() {
                that.$refs.pf.hideLoading();
              }, 10000);
            }
          }
        });
      }
    },
    cb_applyPublish: function(res) {
      this.$refs.pf.hideLoading();
      if (res != null && res.status == 0) {
        this.$refs.pf.showToast("success", "申请成功", "请耐心等待审核");
      } else {
        this.$refs.pf.showToast("error", "申请失败", res.message);
      }
    },
    setContent: function(para) {
      var p = para;
      p.value = p.value || "";
      var self = this;
      var interval = null;
      var loop = function() {
        innerFunc(p);
      };
      var innerFunc = function(param) {
        var uename = param.editor_name;
        if (
          self.$refs[uename] != null &&
          self.$refs[uename].length > 0 &&
          self.$refs[uename][0] != undefined &&
          self.$refs[uename][0].editor != null &&
          self.$refs[uename][0].editor != undefined &&
          self.$refs[uename][0].editor.isReady > 0
        ) {
          window.clearInterval(interval);
          self.$refs[uename][0].setUEContent(param.value);
        }
        if (
          self.$refs[uename] != null &&
          self.$refs[uename] != undefined &&
          self.$refs[uename].editor != null &&
          self.$refs[uename].editor != undefined &&
          self.$refs[uename].editor.isReady > 0
        ) {
          window.clearInterval(interval);
          self.$refs[uename].setUEContent(param.value);
        }
      };
      interval = setInterval(loop, 1000);
    },

    createNews: function() {
      window.location.href = "/news/edit.html";
    },

    getNews: function() {
      var data = {};
      data.oid = this.news_oid;
      $.post_json(
        appsettings.apiroot + "news/info",
        data,
        this.callback_getNews
      );
    },

    callback_getNews: function(result) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        this.news = result.data.news.main;
        this.attachment_list = (result.data.news.pictures || []).concat(
          result.data.news.attachments || []
        );
        this.setContent({
          value: this.news.content,
          editor_name: "ueditor"
        });
      } else {
        this.$refs.pf.showToast("error", "查询新闻失败", result.message);
      }
    },

    saveNews: function() {
      this.basicInfoSuc = false;
      this.news.content = this.$refs.ueditor.getUEContent();
      this.news.oid = this.news_oid;
      this.news.status = 1;
      if (this.edit_mode == "new") {
        $.post_json(
          appsettings.apiroot + "home/news/create",
          this.news,
          this.callback_saveNews
        );
      } else {
        $.post_json(
          appsettings.apiroot + "home/news/update",
          this.news,
          this.callback_saveNews
        );
      }

      this.$refs.pf.showLoading("正在保存...");
    },
    callback_saveNews: function(result) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        //success
        this.basicInfoSuc = true;
        if (this.edit_mode == "new") {
          this.news.oid = result.data;
          this.news_oid = result.data;

          $.setUrlParam("id", result.data);
        }
        this.$refs.pf.showToast("success", "保存新闻成功", "");
      } else {
        //failed
        this.basicInfoSuc = false;
        $(window).scrollTop(0);
        this.$refs.pf.showToast("error", "保存新闻失败", result.message);
      }
    },

    deleteAtttachment: function(attach, attach_index) {
      attach.company_oid = this.news.company_oid;
      $.post_json(
        appsettings.apiroot + "home/news/attachment/delete",
        attach,
        this.callback_deleteAtttachment,
        attach_index
      );
    },
    callback_deleteAtttachment: function(result, attach_index) {
      if (result != null && result.status == 0) {
        this.attachment_list.splice(attach_index, 1);
      } else {
        //删除失败
        this.$refs.pf.showToast("error", "删除附件失败", result.message);
      }
    },

    uploadAttachment: function() {
      $("#uploaderInput input").click();
    },
    persistAttachment: function(file) {
      var filedadta = {};
      filedadta.file_name = file.name.replace("." + file.ext, "");
      filedadta.oid = file.oid;
      filedadta.index = file.index;
      filedadta.file_type = "." + file.ext;
      filedadta.news_oid = this.news_oid;
      $.post_json(
        appsettings.apiroot + "home/news/attachment/create",
        filedadta,
        this.callback_persistAttachment,
        filedadta
      );
      // var self = this;
      // setTimeout(() => {
      //   self.uploading_files = self.uploading_files.splice(file.index-1,1);
      // }, 0);
    },
    InitUploader: function() {
      var self = this;
      this.uploader = WebUploader.create({
        // swf文件路径
        swf: appsettings.gyhpluginsPrefix + "webuploader/Uploader.swf",
        // 文件接收服务端。
        server: appsettings.apiroot + "home/news/attachment/upload",
        chunked: true,
        threads: 1,
        auto: true,
        fromData: {
          guid: "guid"
        },
        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: "#uploaderInput",
        multiple: true,
        // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
        resize: false,
        chunkSize: 4000880,
        duplicate: true
      });

      this.uploader.on("beforeFileQueued", function(file) {});

      this.uploader.on("fileQueued", function(file) {
        self.uploader.options.formData.guid = Math.random();
        file.index = self.uploading_files.length;
        self.uploading_progresses.push("0");
        self.uploader.options.formData.pid = self.product_oid;
        self.uploader.options.formData.token = window.localStorage.getItem(
          "token"
        );
        self.uploading_files.push(file);
      });
      this.uploader.on("uploadProgress", function(file, percentage) {
        Vue.set(
          self.uploading_progresses,
          file.index,
          (percentage * 100 + "").substring(0, 5)
        );
      });

      this.uploader.on("uploadAccept", function(file, response) {
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

      this.uploader.on("uploadSuccess", function(file, response) {
        response = JSON.parse(response);

        if (response != null) {
          if (response.status == 0) {
            file.product_oid = self.product_oid;
            file.oid = response.data;
            self.persistAttachment(file);
          } else if (response.status == 9999) {
            window.location.href =
              "/com/login.html?ref=" + encodeURIComponent(window.location.href);
          }
        }
      });

      this.uploader.on("uploadError", function(file) {});

      this.uploader.on("uploadComplete", function(file) {});

      setTimeout(function() {
        $("#uploaderInput")
          .find("div")
          .each(function() {
            $(this).css("height", "80px");
            $(this).css("width", "80px");
          }, this);
      }, 0);
    },
    callback_persistAttachment: function(result, filedata) {
      if (result != null && result.status == 0) {
        filedata.create_time = result.data.create_time;
        this.attachment_list.push(filedata);
        this.uploading_files[filedata.index].ok = true;
        this.uploading_ok_count++;
      } else {
      }
    },

    chooseLocalPicture: function() {
      //激活 webuploader
      this.$refs["uploadPic"].click();
    },
    uploadPicChanged: function() {
      this.readFile();
    },
    readFile: function() {
      var file = this.$refs["uploadPic"].files[0];
      //判断是否是图片类型
      if (!/image\/\w+/.test(file.type)) {
        alert("只能选择图片");
        return false;
      }
      var reader = new FileReader();
      var self = this;
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        self.uploadingPicBase64 = this.result;
        //do upload
        var data = {};
        data.base64 = self.uploadingPicBase64;
        data.news_oid = self.news_oid;
        data.company_oid = self.news.company_oid;
        file.base64 = data.base64;

        $.post_json(
          appsettings.apiroot + "home/news/defaultimage/upload",
          data,
          self.callback_uploadPicture,
          file
        );
      };
    },

    callback_uploadPicture: function(result, file) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        //success
        if (this.edit_mode == "new") {
          $.setUrlParam("id", result.data.oid);
        }
        this.news.oid = result.data.oid;
        this.news_oid = result.data.oid;
        Vue.set(this.news, "default_image", result.data.default_image);

        this.$refs.pf.showToast("success", "保存新闻封面成功", "");
      } else {
        //failed
        this.$refs.pf.showToast(
          "error",
          "上传新闻封面出现异常",
          result.message
        );
      }
    }
  }
};
</script>

<style>
.nopaddingl {
  padding-left: 0 !important;
}

.superbox-list {
  padding: 5px;
}

.to {
  height: 32px;
  line-height: 32px;
  vertical-align: middle;
  margin-left: -10px !important;
  padding-right: 2px !important;
  margin-right: 2px !important;
}

.border {
  border: solid 1px #ccc !important;
  border-bottom: none !important;
}

i.unit {
  width: auto !important;
}

.btn-small {
  height: 31px;
  padding: 0 22px;
}

.btn-upload {
  margin: -13px 0 20px -5px;
}

.btn-upload:after {
  content: "";
  display: table;
  clear: both;
}

.btn-upload a {
  margin: 10px 5px 0 0;
  height: 31px;
  margin: 10px 0 0 5px;
  padding: 0 22px;
  font: 300 15px/29px "Open Sans", Helvetica, Arial, sans-serif;
  cursor: pointer;
}

.ibtn {
  font-size: 18px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -9px;
  margin-left: -36px;
  display: none;
}

.smart-form .inline-group .radio {
  margin-right: 20px !important;
}

.rr {
  margin-right: -20px;
  margin-left: 5px;
}

.rl {
  margin-right: 2px;
}

@media (min-width: 1200px) {
  .modal-dialog {
    width: 1000px;
    margin: 30px auto;
  }
}

.no-padding .table-bordered {
  border-bottom: 1px solid #ccc !important;
}

.table-bordered,
.no-padding > .table-responsive > .table-bordered {
  border-bottom: 1px solid #ccc !important;
}

.progress {
  height: 5px !important;
}

.progress .progress-bar {
  line-height: 5px !important;
}

.bope {
  /* margin-left: -10px!important;
  padding-left:10px!important; */
  padding: 6px 12px !important;
}
</style>