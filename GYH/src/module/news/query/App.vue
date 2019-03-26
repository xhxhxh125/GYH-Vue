<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <div
          id="main"
          role="main"
        >

          <div class="col g-ml-45 g-ml-0--lg g-pb-65--md">

            <div class="g-pa-20">
              <div class="media g-mb-30">
                <div class="d-flex align-self-center">
                  <h1 class="g-font-weight-300 g-font-size-28 g-color-black mb-0">我的新闻</h1>
                </div>
                <div class="media-body align-self-center g-ml-10 g-ml-0--md">
                  <div class="input-group g-pos-rel g-max-width-380 float-right">
                    <input
                      class="form-control h-100 g-font-size-default g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-20 g-pl-20 g-pr-50 g-py-10"
                      type="text"
                      placeholder="搜索"
                    >
                    <button
                      class="btn g-pos-abs g-top-0 g-right-0 g-z-index-2 g-width-60 h-100 g-bg-transparent g-font-size-16 g-color-primary g-color-secondary--hover rounded-0"
                      type="submit"
                       @click="queryClick()"
                    >
                      <i class="hs-admin-search g-absolute-centered"></i>
                    </button>
                  </div>
                </div>
                <div class="">
                  <a
                    class="js-fancybox btn btn-xl u-btn-secondary g-width-160--md g-font-size-default g-ml-10"
                    href="/news/edit.html"
                    data-src="#new-project-form"
                    data-speed="350"
                    data-options='{"touch" : false}'
                  >新增新闻
                  </a>
                </div>
              </div>

              <div class="table-responsive g-mb-40">
                <table
                  class="js-datatable table u-table--v3 u-editable-table--v1 g-color-black"
                  data-dt-info="#datatableInfo1"
                  data-dt-search="#datatableSearch1"
                  data-dt-entries="#datatableEntries1"
                  data-dt-is-show-paging="true"
                  data-dt-pagination="datatablePagination1"
                  data-dt-page-length="5"
                  data-dt-is-responsive="false"
                  data-dt-pagination-classes="list-inline text-right mb-0"
                  data-dt-pagination-items-classes="list-inline-item g-hidden-sm-down"
                  data-dt-pagination-links-classes="u-pagination-v1__item u-pagination-v1-2 g-bg-secondary--active g-color-white--active g-brd-gray-light-v7 g-brd-secondary--hover g-brd-secondary--active g-rounded-4 g-py-8 g-px-15"
                  data-dt-pagination-next-classes="list-inline-item"
                  data-dt-pagination-next-link-classes="u-pagination-v1__item u-pagination-v1-2 g-brd-gray-light-v7 g-brd-secondary--hover g-rounded-4 g-py-8 g-px-12"
                  data-dt-pagination-next-link-markup='<span class="g-line-height-1 g-valign-middle" aria-hidden="true"><i class="hs-admin-angle-right"></i></span><span class="sr-only">Next</span>'
                  data-dt-pagination-prev-classes="list-inline-item"
                  data-dt-pagination-prev-link-classes="u-pagination-v1__item u-pagination-v1-2 g-brd-gray-light-v7 g-brd-secondary--hover g-rounded-4 g-py-8 g-px-12"
                  data-dt-pagination-prev-link-markup='<span class="g-line-height-1 g-valign-middle" aria-hidden="true"><i class="hs-admin-angle-left"></i></span><span class="sr-only">Prev</span>'
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>新闻名字</th>
                      <th>作者</th>
                      <th>日期</th>
                      <th>状态</th>
                      <th>操作</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      v-for="(news,index) in newsList"
                      :key="index"
                    >
                      <td>{{index+1}}</td>
                      <td>{{news.caption}}</td>
                      <td>{{news.account_name}}</td>
                      <td>{{getDateTime(news.update_time)}}</td>
                      <td>
                        <span
                      v-if="news.status==0"
                      class="u-tags-v1 text-center g-brd-around  g-width-130 g-brd-around g-rounded-50 g-py-4 g-px-15 g-brd-teal-v2 g-bg-teal-v2 g-font-weight-400 g-color-white g-rounded-50 g-px-10"
                    >审核通过</span>
                        <span
                      v-if="news.status==1"
                      class="u-tags-v1 text-center g-brd-around  g-width-130 g-brd-around g-rounded-50 g-py-4 g-px-15 g-font-weight-400 g-color-white g-rounded-50 g-px-10"
                      style="background:#2196F3;"
                    >未审核</span>
                        <span
                      v-if="news.status==2"
                      class="u-tags-v1 text-center g-brd-around  g-width-130 g-brd-around g-rounded-50 g-py-4 g-px-15 g-brd-teal-v2 g-bg-teal-v2 g-font-weight-400 g-color-white g-rounded-50 g-px-10"
                    >平台展示</span>
                      </td>
                      <td>
                        <a
                          class="js-edit u-link-v5 g-color-gray-light-v6 g-color-secondary--hover"
                          :href="'/news/edit.html?id='+news.oid"
                        >
                          <i class="hs-admin-pencil"></i>
                        </a>
                        <a
                          class="u-link-v5 g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover g-ml-12"
                         @click="deleteNews(news)"
                        >
                          <i class="hs-admin-trash"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="media align-items-center g-mb-45 g-pa-20">
              <nav
                id="datatablePagination1"
                class="d-flex ml-auto"
                aria-label="Page Navigation"
              ></nav>
            </div>
          </div>

          <div id="ribbon">
            <span class="ribbon-button-alignment">
              <span
                id="refresh"
                class="btn btn-ribbon"
                data-action="resetWidgets"
                data-title="refresh"
                rel="tooltip"
                data-placement="bottom"
                data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings."
                data-html="true"
              >
                <i class="fa fa-refresh"></i>
              </span>
            </span>
            <!-- breadcrumb -->
            <ol class="breadcrumb">
              <li>个人中心</li>
              <li>新闻管理</li>
              <li>查询</li>
            </ol>
            <!-- end breadcrumb -->
          </div>

          <div id="content">
            <div class="row">
              <!-- NEW COL START -->
              <article class="col-sm-12 col-md-12">
                <div class="jarviswidget">
                  <div class="widget-body">
                    <div
                      id="query-form"
                      class="smart-form"
                    >
                      <fieldset>

                        <div class="row smart-form">
                          <section class="col col-4">
                            <label class="label">新闻标题</label>
                            <label class="input">
                              <input
                                type="text"
                                v-model="query_data.caption"
                              >
                            </label>
                          </section>

                          <section class="col col-lg-4">
                            <label class="label">起始时间</label>
                            <label class="input">
                              <i class="icon-append fa fa-calendar"></i>
                              <input
                                id="start_time"
                                type="text"
                                name="start_time"
                                onclick="WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd'})"
                                v-model="query_data.start_time"
                              >
                            </label>
                          </section>
                          <section class="col col-lg-4">
                            <label class="label">截止时间</label>
                            <label class="input">
                              <i class="icon-append fa fa-calendar"></i>
                              <input
                                id="end_time"
                                type="text"
                                name="end_time"
                                onclick="WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd'})"
                                v-model="query_data.end_time"
                              >
                            </label>
                          </section>
                        </div>
                      </fieldset>

                      <footer>
                        <a
                          class="btn btn-primary pull-left"
                          href="javascript:void(0);"
                          @click="queryClick()"
                        >
                          <i class="fa fa-search"></i> 查询</a>
                        <a
                          href="/news/edit.html"
                          target="_blank"
                          class="btn btn-success pull-left"
                        >
                          新增</a>
                      </footer>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div class="row">
              <!-- NEW WIDGET START -->
              <article class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <!-- Widget ID (each widget will need unique ID)-->
                <div
                  class="jarviswidget jarviswidget-color-blueDark"
                  id="wid-id-1"
                  data-widget-editbutton="false"
                  data-widget-colorbutton="false"
                  data-widget-custombutton="false"
                >
                  <header>
                    <span class="widget-icon">
                      <i class="fa fa-pencil-square-o"></i>
                    </span>
                    <h2>查询结果</h2>
                  </header>
                  <!-- datatable-->
                  <div>
                    <div class="jarviswidget-editbox">
                    </div>
                    <div class="widget-body no-padding">
                      <p class="table-responsive custom-scroll">
                        <table
                          id="datatable_tabletools"
                          class="nowrap table table-bordered"
                        >
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>操作</th>
                              <th>新闻标题</th>
                              <th>作者</th>
                              <th>状态</th>
                              <th>发布时间</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              class="row-show"
                              v-for="(news,index) in newsList"
                              :key="index"
                            >
                              <td>{{index+1}}</td>

                              <!-- 操作当前记录 -->
                              <td class="op">
                                <div class="btn-group">
                                  <a
                                    :href="'/news/edit.html?id='+news.oid"
                                    target="_blank"
                                    class="btn btn-default btn-xs"
                                  >编辑</a>
                                  <a
                                    @click="deleteNews(news)"
                                    class="btn btn-xs btn-danger"
                                  >删除</a>
                                </div>
                              </td>
                              <td>{{news.caption}}</td>
                              <td>{{news.account_name}}</td>
                              <td v-if="news.status==0"><span class="label label-success">审核通过</span></td>
                              <td v-if="news.status==1"><span class="label label-warning">未审核</span></td>
                              <td v-if="news.status==2"><span class="label label-info">平台展示</span></td>
                              <td>{{getDateTime(news.update_time)}}</td>
                            </tr>
                          </tbody>
                        </table>
                      </p>
                    </div>
                    <ElPager
                      :pageTotal="query_data.pageTotal"
                      @changePage="changePage"
                    ></ElPager>
                  </div>
                  <!-- end datatable -->
                </div>
                <!-- end widget -->
              </article>
              <!-- WIDGET END -->
            </div>
          </div>
        </div>
      </div>
    </ElPageFrame>

  </div>

