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
					<li>个人信息</li>
          <li>电子邮箱</li>
				</ol>
				<!-- end breadcrumb -->
			</div>
			<!-- END RIBBON -->

			<!-- MAIN CONTENT -->
			<div id="content">

				<!-- form widget grid -->
				<section id="widget-grid" class="">
					<ElBlockAlert ref="alert"></ElBlockAlert>

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
									<h2>电子邮箱 </h2>
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
														<label class="label">E-mail</label>
														<label class="input">
															<i class="icon-prepend fa fa-envelope-o"></i>
															<input type="email" name="email" placeholder="E-mail" v-model="email" @blur="onEmailBlur">
														</label>
													</section>
                          <section class="col col-lg-12">
										        <label class="input">
											        <ElGetValCode :account="email" :url="appsettings.apiroot + 'message/getvalcode/mobile'" @error="getValCodeError"></ElGetValCode>
											        <input type="text" name="verificationcode" placeholder="验证码" id="verificationcode" v-model="validCode">
											        <b class="tooltip tooltip-bottom-right">请输入验证码</b>
										        </label>
									        </section>
												</div>
											</fieldset>
											

											<footer>
												<a id ="btn_acc_raise" class="btn btn-primary pull-left" href="javascript:void(0);" @click="saveAccountInfo">
													<i class="fa fa-save"></i> 提交</a>
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
				</section>
				<!-- end form widget grid -->
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
import ElGetValCode from 'components/el-GetValCode/el-GetValCode';
import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
import ElImgCopper from "components/el-ImgCopper/el-ImgCopper";
import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";
import ElCompanyIntellisense from "components/el-CompanyIntellisense/el-CompanyIntellisense";

export default {
  name: "app",
  data: function() {
    return {
      validator: null,
      email:"",
      validCode:"",
    };
  },
  components: {
    ElPageFrame,
    ElGetValCode, 
    ElBlockAlert,
    ElToastAlert
  },
  created: function() {
      $.post_json(
        appsettings.apiroot + "account/info",
        {},
        this.userInfoRender
      );
  },
  mounted: function() {
    var self = this;
    setTimeout(function() {
      //配置validate组件
      this.validator = ValidateConfig({
        formid: "query-form",
        rules: {
          email: {
            required: true,
            email: true
          },
          verificationcode: {
						required: true,
						digits: true,
						minlength: 4,
						maxlength: 4
					},
        },
        messages: {
          email: {
            required: "请输入电子邮箱",
            email: "请输入正确的电子邮箱"
          },
          verificationcode: {
						required: '请输入验证码',
						digits: '验证码应为数字'
					},
        }
      });
    }, 0);
  },
  methods: {
    userInfoRender: function(res) {
      if (res.status == 0) {
        this.email = res.data.user_email;
      } else {
        this.$refs.toastAlert.config = {
          type: "error",
          title: "错误",
          msg: res.message
        };
      }
    },

    getValCodeError: function(msg) {
			this.$refs.alert.blockAlert("error", msg);
    },
    
    saveAccountInfo: function() {
      if (validator.form()) {
				var data = { email: this.email,valcode:this.validCode };
        $.post_json(appsettings.apiroot + "account/email/bind", data, this.callback_saveInfo);
      }
      
    },

    callback_saveInfo: function(res) {
      if (res.status == 0) {  
        //window.opener.location.reload();
        this.$refs.toastAlert.config = {
          type: "success",
          title: "成功修改手机号",
          msg: res.message
        };
        this.$refs.toastAlert.show = true;
      } else {
        this.$refs.toastAlert.config = {
          type: "error",
          title: "错误",
          msg: res.message
        };
        this.$refs.toastAlert.show = true;
      }
    },

    onEmailBlur: function() {
      if (
        this.email != undefined &&
        this.email.length > 0
      ) {
        var body = { user_email: this.email.toLowerCase() };
        $.post_json(
          appsettings.apiroot + "admin/account/isexist",
          body,
          this.checkAccountEmailExistCallback
        );
      }
    },

    checkAccountEmailExistCallback: function(res) {
      if (res.status == 0) {
        this.$refs.pf.confirmShow({
          title: "该邮箱已注册过",
          msg: "请更换邮箱注册",
          only_alert: true
        });
        $("#btn_acc_raise").attr("disabled", "disabled");
      } else if (res.status < 0) {
        this.$refs.toastAlert.config = {
          type: "error",
          title: res.message,
          msg: result.message
        };
        this.$refs.toastAlert.show = true;
      } else {
        $("#btn_acc_raise").attr("disabled", false);
      }
    },

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
