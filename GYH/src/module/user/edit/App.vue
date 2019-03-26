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
                        <a class="d-flex align-items-center u-link-v5 g-parent g-py-15 active" href="/user/edit.html">
                          <span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
                            <i class="hs-admin-user"></i>
                          </span>
                          <span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">基本信息</span>
                        </a>
                      </li>
                      <li class="g-brd-top g-brd-gray-light-v7 mb-0">
                        <a class="d-flex align-items-center u-link-v5 g-parent g-py-15" href="/user/edit_account.html">
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
                <div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-20--md">
                  <form class="js-validate">
                    <header>
                      <h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">基本信息</h2>
                    </header>

                    <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-30--md">

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#firstName">名字</label>
                      </div>

                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                            <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                          </span>
                          <input id="firstName" name="firstName" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                            type="text" v-model="userinfo.private_name">
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0">性别</label>
                      </div>

                      <div class="col-md-9 align-self-center">
                        <div class="row g-mx-minus-10">
                          <div class="col-md-auto align-self-center g-width-180--md g-px-10">
                            <div class="form-group u-select--v2 g-pos-rel g-brd-gray-light-v7 g-rounded-4 mb-0">
                              <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                                <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                              </span>
                              <select class="js-select u-select--v2-select w-100" required="required" style="display: none;">
                                <option value="男" selected="selected" name="sex" :checked="userinfo.sex==0" @change="userinfo.sex=0">男</option>
                                <option value="女" name="sex" :checked="userinfo.sex==1" @change="userinfo.sex=1">女</option>
                              </select>
                              <i class="hs-admin-angle-down g-absolute-centered--y g-right-0 g-color-gray-light-v6 ml-auto g-mr-15"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0">生日</label>
                      </div>

                      <div class="col-md-9 align-self-center">
                        <div class="row g-mx-minus-10">
                          <div class="col-md align-self-center g-px-10 g-mb-20 g-mb-0--md">
                            <div class="form-group u-select--v2 g-pos-rel g-brd-gray-light-v7 g-rounded-4 mb-0">
                              <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                                <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                              </span>
                              <select class="js-select u-select--v2-select w-100" required="required" style="display: none;">
                                <option>1900</option>
                                <option>1901</option>
                                <option>1902</option>
                                <option>1903</option>
                                <option>1904</option>
                                <option>1905</option>
                                <option>1906</option>
                                <option>1907</option>
                                <option>1908</option>
                                <option>1909</option>
                                <option>1910</option>
                                <option>1911</option>
                                <option>1912</option>
                                <option>1913</option>
                                <option>1914</option>
                                <option>1915</option>
                                <option>1916</option>
                                <option>1917</option>
                                <option>1918</option>
                                <option>1919</option>
                                <option>1920</option>
                                <option>1921</option>
                                <option>1922</option>
                                <option>1923</option>
                                <option>1924</option>
                                <option>1925</option>
                                <option>1926</option>
                                <option>1927</option>
                                <option>1928</option>
                                <option>1929</option>
                                <option>1930</option>
                                <option>1931</option>
                                <option>1932</option>
                                <option>1933</option>
                                <option>1934</option>
                                <option>1935</option>
                                <option>1936</option>
                                <option>1937</option>
                                <option>1938</option>
                                <option>1939</option>
                                <option>1940</option>
                                <option>1941</option>
                                <option>1942</option>
                                <option>1943</option>
                                <option>1944</option>
                                <option>1945</option>
                                <option>1946</option>
                                <option>1947</option>
                                <option>1948</option>
                                <option>1949</option>
                                <option>1950</option>
                                <option>1951</option>
                                <option>1952</option>
                                <option>1953</option>
                                <option>1954</option>
                                <option>1955</option>
                                <option>1956</option>
                                <option>1957</option>
                                <option>1958</option>
                                <option>1959</option>
                                <option>1960</option>
                                <option>1961</option>
                                <option>1962</option>
                                <option>1963</option>
                                <option>1964</option>
                                <option>1965</option>
                                <option>1966</option>
                                <option>1967</option>
                                <option>1968</option>
                                <option>1969</option>
                                <option>1970</option>
                                <option>1971</option>
                                <option>1972</option>
                                <option>1973</option>
                                <option>1974</option>
                                <option>1975</option>
                                <option>1976</option>
                                <option>1977</option>
                                <option>1978</option>
                                <option>1979</option>
                                <option>1980</option>
                                <option>1981</option>
                                <option>1982</option>
                                <option>1983</option>
                                <option>1984</option>
                                <option>1985</option>
                                <option selected="selected">1986</option>
                                <option>1987</option>
                                <option>1988</option>
                                <option>1989</option>
                                <option>1990</option>
                                <option>1991</option>
                                <option>1992</option>
                                <option>1993</option>
                                <option>1994</option>
                                <option>1995</option>
                                <option>1996</option>
                                <option>1997</option>
                                <option>1998</option>
                                <option>1999</option>
                                <option>2000</option>
                                <option>2001</option>
                                <option>2002</option>
                                <option>2003</option>
                                <option>2004</option>
                                <option>2005</option>
                                <option>2006</option>
                                <option>2007</option>
                                <option>2008</option>
                                <option>2009</option>
                                <option>2010</option>
                                <option>2011</option>
                                <option>2012</option>
                                <option>2013</option>
                                <option>2014</option>
                                <option>2015</option>
                                <option>2016</option>
                                <option>2017</option>
                              </select>
                              <i class="hs-admin-angle-down g-absolute-centered--y g-right-0 g-color-gray-light-v6 ml-auto g-mr-15"></i>
                            </div>
                          </div>

                          <div class="col-md align-self-center g-px-10 g-mb-20 g-mb-0--md">
                            <div class="form-group u-select--v2 g-pos-rel g-brd-gray-light-v7 g-rounded-4 mb-0">
                              <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                                <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                              </span>
                              <select class="js-select u-select--v2-select w-100" required="required" style="display: none;">
                                <option>一月</option>
                                <option>二月</option>
                                <option>三月</option>
                                <option selected="selected">四月</option>
                                <option>五月</option>
                                <option>六月</option>
                                <option>七月</option>
                                <option>八月</option>
                                <option>九月</option>
                                <option>十月</option>
                                <option>十一月</option>
                                <option>十二月</option>
                              </select>
                              <i class="hs-admin-angle-down g-absolute-centered--y g-right-0 g-color-gray-light-v6 ml-auto g-mr-15"></i>
                            </div>
                          </div>

                          <div class="col-md align-self-center g-px-10 g-mb-20 g-mb-0--md">
                            <div class="form-group u-select--v2 g-pos-rel g-brd-gray-light-v7 g-rounded-4 mb-0">
                              <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                                <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                              </span>
                              <select class="js-select u-select--v2-select w-100" required="required" style="display: none;">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option selected="selected">12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                              </select>
                              <i class="hs-admin-angle-down g-absolute-centered--y g-right-0 g-color-gray-light-v6 ml-auto g-mr-15"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> -->

                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#email">职位</label>
                      </div>

                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                            <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                          </span>
                          <input id="email" type="text" name="title"  class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                            placeholder="职位" v-model="userinfo.title">
                        </div>
                      </div>
                    </div>
                    <div class="row g-mb-20">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#location">个人简介</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                            <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                          </span>
                          <textarea id="location" name="location" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                            placeholder="个人简介" v-model="userinfo.self_introduction">
                          </textarea>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a class="btn btn-xl u-btn-secondary g-font-size-default g-px-40" href="javascript:void(0);" @click="saveAccountPrivateInfo">提交</a>
                    </div>
                  </form>
                </div>
              </div>

              <div class="modal" id="accountpicture_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
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
        userinfo: {
          oid: "",
          picture: "/assets/common/img/user_default.jpg"
        },
        functionlist: [],
        default_role: {},
        userrolesshow: [],
        userroles: [],
        allroles: []
      };
    },
    components: {
      ElPageFrame,
      ElBlockAlert,
      ElImgCopper,
      ElToastAlert
    },
    created: function () {
      var id = $.getUrlParam("id");
      this.user_type = $.getUrlParam("t");
      this.userinfo.company_oid = $.getUrlParam("coid");

      //if(this.user_type=='self'||(id!=undefined&&id.length>0)){
      var body = {
        account_oid: id
      };
      $.post_json(
        appsettings.apiroot + "account/info",
        body,
        this.userInfoRender
      );
      //}
      //self.util_service.getComAttachTypeList().subscribe(res => self.attchTypes = res.data);
      $.post_json(
        appsettings.apiroot + "account/userfunction", {
          pageid: "user2_account_edit"
        },
        this.functionlist_callback
      );
    },
    mounted: function () {

    },
    methods: {

      changeUserImg: function () {
        setTimeout(() => {
          $("#accountpicture_modal").modal({
            backdrop: "static",
            keyboard: false
          });
        }, 0);
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

      userInfoRender: function (res) {
        if (res.status == 0) {
          this.userinfo = res.data;
        } else {
          this.$refs.toastAlert.config = {
            type: "error",
            title: "错误",
            msg: res.message
          };
        }
      },

      saveAccountPrivateInfo: function () {
        if (this.userinfo.oid == null) {
          $.post_json(
            appsettings.apiroot + "admin/account/create",
            this.userinfo,
            this.saveAccountPrivateInfoCallback
          );
        } else {
          $.post_json(
            appsettings.apiroot + "admin/account/update",
            this.userinfo,
            this.saveAccountPrivateInfoCallback
          );
        }

      },

      saveAccountPrivateInfoCallback: function (res) {
        if (res.status == 0) {
          if (this.userinfo.oid == undefined || this.userinfo.oid.length == 0) {
            this.userinfo.oid = res.data.oid;
          }

          this.$refs.pf.confirmShow({
            title: "提交成功",
            msg: "个人信息修改提交成功",
            only_alert: true
          });
        } else {
          this.$refs.toastAlert.config = {
            type: "error",
            title: "错误",
            msg: res.message
          };
          this.$refs.toastAlert.show = true;
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