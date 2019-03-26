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
									<section class="text-center g-mb-30 g-mb-50--md">
										<div class="d-inline-block g-pos-rel g-mb-20">
											<a class="u-badge-v2--lg u-badge--bottom-right g-width-32 g-height-32 g-bg-secondary g-bg-primary--hover g-transition-0_3 g-mb-20 g-mr-20"
											 href="#!" @click="changeCompanyLogo()">
												<i class="hs-admin-pencil g-absolute-centered g-font-size-16 g-color-white"></i>
											</a>
											<img class="img-fluid" :src="company_core.logo" alt="Image description">
										</div>

										<h3 class="g-font-weight-300 g-font-size-20 g-color-black mb-0"> {{company_core.company_name}}</h3>
									</section>
									<!-- User Information -->
									<!-- 资料完成率-->
									<section class="g-mb-30 g-mb-50--md">
										<h4 class="media h6 g-font-weight-400 g-mb-15">
											<span class="d-flex align-self-center g-color-gray-dark-v6">资料完成率</span>
											<span class="media-body align-self-center text-right g-color-gray-dark-v6">{{company_core.complete_rate}}%</span>
										</h4>

										<div class="progress g-height-4 g-rounded-2">
											<div class="progress-bar g-bg-lightblue-v3 g-rounded-3" role="progressbar" style="width: 60%" aria-valuenow="60"
											 aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</section>
									<!-- End 资料完成率 -->
									<!-- Profile Sidebar -->
									<section>
										<ul class="list-unstyled mb-0">
											<li class="g-brd-top g-brd-gray-light-v7 mb-0">
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15 active" href="/c/edit.html">
													<span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
														<i class="hs-admin-user"></i>
													</span>
													<span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">基本信息</span>
												</a>
											</li>
											<li class="g-brd-top g-brd-gray-light-v7 mb-0">
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15" href="/c/edit_introduction.html">
													<span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
														<i class="hs-admin-write"></i>
													</span>
													<span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">公司介绍</span>
												</a>
											</li>
											<li class="g-brd-top g-brd-gray-light-v7 mb-0">
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15" href="/c/edit_info.html">
													<span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
														<i class="hs-admin-medall"></i>
													</span>
													<span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">联系信息</span>
												</a>
											</li>
											<li class="g-brd-top g-brd-gray-light-v7 mb-0">
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15" href="/c/edit_strength.html">
													<span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
														<i class="hs-admin-mobile"></i>
													</span>
													<span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">研发实力</span>
												</a>
											</li>
											<li class="g-brd-top g-brd-gray-light-v7 mb-0">
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15" href="/c/edit_certificate.html">
													<span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
														<i class="hs-admin-image"></i>
													</span>
													<span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">公司证书</span>
												</a>
											</li>
											<li class="g-brd-top g-brd-gray-light-v7 mb-0">
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15" href="/c/edit_gallery.html">
													<span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
														<i class="hs-admin-wallet"></i>
													</span>
													<span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">公司图库</span>
												</a>
											</li>
											<li class="g-brd-top g-brd-gray-light-v7 mb-0">
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15" href="/c/edit_file.html">
													<span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
														<i class="hs-admin-loop"></i>
													</span>
													<span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">公司文件</span>
												</a>
											</li>
											<li class="g-brd-top g-brd-gray-light-v7 mb-0">
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15" href="/c/edit_sffiliated.html">
													<span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
														<i class="hs-admin-lock"></i>
													</span>
													<span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">业务关联公司</span>
												</a>
											</li>
											<li class="g-brd-top g-brd-gray-light-v7 mb-0">
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15" href="/c/edit_employees.html">
													<span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
														<i class="hs-admin-id-badge"></i>
													</span>
													<span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">公司人员管理</span>
												</a>
											</li>
										</ul>
									</section>
									<!-- End Profile Sidebar -->
								</div>
							</div>
							<div class="col-md-9">
								<div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-20--md">
									<div class="js-validate">
										<header>
											<h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">基本信息</h2>
										</header>

										<hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-30--md">

										<div class="row g-mb-20">
											<div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
												<label class="mb-0" for="#firstName">公司名称</label>
											</div>

											<div class="col-md-9 align-self-center">
												<div class="form-group g-pos-rel mb-0">
													<span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
														<i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
													</span>
													<input id="firstName" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
													 type="text" name="text" placeholder="公司名称" required="required" data-msg="This field is mandatory"
													 data-error-class="u-has-error-v3" data-success-class="has-success" aria-required="true" v-model="company_core.company_name">
												</div>
											</div>
										</div>

										<div class="row g-mb-20">
											<div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
												<label class="mb-0" for="#lastName">Company English Name</label>
											</div>

											<div class="col-md-9 align-self-center">
												<div class="form-group g-pos-rel mb-0">
													<span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
														<i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
													</span>
													<input id="lastName" name="text" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
													 type="text" placeholder="Company English Name" v-model="company_core.company_eng_name" required="required"
													 data-msg="This field is mandatory" data-error-class="u-has-error-v3" data-success-class="has-success"
													 aria-required="true">
												</div>
											</div>
										</div>

										<div class="row g-mb-20">
											<div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
												<label class="mb-0">公司缩略名</label>
											</div>

											<div class="col-md-9 align-self-center">
												<div class="form-group g-pos-rel mb-0">
													<span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
														<i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
													</span>
													<input name="text" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
													 type="text" placeholder="公司缩略名" v-model="company_core.company_short_name" required="required" data-msg="This field is mandatory"
													 data-error-class="u-has-error-v3" data-success-class="has-success" aria-required="true">
												</div>
											</div>
										</div>

										<div class="row g-mb-20">
											<div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
												<label class="mb-0">公司标签</label>
											</div>

											<div class="col-md-9 align-self-center">
												<div class="form-group g-pos-rel mb-0">
													<span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
														<i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
													</span>
													<input id="lastName" name="lastName" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
													 type="text" placeholder="多个标签之间以逗号隔开" v-model="company_core.tags" required="required" data-msg="This field is mandatory"
													 data-error-class="u-has-error-v3" data-success-class="has-success" aria-required="true">
												</div>
											</div>
										</div>

										<hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-30--md">

										<div class="g-mb-20">
											<div class="g-mb-20">
												<label class="mb-0">公司类别</label>
											</div>
											<label class="form-check-inline u-check g-pl-25 ml-0 g-mr-25">
												<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" :checked="company_core.company_type==0"
												 @change="company_core.company_type=0">
												<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
													<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
												</div>
												有限责任公司
											</label>

											<label class="form-check-inline u-check g-pl-25 ml-0 g-mr-25">
												<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" :checked="company_core.company_type==1"
												 @change="company_core.company_type=1">
												<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
													<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
												</div>
												股份制公司
											</label>

											<label class="form-check-inline u-check g-pl-25 ml-0 g-mr-25">
												<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" :checked="company_core.company_type==2"
												 @change="company_core.company_type=2">
												<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
													<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
												</div>
												集团公司
											</label>

											<label class="form-check-inline u-check g-pl-25 ml-0">
												<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" :checked="company_core.company_type==3"
												 @change="company_core.company_type=3">
												<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
													<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
												</div>
												一人制公司
											</label>

											<label class="form-check-inline u-check g-pl-25 ml-0">
												<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" :checked="company_core.company_type==4"
												 @change="company_core.company_type=4">
												<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
													<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
												</div>
												高校
											</label>

											<label class="form-check-inline u-check g-pl-25 ml-0">
												<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" :checked="company_core.company_type==5"
												 @change="company_core.company_type=5">
												<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
													<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
												</div>
												研究所
											</label>
										</div>

										<hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-30--md">

										<div class="g-mb-20">
											<div class="g-mb-20">
												<label class="mb-0">公司角色</label>
											</div>
											<label class="form-check-inline u-check g-pl-25 ml-0 g-mr-25">
												<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" name="comrole" :checked="company_core.company_role==0"
												 @change="company_core.company_role=0">
												<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
													<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
												</div>
												生产商
											</label>

											<label class="form-check-inline u-check g-pl-25 ml-0 g-mr-25">
												<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" name="comrole" :checked="company_core.company_role==1"
												 @change="company_core.company_role=1">
												<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
													<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
												</div>
												经销商
											</label>

											<label class="form-check-inline u-check g-pl-25 ml-0 g-mr-25">
												<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" name="comrole" :checked="company_core.company_role==2"
												 @change="company_core.company_role=2">
												<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
													<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
												</div>
												集成服务
											</label>

											<label class="form-check-inline u-check g-pl-25 ml-0">
												<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" name="comrole" :checked="company_core.company_role==3"
												 @change="company_core.company_role=3">
												<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
													<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
												</div>
												个人服务
											</label>

											<label class="form-check-inline u-check g-pl-25 ml-0">
												<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" name="comrole" :checked="company_core.company_role==4"
												 @change="company_core.company_role=4">
												<div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
													<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
												</div>
												代理商
											</label>
										</div>

										<hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-30--md">

										<div class="g-mb-20">
											<div class="g-mb-20">
												<label class="mb-0">服务领域</label>

											</div>
											<div class="inline-group">
												<label class="form-check-inline u-check g-pl-25" v-for="(item,index) in service_regions" :key="index">
													<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox" :id="item.enum_code" :checked="checkedServiceRegion(item.enum_code)"
													 @change="serviceRegionCheckboxClick($event.target.checked,item.enum_code)">
													<div class="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
														<i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
													</div>
													{{item.enum_name}}
												</label>
											</div>
										</div>
										<div class="g-mt-50">
											<a class="btn btn-xl u-btn-secondary g-font-size-default g-px-40" href="javascript:void(0);" @click="saveCompanyCore">提交</a>
										</div>
									</div>
								</div>
							</div>
							<div class="modal" id="companylogo_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header g-flex">
											<h4 class="modal-title" id="myModalLabel">修改公司logo</h4>
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
												&times;
											</button>
										</div>
										<div class="modal-body">
											<!-- imgcopper widget grid -->
											<ElImgCopper id="companylogo" arlockratio="2" @imgCutCallback="onCompanyImageCropper"></ElImgCopper>
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

	import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
	import ElImgCopper from "components/el-ImgCopper/el-ImgCopper";
	import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";
	import ElUEditor from "components/el-UEditor/el-UEditor";

	export default {
		name: "app",
		data: function () {
			return {
				user_type: "",
				validator: null,
				company_core: {
					logo: "/assets/common/img/com_default.jpg",
					registered_date: null,
					tags: null
				},
				company_detail: {
					country: "00",
					contact_zip: "000000"
				},
				company_attachments: [],
				related_companies: [],
				newRelatedCompany: {},

				provinces: [],
				cities: [],
				all_staffs: [],
				research_staffs: [],
				service_regions: [],

				uploader: null,
				upload_attachment: {},
				attchTypes: [],

				allcompanynames: [],
				change_select_company: {},

				functionlist: [],

				default_role: {},
				userrolesshow: [],
				userroles: [],
				allroles: [],
			};
		},
		components: {
			ElPageFrame,
			ElBlockAlert,
			ElImgCopper,
			ElToastAlert,
			ElUEditor
		},
		created: function () {
			this.user_type = $.getUrlParam("t");
			var company_oid = $.getUrlParam("id");
			//if(this.user_type=='self'||(company_oid!=undefined&&company_oid.length>0)){
			this.getCompanyInfo(company_oid);
			//}
			//初始化 获取公司列表
			$.post_json(
				appsettings.apiroot + "company/intellisense",
				null,
				this.acompanyTypeAheadInit
			);
			//获取省列表
			$.post_json(
				appsettings.apiroot + "utility/province/retrieve",
				null,
				res => (this.provinces = res.data)
			);
			var country_body = {
				global_enum_id: "country"
			};
			$.post_json(
				appsettings.apiroot + "utility/globalenum/retrieve",
				country_body,
				res => (this.countries = res.data)
			);
			var all_staff_body = {
				global_enum_id: "all_staff"
			};
			$.post_json(
				appsettings.apiroot + "utility/globalenum/retrieve",
				all_staff_body,
				res => (this.all_staffs = res.data)
			);
			var research_staff_body = {
				global_enum_id: "research_staff"
			};
			$.post_json(
				appsettings.apiroot + "utility/globalenum/retrieve",
				research_staff_body,
				res => (this.research_staffs = res.data)
			);
			var profession_body = {
				global_enum_id: "profession"
			};
			$.post_json(
				appsettings.apiroot + "utility/globalenum/retrieve",
				profession_body,
				res => (this.service_regions = res.data)
			);

			$.post_json(
				appsettings.apiroot + "account/userfunction", {
					pageid: "user2_account_edit"
				},
				this.functionlist_callback
			);
		},
		mounted: function () {
			var self = this;
			setTimeout(function () {
				//配置validate组件
				this.validator = ValidateConfig({
					formid: "query-form",
					rules: {
						text: {
							required: true
						},
						phone: {
							required: {
								depends: function () {
									//二选一
									return $("input[name=email]").val().length <= 0;
								}
							},
							isMobile: true
						},
						email: {
							required: {
								depends: function () {
									//二选一
									return $("input[name=phone]").val().length <= 0;
								}
							},
							email: true
						},
						country: {
							required: true
						},
						checkboxinline: {
							//minlength表示必须选中的最小个数,maxlength表示最大的选中个数,rangelength:[2,3]表示选中个数区间
							required: true,
							minlength: 1
						}
					},
					messages: {
						email: {
							required: "Please enter your phone number or email address",
							email: "Please enter a VALID email address"
						},
						phone: {
							required: "Please enter your phone number or email address",
							isMobile: "Please enter VALID phone number"
						},
						country: {
							required: "Please select your country"
						},
						checkboxinline: {
							required: "Please select one checkbox value at least"
						}
					}
				});


			}, 0);
		},
		methods: {
			setContent: function (ref, content) {

				var self = this;
				var interval = null;
				var loop = function () {
					innerFunc(ref, content);
				};
				var innerFunc = function (ref, content) {
					var uename = ref;
					if (
						self.$refs[uename] != null &&
						self.$refs[uename].editor != null &&
						self.$refs[uename].editor != undefined &&
						self.$refs[uename].editor.isReady > 0
					) {
						window.clearInterval(interval);
						self.$refs[uename].setUEContent(content);
					}
				};
				interval = setInterval(loop, 3000);
			},
			changeCompanyLogo: function () {
				setTimeout(() => {
					$("#companylogo_modal").modal({
						backdrop: "static",
						keyboard: false
					});
				}, 0);
			},
			companyChanged: function (company) {
				this.change_select_company = JSON.parse(JSON.stringify(company));
			},
			functionlist_callback: function (res) {
				if (res.status == 0) {
					var funlist = res.data.functions;
					this.functionlist.splice(0, this.functionlist.length);
					for (var i = 0; i < funlist.length; i++) {
						this.functionlist.push(funlist[i].function_code);
					}
				}
			},

			getCompanyInfo: function (company_id) {
				//this.$refs.pf.hideLoading();
				var body = {
					company_oid: company_id
				};
				$.post_json(
					appsettings.apiroot + "admin/company/info/core",
					body,
					this.companyCoreInfoRender
				);
				$.post_json(
					appsettings.apiroot + "admin/company/info/detail",
					body,
					this.companyDetailInfoRender
				);
				$.post_json(
					appsettings.apiroot + "admin/company/attachment/retrieve",
					body,
					this.companyAttachmentRender
				);
				$.post_json(
					appsettings.apiroot + "home/company/related/retrieve", {
						company_oid: company_id,
						statuses: "0"
					},
					this.relatedCompanyRender
				);
			},
			companyCoreInfoRender: function (res) {
				this.company_core = res.data;
				console.log(this.company_core)
				this.setContent("ueditor", this.company_core.introduction);
			},

			companyDetailInfoRender: function (res) {
				this.company_detail = res.data;
				//初始获取公司所在省份的城市列表
				var body = {
					provincecode: this.company_detail.contact_zip.substring(0, 2) + "0000"
				};
				$.post_json(
					appsettings.apiroot + "utility/city/retrieve",
					body,
					res => (this.cities = res.data)
				);
			},

			companyAttachmentRender: function (res) {
				this.company_attachments = res.data || [];
			},

			relatedCompanyRender: function (res) {
				this.related_companies = res.data.datalist;
			},

			acompanyTypeAheadInit: function (res) {
				//初始化智能感知组件
				// this.allcompanynames = res.data;
				// var that = this;
				// 	$('.change_company').typeahead({
				//     		source: that.allcompanynames,
				//     		//autoSelect: false,//允许你决定是否自动选择第一个建议。关闭它意味着如果没有选择任何内容（或Enter或Tab），输入将不会清空。
				//     		matcher: function (item) {
				//         		return true;
				//     		},
				//     		updater: function (item) {
				//         		that.change_select_company = JSON.parse(JSON.stringify(item));//值传递 防止修改change_select_company的同时 修改了元数据item
				//     		}
				// 		});
			},


			refreshInfoFactor: function () {
				var body = {
					company_oid: this.company_core.oid
				};
				$.post_json(
					appsettings.apiroot + "admin/company/info/factor",
					body,
					res => (this.company_core.info_factor = res.data.info_factor)
				);
			},

			saveCompanyCore: function () {
				{
					this.company_core.tags = (this.company_core.tags || "").replace("，", ",");
					if (this.company_core.oid == null) {
						$.post_json(
							appsettings.apiroot + "home/company/create",
							this.company_core,
							this.saveCompanyCoreCallback
						);
					} else {
						$.post_json(
							appsettings.apiroot + "home/company/core/update",
							this.company_core,
							this.saveCompanyCoreCallback
						);
					}
				}
			},

			saveCompanyCoreCallback: function (res) {
				if (res.status == 0) {
					//.company_detail.company_oid = this.company_core.oid = res.data.oid;
					this.$refs.pf.confirmShow({
						title: "提交成功",
						msg: "公司基本信息修改提交成功",
						only_alert: true
					});
				} else {
					this.$refs.toastAlert.config = {
						type: "error",
						title: "错误",
						msg: res.message
					};
				}
			},




			onCompanyImageCropper: function (imgbase64) {
				{
					var body = {
						company_oid: this.company_core.oid,
						base64: imgbase64.split(",")[1]
					};
					$.post_json(
						appsettings.apiroot + "home/company/logo/update",
						body,
						this.uploadlogoRender
					);
				}
			},

			uploadlogoRender: function (res) {
				$("#companylogo_modal").modal("hide");

				if (res.status == 0) {
					var that = this;
					setTimeout(() => {
						this.$refs.pf.confirmShow({
							title: "提交成功",
							msg: "公司Logo修改提交成功",
							only_alert: true
						});
						that.company_core.logo = res.data + "?t=" + Math.random();
					}, 1500);
				} else {
					this.$refs.toastAlert.showToast("error", "错误", res.message);
				}
			},

			checkedServiceRegion: function (region_code) {
				if (this.company_detail.service_region != undefined) {
					if (
						this.company_detail.service_region.split(",").indexOf(region_code) >=
						0
					) {
						return true;
					} else {
						return false;
					}
				}
			},
			serviceRegionCheckboxClick: function (ischecked, region_code) {
				if (ischecked == true) {
					if (this.company_detail.service_region != undefined) {
						if (
							this.company_detail.service_region
							.split(",")
							.indexOf(region_code) >= 0
						) {} else {
							this.company_detail.service_region += "," + region_code;
						}
					} else {
						this.company_detail.service_region = region_code;
					}
				} else {
					var regions = this.company_detail.service_region.split(",");
					if (regions.indexOf(region_code) >= 0) {
						var i = regions.indexOf(region_code);
						regions.splice(i, 1); //返回值为所删除的项目！所以完不可赋值个原来的array
						this.company_detail.service_region = regions.join(",");
					}
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

	body.smart-style-6 .dropdown-menu {
		transform: scale(1);
		opacity: 100;
	}
</style>