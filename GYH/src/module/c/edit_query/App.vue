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
					<li>管理中心</li>
					<li>公司管理</li>
					<li>查询</li>
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
												<label class="label">公司名称</label>
												<label class="input">
													<input type="text" v-model="query_data.company_name">
												</label>
											</section>

											<!-- <section class="col col-8">
												<label class="label">状态</label>
												<div class="inline-group">
													<label class="checkbox">
														<input type="checkbox" :checked="query_all" @change="queryAllChanged($event)">
														<i></i>全部</label>
													<label class="checkbox">
														<input type="checkbox" :checked="query_all!=true && query_data.unopenportal==1" @change="queryDataChanged('unopenportal',$event)">
														<i></i>未开通门户</label>
													<label class="checkbox">
														<input type="checkbox" :checked="query_all!=true && query_data.openportal==1" @change="queryDataChanged('openportal',$event)">
														<i></i>已开通门户</label>
													<label class="checkbox">
														<input type="checkbox" :checked="query_all!=true && query_data.unopenwxapp==1" @change="queryDataChanged('unopenwxapp',$event)">
														<i></i>未开通小程序</label>
													<label class="checkbox">
														<input type="checkbox" :checked="query_all!=true && query_data.openwxapp==1" @change="queryDataChanged('openwxapp',$event)">
														<i></i>已开通小程序</label>
												</div>
											</section> -->

										</div>
									</fieldset>


									<footer>
										<a class="btn btn-primary pull-left" href="javascript:void(0);" @click="queryClick()">
											<i class="fa fa-search"></i> 查询</a>
										<a href="/c/edit.html" target="_blank" class="btn btn-success pull-left">
											新增</a>
										<!-- <a @click="createNew()" v-if="functionlist.indexOf('add_product@information_product')>=0" href="javascript:;" class="btn btn-success pull-left">
					新增</a> -->
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
													<th>操作</th>
													<th>公司名称</th>
													<th>Seqid</th>
													<th>更新时间</th>
												</tr>
											</thead>
											<tbody>
												<tr class="row-show" v-for="(com,index) in result_companies" :key="index">
													<td>{{index+1}}</td>

													<!-- 操作当前记录 -->
													<td>
														<div class="btn-group op">
															<a class="btn btn-default btn-xs" target="_blank" :href="'/c/edit.html?id='+com.oid">修改</a>
															<a class="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" href="javascript:void(0);">
																<span class="caret"></span>
															</a>
															<div class="dropdown-menu" style="width:500px;padding:8px 10px;background-color: #fff;">
																<span style="padding-right:20px;">操作:</span>
																<a class="btn btn-xs btn-default" target="_blank" :href="'/user/edit.html?coid='+com.oid">创建用户</a>
															</div>
														</div>
													</td>
													
													<!-- 数据展示:label用来展示 input用来编辑(配合上面“编辑当前记录”td使用) -->
													<td>
														<label>
															<a :href="'/p/one_c.html?id='+com.oid" target="_blank">{{com.company_name}}</a>
														</label>
													</td>
													<td>{{com.seqid}}</td>
													<td>{{getDateTime(com.update_time)}}</td>
												</tr>
											</tbody>
										</table>
									</p>
								</div>
								<ElPager :index="query_data.page_index" :pageTotal="query_data.pageTotal" @changePage="changePage"></ElPager>
							</div>
							<!-- end datatable -->
						</div>
						<!-- end widget -->
					</article>
					<!-- WIDGET END -->
				</div>
			</div>
		</div>
		<ElToastAlert ref="toastAlert"></ElToastAlert>




		<div class="modal fade" id="openportal-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
							&times;
						</button>
						<h2 class="modal-title">开通公司门户</h2>
					</div>
					<div class="modal-body">
						<div style="margin:5px 15px 15px;" v-if="openportal_target!=undefined">
							<label>公司门户WebSite（示例：http://xxx.to2025.com）</label>
							<input class="form-control" type="text" placeholder="公司门户WebSite" v-model="openportal_target.contact_website" />
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-w-m btn-white" @click="cancelOpenPortal()">取消</button>
						<button class="btn btn-w-m btn-info" @click="doOpenPortal(openportal_target)">开通门户</button>
					</div>
				</div>
				<!-- /.modal-content -->
			</div>
			<!-- /.modal-dialog -->
		</div>
		<!-- /.modal -->


	</div>

</template>

