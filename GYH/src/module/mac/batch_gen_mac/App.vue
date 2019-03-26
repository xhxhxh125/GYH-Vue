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
					<li><a :href="appsettings.portal_root">首页</a></li><li>我的设备</li><li>批量生成设备</li>
				</ol>
				<!-- end breadcrumb -->

			</div>
			<!-- END RIBBON -->

			<!-- MAIN CONTENT -->
			<div id="content">

				<!-- <div class="row">
					<div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
						<h1 class="page-title txt-color-blueDark">
							<i class="fa fa-edit fa-fw "></i> 
								Forms 
							<span>> 
								Form Elements
							</span>
						</h1>
					</div>
				</div> -->
				
				
				
				<!-- widget grid -->
				<section id="widget-grid" class="">
				
					<!-- START ROW -->
					<div class="row">
				
						<!-- NEW COL START -->
						<article class="col-sm-12 col-md-12 col-lg-6">
				
							<!-- Widget ID (each widget will need unique ID)-->
							<div class="jarviswidget" id="wid-id-1" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-custombutton="false">

								<header>
									<span class="widget-icon"> <i class="fa fa-edit"></i> </span>
									<h2>批量生成设备 </h2>
				
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
                      <header v-if="userrole.iscomadmin">
												设备信息
											</header>
				
											<fieldset v-if="userrole.iscomadmin">
												<!-- <section v-if="(mac.company_oid==undefined||mac.company_oid.length==0)||isuser||iscreator">
													<label class="label">使用公司（经销商）</label>
													<label class="input">
                            <ElCompanyIntellisense :comname="mac.company_name" @companyChanged="userCompanyChanged"></ElCompanyIntellisense>
													</label>
                          <label class="label">联系人</label>
													<label class="input">
														<input type="text" class="input-sm" placeholder="请输入姓名" v-model="mac.company_user_name">
													</label>
                          <label class="label">手机号</label>
													<label class="input">
														<input type="text" class="input-sm" placeholder="请输入姓名" v-model="mac.company_user_mobile">
													</label>
												</section> -->
												<!-- <section>
													<label class="label">选择使用公司</label>
													<label class="input">
														<input v-if="action_mode=='edit'" type="text" name="text" disabled placeholder="选择使用公司" v-model="mac.company_name">
														<input v-if="action_mode=='new'" type="text" name="text" placeholder="选择使用公司" v-model="mac.company_name" @focus="showCompanyModal">
													</label>
												</section> -->
												<section>
													<label class="label" style="color:red">选择产品</label>
													<label class="input">
														<input type="text" name="text" placeholder="点击这里可以搜索已经录入的产品信息" v-model="mac.product_name" @focus="showProductModal">
													</label>
												</section>
												<section>
													<label class="label" style="color:red">设备编号规则<span style="color:grey">（请使用@代表数字）</span></label>
													<label class="input">
														<input type="text" class="input-xs" placeholder="请输入设备编号" v-model="mac.machine_no_rule">
													</label>
                        </section>
                        <section class="row" style="margin:0;">
                          <label class="label" style="color:red">编号范围</label>
													<label class="input col col-5 nopaddingl rl">
														<input type="text" class="input-xs" placeholder="请输入设备起始编号" v-model="mac.machine_no_start">
                          </label>
                          <label class="nopaddingl col to">—</label>
                          <label class="input col col-5 nopaddingl rl">
														<input type="text" class="input-xs" placeholder="请输入设备截止编号" v-model="mac.machine_no_end">
													</label>
                        </section>
                        <section>
                          <label class="label" style="color:grey">示例：设备编号规则为“sbbh@”，编号范围为“1-100”，将会生成100台设备，设备编号为 sbbh@1-sbbh100</label>
												</section>
											</fieldset>
				
                      <header v-if="userrole.iscomadmin">
												客户信息
											</header>
				
											<fieldset v-if="userrole.iscomadmin">
                        
                        <section>
													<label class="label">客户信息</label>
													<label class="input">
														<input type="text" class="input-sm" placeholder="请输入客户信息" v-model="mac.customer">
													</label>
												</section>
                        <section>
													<label class="label">联系电话（多个手机号用逗号分隔）</label>
													<label class="input">
														<input type="text" class="input-sm" placeholder="请输入手机号码" v-model="mac.tel">
													</label>
												</section>
                        <section>
													<label class="label">购买日期</label>
													<label class="input">
														<input type="text" class="input-sm" placeholder="购买日期" v-model="mac.buy_time" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="bindBuyTimeChange($event)">
													</label>
												</section>

												<section>
							            <label class="label">安装城市</label>
														<div style="width:49%;display:inline-block">
																<label class="select">
																	<select :value="getProvinceCode()" class="province-select" @change="onProvinceChange($event)">
																		<option disabled value="000000">省</option>
																		<option v-for="(item,index) of provinces" :value="item.code" :key="index">{{item.name}}</option>	
																	</select>
																	<i></i>
																</label>
                            </div>
                            <!-- <div class="col-md-6" style="display:inline-block">
																<label class="select">
																	<select :value="getProvinceCode()" @change="onProvinceChange($event)">
																		<option disabled value="000000">省</option>
																		<option v-for="(item,index) of provinces" :value="item.code" :key="index">{{item.name}}</option>	
																	</select>
																	<i></i>
																</label>
                            </div> -->
                            <div style="width:49%;display:inline-block">
																<label class="select">
																	<select :value="mac.setup_zip" class="chosen-select" @change="onCityChange($event)">
																		<!-- <option disabled :value="getDeraultCityCode()">市</option> -->
																		<option v-for="(item,index) of cities" :value="item.code" :key="index">{{item.name}}</option>	
																	</select>
																	<i></i>
																</label>
                          	</div>
                      	</section>

												<section>
													<label class="label">安装地址</label>
													<label class="input">
														<input type="text" class="input-sm" placeholder="请输入安装地址" v-model="mac.setup_address">
													</label>
												</section>

												<section>
													<label class="label">备注</label>
													<label class="textarea"> 										
														<textarea rows="3" class="custom-scroll" placeholder="请输入备注" v-model="mac.remark"></textarea> 
													</label>
												</section>
				
											</fieldset>

                      <header v-if="userrole.iscomadmin">
												合同信息
											</header>
				
											<fieldset v-if="userrole.iscomadmin">
												
												<section>
													<label class="label">合同编号</label>
													<label class="input">
														<input type="text" class="input-xs" placeholder="请输入合同编号" v-model="mac.contract_no">
													</label>
												</section>
				
												<section>
													<label class="label">合同开始日期</label>
													<label class="input">
														<input type="text" class="input-sm" placeholder="合同开始日期" v-model="mac.contract_start" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="bindContractStartChange($event)">
													</label>
												</section>
												<section>
													<label class="label">合同截止日期</label>
													<label class="input">
														<input type="text" class="input-sm" placeholder="合同截止日期" v-model="mac.contract_end" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="bindContractEndChange($event)">
													</label>
												</section>
												<section>
													<label class="label">服务开始日期</label>
													<label class="input">
														<input type="text" class="input-sm" placeholder="服务开始日期" v-model="mac.service_start" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="bindServiceStartChange($event)">
													</label>
												</section>
												<section>
													<label class="label">服务截止日期</label>
													<label class="input">
														<input type="text" class="input-sm" placeholder="服务截止日期" v-model="mac.service_end" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="bindServiceEndChange($event)">
													</label>
												</section>
											</fieldset>

											<footer v-if="userrole.iscomadmin">
												<a class="btn btn-primary" @click="raise()">
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
				
					<!-- END ROW -->

				</section>
				<!-- end widget grid -->


			</div>
			<!-- END MAIN CONTENT -->

		</div>
		<!-- END MAIN PANEL -->

		<!-- 产品查询modal -->
    <div class="modal fade" id="productmodal" tabindex="-1" role="dialog">
      <div class="modal-dialog sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title">
              查询产品
            </h4>
          </div>
          <div class="modal-body no-padding">

            <div id="ref-form" class="smart-form">
              <fieldset>
                <div class="row">

                  <div>
                    <section class="col col-6">
                      <label class="label">产品名称</label>
                      <label class="input">
                        <input type="text" name="text" v-model="product_query.product_name">
                      </label>
                    </section>

                    <!-- <section class="col col-6">
                      <label class="label">公司名称</label>
                      <label class="input">
                        <input type="text" name="text" v-model="product_query.company_name">
                      </label>
                    </section> -->

                    <section class="col col-12">
                            <label class="label">本公司产品</label>
                            <div class="inline-group">
                              <label class="radio" v-for="(row,index) in company_products" :key="index">
                                <input type="radio" @click="selectProduct(row,$event)" name="refradio">
                                <i></i>{{row.product_name}}
                              </label>
                            </div>
                          </section>
                  </div>
                </div>
              </fieldset>
              <footer>
                <a class="btn btn-primary pull-left" href="javascript:void(0);" @click="queryProduct()">
                  <i class="fa fa-search"></i> 查询平台产品</a>
                  <a class="btn btn-success pull-left" href="javascript:void(0);" @click="confirmProduct()">
                  选定产品</a>
              </footer>
              <fieldset>
                <div>
                  <div>
                    <div class="jarviswidget-editbox">
                    </div>
                    
                    <div class="widget-body no-padding">
                      <table class="table table-striped table-bordered table-hover" width="100%">
                        <thead>
                          <tr>
                            <th style="width: 30px;"></th>
                            <th>产品名称</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="row-show" v-for="(row,index) in products" :key="index">
                            <td>
                              <label class="radio">
                                <input type="radio" @click="selectProduct(row,$event)" name="refradio">
                                <i></i>
                              </label>
                            </td>
                            <td>
                              {{row.product_name}} / {{row.company_name}}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- <ElPager :pageTotal="query_data.pageTotal" @changePage="changePage"></ElPager> -->
                  </div>
                </div>
              </fieldset>

              <footer>
                <button type="button" class="btn btn-success" @click="confirmProduct()">
                  选定产品
                </button>
                <button type="button" class="btn btn-default" data-dismiss="modal" @click="cancelProduct()">
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


			<!-- 公司查询modal -->
    <!-- <div class="modal fade" id="companymodal" tabindex="-1" role="dialog">
      <div class="modal-dialog sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title">
              查询公司
            </h4>
          </div>
          <div class="modal-body no-padding">

            <div id="ref-form" class="smart-form">
              <fieldset>
                <div class="row">

                  <div>

                    <section class="col col-6">
                      <label class="label">公司名称</label>
                      <label class="input">
                        <input type="text" name="text" v-model="company_query.company_name">
                      </label>
                    </section>

                  </div>
                </div>
              </fieldset>
              <footer>
                <a class="btn btn-primary pull-left" href="javascript:void(0);" @click="queryCompany()">
                  <i class="fa fa-search"></i> 查询</a>
                  <a class="btn btn-success pull-left" href="javascript:void(0);" @click="confirmCompany()">
                  确定</a>
              </footer>
              <fieldset>
                <div>
                  <div>
                    <div class="jarviswidget-editbox">
                    </div>
                    <div class="widget-body no-padding">
                      <table class="table table-striped table-bordered table-hover" width="100%">
                        <thead>
                          <tr>
                            <th style="width: 30px;"></th>
                            <th>公司名称</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="row-show" v-for="(row,index) in companies" :key="index">
                            <td>
                              <label class="radio">
                                <input type="radio" @click="selectCompany(row,$event)" name="refradio">
                                <i></i>
                              </label>
                            </td>
                            <td>
                              {{row.company_name}}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </fieldset>

              <footer>
                <button type="button" class="btn btn-success" @click="confirmCompany()">
                  确定
                </button>
                <button type="button" class="btn btn-default" data-dismiss="modal" @click="cancelCompany()">
                  取消
                </button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div id="uploaderInput" ref="uploaderInput1" ></div>
		<ElToastAlert ref="toastAlert"></ElToastAlert>
	</div>
