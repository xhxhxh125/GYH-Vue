<template>
	<div id="app">
		<ElPageFrame ref="pf"></ElPageFrame>

		<!-- #MAIN PANEL -->
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
					<li>{{companyinfo.company_name}}</li>
				</ol>
				<!-- end breadcrumb -->
			</div>
			<!-- END RIBBON -->
			<!-- MAIN CONTENT -->
			<div id="content">
				<!-- row -->
				<div class="row">
					<!-- col -->
					<div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
						<h1 class="page-title txt-color-blueDark">
							<!-- PAGE HEADER -->
							<i class="fa-fw fa fa-home"></i> 
							<span>{{companyinfo.company_name}}
							</span>
						</h1>
					</div>
					<!-- end col -->
				</div>
				<!-- end row -->
				<!-- row -->

				<div class="row">

					<div class="col-sm-12">

						<div id="widget-grid" class="well well-sm">

							<div class="row">

								<div class="col-sm-12 col-md-12 col-lg-6">
									<div class="well well-light well-sm no-margin no-padding">
										<div class="row">
											<div class="col-sm-12">
												<div id="myCarousel" class="carousel fade profile-carousel">
													<div class="air air-bottom-right padding-10">
														<a href="javascript:void(0);" @click="collect()" class="btn btn-white btn-default">
															<i class="fa fa-star" :class="companyinfo.favorited?'text-primary':''"></i> {{companyinfo.favorited?"已":""}}收藏</a>&nbsp;
													</div>
													<div class="air air-top-left padding-10">
														<!-- <h4 class="txt-color-white font-md">Jan 1, 2014</h4> -->
													</div>
													<!-- <ol class="carousel-indicators">
														<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
														<li data-target="#myCarousel" data-slide-to="1" class=""></li>
														<li data-target="#myCarousel" data-slide-to="2" class=""></li>
													</ol> -->
													<div class="carousel-inner">
														<!-- Slide 1 -->
														<div class="item active">
															<img :src="appsettings.imgPrefix+'demo/s1.jpg'" alt="demo user">
														</div>
														<!-- Slide 2 -->
														<!-- <div class="item">
															<img :src="appsettings.imgPrefix+'demo/s2.jpg'" alt="demo user">
														</div> -->
														<!-- Slide 3 -->
														<!-- <div class="item">
															<img :src="appsettings.imgPrefix+'demo/m3.jpg'" alt="demo user">
														</div> -->
													</div>
												</div>
											</div>

											<div class="col-sm-12">

												<div class="row">

													<!-- <div class="col-sm-3 profile-pic">
														<div class="imgcont">
															<img :src="appsettings.comimg+companyinfo.logo" alt="demo user">
														</div>
														<div class="padding-10">
															<h4 class="font-md">
																<strong>1,543</strong>
																<br>
																<small>产品</small>
															</h4>
															<br>
															<h4 class="font-md">
																<strong>419</strong>
																<br>
																<small>服务</small>
															</h4>
														</div>
													</div> -->
													<div class="col-sm-5" style="padding-left:30px;">
														<h1 style="font-size:20px;">{{companyinfo.company_name}}
															<span class="semi-bold"></span>
															<br>
															<small style="font-size:14px;">注册号：{{companyinfo.company_code}}</small>
														</h1>

														<ul class="list-unstyled">
															<li>
																<p class="text-muted">
																	<span class="txt-color-darken">公司角色：{{companyinfo.company_role}}</span>
																</p>
															</li>
															<li>
																<p class="text-muted">
																	<span class="txt-color-darken">公司类型：{{companyinfo.company_type}}</span>
																</p>
															</li>
															<!-- <li>
																<p class="text-muted">
																	<span class="txt-color-darken">注册资金：{{((companyinfo.registered_capital==undefined||companyinfo.registered_capital==null||companyinfo.registered_capital.length==0 || companyinfo.registered_capital==0)?'':(companyinfo.registered_capital+'万元'))}}</span>
																</p>
															</li>
															<li>
																<p class="text-muted">
																	<span class="txt-color-darken">成立时间：{{companyinfo.registered_date}}</span>
																</p>
															</li> -->
														</ul>
														<br>

													</div>
													<div class="col-sm-7">
														<h1>
															<small>联系人</small>
														</h1>
														<ul class="list-inline friends-list contractor">
															<li v-for="(user,index) in users" :key="index" class="user" style="width: 100%;padding-right: 10px;" :title="user.nick_name+' '+user.user_mobile+' '+user.user_email ">
																<a :href="'/hr/profile.html?id='+user.account_oid" target="_blank"> 
																	<img :src="appsettings.userimg+user.picture">
																</a>
																<span class="txt-color-darken">{{user.user_mobile}}</span>
																<p class="text-muted">
																	<a href="mailto:simmons@smartadmin" class="spill" style="display:block;">{{user.user_email}}</a>
																</p>
															</li>
															
														</ul>

													</div>

												</div>

											</div>

										</div>
									</div>
