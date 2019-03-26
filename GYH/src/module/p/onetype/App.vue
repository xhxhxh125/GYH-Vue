<template>
	<div id="app">
		<ElPageFrame></ElPageFrame>
		<div id="main" role="main">
			<!-- RIBBON -->
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
					<li v-for="(cat,index) in category_stack" :key="index">
						<a :href="index+1==category_stack.length?'/p/onetype.html?c='+cat.code:'javascript:void(0);'">{{cat.name}}</a>
					</li>
				</ol>
			</div>
			<!-- END RIBBON -->
			<!-- MAIN CONTENT -->
			<div id="content">
				<!-- row -->
				<div class="row">
					<!-- col -->
					<div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
						<h1 class="page-title txt-color-blueDark">
							<!-- PAGE HEADER -->
							<!-- <a href="/"><i class="fa-fw fa fa-home"></i></a>
							产品
							<span>> {{catInfo.category_name}}
							</span> -->
							<template v-for="(cat,index) in category_stack">
								<template v-if="index==0">{{cat.name}} </template>
								<span v-if="index>0" :key="index">
									<template v-if="index>0">> </template>
									{{cat.name}}
								</span>
							</template>
						</h1>
					</div>
				</div>

				<section id="widget-grid" class="clearfix">
					<div class="col-lg-3 col-md-3 col-sm-12">
						<div class="well padding-10">
							<h5 class="margin-top-0">
								<i class="fa fa-search"></i> 搜索</h5>
							<div class="input-group">
								<input type="text" class="form-control" v-model="query_data.keyword">
								<span class="input-group-btn">
									<button class="btn btn-default" type="button" @click="queryClick()">
										<i class="fa fa-search"></i>
									</button>
								</span>
								<a href="javascript:void(0);" class="btn btn-default btn-header pull-right" rel="popover" data-placement="right" data-original-title="高级检索"
								    data-content="" data-html="true">
									<i class="fa fa-reorder"></i>
								</a>
								<div class="popoverform" style="display:none;" id="popoverform">
									<div class="row">
										<!-- NEW COL START -->
										<article class="col-sm-12 col-md-12 col-lg-12 no-border">
											<div class="">
												<div>
													<!-- widget content -->
													<div class="widget-body no-padding">
														<div class="smart-form">
															<fieldset>
																<section>
																	<label class="label">产品名称</label>
																	<label class="input">
																		<input type="text" class="input-sm">
																	</label>
																</section>
															</fieldset>
															<fieldset>
																<section class="row">
																	<label class="label col col-sm-12 ft">失效率区间</label>
																	<label class="input">
																		<section class="col col-6 rgfrom">
																			<label class="input">
																				<input type="text">
																			</label>
																		</section>
																		<span class="to">—</span>
																		<section class="col col-6 rgto">
																			<label class="input">
																				<input type="text">
																			</label>
																		</section>
																	</label>
																</section>
															</fieldset>
															<!-- <fieldset>
																<section>
																	<label class="label">Inline checkboxes</label>
																	<div class="inline-group">
																		<label class="checkbox">
																			<input type="checkbox" name="checkbox-inline" checked="checked">
																			<i></i>Alexandra</label>
																		<label class="checkbox">
																			<input type="checkbox" name="checkbox-inline">
																			<i></i>Alice</label>
																		<label class="checkbox">
																			<input type="checkbox" name="checkbox-inline">
																			<i></i>Anastasia</label>
																		<label class="checkbox">
																			<input type="checkbox" name="checkbox-inline">
																			<i></i>Avelina</label>
																		<label class="checkbox">
																			<input type="checkbox" name="checkbox-inline">
																			<i></i>Beatrice</label>
																	</div>
																</section>
															</fieldset> -->
															<footer>
																<button type="button" class="btn btn-primary">
																	确定
																</button>
																<button type="button" class="btn btn-default close-popover">
																	取消
																</button>
															</footer>
														</div>
													</div>
													<!-- end widget content -->
												</div>
												<!-- end widget div -->
											</div>
											<!-- end widget -->
										</article>
										<!-- END COL -->
									</div>
								</div>
							</div>
							<!-- <ul class="no-padding list-unstyled  margin-top-10 stag">
								<li>
									<a href="javascript:void(0);" class="margin-top-0">失效率区间：
										<20% </a>
								</li>
								<li>
									<a href="javascript:void(0);" class="padding-top-5 display-block">使用寿命：1000 - 4000小时</a>
								</li>
								<li>
									<a href="javascript:void(0);" class="margin-top-5">发光效率： 30-100 lm/W</a>
								</li>
								<li>
									<a href="javascript:void(0);" class="margin-top-5">正向电压: 10-20 V</a>
								</li>
							</ul> -->
							<!-- /input-group -->
							<!-- <h5>
								<i class="fa fa-tags"></i> 热门关键词</h5>
							<div class="row">
								<div class="col-xs-6">
									<ul class="list-unstyled stag">
										<li>
											<a @click="query('LED')">
												<span class="badge badge-info">LED</span>
											</a>
										</li>
										<li>
											<a @click="query('贴片LED')">
												<span class="badge badge-info">贴片LED</span>
											</a>
										</li>
										<li>
											<a @click="query('高亮度')">
												<span class="badge badge-info">高亮度</span>
											</a>
										</li>
										<li>
											<a @click="query('纯金线')">
												<span class="badge badge-info">纯金线</span>
											</a>
										</li>
									</ul>
								</div>
								<div class="col-xs-6">
									<ul class="list-unstyled stag">
										<li>
											<a @click="query('三防')">
												<span class="badge badge-info">三防</span>
											</a>
										</li>
										<li>
											<a @click="query('大功率')">
												<span class="badge badge-info">大功率</span>
											</a>
										</li>
										<li>
											<a @click="query('白光')">
												<span class="badge badge-info">白光</span>
											</a>
										</li>
										<li>
											<a @click="query('短脚')">
												<span class="badge badge-info">短脚</span>
											</a>
										</li>
									</ul>
								</div>
							</div> -->
						</div>



						<div class="well padding-10" v-if="filterInfo!=null && filterInfo.countries!=null &&filterInfo.countries.length>0">
							<h5>
								<i class="fa fa-th-large"></i> 国家</h5>
							<div class="row">
								<div class="smart-form stag">
									<div v-for="(con,index) in filterInfo.countries" :key="index" class="col-6 col">
										<label class="radio">
											<span class="float-right"></span>
											<input :value="con.code" type="radio" :name="'country'" @click="countryChanged(con,$event)">
											<i></i>{{con.name}}</label>
									</div>
								</div>
							</div>
						</div>


						<div class="well padding-10" v-if="filterInfo!=null && filterInfo.companies!=null &&filterInfo.companies.length>0">
							<h5>
								<i class="fa fa-th-large"></i> 公司</h5>
							<div class="row">
								<div class="smart-form stag">
									<div v-for="(con,index) in filterInfo.companies" :key="index" class="col-sm-12 col">
										<label class="radio">
											<span class="float-right"></span>
											<input :value="con.id" type="radio" :name="'company'" @click="companyChanged(con,$event)">
											<i></i>{{con.company_name}}</label>
									</div>
								</div>
							</div>
						</div>


						<div class="well padding-10" v-for="(stags,index) in filterInfo.search_tags" :key="index">
							<h5>
								<i class="fa fa-th-large"></i> {{stags.column_name}}</h5>
							<div class="row">
								<div class="smart-form stag">
									<div v-if="stags.tags!=null && stags.tags instanceof Array && stags.tags.length>0" v-for="(tag,idx) in stags.tags" :key="idx"
									    class="col-6 col">
										<label class="checkbox">
											<span class="float-right"></span>
											<input :value="tag.tag_code" type="checkbox" :name="stags.column_id" @click="searchTagChanged(tag,$event)">
											<i></i>{{tag.tag_name}}</label>
									</div>
									<template v-if="stags.tags==null || stags.tags.length==0">
										<div v-if="stags.data_type!=1 && stags.data_type!=7" class="col col-sm-12">
											<label class="input">
												<span class="float-right"></span>
												<input type="text" placeholder="按回车开始搜索"  @keyup.13="textChanged(stags,$event)">
											</label>
										</div>

										<div v-if="stags.data_type==1 || stags.data_type==7" class="col col-sm-12">
											<label class="input">
												<span class="float-right"></span>
												<ElRegionInput @inputDone="regionChanged(stags,$event)"  :minPlaceHolder="'按回车开始搜索'" :maxPlaceHolder="'按回车开始搜索'"></ElRegionInput>
											</label>
										</div>

									</template>
								</div>
							</div>
						</div>



						<!-- <div class="well padding-10">
							<h5>
								<i class="fa fa-rmb"></i> 光强度</h5>
							<div class="form-group">
								<input id="range-slider-1" type="text" name="range_1" value="">
							</div>
						</div> -->

					</div>
					<div class="col-sm-12 col-md-9 col-lg-9">
						<!-- row -->
						<div class="row">
							<div class="col-lg-12 col-md-12 col-sm-12">
								<div v-for="(product,index) in products" :key="index" class="col-sm-6 col-md-6 col-lg-6 pitem">
									<!-- product -->
									<div class="product-content product-wrap clearfix">
										<div class="row">
											<div class="col-md-5 col-sm-12 col-xs-12">
												<div class="product-image">
													<a :href="'/p/one_p.html?id='+product.id" target="_blank">
														<img :src="appsettings.proimg+product.main_pic" :alt="product.product_name" class="img-responsive">
													</a>
												</div>
											</div>
											<div class="col-md-7 col-sm-12 col-xs-12">
												<div class="product-deatil">
													<h5 class="name">
														<a :href="'/p/one_p.html?id='+product.id" target="_blank">
															{{product.product_name}}
															<span>{{product.series}}</span>
														</a>
													</h5>
													<p class="price-container">
														<span></span>
													</p>
													<span class="tag1"></span>
												</div>
												<div class="description">
													<ul id="sparks" v-if="product.parameters!=null && product.parameters.length>0">
														<li class="sparks-info" v-for="(para,pindex) in product.parameters" :key="pindex" v-if="pindex<2">
															<h5> {{para.name}}
																<span class="txt-color-blue">{{para.value}}{{para.unit}}</span>
															</h5>
														</li>

														<!-- <li class="sparks-info" v-if="product.parameters.find(x=>x.id=='Nominal_life')!=null">
															<h5> {{product.parameters.find(x=>x.id=='Nominal_life').name}}
																<span class="txt-color-blue">{{product.parameters.find(x=>x.id=='Nominal_life').value}}{{product.parameters.find(x=>x.id=='Nominal_life').unit}}</span>
															</h5>
														</li>
														<li class="sparks-info" v-if="product.parameters.find(x=>x.id=='Luminous_flux')!=null">
															<h5> {{product.parameters.find(x=>x.id=='Luminous_flux').name}}
																<span class="txt-color-blue">{{product.parameters.find(x=>x.id=='Luminous_flux').value}}{{product.parameters.find(x=>x.id=='Luminous_flux').unit}}</span>
															</h5>
														</li> -->

													</ul>
												</div>
											</div>
										</div>
									</div>
									<!-- end product -->
								</div>
								<div v-if="query_data.total_page_count>query_data.page_index" class="col-sm-12 col-md-12 col-lg-12 text-center">
									<a href="javascript:void(0);" class="btn btn-primary btn-lg" @click="loadMore()">加载更多
										<i class="fa fa-arrow-down"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<!-- end row -->
				</section>
				<!-- end widget grid -->
			</div>
			<!-- END MAIN CONTENT -->
			<!-- <div class="menutool" @click="toggleMenu()">
				<span>
					<i class="fa fa-cogs fa-spin txt-color-blueDark"></i>
				</span>
			</div> -->
		</div>
		<!-- END MAIN PANEL -->
		<!-- PAGE FOOTER
		<div class="page-footer">
			<div class="row">
				<div class="col-xs-12 col-sm-6">
					<span class="txt-color-white">SmartAdmin 1.8.2
						<span class="hidden-xs"> - Web Application Framework</span> © 2014-2015</span>
				</div>
				<div class="col-xs-6 col-sm-6 text-right hidden-xs">
					<div class="txt-color-white inline-block">
						<i class="txt-color-blueLight hidden-mobile">Last account activity
							<i class="fa fa-clock-o"></i>
							<strong>52 mins ago &nbsp;</strong>
						</i>
						<div class="btn-group dropup">
							<button class="btn btn-xs dropdown-toggle bg-color-blue txt-color-white" data-toggle="dropdown">
								<i class="fa fa-link"></i>
								<span class="caret"></span>
							</button>
							<ul class="dropdown-menu pull-right text-left">
								<li>
									<div class="padding-5">
										<p class="txt-color-darken font-sm no-margin">Download Progress</p>
										<div class="progress progress-micro no-margin">
											<div class="progress-bar progress-bar-success" style="width: 50%;"></div>
										</div>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div class="padding-5">
										<p class="txt-color-darken font-sm no-margin">Server Load</p>
										<div class="progress progress-micro no-margin">
											<div class="progress-bar progress-bar-success" style="width: 20%;"></div>
										</div>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div class="padding-5">
										<p class="txt-color-darken font-sm no-margin">Memory Load
											<span class="text-danger">*critical*</span>
										</p>
										<div class="progress progress-micro no-margin">
											<div class="progress-bar progress-bar-danger" style="width: 70%;"></div>
										</div>
									</div>
								</li>
								<li class="divider"></li>
								<li>
									<div class="padding-5">
										<button class="btn btn-block btn-default">refresh</button>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div> -->
		<ElLoading ref="loading"></ElLoading>
		<ElToastAlert ref="toastAlert"></ElToastAlert>
		<ElConfirmDialog @confirm="doConfirm()" ref="confirmDlg"></ElConfirmDialog>
	</div>
