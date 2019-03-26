<template>
	<div id="app">
		<ElPageFrame></ElPageFrame>

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
					<li>首页</li>
					<li>产品查询</li>
				</ol>
				<!-- end breadcrumb -->
			</div>
			<!-- END RIBBON -->

			<!-- MAIN CONTENT -->
			<div id="content">
				<div class="row">
					<div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
						<h1 class="page-title txt-color-blueDark">
							<i class="fa fa-fw fa-pencil-square-o"></i> 产品
							<span>> 产品查询
							</span>
						</h1>
					</div>
				</div>

				<section id="widget-grid" class="">
					<ElBlockAlert ref="alert"></ElBlockAlert>

					<!-- START ROW Search Condition-->
					<div class="row">
						<!-- NEW COL START -->
						<article class="col-sm-12 col-md-12">
							<!-- Widget ID (each widget will need unique ID)-->
							<div class="jarviswidget" id="wid-id-0" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-custombutton="false">
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
								<header>
									<span class="widget-icon">
										<i class="fa fa-edit"></i>
									</span>
									<h2>查询条件 </h2>
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
										<form id="query-form" class="smart-form">
											<fieldset>
												<div class="row">
														
													<section class="col col-3">
														<label class="label">产品名称</label>
														<label class="input">
															<input type="text" name="text" v-model="query_data.product_name">
														</label>
													</section>
													<section class="col col-3">
														<label class="label">公司名称</label>
														<label class="input">
															<input type="text" v-model="query_data.company_name">
														</label>
													</section>

												</div>
												
											</fieldset>
											

											<fieldset>
												<div class="row" v-if="query_fields!=null">
													<div v-for="para in query_fields" :key="para.column_id">
														<section v-if="para.data_type==0" class="col col-3">
																<label class="label">{{para.column_name}}</label>
																<label class="input">
																	<input type="text" name="text" v-model="para.value">
																</label>
															</section>

															

															<section  v-if="para.data_type==2" class="col col-sm-12">
																<label class="label">{{para.column_name}}</label>
																<div class="textarea">
																	<textarea rows="5" width="100%" v-model="para.value"></textarea>
																</div>
															</section>


															<section v-if="para.data_type==7 || para.data_type==1" class="col col-6">
																<label class="label">{{para.column_name}}</label>
																<label class="input col col-6 nopaddingl rl">
																	<input type="text" v-model="para.mininput">
																</label>
																<label class="nopaddingl col to">—</label>
																<label class="input col col-6 nopaddingl rr">
																	<input type="text" v-model="para.maxinput">
																</label>
															</section>

															<section v-if="para.data_type==8 && para.enum_type==0" class="col col-3">
																<label class="label">{{para.column_name}}</label>
																<label class="select">
																	<select name="country"  v-model="para.value">
																		<option v-for="ch in para.search_enums" :key="ch.enum_code" :value="ch.enum_code">{{ch.enum_name}}</option>
																	</select>
																	<i></i>
																</label>
															</section>														

															<fieldset v-if="para.data_type==8 && para.enum_type==1" class="border col col-sm-12">
																<section>
																	<label class="label">{{para.column_name}}</label>
																	<div class="inline-group">
																		<label class="checkbox" v-for="ch in para.search_enums" :key="ch.enum_code">
																			<input type="checkbox" :value="ch.enum_code" name="checkbox-inline">
																			<i></i>{{ch.enum_name}}</label>
																	</div>
																</section>
															</fieldset>

															<section v-if="para.data_type==9" class="col col-3">
																<label class="label">{{para.column_name}}</label>
																<label class="input">		
																	<section  v-if="para.value!=null && para.value!=undefined && para.value.indexOf('{')>=0">														
																	<a :href="v.href" target="_blank" class="btn pull-left" v-for="(v,ridx) in JSON.parse(para.value)" :key="ridx">{{ridx>0?",":""+v.value}}</a>
																	</section>
																	<a href="javascript:void(0);" class="btn pull-left btn-info"  @click="editRefParameter(para)">
																	<i class="fa fa-edit"></i>编辑</a>
																</label>
															</section>
													</div>
												</div>
												
											</fieldset>
											

											<footer>
												<a class="btn btn-primary pull-left" href="javascript:void(0);" @click="queryClick()">
													<i class="fa fa-search"></i> 查询</a>

												<a :href="'/h/p/new.html?c='+query_data.category_code" target="_blank" class="btn btn-success pull-left">
												新增</a>
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
													<th>公司名称</th>
													<th v-for="head in headers" :key="head.id">{{head.name}}</th>
												</tr>
												<tr>
													<th></th>
													<th></th>
													<th></th>
													<th></th>
													<th v-for="head in headers" :key="head.id">{{head.unit}}</th>
												</tr>
											</thead>
											<tbody >
												<tr class="row-show" v-for="(pro,index) in result_products" :key="index">
													<td>{{index+1}}</td>
													<!-- 操作当前记录 -->
													<td >
														<div class="btn-group op">
															<a class="btn btn-default btn-xs" target="_blank" :href="'/h/p/new.html?id='+pro.id+'&c='+pro.category_code">修改</a>
															<a class="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" href="javascript:void(0);"><span class="caret"></span></a>
															<div class="dropdown-menu" style="width:500px;padding:8px 10px;background-color: #fff;">
																<span style="padding-right:20px;">操作:</span>
																<a class="btn btn-xs btn-default">审核</a>
																<a class="btn btn-xs btn-danger">删除</a>
															</div>
														</div>
													</td>
													
													<!-- 数据展示:label用来展示 input用来编辑(配合上面“编辑当前记录”td使用) -->
													<td><label><a :href="'/p/one_p.html?id='+pro.id" target="_blank"> {{pro.product_name}} </a></label></td>
													<td><label><a :href="'/p/one_c.html?id='+pro.company_id" target="_blank">{{pro.company_name}}</a></label></td>

													<td v-for="(para,pidx) in pro.parameters" :key="pidx">
														<label v-if="para.data_type!=9">{{para.value}}</label>
														<label v-if="para.data_type==9 && para.value.indexOf('{')>=0"><a :href="p.href" target="_blank" :key="ppidx" v-for="(p,ppidx) in JSON.parse(para.value)">{{(ppidx>0?",":"")+ p.value}}</a> </label>
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
					<!-- end row -->
				</section>
				<!-- end widget grid -->
			</div>
			<!-- END MAIN CONTENT -->
		</div>
		<ElLoading ref="loading"></ElLoading>
	</div>
