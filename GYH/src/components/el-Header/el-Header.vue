<template>
	<!-- #HEADER -->
	<!-- <div id="header">
		<div id="logo-group">
			<span>
				<a :href="appsettings.portal_root">
					<img class="logo" :src="appsettings.imgPrefix+'logo-w.png'" alt="工业汇">
				</a>
			</span>

		</div>
		<div class="pull-right">
			<div id="hide-menu" class="btn-header pull-right">
				<span>
					<a href="javascript:void(0);" data-action="toggleMenu" title="Collapse Menu">
						<i class="fa fa-reorder"></i>
					</a>
				</span>
			</div>
			<ul id="mobile-profile-img" class="header-dropdown-list hidden-xs padding-5">
				<li class="">
					<a href="#" class="dropdown-toggle no-margin userdropdown" data-toggle="dropdown">
						<img :src="appsettings.imgPrefix+'avatars/sunny.png'" alt="John Doe" class="online" />
					</a>
					<ul class="dropdown-menu pull-right">
						<li>
							<a href="javascript:void(0);" class="padding-10 padding-top-0 padding-bottom-0">
								<i class="fa fa-cog"></i> Setting</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="#ajax/profile.html" class="padding-10 padding-top-0 padding-bottom-0">
								<i class="fa fa-user"></i>
								<u>P</u>rofile</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="javascript:void(0);" class="padding-10 padding-top-0 padding-bottom-0" data-action="toggleShortcut">
								<i class="fa fa-arrow-down"></i>
								<u>S</u>hortcut</a>
						</li>
						<li class="divider"></li>
						<li>
							<a href="javascript:void(0);" class="padding-10 padding-top-0 padding-bottom-0" data-action="launchFullscreen">
								<i class="fa fa-arrows-alt"></i> Full
								<u>S</u>creen</a>
						</li>
						<li class="divider"></li>
						<li>
							<a :href="appsettings.login_url+'&action=logout'" class="padding-10 padding-top-5 padding-bottom-5" data-action="userLogout">
								<i class="fa fa-sign-out fa-lg"></i>
								<strong>
									<u>L</u>ogout</strong>
							</a>
						</li>
					</ul>
				</li>
			</ul>
			<div id="logout" class="btn-header transparent pull-right">
				<span>
					<a href="javascript:void(0);" @click="logout()">
						<i class="fa fa-sign-out"></i>
					</a>
				</span>
			</div>
			<div id="search-mobile" class="btn-header transparent pull-right">
				<span>
					<a href="javascript:void(0)" title="Search">
						<i class="fa fa-search"></i>
					</a>
				</span>
			</div>
			<div id="fullscreen" class="btn-header transparent pull-right">
				<span>
					<a href="javascript:void(0);" data-action="launchFullscreen" title="全屏">
						<i class="fa fa-arrows-alt"></i>
					</a>
				</span>
			</div>

		</div>
		<a :href="newUrl" id="opennewpage" style="width:0;height:0;" target="_blank"></a>

		<ElConfirmDialog ref="confirm"></ElConfirmDialog>
	</div> -->
	<!-- END HEADER -->


	<!-- Header -->
	<header id="js-header" class="u-header u-header--sticky-top">
		<div class="u-header__section u-header__section--admin-dark g-min-height-65">
			<nav class="navbar no-gutters g-pa-0">
				<div class="col-auto d-flex flex-nowrap u-header-logo-toggler g-py-12">
					<!-- Logo -->
					<a :href="appsettings.portal_root">
						<img class="logo" :src="appsettings.imgPrefix+'logo-w.png'" alt="工业汇">
					</a>
					<!-- End Logo -->

					<!-- Sidebar Toggler -->
					<a class="js-side-nav u-header__nav-toggler d-flex align-self-center ml-auto" href="#!" data-hssm-class="u-side-nav--mini u-sidebar-navigation-v1--mini"
					 data-hssm-body-class="u-side-nav-mini" data-hssm-is-close-all-except-this="true" data-hssm-target="#sideNav">
						<i class="hs-admin-align-left"></i>
					</a>
					<!-- End Sidebar Toggler -->
				</div>
				<!-- End Top Search Bar -->

				<!-- Messages/Notifications/Top Search Bar/Top User -->
				<div class="col-auto d-flex g-py-12 g-pl-40--lg ml-auto">
					<!-- Top User -->
					<div class="col-auto d-flex g-pt-5 g-pt-0--sm g-pl-10 g-pl-20--sm">
						<div class="g-pos-rel g-px-10--lg">
							<!-- User image size is adjusted inside CSS, it should stay as is -->
							<a id="profileMenuInvoker" class="d-block" href="javascript:void(0);" aria-controls="profileMenu" aria-haspopup="true"
							 aria-expanded="false" data-dropdown-event="click" data-dropdown-target="#profileMenu" data-dropdown-type="css-animation"
							 data-dropdown-duration="300" data-dropdown-animation-in="fadeIn" data-dropdown-animation-out="fadeOut">
								<span class="g-pos-rel">
									<span class="u-badge-v2--xs u-badge--top-right g-hidden-sm-up g-bg-secondary g-mr-5"></span>
									<img class="g-width-30 g-width-40--md g-height-30 g-height-40--md rounded-circle g-mr-10--sm" v-if="user.picture!=undefined" :src="appsettings.userimg+user.picture" alt="me">
								</span>
								<span class="g-pos-rel g-top-2">
									<span class="g-hidden-sm-down">{{user.nickname||user.privatename||user.user_mobile||user.user_email}}</span>
									<i class="hs-admin-angle-down g-pos-rel g-top-2 g-ml-10"></i>
								</span>
							</a>

							<!-- Top User Menu -->
							<ul id="profileMenu" class="g-pos-abs g-left-0 g-width-100x--lg g-nowrap g-font-size-14 g-py-20 g-mt-17 rounded"
                  aria-labelledby="profileMenuInvoker">
                  <li class="g-mb-10">
                    <a class="media g-color-primary--hover g-py-5 g-px-20" href="#!">
                      <span class="d-flex align-self-center g-mr-12">
                        <i class="hs-admin-user"></i>
                      </span>
                      <span class="media-body align-self-center">个人信息</span>
                    </a>
                  </li>
                  <li class="g-mb-10">
                    <a class="media g-color-primary--hover g-py-5 g-px-20" href="#!">
                      <span class="d-flex align-self-center g-mr-12">
                        <i class="hs-admin-rocket"></i>
                      </span>
                      <span class="media-body align-self-center">公司信息</span>
                    </a>
                  </li>
                  <li class="mb-0">
                    <a class="media g-color-primary--hover g-py-5 g-px-20" href="#!">
                      <span class="d-flex align-self-center g-mr-12">
                        <i class="hs-admin-shift-right"></i>
                      </span>
                      <span class="media-body align-self-center">注销</span>
                    </a>
                  </li>
                </ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</header>
	<!-- End Header -->

