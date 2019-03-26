<template>
	<div id="app">
		<ElPageFrame ref="pf"></ElPageFrame>

		<!-- MAIN PANEL -->
		<div id="main" role="main">

			<!-- RIBBON -->
			<div id="ribbon">

				<span class="ribbon-button-alignment">
					<span id="refresh" class="btn btn-ribbon" data-action="resetWidgets" data-title="refresh" rel="tooltip" data-placement="bottom"
					    data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings."
					    data-html="true">
						<i class="fa fa-refresh"></i>
					</span>
				</span>

				<!-- breadcrumb -->
				<ol class="breadcrumb">
					<li><a :href="appsettings.portal_root">首页</a></li>
					<li>我的消息</li>
				</ol>
				<!-- end breadcrumb -->

				<!-- You can also add more buttons to the
				ribbon for further usability

				Example below:

				<span class="ribbon-button-alignment pull-right">
				<span id="search" class="btn btn-ribbon hidden-xs" data-title="search"><i class="fa-grid"></i> Change Grid</span>
				<span id="add" class="btn btn-ribbon hidden-xs" data-title="add"><i class="fa-plus"></i> Add</span>
				<span id="search" class="btn btn-ribbon" data-title="search"><i class="fa-search"></i> <span class="hidden-mobile">Search</span></span>
				</span> -->

			</div>
			<!-- END RIBBON -->

			<!-- MAIN CONTENT -->
			<div id="content">

				<div class="inbox-nav-bar no-content-padding">

					<!-- <h1 class="page-title txt-color-blueDark hidden-tablet"><i class="fa fa-fw fa-inbox"></i> Inbox &nbsp;
						<span class="btn-group">
							<a href="#" data-toggle="dropdown" class="btn btn-default btn-xs dropdown-toggle"><span class="caret single"></span></a>
							<ul class="dropdown-menu">
								<li>
									<a href="#">Action</a>
								</li>
								<li>
									<a href="#">Another action</a>
								</li>
								<li>
									<a href="#">Something else here</a>
								</li>
								<li class="divider"></li>
								<li>
									<a href="#">Separated link</a>
								</li>
							</ul>
						</span>
					</h1> -->

					<!-- <div class="btn-group hidden-desktop visible-tablet">
						<button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
							Inbox <i class="fa fa-caret-down"></i>
						</button>
						<ul class="dropdown-menu pull-left">
							<li>
								<a href="javascript:void(0);" class="inbox-load">Inbox <i class="fa fa-check"></i></a>
							</li>
							<li>
								<a href="javascript:void(0);">Sent</a>
							</li>
							<li>
								<a href="javascript:void(0);">Trash</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="javascript:void(0);">Spam</a>
							</li>
						</ul>
				
					</div>
				 -->
					<div class="inbox-checkbox-triggered">

						<div class="btn-group">
							<a @click="setReadMsgs()" href="javascript:void(0);" rel="tooltip" title="" data-placement="bottom" data-original-title="标记为已读"
							    class="btn btn-default">
								<strong>
									<i class="fa fa-folder-open fa-lg"></i>
								</strong>
							</a>
							<a @click="deleteMsgs()" href="javascript:void(0);" rel="tooltip" title="" data-placement="bottom" data-original-title="删除"
							    class="deletebutton btn btn-default">
								<strong>
									<i class="fa fa-trash-o fa-lg"></i>
								</strong>
							</a>
						</div>

					</div>

					<a href="javascript:void(0);" id="compose-mail-mini" class="btn btn-primary pull-right hidden-desktop visible-tablet">
						<strong>
							<i class="fa fa-file fa-lg"></i>
						</strong>
					</a>

					<div class="btn-group pull-right inbox-paging">
						<a href="javascript:void(0);" class="btn btn-default btn-sm">
							<strong>
								<i class="fa fa-chevron-left"></i>
							</strong>
						</a>
						<a href="javascript:void(0);" class="btn btn-default btn-sm">
							<strong>
								<i class="fa fa-chevron-right"></i>
							</strong>
						</a>
					</div>
					<span class="pull-right">
						<!-- <strong>第{{page.page_index}}页</strong>
						<strong>共{{page.total_page_count}}页</strong> -->
					</span>

				</div>

				<div id="inbox-content" class="inbox-body no-content-padding">

					<div class="inbox-side-bar">

						<!-- <a href="javascript:void(0);" id="compose-mail" class="btn btn-primary btn-block"> <strong>Compose</strong> </a> -->

						<h3> 消息分类
							<a href="javascript:void(0);" data-placement="right" class="pull-right txt-color-darken">
								<i class="fa fa-refresh"></i>
							</a>
						</h3>

						<ul class="inbox-menu-lg">
							<li :class="active=='all'?'active':''">
								<a class="inbox-load" href="javascript:void(0);"> 全部 (14) </a>
							</li>
							<li :class="active=='pro'?'active':''">
								<a href="javascript:void(0);">产品</a>
							</li>
							<li :class="active=='user'?'active':''">
								<a href="javascript:void(0);">用户</a>
							</li>
							<li :class="active=='sys'?'active':''">
								<a href="javascript:void(0);">系统</a>
							</li>
						</ul>







						<!-- <div class="air air-bottom inbox-space">
				
							3.5GB of <strong>10GB</strong><a href="javascript:void(0);" rel="tooltip" title="" data-placement="top" data-original-title="Empty Spam" class="pull-right txt-color-darken"><i class="fa fa-trash-o fa-lg"></i></a>
				
							<div class="progress progress-micro">
								<div class="progress-bar progress-primary" style="width: 34%;"></div>
							</div>
						</div> -->

					</div>

					<div class="table-wrap custom-scroll animated fast fadeInRight">
						<h2 class="email-open-header">
							{{message.title}}
							<span class="label txt-color-white">inbox</span>
							<a href="javascript:void(0);" rel="tooltip" data-placement="left" data-original-title="Print" class="txt-color-darken pull-right">
								<i class="fa fa-print"></i>
							</a>
						</h2>

						<div class="inbox-info-bar">
							<div class="row">
								<div class="col-sm-9">
									<img src="img/avatars/5.png" alt="me" class="away">
									<strong>Sadi Orlaf</strong>
									<span class="hidden-mobile">&lt;sadi.orlaf@smartadmin.com&gt;to
										<strong>me</strong> on
										<i>12:10AM, 12 March 2013</i>
									</span>
								</div>
								<div class="col-sm-3 text-right">

									<div class="btn-group text-left">
										<button class="btn btn-primary btn-sm replythis">
											<i class="fa fa-reply"></i> Reply
										</button>
										<button class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">
											<i class="fa fa-angle-down"></i>
										</button>
										<ul class="dropdown-menu pull-right">
											<li>
												<a href="javascript:void(0);" class="replythis">
													<i class="fa fa-reply"></i> Reply</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="replythis">
													<i class="fa fa-mail-forward"></i> Forward</a>
											</li>
											<li>
												<a href="javascript:void(0);">
													<i class="fa fa-print"></i> Print</a>
											</li>
											<li class="divider"></li>
											<li>
												<a href="javascript:void(0);">
													<i class="fa fa-ban"></i> Mark as spam!</a>
											</li>
											<li>
												<a href="javascript:void(0);">
													<i class="fa fa-trash-o"></i> Delete forever</a>
											</li>
										</ul>
									</div>

								</div>
							</div>
						</div>

						<div class="inbox-message">
							<p>
								Hey James,
							</p>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
								ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
							</p>

							<p>
								Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
								voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
								velit.
								<i class="fa fa-smile-o"></i>
							</p>

							<br>
							<br> Thanks,
							<br>
							<strong>Sadi Orlaf</strong>
							<br>
							<br>
							<small>
								General Manager - Finance Department
								<br> 231 Ajax Rd, Detroit MI - 48212, USA
								<br>
								<i class="fa fa-phone"> (313) 647 6471</i>

							</small>
							<br>
							<img src="img/logo-blacknwhite.png" height="20" width="auto" style="margin-top:7px; padding-right:9px; border-right:1px dotted #9B9B9B;"
							/>
						</div>


					</div>

					<div class="inbox-footer">

						<div class="row">

							<div class="col-xs-6 col-sm-1">

								<div class="txt-color-white hidden-desktop visible-mobile">
									3.5GB of
									<strong>10GB</strong>

									<div class="progress progress-micro">
										<div class="progress-bar progress-primary" style="width: 34%;"></div>
									</div>
								</div>
							</div>

							<div class="col-xs-6 col-sm-11 text-right">
								<div class="txt-color-white inline-block">
									<i class="txt-color-blueLight hidden-mobile">Last account activity
										<i class="fa fa-clock-o"></i> 52 mins ago |</i> Displaying
									<strong>44 of 259</strong>
								</div>
							</div>

						</div>

					</div>

				</div>


			</div>
			<!-- END MAIN CONTENT -->

		</div>
		<!-- END MAIN PANEL -->

	</div>
