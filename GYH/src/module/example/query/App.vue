<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <!-- main -->

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

        edite_user: {},
        token: "",
        company_core: {
					logo: "/assets/common/img/com_default.jpg",
					registered_date: null,
					tags:null
				},
      };
    },
    components: {
      ElPageFrame,
      ElPager,
      ElBlockAlert,
      ElImgCopper,
      ElToastAlert
    },
    created: function () {
      this.token = window.localStorage.getItem("token");

      //默认显示出第一页的员工
      this.doSearch();
    },
    mounted: function () {
      this.$refs.pf.showLoading("加载中...");
      var self = this;
      setTimeout(() => {
        self.$refs.pf.hideLoading();
      }, 10000);
    },
    methods: {

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

          this.result_products = result.data.products;
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
      changePage: function (pageindex) {
        this.query_data.page_index = pageindex;
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

      changeUserImg: function () {
        setTimeout(() => {
          $("#companylogo_modal").modal({
            backdrop: "static",
            keyboard: false
          });
        }, 0);
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
			},
			companyCoreInfoRender: function (res) {
				this.company_core = res.data;
        console.log(this.company_core)
				this.setContent("ueditor", this.company_core.introduction);
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
          //gthis.query_data.pageTotal = res.data.page.total_page_count;
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
      }
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
  .close{
    padding:0;
    margin:0;
  }
</style>