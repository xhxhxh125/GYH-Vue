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
                      <img class="img-fluid rounded-circle" :src="company_core.logo">
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
                      <div class="progress-bar g-bg-lightblue-v3 g-rounded-3" role="progressbar" style="width: 60%"
                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </section>
                  <!-- End 资料完成率 -->
                  <!-- Profile Sidebar -->
                  <section>
                    <ul class="list-unstyled mb-0">
                      <li class="g-brd-top g-brd-gray-light-v7 mb-0">
                        <a class="d-flex align-items-center u-link-v5 g-parent g-py-15 " href="/c/edit.html">
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
                        <a class="d-flex align-items-center u-link-v5 g-parent g-py-15 " href="/c/edit_gallery.html">
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
                        <a class="d-flex align-items-center u-link-v5 g-parent g-py-15 active" href="/c/edit_employees.html">
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
                <div class="media-md align-items-center g-mb-30">
                  <div class="d-flex g-mb-15 g-mb-0--md">
                    <h1 class="g-font-weight-400 g-font-size-28 g-color-black">公司人员管理</h1>
                  </div>

                  <div class="media-body align-self-center text-right">
                    <a class="js-fancybox btn btn-xl u-btn-secondary g-width-160--md g-font-size-default g-ml-10" href="#!"
                      data-src="#new-project-form" data-speed="350" data-options='{"touch" : false}'>
                      添加新员工
                    </a>
                  </div>
                </div>

                <div class="g-mb-40">
                  <div class="table-responsive">
                    <table class="js-datatable table u-table--v3 u-editable-table--v1 g-color-black">
                      <thead>
                        <tr style="background:#1cc9e4;">
                          <th>
                            <div class="media">
                              <div class="d-flex align-self-center g-color-gray-light-v6">姓名</div>
                            </div>
                          </th>
                          <th>
                            <div class="media">
                              <div class="d-flex align-self-center g-color-gray-light-v6">职位</div>
                            </div>
                          </th>
                          <th>
                            <div class="media">
                              <div class="d-flex align-self-center g-color-gray-light-v6">手机</div>
                            </div>
                          </th>
                          <th>
                            <div class="media">
                              <div class="d-flex align-self-center g-color-gray-light-v6">邮箱</div>
                            </div>
                          </th>
                          <th>
                            <div class="media">
                              <div class="d-flex align-self-center g-color-gray-light-v6">操作</div>
                            </div>
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr v-for="(user,index) in userlist" :key="index">
                          <td class="js-select text-left g-first-child">
                            <label class="media align-items-center u-check">
                              <div class="d-flex">
                                <a :href="'/hr/profile.html?id='+user.contactor_oid">
                                  <img class="g-width-40 g-height-40 rounded-circle g-mr-14" :src="appsettings.userimg+user.picture"
                                    alt="Image description">
                                </a>
                              </div>
                              <div class="media-body text-left g-ml-15">
                                <a :href="'/hr/profile.html?id='+user.contactor_oid" target="_blank">{{user.private_name}}</a>
                              </div>
                            </label>
                          </td>
                          <td>{{user.title}}</td>
                          <td>{{user.user_mobile}}</td>
                          <td>{{user.user_email}}</td>
                          <td class="text-right">
                            <div>
                              <div>
                                <ul class="list-unstyled g-nowrap mb-0 d-flex">
                                  <li>
                                    <a class="js-fancybox d-flex align-items-center u-link-v5 g-bg-gray-light-v8--hover g-font-size-12 g-font-size-default--md g-color-gray-dark-v6 g-px-10 g-py-14"
                                      :href="'/c/edit_employees-edit.html?id='+user.contactor_oid" target="_blank">
                                      <i class="hs-admin-pencil g-font-size-18 g-color-gray-light-v6 g-mr-10 g-mr-10--md"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="d-flex align-items-center u-link-v5 g-bg-gray-light-v8--hover g-font-size-12 g-font-size-default--md g-color-gray-dark-v6 g-px-10 g-py-14"
                                      href="#!" @click="removeEmployee(user)">
                                      <i class="hs-admin-trash g-font-size-18 g-color-gray-light-v6 g-mr-10 g-mr-15--md"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <ElPager :index="query_data.page_index" :pageTotal="query_data.pageTotal" @changePage="changePage"></ElPager>
                    </table>
                  </div>
                </div>
              </div>

              <div id="new-project-form" class="rounded-0 p-0" style="display: none; width: 790px; max-width: 100%;">
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
                          <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" name="staffrole"
                            :checked="parseInt(userinfo.company_role)===0" @change="userinfoRadioChanged($event,'company_role',0)">
                          <div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-width-18 g-height-18">
                            <i class="g-absolute-centered d-block g-width-10 g-height-10 g-bg-primary--checked"></i>
                          </div>
                          公司管理员
                        </label>
                        <label class="form-check-inline u-check g-pl-25 ml-0">
                          <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="radio" name="staffrole"
                            :checked="parseInt(userinfo.company_role)===1" @change="userinfoRadioChanged($event,'company_role',1)">
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

              <div class="modal" id="companylogo_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
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

  import ElPager from "components/el-Pager/el-Pager";
  import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
  import ElImgCopper from "components/el-ImgCopper/el-ImgCopper";
  import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";
  import Vue from 'vue';

  export default {
    name: "app",
    data: function () {
      return {
        query_data: {
          page_index: 0,

          keywords: "",
          user_mobile: null,
          user_email: null,
          private_name: null,
        },
        userinfo: {
          account_oid: null,
          picture: "/assets/common/img/user_default.jpg"
        },
        userlist: [],

        edite_user: {},
        token: "",
        company_core: {
          logo: "/assets/common/img/com_default.jpg",
          registered_date: null,
          tags: null
        },
        default_role: {},
        userrolesshow: [],
        userroles: [],
        allroles: []
      };
    },
    components: {
      ElPageFrame,
      ElPager,
      ElBlockAlert,
      ElImgCopper,
      ElToastAlert
    },
    computed: {

    },
    created: function () {
      this.token = window.localStorage.getItem("token");
      //默认显示出第一页的员工
      this.doSearch();
      var body = {
        account_oid: this.userinfo.account_oid
      };
      $.post_json(
        appsettings.apiroot + "admin/account/info",
        body,
        this.userInfoRender
      );

      $.post_json(
        appsettings.apiroot + "admin/account/user/role/retrieve", {
          user_oid: this.userinfo.account_oid
        },
        this.callback_userrole
      );

      $.post_json(
          appsettings.apiroot + "admin/company/info/core",
          body,
          this.companyCoreInfoRender
        );
      
    },
    mounted: function () {
      this.$refs.pf.showLoading("加载中...");
      var self = this;
      setTimeout(() => {
        self.$refs.pf.hideLoading();
      }, 10000);
    },
    methods: {

      companyCoreInfoRender: function (res) {
        console.log(res)
        this.company_core = res.data;
        this.setContent("ueditor", this.company_core.introduction);
      },

      //搜索
      queryClick: function () {
        $.post_json(
          appsettings.apiroot + "home/company/staff/retrieve",
          this.query_data,
          this.callback_queryClick
        );
      },
      callback_queryClick: function (result) {
        console.log(result.data);
        if (result != null && result.status == 0) {
          // this.query_data.page_index = result.data.page_parameter.PageIndex;
          // this.result_products = result.data.products;
          if (this.result_products == null || this.result_products.length == 0) {
            this.$refs.pf.config = {
              type: "warning",
              title: "没有符合条件的产品",
              msg: result.message
            };
            this.$refs.pf.show = true;
          }
        } else {
          this.$refs.pf.config = {
            type: "error",
            title: "查询产品信息出现异常",
            msg: result.message
          };
          this.$refs.pf.show = true;
        }
      },
      changePage: function (page_index) {
        this.query_data.page_index = page_index;
        $.post_json(
          appsettings.apiroot + "home/product/retrieve",
          this.query_data,
          this.callback_queryClick
        );
      },
      doSearch: function () {
        $.post_json(
          appsettings.apiroot + "home/company/staff/retrieve",
          this.query_data,
          this.callback_searchUser
        );
      },

      //删除
      deleteProduct: function (user, index) {
        console.log("111")
        var that = this;
        user.index = index;
        this.$refs.pf.confirmShow({
          action_code: "deleteproduct",
          title: "确定要删除该人员吗？",
          msg: "人员名称：" + user.private_name,
          success: function (res) {
            if (res.confirm == true) {
              var data = {};
              data.oid = user.oid;
              $.post_json(
                appsettings.apiroot + "home/product/delete",
                data,
                that.callback_deleteProduct,
                user
              );

              //show loading
              that.$refs.pf.showLoading("正在删除....");
              setTimeout(function () {
                that.$refs.pf.hideLoading();
              }, 10000);
            }
          }
        });
      },
      callback_deleteProduct: function (result, user) {
        this.$refs.pf.hideLoading();
        if (result != null && result.status == 0) {
          user.status = -1;
          this.result_products.splice(parseInt(user.index), 1);
          this.$refs.pf.showToast("success", "删除人员成功", "");
        } else {
          this.$refs.pf.showToast("error", "删除人员出现异常", result.message);
        }
      },

      searchUser: function () {
        this.$refs.pf.showLoading("加载中...");
        this.doSearch();
      },

      changeCompanyLogo: function () {
        setTimeout(() => {
          $("#companylogo_modal").modal({
            backdrop: "static",
            keyboard: false
          });
        }, 0);
      },

      onCompanyImageCropper: function (imgbase64) {
        {
          console.log(this.company_core)
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
        console.log(res)

        if (res.status == 0) {
          var that = this;
          setTimeout(() => {
            this.$refs.pf.confirmShow({
              title: "提交成功",
              msg: "公司Logo修改提交成功",
              only_alert: true
            });
            that.company_core.logo = res.data + "?t=" + Math.random();
            console.log(that.company_core.logo)
          }, 1500);
        } else {
          this.$refs.toastAlert.showToast("error", "错误", res.message);
        }
      },

      callback_searchUser: function (res) {
        this.$refs.pf.hideLoading();
        if (res != null && res.status == 0) {
          this.userlist = res.data.userlist;
        } else {
          this.$refs.pf.showToast("error", "查询失败", res.message);
        }
      },

      changePage: function (currentIndex) {
        this.query_data.page_index = currentIndex;
        this.searchUser();
      },

      removeEmployee: function (user) {
        that = this;
        this.$refs.pf.confirmShow({
          title: "移除员工",
          msg: "确定要将【" + user.private_name + "】从本公司移除吗？",
          data: user,
          success: that.doDelete
        });
      },

      doDelete: function (res) {
        if (res.confirm == true) {
          var userdelete = JSON.parse(JSON.stringify(res.data));
          var data = {
            account_oid: userdelete.contactor_oid
          };
          $.post_json(
            appsettings.apiroot + "home/company/staff/delete",
            data,
            this.callback_doDelete,
            res.data
          );
          this.$refs.pf.showLoading("正在删除....");
        }
      },

      callback_doDelete: function (res, user) {
        this.$refs.pf.hideLoading();
        if (res.status == 0) {
          //从页面上删除
          this.userlist.splice(this.userlist.indexOf(user), 1);
          this.$refs.pf.confirmShow({
            title: "移除成功",
            msg: "您已成功移除【" + user.private_name + "】.",
            only_alert: true
          });
        } else {
          //提示错误信息
          this.$refs.pf.showToast("error", "移除员工失败", res.message);
        }
      },

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
        this.$refs.pf.hideLoading();
        console.log(res)
        if (res.status == 0) {
          var id = this.userinfo.account_oid;
          this.userinfo = res.data;
          this.userinfo.account_oid = id;
        } else {

        }
      },

      callback_userrole: function (res) {
        this.$refs.pf.hideLoading();
        if (res != null && res.status == 0) {
          for (var i = 0; i < res.data.length; i++) {
            this.userrolesshow.push(res.data[i]);
            this.userroles.push("@" + res.data[i].role_code + "@");
            if (res.data[i].isdefault == 1) {
              //这里要用值传递，以免修改this.default_role的同事修改res.data[i]
              this.default_role.name = res.data[i].name;
              this.default_role.role_code = res.data[i].role_code;
            }
          }
        } else if (res.status > 0) {} else {
          this.$refs.pf.confirmShow({
            title: "查询失败：",
            msg: res.message,
            only_alert: true
          });
        }
      },
    },
  };
</script>

<style>
  .media .g-color-gray-light-v6 {
    color: #ffffff !important;
  }

  .text-left a {
    text-decoration: none;
    color: #007bff;
  }

  .text-right .g-color-gray-light-v6 {
    color: #bac9c9 !important;
  }

  .close {
    padding: 0;
    margin: 0;
  }
</style>