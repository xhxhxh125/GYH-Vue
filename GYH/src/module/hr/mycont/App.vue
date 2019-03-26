<template>
	<div id="app">
		<ElPageFrame ref="pf"></ElPageFrame>

		<div id="main" role="main">
			<!-- RIBBON -->
			<div id="ribbon">
				<span class="ribbon-button-alignment">
					<span id="refresh" class="btn btn-ribbon" data-action="resetWidgets" data-title="refresh" rel="tooltip" data-placement="bottom" data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings." data-html="true">
						<i class="fa fa-refresh"></i>
					</span>
				</span>
				<!-- breadcrumb -->
				<ol class="breadcrumb">
					<li><a :href="appsettings.portal_root">首页</a></li>
          <li>人脉管理</li>
          <li>我的联系人</li>
				</ol>
				<!-- end breadcrumb -->
			</div>
			<!-- END RIBBON -->

			<!-- MAIN CONTENT -->
			<div id="content">
				<div class="row">
					<div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
						<h1 class="page-title txt-color-blueDark">
							<i class="fa fa-fw fa-pencil-square-o"></i> 人脉管理
							<span>> 我的联系人
							</span>
						</h1>
					</div>
				</div>
				<!-- 每一个widget必须在同一个id为“widget-grid”的元素中 -->
				<section id="widget-grid" class="">
					<ElBlockAlert ref="alert"></ElBlockAlert>

					<!-- START ROW Search Condition-->
					<div class="row">
						<!-- NEW COL START -->
						<article class="col-sm-12 col-md-12">
							<!-- Widget ID (each widget will need unique ID)-->
							<div class="jarviswidget" id="wid-id-0" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-custombutton="false">
								<header>
									<span class="widget-icon">
										<i class="fa fa-edit"></i>
									</span>
									<h2>查询条件 </h2>
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
													<section class="col col-3">
														<!-- <label class="label">搜索</label> -->
														<label class="input">
															<i class="icon-prepend fa fa-comment"></i>
															<input type="text" name="text" placeholder="搜索人脉" v-model="usersearch.keywords">
														</label>
													</section>
													
												</div>
											</fieldset>
											<footer>
												<a class="btn btn-primary pull-left" href="javascript:void(0);" @click="searchClick()">
													<i class="fa fa-search"></i> 搜索</a>
												<!-- <a class="btn btn-success pull-left" href="javascript:void(0);" @click="add_contractor()">
													<i class="fa fa-plus"></i> 添加联系人</a> -->
												<a :href="appsettings.apiroot+'hr/contactor/export/'+token" class="btn btn-success pull-left" target="_self">
													<i class="fa fa-save"></i>导出</a>
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

					<!-- row -->
					<div class="row">
						<!-- NEW WIDGET START -->
						<article class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<!-- Widget ID (each widget will need unique ID)-->
							<div class="jarviswidget jarviswidget-color-blueDark" id="wid-id-1" data-widget-editbutton="false" data-widget-colorbutton="false" data-widget-custombutton="false">
								<header>
									<span class="widget-icon">
										<i class="fa fa-pencil-square-o"></i>
									</span>
									<h2>我的联系人</h2>
								</header>
								<!-- datatable-->
								<div>
									<div class="jarviswidget-editbox">
									</div>
									<div class="widget-body no-padding">
										<table id="datatable_tabletools" class="nowrap table table-striped table-bordered table-hover" width="100%">
											<thead>
												<tr>
													<th>操作</th>
													<th>头像</th>
													<th>姓名</th>
													<th>公司</th>
													<th>电话</th>
													<th>电子邮箱</th>
													<th>备注</th>
												</tr>
											</thead>
											<tbody>
												<tr class="row-show" v-for="(user,index) in userlist" :key="index">
													<!-- 操作当前记录 -->
													<td>
														<div class="btn-group">
															<a class="btn btn-default btn-xs" @click="edit_contractor(user)">编辑</a>
															<a class="btn btn-xs btn-danger" @click="deleteAccount(user)">删除</a>
															<!-- <a class="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" href="javascript:void(0);">
																<span class="caret"></span>
															</a>
															<div class="dropdown-menu" style="width:500px;padding:8px 10px;background-color: #fff;">
																<span style="padding-right:20px;">操作:</span>
																<a v-if="functionlist.indexOf('delete@user2_account')>=0" class="btn btn-xs btn-default" @click="deleteAccount(user)">删除</a>
															</div> -->
														</div>
													</td>
													<!-- 数据展示:label用来展示 input用来编辑(配合上面“编辑当前记录”td使用) -->
													<td>
														<img :src="appsettings.userimg+user.picture" alt="" width="20">
													</td>
													<td>
														<label><a :href="'/hr/profile.html?id='+user.contactor_oid" target="_blank">{{user.private_name}}</a></label>
													</td>
													<td>
														<label><a :href="appsettings.portal_root+'Company/OneCompany.aspx?id='+user.company_oid" target="_blank">{{user.company_name}}</a></label>
													</td>
													<td>
														<label>{{user.user_mobile}}</label>
													</td>
													<td>
														<label>{{user.user_email}}</label>
													</td>
													<td>
														<label>{{user.remark}}</label>
													</td>
												</tr>
											</tbody>
										</table>
										<div class="dt-toolbar-footer"><div class="col-sm-6 col-xs-12 hidden-xs"></div><div class="col-sm-6 col-xs-12"></div></div>
									</div>
									<ElPager class="pull-left" :pageTotal="usersearch.pageTotal" @changePage="changePage"></ElPager>
								</div>
								<!-- end datatable -->
							</div>
							<!-- end widget -->
						</article>
						<!-- WIDGET END -->
					</div>
					<!-- end row -->
				</section>
				<!-- end widget grid -->
			</div>
			<!-- END MAIN CONTENT -->
		</div>
		<ElToastAlert ref="toastAlert"></ElToastAlert>

		<!-- 产品查询modal -->
    <div class="modal fade" id="editcontmodal" tabindex="-1" role="dialog">
      <div class="modal-dialog sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title">
              编辑联系人
            </h4>
          </div>
          <div class="modal-body no-padding">

            <div id="ref-form" class="smart-form">
              <fieldset>
                <div class="row">

                  <div>
                    <section class="col col-6">
                      <label class="label">姓名</label>
                      <label class="input">
                        <input type="text" name="text" v-model="edite_user.private_name">
                      </label>
                    </section>

                    <section class="col col-6">
                      <label class="label">职务</label>
                      <label class="input">
                        <input type="text" name="text" v-model="edite_user.title">
                      </label>
                    </section>
										<section class="col col-6">
                      <label class="label">电话</label>
                      <label class="input">
                        <input type="text" name="text" v-model="edite_user.user_mobile">
                      </label>
                    </section>
										<section class="col col-6">
                      <label class="label">邮箱</label>
                      <label class="input">
                        <input type="text" name="text" v-model="edite_user.user_email">
                      </label>
                    </section>
										<section class="col col-6">
                      <label class="label">备注</label>
                      <label class="input">
                        <input type="text" name="text" v-model="edite_user.remark">
                      </label>
                    </section>

                  </div>
                </div>
              </fieldset>
              <footer>
                <a class="btn btn-success pull-left" href="javascript:void(0);" @click="raiseContractor()">
                  <i class="fa fa-save"></i> 保存</a>
                <button type="button" class="btn btn-default" data-dismiss="modal">
                  取消
                </button>
              </footer>
              
            </div>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>

	</div>
