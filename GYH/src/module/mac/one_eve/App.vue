<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <!-- main -->
        <div class="col g-ml-45 g-ml-0--lg g-pb-65--md">
          <div class="g-pa-20">
            <div class="media-md align-items-center g-mb-30">
              <div class="d-flex g-mb-15 g-mb-0--md">
                <h1 class="g-font-weight-400 g-font-size-28 g-color-black">设备事件</h1>
              </div>
            </div>
            <div class="table-responsive g-mb-40">
              <div class="col-md-9">
                <div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-20--md">
                  <form class="js-validate">
                    <header>
                      <h2
                        class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0"
                      >设备事件</h2>
                    </header>

                    <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-30--md">

                    <div class="row g-mb-20">
                      <div class="col-md-2 align-self-center g-mb-5 g-mb-0--md">
                        <img
                          class="g-width-80--md img-fluid rounded-circle"
                          :src="appsettings.userimg+eve_info.reporter_picture"
                        >
                      </div>
                      <div class="col-md-10 d-flex">
                        <div class="form-group g-pos-rel mb-0 g-mr-20">
                          <div class="mb-0">
                            <b>
                              <b>设备事件类型</b>
                              {{eve_info.mac_log_type_name}}
                            </b>
                          </div>
                          <div class="mb-0">
                            <b>{{eve_info.create_time}}</b>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">产品名称</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve_info.product_name}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">设备编号</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve_info.machine_no}}C</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">部件</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve_info.part_name}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">描述</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve_info.content}}</label>
                        </div>
                      </div>
                    </div>
                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">报告人公司</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve_info.reporter_company}}</label>
                        </div>
                      </div>
                    </div>
                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">报告人</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve_info.reporter_name}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">报告人邮箱</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve_info.reporter_email}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">报告人电话</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve_info.reporter_mobile}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20" v-if="attachment_pic_list&&attachment_pic_list.length>0">
                      <div class="col-md-12 align-self-center g-mb-20">
                        <label class="mb-0" for="#lastName">图片视频</label>
                      </div>
                      <ElAttachmentPic
                        :attachment_pic_list="attachment_pic_list"
                        :file_prefix="appsettings.comfile_prefix"
                      ></ElAttachmentPic>
                    </div>
                    <div class="row g-mb-20" v-if="attachment_doc_list&&attachment_doc_list.length>0">
                      <div class="col-md-12 align-self-center g-mb-20">
                        <label class="mb-0" for="#lastName">附件</label>
                      </div>
                      <ElAttachmentDoc
                        :attachment_doc_list="attachment_doc_list"
                        :file_prefix="appsettings.comfile_prefix"
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
      eve_oid: "",
      eve_info: {},
      attachments: [],
      attachment_pic_list: [],
      attachment_doc_list: []
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
    var that = this;
    this.eve_oid = $.getUrlParam("oid");
    var data = { oid: this.eve_oid };
    $.post_json(
      appsettings.apiroot + "machine/log/info",
      data,
      this.callback_getEveInfo
    );
    this.$refs.pf.showLoading("加载中");
  },
  mounted: function() {},
  methods: {
    isImg: function(type) {
      type = (type || "").toUpperCase();
      if (
        type == ".JPG" ||
        type == ".JPEG" ||
        type == ".BMP" ||
        type == ".PNG"
      ) {
        return true;
      }
      return false;
    },
    isVideo: function(type) {
      type = (type || "").toUpperCase();
      if (type == ".MP4" || type == ".WMA") {
        return true;
      }
      return false;
    },

    callback_getEveInfo: function(result) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        var that = this;
        this.eve_info = result.data.core;
        this.attachments = result.data.attachments;
        this.attachment_pic_list = result.data.attachment_pic_list;
        this.attachment_doc_list = result.data.attachment_doc_list;
      } else if (result.status < 0) {
        //failed
        this.$refs.toastAlert.config = {
          type: "error",
          title: "数据加载错误",
          msg: result.message
        };
        this.$refs.toastAlert.show = true;
      }
    }
  }
};
</script>

<style>
.nopaddingl {
  padding-left: 0 !important;
}
.inbox-download {
  margin: 0;
  padding: 15px 20px;
  min-height: 253px;
}
.inbox-download-list li > :first-child > :first-child > img {
  max-height: 120px;
}
.text-muted {
  width: 100px;
  display: inline-block;
}
</style>
