<template>
	<div id="app">
		<!-- possible classes: minified, no-right-panel, fixed-ribbon, fixed-header, fixed-width-->
		<header id="header">
			<!--<span id="logo"></span>-->

			<div>
				<span> <img class="logo" :src="appsettings.imgPrefix+'gidep-logo.png'"> </span>
			</div>

			<span id="extr-page-header-space">
				<span class="hidden-mobile hidden-xs">需要创建新账号?</span>
				<a href="register.html" class="btn btn-danger">注册信息账号</a>
			</span>

		</header>

		<div id="main" role="main">

			<!-- MAIN CONTENT -->
			<div id="content" class="container">

				<div class="row">
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm">
            <h1 class="txt-color-red login-header-big">质量信息共享与交换平台</h1>
            <div class="hero">
              <div class="pull-left login-desc-box-l">
                <h4 class="paragraph-header">1985年，我国可靠性系统工程事业的奠基人和开拓者杨为民教授顺应国家战略重大需求，组建了北航工程系统工程系和可靠性工程研究所。</h4>
                <!-- <div class="login-app-icons">
                  <a href="javascript:void(0);" class="btn btn-danger btn-sm" @click="changeLang('zh')">中文版本</a>
                  <a href="javascript:void(0);" class="btn btn-danger btn-sm" @click="changeLang('en')">English Version</a>
                </div> -->
              </div>
              <img :src="appsettings.imgPrefix+'demo/iphoneview.png'" class="pull-right display-image" alt="" style="width:210px">
						</div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h5 class="about-heading">平台最新通知1</h5>
                <p>
                  目前，研究所挂靠有多个以管理咨询和技术服务为职能的国家级中心和专家组，建成有可靠性领域唯一的国防科技重点实验室，以及多个国内实验设备与综合试验研究能力一流的部委级重点实验室和评价机构。这些高水平的技术与管理平台为院、所的可持续发展提供了坚实的基础与保证。
                </p>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h5 class="about-heading">平台最新通知2</h5>
                <p>
                  在科研领域，院、所现拥有专业齐全的研究方向、结构合理的教学科研队伍和配套先进的试验设备。多年来，紧密围绕国防科技工业发展对可靠性工程的专业需求，开展管理支持、人才培养、科学研究和工程服务。“九五”以来，先后承担完成了500余项科研项目，获得了包括国家科技进步特等奖在内的各类科技成果奖100余项，取得显著的经济效益和社会效益。
                </p>
              </div>
            </div>
          </div>
					<div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
						<div class="well no-padding">
							<form id="forgotpassword-form" class="smart-form client-form">
								<header>
									重置密码
								</header>

								<fieldset>
									<ElBlockAlert ref="alert"></ElBlockAlert>
									<section>
										<label class="label">Email</label>
										<label class="input">
											<i class="icon-append fa fa-envelope"></i>
											<input type="email" name="email" v-model="user_email">
											<b class="tooltip tooltip-top-right">
												<i class="fa fa-envelope txt-color-teal"></i> 请输入电子邮箱</b>
										</label>
									</section>
									<section>
										<span class="timeline-seperator text-center text-primary">
											<span class="font-sm">或</span>
										</span>
									</section>
									<section>
										<label class="label">手机号</label>
										<label class="input">
											<i class="icon-append fa fa-phone"></i>
											<input type="text" name="mobile" v-model="user_mobile">
											<b class="tooltip tooltip-top-right">
												<i class="fa fa-phone txt-color-teal"></i> 请输入手机号</b>
										</label>
										<div class="note">
											<a :href="appsettings.login_url">取消修改密码</a>
										</div>
									</section>
								</fieldset>

								<fieldset>
									<section>
										<label class="input">
											<ElGetValCode :account="this.user_mobile||this.user_email" :url="appsettings.apiroot + 'message/getvalcode/mobile'" @error="getValCodeError"></ElGetValCode>
											<input type="text" name="verificationcode" placeholder="验证码" id="verificationcode" v-model="validate_code">
											<b class="tooltip tooltip-bottom-right">请输入验证码</b>
										</label>
									</section>

									<section>
										<label class="input">
											<i class="icon-append fa fa-lock"></i>
											<input type="password" name="password" placeholder="密码" id="password" v-model="new_password">
											<b class="tooltip tooltip-bottom-right">不要忘记密码</b>
										</label>
									</section>

									<section>
										<label class="input">
											<i class="icon-append fa fa-lock"></i>
											<input type="password" name="passwordConfirm" placeholder="确认密码">
											<b class="tooltip tooltip-bottom-right">请再次输入密码</b>
										</label>
									</section>
								</fieldset>

								<footer>
									<a class="btn btn-primary" @click="ResetPassword()">
										<i class="fa fa-refresh"></i> 重置密码
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
import htmlutils from "common/htmlutils";
import ElGetValCode from 'components/el-GetValCode/el-GetValCode';
import ElBlockAlert from 'components/el-BlockAlert/el-BlockAlert';

export default {
	name: 'app',
	data: function() {
		return {
			login_account: "",
			user_email: "",
			user_mobile: "",
			validate_code: "",
			new_password: "",
		};
	},
	components: {
		ElGetValCode, ElBlockAlert
	},
	created: function() {
		htmlutils.setPageTitle(appsettings.title);
	},
	mounted: function() {
		setTimeout(function() {
			//配置validate组件
			this.validator = ValidateConfig({
				formid: "forgotpassword-form",
				rules: {
					mobile: {
						required: {
							depends: function() { //二选一  
								return ($('input[name=email]').val().length <= 0);
							}
						},
						isMobile: true
					},
					email: {
						required: {
							depends: function() { //二选一  
								return ($('input[name=mobile]').val().length <= 0);
							}
						},
						email: true
					},
					verificationcode: {
						required: true,
						digits: true,
						minlength: 4,
						maxlength: 4
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
					mobile: {
						required: '请输入手机号码',
						isMobile: '请输入正确的手机号码'
					},
					email: {
						required: '请输入电子邮箱',
						email: '请输入正确的电子邮箱'
					},
					password : {
						required : '请输入密码',
						minlength: "密码长度不能小于 3 个字符",
						maxlength: "密码长度不能大于 20 个字符"
					},
					passwordConfirm : {
						required : '请再次输入密码',
						minlength: "密码长度不能小于 3 个字符",
						maxlength: "密码长度不能大于 20 个字符",
						equalTo : '两次输入的密码不一致'
					},
					verificationcode: {
						required: '请输入验证码',
						digits: '验证码应为数字'
					},
				},
			});
		}, 0);
	},
	methods: {
		getValCodeError: function(msg) {
			this.$refs.alert.blockAlert("error", msg);
		},

		ResetPassword: function() {
			if (validator.form()) {
				var data = { login_account: this.user_mobile || this.user_email, new_password: this.new_password, validate_code: this.validate_code };
				$.post_json(appsettings.apiroot + "account/forgetpassword", data, this.callback_resetpassword);
			}
		},
		callback_resetpassword: function(result) {
			if (result != null && result.status == 0) {
				//记录token
				window.localStorage.setItem("token", result.data.token);
				//跳转到登录界面
				//var ref = (this.reffer_url == null || this.reffer_url == "") ? "/" : this.reffer_url;
				window.location.href = appsettings.login_url;
			}
			// else if (result.status == 1) {
			// 	this.$refs.alert.blockAlert("warning", "your account has been existed!");
			// 	return;
			// }
			else {
				this.$refs.alert.blockAlert("error", result.message);
				return;
			}
		},
	},
}
</script>

<style>
.logo{
	width:300px;
	margin-top: 15px;
}
</style>