</template>

<script>
	import "common/httputils"; //引用js
	import htmlutils from "common/htmlutils";
	import ElPageFrame from "components/el-PageFrame/el-PageFrame";
	import Vue from 'vue';
	export default {
		name: "app",
		data: function () {
			return {
				//数据
				id: "",
				message:{
					
				}
			};
		},
		components: {
			ElPageFrame
		},
		created: function () {
			//get msgs
			$.post_json(appsettings.apiroot + "message/my/unread", {}, this.callback_getMsgs);
		},
		mounted: function () {

		},
		computed: {

		},
		methods: {
			getMsgInfo: function () {
				$.post_json(appsettings.apiroot + "message/read", {
					oid: this.message.oid
				}, this.callback_getMsgInfo, msg);
			},
			callback_getMsgInfo: function (result, msg) {
				if (result != null && result.status == 0) {
					Vue.set(msg, "status", 1);
				} else {
					//failed
					this.$refs.pf.showToast("error", "删除失败！", msg.title);
				}
			},
		}
	};
</script>

<style>
	.well {
		border-right: 0;
		border-left: 0;
	}

	#inbox-content {
		min-height: 500px;
	}

	.bold {
		font-weight: bolder;
	}

	.unread {
		font-weight: bolder;
		color: black !important;
	}
</style>