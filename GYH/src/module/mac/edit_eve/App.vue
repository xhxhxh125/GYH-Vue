<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <!-- main -->
        <div class="col g-ml-45 g-ml-0--lg g-pb-65--md">
          <div class="g-pa-20">
            <div class="media-md align-items-center g-mb-30">
              <div class="d-flex g-mb-15 g-mb-0--md">
                <h1 class="g-font-weight-400 g-font-size-28 g-color-black">新增设备事件</h1>
              </div>
            </div>

            <div class="table-responsive g-mb-40">
              <div class="col-md-9">
                <div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-20--md">
                  <form class="js-validate">
                    <header>
                      <h2
                        class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0"
                      >事件信息</h2>
                    </header>

                    <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-30--md">

                    <div class="g-mb-20">
                      <div class="g-mb-20">
                        <label class="mb-0">公司类别</label>
                      </div>
                      <label
                        class="form-check-inline u-check g-pl-25 ml-0 g-mr-25"
                        v-for="(logtype,index) in logtypes"
                        :key="index"
                      >
                        <input
                          class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                          type="radio"
                          :id="logtype.enum_code"
                          :checked="eve.mac_log_type == logtype.enum_code"
                          @change="eve.mac_log_type = logtype.enum_code"
                        >
                        <div
                          class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18"
                        >
                          <i
                            class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"
                          ></i>
                        </div>
                        {{logtype.enum_name}}
                      </label>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">部件</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <span
                            class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success"
                          >
                            <i
                              class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"
                            ></i>
                          </span>
                          <input
                            class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                            type="text"
                            placeholder="请输入部件名称"
                            data-msg="This field is mandatory"
                            data-error-class="u-has-error-v3"
                            data-success-class="has-success"
                            aria-required="true"
                            v-model="eve.part_name"
                          >
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">报告人邮箱</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <span
                            class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success"
                          >
                            <i
                              class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"
                            ></i>
                          </span>
                          <input
                            class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                            type="text"
                            placeholder="请输入您的电子邮箱"
                            data-msg="This field is mandatory"
                            data-error-class="u-has-error-v3"
                            data-success-class="has-success"
                            aria-required="true"
                            v-model="eve.reporter_email"
                          >
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">报告人电话</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <span
                            class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success"
                          >
                            <i
                              class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"
                            ></i>
                          </span>
                          <input
                            class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                            type="text"
                            placeholder="请输入您的电话"
                            data-msg="This field is mandatory"
                            data-error-class="u-has-error-v3"
                            data-success-class="has-success"
                            aria-required="true"
                            v-model="eve.reporter_mobile"
                          >
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">描述</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group mb-0">
                          <textarea
                            class="form-control form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12"
                            rows="3"
                            placeholder="请输入描述"
                            v-model="eve.content"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-30--md">

                    <div class="row g-mb-20">
                      <a
                        class="js-fancybox btn btn-xl u-btn-secondary g-width-140--md g-font-size-default g-ml-10"
                        href="javascript:void(0);"
                        @click="raise()"
                      >提交</a>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-12 align-self-center g-mb-20">
                        <label class="mb-0" for="#lastName">图片视频</label>
                      </div>
                      <ElAttachmentPic
                        :attachment_pic_list="attachment_pic_list"
                        :file_prefix="appsettings.comfile_prefix"
                        :edit="true"
                        :source_oid="eve.oid"
                        :source_type="12"
                        :reload_callback="this.reload_attachment"
                      ></ElAttachmentPic>
                    </div>
                    <div class="row g-mb-20">
                      <div class="col-md-12 align-self-center g-mb-20">
                        <label class="mb-0" for="#lastName">附件</label>
                      </div>
                      <ElAttachmentDoc
                        :attachment_doc_list="attachment_doc_list"
                        :file_prefix="appsettings.comfile_prefix"
                        :edit="true"
                        :source_oid="eve.oid"
                        :source_type="12"
                        :reload_callback="this.reload_attachment"
                      ></ElAttachmentDoc>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ElPageFrame>

    <ElToastAlert ref="toastAlert"></ElToastAlert>
  </div>