</template>
<script>
	import "common/httputils"; //引用js
	import htmlutils from "common/htmlutils";
	import ElPageFrame from "components/el-PageFrame/el-PageFrame";
	import ElLoading from "components/el-Loading/el-Loading";
	import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";
	import ElConfirmDialog from "components/el-ConfirmDialog/el-ConfirmDialog";
	import ElRegionInput from "components/el-RegionInput/el-RegionInput";
	export default {
		name: "app",
		data: function () {
			return {
				catInfo: {
					category_code: null,
					category_name: null
				},
				query_data: {
					page_index: 1,
					category_code: null,
					keyword: null,
					product_name: null,
					search_tags: null,
					total_page_count: 0
				},
				filterInfo: {
					search_tags: [],
					companies: [],
					countries: []
				},
				products: null,
				search_tags: {}
			};
		},
		components: {
			ElPageFrame,
			ElLoading,
			ElToastAlert,
			ElConfirmDialog,
			ElRegionInput
		},
		created: function () {
			htmlutils.setPageTitle(appsettings.title);
			this.query_data.category_code = $.getUrlParam("c");
			if ($.getUrlParam("ci") != undefined) {
				this.query_data.company_id = $.getUrlParam("ci");
			}
			this.catInfo.category_code = this.query_data.category_code;
			this.catInfo.category_name = $.getUrlParam("cn");

			//get filteritems
			var data = {
				category_code: this.catInfo.category_code
			};
			$.post_json(appsettings.apiroot + "product/filter/onetype", data, this.callback_getFilterItems);
			this.getCatName();
		},
		mounted: function () {
			//hide menu in mobile 
			var self = this;
			if (jQuery("body").hasClass("mobile-detected")) {
				self.showmenu = true; //mobile 里面的逻辑是相反的
			}
			//页面初始化时，自动加载该类别的所有产品
			$.post_json(
				appsettings.apiroot + "product/cidepretrieve",
				this.query_data,
				this.callback_query
			);
			this.$refs.loading.showLoading("正在加载产品数据...");

			setTimeout(function () {
				jQuery(document).on("click", ".close-popover", function () {
					jQuery("a[rel=popover]").popover("hide");
				});
				jQuery("a[rel=popover]").click(function (event) {
					jQuery(event.currentTarget).attr(
						"data-content",
						$(event.currentTarget)
						.next()
						.html()
					);
					jQuery(event.currentTarget).popover("show");
				});
				jQuery("#range-slider-1").ionRangeSlider({
					min: 0,
					max: 200,
					from: 10,
					to: 100,
					type: "double",
					step: 1,
					postfix: "lm",
					prettify: true,
					grid: true,
					inputValuesSeparator: ";"
				});
			}, 0);
		},
		computed: {},
		methods: {
			textChanged:function(tag,event){
				this.search_tags[tag.column_id] = event.target.value;
				this.query();
			},
			regionChanged:function(tag,event){
				this.search_tags[tag.column_id] = event;
				this.query();
			},
			loadMore: function () {
				if (this.query_data.page_index > 0) {
					this.query_data.page_index += 1;
					this.query(null, true);
				}
			},
			queryClick: function () {
				this.query();
			},
			getCatName: function () {
				var data = {
					code: this.catInfo.category_code
				};
				$.post_json(appsettings.apiroot + "product/categorystack", data, this.callback_getCatName);
			},
			callback_getCatName: function (result) {
				if (result != null && result.status == 0) {
					if (result.data != null && result.data.length > 0) {
						this.catInfo.category_name = result.data[result.data.length - 1].name;
						this.category_stack = result.data;
					}
				}
			},
			countryChanged: function (coun, event) {
				if (coun.checked === true && (coun.code == this.query_data.location_code)) {
					coun.checked = false;
					event.currentTarget.checked = false;
					delete this.query_data.location_code;
				} else {
					coun.checked = true;
					event.currentTarget.checked = true;
					this.query_data.location_code = coun.code;
				}
				this.query();
			},
			companyChanged: function (com, event) {
				if (com.checked === true && (this.query_data.company_id == com.id)) {
					com.checked = false;
					event.currentTarget.checked = false;
					delete this.query_data.company_id;
				} else {
					com.checked = true;
					event.currentTarget.checked = true;
					this.query_data.company_id = com.id;
				}
				this.query();
			},
			searchTagChanged: function (tag, event) {
				if (this.search_tags[tag.column_id] != null && this.search_tags[tag.column_id] != undefined) {
					var values = this.search_tags[tag.column_id].split(',');
					if (values instanceof Array && values.length > 0) {
						if (values.indexOf(tag.tag_code) >= 0) {
							values.removeByValue(tag.tag_code);
							this.search_tags[tag.column_id] = values.join(',');
						}
					} else {
						this.search_tags[tag.column_id] = tag.tag_code;
					}
				} else {
					this.search_tags[tag.column_id] = tag.tag_code;
				}
				this.query();
			},
			callback_getFilterItems: function (result) {
				this.$refs.loading.hideLoading();
				if (result != null && result.status == 0) {
					this.filterInfo = result.data;
				} else {

				}
			},
			// toggleMenu: function () {
			// 	this.showmenu = !this.showmenu;
			// },
			query: function (keyword, loadmore) {
				if (keyword != null && keyword != undefined) {
					this.query_data.keyword = keyword;
				}
				if (loadmore === true) {} else {
					this.products = [];
				}
				this.query_data.search_tags = JSON.stringify(this.search_tags);
				this.query_data.product_name = this.query_data.keyword;
				$.post_json(
					appsettings.apiroot + "product/cidepretrieve",
					this.query_data,
					this.callback_query
				);
				this.$refs.loading.showLoading("查询中...");
			},
			callback_query: function (result) {
				this.$refs.loading.hideLoading();
				this.products = this.products || [];
				if (result != null && result.status == 0) {
					if (this.products.length == 0) {
						htmlutils.setPageTitle(result.data.meta.title);
						htmlutils.setPageKeywords(result.data.meta.keywords);
					}
					this.products = this.products.concat(result.data.products);
					this.query_data.total_page_count = result.data.page.total_page_count;

					if (this.query_data.total_page_count == null || this.query_data.total_page_count == undefined || this.query_data.total_page_count <=
						0) {
						this.$refs.toastAlert.showToast("warning","没有找到您搜索的信息","请尝试输入其他关键词进行搜索");
					}
				} else {
					//failed
				}
			}
		}
	};
