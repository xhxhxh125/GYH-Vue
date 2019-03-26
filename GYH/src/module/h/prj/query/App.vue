<template>
	<div id="app">
		<ElPageFrame ref ="pf"></ElPageFrame>
			<div id="main" role="main">
				<div id="ribbon">
				<span class="ribbon-button-alignment">
					<span id="refresh" class="btn btn-ribbon" data-action="resetWidgets" data-title="refresh" rel="tooltip" data-placement="bottom" data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings." data-html="true">
						<i class="fa fa-refresh"></i>
					</span>
				</span>
				<!-- breadcrumb -->
				<ol class="breadcrumb">
					<li>个人中心</li>
					<li>{{subject_type_name}}管理</li>
					<li>案例管理</li>
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
							<input type="text" class="disabled" :value="subjectCoreInfo.company_name" disabled>
						</label>					
					</section>

						<section class="col col-4">
						<label class="label">{{subject_type_name}}名称</label>
						<label class="input">
							<input type="text" :value="subjectCoreInfo.subject_name" disabled>
						</label>					
					</section>

						<section class="col col-4" v-if="false">
						<label class="label">状态</label>
						<div class="inline-group">
							<label class="radio">
								<input type="radio" name="status" :checked="query_data.status==''" @change="queryStatusChanged('',$event)">
								<i></i>全部</label>
							<label class="radio">
								<input type="radio" name="status" :checked="query_data.status=='0'" @change="queryStatusChanged('0',$event)">
								<i></i>正常</label>
							<label class="radio">
								<input type="radio" name="status" :checked="query_data.status=='-1'"  @change="queryStatusChanged(-1,$event)">
								<i></i>已删除</label>
							<label class="radio">
								<input type="radio" name="status" :checked="query_data.status=='-2'"  @change="queryStatusChanged(-2,$event)">
								<i></i>被冻结</label>
							<label class="radio">
								<input type="radio" name="status" :checked="query_data.statuses=='1'"  @change="queryStatusChanged(1,$event)">
								<i></i>草稿</label>
								<label class="radio">
								<input type="radio" name="status" :checked="query_data.statuses=='2'"  @change="queryStatusChanged(2,$event)">
								<i></i>待审核</label>
						</div>		
					</section>
					
				</div>
				</fieldset>
					

				<footer>
					<!-- <a class="btn btn-primary pull-left" href="javascript:void(0);" @click="getProjects()">
						<i class="fa fa-search"></i> 查询</a> -->

					<a v-if="(subject_type=='s' && functionlist.indexOf('add_project@information_service_project')>=0) ||(subject_type=='p' && functionlist.indexOf('add_project@information_product_project')>=0)" @click="createNew()" href="javascript:;" class="btn btn-success pull-left">
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
													<th>案例名称</th>
													<th>适用行业</th>
													<th>适用工艺</th>
													<th>标签</th>
													<th>亮点</th>
													<th>状态</th>
													<th>创建时间</th>
													<th>更新时间</th>			
												</tr>
											</thead>
											<tbody >
												<tr class="row-show" v-for="(pro,index) in projects" :key="index">
													<td>{{index+1}}</td>

													<!-- 操作当前记录 -->
													<td >
														<div class="btn-group op">
															<a class="btn btn-default btn-xs" target="_blank" :href="'/h/prj/edit.html?id='+pro.oid+'&c='+subjectCoreInfo.category_code+'&pid='+subject_seqid+'&sid='+subject_seqid+'&com='+pro.company_oid+'&t='+subject_type">修改</a>
															<a class="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" href="javascript:void(0);"><span class="caret"></span></a>
															<div class="dropdown-menu" style="width:500px;padding:8px 10px;background-color: #fff;">
																<span style="padding-right:20px;">操作:</span>
																<a v-if="(subject_type=='s' && functionlist.indexOf('pass@information_service_project')>=0) ||(subject_type=='p' && functionlist.indexOf('pass@information_product_project')>=0)" class="btn btn-xs btn-default" @click="passProject(pro)">审核</a>
																<a v-if="(subject_type=='s' && functionlist.indexOf('delete@information_service_project')>=0) ||(subject_type=='p' && functionlist.indexOf('delete@information_product_project')>=0)" class="btn btn-xs btn-danger" @click="deleteProject(pro)">删除</a>
															</div>
														</div>
													</td>

													<!-- 数据展示:label用来展示 input用来编辑(配合上面“编辑当前记录”td使用) -->
													<td>{{pro.project_name}}</td>
													
													<td>{{pro.profession_name}}</td>
													<td>{{pro.process}}</td>
													<td>{{pro.key_tag}}</td>
													<td>{{pro.description}}</td>
													<td>
														<span v-if="pro.status==0" class="label label-success">正常</span>
														<span v-if="pro.status==1" class="label label-warning">草稿</span>
														<span v-if="pro.status==2" class="label label-warning">待审核</span>
														<span v-if="pro.status==-1" class="label label-danger">已删除</span>
														<span v-if="pro.status==-2" class="label label-default">已冻结</span>
														</td>
													<td class="nw">{{pro.create_time}}</td>
													<td class="nw">{{pro.update_time}}</td>
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
	</div>
