<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <!-- main -->
        <div class="col g-ml-50 g-ml-0--lg g-overflow-hidden">
          <div class="g-pa-20" style="margin-bottom: 100px;">
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

                    <h3 class="g-font-weight-300 g-font-size-20 g-color-black mb-0">{{company_core.company_name}}</h3>
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
                        <a class="d-flex align-items-center u-link-v5 g-parent g-py-15 active" href="/c/edit_sffiliated.html">
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
                <div class="g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md">
                  <div class="media">
                    <div class="d-flex align-self-center">
                      <h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">关联公司</h2>
                    </div>

                    <div class="media-body align-self-center text-right">
                      <a class="js-fancybox btn btn-xl u-btn-secondary g-width-160--md g-font-size-default g-ml-10"
                        href="#!" data-src="#new-project-form" data-speed="350" data-options='{"touch" : false}'>
                        添加关联公司
                      </a>
                    </div>
                  </div>

                  <hr class="d-flex g-brd-gray-light-v7 g-my-30">

                  <div class="media g-mb-30">
                    <div class="d-flex align-self-center align-items-center">
                      <span class="g-hidden-sm-down g-color-gray-dark-v6 g-mr-12">关联关系:</span>

                      <div class="u-select--v1 g-pr-20">
                        <select class="js-select u-select--v1-select w-100" style="display: none;">
                          <option>分支机构</option>
                          <option>代理/经销</option>
                          <option>母公司</option>
                        </select>
                        <i class="hs-admin-angle-down g-absolute-centered--y g-right-0 g-color-gray-light-v6 ml-auto"></i>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 col-lg-6 g-mb-30" v-for="(item,index) in related_companies">
                      <div class="card h-100 g-brd-gray-light-v7 rounded">
                        <header class="card-header g-bg-transparent g-brd-bottom-none g-pa-20 g-pa-30--sm">
                          <div class="media g-mb-15">
                            <div class="d-flex align-self-center">中国</div>

                            <div class="media-body d-flex justify-content-end">
                              <div class="g-pos-rel g-z-index-2">
                                <a class="d-flex align-items-center u-link-v5 g-bg-gray-light-v8--hover g-font-size-12 g-font-size-default--md g-color-gray-dark-v6 g-px-25 g-py-14"
                                  href="javascript:void(0);" @click="deleteRelatedCompany(item)">
                                  <i class="hs-admin-trash g-font-size-18 g-color-gray-light-v6 g-mr-10 g-mr-15--md"></i>
                                  删除
                                </a>
                              </div>
                            </div>
                          </div>

                          <h3 class="g-font-weight-300 g-font-size-20 g-color-black g-mb-15">{{item.company_name}}</h3>
                          <span class="u-tags-v1 text-center g-brd-around g-brd-lightblue-v3 g-bg-lightblue-v3 g-color-white g-rounded-50 g-py-4 g-px-15">{{item.relation_type_name}}</span>
                        </header>

                        <hr class="d-flex g-brd-gray-light-v7 g-mx-20 g-mx-30--sm my-0">

                        <div class="card-block g-px-20 g-px-30--sm g-py-15 g-py-20--sm">
                          <div class="row g-mb-25">
                            <div class="col-md-6 g-mb-25 g-mb-0--md">
                              <h5 class="g-font-size-default g-color-gray-dark-v6 g-mb-5">手机号码</h5>
                              <p class="g-color-black mb-0">{{item.contact_phone}}</p>
                            </div>

                            <div class="col-md-6">
                              <h5 class="g-font-size-default g-color-gray-dark-v6 g-mb-5">电子邮箱</h5>
                              <p class="g-color-black mb-0">{{item.contact_email}}</p>
                            </div>
                          </div>

                          <div class="g-mb-25">
                            <h5 class="g-font-size-default g-color-gray-dark-v6 g-mb-5">地址</h5>
                            <p class="g-color-black mb-0">{{item.contact_address}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="new-project-form" class="rounded-0 p-0" style="display: none; width: 790px; max-width: 100%;">
                <header class="g-bg-gray-light-v8 g-px-15 g-px-30--sm g-py-20">
                  <h2 class="g-font-weight-300 g-font-size-16 g-color-black mb-0">添加关联公司</h2>
                </header>

                <div class="g-pa-15 g-pa-30--sm">
                  <div>
                    <div class="form-group g-mb-35">
                      <h3 class="g-mb-20">
                        <span class="g-font-weight-300 g-font-size-20 g-color-black">公司名称</span>
                      </h3>
                      <label class="g-resize-none g-line-height-1_6 g-brd-gray-light-v7" style="width:100%;">
                        <ElCompanyIntellisense @companyChanged="relatedCompanyChanged"></ElCompanyIntellisense>
                      </label>
                    </div>
                    <div class="g-mb-35">
                      <h3 class="g-font-weight-300 g-font-size-16 g-color-black g-mb-20">关联关系</h3>
                      <div class="g-mb-15">
                        <label class="form-check-inline u-check g-pl-35 ml-0 g-mr-10 g-mr-40--sm">
                          <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radInline1_1" type="radio"
                            :checked="newRelatedCompany.relation_type==0" @change="newRelatedCompany.relation_type=0">
                          <div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-brd-lightblue-v3--checked">
                            <i class="g-absolute-centered d-block g-width-12 g-height-12 g-bg-lightblue-v3--parent-checked"></i>
                          </div>分支机构
                        </label>

                        <label class="form-check-inline u-check g-pl-35 ml-0 g-mr-10 g-mr-40--sm">
                          <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radInline1_1" type="radio"
                            :checked="newRelatedCompany.relation_type==1" @change="newRelatedCompany.relation_type=1">
                          <div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-brd-lightblue-v3--checked">
                            <i class="g-absolute-centered d-block g-width-12 g-height-12 g-bg-lightblue-v3--parent-checked"></i>
                          </div>
                          代理/经销
                        </label>

                        <label class="form-check-inline u-check g-pl-35 ml-0 g-mr-10 g-mr-40--sm">
                          <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radInline1_1" type="radio"
                            :checked="newRelatedCompany.relation_type==2" @change="newRelatedCompany.relation_type=2">
                          <div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-brd-lightblue-v3--checked">
                            <i class="g-absolute-centered d-block g-width-12 g-height-12 g-bg-lightblue-v3--parent-checked"></i>
                          </div>
                          母公司
                        </label>
                        <label class="form-check-inline u-check g-pl-35 ml-0 g-mr-10 g-mr-40--sm">
                          <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radInline1_1" type="radio">
                          <div class="u-check-icon-radio-v4 g-absolute-centered--y g-left-0 g-brd-lightblue-v3--checked">
                            <i class="g-absolute-centered d-block g-width-12 g-height-12 g-bg-lightblue-v3--parent-checked"></i>
                          </div>
                          代加工
                        </label>
                      </div>
                    </div>
                    <div class="form-group g-mb-35">
                      <h3 class="g-font-weight-300 g-font-size-16 g-color-black g-mb-10">手机号码</h3>
                      <input class="form-control g-resize-none g-line-height-1_6 g-brd-gray-light-v7 g-brd-lightblue-v3--focus"
                        type="text" placeholder="联系手机" v-model="newRelatedCompany.contact_phone">
                    </div>
                    <div class="form-group g-mb-35">
                      <h3 class="g-font-weight-300 g-font-size-16 g-color-black g-mb-10">邮箱号码</h3>
                      <input class="form-control g-resize-none g-line-height-1_6 g-brd-gray-light-v7 g-brd-lightblue-v3--focus"
                        type="text" placeholder="电子邮箱" v-model="newRelatedCompany.contact_email">
                    </div>
                    <div class="form-group g-mb-35">
                      <h3 class="g-font-weight-300 g-font-size-16 g-color-black g-mb-10">所在国家</h3>
                      <input class="form-control g-resize-none g-line-height-1_6 g-brd-gray-light-v7 g-brd-lightblue-v3--focus"
                        type="text">
                    </div>
                    <div class="form-group g-mb-35">
                      <h3 class="g-font-weight-300 g-font-size-16 g-color-black g-mb-10">地址</h3>
                      <input class="form-control g-resize-none g-line-height-1_6 g-brd-gray-light-v7 g-brd-lightblue-v3--focus"
                        type="text" placeholder="地址" v-model="newRelatedCompany.contact_address">
                    </div>

                    <div class="d-flex">
                      <a class="btn btn-xl u-btn-secondary g-width-160--md g-font-size-14 g-mr-15" data-fancybox-close href="javascript:void(0);" @click="newRelatedCompanyClick">提交</a>
                      <button class="btn btn-xl u-btn-outline-gray-dark-v6 g-width-160--md g-font-size-14" type="reset"
                        data-fancybox-close>取消</button>
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
        <ElFooter></ElFooter>
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
  import ElFooter from "components/el-Footer/el-Footer";
  import ElCompanyIntellisense from "components/el-CompanyIntellisense/el-CompanyIntellisense";

  export default {
    name: "app",
    data: function () {
      return {
        query_data: {
          page_index: 1,
          page_size: 20,
          pageTotal: 1,
          keywords: "",
          user_mobile: null,
          user_email: null,
          private_name: null,
        },
        userlist: [],
        related_companies: [],
        newRelatedCompany: {},

        edite_user: {},
        token: "",
        company_core: {
          logo: "/assets/common/img/com_default.jpg",
          registered_date: null,
          tags: null
        },
      };
    },
    components: {
      ElPageFrame,
      ElPager,
      ElBlockAlert,
      ElImgCopper,
      ElToastAlert,
      ElCompanyIntellisense,
      ElFooter
    },
    created: function () {
      this.token = window.localStorage.getItem("token");
      var company_oid = $.getUrlParam("id");
      this.getCompanyInfo(company_oid);
    },
    mounted: function () {
      var self = this;
      setTimeout(() => {
        self.$refs.pf.hideLoading();
      }, 10000);
    },
    methods: {

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
          appsettings.apiroot + "home/company/related/retrieve", {
            company_oid: company_id,
            statuses: "0"
          },
          this.relatedCompanyRender
        );
      },

      companyCoreInfoRender: function (res) {
				this.company_core = res.data;
				//this.setContent("ueditor", this.company_core.introduction);
			},

      relatedCompanyRender: function (res) {
        console.log(res)
        this.related_companies = res.data.datalist;
      },

      // 修改logo
      changeCompanyLogo: function () {
        setTimeout(() => {
          $("#companylogo_modal").modal({
            backdrop: "static",
            keyboard: false
          });
        }, 0);
      },
      changePage: function (pageindex) {
        this.query_data.page_index = pageindex;
        $.post_json(
          appsettings.apiroot + "home/product/retrieve",
          this.query_data,
          this.callback_queryClick
        );
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

      //关联公司
      relatedCompanyChanged: function (company) {
        this.newRelatedCompany.related_company_oid = company.id;
        this.newRelatedCompany.company_name = company.name;
      },

      newRelatedCompanyClick: function () {
        console.log(this.company_core.oid)
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

    },
    computed: {}
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