<script>
	import "common/httputils"; //引用js
	import htmlHelper from "common/htmlutils";
	import ElPageFrame from "components/el-PageFrame/el-PageFrame";
	import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";

	import ElProCategory from "components/el-ProCategory/el-ProCategory";
	import ElRegionInput from "components/el-RegionInput/el-RegionInput";
	import ElPager from "components/el-Pager/el-Pager";
	import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";

	export default {
		name: "app",
		data: function () {
			return {
				query_all:true,
				query_data: {
					openportal:0,
					openwxapp:0,
					unopenportal:0,
					unopenwxapp:0,
					company_name: null,
					statuses: "",
					page_index: 0
				},
				result_companies: null,
				openportal_target: {},
				showToast: false,
				pic_url: "",
				functionlist: []
			};
		},
		components: {
			ElProCategory,
			ElPageFrame,
			ElRegionInput,
			ElPager,
			ElToastAlert
		},
		computed: {
		},
		created: function () {
			$.post_json(
				appsettings.apiroot + "account/admin/userfunction", {
					pageid: "information_product"
				},
				this.functionlist_callback
			);
		},
		mounted: function () {},
		methods: {
			functionlist_callback: function (res) {
				if (res.status == 0) {
					var funlist = res.data.functions;
					this.functionlist.splice(0, this.functionlist.length);
					for (var i = 0; i < funlist.length; i++) {
						this.functionlist.push(funlist[i].function_code);
					}
				}
			},
			queryDataChanged:function(key,event){
				if(event.currentTarget.checked){
					this.query_data[key]=1;
					this.query_all=false;
				}else{
					this.query_data[key]=null;
				}
			},
			queryAllChanged:function(event){
				if(event.currentTarget.checked){
					this.query_all=true;
					this.query_data.openportal=0;
					this.query_data.openwxapp=0;
					this.query_data.unopenportal=0;
					this.query_data.unopenwxapp=0;
				}
			},
			openWXApp: function (com) {
				var data = {
					company_oid: com.oid
				};
				var self = this;
				$.post_json(appsettings.apiroot + "saas/create", data, this.callback_openWXApp, com);
				this.$refs.pf.showLoading("正在为公司【" + com.company_name + "】开通微信小程序....");
				setTimeout(function () {
					self.$refs.pf.hideLoading();
				}, 10000);
			},
			callback_openWXApp: function (result, com) {
				this.$refs.pf.hideLoading();
				if (result != null && result.status == 0) {
					com.wxappstatus = 1;
					this.$refs.toastAlert.showToast("success", com.company_name, "开通微信小程序成功！");
				} else {
					this.$refs.toastAlert.showToast("error", com.company_name, "开通微信小程序失败！" + result.message);
				}
			},
			deleteProduct: function (pro) {
				//alert: 是否确定删除产品
				var that = this;
				//confirm
				this.$refs.pf.confirmShow({
					action_code: "deleteproduct",
					title: "确定要删除该产品吗？",
					msg: "产品名称：" + pro.product_name,
					success: function (res) {
						if (res.confirm == true) {
							var data = {};
							data.product_oid = pro.oid;
							$.post_json(
								appsettings.apiroot + "product/delete",
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
					this.$refs.toastAlert.config = {
						type: "success",
						title: "删除产品成功",
						msg: result.message
					};
					this.$refs.toastAlert.show = true;
				} else {
					this.$refs.toastAlert.config = {
						type: "error",
						title: "删除产品出现异常",
						msg: result.message
					};
					this.$refs.toastAlert.show = true;
				}
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
			queryClick: function () {
				this.query_data.page_index=1;
				$.post_json(
					appsettings.apiroot + "company/retrieve",
					this.query_data,
					this.callback_queryClick
				);
			},
			callback_queryClick: function (result) {
				if (result != null && result.status == 0) {
					this.result_companies = result.data.companulist;
					this.query_data.pageTotal = result.data.page_parameter.TotalPageCount;
					this.query_data.page_index = result.data.page_parameter.PageIndex;
					if (this.result_companies == null || this.result_companies.length == 0) {
						this.$refs.toastAlert.config = {
							type: "warning",
							title: "没有符合条件的公司",
							msg: result.message
						};
						this.$refs.toastAlert.show = true;
					}
				} else {
					this.$refs.toastAlert.config = {
						type: "error",
						title: "查询公司信息出现异常",
						msg: result.message
					};
					this.$refs.toastAlert.show = true;
				}
			},
			changePage: function (pageindex) {
				this.query_data.page_index = pageindex;
				$.post_json(
					appsettings.apiroot + "admin/company/retrieve",
					this.query_data,
					this.callback_queryClick
				);
			},

			openPortal: function (com) {
				this.openportal_target = com;
				//弹出窗口
				jQuery('#openportal-modal').modal('show');
			},

			doOpenPortal: function (com) {
				if (this.openportal_target.contact_website == null || this.openportal_target.contact_website.trim() == "") {
					this.$refs.pf.confirmShow({
						title: "信息不完整",
						msg: "请填写公司门户域名",
						only_alert: true
					});
					return;
				}
				var data = {
					company_oid: com.oid,
					contact_website: com.contact_website,
					website_type: 1
				};
				$.post_json(
					appsettings.apiroot + "admin/company/update/detail",
					data,
					this.openPortalRender,
					com
				);
			},

			openPortalRender: function (res, com) {
				if (res.status == 0) {
					com.websitetype=1;
					//this.result_companies[this.result_companies.indexOf(com)].websitetype = 1;
					this.$refs.pf.confirmShow({
						title: "【" + com.company_name + "】开通门户",
						msg: "",
						only_alert: true
					});
					jQuery('#openportal-modal').modal('hide');
					this.openportal_target = {};
				} else {
					//提示错误信息
					this.$refs.pf.confirmShow({
						title: "错误",
						msg: res.message,
						only_alert: true
					});
				}
			},

			sendMessage: function (com) {
				var data = {
					company_oid: com.oid
				};
				$.post_json(
					appsettings.apiroot + "admin/company/userportal/sendmessage",
					data,
					this.sendMessageRender,
					com
				);
			},
			sendMessageRender: function (res, com) {
				if (res.status == 0) {
					this.$refs.pf.confirmShow({
						title: "【" + com.company_name + "】发送通知成功",
						msg: "",
						only_alert: true
					});
				} else {
					//提示错误信息
					this.$refs.pf.confirmShow({
						title: "错误",
						msg: res.message,
						only_alert: true
					});
				}
			},

			cancelOpenPortal: function () {
				this.openportal_target = {};
				//隐藏窗口
				jQuery('#openportal-modal').modal('hide');
			},

			getDateTime: function (datatime) {
				var minDate = new Date("1911/1/1");
				var actDate = new Date(datatime);
				if (actDate < minDate) {
					return "";
				} else {
					return datatime;
				}
			},
			getPictrueUrl: function (filename) {
				return this.appsettings.comimg + filename;
			},
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
		width: 70px;
	}

	.table {
		border-bottom: 1px solid #ccc !important;
	}

	.dropdown-menu {
		position: relative!important;
	}
</style>