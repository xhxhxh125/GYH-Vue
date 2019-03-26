<template>
	<div id="app">
		<!-- possible classes: minified, no-right-panel, fixed-ribbon, fixed-header, fixed-width-->
		<header id="header">
			<!--<span id="logo"></span>-->

			<div>
				<span> <img class="logo" :src="appsettings.imgPrefix+'gidep-logo.png'"> </span>

				<!-- END AJAX-DROPDOWN -->
			</div>

			<!-- <span id="extr-page-header-space">
				<span class="hidden-mobile hidden-xs">Need an account?</span>
				<a href="register.html" class="btn btn-danger">Creat account</a>
			</span> -->

		</header>

		<div id="main" role="main">

			<!-- MAIN CONTENT -->
			<div id="content" class="container">

				<div class="row">
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm">
            <h1 class="txt-color-red login-header-big">修改密码</h1>
            <div class="hero">
              <div class="pull-left login-desc-box-l">
                <h4 class="paragraph-header"></h4>
                <!-- <div class="login-app-icons">
                  <a href="javascript:void(0);" class="btn btn-danger btn-sm" @click="changeLang('zh')">中文版本</a>
                  <a href="javascript:void(0);" class="btn btn-danger btn-sm" @click="changeLang('en')">English Version</a>
                </div> -->
              </div>
              <img :src="appsettings.imgPrefix+'demo/iphoneview.png'" class="pull-right display-image" alt="" style="width:210px">
						</div>
            <!-- <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h5 class="about-heading">平台最新通知1</h5>
                <p></p>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h5 class="about-heading">平台最新通知2</h5>
                <p></p>
              </div>
            </div> -->
          </div>
					<div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
						<div class="well no-padding">
							<form id="forgotpassword-form" class="smart-form client-form">
								<header>
									修改密码
								</header>

								<fieldset>
									<ElBlockAlert ref="alert"></ElBlockAlert>
									<section>
										<label class="input">
											<i class="icon-append fa fa-lock"></i>
											<input type="password" name="oldpassword" placeholder="旧密码" v-model="request_data.password">
											<b class="tooltip tooltip-bottom-right">请输入旧密码</b>
										</label>
									</section>
									<section>
										<label class="input">
											<i class="icon-append fa fa-lock"></i>
											<input type="password" name="password" placeholder="新密码" id="password" v-model="request_data.new_password">
											<b class="tooltip tooltip-bottom-right">请输入新密码</b>
										</label>
									</section>

									<section>
										<label class="input">
											<i class="icon-append fa fa-lock"></i>
											<input type="password" name="passwordConfirm" placeholder="确认密码" v-model="request_data.confirm_new_password">
											<b class="tooltip tooltip-bottom-right">请再次输入新密码</b>
										</label>
									</section>
								</fieldset>

								<footer>
									<a class="btn btn-primary" @click="ResetPassword()">
										<i class="fa fa-refresh"></i> 修改密码
									</a>
								</footer>
							</form>

						</div>

					</div>
				</div>
			</div>

		</div>

	</div>
</template>

<script>

import 'common/httputils';    //引用js
import htmlHelper from 'common/htmlutils';
import ElGetValCode from 'components/el-GetValCode/el-GetValCode';
import ElBlockAlert from 'components/el-BlockAlert/el-BlockAlert';

export default {
	name: 'app',
	data: function() {
		return {
			request_data:{
				password: "",
				new_password: "",
				confirm_new_password: "",
			}
			
		};
	},
	components: {
		ElGetValCode, ElBlockAlert
	},
	created: function() {

	},
	mounted: function() {
		setTimeout(function() {
			//配置validate组件
			this.validator = ValidateConfig({
				formid: "forgotpassword-form",
				rules: {
					oldpassword: {
						required: true,
						minlength: 3,
						maxlength: 20
					},
					password: {
						required: true,
						minlength: 3,
						maxlength: 20
					},
					passwordConfirm: {
						required: true,
						minlength: 3,
						maxlength: 20,
						equalTo: '#password'
					},
				},
				messages: {
					oldpassword: {
						required: '请输入旧密码'
					},
					password: {
						required: '请输入新密码'
					},
					passwordConfirm: {
						required: '请再次输入新密码',
						equalTo: '两次输入的密码不一致'
					},
				},
			});
		}, 0);
	},
	methods: {

		ResetPassword: function() {
			if (validator.form()) {
				$.post_json(appsettings.apiroot + "account/password_v2", this.request_data, this.callback_resetpassword);
			}
		},
		callback_resetpassword: function(result) {
			if (result != null && result.status == 0) {
				this.$refs.alert.blockAlert("success", '修改密码成功');
			}
			else {
				this.$refs.alert.blockAlert("error", result.message);
				return;
			}
		},
	},
}
</script>

<style>
.logo {
    width: 300px;
    margin-top: 15px;
}
</style>
