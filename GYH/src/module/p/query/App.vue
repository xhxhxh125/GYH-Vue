<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <!-- main -->
        <div class="col g-ml-50 g-ml-0--lg g-overflow-hidden">
          <div class="g-pa-40">
            <div class="media g-mb-30">
              <div class="d-flex align-self-center">
                <h1 class="g-font-weight-300 g-font-size-28 g-color-black mb-0">产品管理</h1>
              </div>
              <div class="media-body align-self-center g-ml-10 g-ml-0--md">
                <div class="input-group g-pos-rel g-max-width-380 float-right">
                  <input class="form-control h-100 g-font-size-default g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-20 g-pl-20 g-pr-50 g-py-10"
                    type="text" placeholder="搜索" v-model="query_data.product_name">
                  <button class="btn g-pos-abs g-top-0 g-right-0 g-z-index-2 g-width-60 h-100 g-bg-transparent g-font-size-16 g-color-primary g-color-secondary--hover rounded-0"
                    type="submit" @click="queryClick()">
                    <i class="hs-admin-search g-absolute-centered"></i>
                  </button>
                </div>
              </div>
              <div class="">
                <a class="js-fancybox btn btn-xl u-btn-secondary g-width-160--md g-font-size-default g-ml-10" href="#!"
                  data-src="#new-project-form" data-speed="350" data-options='{"touch" : false}' @click="createNew()">新增产品
                </a>
              </div>
            </div>

            <div class="table-responsive g-mb-40">
              <table class="js-datatable table u-table--v3 u-editable-table--v1 g-color-black">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>产品名称</th>
                    <th>新品排序等级</th>
                    <th>创建时间</th>
                    <th>更新时间</th>
                    <th>信息质量</th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody >
                  <tr v-for="(pro,index) in result_products" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{pro.product_name}}</td>
                    <td>{{pro.market_level}}</td>
                    <td>{{pro.create_time}}</td>
                    <td>{{pro.update_time}}</td>
                    <td>{{pro.info_factor}}</td>
                    <td>
                      <span v-if="pro.status==0" class="u-tags-v1 text-center g-brd-around g-brd-teal-v2 g-bg-teal-v2 g-font-weight-400 g-color-white g-rounded-50 g-px-10">正常</span>
                            <span v-if="pro.status==1" class="u-tags-v1 text-center g-brd-around g-font-weight-400 g-color-white g-rounded-50 g-px-10" style="background:#2196F3;">待审核</span>
                            <span v-if="pro.status==-1" class="u-tags-v1 text-center g-brd-around g-font-weight-400 g-rounded-50 g-px-10" style="background:#e9e9e9;color: black">已删除</span>
                            <span v-if="pro.status==-2" class="u-tags-v1 text-center g-brd-around g-font-weight-400 g-color-white g-rounded-50 g-px-10" style="background:red;">审核不通过</span>
                    </td>
                    <td>
                      <a class="u-tags-v1 text-center g-brd-around g-font-size-default g-rounded-50 g-px-5" style="background:#e9e9e9;color: black"
                        target="_blank" :href="'/p/edit.html?id='+pro.oid+'&c='+pro.category+'&cnn='+catInfo.name">修改</a>
                      <a class="u-tags-v1 text-center g-brd-around g-font-size-default g-color-white g-rounded-50 g-px-5"
                        style="background:#F44336;" @click="deleteProduct(pro,index)">删除</a>
                      <a class="u-tags-v1 text-center g-brd-around g-font-size-default g-color-white g-rounded-50 g-px-5"
                        style="background:#2196f3;" @click="setNewProduct(pro)" :class="{btnwarning:pro.is_new==1}">{{pro.is_new>0?"取消":"设为"}}新品</a>
                      <a class="u-tags-v1 text-center g-brd-around g-font-size-default g-color-white g-rounded-50 g-px-5"
                        style="background:#2196f3;" @click="setMarketLevel(pro,index)">新品排序</a>
                      <a class="u-tags-v1 text-center g-brd-around g-font-size-default g-color-white g-rounded-50 g-px-5"
                        style="background:#FF9800;" target="_blank" :href="'/prj/query.html?t=p&id='+pro.oid+'&c='+pro.category+'&n='+encodeURIComponent(pro.product_name)">维护案例</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="media align-items-center g-mb-45 g-pa-20">
              <nav id="datatable Pagination1" class="d-flex ml-auto" aria-label="Page Navigation"></nav>
            </div>
          </div>
        </div>
      </div>
    </ElPageFrame>

    <div class="modal fade" v-if="functionlist.indexOf('copy_project@information_product')>=0" id="myModal" tabindex="-1"
      role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content" v-if="copyProjectInfo.source_product!=null">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h2 class="modal-title">复制案例给同类型产品</h2>
            <h4 class="modal-title">来源产品: {{copyProjectInfo.source_product.product_name}}</h4>
          </div>
          <div class="modal-body">
            <div class="jarviswidget jarviswidget-color-blueDark" id="wid-id-x" data-widget-colorbutton="false"
              data-widget-editbutton="false" data-widget-togglebutton="false" data-widget-deletebutton="false"
              data-widget-fullscreenbutton="false" data-widget-custombutton="false" data-widget-sortable="false">
              <header>
                <span class="widget-icon">
                  <i class="fa fa-align-justify"></i>
                </span>
                <h2>同类型产品列表 </h2>

              </header>
              <div>

                <!-- widget content -->
                <div class="widget-body noborder">
                  <div class="row smart-form">
                    <div class="col col-sm-12">
                      <label class="checkbox" v-for="(pro,index) in sameCatProducts" :key="index">
                        <input type="checkbox" :value="pro.oid" @change="proChanged(pro,$event)" name="checkbox">
                        <i></i>{{pro.product_name}}</label>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="confirmCopy()">
              确定
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <!-- 新品排序级别modal -->
    <div class="modal fade" id="marketModal" tabindex="-1" role="dialog">
      <div class="modal-dialog sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title">
              【{{currentProduct.product_name}}】设置新品排序
            </h4>
          </div>
          <div class="modal-body no-padding">

            <div id="ref-form" class="smart-form">
              <fieldset>
                <div class="row">

                  <div>
                    <section class="col col-sm-12">
                      <label class="label sm">说明:等级从1到100, 等级越高, 排序越靠前;0表示取消新品排序.</label>
                      <label class="input">
                        <input type="text" placeholder="请输入新品排序" name="text" v-model="currentProduct.market_level">
                      </label>
                    </section>

                  </div>
                </div>
              </fieldset>
              <footer>
                <a class="btn btn-primary pull-left" href="javascript:void(0);" data-dismiss="modal">
                  取消</a>
                <a class="btn btn-success pull-left" href="javascript:void(0);" @click="confirmMarketLevel()">
                  确定</a>
              </footer>

            </div>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>

    <!-- Modal -->
    <div class="modal fade" id="rejectModal" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title">
              审核不通过的原因
            </h4>
          </div>
          <div class="modal-body no-padding">

            <div id="reject-form" class="smart-form">

              <fieldset>
                <section>
                  <label class="label"></label>
                  <label class="textarea">
                    <textarea rows="5" v-model="reject_msg.content" class="custom-scroll" placeholder="请输入审核不通过的原因"></textarea>
                  </label>
                  <!-- <div class="note">
                      <strong>Note:</strong> height of the textarea depends on the rows attribute.
                    </div> -->
                </section>
              </fieldset>

              <footer>
                <button @click="confirmRejectReason()" type="button" class="btn btn-primary">
                  确定
                </button>
                <button type="button" class="btn btn-default" data-dismiss="modal">
                  取消
                </button>

              </footer>
            </div>


          </div>

        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>

  </div>

