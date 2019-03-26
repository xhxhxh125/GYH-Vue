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

              <div class="media d-md-flex align-items-center ml-auto" v-if="!isOneMac()">
                <div class="d-flex g-ml-15 g-ml-55--md">
                  <div class="input-group g-pos-rel g-width-320--md">
                    <input
                      id="datatableSearch3"
                      class="form-control g-font-size-default g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-20 g-pl-20 g-pr-50 g-py-10"
                      type="text"
                      placeholder="设备编号"
                      v-model="eve_query_data.machine_no"
                      @keyup.enter="queryClick()"
                    >
                    <button
                      class="btn g-pos-abs g-top-0 g-right-0 g-z-index-2 g-width-60 h-100 g-bg-transparent g-font-size-16 g-color-primary g-color-secondary--hover rounded-0"
                      type="submit"
                      href="javascript:void(0);"
                      @click="queryClick()"
                    >
                      <i class="hs-admin-search g-absolute-centered" style="color:#1cc9e4"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="media g-mb-30" v-if="isOneMac()">
              <div class="d-flex align-self-center align-items-center">
                <span class="g-hidden-sm-down g-color-gray-dark-v6 g-mr-10">设备编号：{{machine_no}}</span>
              </div>
            </div>
            <div class="table-responsive g-mb-40">
              <table class="js-datatable table u-table--v3 u-editable-table--v1 g-color-black">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>产品名称</th>
                    <th>设备事件类型</th>
                    <th v-if="!isOneMac()">设备编号</th>
                    <th>部件</th>
                    <th>描述</th>
                    <th>客户名称</th>
                    <th>联系电话</th>
                    <th>购买时间</th>
                    <th>报告人</th>
                    <th>报告时间</th>
                    <th>操作</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(item,index) in eve_list" :key="index">
                    <td>{{index+1}}</td>
                    <td>
                      <a
                        :href="appsettings.portal_root+'product/oneproduct.aspx?id='+item.product_oid"
                        target="_blank"
                      >{{item.product_name}}</a>
                    </td>
                    <td>{{item.mac_log_type_name}}</td>
                    <td v-if="!isOneMac()">
                      <a
                        :href="'/mac/one_mac.html?id='+item.machine_id"
                        target="_blank"
                      >{{item.machine_no}}</a>
                    </td>
                    <td>{{item.part_name}}</td>
                    <td>{{item.content}}</td>
                    <td>{{item.customer}}</td>
                    <td>{{item.tel}}</td>
                    <td>{{item.buy_time}}</td>
                    <td>{{item.reporter_name}}</td>
                    <td>{{item.create_time}}</td>
                    <td>
                      <a
                        class="u-tags-v1 text-center g-brd-around g-font-size-default g-color-white g-rounded-50 g-px-5"
                        style="background:#2196f3;"
                        :href="'/mac/one_eve.html?oid='+item.oid"
                        target="_blank"
                      >详情</a>
                      <a
                        class="u-tags-v1 text-center g-brd-around g-font-size-default g-color-white g-rounded-50 g-px-5"
                        style="background:#F44336;"
                        v-if="isCreator(item)&&userrole.iscomadmin"
                        href="javascript:void(0);"
                        @click="delEve(item,index)"
                      >删除</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="media align-items-center g-mb-45 g-pa-20">
                <ElPager :pageTotal="eve_query_data.pageTotal" @changePage="changePage"></ElPager>
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
import htmlutils from "common/htmlutils";
import ElPageFrame from "components/el-PageFrame/el-PageFrame";
import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";
import ElPager from "components/el-Pager/el-Pager";
export default {
  name: "app",
  data: function() {
    return {
      company_oid: "",
      isMyCompany: false,
      userrole: {},
      currentEve: {},

      product_name: "",
      machine_no: "",

      eve_query_data: {
        company_oid: "",
        machine_oid: "",
        machine_no: "",
        statuses: "0,1",
        page_index: 1,
        page_size: 20,
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
  computed: {},
  created: function() {
    var that = this;
    htmlutils.setPageTitle("设备事件");
    this.eve_query_data.company_oid = $.getUrlParam("com_oid");
    this.eve_query_data.machine_oid = $.getUrlParam("mac_oid");
    this.product_name = $.getUrlParam("pro_name");
    this.machine_no = $.getUrlParam("mac_no");

    $.post_json(
      appsettings.apiroot + "home/machine/macuserrole",
      { create_company_oid: "", company_oid: "" },
      this.callback_iscreator
    );

    this.getEveList();
  },
  mounted: function() {},
  methods: {
    isOneMac: function() {
      return (
        this.eve_query_data.machine_oid != undefined &&
        this.eve_query_data.machine_oid.length > 0
      );
    },
    callback_iscreator: function(result) {
      if (result != null && result.status == 0) {
        this.userrole = result.data;
      }
    },
    isCreator: function(eve) {
      if (eve != undefined) {
        return this.userrole.user_company_oid == eve.machine_create_company_oid;
      }
    },

    delEve: function(eve, index) {
      that = this;
      eve.index = index;
      if (
        this.company_oid == undefined ||
        this.company_oid.length == 0 ||
        this.isMyCompany
      ) {
        alert(2)
        this.$refs.pf.confirmShow({
          title: "删除设备事件",
          msg: "确定要删除设备事件吗？",
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
      alert(1)
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

    queryClick: function() {
      this.eve_query_data.page_index = 1;
      this.eve_query_data.statuses = "0,1";
      this.getEveList();
    },

    getEveList: function() {
      $.post_json(
        appsettings.apiroot + "home/machine/log/retrieve",
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
.pl {
  padding-left: 10px !important;
}

.pr {
  padding-right: 10px !important;
}

.row {
  margin: 0 -13px 0 -13px !important;
}

.widget-body {
  padding: 0 !important;
}

.border {
  border: solid 1px #ccc !important;
  border-bottom: none !important;
}

.no-padding .table-bordered {
  border-bottom: 1px solid #ccc !important;
}

.table-bordered,
.no-padding > .table-responsive > .table-bordered {
  border-bottom: 1px solid #ccc !important;
}

.rr {
  margin-right: -20px;
  margin-left: 5px;
}

.rl {
  margin-right: 2px;
}

.nowrap th,
.nowrap .nw {
  white-space: nowrap !important;
}

.nowrap {
  overflow-x: scroll !important;
}

.op {
  width: 7em;
}

.table {
  border-bottom: 1px solid #ccc !important;
}

.dropdown-menu {
  position: relative !important;
}

.jarviswidget > header {
  border: 0.5px solid #c2c2c2;
}

.fa-w {
  color: #03a9f4 !important;
}

.btn-group > a {
  margin-right: 5px;
}
</style>