</template>

<script>
import "common/httputils"; //引用js
import htmlHelper from "common/htmlutils";
import ElPageFrame from "components/el-PageFrame/el-PageFrame";

import ElPager from "components/el-Pager/el-Pager";
import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";

export default {
  name: "app",
  data: function() {
    return {
      usersearch: {
        page_index: 1,
        page_size: 20,
        pageTotal: 1,
        keywords: ""
      },
      userlist: [],

      edite_user: {},
      token: ""
    };
  },
  components: {
    ElPageFrame,
    ElPager,
    ElBlockAlert,
    ElToastAlert
  },
  created: function() {
    this.token = window.localStorage.getItem("token");
    $.post_json(
      appsettings.apiroot + "hr/my/contactor",
      this.usersearch,
      this.callback_searchUser
    );
  },
  mounted: function() {
    setTimeout(function() {
      //配置validate组件
      // ValidateConfig({
      //   formid: "query-form",
      //   rules: {
      //     email: {
      //       email: true
      //     },
      //     phone: {
      //       isMobile: true
      //     }
      //   },
      //   messages: {
      //     email: {
      //       email: "Please enter a VALID email address"
      //     },
      //     phone: {
      //       isMobile: "Please enter VALID phone number"
      //     }
      //   }
      // });
    }, 0);
  },
  methods: {
    searchClick: function() {
      this.usersearch.page_index = 1;
      // this.usersearch.page_size = 5;
      this.searchUser();
    },
    searchUser: function() {
      this.$refs.pf.showLoading("Loading");
      $.post_json(
        appsettings.apiroot + "hr/my/contactor",
        this.usersearch,
        this.callback_searchUser
      );
    },

    callback_searchUser: function(res) {
      this.$refs.pf.hideLoading();
      if (res != null && res.status == 0) {
        this.userlist = res.data.userlist;
        this.usersearch.pageTotal = res.data.page.total_page_count;
      } else {
        this.$refs.alert.blockAlert("error", "查询失败：" + res.message);
      }
    },

    changePage: function(currentIndex) {
      this.usersearch.page_index = currentIndex;
      this.searchUser();
    },

    deleteAccount: function(user) {
      that = this;
      this.$refs.pf.confirmShow({
        title: "删除联系人",
        msg: "确定要删除联系人【" + user.private_name + "】吗？",
        data: user,
        success: that.doDelete
      });
    },

    doDelete: function(res) {
      if (res.confirm == true) {
        var userdelete = JSON.parse(JSON.stringify(res.data));
        var data = {
          account_oid: userdelete.account_oid,
          contactor_oid: userdelete.contactor_oid
        };
        $.post_json(
          appsettings.apiroot + "hr/contactor/delete",
          data,
          this.callback_doDelete,
          res.data
        );
        this.$refs.pf.showLoading("正在删除....");
      }
    },

    callback_doDelete: function(res, user) {
      this.$refs.pf.hideLoading();
      if (res.status == 0) {
        //从页面上删除
        this.userlist.splice(this.userlist.indexOf(user), 1);
        this.$refs.pf.confirmShow({
          title: "删除成功",
          msg: "您已成功删除联系人【" + this.user.private_name + "】.",
          only_alert: true
        });
      } else {
        //提示错误信息
        this.$refs.toastAlert.config = {
          type: "error",
          title: "删除联系人失败",
          msg: result.message
        };
        this.$refs.toastAlert.show = true;
      }
    },

    add_contractor: function() {
      this.action_mode = "add";
      $("#editcontmodal").modal("show");
    },
    edit_contractor: function(user) {
      this.action_mode = "update";
      this.edite_user = user;
      $("#editcontmodal").modal("show");
    },
    //提交
    raiseContractor: function() {
      if (this.action_mode == "add") {
        this.create_contractor();
      } else if (this.action_mode == "update") {
        this.update_contractor();
      }
    },

    create_contractor: function() {
      this.$refs.pf.showLoading("提交中....");
      $.post_json(
        appsettings.apiroot + "hr/contactor/create",
        this.edite_user,
        this.callback_create_contractor
      );
    },

    callback_create_contractor: function(result) {
      this.$refs.pf.hideLoading();
      $("#editcontmodal").modal("hide");
      if (result != null && result.status == 0) {
        //提示提交成功（提示页面加链接回到我的需求响应界面）
        this.$refs.toastAlert.config = {
          type: "success",
          title: "提交成功"
        };
        this.$refs.toastAlert.show = true;
        this.userlist.push(result.data);
      } else {
        this.$refs.toastAlert.config = {
          type: "error",
          title: "提交失败！"
        };
        this.$refs.toastAlert.show = true;
      }
    },

    update_contractor: function() {
      this.$refs.pf.showLoading("提交中....");
      $.post_json(
        appsettings.apiroot + "hr/contactor/update",
        this.edite_user,
        this.callback_update_contractor
      );
    },

    callback_update_contractor: function(result) {
      this.$refs.pf.hideLoading();
      $("#editcontmodal").modal("hide");
      if (result != null && result.status == 0) {
        //提示提交成功（提示页面加链接回到我的需求响应界面）
        this.$refs.toastAlert.config = {
          type: "success",
          title: "提交成功"
        };
        this.$refs.toastAlert.show = true;
      } else {
        this.$refs.toastAlert.config = {
          type: "error",
          title: "提交失败！"
        };
        this.$refs.toastAlert.show = true;
      }
    }
  },
  computed: {}
};
</script>

<style>
.nowrap th,
.nowrap .nw {
  white-space: nowrap !important;
}
.nowrap .btn-group {
  white-space: nowrap !important;
  min-width: 61px;
}
.nowrap {
  overflow-x: scroll !important;
}
</style>
