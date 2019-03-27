<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <div
          id="main"
          role="main"
        >
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
              <li><a :href="appsettings.portal_root">首页</a></li>
              <li>个人中心</li>
              <li>我的收藏</li>
            </ol>
            <!-- end breadcrumb -->
          </div>

          <div id="content">

            <div class="row">
              <!-- NEW WIDGET START -->
              <article class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <!-- Widget ID (each widget will need unique ID)-->

                <!-- Widget ID (each widget will need unique ID)-->
                <div
                  class="jarviswidget well"
                  id="wid-id-3"
                  data-widget-colorbutton="false"
                  data-widget-editbutton="false"
                  data-widget-togglebutton="false"
                  data-widget-deletebutton="false"
                  data-widget-fullscreenbutton="false"
                  data-widget-custombutton="false"
                  data-widget-sortable="false"
                >
                  <!-- widget options:
										usage: <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false">
						
										data-widget-colorbutton="false"
										data-widget-editbutton="false"
										data-widget-togglebutton="false"
										data-widget-deletebutton="false"
										data-widget-fullscreenbutton="false"
										data-widget-custombutton="false"
										data-widget-collapsed="true"
										data-widget-sortable="false"
						
										-->
                  <header>

                  </header>

                  <!-- widget div-->
                  <div>

                    <!-- widget edit box -->
                    <div class="jarviswidget-editbox">
                      <!-- This area used as dropdown edit box -->

                    </div>
                    <!-- end widget edit box -->

                    <!-- widget content -->
                    <div class="widget-body">

                      <p>
                        我的收藏列表
                      </p>
                      <hr class="simple">
                      <ul
                        id="myTab1"
                        class="nav nav-tabs bordered"
                      >
                        <li class="active">
                          <a
                            href="#s1"
                            data-toggle="tab"
                          >收藏的产品

                          </a>
                        </li>
                        <li>
                          <a
                            href="#s2"
                            data-toggle="tab"
                          >
                            收藏的服务</a>
                        </li>
                        <li>
                          <a
                            href="#s3"
                            data-toggle="tab"
                          >
                            收藏的公司</a>
                        </li>

                      </ul>

                      <div
                        id="myTabContent1"
                        class="tab-content padding-10"
                      >
                        <div
                          class="tab-pane active"
                          id="s1"
                        >
                          <p class="table-responsive custom-scroll">
                            <table
                              id="datatable_tabletools"
                              class="nowrap table table-bordered"
                            >
                              <thead>
                                <tr>
                                  <th class="w100">ID</th>
                                  <th>名称</th>
                                  <th class="w200">收藏时间</th>
                                  <th class="w100">操作</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  class="row-show"
                                  v-for="(pro,index) in products"
                                  :key="index"
                                >
                                  <td>{{index+1}}</td>
                                  <td>
                                    <a
                                      target="_blank"
                                      :href="appsettings.portal_root+'/product/oneproduct.aspx?id='+pro.oid"
                                    >
                                      {{pro.product_name}}
                                    </a>
                                  </td>

                                  <td class="nw">{{pro.create_time}}</td>
                                  <td>
                                    <a
                                      class="btn btn-default btn-xs"
                                      @click="cancelFav(pro,index,'p')"
                                    >取消收藏</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </p>
                        </div>

                        <div
                          class="tab-pane"
                          id="s2"
                        >
                          <p class="table-responsive custom-scroll">
                            <table
                              id="datatable_tabletools"
                              class="nowrap table table-bordered"
                            >
                              <thead>
                                <tr>
                                  <th class="w100">ID</th>
                                  <th>名称</th>
                                  <th class="w200">收藏时间</th>
                                  <th class="w100">操作</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  class="row-show"
                                  v-for="(pro,index) in services"
                                  :key="index"
                                >
                                  <td>{{index+1}}</td>
                                  <td>
                                    <a
                                      target="_blank"
                                      :href="appsettings.portal_root+'/service/oneservice.aspx?id='+pro.oid"
                                    >
                                      {{pro.service_name}}
                                    </a>
                                  </td>

                                  <td class="nw">{{pro.create_time}}</td>
                                  <td>
                                    <a
                                      class="btn btn-default btn-xs"
                                      @click="cancelFav(pro,index,'s')"
                                    >取消收藏</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </p>
                        </div>

                        <div
                          class="tab-pane"
                          id="s3"
                        >
                          <p class="table-responsive custom-scroll">
                            <table
                              id="datatable_tabletools"
                              class="nowrap table table-bordered"
                            >
                              <thead>
                                <tr>
                                  <th class="w100">ID</th>
                                  <th>名称</th>
                                  <th class="w200">收藏时间</th>
                                  <th class="w100">操作</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  class="row-show"
                                  v-for="(pro,index) in companies"
                                  :key="index"
                                >
                                  <td>{{index+1}}</td>
                                  <td>
                                    <a
                                      target="_blank"
                                      :href="appsettings.portal_root+'/company/onecompany.aspx?id='+pro.oid"
                                    >
                                      {{pro.company_name}}
                                    </a>
                                  </td>

                                  <td class="nw">{{pro.create_time}}</td>
                                  <!-- 操作当前记录 -->
                                  <td>
                                    <a
                                      class="btn btn-default btn-xs"
                                      @click="cancelFav(pro,index,'c')"
                                    >取消收藏</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </p>
                        </div>

                      </div>

                    </div>
                    <!-- end widget content -->

                  </div>
                  <!-- end widget div -->

                </div>
                <!-- end widget -->

                <!-- end widget -->
              </article>
              <!-- WIDGET END -->
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
import ElPageFrame from "components/el-PageFrame/el-PageFrame";
import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";

