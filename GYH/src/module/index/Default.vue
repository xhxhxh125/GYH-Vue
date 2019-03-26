<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <!-- main -->
        <div class="col g-ml-45 g-ml-0--lg g-pb-65--md">
          <h1>个人中心</h1>
        </div>
      </div>
    </ElPageFrame>
  </div>
</template>

<script>
import "common/httputils"; //引用js
import htmlHelper from "common/htmlutils";
import htmlutils from "common/htmlutils";
import ElPageFrame from "components/el-PageFrame/el-PageFrame";

export default {
  name: "app",
  data: function() {
    return {};
  },
  components: {
    ElPageFrame
  },
  created: function() {
    htmlutils.setPageTitle(appsettings.title);
  },
  mounted: function() {},
  methods: {}
};
</script>

<style>
</style>