</template>

<script>
import "common/httputils"; //引用js
import Vue from "vue";
import htmlHelper from "common/htmlutils";
import htmlutils from "common/htmlutils";
import ElPageFrame from "components/el-PageFrame/el-PageFrame";

import ElPager from "components/el-Pager/el-Pager";
import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";
import ElCompanyIntellisense from "components/el-CompanyIntellisense/el-CompanyIntellisense";

export default {
  name: "app",
  data: function() {
    return {
      action_mode: "",
      mac_id: "",
      userrole:{},

			mac: {
				product_name:"",
        company_name:"",
        setup_zip:"000000",
			},
			
			provinces:[],
			cities:[],

        product_query: {
          product_name: null,
          page_index: 1
				},
				products:[],
        company_products:[],

				company_query: {
          company_name: null,
          page_index: 1
				},
        companies:[],
        
        uploader: null,
			uploading_progresses: [],
			fileList:[],
      uploading_files: [],
    };
  },
  components: {
    ElPageFrame,
    ElPager,
    ElBlockAlert,
    ElToastAlert,
    ElCompanyIntellisense
  },
  created: function() {
      //生成会议oid
      this.mac.oid = $.guid();
      this.action_mode = "new";
      htmlutils.setPageTitle("创建设备");
      //判断是否为创建者
        $.post_json(appsettings.apiroot + "home/machine/macuserrole", 
          { create_company_oid: "", company_oid: ""}, 
          this.callback_iscreator);
      //查询所有省份列表
      $.post_json(
        appsettings.apiroot + "utility/province/retrieve",
        null,
        this.callback_getAllProvinces
      );
    
  },
  mounted: function() {this.InitUploader();},
  methods: {
    callback_iscreator: function (result){
      if (result != null && result.status == 0) {
        this.userrole = result.data;
      }
    },
    //日期
    bindContractStartChange: function(e) {
      this.mac.contract_start = e.target.value;
    },
    bindContractEndChange: function(e) {
      this.mac.contract_end = e.target.value;
    },
    bindServiceStartChange: function(e) {
      this.mac.service_start = e.target.value;
    },
    bindServiceEndChange: function(e) {
      this.mac.service_end = e.target.value;
    },
    bindBuyTimeChange:function(e){
      this.mac.buy_time = e.target.value;
    },

    //省市选择
    callback_getAllProvinces: function(e) {
      if (e != null && e.status == 0) {
				this.provinces = e.data;
				setTimeout(() => {
        $(".province-select").trigger("chosen:updated");
			}, 0);
      }
		},
		
		callback_getAllcities: function(e) {
      
      if (e != null && e.status == 0) {
        this.cities = e.data;
				setTimeout(() => {
          this.cities=[];
          this.cities=e.data;
          $(".chosen-select").trigger("chosen:updated");
        }, 0);
      }
    },

    getProvinceCode: function() {
      if (this.mac.setup_zip == undefined) {
        return "000000";
      } else {
        return this.mac.setup_zip.substring(0, 2) + "0000";
      }
		},
		
		getCityCode: function() {
      
      if (this.mac.setup_zip == undefined) {
        return "000000";
      } else {
        return this.mac.setup_zip;
      }
    },

    onProvinceChange: function(e) {
      //获取该省城市列表
      this.mac.setup_zip = e.currentTarget.value;
      var body = { provincecode: e.currentTarget.value };
      $.post_json(
        appsettings.apiroot + "utility/city/retrieve",
        body,
        this.citiesRender
      );
    },

    citiesRender: function(res) {
      this.cities = res.data;
      this.onSltCitiesChanged();
    },

    getDeraultCityCode: function() {
      if (this.mac.setup_zip == undefined) {
        return "000000";
      } else {
        return this.mac.setup_zip.substring(0, 2) + "0000";
      }
    },

    onSltCitiesChanged: function() {
      setTimeout(() => {
        $(".chosen-select").trigger("chosen:updated");
      }, 0);
    },

    onCityChange: function(e) {
      //绑定选择的城市
      this.mac.setup_zip = e.currentTarget.value;
    },


		//Model
		// showCompanyModal: function () {
    //   $("#companymodal").modal("show");
		// },
		// queryCompany: function () {
    //     if((this.company_query.company_name||"")==""){
    //       this.$refs.pf.showToast("warning","查询条件不能为空","");
    //       return;
    //     }
    //     $.post_json(appsettings.apiroot + "home/company/retrieve", this.company_query, this.callback_queryCompany);
    //     this.$refs.pf.showLoading("正在查询....");
    //   },
    //   callback_queryCompany: function (result) {
    //     this.$refs.pf.hideLoading();
    //     if (result != null && result.status == 0) {
		// 			this.companies = result.data.companulist;
    //       if (this.companies == null || this.companies.length == 0) {
    //         this.$refs.toastAlert.showToast("warning", "没有查到公司！", "");
    //       }
    //     } else {
    //       this.$refs.toastAlert.showToast("error", "查询公司出现异常！", result.message);
    //     }
    //   },
    //   selectCompany: function (com, event) {
    //     if (event.currentTarget.checked) {
    //       this.selectedCompany = com;
    //     }
    //   },
    //   confirmCompany: function () {
    //     this.mac.company_oid = this.selectedCompany.oid;
    //     this.mac.company_name = this.selectedCompany.company_name;
    //     $("#companymodal").modal("hide");
    //   },			

      userCompanyChanged:function(company){
        this.mac.company_oid = company.id;
        this.mac.company_name = company.name;
      },

		showProductModal: function () {
      //todo-查询本公司的产品
       this.$refs.pf.showLoading("正在查询....");
       this.product_query.page_size=1000;
       this.product_query.statuses=0;       
      $.post_json(appsettings.apiroot + "home/product/retrieve", this.product_query, this.callback_queryCompanyProduct);
    },
    callback_queryCompanyProduct:function(result){
       this.$refs.pf.hideLoading();
        if (result != null && result.status == 0) {
          this.company_products = result.data.products;
          $("#productmodal").modal("show");
        } else {
          this.$refs.toastAlert.showToast("error", "查询公司产品出现异常！", result.message);
        }
    },

		queryProduct: function () {
        if((this.product_query.product_name||"")==""){
          this.$refs.pf.showToast("warning","查询条件不能为空","");
          return;
        }
        $.post_json(appsettings.apiroot + "product/retrieve", this.product_query, this.callback_queryProduct);
        this.$refs.pf.showLoading("正在查询....");
      },
      callback_queryProduct: function (result) {
        this.$refs.pf.hideLoading();
        if (result != null && result.status == 0) {
					this.products = result.data.products;
          if (this.products == null || this.products.length == 0) {
            this.$refs.toastAlert.showToast("warning", "没有查到产品！", "");
          }
        } else {
          this.$refs.toastAlert.showToast("error", "查询产品出现异常！", result.message);
        }
      },
      selectProduct: function (pro, event) {
        if (event.currentTarget.checked) {
          this.selectedProduct = pro;
        }
      },
      confirmProduct: function () {
        this.mac.product_oid = this.selectedProduct.oid;
        this.mac.product_name = this.selectedProduct.product_name;
        $("#productmodal").modal("hide");
      },
      cancelProduct: function () {},

    //提交
    raise: function() {
      if(!this.userrole.iscomadmin){
        this.$refs.toastAlert.config = {
          type: "warning",
          title: "您并非公司管理员，无法批量创建设备",
        };
        this.$refs.toastAlert.show = true;
      }
      if (this.mac.product_oid == undefined || this.mac.product_oid.length==0){
        this.$refs.toastAlert.config = {
          type: "warning",
          title: "请选择产品",
        };
        this.$refs.toastAlert.show = true;
      return;
    }
    if (this.mac.machine_no_rule == undefined || this.mac.machine_no_rule.length == 0) {
      this.$refs.toastAlert.config = {
          type: "warning",
          title: "请填写设备编号规则",
        };
        this.$refs.toastAlert.show = true;
      return;
    }
    if (this.mac.machine_no_rule.indexOf("@")<0) {
      this.$refs.toastAlert.config = {
          type: "warning",
          title: "设备编号规则中需要包含'@'",
        };
        this.$refs.toastAlert.show = true;
      return;
    }
    if (this.mac.machine_no_start == undefined || this.mac.machine_no_start.length == 0||this.mac.machine_no_end == undefined || this.mac.machine_no_end.length == 0) {
      this.$refs.toastAlert.config = {
          type: "warning",
          title: "请填写设备编号范围",
        };
        this.$refs.toastAlert.show = true;
      return;
    }

			this.$refs.pf.showLoading("提交中....");
        $.post_json(
          appsettings.apiroot + "home/machine/batch/create",
          this.mac,
          this.callback_raise
        );
    },

    callback_raise: function(result) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
				//提示提交成功（提示页面加链接回到我的需求响应界面）
        this.mac.machine_no_rule="";
        this.mac.machine_no_start="";
        this.mac.machine_no_end="";
				this.$refs.toastAlert.config = {
          type: "success",
          title: "提交成功！",
          msg: ""
        };
				this.$refs.toastAlert.show = true;
      } else {
				this.$refs.toastAlert.config = {
          type: "error",
          title: "保存设备失败！",
          msg: result.message
        };
        this.$refs.toastAlert.show = true;
      }
    },

    deleteAtttachment: function (attach, attach_index) {
			var self =this;
			var data = {
      	oid: attach.oid,
      	source_oid: this.mac.oid,
      	target_type: 8,//v_all_target_type
      	cache_key: 'Machine_'
    	}

        this.$refs.pf.confirmShow({
          only_alert: false,
          action_code: "deleteA",
          title: "删除附件",
          msg: "确定要删除附件【" + attach.file_name + attach.file_type + "】吗？",
          success: function (res) {
            if (res.confirm == true) {
              //do delete
              $.post_json(
                appsettings.apiroot + "utility/attachment/delete",
                data,
                self.callback_deleteAtttachment,
                attach_index
              );
            }
          }
        });
      },
      callback_deleteAtttachment: function (result, attach_index) {
        if (result != null && result.status == 0) {
          this.fileList.splice(attach_index, 1);
        } else {
          //删除失败
          this.$refs.toastAlert.showToast("error", "删除附件失败", result.message);
        }
      },


			uploadAttachment: function () {
        $("#uploaderInput input").click();
      },
      
      InitUploader: function () {
        var self = this;
        this.uploader = WebUploader.create({
          // swf文件路径
          swf: appsettings.gyhpluginsPrefix + "webuploader/Uploader.swf",
          // 文件接收服务端。
          server: appsettings.apiroot + "utility/attachment/upload",
          chunked: true,
          threads: 1,
          auto: true,
          fromData: {
            guid: "guid"
          },
          // 选择文件的按钮。可选。
          // 内部根据当前运行是创建，可能是input元素，也可能是flash.
          pick: "#uploaderInput",
          multiple: true,
          // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
          resize: false,
          chunkSize: 4000880
        });

        this.uploader.on("beforeFileQueued", function (file) {});

        this.uploader.on("fileQueued", function (file) {
          self.uploader.options.formData.guid = Math.random();
          file.index = self.uploading_files.length;
          self.uploading_progresses.push("0");
          self.uploader.options.formData.soid = self.mac.oid;
          self.uploader.options.formData.target_type = 11;
          self.uploader.options.formData.cache_key = 'Machine_';
          self.uploader.options.formData.token = window.localStorage.getItem(
            "token"
          );
          //如果是图片，则生成缩略图
          if (htmlHelper.isImg("." + file.ext)) {
            self.uploader.makeThumb(
              file,
              function (error, ret) {
                file.url = ret;
                self.uploading_files.push(file);
              },
              100,
              100
            );
          } else {
            //其他文件，则用一个背景图片
            file.url = appsettings.gyhImgPrefix + "file.png";
            self.uploading_files.push(file);
          }
        });
        this.uploader.on("uploadProgress", function (file, percentage) {
          Vue.set(self.uploading_progresses, file.index, (percentage * 100 + "").substring(0, 5));
        });

        this.uploader.on("uploadAccept", function (file, response) {
          response = JSON.parse(response);
          if (response != null) {
            if (response.status == 0) {
              return true;
            } else if (response.status == 9999) {
              window.location.href =
                appsettings.login_url + encodeURIComponent(window.location.href);
              return false;
            }
          }
        });

        this.uploader.on("uploadSuccess", function (file, response) {
          response = JSON.parse(response);

          if (response != null) {
            if (response.status == 0) {
							let albumList = self.fileList;
          		var uploading_file = response.data;
							uploading_file.ok = true;
							uploading_file.index = file.index;

							self.fileList.push(uploading_file);
        			setTimeout(() => {
          			self.uploading_files.splice(uploading_file.index, 1);
							}, 0);

            } else if (response.status == 9999) {
              window.location.href =
                appsettings.login_url + encodeURIComponent(window.location.href);
            }
						else if (response.status < 0) {
          		self.$refs.toastAlert.config = {
          			type: "error",
          			title: "上传附件失败",
          			msg: result.message
        			};
        			self.$refs.toastAlert.show = true;
        		}
          }
        });

        this.uploader.on("uploadError", function (file) {});

        this.uploader.on("uploadComplete", function (file) {});

        setTimeout(function () {
          $("#uploaderInput")
            .find("div")
            .each(function () {
              $(this).css("height", "80px");
              $(this).css("width", "80px");
            }, this);
        }, 0);
      },
  }
};
</script>

<style>
body.smart-style-6 .dropdown-menu {
    transform: scale(1);
    opacity: 100;
}
.nopaddingl {
    padding-left: 0 !important;
  }
  .to {
    height: 32px;
    line-height: 32px;
    vertical-align: middle;
    margin-left: -10px !important;
    padding-right: 1px !important;
    margin-right: 1px !important;
  }
  
  .rl {
    margin-right: -3px;
  }

</style>
