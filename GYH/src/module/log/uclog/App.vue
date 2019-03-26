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
          <li>运维管理</li>
          <li>信息管理</li>
          <li>UC日志</li>
        </ol>
        <!-- end breadcrumb -->
      </div>


      <div id="content">
        <div class="row">
          <!-- NEW COL START -->
          <article class="col-sm-12 col-md-12">
            <div class="jarviswidget">
              <div class="widget-body">
                <form id="query-form" class="smart-form">
                  <fieldset>
                    <div class="row smart-form">
                      <section class="col col-4">
                        <label class="label">serviceno</label>
                        <label class="input">
                          <input type="text" v-model="query_data.serviceno">
                        </label>
                      </section>

                      <!-- <section class="col col-4">
                        <label class="label">appid</label>
                        <label class="input">
                          <input type="text" v-model="query_data.appid">
                        </label>
                      </section> -->

                      <section class="col col-4">
                        <label class="label">返回值</label>
                        <label class="input">
                          <input type="text" v-model="query_data.result">
                        </label>
                      </section>

                    </div>


                    <div class="row">
                      
                      <div class="col col-6">
                        <section>
                          <label class="label">运行时长</label>
                          <label class="input">
                            <ElRegionInput @change="runtimeChanged" :minPlaceHolder="'最小运行时长'" :maxPlaceHolder="'最大运行时长'"></ElRegionInput>
                          </label>

                        </section>
                      </div>
                      <div class="col col-6">
                        <section class="col col-4">
 				                  <label class="label">开始时间</label>
                          <div class="input" style="padding:0">
                            <input type="text" placeholder="开始时间" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="startTimeChanged($event)">
                          </div>
                        </section>
                        <section class="col col-4">
                          <label class="label">截止时间</label>
                          <div class="input" style="padding:0">
                            <input type="text" placeholder="截止时间" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="endTimeChanged($event)">
                          </div>
                        </section>
                        <!-- <section>
                          <label class="label">开始截止时间</label>
                          <label class="input">
                            <ElRegionInput @change="startTimeChanged" :type="'datetime'" :minPlaceHolder="'开始时间'" :maxPlaceHolder="'截止时间'"></ElRegionInput>
                          </label>

                        </section> -->
                      </div>
                    </div>
                  </fieldset>


                  <footer>
                    <a class="btn btn-primary pull-left" href="javascript:void(0);" @click="queryClick()">
                      <i class="fa fa-search"></i> 查询</a>
                  </footer>
                </form>
              </div>
            </div>
          </article>
        </div>


        <div class="row">
          <!-- NEW WIDGET START -->
          <article class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <!-- Widget ID (each widget will need unique ID)-->
            <div class="jarviswidget jarviswidget-color-blueDark" id="wid-id-1" data-widget-editbutton="false" data-widget-colorbutton="false"
              data-widget-custombutton="false">
              <header>
                <span class="widget-icon">
                  <i class="fa fa-pencil-square-o"></i>
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
                          <th>serviceno</th>
                          <!-- <th>appid</th> -->
                          <th>user_oid</th>
                          <th>runtime</th>
                          <th>result</th>
                          <th>create_time</th>
                          <th>操作</th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr class="row-show" v-for="(log,index) in result_logs" :key="index">
                          <td>{{index+1}}</td>
                          <td class="nw">{{log.SERVICENO}}</td>
                          <!-- <td class="nw">{{log.APPID}}</td> -->
                          <td class="nw">{{log.USER_OID}}</td>
                          <td class="nw">{{log.RUNTIME}}</td>
                          <td class="nw">{{log.RESULT}}</td>
                          <td class="nw">{{log.CREATE_TIME}}</td>
                         
                          <td>
                            <a class="btn btn-xs btn-info" @click="showLogDetail(log)">查看日志信息</a>
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

    	<div class="modal fade" id="myModal" v-show="current_log!=null" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
		    aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
							&times;
						</button>
						<h2 class="modal-title">日志详细信息</h2>
					</div>
					<div class="modal-body">
						<!-- widget content -->
						<div class="widget-body noborder">
							<div class="row smart-form">
								<div class="col col-sm-12" v-if="current_log!=null">
									 <pre style="white-space: pre-wrap;white-space: -moz-pre-wrap;white-space: -pre-wrap;white-space: -o-pre-wrap;word-wrap: break-word;">{{current_log.detail}}</pre>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						
					</div>
				</div>
				<!-- /.modal-content -->
			</div>
			<!-- /.modal-dialog -->
		</div>

    <ElToastAlert ref="toastAlert"></ElToastAlert>
  </div>
