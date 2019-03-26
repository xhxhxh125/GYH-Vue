<template>
  <!-- #PAGE FRAME -->
  <div>
    <ElHeader></ElHeader>

    <section class="container-fluid px-0 g-pt-65">
      <div class="row no-gutters g-pos-rel g-overflow-x-hidden">
        <ElAside></ElAside>
        <slot name="mainslot">
        </slot>
      </div>
    </section>

    <ElConfirmDialog ref="confirm"></ElConfirmDialog>
    <ElLoading ref="loading"></ElLoading>
    <ElToastAlert ref="toastAlert"></ElToastAlert>
  </div>
  <!-- END FRAME -->
</template>
<script>
  import ElHeader from "components/el-Header/el-Header";
  import ElAside from "components/el-Aside/el-Aside";
  import ElFooter from "components/el-Footer/el-Footer";
  import ElConfirmDialog from "components/el-ConfirmDialog/el-ConfirmDialog";
  import ElLoading from "components/el-Loading/el-Loading";
  import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";

  export default {
    name: "el-pageframe",
    props: ["loading", "confirm"],
    data: function () {
      return {};
    },
    components: {
      ElHeader,
      ElAside,
      ElFooter,
      ElConfirmDialog,
      ElLoading,
      ElToastAlert
    },
    mounted: function () {
      //  console.log("into mounted.");
      $(".breadcrumb li").on("click", function () {
        if (this.html.indexOf("首页") >= 0) {
          window.location.href = appsettings.portal_root;
        }
      });
    },
    created: function () {
      var token = $.getUrlParam("com_oid");
      //if(token !=undefined&&token.length>0){
      //	window.localStorage.setItem("token", result.data.token);
      //}
    },
    methods: {
      confirmShow: function (msg) {
        this.$refs.confirm.confirmShow(msg);
      },
      showLoading: function (title) {
        this.$refs.loading.showLoading(title);
      },
      hideLoading: function () {
        this.$refs.loading.hideLoading();
      },
      showToast: function (type, title, msg) {
        this.$refs.toastAlert.showToast(type, title, msg);
      }
    }
  };
</script>
<style>
</style>