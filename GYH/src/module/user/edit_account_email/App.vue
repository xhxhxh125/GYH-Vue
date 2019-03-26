<template>
	<div id="app">
		<ElPageFrame ref="pf">
			<div slot="mainslot">
				<!-- main -->
				<div class="col g-ml-50 g-ml-0--lg g-overflow-hidden">
					<div class="g-pa-20">
						<div class="row">
							<div class="col-md-3 g-mb-30 g-mb-0--md">
								<div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-20--md">
									<!-- User Information -->
									<section class="text-center g-mb-30 g-mb-50--md g-pa-30--md">
										<div class="d-inline-block g-pos-rel g-mb-20">
											<a class="u-badge-v2--lg u-badge--bottom-right g-width-32 g-height-32 g-bg-secondary g-bg-primary--hover g-transition-0_3 g-mb-20 g-mr-20"
												href="#!" @click="changeUserImg()">
												<i class="hs-admin-pencil g-absolute-centered g-font-size-16 g-color-white"></i>
											</a>
											<img class="img-fluid rounded-circle" :src="userinfo.picture">
										</div>

										<h3 class="g-font-weight-300 g-font-size-20 g-color-black mb-0">{{userinfo.nickname}}</h3>
									</section>
									<!-- User Information -->

									<!-- Profile Completion -->
									<section class="g-mb-30 g-mb-50--md">
										<h4 class="media h6 g-font-weight-400 g-mb-15">
											<span class="d-flex align-self-center g-color-gray-dark-v6">资料完成率</span>
											<span class="media-body align-self-center text-right g-color-gray-dark-v6">75%</span>
										</h4>

										<div class="progress g-height-4 g-rounded-2">
											<div class="progress-bar g-bg-lightblue-v3 g-rounded-3" role="progressbar" style="width: 60%"
												aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</section>
									<!-- End Profile Completion -->

									<!-- Profile Sidebar -->
									<section>
										<ul class="list-unstyled mb-0">
											<li class="g-brd-top g-brd-gray-light-v7 mb-0">
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15" href="/user/edit.html">
													<span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
														<i class="hs-admin-user"></i>
													</span>
													<span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">基本信息</span>
												</a>
											</li>
											<li class="g-brd-top g-brd-gray-light-v7 mb-0">
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15 active" href="/user/edit_account.html">
													<span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
														<i class="hs-admin-write"></i>
													</span>
													<span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">账号信息</span>
												</a>
											</li>
											<li class="g-brd-top g-brd-gray-light-v7 mb-0">
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15" href="/user/query.html">
													<span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
														<i class="hs-admin-medall"></i>
													</span>
													<span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">技能和爱好</span>
												</a>
											</li>
											<li class="g-brd-top g-brd-gray-light-v7 mb-0">
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15" href="../2-personal-infor/2-photos-and-videos.html">
													<span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
														<i class="hs-admin-mobile"></i>
													</span>
													<span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">视频和图库</span>
												</a>
											</li>
										</ul>
									</section>
									<!-- End Profile Sidebar -->
								</div>

							</div>

            <div class="col-md-9">
              <ElBlockAlert ref="alert"></ElBlockAlert>
              <div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-20--md">
                <header>
                  <h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">账户信息</h2>
                </header>

                <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-30--md">

                <div class="row g-mb-20">
                  <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                    <label class="mb-0" for="#currentPassword">电子邮箱</label>
                  </div>
                  <div class="col-md-9 align-self-center">
                    <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                      <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                    </span>
                    <input id="currentPassword" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                      name="email" placeholder="E-mail" v-model="email" @blur="onEmailBlur">
                  </div>
                </div>
                <div class="row g-mb-20">
                  <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                    <label class="mb-0" for="#currentPassword">验证码</label>
                  </div>
                  <div class="col-md-9 align-self-center row">
                    <div class="col-md-9">
                      <div class="form-group g-pos-rel mb-0">
                        
                        <input id="verificationcode" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                          name="verificationcode" placeholder="验证码" v-model="validCode"/>
                      </div>
                    </div>
                    <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                      <ElGetValCode :account="email" :url="appsettings.apiroot + 'message/getvalcode/mobile'" @error="getValCodeError"></ElGetValCode>
                    </div>
                  </div>
                </div>
                <div>
                  <a class="btn btn-md btn-xl--md u-btn-secondary g-width-160--md g-font-size-12 g-font-size-default--md g-mb-10"
                    type="submit" href="javascript:void(0);" @click="saveAccountInfo">保存电子邮箱</a>
                </div>
              </div>
            </div>
							
						<div class="modal" id="accountpicture_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header g-flex">
											<h4 class="modal-title" id="myModalLabel">修改用户头像</h4>
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
												&times;
											</button>
										</div>
										<div class="modal-body">
											<!-- imgcopper widget grid -->
											<ElImgCopper id="accountpicture" arlockratio="1" @imgCutCallback="onAccountImageCropper"></ElImgCopper>
										</div>
									</div>
									<!-- /.modal-content -->
								</div>
								<!-- /.modal-dialog -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</ElPageFrame>
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

export default {
  name: "app",
  data: function() {
    return {
      validator: null,
      email:"",
      validCode:"",
      userinfo: {},
    };
  },
  components: {
    ElPageFrame,
    ElImgCopper,
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
          }
        }
      });
    }, 0);
  },
  methods: {
    changeUserImg: function() {
      setTimeout(() => {
        $("#accountpicture_modal").modal({
          backdrop: "static",
          keyboard: false
        });
      }, 0);
    },
    
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
        window.opener.location.reload();
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

    onAccountImageCropper: function (imgbase64) {
        if (this.userinfo.oid == undefined || this.userinfo.oid.length == 0) {
          this.$refs.pf.confirmShow({
            title: "尚未创建账户",
            msg: "请维护账户基本信息以创建账户",
            only_alert: true
          });
        } else {
          var body = {
            account_oid: this.userinfo.oid,
            base64: imgbase64.split(",")[1]
          };
          $.post_json(
            appsettings.apiroot + "home/account/picture/update",
            body,
            this.uploadPictureRender
          );
        }
      },

      uploadPictureRender: function (res) {
        $("#accountpicture_modal").modal("hide");
        if (res.status == 0) {
          var that = this;
          setTimeout(() => {
            this.$refs.pf.confirmShow({
              title: "提交成功",
              msg: "账户头像修改提交成功！",
              only_alert: true
            });
            that.userinfo.picture = res.data + "?t=" + Math.random();
          }, 1500);
        } else {
          this.$refs.toastAlert.config = {
            type: "error",
            title: "错误",
            msg: res.message
          };
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
