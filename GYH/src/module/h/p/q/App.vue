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
					<li>首页</li>
					<li>个人中心</li>
					<li>产品管理</li>

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
										<div class="row">

											<!-- <div class="col col-4">
												<label class="label">产品类别</label>
												<label class="select">
													<select v-model="query_data.category_code">
														<option v-for="(cat,index) in cats" :key="index" :value="cat.code">{{cat.name}}</option>
													</select>
												</label>
												
											</div> -->


											<div class="col col-4">
												<label class="label">产品系列</label>
												<label class="input">
													<input type="text" :value="seriesInfo.name" @focus="showSeriesModal">
												</label>
												<!-- <ElProCategory @categoryChanged="categoryChanged"></ElProCategory> -->

											</div>

											<section class="col col-4">
												<label class="label">产品名称</label>
												<label class="input">
													<input type="text" v-model="query_data.product_name">
												</label>
											</section>

											<section class="col col-8">
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

										<a @click="createNew()" href="javascript:;" class="btn btn-success pull-left">
											新增</a>

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
													<th>产品名称</th>
													

													<th v-for="(h,index) in headers" :key="index">{{h.name}}</th>

													<th>创建时间</th>
													<th>更新时间</th>
													<!-- <th>信息质量</th> -->
													<th>状态</th>

												</tr>
											</thead>
											<tbody>
												<tr class="row-show" v-for="(pro,index) in result_products" :key="index">
													<td>{{index+1}}</td>

													<!-- 操作当前记录 -->
													<td>
														<div class="btn-group op">
															<a class="btn btn-default btn-xs" target="_blank" :href="'/adm/p/edit.html?id='+pro.seqid+'&c='+pro.category">修改</a>
															<a class="btn btn-xs btn-danger" @click="deleteProduct(pro)">删除</a>

															<!-- <a class="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" href="javascript:void(0);">
																<span class="caret"></span>
															</a>
															<div class="dropdown-menu" style="width:500px;padding:8px 10px;background-color: #fff;">
																<span style="padding-right:20px;">操作:</span>
																<a class="btn btn-xs btn-danger" @click="deleteProduct(pro)" v-if="functionlist.indexOf('delete@information_product')>=0">删除</a>

															</div> -->
														</div>
													</td>

													<!-- 数据展示:label用来展示 input用来编辑(配合上面“编辑当前记录”td使用) -->
													<td>
														<label>
															<a :href="'/p/one_p.html?id='+pro.seqid" target="_blank"> {{pro.product_name}} </a>
														</label>
													</td>
													
													<td class="nw" v-for="(para,index) in pro.paramters" :key="index">{{para.value}}</td>

													<td class="nw">{{pro.create_time}}</td>
													<td class="nw">{{pro.update_time}}</td>
													<!-- <td>{{pro.info_factor}}</td> -->
													<td>
														<span v-if="pro.status==0" class="label label-success">正常</span>
														<span v-if="pro.status==1" class="label label-warning">待审核</span>
														<span v-if="pro.status==-1" class="label label-danger">已删除</span>
														<span v-if="pro.status==-2" class="label label-default">审核不通过</span>
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
		<ElToastAlert ref="toastAlert"></ElToastAlert>


	

		<!-- 产品类别查询modal -->
		<div class="modal fade" id="Seriesmodal" tabindex="-1" role="dialog">
			<div class="modal-dialog sm">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
							&times;
						</button>
						<h4 class="modal-title">
							查询产品系列
						</h4>
					</div>
					<div class="modal-body no-padding">

						<div id="ref-form" class="smart-form">
							<fieldset>
								<div class="row">

									<div>
										<section class="col col-sm-12">
											<label class="label">产品系列名称</label>
											<label class="input">
												<input type="text" placeholder="输入产品系列名称进行查询" name="text" @keyup.enter="querySeries()" v-model="series_query.category_name">
											</label>
										</section>

									</div>
								</div>
							</fieldset>
							<footer>
								<a class="btn btn-primary pull-left" href="javascript:void(0);" @click="querySeries()">
									<i class="fa fa-search"></i> 查询</a>
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
														<th>名称</th>
														<th>业务编码</th>
													</tr>
												</thead>
												<tbody>
													<tr class="row-show" v-for="(row,index) in series" :key="index">
														<td>
															<label class="radio">
																<input type="radio" @click="selectSeries(row,$event)" name="refradio">
																<i></i>
															</label>
														</td>
														<td>
															{{row.name}}
														</td>
														<td>
															{{row.code}}
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
								<button type="button" class="btn btn-primary" @click="confirmSeries()">
									确定
								</button>
								<button type="button" class="btn btn-default" data-dismiss="modal" @click="cancelCat()">
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
	import ElRegionInput from "components/el-RegionInput/el-RegionInput";
	import ElPager from "components/el-Pager/el-Pager";
	import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";

	export default {
		name: "app",
		data: function () {
			return {
				query_data: {

					company_name: null,
					product_name: null,
					company_oid: null,
					category_name: null, //类别名称
					category_code: null, //类别code
					series_code: null, //系列code
					series_name: null, //系列名称
					statuses: "",
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
				// cats:[],//一级类别
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
				appsettings.apiroot + "account/userfunction", {
					pageid: "information_product"
				},
				this.functionlist_callback
			);

			//类别名称
			//类别code
			this.catInfo.category_code = $.getUrlParam("c");
			this.catInfo.category_name = $.getUrlParam("cn");

			//获取类别参数
			//this.getParams();

			//this.getFirstCats();
		},
		mounted: function () {},
		methods: {
			getFirstCats:function(){
				$.post_json(appsettings.apiroot+"product/category/retrieve",{level:1},this.callback_getFirstCats);
			},
			callback_getFirstCats:function(result){
				if(result!=null && result.status==0){
					this.cats = result.data;
				}else{
					//failed
					this.$refs.pf.showToast("error","获取产品类别信息失败","请稍后再试");
				}
			},
			getParams: function () {
				$.post_json(appsettings.apiroot + "admin/product/parameter/retrieve", {
					category_code: this.catInfo.category_code
				}, this.callback_getParams);
			},
			callback_getParams: function (result) {
				if (result != null && result.status == 0) {
					if (result.data != null && result.data.length > 0) {
						for (var i; i < result.data.length; i++) {
							this.headers.push(result.data[i].column_name);
						}
					}
				} else {
					//failed
					this.$refs.toastAlert.showToast("error", "页面初始化失败！", result.message);
				}
			},
			selectSeries: function (s, event) {
				this.selected_series = s;
			},
			confirmSeries: function () {
				this.seriesInfo.code = this.selected_series.code;
				this.seriesInfo.name = this.selected_series.name;
				this.query_data.category_code = this.seriesInfo.code;
				$("#Seriesmodal").modal("hide");
			},
			querySeries: function () {
				var data = {
					keyword: this.series_query.category_name,
					code_level1: this.catInfo.category_code,
				};
				$.post_json(appsettings.apiroot + "product/category/search", data, this.callback_querySeries);
			},
			callback_querySeries: function (result) {
				if (result != null && result.status == 0) {
					this.series = result.data;
					if (this.series.length == 0) {
						this.$refs.toastAlert.showToast("warning", "没有这种产品类别！", "");
					}
				} else {
					this.$refs.toastAlert.showToast("error", "类别查询失败！", result.message);
				}
			},
			showSeriesModal: function () {
				$("#Seriesmodal").modal("show");
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
			proChanged: function (pro, event) {
				if (event.currentTarget.checked) {
					this.copyTargetOids.push(pro.oid);
				} else {
					this.copyTargetOids.removeByValue(pro.oid);
				}
			},
		
			createNew: function () {

				window.open("/h/p/edit.html?c=" + this.catInfo.category_code + "&cnn=" + encodeURIComponent(this.catInfo.category_name) +
					"&s=" + this.seriesInfo.code + "&sn=" + encodeURIComponent(this.seriesInfo.name));

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
							data.seqid = pro.seqid;
							$.post_json(
								appsettings.apiroot + "admin/product/delete",
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
				//this.query_data.category_code = this.seriesInfo.code || this.catInfo.category_code;
				$.post_json(
					appsettings.apiroot + "home/product/retrieve",
					this.query_data,
					this.callback_queryClick
				);
			},
			callback_queryClick: function (result) {
				if (result != null && result.status == 0) {
					//   console.log(result.data);
					this.result_products = result.data.products;
					this.query_data.pageTotal = result.data.page.total_page_count;
					this.query_data.page_index = result.data.page.page_index;
					if (this.result_products == null || this.result_products.length == 0) {
						this.$refs.toastAlert.config = {
							type: "warning",
							title: "没有符合条件的产品",
							msg: result.message
						};
						this.$refs.toastAlert.show = true;
					}
				} else {
					this.$refs.toastAlert.config = {
						type: "error",
						title: "查询产品信息出现异常",
						msg: result.message
					};
					this.$refs.toastAlert.show = true;
				}
			},
			changePage: function (pageindex) {
				this.query_data.page_index = pageindex;
				$.post_json(
					appsettings.apiroot + "admin/product/retrieve",
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
		width: 100px;
	}
	.op a{
		margin-right: 10px;
	}

	.table {
		border-bottom: 1px solid #ccc !important;
	}

	.dropdown-menu {
		position: relative !important;
	}
</style>