</template>

<script>

import 'common/httputils';    //引用js
import htmlHelper from 'common/htmlutils';
import ElPageFrame from 'components/el-PageFrame/el-PageFrame';
import ElBlockAlert from 'components/el-BlockAlert/el-BlockAlert';

import ElPager from 'components/el-Pager/el-Pager';
import ElToastAlert from 'components/el-ToastAlert/el-ToastAlert';


export default {
	name: 'app',
	data: function() {
		return {
			subject_type:null,//p:product or s:service
			subject_seqid:null,
			projects:[],
			subjectCoreInfo:{
				subject_name:null,
				company_name:null,
				category_code:null,
				company_oid:null,
			},
			query_data:{
				status:""
			},
			functionlist:[]
		}
	},
	components:{
		ElPageFrame,ElPager,ElToastAlert
	},
	computed:{
		subject_type_name:function(){
			return this.subject_type=='p'?'产品':(this.subject_type=='s'?'服务':'');
		}
	},
	created:function(){
		this.subject_type = $.getUrlParam("t");
		this.subject_seqid = $.getUrlParam("id");
		this.subjectCoreInfo.category_code = $.getUrlParam("c");
		this.subjectCoreInfo.company_oid = $.getUrlParam("com");

		if(this.subject_type=='p'){
		pageid = "information_product_project";
		}else if(this.subject_type=='s'){
		pageid = "information_service_project";
		}
		$.post_json(appsettings.apiroot + "account/userfunction",{pageid:pageid},this.functionlist_callback);

		//查询产品、服务基本信息
		if(this.subject_type=='p'){
			this.getProductCoreInfo();
		}else if(this.subject_type=='s'){
			this.getServiceCoreInfo();
		}
		this.getProjects();
	},
	mounted:function(){

	},
	methods:{
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
		getProjects:function(){
			var data={};
			if(this.subject_type=='p'){
				data.product_seqid= this.subject_seqid;
			}else if(this.subject_type=='s'){
				data.service_seqid = this.subject_seqid;
			}
			$.post_json(appsettings.apiroot+"home/project/retrieve",data,this.callback_getProjects);
		},
		callback_getProjects:function(result){
			if(result!=null && result.status==0){
				for (var i = 0; i < result.data.projects.length;i++) {
                result.data.projects[i].description = result.data.projects[i].description.replace("<br />", "").replace("<br/>", "");
				}
				this.projects = result.data.projects;
			}else{

			}
		},
		getProductCoreInfo:function(){
			var data={};
			data.seqid= this.subject_seqid;
			$.post_json(appsettings.apiroot+"home/product/core/retrieve",data,this.callback_getProductCoreInfo);
		},
		getServiceCoreInfo:function(){
			var data={};
			data.seqid= this.subject_seqid;
			$.post_json(appsettings.apiroot+"home/service/core/retrieve",data,this.callback_getServiceCoreInfo);
		},
		callback_getProductCoreInfo:function(result){
			if(result!=null && result.status==0){
				this.subjectCoreInfo.subject_name = result.data.product_name;
				this.subjectCoreInfo.company_name = result.data.company_name;
			}else{

			}
		},
		callback_getServiceCoreInfo:function(result){
			if(result!=null && result.status==0){
				this.subjectCoreInfo.subject_name = result.data.service_name;
				this.subjectCoreInfo.company_name = result.data.company_name;
			}else{

			}
		},
		createNew:function(){
			window.open('/h/prj/edit.html?c='+this.subjectCoreInfo.category_code+(this.subject_type=="p"?"&pid=":"&sid=")+this.subject_seqid+"&t="+this.subject_type+"&sn="+this.subjectCoreInfo.subject_name+"&com="+this.subjectCoreInfo.company_oid);		
		},
		deleteProject:function(pro){
			//alert: 是否确定删除案例
			var that = this;
			//confirm
			this.$refs.pf.confirmShow({
				action_code: "deleteproject",
				title: "确定要删除该案例吗？",
				msg: "案例名称："+pro.project_name,
				success: function(res) {
					if (res.confirm == true) {
						var data = {};
						data.project_oid = pro.oid;
						$.post_json(appsettings.apiroot+"home/project/delete",data,that.callback_deleteProject,pro);
					
						//show loading
						that.$refs.pf.showLoading('正在删除....');
						setTimeout(function() {
							that.$refs.pf.hideLoading();
						}, 10000);
					}
				},
			});
			},
		callback_deleteProject:function(result,pro){
			this.$refs.pf.hideLoading();
			if(result!=null && result.status==0){
				pro.status=-1;
				this.$refs.toastAlert.config={
						type:"success",
						title:"成功删除案例",
						msg : result.message
					};
				this.$refs.toastAlert.show=true;
			}else{
				this.$refs.toastAlert.config={
						type:"error",
						title:"删除案例出现异常",
						msg : result.message
					};
				this.$refs.toastAlert.show=true;
			}
		},
		passProject:function(pro){
			var data = {};
			data.project_oid = pro.oid;
			$.post_json(appsettings.apiroot+"home/project/core/pass",data,this.callback_passProject,pro);
		},
		callback_passProject:function(result,pro){
			if(result!=null && result.status==0){
				pro.status=0;
				this.$refs.toastAlert.config={
						type:"success",
						title:"审核案例成功",
						msg : result.message
					};
				this.$refs.toastAlert.show=true;
			}else{
				this.$refs.toastAlert.config={
						type:"error",
						title:"审核案例出现异常",
						msg : result.message
					};
				this.$refs.toastAlert.show=true;
			}
		},
		changeInfoFactor:function(info){
			this.query_data.info_factor = info;
		},
		categoryChanged:function(cat){
			this.query_data.category_code = cat;
		},
		queryStatusChanged:function(status,event){
			if(event.currentTarget.checked){
				if(status==''){
					this.query_data.statuses="";
				}else{
					this.query_data.statuses = this.query_data.statuses+","+status;
				}
			}else{
				this.query_data.statuses = this.query_data.statuses.replace(","+status,"");
			}
		},
		getStatus:function(status){
			switch(status){
				case 0:return "正常";
				case 1:return "待审核";
				case -1:return "已删除";
				case -2:return "已冻结";
				default:return "未定义"
			}
		},
		changePage:function(pageindex){
			this.query_data.page_index = pageindex;
			$.post_json(appsettings.apiroot+"home/project/retrieve",this.query_data,this.callback_getProjects);
		}
	}

}
</script>

<style>
	.pl{
		padding-left: 10px!important;
	}
	.pr{
		padding-right: 10px!important;
	}
	.row{
		margin:0 -13px 0 -13px!important;
	}
	.widget-body{
		padding:0!important;
		border-top:1px solid #ccc!important;
	}
	.border{
		border:solid 1px #ccc!important;
		border-bottom:none!important;
	}
	.no-padding .table-bordered{
		border-bottom: 1px solid #ccc!important;
	}
	.table-bordered,.no-padding>.table-responsive>.table-bordered{
		border-bottom: 1px solid #ccc!important;
	}
	.rr{margin-right:-20px;margin-left:5px;}
.rl{margin-right:2px;}

.nowrap th,.nowrap .nw{
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
.dropdown-menu{
	position: relative!important;
}
</style>
