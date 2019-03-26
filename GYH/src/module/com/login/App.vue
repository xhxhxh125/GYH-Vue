<template>
  <div>
    <!-- Login -->
    <section class="container g-py-100">
      <div class="row justify-content-center">
        <div class="col-sm-8 col-lg-5">
          <div class="g-brd-around g-brd-gray-light-v4 rounded g-py-40 g-px-30">
            <header class="text-center mb-4">
              <h2 class="h2 g-color-black g-font-weight-600">Login</h2>
            </header>

            <!-- Form -->
            <form class="g-py-15">
              <div class="mb-4">
                <label class="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13">Email:</label>
                <input
                  class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15"
                  type="email"
                  placeholder="请输入您的电子邮箱地址"
                  v-model="user_email"
                  @keyup="keyup"
                  @keydown="keydownFn"
                >
              </div>

              <div class="g-mb-35">
                <div class="row justify-content-between">
                  <div class="col align-self-center">
                    <label class="g-color-gray-dark-v2 g-font-weight-600 g-font-size-13">Password:</label>
                  </div>
                  <div class="col align-self-center text-right">
                    <a class="d-inline-block g-font-size-12 mb-2" href="#!"></a>
                  </div>
                </div>
                <input
                  class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15 mb-3"
                  type="password"
                  placeholder="输入密码"
                  v-model="user_password"
                  @keyup="keyup"
                  @keydown="keydownFn"
                >
                <div class="row justify-content-between">
                  <div class="col-4 align-self-center text-right">
                    <button
                      class="btn btn-md u-btn-primary rounded g-py-13 g-px-25"
                      type="button"
                      @click="Login()"
                    >Login</button>
                  </div>
                </div>
              </div>
            </form>
            <!-- End Form -->
            <footer class="text-center"></footer>
          </div>
        </div>
      </div>
    </section>
    <!-- End Login -->
    <International :pageid="'login'"></International>
  </div>
</template>

<script>
import "common/httputils"; //引用js
import htmlHelper from "common/htmlutils";
import htmlutils from "common/htmlutils";
import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
import International from "components/International/International";

export default {
  name: "app",
  i18n: International.lang,
  data: function() {
    return {
      reffer_url: "",
      user_email: "",
      user_password: "",

      inputvalid: true
    };
  },
  components: {
    ElBlockAlert,
    International
  },
  created: function() {
    //请求数据
    this.reffer_url = $.getUrlParam("ref");
  },
  mounted: function() {

  },
  methods: {
    keydownFn: function(e) {
      if (e.which === 13) {
        //会车时阻止提交表单
        e.preventDefault();
      }
    },

    keyup: function(e) {
      if (e.keyCode == 13) {
        e.preventDefault();
        this.Login();
      }
    },
    Login: function() {
      if (true) {
        //登录
        var data = {
          user_email: this.user_email,
          user_password: this.user_password
        };
        $.post_json(
          appsettings.apiroot + "account/cideplogin",
          data,
          this.callback_login
        );

        // var data = { login_account: this.user_email, user_password: this.user_password };
        // $.post_json(appsettings.apiroot + "account/cideplogin", data, this.callback_login);
      }
    },
    callback_login: function(result) {
      if (result != null && result.status == 0) {
        //记录token
        window.localStorage.setItem("token", result.data.token);
        //跳转回来源页面
        var default_index =
          result.data.default_index == null || result.data.default_index == ""
            ? "/"
            : result.data.default_index;
        var ref =
          this.reffer_url == null || this.reffer_url == ""
            ? default_index
            : this.reffer_url;
        window.localStorage.setItem("homeurl", default_index);
        window.localStorage.setItem("userid", this.user_email);
        window.location.href = ref;
      } else if (result.status == 1) {
        alert( "账号或密码错误 请重新登录!");
        return;
      } else {
        alert(result.message);
        return;
      }
    },
    changeLang: function(lang) {
      //set lang
      window.localStorage.setItem("lang", lang);
      //refresh current page
      window.location.href = window.location.href;
    }
  }
};
</script>

<style>
.logo {
  width: 300px;
  margin-top: 15px;
}
</style>
