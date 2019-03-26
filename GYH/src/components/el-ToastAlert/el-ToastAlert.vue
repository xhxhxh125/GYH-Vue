<template>
  <div></div>
</template>
<script>
export default {
  name: "el-toastalert",
  props: [],
  data: function() {
    return {
      show: false,
      config: {
        type: null,
        title: null,
        msg: null
      }
    };
  },
  components: {},
  mounted: function() {
    $.sound_path = appsettings.jsPrefix + "notification/";
  },
  created: function() {},
  watch: {
    show: function(newVal, oldVal) {
      var self = this;
      if (newVal === true) {
        var newNoty = new Noty({
          type: self.config.type,
          layout: "topRight",
          timeout: "3000",
          animation: {
            open: "animated fadeIn",
            close: "animated fadeOut"
          },
          closeWith: ["click", "button"],
          text:
            '<div class="g-mr-20"><div class="noty_body__icon"><i class="hs-admin-check"></i></div></div><div>' +
            self.config.title +
            "</div>",
          theme: "unify--v1"
        }).show();

        this.show = false;
      }
    }
  },
  methods: {
    showToast: function(type, title, msg) {
      this.config = {
        type: type,
        title: title,
        msg: msg
      };
      this.show = true;
    }
  }
};
</script>
<style>
</style>