</script>
<style>
	.mt-6 {
		margin-top: 6px;
	}

	.mb-6 {
		margin-bottom: 6px;
	}

	.error-search {
		width: 600px;
	}

	#sparks li h5 {
		margin: 0px;
	}

	#sparks li {
		border: none;
	}

	#sparks {
		text-align: left;
	}

	.demo>span {
		position: fixed;
		right: 0;
		top: 54px;
	}

	#sparks li {
		padding: 0;
	}

	.product-content .product-image {
		min-height: 150px;
	}

	.product-content {
		margin-top: 0;
	}

	.float-right {
		float: right;
	}

	.no-border,
	.no-border li {
		border: none !important;
	}

	.popover {
		max-width: inherit;
		width: 700px;
	}

	.rgfrom {
		margin-right: -15px;
	}

	.rgto {
		margin-left: -15px;
	}

	.to {
		padding: 0 8px 0 8px;
		float: left;
		line-height: 30px;
		height: 30px;
		vertical-align: middle;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}

	.ft {
		margin-bottom: 6px !important;
	}

	.stag li,
	.stag .checkbox {
		margin-bottom: 3px !important;
	}

	@media(min-width:992px) {
		.pitem {
			height: 186px!important;
		}
	}

	.menutool {
		position: fixed;
		right: 0;
		top: 54px;
		display: block;
		height: 30px;
		width: 30px;
		border-radius: 5px 0 0 5px;
		background: #f1da91;
		padding: 2px;
		text-align: center;
		line-height: 28px;
		cursor: pointer;
	}

	.stag .badge {
		cursor: pointer;
	}
</style>