<div style="height:30px;"></div>
									<!-- 基本信息 -->
									<div class="jarviswidget" id="wid-base" data-widget-editbutton="false" data-widget-colorbutton="false" data-widget-custombutton="false">
										<header>
											<span class="widget-icon">
												<i class="fa fa-pencil-square-o"></i>
											</span>
											<h2>基本信息</h2>
										</header>
										<!-- datatable-->
										<div>
											<div class="jarviswidget-editbox">
											</div>
											<div class="widget-body no-padding">
												<table id="datatable_tabletools" class="table table-striped table-bordered table-hover" width="100%">
													<tbody>
														
														<tr class="row-show">
															<td class="col-sm-2 col-lg-2">
																<label>公司描述</label>
															</td>
															<td>
																<label>{{companyinfo.introduction}}</label>
															</td>
														</tr>
														<tr class="row-show">
															<td class="col-sm-2 col-lg-2">
																<label>经营范围</label>
															</td>
															<td>
																<label>{{companyinfo.business_region}}</label>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<!-- end datatable -->
									</div>
									<!-- end widget -->
									<!-- 详细信息 -->
									<div class="jarviswidget" id="wid-detail" data-widget-editbutton="false" data-widget-colorbutton="false" data-widget-custombutton="false">
										<header>
											<span class="widget-icon">
												<i class="fa fa-pencil-square-o"></i>
											</span>
											<h2>详细信息</h2>
										</header>
										<!-- datatable-->
										<div>
											<div class="jarviswidget-editbox">
											</div>
											<div class="widget-body no-padding">
												<table id="datatable_tabletools" class="table table-striped table-bordered table-hover" width="100%">
													<tbody>

														<tr class="row-show">
															<td class="col-sm-2 col-lg-2">
																<label>所在地区</label>
															</td>
															<td>
																<label>{{companyinfo.country}}</label>
															</td>
														</tr>
														<tr class="row-show">
															<td>
																<label>详细地址</label>
															</td>
															<td>
																<label>{{companyinfo.contact_address}}</label>
															</td>
														</tr>
														<tr class="row-show">
															<td>
																<label>服务领域</label>
															</td>
															<td>
																<label>{{companyinfo.profession}}</label>
															</td>
														</tr>
														<tr class="row-show">
															<td>
																<label>员工总数</label>
															</td>
															<td>
																<label>{{companyinfo.all_staff}}</label>
															</td>
														</tr>
														<tr class="row-show">
															<td>
																<label>研发员工</label>
															</td>
															<td>
																<label>{{companyinfo.research_staff}}</label>
															</td>
														</tr>
														<tr class="row-show">
															<td>
																<label>厂房面积</label>
															</td>
															<td>
																<label>{{companyinfo.factory_area}}</label>
															</td>
														</tr>
														<tr class="row-show">
															<td>
																<label>年营业额</label>
															</td>
															<td>
																<label>{{companyinfo.annual_revenue+((companyinfo.registered_capital==null||companyinfo.registered_capital.length==0)?"":"万元")}}</label>
															</td>
														</tr>
														<tr class="row-show">
															<td>
																<label>年出口额</label>
															</td>
															<td>
																<label>{{companyinfo.annual_export}}</label>
															</td>
														</tr>

														
													</tbody>
												</table>
											</div>
										</div>
										<!-- end datatable -->
									</div>
									<!-- end widget -->

							<div v-if="att_pics.length>0" class="row">
								<div class="col-sm-12 col-md-12 col-lg-12">
									<!-- well -->
									<div class="well">
										<h3 style="margin:6px 0">企业资质<a class="pull-right" style="font-size:16px;" data-toggle="modal" data-target="#galleryModel">更多</a></h3>
										
										<div id="myCarousel-2" class="carousel slide">
											<ol class="carousel-indicators">
												<li v-for="(file,index) in att_pics" :key="index" data-target="#myCarousel-2" data-slide-to="index" :class="index==0?'active':''"></li>
											</ol>
											<div class="carousel-inner">
												<div v-for="(file,index) in att_pics" :key="index" class="item" :class="index==0?'active':''">
													<div>
														<img v-if="isImg(file.file_type)||(file.picture!=undefined)" :src="appsettings.company_attachment+(file.picture==undefined?(file.oid+file.file_type):(file.picture))" alt="">
														<img v-if="isVideo(file.file_type)" :src="appsettings.comimg+companyinfo.logo" alt="">
														<i v-if="isVideo(file.file_type)" @click="playVideo(appsettings.company_attachment+file.oid+file.file_type,null)" data-toggle="modal" data-target="#videomodel" class="fa fa-lg fa-play-circle-o" style="position: absolute;font-size: 6em;opacity: 0.8;"></i>
													</div>
												</div>
											</div>
											<a class="left carousel-control" href="#myCarousel-2" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a>
											<a class="right carousel-control" href="#myCarousel-2" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a>
										</div>
				
									</div>
									<!-- end well-->
				
								</div>

							</div>

									<!-- 企业附件 -->
									<div v-if="att_files!=null&&att_files.length>0" class="jarviswidget" id="wid-atts" data-widget-editbutton="false" data-widget-colorbutton="false" data-widget-custombutton="false">
										<header>
											<span class="widget-icon">
												<i class="fa fa-pencil-square-o"></i>
											</span>
											<h2>企业附件</h2>
										</header>
										<!-- datatable-->
										<div>
											<div class="jarviswidget-editbox">
											</div>
											<div class="widget-body no-padding">
												<table id="datatable_tabletools" class="table table-striped table-bordered table-hover" width="100%">
													<thead>
														<tr>
															<th>文件信息</th>
															<th>文件类型</th>
															<th>操作</th>
														</tr>
													</thead>
													<tbody>
														<tr class="row-show" v-for="(file,index) in att_files" :key="index">
															<td>{{file.file_name}}</td>
															<td><label>{{file.file_type}}</label></td>
															<td>
																<div>
												<a v-if="file.file_type.toUpperCase()!='WEBVIDEO'" :href="appsettings.company_attachment+file.oid+file.file_type" :download="file.file_name">下载</a>
												<a v-if="file.file_type.toUpperCase()=='WEBVIDEO'" :href="file.url">查看</a>
											</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<!-- end datatable -->
									</div>
									<!-- end widget -->

								</div>
								<div class="col-sm-12 col-md-12 col-lg-6">

									<!-- <form method="post" class="well padding-bottom-10" onsubmit="return false;">
										<textarea rows="2" class="form-control" placeholder="有什么想告诉我们?" v-model="message"></textarea>
										<div class="margin-top-10">
											<a href="javascript:void(0);" class="btn txt-color-white bg-color-pinkDark btn-sm" rel="tooltip" @click="leaveMsg()" data-placement="bottom">
												<i class="fa fa-location-arrow"></i> 联系公司</a>
										</div>
									</form> -->

									<!-- Widget ID (each widget will need unique ID)-->
									<!-- <div class="jarviswidget jarviswidget-color-blueDark" id="wid-sers" data-widget-editbutton="false" data-widget-colorbutton="false" data-widget-custombutton="false">
										<header>
											<span class="widget-icon">
												<i class="fa fa-pencil-square-o"></i>
											</span>
											<h2>优质服务</h2>
										</header>
										<div>
											<div class="jarviswidget-editbox">
											</div>
											<div class="widget-body no-padding">
												<table id="datatable_tabletools" class="table table-striped table-bordered table-hover" width="100%">
													<thead>
														<tr>
															<th></th>
															<th>服务名称</th>
															<th>服务类别</th>
														</tr>
													</thead>
													<tbody>
														<tr class="row-show" v-for="(row,index) in dataSource" :key="row.id">

															<td>
																<img :src="appsettings.imgPrefix+'avatars/male.png'" alt="" width="20">
															</td>
															<td><input type="text" v-model="row.name">
																<label>{{row.name}}</label>
															</td>
															<td><input type="text" v-model="row.name">
																<label>{{row.name}}</label>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div> -->
									<!-- end widget -->

									<!-- Widget ID (each widget will need unique ID)-->
									<div v-for="(pro_cat,index) in products" :key="index" class="jarviswidget jarviswidget-color-blueDark" id="wid-pros" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-fullscreenbutton="false" data-widget-deletebutton="false" data-widget-custombutton="false" data-widget-sortable="false">
										<header>
											<span class="widget-icon">
												<i class="fa fa-pencil-square-o"></i>
											</span>
											<h2>{{pro_cat.category_name}}</h2>
											<!-- <a class="widget-toolbar hidden-mobile" style="color:white" :href="'/adm/p/query.html?ci='+companyinfo.id+'&c='+pro_cat.category_code" target="_blank"><i class="fa fa-list-ul"></i> 更多</a> -->
										</header>
										<!-- datatable-->
										<div>
											<div class="jarviswidget-editbox">
											</div>
											<div class="widget-body no-padding">
												<table id="datatable_tabletools" class="table table-striped table-bordered table-hover" width="100%">
													<thead>
														<tr>
															<!-- <th></th> -->
															<th>产品名称</th>
															<th style="width:25%">产品系列</th>
														</tr>
													</thead>
													<tbody>
														<tr v-for="(pro,index) in pro_cat.products" :key="index" class="row-show">

															<!-- <td style="width:70px">
																<a :href="'/p/one_p.html?id='+pro.id" target="_blank"><img :src="appsettings.proimg+pro.main_pic" alt="" width="50"></a>
															</td> -->
															<td><a :href="'/p/one_p.html?id='+pro.id" target="_blank">{{pro.product_name}}</a></td>
															<td style="width:25%">{{pro.category_name}}</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<!-- end datatable -->
									</div>
									<!-- end widget -->

								</div>
							</div>

						</div>

					</div>

				</div>

				<!-- end row -->

			</div>
			<!-- END #MAIN CONTENT -->
		</div>
		<!-- END #MAIN PANEL -->

		<!-- Modal -->
		<div class="modal fade" id="galleryModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content" style="min-height: 600px;">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
							&times;
						</button>
						<h4 class="modal-title" id="myModalLabel">Article Post</h4>
					</div>
					<div class="modal-body">
						<div class="row">
							<!-- SuperBox -->
	<div class="superbox col-sm-12">
		<div v-for="(file,index) in att_pics" :key="index" v-if="isImg(file.file_type)||(file.picture!=undefined)" class="superbox-list">
			<img :src="appsettings.company_attachment+(file.picture==undefined?(file.oid+file.file_type):(file.picture))" :data-img="appsettings.company_attachment+(file.picture==undefined?(file.oid+file.file_type):(file.picture))" class="superbox-img">
		</div>
		<div class="superbox-float"></div>
	</div>
	<!-- /SuperBox -->
	<div class="superbox-show" style="height:300px; display: none"></div>
						</div>
					</div>					
				</div>
				<!-- /.modal-content -->
			</div>
			<!-- /.modal-dialog -->
		</div>
		<!-- /.modal -->


		<div class="modal fade" id="videomodel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog" style="width:800px; height: 580px;">
				<ElVideoPlayer ref ="player" @close="hideVideoModel()"></ElVideoPlayer>
			</div>
		</div>
		<ElToastAlert ref="toastAlert"></ElToastAlert>
	</div>
