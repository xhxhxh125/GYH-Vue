<template>
  <div id="app">
    <ElPageFrame ref="pf"></ElPageFrame>
    <div id="main" role="main">
      <div id="ribbon">
        <span class="ribbon-button-alignment">
          <span id="refresh" class="btn btn-ribbon" data-action="resetWidgets" data-title="refresh" rel="tooltip" data-placement="bottom"
            data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings."
            data-html="true">
            <i class="fa fa-refresh"></i>
          </span>
        </span>
        <!-- breadcrumb -->
        <ol class="breadcrumb">
          <li><a :href="appsettings.portal_root">首页</a></li>
          <li>个人中心</li>
          <li>设备管理</li>
          <li>设备调查问卷</li>
        </ol>
        <!-- end breadcrumb -->
      </div>


      <div id="content">
        <div class="row">
          <!-- NEW COL START -->
          <article class="col-sm-12 col-md-12">
            <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false" data-widget-colorbutton="false" data-widget-custombutton="false">
              <header>
                <span class="widget-icon">
                  <i class="fa fa-pencil-square-o"></i>
                </span>
                <h2>查询条件</h2>
              </header>
              <!-- datatable-->

              <div class="jarviswidget-editbox">
              </div>
              <div class="widget-body">
                <div id="query-form" class="smart-form">
                  <fieldset>
                    <div class="row">

                      <section class="col col-4">
                        <label class="label">设备编号</label>
                        <label class="input">
                          <input type="text" v-model="query_data.machine_no">
                        </label>
                      </section>

                    </div>

                  </fieldset>


                  <footer>
                    <a class="btn btn-primary pull-left" href="javascript:void(0);" @click="queryClick()">
                      <i class="fa fa-search"></i> 查询</a>

                    <!-- <a :href="'/mac/edit_mac.html'" target="_blank" class="btn btn-primary pull-left">
                      <i class="fa fa-plus"></i> 新增</a> -->

                  </footer>
                </div>
              </div>

            </div>
          </article>
        </div>


        <div class="row">
          <!-- NEW WIDGET START -->
          <article class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <!-- Widget ID (each widget will need unique ID)-->
            <div class="jarviswidget" id="wid-id-1" data-widget-editbutton="false" data-widget-colorbutton="false" data-widget-custombutton="false">
              <header>
                <span class="widget-icon">
                  <i class="fa fa-table"></i>
                </span>
                <h2>查询结果</h2>
              </header>
              <!-- datatable-->
              <div>
                <div class="jarviswidget-editbox">
                </div>
                <div class="widget-body no-padding">
                  <p class="table-responsive custom-scroll">
                    <table id="datatable_tabletools" class="nowrap table table-bordered">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>操作</th>
                          <th>产品名称</th>
                          <th>设备编号</th>
                          <th>客户名称</th>
                          <th>联系电话</th>
                          <th>购买时间</th>
                          <th>提交公司</th>
                          <th>提交时间</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="row-show" v-for="(item,index) in results" :key="index">
                          <td>{{index+1}}</td>

                          <!-- 操作当前记录 -->
                          <td style="width:7em;">
                            <div class="btn-group op">
                              <a class="btn btn-success btn-xs" target="_blank" :href="'/mac/edit_qnr.html?qnr_oid='+item.oid+'&mac_oid='+item.machine_oid+'&pro_name=' + item.product_name">查看详情</a>
                              <!-- <a class="btn btn-default btn-xs" target="_blank" :href="'/p/edit.html?id='+item.oid+'&c='+item.category+'&cnn='+catInfo.name">修改</a>
                              <a class="btn btn-danger btn-xs" @click="deleteQnr(item,index)">删除</a> -->
                            </div>
                          </td>
                          <td>
                            <label>
                              <a :href="appsettings.portal_root+'product/oneproduct.aspx?id='+item.product_oid" target="_blank"> {{item.product_name}} </a>
                            </label>
                          </td>
                          <td>
                            <a :href="'/mac/one_mac.html?id='+item.machine.seqid" target="_blank">
                              {{item.machine.machine_no}}
                            </a>
                          </td>
                          <td>{{item.machine.customer}}</td>
                          <td>{{item.machine.tel}}</td>
                          <td>{{item.machine.buy_time}}</td>
                          <td>{{item.company_name}} </td>
                          <td class="nw">{{item.create_time}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </p>
                </div>
                <ElPager :pageTotal="query_data.pageTotal" @changePage="changePage"></ElPager>
              </div>
              <!-- end datatable -->
            </div>
            <!-- end widget -->
          </article>
          <!-- WIDGET END -->
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import "common/httputils"; //引用js
  import htmlHelper from "common/htmlutils";
  import ElPageFrame from "components/el-PageFrame/el-PageFrame";
  import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
  import ElPager from "components/el-Pager/el-Pager";
  export default {
    name: "app",
    data: function () {
      return {
        query_data: {
          page_index: 0
        },
        results: [],

      };
    },
    components: {
      ElPageFrame,
      ElPager
    },
    computed: {},
    created: function () {
      this.queryClick();

      //类别名称
      //类别code
      // this.catInfo.code = $.getUrlParam("c");
      // this.catInfo.name = $.getUrlParam("cn");

      // this.query_data.category_code = this.catInfo.code;


      // //获取类别参数
      // if (this.catInfo.code != null && this.catInfo.code != undefined && this.catInfo.code.length > 1) {
      //  // this.initPage();
      //   this.getParams();
      // }
    },
    mounted: function () {},
    methods: {
      queryClick: function () {
        this.query_data.page_index = 1;
        this.query_data.statuses = "0,1";
        this.doQuery();
      },
      doQuery: function () {
        $.post_json(
          appsettings.apiroot + "home/machine/survey/retrieve",
          this.query_data,
          this.callback_renderMacList
        );
      },
      callback_renderMacList: function (result) {
        if (result != null && result.status == 0) {
          this.results = result.data.datalist;
          this.query_data.pageTotal = result.data.page.total_page_count;
          this.query_data.page_index = result.data.page.page_index;
          if (this.results == null || this.results.length == 0) {
            this.$refs.pf.showToast("warning","没有符合条件的产品","");
          }
        } else {
           this.$refs.pf.showToast("error","查询产品信息出现异常",result.message);
        }
      },
      changePage: function (pageindex) {
        this.query_data.page_index = pageindex;
        this.doQuery();
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
  .no-padding>.table-responsive>.table-bordered {
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

  .jarviswidget>header {
    border: 0.5px solid #c2c2c2;
  }

  .fa-w {
    color: #03A9F4 !important;
  }

  .btn-group>a {
    margin-right: 5px;
  }
</style>