</template>

<script>
import "common/httputils"; //引用js
import Vue from "vue";
import htmlHelper from "common/htmlutils";
import htmlutils from "common/htmlutils";
import ElPageFrame from "components/el-PageFrame/el-PageFrame";

import ElPager from "components/el-Pager/el-Pager";
import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";
import ElAttachmentPic from "components/el-AttachmentPic/el-AttachmentPic";
import ElAttachmentDoc from "components/el-AttachmentDoc/el-AttachmentDoc";

export default {
  name: "app",
  data: function() {
    return {
      product_name: "",
      machine_no: "",
      eve: {
        mac_log_type: "",
        part_name: "",
        reporter_email: "",
        reporter_mobile: "",
        content: ""
      },
      logtypes: [],

      attachment_pic_list: [],
      attachment_doc_list: [],
      uploader: null,
      uploading_progresses: [],
      fileList: [],
      uploading_files: [],

      btndisabled: false
    };
  },
  components: {
    ElPageFrame,
    ElPager,
    ElBlockAlert,
    ElToastAlert,
    ElAttachmentPic,
    ElAttachmentDoc
  },
  created: function() {
    //get queryfields
    var that = this;

    this.eve.oid = $.getUrlParam("id");
    if (this.eve.oid != null && this.eve.oid != undefined) {
      this.action_mode = "edit";
      var data = {
        oid: this.eve.oid
      };
      //查询所有设备事件类型
      $.post_json(
        appsettings.apiroot + "utility/globalenum/retrieve",
        { global_enum_id: "mac_log_type" },
        this.callback_getLogType
      );

      $.post_json(
        appsettings.apiroot + "machine/log/info",
        data,
        this.callback_retrieve
      );
    } else {
      //生成会议oid
      this.eve.oid = $.guid();
      this.eve.machine_oid = $.getUrlParam("mac_oid");
      this.product_name = $.getUrlParam("pro_name");
      this.machine_no = $.getUrlParam("mac_no");
      htmlutils.setPageTitle("登记设备事件");
      //查询所有设备事件类型
      $.post_json(
        appsettings.apiroot + "utility/globalenum/retrieve",
        { global_enum_id: "mac_log_type" },
        this.callback_getLogType
      );
    }
    //获取当前用户的联系方式
    $.post_json(
      appsettings.apiroot + "account/info",
      null,
      this.callback_getinfo
    );
  },
  mounted: function() {},
  methods: {
    reload_attachment: function() {
      var data = { oid: this.eve.oid };
      $.post_json(
        appsettings.apiroot + "machine/log/info",
        data,
        this.callback_reload_attachment
      );
    },
    callback_reload_attachment: function(result) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        this.attachment_pic_list = result.data.attachment_pic_list;
        this.attachment_doc_list = result.data.attachment_doc_list;
      } else {
        this.$refs.toastAlert.config = {
          type: "error",
          title: "加载设备信息失败！",
          msg: result.message
        };
        this.$refs.toastAlert.show = true;
      }
    },
    callback_getLogType: function(e) {
      if (e != null && e.status == 0) {
        this.logtypes = e.data;
      }
    },

    callback_getinfo: function(result) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        this.eve.reporter_email = result.data.user_email;
        this.eve.reporter_mobile = result.data.user_mobile;
      }
    },
    callback_retrieve: function(result) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        this.eve = result.data;
      }
    },

    radioChange: function(e) {
      this.eve.mac_log_type = e.detail.value;
    },

    //提交
    raise: function() {
      if (this.btndisabled) {
        this.$refs.toastAlert.config = {
          type: "warning",
          title: "已经登记过设备事件"
        };
        this.$refs.toastAlert.show = true;
        return;
      }
      if (
        this.eve.mac_log_type == undefined ||
        this.eve.mac_log_type.length == 0
      ) {
        this.$refs.toastAlert.config = {
          type: "warning",
          title: "请选择设备事件类型"
        };
        this.$refs.toastAlert.show = true;
        return;
      }
      this.$refs.pf.showLoading("提交中");
      $.post_json(
        appsettings.apiroot + "home/machine/log/create",
        this.eve,
        this.callback_raise
      );
    },

    callback_raise: function(result) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        //提示提交成功（提示页面加链接回到我的需求响应界面）
        this.btndisabled = true;
        this.$refs.toastAlert.config = {
          type: "success",
          title: "提交成功！"
        };
        this.$refs.toastAlert.show = true;
        // window.opener.location.reload();
      } else {
        this.$refs.toastAlert.config = {
          type: "error",
          title: "保设备事件失败！",
          msg: result.message
        };
        this.$refs.toastAlert.show = true;
      }
    },

    deleteAtttachment: function(attach, attach_index) {
      var self = this;
      var data = {
        oid: attach.oid,
        source_oid: this.eve.oid,
        target_type: 9, //v_all_target_type
        cache_key: "MachineLog_"
      };

      this.$refs.pf.confirmShow({
        only_alert: false,
        action_code: "deleteA",
        title: "删除附件",
        msg:
          "确定要删除附件【" + attach.file_name + attach.file_type + "】吗？",
        success: function(res) {
          if (res.confirm == true) {
            //do delete
            $.post_json(
              appsettings.apiroot + "utility/attachment/delete",
              data,
              self.callback_deleteAtttachment,
              attach_index
            );
          }
        }
      });
    },
    callback_deleteAtttachment: function(result, attach_index) {
      if (result != null && result.status == 0) {
        this.fileList.splice(attach_index, 1);
      } else {
        //删除失败
        this.$refs.toastAlert.showToast(
          "error",
          "删除附件失败",
          result.message
        );
      }
    },

    uploadAttachment: function() {
      $("#uploaderInput input").click();
    },

    InitUploader: function() {
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
        pick: "#uploaderInput",
        multiple: true,
        // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
        resize: false,
        chunkSize: 4000880
      });

      this.uploader.on("beforeFileQueued", function(file) {});

      this.uploader.on("fileQueued", function(file) {
        self.uploader.options.formData.guid = Math.random();
        file.index = self.uploading_files.length;
        self.uploading_progresses.push("0");
        self.uploader.options.formData.soid = self.eve.oid;
        self.uploader.options.formData.target_type = 12;
        self.uploader.options.formData.cache_key = "MachineLog_";
        self.uploader.options.formData.token = window.localStorage.getItem(
          "token"
        );
        //如果是图片，则生成缩略图
        if (htmlHelper.isImg("." + file.ext)) {
          self.uploader.makeThumb(
            file,
            function(error, ret) {
              file.url = ret;
              self.uploading_files.push(file);
            },
            100,
            100
          );
        } else {
          //其他文件，则用一个背景图片
          file.url = appsettings.gyhImgPrefix + "file.png";
          self.uploading_files.push(file);
        }
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
              appsettings.login_url + encodeURIComponent(window.location.href);
            return false;
          }
        }
      });

      this.uploader.on("uploadSuccess", function(file, response) {
        response = JSON.parse(response);

        if (response != null) {
          if (response.status == 0) {
            let albumList = self.fileList;
            var uploading_file = response.data;
            uploading_file.ok = true;
            uploading_file.index = file.index;

            self.fileList.push(uploading_file);
            setTimeout(() => {
              self.uploading_files.splice(uploading_file.index, 1);
            }, 0);
          } else if (response.status == 9999) {
            window.location.href =
              appsettings.login_url + encodeURIComponent(window.location.href);
          } else if (response.status < 0) {
            self.$refs.toastAlert.config = {
              type: "error",
              title: "上传附件失败",
              msg: result.message
            };
            self.$refs.toastAlert.show = true;
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
    }
  }
};
</script>

<style>
</style>
