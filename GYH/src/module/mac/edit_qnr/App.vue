<template>
	<div id="app">
		<ElPageFrame ref="pf"></ElPageFrame>
<!-- MAIN PANEL -->
		<div id="main" role="main">

			<!-- RIBBON -->
			<div id="ribbon">

				<span class="ribbon-button-alignment"> 
					<span id="refresh" class="btn btn-ribbon" data-action="resetWidgets" data-title="refresh"  rel="tooltip" data-placement="bottom" data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings." data-html="true">
						<i class="fa fa-refresh"></i>
					</span> 
				</span>

				<!-- breadcrumb -->
				<ol class="breadcrumb">
					<li><a :href="appsettings.portal_root">首页</a></li><li>我的设备</li>
				</ol>

			</div>
			<!-- END RIBBON -->
			<!-- MAIN CONTENT -->
			<div id="content">

				<div class="row">
					<div class="col-sm-12">
						<div class="well">
							<h1 class="semi-bold">产品名称：{{product_name}} <span v-if="machine_no!=undefined&&machine_no.length>0">/ 设备编号：{{machine_no}}</span></h1>
						<p> 
							使用公司：{{company_name}}
						</p>
						<p> 
							安装地点：{{mac_address}}
						</p>
						</div>
					</div>
				</div>
				<!-- widget grid -->
				<section id="widget-grid" class="">

					<!-- row -->

					<div class="row">
						<!-- NEW COL START -->
						<article class="col-sm-12 col-md-12 col-lg-6" >
				
							<!-- Widget ID (each widget will need unique ID)-->
							<div v-for="(group,index) in qnr_groups" :key="index" v-if="index>0&&index%2!=0" class="jarviswidget" id="wid-id-1" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-custombutton="false">

								<header>
									<span class="widget-icon"> <i class="fa fa-edit"></i> </span>
									<h2>{{group.group_name}} </h2>
				
								</header>
				
								<!-- widget div-->
								<div>
				
									<!-- widget edit box -->
									<div class="jarviswidget-editbox">
										<!-- This area used as dropdown edit box -->
				
									</div>
									<!-- end widget edit box -->
				
									<!-- widget content -->
									<div class="widget-body no-padding">
				
										<form class="smart-form">
											<fieldset>
												<div class="row" v-for="(para,index) in group.parameters" :key="index" 
												v-if="para.column_name!='填表人公司'&&para.column_name!='填表人姓名'&&para.column_name!='填表人邮件'&&para.column_name!='填表人电话'&&para.column_name!='填表时间'">
													<section class="col col-12" style="width: 100%;">
														<label class="label">{{para.column_name}}</label>
														<div v-if="(para.data_type==8||para.is_enum_data==1)&& para.enum_type==0">
															<label class="radio" v-for="(ch,index) in para.enum_list" :key="index" >
																<input type="radio" :name="'radio'+para.column_id" :value="ch.enum_code" :checked="para.value==ch.enum_code" @change="para.value = ch.enum_code">
																<i data-swchon-text="是" data-swchoff-text="否"></i>{{index+1}}：{{ch.enum_name}}</label>
														</div>
														<div v-if="para.data_type==2">
															<label class="textarea"> 										
																<textarea rows="3" class="custom-scroll" :placeholder="'请输入'+para.column_name" v-model="para.value"></textarea> 
															</label>
														</div>
													</section>
												</div>
											</fieldset>
											<footer>
												<a type="submit" class="btn btn-primary" @click="raise()">
													提交
												</a>
											</footer>
										</form>
				
									</div>
									<!-- end widget content -->
				
								</div>
								<!-- end widget div -->
				
							</div>
							<!-- end widget -->
			
						</article>
						<!-- END COL -->

						<article class="col-sm-12 col-md-12 col-lg-6" >
				
							<!-- Widget ID (each widget will need unique ID)-->
							<div v-for="(group,index) in qnr_groups" :key="index" v-if="index>0&&index%2==0" class="jarviswidget" id="wid-id-1" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-custombutton="false">

								<header>
									<span class="widget-icon"> <i class="fa fa-edit"></i> </span>
									<h2>{{group.group_name}} </h2>
				
								</header>
				
								<!-- widget div-->
								<div>
				
									<!-- widget edit box -->
									<div class="jarviswidget-editbox">
										<!-- This area used as dropdown edit box -->
				
									</div>
									<!-- end widget edit box -->
				
									<!-- widget content -->
									<div class="widget-body no-padding">
				
										<form class="smart-form">
											<fieldset>
												<div class="row" v-for="(para,index) in group.parameters" :key="index" 
												v-if="para.column_name!='填表人公司'&&para.column_name!='填表人姓名'&&para.column_name!='填表人邮件'&&para.column_name!='填表人电话'&&para.column_name!='填表时间'">
													<section class="col col-12" style="width: 100%;">
														<label class="label">{{para.column_name}}</label>
														<div v-if="(para.data_type==8||para.is_enum_data==1)&& para.enum_type==0">
															<label class="radio" v-for="(ch,index) in para.enum_list" :key="index" >
																<input type="radio" :name="'radio'+para.column_id" :value="ch.enum_code" :checked="para.value==ch.enum_code" @change="para.value = ch.enum_code">
																<i data-swchon-text="是" data-swchoff-text="否"></i>{{index+1}}：{{ch.enum_name}}</label>
														</div>
														<div v-if="para.data_type==2">
															<label class="textarea"> 										
																<textarea rows="3" class="custom-scroll" :placeholder="'请输入'+para.column_name" v-model="para.value"></textarea> 
															</label>
														</div>
													</section>
												</div>
											</fieldset>
											<footer>
												<a type="submit" class="btn btn-primary" @click="raise()">
													提交
												</a>
											</footer>
										</form>
				
									</div>
									<!-- end widget content -->
				
								</div>
								<!-- end widget div -->
				
							</div>
							<!-- end widget -->
			
						</article>
						<!-- END COL -->
					</div>

					<!-- end row -->

				</section>
				<!-- end widget grid -->

			</div>
			<!-- END MAIN CONTENT -->

		</div>
		<!-- END MAIN PANEL -->
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
			product_name:"",
			machine_no:"",
      qnr_groups: [],
      qnr: {},
      mac_survey: {}
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
    htmlutils.setPageTitle("问卷调查");

    this.qnr.machine_oid = $.getUrlParam("mac_oid");
		this.qnr.product_oid = $.getUrlParam("pro_oid");
		
		this.product_name= $.getUrlParam("pro_name");
		this.machine_no= $.getUrlParam("mac_no");
		this.company_name= $.getUrlParam("com_name");
		this.mac_address= $.getUrlParam("mac_add");

    //查询所有问卷问题
    $.post_json(
      appsettings.apiroot + "product/category/paramvalues/retrieve",
      {
        category_code: "mac_survey"
      },
      this.callback_getSurvey
    );
  },
  mounted: function() {},
  methods: {
    callback_getSurvey: function(result) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        var that = this;
        this.qnr_groups= result.data;

					this.$refs.pf.showLoading("加载中");
          $.post_json(
            appsettings.apiroot + "slavedata/retrieve",
            {
              table_id: "mac_survey",
              search_tags:
                '{"MACHINE_OID":"' + this.qnr.machine_oid + '",}',
              statuses: "0,1"
            },
            this.callback_getQnrInfo
          );
      } else if (result.status < 0) {
				this.$refs.toastAlert.config = {
          type: "error",
          title: "问卷信息加载错误",
        };
        this.$refs.toastAlert.show = true;
      }
    },

    callback_getQnrInfo: function(result) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
				var that = this;
				var res_mac_survey =[];
				if(result.data.datalist.length > 0){
					res_mac_survey=result.data.datalist[0];
					this.action_mode = "edit";
				}
				else{
					this.action_mode = "new";
				}

        for (var i = 0; i < this.qnr_groups.length; i++) {
          for (var j = 0; j < this.qnr_groups[i].parameters.length; j++) {
            for (var k = 0; k < res_mac_survey.parameters.length; k++) {
              if (
                this.qnr_groups[i].parameters[j].column_id ==
                res_mac_survey.parameters[k].column_id
              ) {
                this.qnr_groups[i].parameters[j].value =
                  res_mac_survey.parameters[k].value;
              }
            }
          }
        }
        this.mac_survey= res_mac_survey;
      } else if (result.status < 0) {
				this.$refs.toastAlert.config = {
          type: "error",
					title: "问卷信息加载错误",
					content: result.message
        };
        this.$refs.toastAlert.show = true;
      }
    },

    //提交
    raise: function() {
      //只有创建者可以修改
			this.$refs.pf.showLoading("提交中");
      var parameters = this.paraGroupsToParas(this.qnr_groups);

      if (this.action_mode == "new") {
        var data = {
          table_id: "mac_survey",
          product_oid: this.qnr.product_oid,
          machine_oid: this.qnr.machine_oid,
          parameters: parameters
        };

        $.post_json(
          appsettings.apiroot + "home/machine/survey/create",
          data,
          this.callback_raise
        );
      } else {
        var data = this.mac_survey;
        data.table_id = "mac_survey";
        data.parameters = parameters;

        $.post_json(
          appsettings.apiroot + "home/machine/survey/update",
          data,
          this.callback_raise
        );
      }
    },

    callback_raise: function(result) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
				//提示提交成功（提示页面加链接回到我的需求响应界面）
				this.$refs.toastAlert.config = {
          type: "success",
          title: "提交成功！",
        };
        this.$refs.toastAlert.show = true;
      } else {
        this.$refs.toastAlert.config = {
          type: "error",
          title: "保存失败！",
          msg: result.message
        };
        this.$refs.toastAlert.show = true;
      }
    },

    paraGroupsToParas: function(groups) {
      var parameters = [];
      for (var i = 0; i < groups.length; i++) {
        for (var j = 0; j < groups[i].parameters.length; j++) {
          var para = {};
          para.column_id = groups[i].parameters[j].column_id;
          para.is_required = groups[i].parameters[j].is_required;
          if (groups[i].parameters[j].column_id == "MACHINE_OID") {
            //设备oid字段特殊处理
            para.value = this.qnr.machine_oid;
          } else if (
            groups[i].parameters[j].data_type == 7 ||
            groups[i].parameters[j].is_region_data == "1"
          ) {
            para.value =
              (groups[i].parameters[j].mininput || "") +
              "," +
              (groups[i].parameters[j].maxinput || "");
          } else if (groups[i].parameters[j].data_type == 9) {
            para.value = "";
            if (
              groups[i].parameters[j].value != null &&
              groups[i].parameters[j].value != undefined &&
              groups[i].parameters[j].value.indexOf("{") > 0
            ) {
              var v = JSON.parse(groups[i].parameters[j].value);
              for (var k = 0; k < v.length; k++) {
                if (k > 0) {
                  para.value += ",";
                }
                para.value += v[k].key;
              }
            } else {
              para.value = groups[i].parameters[j].value;
            }
          } else if (groups[i].parameters[j].data_type == 3) {
            var ue = this.$refs["ueditor_" + groups[i].parameters[j].column_id];
            if (ue != undefined && ue != null) {
              para.value = ue[0].getUEContent();
            }
          } else {
            para.value = groups[i].parameters[j].value;
          }
          parameters.push(para);
        }
      }
      return parameters;
    },
  }
};
</script>

<style>
</style>
