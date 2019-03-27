<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <div id="main" role="main" >
         
          





            <div class="col g-ml-50 g-ml-0--lg g-overflow-hidden">
              <div class="g-pa-20">
                <div class="media-md align-items-center g-mb-30">
                  <div class="d-flex g-mb-15 g-mb-0--md">
                    <h1 class="g-font-weight-400 g-font-size-28 g-color-black">名片夹</h1>
                  </div>

                  <div class="media d-md-flex align-items-center ml-auto">
                    <div class="d-flex g-ml-15 g-ml-55--md">
                      <div class="input-group g-pos-rel g-width-320--md">
                        <input id="datatableSearch1" class="form-control g-font-size-default g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-20 g-pl-20 g-pr-50 g-py-10"
                          type="text" placeholder="搜索">
                        <button class="btn g-pos-abs g-top-0 g-right-0 g-z-index-2 g-width-60 h-100 g-bg-transparent g-font-size-16 g-color-primary g-color-secondary--hover rounded-0"
                          type="submit">
                          <i class="hs-admin-search g-absolute-centered"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="g-mb-40">
                  <div class="table-responsive">
                    <table class="js-datatable table u-table--v3 u-editable-table--v1 g-color-black" data-dt-info="#datatableInfo1"
                      data-dt-search="#datatableSearch1" data-dt-entries="#datatableEntries1" data-dt-is-show-paging="true"
                      data-dt-pagination="datatablePagination1" data-dt-page-length="10" data-dt-is-responsive="false"
                      data-dt-pagination-classes="list-inline text-right mb-0" data-dt-pagination-items-classes="list-inline-item g-hidden-sm-down"
                      data-dt-pagination-links-classes="u-pagination-v1__item u-pagination-v1-2 g-bg-secondary--active g-color-white--active g-brd-gray-light-v7 g-brd-secondary--hover g-brd-secondary--active g-rounded-4 g-py-8 g-px-15"
                      data-dt-pagination-next-classes="list-inline-item" data-dt-pagination-next-link-classes="u-pagination-v1__item u-pagination-v1-2 g-brd-gray-light-v7 g-brd-secondary--hover g-rounded-4 g-py-8 g-px-12"
                      data-dt-pagination-next-link-markup='<span class="g-line-height-1 g-valign-middle" aria-hidden="true"><i class="hs-admin-angle-right"></i></span><span class="sr-only">Next</span>'
                      data-dt-pagination-prev-classes="list-inline-item" data-dt-pagination-prev-link-classes="u-pagination-v1__item u-pagination-v1-2 g-brd-gray-light-v7 g-brd-secondary--hover g-rounded-4 g-py-8 g-px-12"
                      data-dt-pagination-prev-link-markup='<span class="g-line-height-1 g-valign-middle" aria-hidden="true"><i class="hs-admin-angle-left"></i></span><span class="sr-only">Prev</span>'>
                      <thead>
                        <tr style="background:#1cc9e4;">
                          <th>
                            <div class="media"> 
                              <div class="d-flex align-self-center g-color-gray-light-v6">姓名</div>

                              <div class="d-flex align-self-center ml-auto">
                                <span class="d-inline-block g-width-10 g-line-height-1 g-font-size-10">
                                  <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                    href="#!">
                                    <i class="hs-admin-angle-up"></i>
                                  </a>
                                  <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                    href="#!">
                                    <i class="hs-admin-angle-down"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </th>
                          <th>
                            <div class="media">
                              <div class="d-flex align-self-center g-color-gray-light-v6">公司名称</div>

                              <div class="d-flex align-self-center ml-auto">
                                <span class="d-inline-block g-width-10 g-line-height-1 g-font-size-10">
                                  <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                    href="#!">
                                    <i class="hs-admin-angle-up"></i>
                                  </a>
                                  <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                    href="#!">
                                    <i class="hs-admin-angle-down"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </th>
                          <th>
                                <div class="media">
                                  <div class="d-flex align-self-center g-color-gray-light-v6">头衔</div>
        
                                  <div class="d-flex align-self-center ml-auto">
                                    <span class="d-inline-block g-width-10 g-line-height-1 g-font-size-10">
                                      <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                        href="#!">
                                        <i class="hs-admin-angle-up"></i>
                                      </a>
                                      <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                        href="#!">
                                        <i class="hs-admin-angle-down"></i>
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </th>
                          <th>
                            <div class="media">
                              <div class="d-flex align-self-center g-color-gray-light-v6">手机</div>

                              <div class="d-flex align-self-center ml-auto">
                                <span class="d-inline-block g-width-10 g-line-height-1 g-font-size-10">
                                  <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                    href="#!">
                                    <i class="hs-admin-angle-up"></i>
                                  </a>
                                  <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                    href="#!">
                                    <i class="hs-admin-angle-down"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </th>
                          <th>
                            <div class="media">
                              <div class="d-flex align-self-center g-color-gray-light-v6">邮箱</div>

                              <div class="d-flex align-self-center ml-auto">
                                <span class="d-inline-block g-width-10 g-line-height-1 g-font-size-10">
                                  <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                    href="#!">
                                    <i class="hs-admin-angle-up"></i>
                                  </a>
                                  <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                    href="#!">
                                    <i class="hs-admin-angle-down"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </th>
                          <th>
                            <div class="media">
                              <div class="d-flex align-self-center g-nowrap g-color-gray-light-v6">日期</div>

                              <div class="d-flex align-self-center ml-auto">
                                <span class="d-inline-block g-width-10 g-line-height-1 g-font-size-10">
                                  <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                    href="#!">
                                    <i class="hs-admin-angle-up"></i>
                                  </a>
                                  <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                    href="#!">
                                    <i class="hs-admin-angle-down"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </th>
                          <th>操作</th>
                        </tr>
                      </thead>

                      <tbody>

                        <tr class="row-show"
                                  v-for="(user,index) in userlist"
                                  :key="index">
                          <td class="js-select text-left g-first-child">
                            <label class="media align-items-center u-check">
                              <div class="d-flex g-ml-0">
                                  <img class="g-width-40 g-height-40 rounded-circle g-mr-14" :src="appsettings.userimg+user.picture"
                                      alt=""
                                      width="20">
                              </div>
                              <div class="media-body text-left g-ml-15"><a :href="'/hr/profile.html?id='+user.contactor_oid"
                                        target="_blank">{{user.private_name}}</a></div>
                            </label>
                          </td>
                          <td><label><a
                                        :href="appsettings.portal_root+'Company/OneCompany.aspx?id='+user.company_oid"
                                        target="_blank"
                                      >{{user.company_name}}</a></label></td>
                          <td>技术总监</td>
                          <td>{{user.user_mobile}}</td>
                          <td>{{user.user_email}}</td>
                          <td>2018/11/14 21:16:53</td>
                          <td class="text-right">
                            <div class="g-pos-rel g-top-3 d-inline-block">
                              <a :id="forId(index,1)" class="u-link-v5 g-line-height-0 g-font-size-24 g-color-gray-light-v6 g-color-secondary--hover"
                                href="javascript:void(0);" :aria-controls="forId(index,2)" aria-haspopup="true" aria-expanded="false"
                                data-dropdown-event="click" :data-dropdown-target="forId(index,3)" data-dropdown-type="css-animation"
                  data-dropdown-duration="300" data-dropdown-animation-in="fadeIn" data-dropdown-animation-out="fadeOut">
                                <i class="hs-admin-more-alt"></i>
                              </a>
                              <div :id="forId(index,2)" class="u-shadow-v31 g-pos-abs g-right-0 g-z-index-2 g-bg-white u-dropdown--css-animation u-dropdown--hidden u-dropdown--reverse-y"
                                :aria-labelledby="forId(index,1)">
                                <ul class="list-unstyled g-nowrap mb-0 6">
                                  <li>
                                    <a class="d-flex align-items-center u-link-v5 g-bg-gray-light-v8--hover g-font-size-12 g-font-size-default--md g-color-gray-dark-v6 g-px-25 g-py-14"
                                      href="#!" id="show-edit1"  @click="edit_contractor(user)">
                                      <i class="hs-admin-pencil g-font-size-18 g-color-gray-light-v6 g-mr-10 g-mr-15--md"></i>
                                      编辑
                                    </a>
                                  </li>
                                  <li>
                                    <a class="d-flex align-items-center u-link-v5 g-bg-gray-light-v8--hover g-font-size-12 g-font-size-default--md g-color-gray-dark-v6 g-px-25 g-py-14"
                                      href="#!" id="show1"  @click="deleteAccount(user)">
                                      <i class="hs-admin-trash g-font-size-18 g-color-gray-light-v6 g-mr-10 g-mr-15--md"></i>
                                      删除
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>

                
                <dialog id="del-dialog">
                    <p>您确定要删除吗？</p>
                    <button id="del-close">确定</button>
                    <button id="close">取消</button>
                </dialog>
                <dialog id="edit-dialog">
                    <form method ="edit-dialog">
                        <div class="row g-mb-20">
                          <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                            <label class="mb-0" for="#userName">名字</label>
                          </div>
                          <div class="col-md-9 align-self-center">
                            <div class="form-group g-pos-rel mb-0">
                              <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                                <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                              </span>
                              <input id="userName" name="userName" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                                type="text" required="required" data-msg="This field is mandatory" data-error-class="u-has-error-v3"
                                data-success-class="has-success" aria-required="true">
                            </div>
                          </div>
                        </div>
                        <div class="row g-mb-20">
                          <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                            <label class="mb-0" for="#comName">公司名称</label>
                          </div>
                          <div class="col-md-9 align-self-center">
                            <div class="form-group g-pos-rel mb-0">
                              <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                                <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                              </span>
                              <input id="comName" name="comName" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                                type="text" required="required" data-msg="This field is mandatory" data-error-class="u-has-error-v3"
                                data-success-class="has-success" aria-required="true">
                            </div>
                          </div>
                        </div>
                        <div class="row g-mb-20">
                          <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                            <label class="mb-0" for="#actor">头衔</label>
                          </div>
                          <div class="col-md-9 align-self-center">
                            <div class="form-group g-pos-rel mb-0">
                              <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                                <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                              </span>
                              <input id="actor" name="actor" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                                type="text" required="required" data-msg="This field is mandatory" data-error-class="u-has-error-v3"
                                data-success-class="has-success" aria-required="true">
                            </div>
                          </div>
                        </div>
                        <div class="row g-mb-20">
                          <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                            <label class="mb-0" for="#tel">手机</label>
                          </div>
                          <div class="col-md-9 align-self-center">
                            <div class="form-group g-pos-rel mb-0">
                              <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                                <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                              </span>
                              <input id="tel" name="tel" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                                type="text" required="required" data-msg="This field is mandatory" data-error-class="u-has-error-v3"
                                data-success-class="has-success" aria-required="true">
                            </div>
                          </div>
                        </div>
                        <div class="row g-mb-20">
                          <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                            <label class="mb-0" for="#email">邮箱</label>
                          </div>
                          <div class="col-md-9 align-self-center">
                            <div class="form-group g-pos-rel mb-0">
                              <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                                <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                              </span>
                              <input id="email" name="email" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                                type="text" required="required" data-msg="This field is mandatory" data-error-class="u-has-error-v3"
                                data-success-class="has-success" aria-required="true">
                            </div>
                          </div>
                        </div>
                        <div>
                          <button class="btn btn-xl u-btn-secondary g-font-size-default g-px-40">提交</button>
                          <div id="edit-close" class="btn btn-xl u-btn-secondary g-font-size-default g-px-40">取消</div>
                        </div>
                    </form>
                </dialog>
              <ElPager
                  class="pull-left"
                  :pageTotal="usersearch.pageTotal"
                  @changePage="changePage"
                ></ElPager>
              </div>
          </div>
        </div>
      </div>
    </ElPageFrame>
    <ElToastAlert ref="toastAlert"></ElToastAlert>

    <!-- 产品查询modal -->
    <div
      class="modal fade"
      id="editcontmodal"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog sm">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 class="modal-title">
              编辑联系人
            </h4>
          </div>
          <div class="modal-body no-padding">

            <div
              id="ref-form"
              class="smart-form"
            >
              <fieldset>
                <div class="row">

                  <div>
                    <section class="col col-6">
                      <label class="label">姓名</label>
                      <label class="input">
                        <input
                          type="text"
                          name="text"
                          v-model="edite_user.private_name"
                        >
                      </label>
                    </section>

                    <section class="col col-6">
                      <label class="label">职务</label>
                      <label class="input">
                        <input
                          type="text"
                          name="text"
                          v-model="edite_user.title"
                        >
                      </label>
                    </section>
                    <section class="col col-6">
                      <label class="label">电话</label>
                      <label class="input">
                        <input
                          type="text"
                          name="text"
                          v-model="edite_user.user_mobile"
                        >
                      </label>
                    </section>
                    <section class="col col-6">
                      <label class="label">邮箱</label>
                      <label class="input">
                        <input
                          type="text"
                          name="text"
                          v-model="edite_user.user_email"
                        >
                      </label>
                    </section>
                    <section class="col col-6">
                      <label class="label">备注</label>
                      <label class="input">
                        <input
                          type="text"
                          name="text"
                          v-model="edite_user.remark"
                        >
                      </label>
                    </section>

                  </div>
                </div>
              </fieldset>
              <footer>
                <a
                  class="btn btn-success pull-left"
                  href="javascript:void(0);"
                  @click="raiseContractor()"
                >
                  <i class="fa fa-save"></i> 保存</a>
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
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
    // 编辑菜单的id要不相同
    forId(index, flag) {
      index = index + 1;
      if (flag == 1) {
        return "dropDown" + index + "Invoker";
      } else if (flag == 2) {
        return "dropDown" + index;
      } else if (flag == 3) {
        return "#dropDown" + index;
      }
    },
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
