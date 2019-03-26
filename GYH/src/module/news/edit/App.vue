<template>
  <div id="app">
    <ElPageFrame ref="pf"></ElPageFrame>

    <div id="main" role="main">
      <!-- RIBBON -->
      <div id="ribbon">
        <span class="ribbon-button-alignment">
          <span
            id="refresh"
            class="btn btn-ribbon"
            data-action="resetWidgets"
            data-title="refresh"
            rel="tooltip"
            data-placement="bottom"
            data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings."
            data-html="true"
          >
            <i class="fa fa-refresh"></i>
          </span>
        </span>
        <!-- breadcrumb -->
        <ol class="breadcrumb">
          <li>个人中心</li>
          <li>新闻管理</li>
          <li>{{edit_mode=="edit"?'编辑':'新增'}}新闻</li>
        </ol>
        <!-- end breadcrumb -->
      </div>
      <!-- END RIBBON -->
      <!-- MAIN CONTENT -->
      <div id="content">
        <section id="widget-grid" class>
          <ElBlockAlert ref="alert"></ElBlockAlert>
          <div class="row">
            <article class="col-sm-12 col-md-12">
              <div
                class="jarviswidget jarviswidget-color-darken"
                data-widget-colorbutton="false"
                data-widget-editbutton="false"
                data-widget-custombutton="false"
              >
                <header>
                  <span class="widget-icon">
                    <i class="fa fa-edit"></i>
                  </span>
                  <h2>编辑新闻</h2>
                </header>
                <div>
                  <!-- widget edit box -->
                  <div class="jarviswidget-editbox">
                    <!-- This area used as dropdown edit box -->
                  </div>
                  <!-- end widget edit box -->
                  <!-- widget content -->
                  <div class="widget-body no-padding">
                    <div id="query-form" class="smart-form">
                      <fieldset>
                        <div class="row">
                          <section class="col col-lg-6">
                            <label class="label">新闻标题（必填）</label>
                            <label class="input">
                              <section>
                                <input type="text" name="text" v-model="news.caption">
                              </section>
                            </label>
                          </section>
                          <section class="col col-lg-6">
                            <label class="label">新闻标签</label>
                            <label class="input">
                              <section>
                                <input
                                  type="text"
                                  name="text"
                                  v-model="news.tags"
                                  placeholder="标签已逗号分隔"
                                >
                              </section>
                            </label>
                          </section>
                        </div>
                      </fieldset>

                      <fieldset>
                        <div class="row">
                          <section class="col col-sm-12">
                            <label class="label">新闻封面图片</label>
                            <div class="textarea">
                              <div class="superbox col-sm-12">
                                <div
                                  v-if="news.default_image!=undefined&&news.default_image.length>0"
                                  class="superbox-list imgbox"
                                  style="width:50%;"
                                >
                                  <img
                                    :src="appsettings.news_attachment+news.default_image"
                                    :data-img="appsettings.news_attachment+news.default_image"
                                    class="superbox-img"
                                    @click="chooseLocalPicture()"
                                  >
                                  <i class="fa ibtn" @click="chooseLocalPicture()">点击更新</i>
                                </div>
                                <div
                                  v-else
                                  class="superbox-list"
                                  style="text-align:center;"
                                  @click="chooseLocalPicture()"
                                >
                                  <!-- <img :src="appsettings.gyhImgPrefix+'add.png'" class="superbox-img" style="width: auto;" title="上传新的产品图片"> -->
                                  <i
                                    class="fa fa-plus-circle"
                                    style="color: #3276B1;font-size: 50px;cursor:pointer;"
                                    title="上传新的新闻封面图片"
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </fieldset>
                      <fieldset>
                        <div class="row">
                          <section class="col col-sm-12">
                            <label class="label">新闻正文</label>
                            <div class="textarea">
                              <ElUEditor ref="ueditor" :code="'2'"></ElUEditor>
                            </div>
                          </section>
                        </div>
                      </fieldset>

                      <footer>
                        <a
                          @click="saveNews()"
                          href="javascript:void(0);"
                          :class="basicInfoSuc?'btn-success':'btn-danger'"
                          class="btn pull-left"
                          style="height: auto;padding: 10px 16px;"
                        >
                          <i class="fa fa-save"></i> 保存新闻
                        </a>
                      </footer>
                    </div>
                  </div>
                  <!-- end widget content -->
                </div>
                <!-- end widget div -->
              </div>

              <div
                class="jarviswidget jarviswidget-color-darken"
                data-widget-colorbutton="false"
                data-widget-editbutton="false"
              >
                <header>
                  <span class="widget-icon">
                    <i class="fa fa-table"></i>
                  </span>
                  <h2>新闻附件</h2>
                </header>

                <!-- widget div-->
                <div>
                  <div class="btn-upload">
                    <a
                      href="javascript:void(0);"
                      @click="uploadAttachment()"
                      class="btn btn-success pull-left"
                    >
                      <i class="fa fa-save"></i>上传附件
                    </a>
                  </div>

                  <!-- widget edit box -->
                  <div class="jarviswidget-editbox">
                    <!-- This area used as dropdown edit box -->
                  </div>
                  <!-- end widget edit box -->
                  <!-- widget content -->
                  <div class="widget-body no-padding">
                    <table
                      id="datatable_tabletools1"
                      class="table table-striped table-bordered table-hover"
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th data-hide="phone">ID</th>
                          <th data-class="expand">文件名称</th>
                          <th>文件类型</th>
                          <th data-hide="phone">上传时间</th>
                          <th data-hide="phone,tablet">操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr></tr>
                        <tr v-for="(f,index) in attachment_list" :key="index">
                          <td>{{index+1}}</td>
                          <td>{{f.file_name}}</td>
                          <td>{{f.file_type!=null?f.file_type.toUpperCase().replace(".",""):""}}</td>
                          <td>{{f.create_time}}</td>
                          <td>
                            <a
                              href="javascript:void(0);"
                              class="btn btn-danger btn-xs"
                              @click="deleteAtttachment(f,index)"
                            >删除</a>
                          </td>
                        </tr>

                        <tr
                          v-for="(uploading_file,index) in uploading_files"
                          :key="index"
                          v-if="uploading_file.ok!=true"
                        >
                          <td>{{attachment_list.length+index+1-uploading_ok_count}}</td>
                          <td>
                            <span
                              style="padding-left:100px;"
                            >{{uploading_file.name.replace('.'+uploading_file.ext,'')}}</span>
                            <div class="progress">
                              <div
                                class="progress-bar bg-color-blue"
                                :style="'width: '+uploading_progresses[uploading_file.index]+'%;'"
                              ></div>
                            </div>
                          </td>
                          <td>{{uploading_file.ext!=null?uploading_file.ext.toUpperCase():""}}</td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- end widget content -->
                </div>
                <!-- end widget div -->
              </div>

              <div
                class="jarviswidget jarviswidget-color-darken"
                data-widget-colorbutton="false"
                data-widget-editbutton="false"
                data-widget-custombutton="false"
              >
                <div>
                  <div class="jarviswidget-editbox"></div>
                  <div class="widget-body no-padding" style="min-height:0;">
                    <div id="query-form" class="smart-form">
                      <footer>
                        <a
                          @click="applyPublish()"
                          class="btn btn-success pull-left"
                          :disabled="edit_mode=='edit'"
                        >
                          <i class="fa fa-check"></i> 发布新闻
                        </a>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>

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