</template>

<script>
  import "common/httputils"; //引用js
  import htmlHelper from "common/htmlutils";
  import ElPageFrame from "components/el-PageFrame/el-PageFrame";
  import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
  import Vue from 'vue';
  export default {
    name: "app",
    data: function () {
      return {
        query_data: {
          p: "",
          company_name: null,
          product_name: null,
          company_oid: null,
          category_name: null, //类别名称
          category_code: null, //类别code
          series_code: null, //系列code
          series_name: null, //系列名称
          statuses: "-2,0,1,2,3,4",
          page_index: 0,
          info_factor: null
        },
        result_products: null,
        showToast: false,
        copyProjectInfo: {
          source_product: null,
          target_products: []
        },
        sameCatProducts: null,
        copyTargetOids: [],
        functionlist: [],
        selected_series: {
          name: null,
          code: null
        },
        seriesInfo: {
          name: null,
          code: null
        },
        catInfo: {
          category_name: null,
          category_code: null
        },
        series_query: {},
        series: [],
        headers: [],
        rejecting_pro: {},
        reject_msg: {
          content: null
        },
        currentProduct: {
          market_level: 1
        },
      };

    },
    components: {
      ElPageFrame
    },
    computed: {

    },
    created: function () {

      this.queryClick()
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
      //将产品设置为新品(取消新品)
      setNewProduct: function (pro) {
        var is_new = 1;
        if (pro.is_new != null && pro.is_new != undefined && pro.is_new > 0) {
          is_new = 0;
        }
        var data = {
          product_oid: pro.oid,
          is_new: is_new,
        };
        $.post_json(appsettings.apiroot + "home/product/core/isnew", data, this.callback_setNewProduct, pro);
      },
      callback_setNewProduct: function (result, pro) {
        if (result != null && result.status == 0) {
          if (pro.is_new != null && pro.is_new != undefined && pro.is_new > 0) {
            Vue.set(pro, "is_new", 0);
          } else {
            Vue.set(pro, "is_new", 1);
          }

        } else {
          //failed
          this.$refs.pf.showToast("error", "设置新品失败！", result.message);
        }
      },
      //新品排序
      setMarketLevel: function (pro, index) {
        //show modal
        pro.index = index;
        //把数据转换为对象
        this.currentProduct = JSON.parse(JSON.stringify(pro));
        //显示弹框
        $("#marketModal").modal("show");
      },
      //新品排序点击确定
      confirmMarketLevel: function () {
        if (/\d+/.test(this.currentProduct.market_level) == false) {
          this.$refs.pf.showToast("warning", "新品排序等级只能是数字", "");
          return;
        }

        if (this.currentProduct.market_level > 100) {
          this.$refs.pf.showToast("warning", "新品排序等级不能大于100", "");
          return;
        }
        if (this.currentProduct.market_level < 0) {
          this.$refs.pf.showToast("warning", "新品排序等级不能小于0", "");
          return;
        }
        var data = {
          product_oid: this.currentProduct.oid,
          market_level: this.currentProduct.market_level
        };
        $.post_json(appsettings.apiroot + "home/product/core/marketlevel", data, this.cb_confirmMarketLevel, this.currentProduct);
      },
      cb_confirmMarketLevel: function (res, pro) {
        if (res != null && res.status == 0) {
          $("#marketModal").modal("hide");
          Vue.set(this.result_products, pro.index, JSON.parse(JSON.stringify(pro)));
          this.$refs.pf.showToast("success", "设置新品排序等级成功", pro.product_name);
        } else {
          this.$refs.pf.showToast("error", "设置新品排序等级失败", res.message);
        }
      },
      proChanged: function (pro, event) {

        if (event.currentTarget.checked) {
          this.copyTargetOids.push(pro.oid);
        } else {
          this.copyTargetOids.removeByValue(pro.oid);
        }
      },
      confirmCopy: function () {
        if (this.sameCatProducts != null && this.copyTargetOids.length > 0) {
          var data = {};
          data.s_product_oid = this.copyProjectInfo.source_product.oid;
          data.t_product_oid = this.copyTargetOids;
          data.company_oid = this.copyProjectInfo.source_product.company_oid;
          $.post_json(appsettings.apiroot + "project/batchcopy", data, this.callback_batchCopyProjects);
          $("#myModal").modal("hide");
        }
      },
      callback_batchCopyProjects: function (result) {
        if (result != null && result.status == 0) {
          //success
          this.$refs.pf.config = {
            type: "success",
            title: "复制案例成功",
            msg: ""
          };
          this.$refs.pf.show = true;
        } else {
          this.$refs.pf.config = {
            type: "error",
            title: "复制案例失败",
            msg: result.message
          };
          this.$refs.pf.show = true;
        }
      },
      pushProduct: function (pro) {
        window.open("/com/push.html?t=p&id=" + pro.oid);
      },
      copyProjects: function (pro) {
        //
        var data = {};
        data.category_code = pro.category;
        data.company_oid = pro.company_oid;
        $.post_json(appsettings.apiroot + "product/retrieve", data, this.callback_getSameCatProducts, pro);
        this.copyProjectInfo.source_product = pro;
        $("#myModal").modal();
      },
      callback_getSameCatProducts: function (result, source_pro) {
        if (result != null && result.status == 0) {
          for (var i = 0; i < result.data.products.length; i++) {
            if (source_pro.oid === result.data.products[i].oid) {
              result.data.products.splice(i, 1);
              break;
            }
          }
          this.sameCatProducts = result.data.products;
        } else {

        }
      },
      addSameCatProduct: function (pro) {
        if (pro != null) {
          //复制一个产品
          window.open("/p/edit.html?t=p&c=" + pro.category + "&spoid=" + pro.oid + "&com=" + pro.company_oid +
            "&spid=" + pro.seqid);
        }
      },
      editProjects: function (pro) {
        if (pro != null) {
          window.open(
            "/prj/query.html?t=p&c=" +
            pro.category +
            "&id=" +
            pro.seqid +
            "&com=" +
            pro.company_oid
          );
        }
      },
      createNew: function () {

        window.open("/p/edit.html?c=" + this.catInfo.code + "&cnn=" + encodeURIComponent(this.catInfo.name) +
          "&s=" + this.seriesInfo.code + "&sn=" + encodeURIComponent(this.seriesInfo.name));

      },
      deleteProduct: function (pro, index) {
        //alert: 是否确定删除产品
        var that = this;
        pro.index = index;
        //confirm
        this.$refs.pf.confirmShow({
          action_code: "deleteproduct",
          title: "确定要删除该产品吗？",
          msg: "产品名称：" + pro.product_name,
          success: function (res) {
            if (res.confirm == true) {
              var data = {};
              data.oid = pro.oid;
              $.post_json(
                appsettings.apiroot + "home/product/delete",
                data,
                that.callback_deleteProduct,
                pro
              );

              //show loading
              that.$refs.pf.showLoading("正在删除....");
              setTimeout(function () {
                that.$refs.pf.hideLoading();
              }, 10000);
            }
          }
        });
      },
      callback_deleteProduct: function (result, pro) {
        this.$refs.pf.hideLoading();
        if (result != null && result.status == 0) {
          pro.status = -1;
          this.result_products.splice(parseInt(pro.index), 1);
          this.$refs.pf.showToast("success", "删除产品成功", "");
        } else {
          this.$refs.pf.showToast("error", "删除产品出现异常", result.message);
        }
      },

      changeInfoFactor: function (info) {
        this.query_data.info_factor = info;
      },
      categoryChanged: function (cat, series) {
        this.query_data.category_code = cat;
      },
      queryStatusChanged: function (status, event) {
        if (event.currentTarget.checked) {
          if (status == "") {
            this.query_data.statuses = "";
          } else {
            this.query_data.statuses = this.query_data.statuses + "," + status;
          }
        } else {
          this.query_data.statuses = this.query_data.statuses.replace(
            "," + status,
            ""
          );
        }
      },
      getStatus: function (status) {
        switch (status) {
          case 0:
            return "正常";
          case 1:
            return "待审核";
          case -1:
            return "已删除";
          case -2:
            return "已冻结";
          default:
            return "未定义";
        }
      },
      queryClick: function () {
        console.log(111)
        this.query_data.page_index = 1;
        this.query_data.category_code = this.seriesInfo.code || this.catInfo.code;
        $.post_json(
          appsettings.apiroot + "home/product/retrieve",
          this.query_data,
          this.callback_queryClick
        );
      },
      callback_queryClick: function (result) {
        if (result != null && result.status == 0) {
          console.log(result.data);
          this.result_products = result.data.products;
          this.query_data.pageTotal = result.data.page.total_page_count;
          this.query_data.page_index = result.data.page.page_index;
          if (this.result_products == null || this.result_products.length == 0) {
            this.$refs.pf.config = {
              type: "warning",
              title: "没有符合条件的产品",
              msg: result.message
            };
            this.$refs.pf.show = true;
          }
        } else {
          this.$refs.pf.config = {
            type: "error",
            title: "查询产品信息出现异常",
            msg: result.message
          };
          this.$refs.pf.show = true;
        }
      },
      changePage: function (pageindex) {
        this.query_data.page_index = pageindex;
        $.post_json(
          appsettings.apiroot + "home/product/retrieve",
          this.query_data,
          this.callback_queryClick
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
    width: 280px;
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

  .btnwarning {
    background: #2196F3 !important;
    border-color: #2196F3 !important;
  }

  .btnwarning:hover {
    background: #2196F3 !important;
    border-color: #2196F3 !important;
  }
</style>