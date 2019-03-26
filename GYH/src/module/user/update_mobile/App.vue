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
          <li>手机号</li>
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
									<h2>手机号 </h2>
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
															<input type="tel" name="phone" placeholder="手机号" v-model="userinfo.user_mobile">
														</label>
													</section>
													<section class="col col-lg-12">
										        <label class="input">
											        <ElGetValCode :account="userinfo.user_mobile" :url="appsettings.apiroot + 'message/getvalcode/mobile'" @error="getValCodeError"></ElGetValCode>
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
import ElGetValCode from "components/el-GetValCode/el-GetValCode";
import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
import ElImgCopper from "components/el-ImgCopper/el-ImgCopper";
import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";
import ElCompanyIntellisense from "components/el-CompanyIntellisense/el-CompanyIntellisense";

export default {
  name: "app",
  data: function() {
    return {
      user_type: "",
      validator: null,
      userinfo: {},
      validCode: ""
    };
  },
  components: {
    ElPageFrame,
    ElGetValCode,
    ElBlockAlert,
    ElImgCopper,
    ElToastAlert,
    ElCompanyIntellisense
  },
  created: function() {
    $.post_json(appsettings.apiroot + "account/info", {}, this.userInfoRender);
  },
  mounted: function() {
    var self = this;
    setTimeout(function() {
      //配置validate组件
      this.validator = ValidateConfig({
        formid: "query-form",
        rules: {
          phone: {
            required: true,
            isMobile: true
          },
          verificationcode: {
            required: true,
            digits: true,
            minlength: 4,
            maxlength: 4
          }
        },
        messages: {
          phone: {
            required: "请输入手机号码",
            isMobile: "请输入正确的手机号码"
          },
          verificationcode: {
            required: "请输入验证码",
            digits: "验证码应为数字"
          }
        }
      });
    }, 0);
  },
  methods: {
    userInfoRender: function(res) {
      if (res.status == 0) {
        this.userinfo = res.data;
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
      var data = { mobile: this.userinfo.user_mobile, valcode: this.validCode };
      $.post_json(
        appsettings.apiroot + "account/mobile/bind",
        data,
        this.callback_saveInfo
      );
    },

    callback_saveInfo: function(res) {
      if (res.status == 0) {
        //window.opener.location.reload();
        this.$refs.toastAlert.config = {
          type: "success",
          title: "修改手机号成功",
          msg: res.message
        };
        this.$refs.toastAlert.show = true;
      } else if (res.status == 201) {
        that = this;
        this.$refs.pf.confirmShow({
          title: "您的手机号已存在",
          msg: "是否保留已存在的手机账号，并将小程序账号合并至该手机账号？",
          success: function(res) {
            if (res.confirm) {
              var data = {
                exist_account_oid: res.data
              };
              $.post_json(
                appsettings.apiroot + "account/bindtoexist",
                data,
                that.callback_bindtoexist
              );
            } else if (res.cancel) {
              var data = {
                user_mobile: that.data.mobile
              };
              $.post_json(
                appsettings.apiroot + "account/bindcore/force",
                data,
                that.callback_bindcoreforce
              );
            }
          }
        });
      } else {
        this.$refs.toastAlert.config = {
          type: "error",
          title: "错误",
          msg: res.message
        };
        this.$refs.toastAlert.show = true;
      }
    },

    callback_bindtoexist: function(result) {
      if (result != null && result.status == 0) {
        //保存成功
        this.$refs.toastAlert.config = {
          type: "success",
          title: "绑定手机号成功"
        };
        this.$refs.toastAlert.show = true;
      } else {
        this.$refs.toastAlert.config = {
          type: "error",
          title: "绑定手机号失败",
          msg: result.message
        };
        this.$refs.toastAlert.show = true;
      }
    },

    callback_bindcoreforce: function(result) {
      if (result != null && result.status == 0) {
        //保存成功
        this.$refs.toastAlert.config = {
          type: "success",
          title: "绑定手机号成功"
        };
        this.$refs.toastAlert.show = true;
      } else {
        this.$refs.toastAlert.config = {
          type: "error",
          title: "绑定手机号失败",
          msg: result.message
        };
        this.$refs.toastAlert.show = true;
      }
    },

    // onMobilBlur: function() {
    //   if (
    //     this.userinfo.user_mobile != undefined &&
    //     this.userinfo.user_mobile.length > 0
    //   ) {
    //     var body = { user_mobile: this.userinfo.user_mobile };
    //     $.post_json(
    //       appsettings.apiroot + "admin/account/isexist",
    //       body,
    //       this.checkAccountMobileExistCallback
    //     );
    //   }
    // },

    // checkAccountMobileExistCallback: function(res) {
    //   if (res.status == 0) {
    //     this.$refs.pf.confirmShow({
    //       title: "该手机号已注册过",
    //       msg: "请更换手机号注册",
    //       only_alert: true
    //     });
    //     this.$refs.toastAlert.show = true;
    //     $("#btn_acc_raise").attr("disabled", "disabled");
    //   } else if (res.status < 0) {
    //     this.$refs.toastAlert.config = {
    //       type: "error",
    //       title: "手机号检测失败",
    //       msg: result.message
    //     };
    //     this.$refs.toastAlert.show = true;
    //   } else {
    //     $("#btn_acc_raise").attr("disabled", false);
    //   }
    // },

    bindWechat: function(wxopenid) {
      var height = 480;
      var width = 700;
      var top = Math.round((window.screen.height - height) / 2);
      var left = Math.round((window.screen.width - width) / 2);
      var state_guid = $.guid();

      var url =
        "https://open.weixin.qq.com/connect/qrconnect?appid=" +
        appsettings.WX_OPEN_APPID +
        "&redirect_uri=" +
        appsettings.WX_OPEN_WEBAPP_RETURNURL +
        "%3Fcalltype%3dbind%26token%3d" +
        window.localStorage.getItem("token") +
        "&response_type=code&scope=snsapi_login&state=" +
        state_guid +
        "#wechat_redirect";
      window.open(
        url,
        "_blank",
        "height=" +
          height +
          ", width=" +
          width +
          ", top=" +
          top +
          ", left= " +
          left +
          ",scrollbars=yes,resizable=0.5,modal=false,alwaysRaised=yes"
      );
    },

    unBindWXQQConfirm: function(type) {
      //弹出强制绑定社交账号的confirm窗口
      var type_name = type == 0 ? "QQ" : "微信";
      $(".unbindwxqq_popup .buttonsec_active").attr("data-unbind-type", type);
      $(".unbindwxqq_popup .head h1").html("解除绑定" + type_name);
      var htmltext = "是否确定要解除当前账号绑定的" + type_name + "账号？";
      $(".unbindwxqq_popup .bind_confirm").html(htmltext);
      $(".unbindwxqq_popup").show();
    },

    unBindWXQQ: function() {
      //调用ajax解除绑定
      var dd = {};
      dd["unbindtype"] = $(".unbindwxqq_popup .buttonsec_active").attr(
        "data-unbind-type"
      );
      dd["token"] = getCookie("TKN");
      //调用ajax绑定
      $.ajax({
        url: appsettings.apiroot + "account/unbindwxqq",
        type: "POST",
        dataType: "json",
        data: dd,
        success: function(data) {
          var res = JSON.parse(data);
          if (res.status == 0) {
            //解除绑定成功
            //window.location.reload();
          } else {
            $(".unbindwxqq_popup").show();
            popShowErr(".unbindwxqq_popup", "解除绑定失败，请联系客服");
          }
        },
        error: function() {
          $(".unbindwxqq_popup").show();
          popShowErr(".unbindwxqq_popup", "解除绑定失败，请联系客服");
        }
      });
    }
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
