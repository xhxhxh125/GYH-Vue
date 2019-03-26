<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <!-- main -->
        <div class="col g-ml-45 g-ml-0--lg g-pb-65--md">
          <div class="g-pa-20">
            <div class="media-md align-items-center g-mb-30">
              <div class="d-flex g-mb-15 g-mb-0--md">
                <h1 class="g-font-weight-400 g-font-size-28 g-color-black">设备详情</h1>
              </div>
            </div>
            <div class="table-responsive g-mb-40">
              <div class="col-md-9">
                <div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-20--md">
                  <form class="js-validate">
                    <header>
                      <h2
                        class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0"
                      >设备信息</h2>
                    </header>

                    <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-30--md">

                    <div class="row g-mb-20">
                      <div class="col-md-2 align-self-center g-mb-5 g-mb-0--md">
                        <img
                          class="g-width-80--md"
                          :src="appsettings.comimg+mac_info.create_company_logo"
                          alt
                        >
                      </div>
                      <div class="col-md-10 d-flex">
                        <div class="form-group g-pos-rel mb-0 g-mr-20">
                          <div class="mb-0">
                            <b>{{mac_info.machine_no}}</b>
                          </div>
                          <div class="mb-0">
                            <b>{{mac_info.product_name}}</b>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-2 d-flex"></div>
                      <div class="col-md-8 d-flex">
                        <img
                          :src="appsettings.proimg+mac_info.product_picture"
                          alt="img"
                          class="w-100 h-100"
                        >
                      </div>
                    </div>

                    <!-- 用户或者创建者，有修改按钮，有事件按钮 -->
                    <div class="row g-mb-20">
                      <a
                        class="js-fancybox btn btn-xl u-btn-secondary g-width-140--md g-font-size-default g-ml-10"
                        v-if="userrole.isuser||userrole.iscreator"
                        :href="'/mac/edit_mac.html?mac_id='+mac_info.seqid"
                        target="_blank"
                      >修改</a>
                      <a
                        class="js-fancybox btn btn-xl u-btn-secondary g-width-140--md g-font-size-default g-ml-10"
                        v-if="userrole.isuser||userrole.iscreator"
                        :href="'/mac/eve_list.html?mac_oid='+mac_info.oid+'&pro_name=' + mac_info.product_name + '&mac_no=' + mac_info.machine_no "
                        target="_blank"
                      >事件</a>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">产品价格</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.product_price}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">产品亮点</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.product_hight_light}}C</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">创建公司</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.create_company_name}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">设备编号</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.machine_no}}</label>
                        </div>
                      </div>
                    </div>
                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">客户名称</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.customer}}</label>
                        </div>
                      </div>
                    </div>
                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">联系电话</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.tel}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">购买日期</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.buy_time}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">安装城市</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.province}}</label>
                        </div>
                      </div>
                    </div>
                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">安装地址</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.setup_address}}</label>
                        </div>
                      </div>
                    </div>
                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">合同编号</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.contract_no}}</label>
                        </div>
                      </div>
                    </div>
                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">合同开始日期</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.contract_start}}</label>
                        </div>
                      </div>
                    </div>
                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">合同截止日期</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.contract_end}}</label>
                        </div>
                      </div>
                    </div>
                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">服务开始日期</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.service_start}}</label>
                        </div>
                      </div>
                    </div>
                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">服务截止日期</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.service_end}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">备注</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{mac_info.remark}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20" v-if="userrole.isuser||userrole.iscreator">
                      <div class="col-md-12 align-self-center g-mb-20">
                        <label class="mb-0" for="#lastName">图片视频</label>
                      </div>
                      <ElAttachmentPic
                        :attachment_pic_list="attachment_pic_list"
                        :file_prefix="appsettings.comfile_prefix"
                      ></ElAttachmentPic>
                    </div>
                    <div class="row g-mb-20" v-if="userrole.isuser||userrole.iscreator">
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
import ElVideoPlayer from "components/el-videoplayer/el-videoplayer";
import ElAttachmentPic from "components/el-AttachmentPic/el-AttachmentPic";
import ElAttachmentDoc from "components/el-AttachmentDoc/el-AttachmentDoc";

export default {
  name: "app",
  data: function() {
    return {
      mac_id: "",
      product_query: {},
      mac_info: {},
      attachments: [],
      attachment_pic_list: [],
      attachment_doc_list: [],
      userrole: {},
      previewPicSrc: ""
    };
  },
  components: {
    ElPageFrame,
    ElPager,
    ElBlockAlert,
    ElToastAlert,
    ElVideoPlayer,
    ElAttachmentPic,
    ElAttachmentDoc
  },
  created: function() {
    //get queryfields
    var that = this;
    htmlutils.setPageTitle("设备详情");
    //this.$refs.pf.showLoading("加载中");
    this.mac_id = $.getUrlParam("id");

    var data = { seqid: this.mac_id };
    $.post_json(
      appsettings.apiroot + "machine/info",
      data,
      this.callback_getMacInfo
    );
  },
  mounted: function() {},
  methods: {
    callback_getMacInfo: function(result) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        var that = this;
        this.mac_info = result.data.core;
        this.attachments = result.data.attachment_pic_list.concat(
          result.data.attachment_doc_list
        );
        this.attachment_pic_list = result.data.attachment_pic_list;
        this.attachment_doc_list = result.data.attachment_doc_list;
        //判断用户角色
        $.post_json(
          appsettings.apiroot + "home/machine/macuserrole",
          {
            create_company_oid: this.mac_info.create_company_oid,
            company_oid: this.mac_info.company_oid,
            tel: this.mac_info.tel
          },
          this.callback_iscreator
        );
      } else if (result.status < 0) {
        //failed
        this.$refs.toastAlert.config = {
          type: "error",
          title: "数据加载错误",
          msg: result.message
        };
        this.$refs.toastAlert.show = true;
      }
    },

    callback_iscreator: function(result) {
      if (result != null && result.status == 0) {
        this.userrole = result.data;
      }
    },
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
    previewPic: function(src) {
      this.previewPicSrc = src;
      $("#previewpicmodal").modal("show");
    },
    closePreviewPic: function() {
      this.previewPicSrc = "";
      $("#previewpicmodal").modal("hide");
    },

    playVideo: function(src, title) {
      this.$refs.player.playVideo(src, title);
    },

    closeVideo: function() {
      this.$refs.player.closeVideo();
    },

    hideVideoModel: function() {
      $("#videomodel").modal("hide");
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

.inbox-download-list {
  margin: 10px;
  min-height: 320px;
}
.inbox-download-list li {
  margin: 0 5px 5px 0;
}
.inbox-download-list li > :first-child > :first-child > img {
  max-height: 130px;
}
.inbox-download-list li > :first-child > :first-child > :first-child > img {
  max-height: 130px;
}
.text-muted {
  width: 100px;
  display: inline-block;
}
.inbox-download-list li > :first-child {
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: Center;
}
.inbox-download-list li > :first-child span {
  overflow-wrap: break-word;
  width: 100%;
}
.inbox-download-list li > :first-child span a {
  padding: 5px;
  display: block;
}
.inbox-download-list li > :first-child span a i {
  display: block;
}
</style>
