<template>
	<div id="app">
		<ElPageFrame ref="pf"></ElPageFrame>

		<!-- MAIN PANEL -->
		<div id="main" role="main">

			<!-- RIBBON -->
			<div id="ribbon">

				<span class="ribbon-button-alignment">
					<span id="refresh" class="btn btn-ribbon" data-action="resetWidgets" data-title="refresh" rel="tooltip" data-placement="bottom" data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings." data-html="true">
						<i class="fa fa-refresh"></i>
					</span>
				</span>

				<!-- breadcrumb -->
				<ol class="breadcrumb">
					<li><a href="/">首页</a></li>
					<li>站内搜索</li>
				</ol>
				<!-- end breadcrumb -->

			</div>
			<!-- END RIBBON -->

			<!-- MAIN CONTENT -->
			<div id="content">
				<div class="row">
					<div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
						<h1 class="page-title txt-color-blueDark">
							<i class="fa fa-fw fa-search"></i> 站内搜索
							<span>
							</span>
						</h1>
					</div>
				</div>
				<!-- form widget grid -->
				<section id="widget-grid" class="">
					<ElBlockAlert ref="alert"></ElBlockAlert>

					<!-- START ROW Search Condition-->
					<div class="row">
						<!-- NEW COL START -->
						<article class="col-sm-12 col-md-12">
							<!-- Widget ID (each widget will need unique ID)-->
							<div class="jarviswidget" id="wid-id-1" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-custombutton="false">
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
								<!-- <header>
									<span class="widget-icon">
										<i class="fa fa-search"></i>
									</span>
									<h2>搜索 </h2>
								</header> -->

								<!-- widget div-->
								<div>
									<!-- widget edit box -->
									<div class="jarviswidget-editbox">
										<!-- This area used as dropdown edit box -->
									</div>
									<!-- end widget edit box -->

									<!-- widget content -->
									<div class="widget-body no-padding">

										<div id="myTabContent1" class="tab-content bg-color-white padding-10">
											<div class="tab-pane fade in active" id="s1">
												<!-- <h1> Search
															<span class="semi-bold">Everything</span>
														</h1> -->
												<br>
												<div class="input-group input-group-lg hidden-mobile">

													<div class="input-group-btn">
														<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" style="min-width: 120px;">
															{{searchTypeText}}
															<span class="caret"></span>
														</button>
														<ul class="dropdown-menu">
															<li :class="searchTypeText=='全部'?'active':''">
																<a href="javascript:void(0)" @click="changeSearchType(0)">
																	<i v-if="searchTypeText=='全部'" class="fa fa-check"></i> 全部</a>
															</li>
															<li class="divider"></li>
															<li :class="searchTypeText=='产品'?'active':''">
																<a href="javascript:void(0)" @click="changeSearchType(2)">
																	<i v-if="searchTypeText=='产品'" class="fa fa-check"></i> 产品</a>
															</li>
															<li :class="searchTypeText=='公司'?'active':''">
																<a href="javascript:void(0)" @click="changeSearchType(1)">
																	<i v-if="searchTypeText=='公司'" class="fa fa-check"></i> 公司</a>
															</li>
															
														</ul>
													</div>

													<input class="form-control input-lg" type="text" name="keywords" v-model="query_data.keywords" @keyup="searchEnter">
													<div class="input-group-btn">
														<a class="btn btn-default" @click="search">
															&nbsp;&nbsp;&nbsp;
															<i class="fa fa-fw fa-search fa-lg"></i>&nbsp;&nbsp;&nbsp;
														</a>
													</div>
												</div>
												<h1 class="font-md">
													<span class="semi-bold">{{searchTypeText=='全部'?'':searchTypeText}}</span> 搜索结果
													<small class="text-danger"> &nbsp;&nbsp;( {{records_total}} 个 )</small>
												</h1>
												<div v-if="records.length==0" class="noresult-fill">
												</div>
												<div v-for="rec in records" :key="rec.id" class="search-results clearfix smart-form">
													<h4>
														<a :href="GetTargetUrl(rec.target_type,rec.id)" target="_blank">{{rec.target_name}}</a>
														&nbsp;&nbsp;
													</h4>
													<!-- <a v-if="rec.target_type==2" :href="GetTargetUrl(rec.target_type,rec.id)" target="_blank"><img :src="appsettings.proimg+rec.product_pic" alt=""></a>
													<a v-if="rec.target_type==1" :href="GetTargetUrl(rec.target_type,rec.id)" target="_blank"><img :src="appsettings.comimg+rec.company_logo" alt=""></a> -->
													<div :style="rec.target_type==2?'min-height:80px;':(rec.target_type==1?'min-height:40px;':'')">
														<a :href="GetTargetcategoryUrl(rec.target_type,rec.category_code)" target="_blank" class="url text-success">
															{{rec.category_name}}
														</a>
														<p class="description spill">
															{{rec.description}}
														</p>
														<p class="description" style="color: #3276b1;">
															{{rec.update_time}}
														</p>
													</div>
												</div>

												<div class="text-center">
													<hr>
													<ElPager class="text-center" :pageTotal="query_data.pageTotal" @changePage="changePage"></ElPager>
													<br>
													<br>
													<br>
												</div>
											</div>

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
					<!-- END ROW -->
				</section>
				<!-- end form widget grid -->

			</div>
			<!-- END MAIN CONTENT -->

		</div>
		<ElConfirmDialog @confirm="doConfirm()" ref="confirmDlg"></ElConfirmDialog>
	</div>
