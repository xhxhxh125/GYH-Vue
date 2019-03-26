<template>
	<div id="app">
		<ElPageFrame ref ="pf"></ElPageFrame>

		<div id="main" role="main">
			<!-- RIBBON -->
			<div id="ribbon">
				<span class="ribbon-button-alignment">
					<span id="refresh" class="btn btn-ribbon" data-action="resetWidgets" data-title="refresh" rel="tooltip" data-placement="bottom" data-original-title="<i class='text-warning fa fa-warning'></i> This will reset all your widget settings." data-html="true">
						<i class="fa fa-refresh"></i>
					</span>
				</span>
				<!-- breadcrumb -->
				<ol class="breadcrumb">
					<li><a :href="appsettings.portal_root">首页</a></li>
					<li>个人中心</li>
          <li>个人信息</li>
				</ol>
				<!-- end breadcrumb -->
			</div>
			<!-- END RIBBON -->

			<!-- MAIN CONTENT -->
			<div id="content">
				<div class="row">
					<div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
						<h1 class="page-title txt-color-blueDark">
							<i class="fa fa-fw fa-pencil-square-o"></i> 个人中心
							<span>> 个人信息
							</span>
						</h1>
					</div>
				</div>

				<!-- form widget grid -->
				<section id="widget-grid" class="">

					<!-- START ROW Search Condition-->
					<div class="row">
						<!-- NEW COL START -->
						<article class="col-sm-12 col-md-12">
							<!-- Widget ID (each widget will need unique ID)-->
							<div class="jarviswidget" id="wid-id-1" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-custombutton="false">
								<header>
									<span class="widget-icon">
										<i class="fa fa-edit"></i>
									</span>
									<h2>基本信息 </h2>
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
													<section class="col col-lg-12">
														<label class="label">手机号</label>
														<label class="input">
															<i class="icon-prepend fa fa-phone"></i>
															<input type="tel" name="phone" disabled placeholder="手机号" v-model="userinfo.user_mobile" >
														</label>
													</section>
													<section class="col col-lg-12">
														<label class="label">E-mail</label>
														<label class="input">
															<i class="icon-prepend fa fa-envelope-o"></i>
															<input type="email" name="email" disabled placeholder="E-mail" v-model="userinfo.user_email" >
														</label>
													</section>
												</div>
											</fieldset>
											<!-- <fieldset v-if="userroles!=null&&userroles.length>0">
												<section v-if="default_role!=undefined&&default_role.name!=undefined&&default_role.name.length>0">
													<label class="label">默认角色</label>
													<div class="inline-group">
														<label class="userrole-label label-warning">
															{{default_role==undefined?"":default_role.name}}
														</label>												
													</div>
												</section>
												<section>
													<label class="label">用户角色</label>
													<div class="inline-group">
														<label v-for="(role,index) in userrolesshow" :key="index" class="userrole-label label-success">
															{{role.name}}
														</label>											
													</div>
												</section>
											</fieldset> -->
											<footer>
												<a  class="btn btn-success pull-left" target="_blank" :href="'/mymsg/list.html?t=reply&fuoid='+userinfo.oid+'&funame='+userinfo.private_name">
													<i class="fa fa-envelope-o"></i> 发站内信</a>
											</footer>
										</form>
									</div>
									<!-- end widget content -->
								</div>
								<!-- end widget div -->
							</div>
							<!-- end widget -->

							<div class="jarviswidget" id="wid-id-2" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-custombutton="false">
								<header>
									<span class="widget-icon">
										<i class="fa fa-edit"></i>
									</span>
									<h2>详细信息 </h2>
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
													<!-- <div class="col-sm-4 text-center">
                                						<img style="width: 90%; border-radius: 50%; margin-bottom: 20px;padding-right: 15px;padding-left: 15px;box-sizing: border-box;" :src="userinfo.picture" />
                                						<a v-if="functionlist.indexOf('save@user2_account_edit')>=0" class="btn btn-primary" style="padding: 0 22px; font: 300 15px/29px 'Open Sans',Helvetica,Arial,sans-serif;" @click="changeUserImg()"><i class="fa fa-upload"></i> 修改</a>
                            						</div> -->
													<div class="col-sm-12 text-center">
													<section class="col col-lg-12">
														<label class="label">真名</label>
														<label class="input">
															<i class="icon-prepend fa fa-phone"></i>
															<input type="text" name="private_name" disabled placeholder="真名" v-model="userinfo.private_name">
														</label>
													</section>	
													</div>											
												</div>
											</fieldset>

											<fieldset>
												<section>
													<label class="label">性别</label>
													<div class="inline-group">
														<label class="radio" v-if="userinfo.sex==0">
															<input type="radio" name="sex" disabled :checked="userinfo.sex==0">
															<i></i>男</label>
														<label class="radio" v-if="userinfo.sex==1">
															<input type="radio" name="sex" disabled :checked="userinfo.sex==1">
															<i></i>女</label>													
													</div>
												</section>
											</fieldset>

											<fieldset>
												<section>
													<label class="label">角色</label>
													<div class="inline-group">
														<label class="radio" v-if="userinfo.permission_level==0">
															<input type="radio" name="staffrole" disabled :checked="userinfo.permission_level==0">
															<i></i>公司管理员</label>
														<label class="radio" v-if="userinfo.permission_level==1">
															<input type="radio" name="staffrole" disabled :checked="userinfo.permission_level==1">
															<i></i>普通员工</label>													
													</div>
												</section>
											</fieldset>

											<fieldset>
												<div class="row">
													<div class="col-sm-12 text-center">
													<section class="col col-lg-12">
														<label class="label">职位</label>
														<label class="input">
															<i class="icon-prepend fa fa-user"></i>
															<input type="text" name="title" disabled placeholder="职位" v-model="userinfo.title">
														</label>
													</section>
													<section class="col col-lg-12">
														<label class="label">个人简介</label>
														<label class="textarea">
                              <textarea rows="3" disabled placeholder="个人简介" v-model="userinfo.self_introduction"></textarea>
														</label>
													</section>		
													</div>											
												</div>
											</fieldset>
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
				<!-- end form widget grid -->
			</div>
			<!-- END MAIN CONTENT -->
		</div>

	</div>
