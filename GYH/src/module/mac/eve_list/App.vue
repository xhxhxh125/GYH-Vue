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
            <div class="media g-mb-30">
              <div class="d-flex align-self-center align-items-center">
                <a
                  class="js-fancybox btn btn-xl u-btn-secondary g-width-140--md g-font-size-default g-ml-10"
                  v-if="eve_query_data.machine_oid!=undefined&&eve_query_data.machine_oid.length>0"
                  :href="'/mac/edit_eve.html?mac_oid='+eve_query_data.machine_oid+'&pro_name=' + product_name + '&mac_no=' + machine_no "
                  target="_blank"
                >新增事件</a>
              </div>
            </div>

            <div class="g-mb-40 row">
              <div class="col-md-4 g-mb-20" v-for="(eve,index) in eve_list" :key="index">
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
                          :src="appsettings.userimg+eve.core.reporter_picture"
                        >
                      </div>
                      <div class="col-md-10 d-flex">
                        <div class="form-group g-pos-rel mb-0 g-mr-20">
                          <div class="mb-0">
                            <b>
                              <b>设备事件类型</b>
                              {{eve.core.mac_log_type_name}}
                            </b>
                          </div>
                          <div class="mb-0">
                            <b>{{eve.core.create_time}}</b>
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
                          <label for>{{eve.core.product_name}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">设备编号</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve.core.machine_no}}C</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">部件</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve.core.part_name}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">描述</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve.core.content}}</label>
                        </div>
                      </div>
                    </div>
                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">报告人公司</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve.core.reporter_company}}</label>
                        </div>
                      </div>
                    </div>
                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">报告人</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve.core.reporter_name}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">报告人邮箱</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve.core.reporter_email}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">报告人电话</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <label for>{{eve.core.reporter_mobile}}</label>
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-12 align-self-center g-mb-20">
                        <label class="mb-0" for="#lastName">附件</label>
                      </div>
                      <div class="col-md-12 align-self-center d-flex g-mb-15 flex-wrap">
                        <!-- Cube Portfolio Blocks - Item -->
                        <div
                          class="cbp-item identity design col-md-3"
                          v-for="(att,index) in attachments"
                          :key="index"
                        >
                          <!-- 图片 -->
                          <div
                            v-if="isImg(att.file_type)"
                            class="u-block-hover g-parent"
                            style="min-height:150px; max-height:200px;text-align:center;"
                          >
                            <img
                              class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
                              :src="appsettings.comfile_prefix+att.oid+att.file_type"
                              alt="Image description"
                              style="object-fit: cover; height:200px;"
                            >
                            <a
                              :href="appsettings.comfile_prefix+att.oid+att.file_type"
                              target="_blank"
                            >
                              <div
                                class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-15"
                              >
                                <ul
                                  class="align-items-end flex-column list-inline mt-auto ml-auto mb-0"
                                >
                                  <li class="list-inline-item">
                                    <a
                                      class="u-icon-v2 u-icon-size--xs g-brd-white g-color-black g-bg-white rounded-circle"
                                      href="#!"
                                    >
                                      <i class="hs-admin-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </a>
                          </div>

                          <!-- 视频 -->
                          <div
                            v-else-if="isVideo(att.file_type)"
                            class="u-block-hover g-parent"
                            style="min-height:150px; max-height:200px;text-align:center;"
                          >
                            <img
                              class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
                              :src="appsettings.gyhImgPrefix+'video_poster.jpg'"
                              alt="Image description"
                              style="object-fit: cover; height:200px;"
                            >
                            <a
                              :href="appsettings.comfile_prefix+att.oid+att.file_type"
                              target="_blank"
                            >
                              <div
                                class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-15"
                              >
                                <ul
                                  class="align-items-end flex-column list-inline mt-auto ml-auto mb-0"
                                >
                                  <li class="list-inline-item">
                                    <a
                                      class="u-icon-v2 u-icon-size--xs g-brd-white g-color-black g-bg-white rounded-circle"
                                      href="#!"
                                    >
                                      <i class="hs-admin-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </a>
                          </div>

                          <div
                            class="g-bg-white text-center g-pa-15"
                            v-if="isImg(att.file_type)||isVideo(att.file_type)"
                          >
                            <p
                              class="g-font-size-13 mb-0"
                              style="word-break:break-all"
                            >{{att.file_name+att.file_type}}</p>
                          </div>
                        </div>
                        <!-- End Cube Portfolio Blocks - Item -->
                      </div>

                      <div
                        class="col-md-12 align-self-center g-mb-20"
                        v-if="attachment_doc_list&&attachment_doc_list.length>0"
                      >
                        <div class="table-responsive g-mb-40">
                          <table
                            class="js-datatable table u-table--v3 u-editable-table--v1 g-color-black"
                          >
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>文件名称</th>
                                <th>上传时间</th>
                                <th>操作</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr v-for="(att,index) in attachment_doc_list" :key="index">
                                <td>{{index+1}}</td>
                                <td>
                                  <a
                                    :href="appsettings.comfile_prefix+att.oid+att.file_type"
                                    target="_blank"
                                  >{{att.file_name+att.file_type}}</a>
                                </td>
                                <td>{{att.update_time}}</td>
                                <td>
                                  <a
                                    class="u-link-v5 g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover g-ml-12"
                                    href="#!"
                                  >
                                    <i class="hs-admin-trash"></i>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
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

