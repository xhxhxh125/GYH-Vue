<template>
  <div id="app">
    <ElPageFrame ref="pf"></ElPageFrame>
    <div id="main" role="main">
      <div id="ribbon">
        <span class="ribbon-button-alignment">
          <span id="refresh" class="btn btn-ribbon" data-action="resetWidgets" data-title="refresh" rel="tooltip" data-placement="bottom"
            data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings."
            data-html="true">
            <i class="fa fa-refresh"></i>
          </span>
        </span>
        <!-- breadcrumb -->
        <ol class="breadcrumb">
          <li><a :href="appsettings.portal_root">首页</a></li>
          <li>个人中心</li>
          <li>需求墙</li>
        </ol>
        <!-- end breadcrumb -->
        <section class="smart-form pull-right" style="padding:11px 0">
          <label class="toggle" style="font-size:12px;">
            <input type="checkbox" :checked="auto_refresh" @click="toggleAutoRefresh($event)">
            <i data-swchon-text="开" data-swchoff-text="关"></i>自动刷新</label>
        </section>
      </div>


      <div id="content">
        <div class="row">

          <section v-for="(i,idx) in [0,1,2]" :key="idx" class="col-sm-6 col-lg-4">
            <div v-if="index%3==i" v-for="(item,index) in requirements" :key="index" class="col-sm-12 no-padding">

              <div class="panel panel-default">
                <div class="panel-body status">
                  <div class="who clearfix">
                    <img :src="appsettings.userimg+item.account_pic" class="busy">
                    <span class="name">
                      <b>{{item.requirement_name}}</b>
                    </span>
                    <span class="from">
                      <b>{{item.user_email}} {{item.user_mobile}}</b>
                    </span>
                  </div>
                  <div class="text">
                    <p>
                      提出时间：{{item.update_time}}
                    </p>
                    <p>
                      截止时间：{{item.expire_time}}
                    </p>
                    <p>
                      {{item.description}}
                    </p>

                  </div>
                  <ul class="links">
                    <li>
                      <a href="javascript:void(0);">
                        <i class="fa fa-thumbs-o-up"></i> 已推荐: {{item.push_count}}人</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i class="fa fa-comment-o"></i> 已浏览: {{item.read_count}}人</a>
                    </li>

                  </ul>
                </div>
              </div>

            </div>
          </section>

        </div>


      </div>


    </div>
  </div>


</template>

<script>
  import "common/httputils"; //引用js
  import htmlHelper from "common/htmlutils";
  import ElPageFrame from "components/el-PageFrame/el-PageFrame";
  import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
  import ElPager from "components/el-Pager/el-Pager";
  import {
    setInterval,
    clearInterval
  } from 'timers';

  export default {
    name: "app",
    data: function () {
      return {
        query_data: {
          page_index: 0,
          page_size: 60,
          total_page_count: 0
        },
        requirements: null,
        auto_refresh: false,
        refresh_interval: null
      };
    },
    components: {
      ElPageFrame,
      ElPager
    },
    watch: {
      auto_refresh: function (newVal, oldVal) {
        var self = this;
        if (newVal === true) {
          refresh_interval = setInterval(function () {
            self.getRequirements();
          }, 10000);
        } else {
          clearInterval(self.refresh_interval);
        }
      },
    },
    computed: {},
    created: function () {

      this.getRequirements();

    },
    mounted: function () {},
    methods: {
      toggleAutoRefresh: function (event) {
        if (event.currentTarget.checked) {
          this.auto_refresh = true;
        }else{
          this.auto_refresh = false;
        }
      },
      getRequirements: function () {
        $.post_json(appsettings.apiroot + "requirement/retrieve", this.query_data, this.cb_getRequirements);
      },
      cb_getRequirements: function (res) {
        if (res != null && res.status == 0) {
          this.requirements = res.data.requirements;
          this.query_data.total_page_count = res.data.page.total_page_count;
          //this.$refs.pf.showToast("success","成功", "");
        } else {
          //this.$refs.pf.showToast("error", "失败", res.message);
        }
      },
      changePage: function (pageindex) {
        this.query_data.page_index = pageindex;
        this.getRequirements();
      }
    }
  };
</script>

<style>
  .pl {
    padding-left: 10px !important;
  }

  .pr {
    padding-right: 10px !important;
  }

  .row {
    margin: 0 -13px 0 -13px !important;
  }

  .widget-body {
    padding: 0 !important;
  }

  .border {
    border: solid 1px #ccc !important;
    border-bottom: none !important;
  }

  .no-padding .table-bordered {
    border-bottom: 1px solid #ccc !important;
  }

  .table-bordered,
  .no-padding>.table-responsive>.table-bordered {
    border-bottom: 1px solid #ccc !important;
  }

  .rr {
    margin-right: -20px;
    margin-left: 5px;
  }

  .rl {
    margin-right: 2px;
  }

  .nowrap th,
  .nowrap .nw {
    white-space: nowrap !important;
  }

  .nowrap {
    overflow-x: scroll !important;
  }

  .op {
    width: 180px;
  }

  .table {
    border-bottom: 1px solid #ccc !important;
  }

  .dropdown-menu {
    position: relative !important;
  }

  .jarviswidget>header {
    border: 0.5px solid #c2c2c2;
  }

  .fa-w {
    color: #03A9F4 !important;
  }

  .btn-group>a {
    margin-right: 5px;
  }
</style>