</template>

<script>
import "common/httputils"; //引用js
import htmlHelper from "common/htmlutils";
import ElPageFrame from "components/el-PageFrame/el-PageFrame";

export default {
  name: "app",
  data: function() {
    return {
      validator: null,
      userinfo: {
        picture: "/assets/common/img/user_default.jpg"
      },

      default_role: {},
      userrolesshow: [],
      userroles: [],
      allroles: []
    };
  },
  components: {
    ElPageFrame,
  },
  created: function() {
    var id = $.getUrlParam("id");
    if (id != undefined && id.length > 0) {
      var body = { account_oid: id };
      $.post_json(
        appsettings.apiroot + "admin/account/info",
        body,
        this.userInfoRender
      );
    }

    // $.post_json(
    //   appsettings.apiroot + "admin/account/user/role/retrieve",
    //   { user_oid: id },
    //   this.callback_userrole
    // );
  },
  mounted: function() {

  },
  methods: {

    userInfoRender: function(res) {
      if (res.status == 0) {
        this.userinfo = res.data;
      } else {

      }
    },

    // callback_userrole: function(res) {
    //   this.$refs.pf.hideLoading();
    //   if (res != null && res.status == 0) {
    //     for (var i = 0; i < res.data.length; i++) {
    //       this.userrolesshow.push(res.data[i]);
    //       this.userroles.push("@" + res.data[i].role_code + "@");
    //       if (res.data[i].isdefault == 1) {
    //         //这里要用值传递，以免修改this.default_role的同事修改res.data[i]
    //         this.default_role.name = res.data[i].name;
    //         this.default_role.role_code = res.data[i].role_code;
    //       }
    //     }
    //   } else if (res.status > 0) {
    //   } else {
    //     this.$refs.pf.confirmShow({
    //       title: "查询失败：",
    //       msg: res.message,
    //       only_alert: true
    //     });
    //   }
    // },
  }
};
</script>

<style>
.userrole-label {
  margin: 0 auto;
  color: #fff;
  line-height: 1;
  display: inline;
  padding: 0.2em 0.6em 0.3em !important;
  text-align: center;
  margin-right: 5px;
  border-radius: 0.25em;
}
</style>