export default {
  name: "app",
  data: function() {
    return {
      company_oid: "",
      isMyCompany: false,

      currentEve: {},

      product_name: "",
      machine_no: "",

      eve_query_data: {
        company_oid: "",
        machine_oid: "",
        statuses: "0,1",
        page_index: 1,
        page_size: 10,
        page_total: 1
      },
      eve_list: []
    };
  },
  components: {
    ElPageFrame,
    ElPager,
    ElBlockAlert,
    ElToastAlert
  },
  created: function() {
    //get queryfields
    var that = this;
    htmlutils.setPageTitle("设备事件");
    this.eve_query_data.company_oid = $.getUrlParam("com_oid");
    this.eve_query_data.machine_oid = $.getUrlParam("mac_oid");
    this.product_name = $.getUrlParam("pro_name");
    this.machine_no = $.getUrlParam("mac_no");
    this.getEveList();
  },
  mounted: function() {},
  methods: {
    delEve: function(eve, index) {
      that = this;
      eve.index = index;
      if (
        this.company_oid == undefined ||
        this.company_oid.length == 0 ||
        this.isMyCompany
      ) {
        this.$refs.pf.confirmShow({
          title: "删除事件",
          msg: "确定要删除事件吗？",
          data: eve,
          success: that.doDelEve
        });
      } else {
        this.$refs.toastAlert.config = {
          type: "warning",
          title: "您没有权限",
          msg: ""
        };
        this.$refs.toastAlert.show = true;
      }
    },

    doDelEve: function(res) {
      if (res.confirm == true) {
        this.currentEve = JSON.parse(JSON.stringify(res.data));
        this.$refs.pf.showLoading("提交中");
        var data = {};
        data.oid = this.currentEve.oid;
        $.post_json(
          appsettings.apiroot + "home/machine/log/delete",
          data,
          this.callback_doDelEve
        );
      }
    },

    callback_doDelEve: function(result) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        this.eve_list.splice(this.currentEve.index, 1);
        this.currentEve = null;
      } else {
        //拒绝失败
        this.$refs.toastAlert.config = {
          type: "error",
          title: "删除失败",
          msg: ""
        };
        this.$refs.toastAlert.show = true;
      }
    },
    cancelDel: function() {
      this.currentEve = null;
    },

    changePage: function(page_index) {
      this.eve_query_data.page_index = page_index;
      this.getEveList();
    },

    getEveList: function() {
      $.post_json(
        appsettings.apiroot + "home/machine/logfullinfo/retrieve",
        this.eve_query_data,
        this.callback_getEveList
      );
      if (this.$refs.pf != undefined) {
        this.$refs.pf.showLoading("加载中...");
      }
    },
    callback_getEveList: function(result) {
      if (this.$refs.pf != undefined) {
        this.$refs.pf.hideLoading();
      }
      if (result != null && result.status == 0) {
        this.eve_list = result.data.datalist;
        this.eve_query_data.page_total = result.data.page.total_page_count;
      } else if (result.status < 0) {
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
</style>
