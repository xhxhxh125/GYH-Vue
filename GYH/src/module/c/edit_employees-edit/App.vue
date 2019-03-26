<template>
	<div id="app">
		<ElPageFrame ref="pf">
			<div slot="mainslot">
				<!-- main -->
				<div class="col g-ml-50 g-ml-0--lg g-overflow-hidden">
					<div class="g-pa-20">
						<div class="row">
							<div class="col-md-9">
								<div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-20--md">
									<div class="js-validate">
										<header>
											<h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">基本信息</h2>
										</header>

										<hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-15-md">

										<div class="row g-mb-20">
											<div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
												<label class="mb-0" for="#firstName">手机号</label>
											</div>

											<div class="col-md-9 align-self-center">
												<div class="form-group g-pos-rel mb-0">
													<input id="firstName" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
													 type="text" name="text" placeholder="手机号" v-model="userinfo.user_mobile">
												</div>
											</div>
										</div>

										<div class="row g-mb-20">
											<div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
												<label class="mb-0" for="#lastName">E-mail</label>
											</div>

											<div class="col-md-9 align-self-center">
												<div class="form-group g-pos-rel mb-0">
													<input id="lastName" name="text" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
													 type="text" placeholder="E-mail" v-model="userinfo.user_email">
												</div>
											</div>
										</div>

										<header>
											<h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">详细信息</h2>
										</header>

										<hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-15-md">

										<div class="row g-mb-20">
											<div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
												<label class="mb-0">真名</label>
											</div>

											<div class="col-md-9 align-self-center">
												<div class="form-group g-pos-rel mb-0">
													<input name="text" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
													 type="text" placeholder="真名" v-model="userinfo.private_name">
												</div>
											</div>
										</div>


										<div class="row g-mb-20">
											<div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
												<label class="mb-0">性别</label>
											</div>
											<div class="col-md-9 align-self-center">
												<label class="form-check-inline u-check g-pl-25 ml-0">
													<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" name="sex" :checked="userinfo.sex===0"
													 @change="userinfoRadioChanged($event,'sex',0)">
													<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
														<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
													</div>
													男
												</label>
												<label class="form-check-inline u-check g-pl-25 ml-0">
													<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" name="sex" :checked="userinfo.sex===1"
													 @change="userinfoRadioChanged($event,'sex',1)">
													<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
														<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
													</div>
													女
												</label>
											</div>
										</div>


										<div class="row g-mb-20">
											<div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
												<label class="mb-0">角色</label>
											</div>
											<div class="col-md-9 align-self-center">

												<label class="form-check-inline u-check g-pl-25 ml-0">
													<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" name="staffrole" :checked="parseInt(userinfo.company_role)===0"
													 @change="userinfoRadioChanged($event,'company_role',0)">
													<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
														<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
													</div>
													公司管理员
												</label>
												<label class="form-check-inline u-check g-pl-25 ml-0">
													<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" name="staffrole" :checked="parseInt(userinfo.company_role)===1"
													 @change="userinfoRadioChanged($event,'company_role',1)">
													<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
														<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
													</div>
													普通员工
												</label>
											</div>
										</div>

										<hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-15-md">

										<div class="row g-mb-20">
											<div class="col-md-3">
												<label class="mb-0">职位</label>
											</div>
											<div class="col-md-9 align-self-center">
												<div class="form-group g-pos-rel mb-0">
													<input class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
													 type="text" name="title" placeholder="职位" v-model="userinfo.title">
												</div>
											</div>
										</div>

										<div class="row g-mb-20">
											<div class="col-md-3">
												<label class="mb-0">个人简介</label>
											</div>
											<div class="col-md-9 align-self-center">
												<textarea class="form-group g-pos-rel mb-0 form-control" rows="3" placeholder="个人简介" v-model="userinfo.self_introduction"></textarea>
											</div>
										</div>
										<div class="g-mt-50">
											<a class="btn btn-xl u-btn-secondary g-font-size-default g-px-40" @click="saveInfo()" href="javascript:void(0);">提交</a>
										</div>
									</div>
								</div>
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

	import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";

	export default {
		name: "app",
		data: function () {
			return {
				validator: null,
				userinfo: {
					account_oid: null,
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
			ElToastAlert
		},
		computed: {
			
		},
		created: function () {
			this.userinfo.account_oid = $.getUrlParam("id");
				var body = {
					account_oid: this.userinfo.account_oid
				};
				$.post_json(
					appsettings.apiroot + "admin/account/info",
					body,
					this.userInfoRender
				);
		},
		mounted: function () {
			if (this.edit_mode == 'edit') {
				this.$refs.pf.showLoading("加载中...");

				var self = this;
				setTimeout(() => {
					self.$refs.pf.hideLoading();
				}, 10000);
			}
		},
		methods: {
			saveInfo: function () {
				var url = "update";
				if (this.edit_mode == 'new') {
					url = "create";
				}
				$.post_json(appsettings.apiroot + 'home/company/staff/' + url, this.userinfo, this.cb_saveInfo);
			},
			cb_saveInfo: function (res) {
				if (res != null && res.status == 0) {
					$.setUrlParam("id", res.data.account_oid);
					this.$refs.pf.showToast("success", "保存成功", "");
				} else {
					this.$refs.pf.showToast("error", "保存失败", res.message);
				}
			},
			userinfoRadioChanged: function (event, key, value) {
				if (event.currentTarget.checked) {
					Vue.set(this.userinfo, key, value);
				}
			},
			userInfoRender: function (res) {
				console.log(res)
				this.$refs.pf.hideLoading();
				if (res.status == 0) {
					var id = this.userinfo.account_oid;
					this.userinfo = res.data;
					this.userinfo.account_oid = id;
				} else {

				}
			},
		}
	};
</script>