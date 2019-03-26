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
											<img class="img-fluid rounded-circle" :src="company_core.logo" alt="Image description">
										</div>

										<h3 class="g-font-weight-300 g-font-size-20 g-color-black mb-0"> {{company_core.company_name}}</h3>
									</section>
									<!-- User Information -->
									<!-- 资料完成率-->
									<section class="g-mb-30 g-mb-50--md">
										<h4 class="media h6 g-font-weight-400 g-mb-15">
											<span class="d-flex align-self-center g-color-gray-dark-v6">资料完成率</span>
											<span class="media-body align-self-center text-right g-color-gray-dark-v6">75%</span>
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
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15" href="/c/edit.html">
													<span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
														<i class="hs-admin-user"></i>
													</span>
													<span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">基本信息</span>
												</a>
											</li>
											<li class="g-brd-top g-brd-gray-light-v7 mb-0">
												<a class="d-flex align-items-center u-link-v5 g-parent g-py-15 active" href="/c/edit_introduction.html">
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
								<div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md">
									<header>
										<h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">公司介绍</h2>
									</header>

									<hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-25--md">

									<div>
										<div class="g-mb-20">
											<label class="g-mb-10">经营范围</label>
											<div class="form-group mb-0">
												<textarea id="bio" class="form-control form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12"
												 rows="3" placeholder="经营范围" v-model="company_core.business_region"  style= "overflow:hidden;overflow-y: scroll;"></textarea>
											</div>
										</div>

										<div>
											<label class="g-mb-10">公司视频</label>
											<form>
												<div class="g-mb-20">
													<input class="js-file-attachment1" type="file" name="fileAttachvideo[]">
												</div>
											</form>
										</div>

										<div class="g-mb-20">
											<label class="g-mb-10">公司简介</label>
											<div class="form-group mb-0">
												<ElUEditor ref="ueditor" id="com_intro" :code="'2'"></ElUEditor>
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
	import ElCompanyIntellisense from "components/el-CompanyIntellisense/el-CompanyIntellisense";
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
			ElCompanyIntellisense,
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

				$("#new-certification-modal").on("show.bs.modal", function (e) {
					//model 弹出事件 弹出上传附件窗口时 初始化uploader
					self.InitUploader();
				});

				$("#new-certification-modal").on("hide.bs.modal", function (e) {
					//model 隐藏事件 隐藏上传附件窗口时 销毁uploader
					self.DestroyUploader();
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
			changeCompanyLogo: function () {
				setTimeout(() => {
					$("#accountpicture_modal").modal({
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
					this.company_core.introduction = this.$refs.ueditor.getUEContent();
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
					this.company_detail.company_oid = this.company_core.oid = res.data.oid;
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

			saveCompanyDetail: function () {
				if (
					this.company_core.oid == undefined ||
					this.company_core.oid.length == 0
				) {
					this.$refs.pf.confirmShow({
						title: "该公司不存在",
						msg: "请维护公司基本信息",
						only_alert: true
					});
				} else {
					$.post_json(
						appsettings.apiroot + "home/company/detail/update",
						this.company_detail,
						this.saveCompanyDetailCallback
					);
				}
			},

			saveCompanyDetailCallback: function (res) {
				if (res.status == 0) {
					this.$refs.pf.confirmShow({
						title: "提交成功",
						msg: "公司详细信息修改提交成功",
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

			onAllStuffChange: function (e) {
				//获取该省城市列表
				this.company_detail.all_staff = e.currentTarget.value;
			},

			onResearchStuffChange: function (e) {
				//获取该省城市列表
				this.company_detail.research_staff = e.currentTarget.value;
			},

			onCountryChange: function (e) {
				//获取该省城市列表
				this.company_detail.country = e.currentTarget.value;
			},

			getProvinceCode: function () {
				if (this.company_detail.contact_zip == undefined) {
					return "000000";
				} else {
					return this.company_detail.contact_zip.substring(0, 2) + "0000";
				}
			},

			onProvinceChange: function (e) {
				//获取该省城市列表
				this.company_detail.contact_zip = e.currentTarget.value;
				var body = {
					provincecode: e.currentTarget.value
				};
				$.post_json(
					appsettings.apiroot + "utility/city/retrieve",
					body,
					this.citiesRender
				);
			},

			citiesRender: function (res) {
				this.cities = res.data;
				this.onSltCitiesChanged();
			},

			getDeraultCityCode: function () {
				if (this.company_detail.contact_zip == undefined) {
					return "000000";
				} else {
					return this.company_detail.contact_zip.substring(0, 2) + "0000";
				}
			},

			onSltCitiesChanged: function () {
				setTimeout(() => {
					$(".chosen-select").trigger("chosen:updated");
				}, 0);
			},

			onCityChange: function (e) {
				//绑定选择的城市
				this.company_detail.contact_zip = e.currentTarget.value;
			},

			deleteAttachment: function (attachment) {
				that = this;
				// this.$refs.pf.confirmShow({
				//   title: "删除附件",
				//   msg: "确定要删除附件【" + attachment.file_name + "】吗？",
				//   data: attachment,
				//   success: that.doDelete
				// });
				that.doDelete({
					confirm: true,
					data: attachment
				});
			},

			doDelete: function (res) {
				if (res.confirm == true) {
					var attachment4delete = JSON.parse(JSON.stringify(res.data));
					$.post_json(
						appsettings.apiroot + "admin/company/attachment/delete",
						attachment4delete,
						this.deleteAttachmentRender,
						res.data
					);
					this.$refs.pf.showLoading("正在删除....");
				}
			},

			deleteAttachmentRender: function (res, p) {
				this.$refs.pf.hideLoading();
				if (res.status == 0) {
					//从页面上删除
					this.company_attachments.splice(this.company_attachments.indexOf(p), 1);
					this.$refs.pf.confirmShow({
						title: "删除成功！",
						msg: "",
						only_alert: true
					});
				} else {
					//提示错误信息
					this.$refs.toastAlert.config = {
						type: "error",
						title: "错误",
						msg: res.message
					};
				}
			},

			onNewAttachmentClick: function () {
				if (
					this.company_core.oid == undefined ||
					this.company_core.oid.length == 0
				) {
					this.$refs.pf.confirmShow({
						title: "该公司不存在",
						msg: "请维护公司基本信息",
						only_alert: true
					});
					$("#new-certification-modal").modal("hide");
				} else {
					//初始化webuploader
					$("#new-certification-modal").modal("show");
				}
			},

			chosefile: function (id) {
				this.resetUploaderAttList(id);
				$("#selectfile input").click();
			},

			persistAttachment: function (file_name, file_oid, des_enum_code) {
				this.upload_attachment.oid = file_oid;
				this.upload_attachment.file_name = file_name.substring(
					0,
					file_name.lastIndexOf(".")
				);
				this.upload_attachment.file_type = file_name.replace(/.+\./, "");
				this.upload_attachment.company_oid = this.company_core.oid;
				this.upload_attachment.description = des_enum_code;
				//附件记录持久化
				$.post_json(
					appsettings.apiroot + "admin/company/attachment/create",
					this.upload_attachment,
					this.persistAttachmentCallback
				);
			},

			persistAttachmentCallback: function (res) {
				if (res.status == 0) {
					//通知主页面更新
					this.company_attachments.push(res.data);
				} else {
					this.$refs.toastAlert.config = {
						type: "error",
						title: "错误",
						msg: res.message
					};
				}
			},

			InitUploader: function () {
				var self = this;
				this.uploader = WebUploader.create({
					// swf文件路径
					swf: appsettings.gyhpluginsPrefix + "webuploader/Uploader.swf",
					// 文件接收服务端。
					server: appsettings.apiroot + "admin/company/attachment/upload",
					chunked: true,
					threads: 1,
					fromData: {
						guid: "guid"
					},
					// 选择文件的按钮。可选。
					// 内部根据当前运行是创建，可能是input元素，也可能是flash.
					pick: "#selectfile",
					// 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
					resize: false,
					//fileNumLimit:1,
					chunkSize: 4000880
				});
				this.uploader.on("uploadProgress", function (file, percentage) {
					$("#" + file.id)
						.find("span.state")
						.html((percentage * 100 + "").substring(0, 5) + "%");
				});
				this.uploader.on("uploadSuccess", function (file, response) {
					$("#" + file.id)
						.find("span.state")
						.text("已上传");
					var file_des = $("#" + file.id)
						.find("span.state")
						.attr("data-atttype");
					self.persistAttachment(file.name, JSON.parse(response).data, file_des);
				});
				this.uploader.on("uploadError", function (file) {
					$("#" + file.id)
						.find("span.state")
						.text("上传出错");
				});
			},

			resetUploaderAttList: function (attlistid) {
				var atttype = null;
				switch (attlistid) {
					case "att_list1":
						atttype = 0;
						break;
					case "att_list2":
						atttype = 1;
						break;
					case "att_list3":
						atttype = 2;
						break;
					case "att_list4":
						atttype = 3;
						break;
					case "att_list5":
						atttype = 4;
						break;
					default:
						break;
				}
				// 当有文件被添加进队列的时候
				this.uploader.off("fileQueued", null);
				this.uploader.on("fileQueued", function (file) {
					$("#" + attlistid).append(
						'<div id="' +
						file.id +
						'" class="item">' +
						'<span class="info">' +
						file.name +
						"</span>" +
						'<span class="state" data-atttype=' +
						atttype +
						' id="upstate' +
						file.id +
						'">等待上传...</span>' +
						"</div>"
					);
				});
			},

			DestroyUploader: function () {
				$(".uploader-list").empty();
				$("#selectfile").empty();
				this.uploader.destroy();
			},

			uploadAttachmentClick: function () {
				this.uploader.options.formData.guid = Math.random();
				this.uploader.options.formData.token = localStorage.getItem("token");
				this.uploader.upload();
			},

			callback_allrole: function (res) {
				if (res != null && res.status == 0) {
					this.allroles = res.data;
					var id = $.getUrlParam("id");
					if (id != undefined && id.length > 0) {
						$.post_json(
							appsettings.apiroot + "account/user/role/retrieve", {
								user_oid: id
							},
							this.callback_userrole
						);
					}
				} else {
					this.$refs.pf.confirmShow({
						title: "查询失败：",
						msg: res.message,
						only_alert: true
					});
				}
			},

			relatedCompanyChanged: function (company) {
				this.newRelatedCompany.related_company_oid = company.id;
				this.newRelatedCompany.company_name = company.name;
			},

			newRelatedCompanyClick: function () {
				if (
					this.company_core.oid == undefined ||
					this.company_core.oid.length == 0
				) {
					this.$refs.pf.confirmShow({
						title: "尚未创建公司",
						msg: "请维护公司基本信息",
						only_alert: true
					});
					return;
				} else {
					this.newRelatedCompany.company_oid = this.company_core.oid;
					//判断公司名称是否存在
					if (this.newRelatedCompany.related_company_oid == undefined || this.newRelatedCompany.related_company_oid.length ==
						0) {
						if (this.newRelatedCompany.company_name == undefined || this.newRelatedCompany.company_name.length == 0) {
							this.$refs.toastAlert.config = {
								type: "error",
								title: "请填写关联的公司"
							};
							this.$refs.toastAlert.show = true;
							return;
						}
					}
					//判断关系是否选中
					if (this.newRelatedCompany.relation_type == undefined || this.newRelatedCompany.relation_type.length == 0) {
						this.$refs.toastAlert.config = {
							type: "error",
							title: "请选择关联关系"
						};
						this.$refs.toastAlert.show = true;
						return;
					}

					$.post_json(
						appsettings.apiroot + "home/company/related/create",
						this.newRelatedCompany,
						this.newRelatedCompanyRender
					);
					this.$refs.pf.showLoading("提交中....");
				}
			},
			newRelatedCompanyRender: function (res) {
				this.$refs.pf.hideLoading();
				if (res.status == 0) {
					//从页面上删除
					this.related_companies.push(res.data);
					this.$refs.toastAlert.config = {
						type: "success",
						title: "关联公司成功"
					};
					this.$refs.toastAlert.show = true;
				} else {
					//提示错误信息
					this.$refs.toastAlert.config = {
						type: "error",
						title: "错误",
						msg: res.message
					};
					this.$refs.toastAlert.show = true;
				}
			},

			deleteRelatedCompany: function (relcom) {
				that = this;
				this.$refs.pf.confirmShow({
					title: "删除关联公司",
					msg: "确定要删除公司【" + relcom.company_name + "】吗？",
					data: relcom,
					success: that.doDeleteRelatedCompany
				});
				// that.doDeleteRelatedCompany({
				// 	data: relcom
				// });
			},

			doDeleteRelatedCompany: function (res) {
				if (res.confirm == true) {
					var relcom4delete = JSON.parse(JSON.stringify(res.data));
					$.post_json(
						appsettings.apiroot + "home/company/related/delete",
						relcom4delete,
						this.deleteRelatedCompanyRender,
						res.data
					);
					this.$refs.pf.showLoading("正在删除....");
				}
			},

			deleteRelatedCompanyRender: function (res, p) {
				this.$refs.pf.hideLoading();
				if (res.status == 0) {
					//从页面上删除
					this.related_companies.splice(this.related_companies.indexOf(p), 1);
					this.$refs.pf.confirmShow({
						title: "删除成功！",
						msg: "",
						only_alert: true
					});
				} else {
					//提示错误信息
					this.$refs.toastAlert.config = {
						type: "error",
						title: "错误",
						msg: res.message
					};
					this.$refs.toastAlert.show = true;
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