</template>

<script>
  import "common/httputils"; //引用js
  import htmlHelper from "common/htmlutils";
  import ElPageFrame from "components/el-PageFrame/el-PageFrame";
  import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";

  import ElSerCategory from "components/el-SerCategory/el-SerCategory";
  import ElRegionInput from "components/el-RegionInput/el-RegionInput";
  import ElPager from "components/el-Pager/el-Pager";
  import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";

  export default {
    name: "app",
    data: function () {
      return {
        query_data: {
          serviceno:null,
          appid:null,
          runtime_min:null,
          runtime_max:null,
          result:null,
          create_time_start:null,
          create_time_end:null,
          data_oid:null,
          PageIndex: 0
        },
        current_log:null,
        result_logs: null,
        functionlist: []
      };
    },
    components: {
      ElPageFrame,
      ElRegionInput,
      ElPager,
      ElToastAlert
    },
    computed: {},
    created: function () {
      $.post_json(
        appsettings.apiroot + "account/admin/userfunction_v2", {
          pageid: "information_uclog"
        },
        this.functionlist_callback
      );
    },
    mounted: function () {},
    methods: {
      showLogDetail:function(log){
        if(log.detail==undefined || log.detail==null){
          var data={};
          data.data_oid= log.DATA_OID;
          $.post_json(appsettings.apiroot+"admin/log/data",data,this.callback_showLogDetail,log);
        }else{
          //show modal
          this.current_log = log;
          setTimeout(() => {
            $("#myModal").modal();
          }, 0); 
        }
      },
      callback_showLogDetail:function(result,log){
        if(result!=null && result.status==0){
           //show modal
           log.detail = result.data;
          this.current_log = log;
          setTimeout(() => {
            $("#myModal").modal();
          }, 0); 
        }else{
          this.$refs.toastAlert.showToast("error","查询日志详情出现异常",result.message);
        }
      },
      runtimeChanged:function(value){
        var v = value.split(",");
        this.query_data.runtime_min = v[0];
        this.query_data.runtime_max = v[1];
      },
      startTimeChanged:function(event){
        this.query_data.create_time_start = event.target.value;
      },
      endTimeChanged:function(event){
        this.query_data.create_time_end = event.target.value;
      },
      functionlist_callback: function (res) {
        if (res.status == 0) {
          var funlist = res.data.functions;
          this.functionlist.splice(0, this.functionlist.length);
          for (var i = 0; i < funlist.length; i++) {
            this.functionlist.push(funlist[i].function_code);
          }
        }
      },
      queryClick: function () {
        console.log(appsettings.apiroot);
        this.query_data.PageIndex = 1;
        $.post_json(
          appsettings.apiroot + "admin/log/uc/retrieve",
          this.query_data,
          this.callback_queryClick
        );
      },
      callback_queryClick: function (result) {
        if (result != null && result.status == 0) {
          this.result_logs = result.data.LogUCServiceList;
          this.query_data.pageTotal = result.data.PageParameter.TotalPageCount;
          this.query_data.page_index = result.data.PageParameter.PageIndex;
          if (this.result_logs == null || this.result_logs.length == 0) {
          this.$refs.toastAlert.showToast("warning","没有符合条件的日志",result.message);
        } 
        }
        else {
        this.$refs.toastAlert.showToast("error","查询服务信息出现异常",result.message);
        }
      },
      changePage: function (pageindex) {
        this.query_data.PageIndex = pageindex;
        $.post_json(
          appsettings.apiroot + "admin/log/uc/retrieve",
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
    border-top: 1px solid #ccc !important;
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
    width: 70px;
  }

  .table {
    border-bottom: 1px solid #ccc !important;
  }

  .dropdown-menu {
    position: relative !important;
  }
  .widget-body{
    border-top:none!important;
  }
</style>