</template>

<script>
import "common/httputils"; //引用js
import htmlHelper from "common/htmlutils";
import ElPageFrame from "components/el-PageFrame/el-PageFrame";
import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
import ElPager from "components/el-Pager/el-Pager";

export default {
  name: "app",
  data: function() {
    return {
      query_data: {
        caption: null,
        company_name: null,
        start_time: null,
        end_time: null,
        statuses: "",
        page_index: 1,
        page_size: 20
      },
      newsList: null,
      showToast: false,
      functionlist: []
    };
  },
  components: {
    ElPageFrame,
    ElPager
  },
  computed: {},
  created: function() {},
  mounted: function() {},
  methods: {
    deleteNews: function(news, index) {
      news.index = index;
      //alert: 是否确定删除产品
      var that = this;
      //confirm
      this.$refs.pf.confirmShow({
        action_code: "deleteNews",
        title: "确定要删除该新闻吗？",
        msg: "新闻名称：" + news.caption,
        success: function(res) {
          if (res.confirm == true) {
            var data = {};
            data.oid = news.oid;
            $.post_json(
              appsettings.apiroot + "home/news/delete",
              data,
              that.callback_deleteNews,
              news
            );

            //show loading
            that.$refs.pf.showLoading("正在删除....");
            setTimeout(function() {
              that.$refs.pf.hideLoading();
            }, 10000);
          }
        }
      });
    },
    callback_deleteNews: function(result, pro) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        //pro.status = -1;
        this.newsList.splice(pro.index, 1);
        this.$refs.pf.showToast("success", "删除新闻成功", "");
      } else {
        this.$refs.pf.showToast("error", "删除新闻出现异常", result.message);
      }
    },

    queryClick: function() {
      var id = $.getUrlParam("id");
      this.query_data.company_oid = id;
      this.query_data.page_index = 1;
      this.query_data.start_time = $("#start_time").val();
      this.query_data.end_time = $("#end_time").val();
      $.post_json(
        appsettings.apiroot + "home/news/retrieve",
        this.query_data,
        this.callback_queryClick
      );
    },
    callback_queryClick: function(result) {
      if (result != null && result.status == 0) {
        this.newsList = result.data.news_list;
        this.query_data.pageTotal = result.data.page.TotalPageCount;
        this.query_data.page_index = result.data.page.PageIndex;
        if (this.newsList == null || this.newsList.length == 0) {
          this.$refs.pf.showToast("warning", "没有符合条件的新闻", "");
        }
      } else {
        this.$refs.pf.showToast(
          "error",
          "查询新闻信息出现异常",
          result.message
        );
      }
    },
    changePage: function(pageindex) {
      this.query_data.page_index = pageindex;
      $.post_json(
        appsettings.apiroot_v2 + "home/news/retrieve",
        this.query_data,
        this.callback_queryClick
      );
    },
    getDateTime: function(datatime) {
      var minDate = new Date("1911/1/1");
      var actDate = new Date(datatime);
      if (actDate < minDate) {
        return "";
      } else {
        return datatime;
      }
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
.no-padding > .table-responsive > .table-bordered {
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
  width: 170px;
}
.op a {
  margin-right: 20px;
}

.table {
  border-bottom: 1px solid #ccc !important;
}

.dropdown-menu {
  position: relative !important;
}
</style>