</template>

<script>

import 'common/httputils';    //引用js
import htmlHelper from 'common/htmlutils';
import htmlutils from "common/htmlutils";
import ElPageFrame from 'components/el-PageFrame/el-PageFrame';

import ElPager from 'components/el-Pager/el-Pager';
import ElBlockAlert from 'components/el-BlockAlert/el-BlockAlert';
import ElLoading from 'components/el-Loading/el-Loading';

export default {
	name: 'app',
	data: function() {
		return {
			query_fields:null,
			query_data:{
				page_index: 1,
				pageSize: 20,
				pageTotal: 0,
				search_tags:null,
				category_code:null,
				grid_level:1,
				search_tags:null,
				product_name:null,
				company_name:null
			},
			query_tags:{},
			dataSource: [
			],
			categorylist:null,
			headers:null,
			result_products:null
		};
	},
	components: {
		ElPageFrame, ElPager, ElBlockAlert,ElLoading
	},
	created: function() {
		htmlutils.setPageTitle(appsettings.title);
		//get queryfields
		this.query_data.category_code= $.getUrlParam("c");
		var data={};
		data.category_code=this.query_data.category_code;	
		$.post_json(appsettings.apiroot+"product/queryfield",data,this.callback_getQueryFields);
	},
	mounted: function() {
		setTimeout(function() {
			//配置validate组件
			ValidateConfig({
				formid: "query-form",
				rules: {
					text: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					phone: {
						required: true,
						isMobile: true
					},
					country: {
						required: true
					},
					digital: {
						required: true,
						digits: true
					},
				},
				messages: {
					text: {
						required: 'Please enter your last name'
					},
					email: {
						required: 'Please enter your email address',
						email: 'Please enter a VALID email address'
					},
					phone: {
						required: 'Please enter your phone number',
						isMobile: 'Please enter VALID phone number'
					},
					country: {
						required: 'Please select your country'
					},
					digital: {
						required: 'Please enter code',
						digits: 'Digits only please'
					},
				}
			});
			$('#date').datepicker({
				dateFormat: 'yy/mm/dd',
				prevText: '<i class="fa fa-chevron-left"></i>',
				nextText: '<i class="fa fa-chevron-right"></i>',
				onSelect: function(selectedDate) {
					//$('#startdate').datepicker('option', 'maxDate', selectedDate);
				}
			});
		}, 0);
	},
	methods: {
		init_table:function(){
			setTimeout(function(){
			//初始化datatable组件
				InitDatatable({
					tableid: "datatable_tabletools",
					jslocation: appsettings.jsPrefix
				});
			},0);
		},
		callback_getCategoryList:function(result){
			if(result!=null && result.status==0){
				//success
				this.categorylist=result.data;
			}else{
				//failed
			}
		},
		callback_getQueryFields:function(result){
			if(result!=null && result.status==0){
				//success
				this.query_fields=result.data.query_fields;
			}else{
				//failed
			}
		},

		statusClass: function(status) {
			switch (status) {
				case 0:
					return "label-success";
					break;
				case 1:
					return "label-warning";
					break;
				case 2:
					return "label-default";
					break;
				case 3:
					return "label-info";
					break;
				case -1:
					return "label-danger";
					break;
				default:
					return "";
			}
		},
		queryClick: function(type) {
			var that = this;
			//do query
			if(this.query_fields!=null){
				for(var i=0;i<this.query_fields.length;i++){
					if(this.query_fields[i].data_type==1 || this.query_fields[i].data_type==7){
						if((this.query_fields[i].mininput!=undefined && this.query_fields[i].mininput!=null)||(this.query_fields[i].maxinput!=undefined && this.query_fields[i].maxinput!=null))
						this.query_tags[this.query_fields[i].column_id] = (this.query_fields[i].mininput==null||this.query_fields[i].mininput==undefined?"":this.query_fields[i].mininput)+","+(this.query_fields[i].maxinput==null||this.query_fields[i].maxinput==undefined?"":this.query_fields[i].maxinput);
					}else{
						if(this.query_fields[i].value!=null && this.query_fields[i].value!=undefined && this.query_fields[i].value.replace(" ","")!=""){
							this.query_tags[this.query_fields[i].column_id] = this.query_fields[i].value;
						}
					}
				}
			}

			this.result_products=[];
			this.query_data.search_tags=JSON.stringify(this.query_tags);
			$.post_json(appsettings.apiroot+"product/cidepretrieve",this.query_data,this.callback_query);
			this.$refs.loading.showLoading('查询中...');
						
		},
		changePage: function(page_index) {
			this.query_data.page_index = page_index;
		},
		pageplus:function(){
			this.query_data.pageTotal =this.query_data.pageTotal+1;
		},
		callback_query:function(result){
			this.$refs.loading.hideLoading();
			if(result!=null && result.status==0){
				//生成表格数据
				//产品名称、公司名称、参数列表
				this.headers = result.data.headers;
				this.result_products = result.data.products;
				this.query_data.pageTotal = result.data.page.total_page_count;
				this.query_data.pageSize=result.data.page.page_size;
				//this.init_table();

			}else{
				//failed
				this.$refs.alert.blockAlert("error", "查询失败:"+result.message);
			}
		},
		changeMin:function(para,event){
			if(para.value!=null && para.value!=undefined && para.value.indexOf(',')>=0){
				var values = para.value.split(',');
				values[0]=event.currentTarget.value;
				para.value=values.join(',');
			}else{
				para.value=event.currentTarget.value+",";
			}
		},
		changeMax:function(para,event){
			if(para.value!=null && para.value!=undefined && para.value.indexOf(',')>=0){
				var values=para.value.split(',');
				values[1]=event.currentTarget.value;
				para.value=values.join(',');
			}else{
				para.value=","+event.currentTarget.value;
			}
		}
	}
}
</script>

<style>
	.nopaddingl{
		padding-left:0!important;
	}
	.to{
	height: 32px;
    line-height: 32px;
    vertical-align: middle;
	margin-left:-10px!important;
	padding-right:2px!important;
	margin-right:2px!important;
	}
	.border{
		border:solid 1px #ccc!important;
		border-bottom:none!important;
	}
	.no-padding .table-bordered{
		border-bottom: 1px solid #ccc!important;
	}
	.rr{margin-right:-20px;margin-left:5px;}
.rl{margin-right:2px;}

.nowrap th{
	white-space:nowrap!important;
}
.nowrap{
	overflow-x: scroll!important;
}
.op{
    width: 70px;
}
.table{
	border-bottom: 1px solid #ccc!important;
}
</style>
