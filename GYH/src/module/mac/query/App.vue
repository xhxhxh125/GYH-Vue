<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <!-- main -->
        <div class="col g-ml-45 g-ml-0--lg g-pb-65--md">
          <div class="g-pa-20">
            <div class="media-md align-items-center g-mb-30">
              <div class="d-flex g-mb-15 g-mb-0--md">
                <h1 class="g-font-weight-400 g-font-size-28 g-color-black">我的设备</h1>
              </div>

              <div class="media d-md-flex align-items-center ml-auto">
                <div class>
                  <a
                    class="js-fancybox btn btn-xl u-btn-secondary g-width-140--md g-font-size-default g-ml-10"
                    v-if="userrole.iscomadmin"
                    :href="'/mac/edit_mac.html'"
                    target="_blank"
                  >新增设备</a>
                  <a
                    class="js-fancybox btn btn-xl u-btn-secondary g-width-140--md g-font-size-default g-ml-10"
                    v-if="userrole.iscomadmin"
                    :href="'/mac/batch_gen_mac.html'"
                    target="_blank"
                  >批量添加设备</a>
                  <a
                    class="js-fancybox btn btn-xl u-btn-secondary g-width-140--md g-font-size-default g-ml-10"
                    v-if="userrole.iscomadmin"
                    :href="'/mac/query_eve.html'"
                    target="_blank"
                  >设备事件</a>
                </div>

                <div class="d-flex g-ml-15 g-ml-55--md">
                  <div class="input-group g-pos-rel g-width-320--md">
                    <input
                      id="datatableSearch3"
                      class="form-control g-font-size-default g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-20 g-pl-20 g-pr-50 g-py-10"
                      type="text"
                      placeholder="产品名称/设备编号/客户名称/使用公司"
                      v-model="query_data.keywords"
                      @keyup.enter="search()"
                    >
                    <button
                      class="btn g-pos-abs g-top-0 g-right-0 g-z-index-2 g-width-60 h-100 g-bg-transparent g-font-size-16 g-color-primary g-color-secondary--hover rounded-0"
                      @click="search()"
                    >
                      <i class="hs-admin-search g-absolute-centered"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="media g-mb-30">
              <div class="d-flex align-self-center align-items-center">
                <span class="g-hidden-sm-down g-color-gray-dark-v6 g-mr-10">显示</span>

                <div class="u-select--v1 g-pr-15 g-mr-15">
                  <select
                    class="js-select u-select--v1-select w-100"
                    style="display: none;"
                    :value="query_data.page_size"
                    @change="onShowRecordsChange($event)"
                  >
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                  <i
                    class="hs-admin-angle-down g-absolute-centered--y g-right-0 g-color-gray-light-v6 ml-auto"
                  ></i>
                </div>
                <span class="g-hidden-sm-down g-color-gray-dark-v6 g-mr-12">条</span>
              </div>
            </div>

            <div class="table-responsive">
              <table class="js-datatable table u-table--v3 u-editable-table--v1 g-color-black">
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        v-model="checked_all"
                        @click="selectAllMachine($event)"
                      >全选
                    </th>
                    <th>设备编号</th>
                    <th>产品名称</th>
                    <th>客户名称</th>
                    <th>联系电话</th>
                    <th>购买时间</th>
                    <th>创建时间</th>
                    <th>更新时间</th>
                    <th>操作</th>
                  </tr>
                </thead>

                <tbody>
                  <tr class="row-show" v-for="(mac,index) in mac_list" :key="index">
                    <td>
                      <input
                        type="checkbox"
                        v-model="mac.checked"
                        @click="selectMachine(mac,$event)"
                        name="maccheckbox"
                      >
                    </td>
                    <td>
                      <a
                        :href="'/mac/one_mac.html?id='+mac.seqid"
                        target="_blank"
                      >{{mac.machine_no}}</a>
                    </td>
                    <td>
                      <a
                        :href="appsettings.portal_root+'Product/OneProduct.aspx?id='+mac.product_oid"
                        target="_blank"
                      >{{mac.product_name}}</a>
                    </td>
                    <td>{{mac.customer}}</td>
                    <td>{{mac.tel}}</td>
                    <td>{{mac.buy_time}}</td>
                    <td>{{mac.create_time}}</td>
                    <td>{{mac.update_time}}</td>
                    <td>
                      <a
                        class="u-tags-v1 text-center g-brd-around g-font-size-default g-rounded-50 g-px-5"
                        style="background:#e9e9e9;color: black"
                        v-if="isCreatorOrUser(mac)"
                        :href="'/mac/edit_mac.html?mac_id='+mac.seqid"
                        target="_blank"
                      >修改</a>
                      <a
                        class="u-tags-v1 text-center g-brd-around g-font-size-default g-color-white g-rounded-50 g-px-5"
                        style="background:#F44336;"
                        v-if="isCreator(mac)&&userrole.iscomadmin"
                        href="javascript:void(0);"
                        @click="delMac(mac,index)"
                      >删除</a>
                      <a
                        class="u-tags-v1 text-center g-brd-around g-font-size-default g-color-white g-rounded-50 g-px-5"
                        style="background:#2196f3;"
                        v-if="isCreatorOrUser(mac)"
                        :href="'/mac/query_eve.html?mac_oid='+mac.oid+'&pro_name=' + mac.product_name + '&mac_no=' + mac.machine_no "
                        target="_blank"
                      >设备事件</a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="media align-items-center g-mb-45 g-pa-20">
                <ElPager :pageTotal="query_data.pageTotal" @changePage="changePage"></ElPager>
                <a
                  class="js-fancybox btn btn-xl u-btn-secondary g-width-140--md g-font-size-default g-ml-10"
                  v-if="userrole.iscomadmin"
                  href="javascript:void(0)"
                  @click="batch_del_mac()"
                >批量删除设备</a>
                <a
                  class="js-fancybox btn btn-xl u-btn-secondary g-width-180--md g-font-size-default g-ml-10"
                  href="javascript:void(0)"
                  @click="batch_gen_qrcode()"
                >批量下载设备小程序码</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ElPageFrame>

    <ElToastAlert ref="toastAlert"></ElToastAlert>
    <a id="download" href="javascript:void(0);" @click="downloadclick" target="_blank"></a>
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
      userrole: {},

      query_data: {
        keywords: "",
        page_index: 1,
        page_size: 10,
        page_total: 1
      },
      currentMac: {},
      mac_list: [],
      checked_all: false,

      downloadfile: "",

      eve_query_data: {
        company_oid: "",
        machine_oid: "",
        statuses: "0,1",
        page_index: 1,
        page_size: 10,
        page_total: 1
      },
      eve_list: [],

      qnr_query_data: {
        company_oid: "",
        statuses: "0,1",
        page_index: 1,
        page_size: 10,
        page_total: 1
      },

      qnr_list: []
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
    //console.log('page load');
    var that = this;
    this.company_oid = $.getUrlParam("com_oid");
    this.query_data.company_oid = $.getUrlParam("com_oid");
    htmlutils.setPageTitle("设备列表");

    $.post_json(
      appsettings.apiroot + "home/machine/macuserrole",
      { create_company_oid: "", company_oid: "" },
      this.callback_iscreator
    );

    this.getMacList();

    // this.eve_query_data.company_oid = $.getUrlParam("com_oid");
    // this.getEveList();

    // this.qnr_query_data.company_oid = $.getUrlParam("com_oid");
    // this.getQnrList();
  },
  mounted: function() {},
  methods: {
    search: function() {
      this.getMacList();
    },
    onShowRecordsChange: function(e) {
      this.query_data.page_index = 1;
      this.query_data.page_size = e.currentTarget.value;
      this.getMacList();
    },
    callback_iscreator: function(result) {
      if (result != null && result.status == 0) {
        this.userrole = result.data;
      }
    },

    isCreatorOrUser: function(mac) {
      if (mac != undefined) {
        return (
          this.userrole.user_company_oid == mac.create_company_oid ||
          mac.tel.indexOf(this.userrole.user_mobile) > 0
        );
      }
    },
    isCreator: function(mac) {
      if (mac != undefined) {
        return this.userrole.user_company_oid == mac.create_company_oid;
      }
    },
    getMacList: function() {
      this.query_data.statuses = "0,1";
      if (this.$refs.pf != undefined) {
        this.$refs.pf.showLoading("Loading");
      }
      $.post_json(
        appsettings.apiroot + "home/machine/retrieve",
        this.query_data,
        this.callback_renderMacList
      );

      // $.post_json(
      //   appsettings.apiroot + "account/workin",
      //   this.query_data,
      //   this.callback_getMacList
      // );
      // if (this.$refs.pf != undefined) {
      //   this.$refs.pf.showLoading("Loading");
      // }
    },
    // callback_getMacList: function (result) {
    //   if (result != null && result.status == 0) {
    //     this.isMyCompany = result.data === "1" || this.isMyCompany;

    //     if (
    //       this.company_oid == undefined ||
    //       this.company_oid.length == 0 ||
    //       this.isMyCompany
    //     ) {
    //       (this.query_data.statuses = "0,1"),
    //       $.post_json(
    //         appsettings.apiroot + "home/machine/retrieve",
    //         this.query_data,
    //         this.callback_renderMacList
    //       );
    //     } else {
    //       $.post_json(
    //         appsettings.apiroot + "machine/retrieve",
    //         this.query_data,
    //         this.callback_renderMacList
    //       );
    //     }
    //   }
    // },

    callback_renderMacList: function(result) {
      if (this.$refs.pf != undefined) {
        this.$refs.pf.hideLoading();
      }
      if (result != null && result.status == 0) {
        this.mac_list = result.data.datalist;
        this.query_data.pageTotal = result.data.page.total_page_count;
        this.checked_all = false;
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

    delMac: function(mac, index) {
      that = this;
      mac.index = index;
      if (
        this.company_oid == undefined ||
        this.company_oid.length == 0 ||
        this.isMyCompany
      ) {
        this.$refs.pf.confirmShow({
          title: "删除设备",
          msg: "确定要删除设备吗？",
          data: mac,
          success: that.doDelMac
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

    doDelMac: function(res) {
      if (res.confirm == true) {
        this.currentMac = JSON.parse(JSON.stringify(res.data));
        this.$refs.pf.showLoading("提交中");
        var data = {};
        data.oid = this.currentMac.oid;
        $.post_json(
          appsettings.apiroot + "home/machine/delete",
          data,
          this.callback_doDelMac
        );
      }
    },

    callback_doDelMac: function(result) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        this.mac_list.splice(this.currentMac.index, 1);
        this.currentMac = null;
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
      this.currentMac = null;
    },

    changePage: function(page_index) {
      this.query_data.page_index = page_index;
      this.getMacList();
    },
    selectAllMachine: function(event) {
      for (var i = 0; i < this.mac_list.length; i++) {
        var mac = this.mac_list[i];
        mac.checked = event.currentTarget.checked;
      }
    },
    getSelectedMachines: function() {
      var selectedMachines = [];
      for (var i = 0; i < this.mac_list.length; i++) {
        var mac = this.mac_list[i];
        if (mac.checked) selectedMachines.push(mac);
      }
      return selectedMachines;
    },
    selectMachine: function(mac, event) {
      this.checked_all = false;
      mac.checked = event.currentTarget.checked;
    },
    batch_gen_qrcode: function() {
      //调用api 生成小程序码 打包 下载
      var a = appsettings.apiroot;
      var b = appsettings.ossImgPrefix;
      var selectedMachines = this.getSelectedMachines();
      var data = {
        api: "home/machine/batch/wx/poster",
        path: "maccoll/pages/one_mac/one_mac", //小程序的路径
        backgroud: appsettings.ossImgPrefix + "blank_background.jpg",
        machines: selectedMachines
      };
      this.$refs.pf.showLoading("小程序码生成中");
      var that = this;
      $.showPoster(data, function(result) {
        that.$refs.pf.hideLoading();
        if (result.status == 0) {
          if (result.data != null && result.data != undefined) {
            //下载小程序码压缩包
            that.downloadfile = appsettings.posterimg + result.data;
            document.getElementById("download").click();
          }
        } else {
          that.$refs.toastAlert.config = {
            type: "error",
            title: "批量下载小程序码失败",
            msg: result.message
          };
          that.$refs.toastAlert.show = true;
        }
      });
    },
    batch_del_mac: function() {
      that = this;
      var selectedMachines = this.getSelectedMachines();
      if (
        this.company_oid == undefined ||
        this.company_oid.length == 0 ||
        this.isMyCompany
      ) {
        if (selectedMachines == undefined || selectedMachines.length == 0) {
          this.$refs.toastAlert.config = {
            type: "warning",
            title: "请选择将要删除的设备",
            msg: ""
          };
          this.$refs.toastAlert.show = true;
          return;
        }

        this.$refs.pf.confirmShow({
          title: "批量删除设备",
          msg: "确定要批量删除设备吗？",
          data: selectedMachines,
          success: that.doBatchDelMac
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

    doBatchDelMac: function(res) {
      if (res.confirm == true) {
        this.$refs.pf.showLoading("提交中");

        var batchDelMacsOid = [];
        for (var i = 0; i < this.mac_list.length; i++) {
          var mac = this.mac_list[i];
          if (mac.checked) batchDelMacsOid.push(mac.oid);
        }
        var data = { machineoidlist: batchDelMacsOid };
        $.post_json(
          appsettings.apiroot + "home/machine/list/delete",
          data,
          this.callback_doBatchDelMac
        );
      }
    },

    callback_doBatchDelMac: function(result) {
      this.$refs.pf.hideLoading();

      if (result != null && result.status == 0) {
        this.search();
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

    downloadclick: function() {
      window.open(this.downloadfile, "_blank");
    }

    // getEveList: function () {
    //   $.post_json(appsettings.apiroot + "home/machine/log/retrieve", this.eve_query_data, this.callback_getEveList);
    //   if (this.$refs.pf != undefined) {
    //     this.$refs.pf.showLoading("加载中...");
    //   }

    // },
    // callback_getEveList: function (result) {
    //   this.$refs.pf.hideLoading();
    //   if (result != null && result.status == 0) {
    //     this.eve_list = result.data.datalist;
    //     this.eve_query_data.page_total = result.data.page.total_page_count;
    //   } else if (result.status < 0) {
    //     this.$refs.toastAlert.config = {
    //       type: "error",
    //       title: "数据加载错误",
    //       msg: result.message,
    //     };
    //     this.$refs.toastAlert.show = true;
    //   }
    // },

    // getQnrList: function () {
    //   $.post_json(appsettings.apiroot + "home/machine/survey/retrieve", this.qnr_query_data, this.callback_getQnrList);
    //   if (this.$refs.pf != undefined) {
    //     this.$refs.pf.showLoading("加载中...");
    //   }
    // },

    // callback_getQnrList: function (result) {
    //   this.$refs.pf.hideLoading();
    //   if (result != null && result.status == 0) {
    //     this.qnr_list = result.data.datalist;
    //     this.qnr_query_data.page_total = result.data.page.total_page_count;
    //   } else if (result.status < 0) {
    //     this.$refs.toastAlert.config = {
    //       type: "error",
    //       title: "数据加载错误",
    //       msg: result.message,
    //     };
    //     this.$refs.toastAlert.show = true;
    //   }
    // },
  }
};
</script>

<style>
/* .widget-body {
    padding: 0 !important;
  }

  .nopaddingl {
    padding-left: 0 !important;
  }
  .btn-group>a {
    margin-right: 5px;
  }
  .table {
    border-bottom: 1px solid #ccc !important;
  }
  .no-padding .table-bordered {
    border-bottom: 1px solid #ccc !important;
  }
   .table-bordered,
  .no-padding>.table-responsive>.table-bordered {
    border-bottom: 1px solid #ccc !important;
  } */
</style>