import ElPager from "components/el-Pager/el-Pager";
import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";

export default {
  name: "app",
  data: function() {
    return {
      products: [],
      services: [],
      companies: [],

      pro_page_index: 1,
      ser_page_index: 1,
      com_page_index: 1,

      functionlist: []
    };
  },
  components: {
    ElPageFrame,
    ElPager,
    ElToastAlert
  },
  computed: {},
  created: function() {
    this.getFavorites();
  },
  mounted: function() {},
  methods: {
    functionlist_callback: function(res) {
      if (res.status == 0) {
        var funlist = res.data.functions;
        this.functionlist.splice(0, this.functionlist.length);
        for (var i = 0; i < funlist.length; i++) {
          this.functionlist.push(funlist[i].function_code);
        }
      }
    },
    getTargetUrl: function(t) {},
    getFavorites: function(page_index) {
      $.post_json(
        appsettings.apiroot + "account/favorite/retrieve",
        {
          page_index: page_index
        },
        this.callback_getFavorites
      );
    },
    callback_getFavorites: function(result) {
      if (result != null && result.status == 0) {
        this.products = result.data.products;
        this.services = result.data.services;
        this.companies = result.data.companies;
      } else {
        this.$refs.pf.showToast("error", "获取我的收藏失败", result.message);
      }
    },

    cancelFav: function(pro, index, t) {
      var that = this;
      pro.index = index;
      pro.type = t;
      var name =
        t == "p"
          ? pro.product_name
          : t == "s"
          ? pro.service_name
          : pro.company_name;
      //confirm
      this.$refs.pf.confirmShow({
        action_code: "deleteproject",
        title: "确定要取消收藏吗？",
        msg: "名称：" + name,
        success: function(res) {
          if (res.confirm == true) {
            var data = {};
            data.target_oid = pro.id;
            data.target_type = t == "p" ? 2 : t == "s" ? 3 : 1;
            $.post_json(
              appsettings.apiroot + "account/favorite/cancel",
              data,
              that.callback_cancelFav,
              pro
            );

            //show loading
            that.$refs.pf.showLoading("正在删除....");
            setTimeout(function() {
              that.$refs.pf.hideLoading();
            }, 10000);
          }
        }
      });
    },
    callback_cancelFav: function(result, pro) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        if (pro.type == "p") {
          this.products.splice(parseInt(pro.index), 1);
        } else if (pro.type == "s") {
          this.services.splice(parseInt(pro.index), 1);
        } else if (pro.type == "c") {
          this.companies.splice(parseInt(pro.index), 1);
        }

        this.$refs.pf.showToast("success", "取消成功", "");
      } else {
        this.$refs.pf.showToast("error", "取消失败", result.message);
      }
    },

    changePage: function(pageindex) {
      this.query_data.page_index = pageindex;
      $.post_json(
        appsettings.apiroot + "home/project/retrieve",
        this.query_data,
        this.callback_getProjects
      );
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
  width: 70px;
}

.table {
  border-bottom: 1px solid #ccc !important;
}

.dropdown-menu {
  position: relative !important;
}

input:disabled {
  background-color: #eee !important;
}

.w100 {
  width: 100px !important;
}

.w150 {
  width: 150px !important;
}
.w200 {
  width: 200px !important;
}
</style>