</template>
<script>
	import ElConfirmDialog from "components/el-ConfirmDialog/el-ConfirmDialog";
	import Vue from 'vue';
	export default {
		name: 'el-header',
		props: ["a", "b"],
		data: function () {
			return {
				keywords: "",
				query_data: {},
				view_hits: [],
				user: {},
				messages: {
					sys: [],
					pro: []
				},
				showing_msg_type: 'pro', //当前展示的未读消息类型
				msgcount: {},
				newUrl: "javascript:;"
			};
		},
		components: {
			ElConfirmDialog
		},
		mounted: function () {
			//  console.log("into mounted.");
		},
		created: function () {
			//console.log("into created。");
			this.query_data = {
				target_type: 2,
				CurrentPageIndex: 1,
				PageSize: 5,
			};
			$.post_json(appsettings.apiroot + "account/info/formobile", null, this.callback_retrieveuserinfo);
		},
		methods: {
			logout: function () {
				var url = appsettings.login_url + '&action=logout';

				that = this;
				this.$refs.confirm.confirmShow({
					title: "退出",
					msg: "是否退出当前账户？",
					success: function (res) {
						if (res.confirm === true) {
							window.localStorage.removeItem("token");
							window.location.href = url;
						}
					}
				});
			},
			callback_retrieveuserinfo: function (result) {
				if (result != null && result.status == 0) {
					this.user = result.data;
				} else {
					//failed
				}
			},
		}
	}
</script>
<style>
	.header-search>.searchbutton {
		background: 0 0;
		border: none;
		color: #6D6A69;
		font-size: 17px;
		height: 30px;
		line-height: 30px;
		margin: 0;
		padding: 0;
		position: absolute;
		right: 0;
		top: 10px;
		width: 30px;
		z-index: 2;
	}

	.logo {
		width: 60px;
		margin: 5px 5px 0 10px;
	}
</style>