</template>

<script>
import "common/httputils"; //引用js
import htmlutils from "common/htmlutils";
import ElPageFrame from "components/el-PageFrame/el-PageFrame";
import ElVideoPlayer from "components/el-videoplayer/el-videoplayer";
import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";

export default {
  name: "app",
  data: function() {
    return {
      query_data: {
        id: 0
      },
      products: [],
      services: [],
      companyinfo: {},
      att_pics: [],
      att_files: [],
	  users: [],
	  message:"",
    };
  },
  components: {
    ElPageFrame,ElVideoPlayer,ElToastAlert
  },
  created: function() {
	htmlutils.setPageTitle(appsettings.title);
    this.query_data.company_oid = $.getUrlParam("id");
    $.post_json(
      appsettings.apiroot + "company/info",
      this.query_data,
      this.callback_getcominfo
    );
  },
  mounted: function() {
	  var that = this;
    setTimeout(function() {
	  pageSetUp();
	  $("#videomodel").on("hide.bs.modal", function() {
        that.closeVideo();
      });
    }, 0);
  },
  methods: {
	  getdefaultindex:function(){
		  return window.localStorage.getItem("homeurl")||"/";
	  },
    callback_getcominfo: function(result) {
      //公司信息
      if (result != null) {
        if (result.status == 0) {
          if (
            result.data.meta.title != null &&
            result.data.meta.title.length > 0
          ) {
            htmlutils.setPageTitle(result.data.meta.title);
          }
          if (
            result.data.meta.title != null &&
            result.data.meta.title.keywords > 0
          ) {
            htmlutils.setPageKeywords(result.data.meta.keywords);
          }

          this.products = result.data.product_categories;
          this.services = result.data.service_categories == null ||result.data.service_categories.length == 0? this.service_categories: result.data.service_categories;
          this.companyinfo = result.data.companyinfo == null || result.data.companyinfo == undefined ? this.companyinfo : result.data.companyinfo;
          this.att_pics = result.data.att_pics == null || result.data.att_pics.length == 0? this.att_pics : result.data.att_pics;
          this.att_files = result.data.att_files == null || result.data.att_files.length == 0 ? this.att_files: result.data.att_files;
          this.users = result.data.users;

          this.$nextTick(function() {
            //渲染完成后 重置swiper图片尺寸
            $(".carousel-inner>.item>div").each(function() {
              $(this).width($(this).parent().width());
              $(this).height($(this).width() * 2 / 3);
            });
            //初始化superbox
            $(".superbox").SuperBox();
          });
        } else if (result.status == 1) {
          //showInfo("今日浏览公司数量已达" + result.data.limit + "条, 完成支付后继续浏览。", "", "返回", "/index.html", "立即支付", "");
        } else if (result.status == 2) {
          //showInfo("今日浏览公司数量已达到上限，明日再来", "", "", "m", "确定", "/index.html");
        } else if (result.status > 0) {
          //showInfo("今日浏览公司数量已达到上限，明日再来", "", "", "m", "确定", "/index.html");
        }
      }
	},

	collect:function(){
			//收藏
			var data={};
			data.target_oid=this.companyinfo.id;
			data.target_type=1;
			var url="account/favorite";
			if(this.companyinfo!=null && this.companyinfo.favorited){
				url="account/favorite/cancel";
			}
			$.post_json(appsettings.apiroot+url,data,this.callback_collect);	
		},
		callback_collect:function(result){
			if(result!=null && result.status==0){
				
				this.companyinfo.favorited=!this.companyinfo.favorited;
				
			}else{
				//failed
			}
		},

 		playVideo: function(src, title) {
      		this.$refs.player.playVideo(src, title);
    	},

    	closeVideo: function() {
      		this.$refs.player.closeVideo();
    	},

    	hideVideoModel: function() {
			console.log("hide model");
      		$("#videomodel").modal("hide");
    	},


	    isImg: function (type) {
			type = (type || "").toUpperCase();
			if (type == ".JPG" || type == ".JPEG" || type == ".BMP" || type == ".PNG") {
				return true;
			}
			return false;
        },
        isVideo: function (type) {
            type = (type || "").toUpperCase();
            if (type == ".MP4") {
                return true;
            }
            return false;
		},
			
		leaveMsg:function(){
            var data={};
            if(this.companyinfo.id!=null){
                data.company_id=this.companyinfo.id;
            }
            data.mobile=this.mobile;
            //data.email=this.email;
			data.message=this.message;
			this.$refs.pf.showLoading();
            $.post_json(appsettings.apiroot+"message/leavemsg",data,this.callback_submit);
        },
        callback_submit:function(result){
            this.$refs.pf.hideLoading();
            if(result!=null && result.status==0){    
				//到结果提示页面
				this.$refs.pf.confirmShow({
          			title: "提交成功",
          			msg: "您的留言已经成功提交！",
          			only_alert: true
        		});
            }else{
				this.$refs.toastAlert.showToast("error","提交失败",result.message=="请输入手机或邮箱"?"请绑定手机后继续留言":result.message);
            }
        }
  }
};
</script>

<style>
.profile-pic .imgcont {
  border: 3px solid #fff;
  left: 14px;
  width: 100%;
  border-radius: 0;
  position: relative;
  top: -25px;
  display: inline-block;
  text-align: right;
  z-index: 4;
  margin-bottom: -30px;
}
.imgcont > img {
  border: 1px solid #eee;
  width: 100%;
}

.jarviswidget .widget-body {
  min-height: 10px;
}
.dt-toolbar-footer {
  padding: 0;
  border-top: 0;
}
.table>tbody>tr>td {
    vertical-align: middle;
}
table tr.row-show label {
  text-align: justify;
}
.well {
  padding: 10px;
}
.superbox-show .superbox-imageinfo {
  display: none;
}

.carousel-inner > .item {
  /* 水平居中 垂直居中 */
  width: 100%;
}

.carousel-inner > .item > div {
  /* 水平居中 垂直居中 */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: Center;
}
.carousel-inner > .item > div > img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.contractor{
	overflow: auto;
	height: 150px;
	margin-bottom: 20px;
}
.contractor::-webkit-scrollbar{
	/* width:20px; */
}
</style>
