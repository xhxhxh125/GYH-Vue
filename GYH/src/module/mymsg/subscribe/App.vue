<template>
	<div id="app">
		<ElPageFrame ref="pf"></ElPageFrame>

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
				<li><a :href="appsettings.portal_root">首页</a></li>
					<li>消息订阅</li>
				</ol>
				<!-- end breadcrumb -->
			</div>
			<!-- END RIBBON -->

			<!-- MAIN CONTENT -->
			<div id="content">
				<div class="row">
					<div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
						<h1 class="page-title txt-color-blueDark">
							<i class="fa fa-fw fa-pencil-square-o"></i> 消息订阅
						</h1>
					</div>
				</div>
				<!-- 每一个widget必须在同一个id为“widget-grid”的元素中 -->
				<section id="widget-grid" class="">
					<!-- row -->
					<div class="row">
						<!-- NEW WIDGET START -->
						<article class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<!-- Widget ID (each widget will need unique ID)-->
							<div class="jarviswidget jarviswidget-color-blueDark" id="wid-id-1" data-widget-editbutton="false" data-widget-colorbutton="false" data-widget-custombutton="false">
								<header>
									<span class="widget-icon">
										<i class="fa fa-pencil-square-o"></i>
									</span>
									<h2>产品类别</h2>
								</header>
								<!-- datatable-->
								<div>
									<div class="jarviswidget-editbox">
									</div>
									<div class="widget-body no-padding table-responsive">
										<div class="dt-toolbar">
											<div style="float:left;">
												<div id="datatable_col_reorder_filter" class="dataTables_filter">
													<label>
														<input type="search" class="form-control" placeholder="输入产品系列名称进行查询" v-model="cat_query.category_name" aria-controls="datatable_col_reorder">
													</label>
												</div>
											</div>

											<div class="col-sm-6 col-xs-6 hidden-xs">
												<div>
													<a type="button" class="btn btn-default padding-20" @click="queryCat()">查询</a>
												</div>
											</div>
										</div>
										<table class="table table-bordered table-striped table-condensed table-hover smart-form has-tickbox nowrap" width="100%">
											<thead>
												<tr>
													<th></th>
													<th>名称</th>
													<th>业务编码</th>
												</tr>
											</thead>
											<tbody>
												<tr class="row-show" v-for="(item,index) in allcategorys" :key="index">
													<td>
														<label class="checkbox">
															<input type="checkbox" :name="'category_checkbox_'+item.code" :checked="selectedcategories.indexOf('@'+item.code+'@') >= 0" @change="categoryCheckChanged($event,item)">
															<i></i>
														</label>
													</td>
													<td>
														<label>{{item.name}}</label>
													</td>
													<td>
														<label>{{item.code}}</label>
													</td>
												</tr>
											</tbody>
										</table>
										<div class="dt-toolbar-footer"><div class="col-sm-6 col-xs-12 hidden-xs"></div><div class="col-sm-6 col-xs-12"></div></div>
									</div>
								</div>
								<!-- end datatable -->
							</div>
							<!-- end widget -->
						</article>
						<!-- WIDGET END -->
					</div>
					<!-- end row -->
				</section>
				<!-- end widget grid -->
			</div>
			<!-- END MAIN CONTENT -->
		</div>
		<ElToastAlert ref="toastAlert"></ElToastAlert>
	</div>
</template>

<script>
import "common/httputils"; //引用js
import htmlHelper from "common/htmlutils";
import ElPageFrame from "components/el-PageFrame/el-PageFrame";

import ElPager from "components/el-Pager/el-Pager";
import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";

export default {
  name: "app",
  data: function() {
    return {
			cat_query:{category_name:""},
			allcategorys:[],
      selectedcategories: [],
      functionlist:[],
    };
  },
  components: {
    ElPageFrame,
    ElPager,
    ElToastAlert
  },
  created: function() {
    this.queryCat();
		$.post_json(
      appsettings.apiroot + "account/admin/userfunction_v2",
      {pageid:"user2_account"},
			this.functionlist_callback
    );
  },
  mounted: function() {
    setTimeout(function() {
    }, 0);
  },
  methods: {
		functionlist_callback:function(res){
			if(res.status==0){
				var funlist = res.data.functions;
				this.functionlist.splice(0,this.functionlist.length);
				for(var i = 0; i < funlist.length; i++)
				{
					this.functionlist.push(funlist[i].function_code);
				}
			}
		},

		queryCat:function(){
      var data = {
        keyword: this.cat_query.category_name,
      };
      $.post_json(appsettings.apiroot + "product/category/search", data, this.callback_queryCat);
		},
		
    callback_queryCat:function(result){
      if(result!=null && result.status==0){
        this.allcategorys = result.data;
        if(this.allcategorys.length==0){
					this.$refs.toastAlert.showToast("warning","没有这种产品类别！","");
				}
				else{
					$.post_json(
      			appsettings.apiroot + "account/subscribe/retrieve",
      			{},
      			this.callback_selectedcategories
					);
				}
      }
  	  else{
        this.$refs.toastAlert.showToast("error","类别查询失败！",result.message);
      }
    },

		callback_selectedcategories: function(res) {
      this.$refs.pf.hideLoading();
      if (res != null && res.status == 0) {
				for(var i=0;i<res.data.length;i++){
					this.selectedcategories.push("@"+res.data[i].category_code+"@");
				}
      } 
			else if(res.status > 0){

			} 
			else {
        this.$refs.pf.confirmShow({
          title: "查询失败：",
          msg: res.message,
          only_alert: true
        });
      }
    },
		categoryCheckChanged:function(e,category){
			if(e.target.checked){
				this.$refs.pf.showLoading("正在订阅产品类别....")
				$.post_json(appsettings.apiroot + "account/subscribe/add",{category_code:category.code},this.addrolecategory_callback,category.code);
			}
			else{
				this.$refs.pf.showLoading("正在取消订阅....")
				$.post_json(appsettings.apiroot + "account/subscribe/remove",{category_code:category.code},this.removecategory_callback,category.code);
			}
		},

		addrolecategory_callback:function(res,p){
			this.$refs.pf.hideLoading();
			if (res != null && res.status == 0) {
				if(this.selectedcategories.indexOf("@"+p+"@")<0){
					this.selectedcategories.push("@"+p+"@");
				}
			}
			else {
				this.$refs.pf.confirmShow({
          title: "订阅产品类别失败",
          msg: res.message,
          only_alert: true
        });
      }
		},

		removecategory_callback:function(res,p){
			this.$refs.pf.hideLoading();
			if (res != null && res.status == 0) {
				if(this.selectedcategories.indexOf("@"+p+"@")>=0){
					this.selectedcategories.splice(this.selectedcategories.indexOf("@"+p+"@"), 1);
				}
			}
			else {
				this.$refs.pf.confirmShow({
          title: "取消订阅失败",
          msg: res.message,
          only_alert: true
        });
      }
		},
  },
  computed: {}
};
</script>

<style>

</style>