</template>

<script>
import htmlutils from 'common/htmlutils';
import 'common/httputils';    //引用js
import ElPageFrame from 'components/el-PageFrame/el-PageFrame';

import ElPager from 'components/el-Pager/el-Pager';
import ElBlockAlert from 'components/el-BlockAlert/el-BlockAlert';
import ElConfirmDialog from "components/el-ConfirmDialog/el-ConfirmDialog";
export default {
	name: 'app',
	data: function() {
		return {
			query_data: {
				keywords: "",
				type: 0,
				currentIndex: 1,
				pageSize: 20,
				pageTotal: 1,
			},

			validator: null,
			searchTypeText: "全部",
			records_total: 0,

			records: [],
		};
	},
	components: {
		ElPageFrame, ElPager, ElBlockAlert,ElConfirmDialog
	},
	created: function() {
		htmlutils.setPageTitle(appsettings.title);
		this.query_data.keywords = decodeURIComponent($.getUrlParam("keywords") == null ? "" : $.getUrlParam("keywords"));
		if (this.query_data.keywords.length > 0) {
			this.search();
		}
	},
	mounted: function() {
		var that = this;
		setTimeout(function() {
			//配置validate组件
			that.validator = ValidateConfig({
				formid: "query-form",
				rules: {
					keywords: {
						required: true
					},
				},
				messages: {
					keywords: {
						required: '请输入搜索关键字'
					},
				}
			});

		}, 0);
	},
	methods: {
		GetTargetType: function(type) {
			if (type == 0) {
				return "全部";
			}
			else if (type == 1) {
				return "公司";
			}
			else if (type == 2) {
				return "产品";
			}
			else if (type == 3) {
				return "服务";
			}
			else if (type == 4) {
				return "需求";
			}
		},
		GetTargetUrl: function(type, id) {
			if (type == 1) {
				return '/p/one_c.html?id=' + id;
			}
			else if (type == 2) {
				return '/p/one_p.html?id=' + id;
			}
			else if (type == 3) {
				return '/s/one_s.html?id=' + id;
			}
			else if (type == 4) {
				return '/r/one_r.html?id=' + id;
			}
		},
		GetTargetcategoryUrl: function(type, category_code) {
			if (type == 1) {
				return 'javascript:void(0);';
			}
			else if (type == 2) {
				return '/p/p_list.html?c=' + category_code;
			}
			else if (type == 3) {
				return '/s/s_list.html?c=' + category_code;
			}
			else if (type == 4) {
				return '/r/r_list.html?c=' + category_code;
			}
		},
		changeSearchType: function(type) {
			this.searchTypeText = this.GetTargetType(type);
			this.query_data.type = type;
			this.search();
		},
		searchEnter: function(e) {
			if (e.keyCode == 13) {
				this.query_data.currentIndex = 1;
				this.search();
			}
		},
		changePage: function(currentIndex) {
			this.query_data.currentIndex = currentIndex;
			this.search();
		},
		search: function() {
			if(this.query_data.keywords==null ||this.query_data.keywords==undefined || this.query_data.keywords.replace(/ /g,'')==''){
			this.$refs.confirmDlg.confirmShow({
					title: "搜索关键词不能为空",
					msg: "请输入您想要搜索的关键词.",
					only_alert: true
				});
				return;
			}

			if (this.$refs.pf != undefined) {
				this.$refs.pf.showLoading('搜索中...');
			}
			var data = {
				keywords: this.query_data.keywords,
				type: this.query_data.type,
				// category_code:'07',
				page_index: this.query_data.currentIndex,
				page_size: this.query_data.pageSize,
			};
			$.post_json(appsettings.apiroot + "cidep/fulltext/retrieve", data, this.callback_search);
		},

		callback_search: function(result) {
			if (this.$refs.pf != undefined) {
				this.$refs.pf.hideLoading();
			}
			if (result != null && result.status == 0) {
				htmlutils.setPageTitle(result.data.meta.title);
				htmlutils.setPageKeywords(result.data.meta.keywords);
				this.query_data.currentIndex = result.data.page.page_index;
				this.query_data.pageTotal = result.data.page.total_page_count;
				this.records_total = result.data.page.total;
				this.records = result.data.data;

				//没有结果
				if(result.data.data==null || result.data.data==undefined|| result.data.data.length<=0){
					this.$refs.confirmDlg.confirmShow({
					title: "没有找到您搜索的信息",
					msg: "请尝试输入其他关键词进行搜索.",
					only_alert: true
				});
				}
			} else {
				this.$refs.pf.blockAlert("error", result.message.length == 0 ? "搜索错误" : result.message);
			}
		},
	},
	computed: {

	}
}
</script>

<style>
.noresult-fill {
	height: 300px;
}

.search-results img {
	position: absolute;
}

.search-results>div {
	width: 100%;
	box-sizing: border-box;
}

.search-results>a+div {
	padding-left: 90px;
}
</style>
