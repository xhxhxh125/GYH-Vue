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
          <li>服务管理</li>
          <template v-if="catInfo.code!=null">
            <li>
              {{catInfo.name}}
            </li>
          </template>

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
                      <!-- <div class="col col-8">
                        <ElSerCategory @categoryChanged="categoryChanged"></ElSerCategory>

                      </div> -->


                      <section class="col col-4">
                        <label class="label">服务名称</label>
                        <label class="input">
                          <input type="text" v-model="query_data.service_name">
                        </label>
                      </section>

                      <section class="col col-8" v-if="query_data.p.length>0">
                        <label class="label">状态</label>
                        <div class="inline-group">
                          <label class="checkbox">
                            <input type="checkbox" :checked="query_data.statuses==''" @change="queryStatusChanged('',$event)">
                            <i></i>全部</label>
                          <label class="checkbox">
                            <input type="checkbox" :checked="query_data.statuses.indexOf(',0')>=0" @change="queryStatusChanged('0',$event)">
                            <i></i>正常</label>
                          <label class="checkbox">
                            <input type="checkbox" :checked="query_data.statuses.indexOf(',-1')>=0" @change="queryStatusChanged(-1,$event)">
                            <i></i>已删除</label>
                          <label class="checkbox">
                            <input type="checkbox" :checked="query_data.statuses.indexOf(',-2')>=0" @change="queryStatusChanged(-2,$event)">
                            <i></i>审核不通过</label>
                          <label class="checkbox">
                            <input type="checkbox" :checked="query_data.statuses.indexOf(',1')>=0" @change="queryStatusChanged(1,$event)">
                            <i></i>待审核</label>

                        </div>
                      </section>
                    </div>

                  </fieldset>


                  <footer>
                    <a class="btn btn-primary pull-left" href="javascript:void(0);" @click="queryClick()">
                      <i class="fa fa-search"></i> 查询</a>

                    <a @click="createNew()" href="javascript:;" class="btn btn-primary pull-left">
                      <i class="fa fa-plus"></i> 新增</a>

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
                          <th>服务名称</th>
                          <th>新品排序</th>

                          <th v-for="(h,index) in headers" :key="index">{{h.name}}</th>

                          <th>创建时间</th>
                          <th>更新时间</th>
                          <th>信息质量</th>
                          <th>状态</th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr class="row-show" v-for="(ser,index) in result_services" :key="index">
                          <td>{{index+1}}</td>

                          <!-- 操作当前记录 -->
                          <td>
                            <div class="btn-group op">      
                              <a class="btn btn-default btn-xs" target="_blank" :href="'/s/edit.html?id='+ser.oid+'&c='+ser.category+'&cnn='+catInfo.name">修改</a>
                              <a class="btn btn-danger btn-xs" @click="deleteService(ser,index)">删除</a>
                               <a class="btn btn-xs btn-warning" @click="setNewService(ser)">{{ser.is_new>0?"取消":"设为"}}新品</a>
                              <a class="btn btn-primary btn-xs" @click="setMarketLevel(ser,index)">新品排序</a>

                              <a class="btn btn-warning btn-xs" target="_blank" :href="'/prj/query.html?t=s&id='+ser.oid+'&c='+ser.category+'&n='+encodeURIComponent(ser.service_name)">维护案例</a>
                            </div>
                          </td>

                          <!-- 数据展示:label用来展示 input用来编辑(配合上面“编辑当前记录”td使用) -->
                          <td>
                            <!-- <label>
                              <a :href="appsettings.portal_root+'/service/onesevice.aspx?id='+ser.oid" target="_blank"> {{ser.service_name}} </a>
                            </label> -->
                            {{ser.service_name}}
                          </td>
                          <td>
                            <!-- <label>
                              <a :href="appsettings.portal_root+'company/onecompany.aspx?id='+ser.company_oid" target="_blank">{{ser.company_name}}</a>
                            </label> -->
                            {{ser.market_level}}
                          </td>

                          <td class="nw" v-for="(para,index) in ser.paramters" :key="index">{{para.value}}</td>

                          <td class="nw">{{ser.create_time}}</td>
                          <td class="nw">{{ser.update_time}}</td>
                          <td>{{ser.info_factor}}</td>
                          <td>
                            <span v-if="ser.status==0" class="label label-success">正常</span>
                            <span v-if="ser.status==1" class="label label-warning">待审核</span>
                            <span v-if="ser.status==-1" class="label label-danger">已删除</span>
                            <span v-if="ser.status==-2" class="label label-default">审核不通过</span>
                          </td>

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



    <div class="modal fade" v-if="functionlist.indexOf('copy_project@information_service')>=0" id="myModal" tabindex="-1" role="dialog"
      aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content" v-if="copyProjectInfo.source_service!=null">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h2 class="modal-title">复制案例给同类型服务</h2>
            <h4 class="modal-title">来源服务: {{copyProjectInfo.source_service.service_name}}</h4>
          </div>
          <div class="modal-body">
            <div class="jarviswidget jarviswidget-color-blueDark" id="wid-id-x" data-widget-colorbutton="false" data-widget-editbutton="false"
              data-widget-togglebutton="false" data-widget-deletebutton="false" data-widget-fullscreenbutton="false" data-widget-custombutton="false"
              data-widget-sortable="false">
              <header>
                <span class="widget-icon">
                  <i class="fa fa-align-justify"></i>
                </span>
                <h2>同类型服务列表 </h2>

              </header>
              <div>

                <!-- widget content -->
                <div class="widget-body noborder">
                  <div class="row smart-form">
                    <div class="col col-sm-12">
                      <label class="checkbox" v-for="(ser,index) in sameCatServices" :key="index">
                        <input type="checkbox" :value="ser.oid" @change="proChanged(ser,$event)" name="checkbox">
                        <i></i>{{ser.service_name}}</label>

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
              【{{currentService.service_name}}】设置新品排序
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
                        <input type="text" placeholder="请输入新品排序" name="text" v-model="currentService.market_level">
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


    <a id="downloadexcel" href="javascript:;" style="height:0;width:0;" download="download"></a>

  </div>

</template>

<script>
  import "common/httputils"; //引用js
  import htmlHelper from "common/htmlutils";
  import ElPageFrame from "components/el-PageFrame/el-PageFrame";
  import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
  import ElRegionInput from "components/el-RegionInput/el-RegionInput";
  import ElPager from "components/el-Pager/el-Pager";
  import ElSerCategory from "components/el-SerCategory/el-SerCategory";
  export default {
    name: "app",
    data: function () {
      return {
        query_data: {
          p: "",
          company_name: null,
          service_name: null,
          company_oid: null,
          category_name: null, //类别名称
          category_code: null, //类别code
          series_code: null, //系列code
          series_name: null, //系列名称
          statuses: "-2,0,1,2,3,4",
          page_index: 0,
          info_factor: null
        },
        result_services: null,
        showToast: false,
        copyProjectInfo: {
          source_service: null,
          target_services: []
        },
        sameCatServices: null,
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
        currentService:{
          market_level:1
        }
      };
    },
    components: {
      ElPageFrame,
      ElRegionInput,
      ElPager,
      ElSerCategory
    },
    computed: {},
    created: function () {
      // $.post_json(
      //   appsettings.apiroot + "account/userfunction", {
      //     pageid: "information_service"
      //   },
      //   this.functionlist_callback
      // );

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
      	setNewService: function (ser) {
				var is_new = 1;
				if (ser.is_new != null && ser.is_new != undefined && ser.is_new > 0) {
					is_new = 0;
				}
				var data = {
					service_oid: ser.oid,
					is_new: is_new
				};
				$.post_json(appsettings.apiroot + "home/service/core/isnew", data, this.callback_setNewService, ser);
			},
			callback_setNewService: function (result, ser) {
				if (result != null && result.status == 0) {
					if (ser.is_new != null && ser.is_new != undefined && ser.is_new > 0) {
						Vue.set(ser, "is_new", 0);
					} else {
						Vue.set(ser, "is_new", 1);
					}
          this.$refs.pf.showToast("success", "设置新品成功！", ser.service_name);
				} else {
					//failed
					this.$refs.toastAlert.showToast("error", "设置新品失败！", result.message);
				}
      },
      setMarketLevel: function (ser, index) {
        //show modal
        ser.index = index;
        this.currentService = JSON.parse(JSON.stringify(ser));
       $("#marketModal").modal("show");
      },
      confirmMarketLevel:function(){
        if(/\d+/.test(this.currentService.market_level)==false){
          this.$refs.pf.showToast("warning", "新品排序只能是数字", "");
          return;
        }

        if(this.currentService.market_level>100){
          this.$refs.pf.showToast("warning", "新品排序不能大于100", "");
          return;
        }
        if(this.currentService.market_level<0){
          this.$refs.pf.showToast("warning", "新品排序不能小于0", "");
          return;
        }
        var data={
          service_oid:this.currentService.oid,
          market_level:this.currentService.market_level
        };
        $.post_json(appsettings.apiroot+"home/service/core/marketlevel",data,this.cb_confirmMarketLevel,this.currentService);
      },
      cb_confirmMarketLevel:function(res,ser){
        if(res!=null && res.status==0){
          $("#marketModal").modal("hide");
          Vue.set(this.result_services,ser.index,JSON.parse(JSON.stringify(ser)));
          this.$refs.pf.showToast("success", "设置新品排序成功", ser.service_name);
        }else{
            this.$refs.pf.showToast("error", "设置新品排序失败", res.message);
        }
      },
      proChanged: function (ser, event) {
        if (event.currentTarget.checked) {
          this.copyTargetOids.push(ser.oid);
        } else {
          this.copyTargetOids.removeByValue(ser.oid);
        }
      },
      confirmCopy: function () {
        if (this.sameCatServices != null && this.copyTargetOids.length > 0) {
          var data = {};
          data.s_service_oid = this.copyProjectInfo.source_service.oid;
          data.t_service_oid = this.copyTargetOids;
          data.company_oid = this.copyProjectInfo.source_service.company_oid;
          $.post_json(appsettings.apiroot + "project/batchcopy", data, this.callback_batchCopyProjects);
          $("#myModal").modal("hide");
        }
      },
      callback_batchCopyProjects: function (result) {
        if (result != null && result.status == 0) {
          //success
          this.$refs.pf.showToast("success","复制案例成功","");
        } else {
          this.$refs.pf.showToast("error","复制案例失败",result.message);
        }
      },
      pushService: function (ser) {
        window.open("/com/push.html?t=p&id=" + ser.oid);
      },
      copyProjects: function (ser) {
        //
        var data = {};
        data.category_code = ser.category;
        data.company_oid = ser.company_oid;
        $.post_json(appsettings.apiroot + "service/retrieve", data, this.callback_getSameCatServices, ser);
        this.copyProjectInfo.source_service = ser;
        $("#myModal").modal();
      },
      callback_getSameCatServices: function (result, source_pro) {
        if (result != null && result.status == 0) {
          for (var i = 0; i < result.data.services.length; i++) {
            if (source_pro.oid === result.data.services[i].oid) {
              result.data.services.splice(i, 1);
              break;
            }
          }
          this.sameCatServices = result.data.services;
        } else {

        }
      },
      addSameCatService: function (ser) {
        if (ser != null) {
          //复制一个服务
          window.open("/s/edit.html?t=p&c=" + ser.category + "&spoid=" + ser.oid + "&com=" + ser.company_oid +
            "&spid=" + ser.seqid);
        }
      },
      editProjects: function (ser) {
        if (ser != null) {
          window.open(
            "/prj/query.html?t=p&c=" +
            ser.category +
            "&id=" +
            ser.seqid +
            "&com=" +
            ser.company_oid
          );
        }
      },
      createNew: function () {

        window.open("/s/edit.html?c=" + this.catInfo.code + "&cnn=" + encodeURIComponent(this.catInfo.name) +
          "&s=" + this.seriesInfo.code + "&sn=" + encodeURIComponent(this.seriesInfo.name));

      },
      deleteService: function (ser,index) {
        //alert: 是否确定删除服务
        var that = this;
        ser.index = index;
        //confirm
        this.$refs.pf.confirmShow({
          action_code: "deleteservice",
          title: "确定要删除该服务吗？",
          msg: "服务名称：" + ser.service_name,
          success: function (res) {
            if (res.confirm == true) {
              var data = {};
              data.oid = ser.oid;
              $.post_json(
                appsettings.apiroot + "home/service/delete",
                data,
                that.callback_deleteService,
                ser
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
      callback_deleteService: function (result, ser) {
        this.$refs.pf.hideLoading();
        if (result != null && result.status == 0) {
          ser.status = -1;
          this.result_services.splice(parseInt(ser.index),1);
          this.$refs.pf.showToast( "success","删除服务成功",result.message);
        } else {
          this.$refs.pf.showToast( "error","删除服务出现异常",result.message);
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
        this.query_data.page_index = 1;
        $.post_json(
          appsettings.apiroot + "home/service/retrieve",
          this.query_data,
          this.callback_queryClick
        );
      },
      callback_queryClick: function (result) {
        if (result != null && result.status == 0) {
          //   console.log(result.data);
          this.result_services = result.data.services;
          this.query_data.pageTotal = result.data.page_parameter.TotalPageCount;
          this.query_data.page_index = result.data.page_parameter.PageIndex;
          if (this.result_services == null || this.result_services.length == 0) {
            this.$refs.pf.showToast("warning","没有符合条件的服务",result.message);
          }
        } else {
          this.$refs.pf.showToast("error","查询服务信息出现异常",result.message);
        }
      },
      changePage: function (pageindex) {
        this.query_data.page_index = pageindex;
        $.post_json(
          appsettings.apiroot + "home/service/retrieve",
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
    width: 280px;
  }

  .table {
    border-bottom: 1px solid #ccc !important;
  }

  .dropdown-menu {
    position: relative !important;
  }
  .jarviswidget>header{
    border:0.5px solid #c2c2c2;
  }
  .fa-w{
    color:#03A9F4!important;
  }
  .btn-group>a{
    margin-right:5px;
  }
</style>