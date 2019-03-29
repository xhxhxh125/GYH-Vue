<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <!-- 新插入的页面 -->
        
        <!-- main -->
        <div class="col g-ml-50 g-ml-0--lg g-overflow-hidden">
          <div class="g-pa-40">


            <div class="media">
              <div class="d-flex align-self-center">
                <h1 class="g-font-weight-300 g-font-size-28 g-color-black mb-0">产品维护</h1>
              </div>

              <div class="media-body align-self-center text-right">
                <a
                  class="btn btn-xl u-btn-secondary g-width-160--md g-font-size-default g-ml-10"
                  href="#!"
                  @click="createNew()"
                >添加新产品</a>
              </div>
            </div>


          <hr class="d-flex g-brd-gray-light-v7 g-my-30">


          <div class="media g-mb-30">


            <div class="d-flex align-self-center align-items-center">
              <span class="g-hidden-sm-down g-color-gray-dark-v6 g-mr-12">状态:</span>

              <div
                class="u-select--v1 g-pr-20"
                data-toggle="dropdown"
              >
                <div class="btn-group bootstrap-select js-select u-select--v1-select w-100">
                  <button
                    type="button"
                    class="btn dropdown-toggle btn-default"
                    data-toggle="dropdown"
                    role="button"
                    title="Archive"
                    aria-expanded="false"
                  >
                    <span class="bs-caret">
                      <span class="caret"></span>
                    </span>
                  </button>
                  <div
                    class="dropdown-menu open"
                    role="combobox"
                    style="max-height: 647.188px; overflow: hidden; min-height: 3px; position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(30px, 16px, 0px);"
                    x-placement="bottom-start"
                  >
                    <ul
                      class="dropdown-menu inner"
                      role="listbox"
                      aria-expanded="false"
                      style="max-height: 645.188px; overflow-y: auto; min-height: 1px;"
                    >
                      <li
                        data-original-index="0"
                        class=""
                      ><a
                          tabindex="0"
                          class=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        ><span class="d-flex align-items-center"><span class="u-badge-v2--md g-pos-stc g-transform-origin--top-left g-bg-lightblue-v3 g-mr-8--sm"></span><span class="g-hidden-sm-down g-line-height-1_2 g-color-black">正在审核</span></span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
                      <li
                        data-original-index="1"
                        class=""
                      ><a
                          tabindex="0"
                          class=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        ><span class="d-flex align-items-center"><span class="u-badge-v2--md g-pos-stc g-transform-origin--top-left g-bg-teal-v2 g-mr-8--sm"></span><span class="g-hidden-sm-down g-line-height-1_2 g-color-black">已审核</span></span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
                      <li
                        data-original-index="2"
                        class=""
                      ><a
                          tabindex="0"
                          class=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        ><span class="d-flex align-items-center"><span class="u-badge-v2--md g-pos-stc g-transform-origin--top-left g-bg-lightred-v2 g-mr-8--sm"></span><span class="g-hidden-sm-down g-line-height-1_2 g-color-black">已完成</span></span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
                      <li
                        data-original-index="3"
                        class="selected"
                      ><a
                          tabindex="0"
                          class=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="true"
                        ><span class="d-flex align-items-center"><span class="u-badge-v2--md g-pos-stc g-transform-origin--top-left g-bg-gray-light-v6 g-mr-8--sm"></span><span class="g-hidden-sm-down g-line-height-1_2 g-color-black">未完成</span></span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
                    </ul>
                  </div><select
                    class="js-select u-select--v1-select w-100"
                    style="display: none;"
                    tabindex="-98"
                  >
                    <option data-content="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;u-badge-v2--md g-pos-stc g-transform-origin--top-left g-bg-lightblue-v3 g-mr-8--sm&quot;></span><span class=&quot;g-hidden-sm-down g-line-height-1_2 g-color-black&quot;>正在审核</span></span>">
                      正在审核</option>
                    <option data-content="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;u-badge-v2--md g-pos-stc g-transform-origin--top-left g-bg-teal-v2 g-mr-8--sm&quot;></span><span class=&quot;g-hidden-sm-down g-line-height-1_2 g-color-black&quot;>已审核</span></span>">
                      已审核</option>
                    <option data-content="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;u-badge-v2--md g-pos-stc g-transform-origin--top-left g-bg-lightred-v2 g-mr-8--sm&quot;></span><span class=&quot;g-hidden-sm-down g-line-height-1_2 g-color-black&quot;>已完成</span></span>">
                      已完成</option>
                    <option data-content="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;u-badge-v2--md g-pos-stc g-transform-origin--top-left g-bg-gray-light-v6 g-mr-8--sm&quot;></span><span class=&quot;g-hidden-sm-down g-line-height-1_2 g-color-black&quot;>未完成</span></span>">
                      未完成</option>
                  </select>
                </div>
                <i class="hs-admin-angle-down g-absolute-centered--y g-right-0 g-color-gray-light-v6 ml-auto"></i>
              </div>
            </div>

            <div class="d-flex align-self-center align-items-center g-ml-10 g-ml-20--md g-ml-40--lg">
              <span class="g-hidden-sm-down g-color-gray-dark-v6 g-mr-12">类别:</span>

              <div
                class="u-select--v1 g-pr-20"
                data-toggle="dropdown"
              >
                <div class="btn-group bootstrap-select js-select u-select--v1-select w-100"><button
                    type="button"
                    class="btn dropdown-toggle btn-default"
                    data-toggle="dropdown"
                    role="button"
                    title="胡尔达伍兹"
                    aria-expanded="false"
                  ><span class="bs-caret"><span class="caret"></span></span></button>
                  <div
                    class="dropdown-menu open"
                    role="combobox"
                    style="max-height: 635.313px; overflow: hidden; min-height: 0px; position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(30px, 40px, 0px);"
                    x-placement="bottom-start"
                  >
                    <ul
                      class="dropdown-menu inner"
                      role="listbox"
                      aria-expanded="false"
                      style="max-height: 633.313px; overflow-y: auto; min-height: 0px;"
                    >
                      <li
                        data-original-index="0"
                        class=""
                      ><a
                          tabindex="0"
                          class=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        ><span class="d-flex align-items-center"><img
                              class="g-width-40 g-height-40 rounded-circle g-mr-12--sm"
                              src="../../../assets/common/img/130x130/img1.jpg"
                              alt="Image Description"
                            ><span class="g-hidden-sm-down g-line-height-1 g-color-black">乔丹卡罗尔</span></span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
                      <li
                        data-original-index="1"
                        class=""
                      ><a
                          tabindex="0"
                          class=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="false"
                        ><span class="d-flex align-items-center"><img
                              class="g-width-40 g-height-40 rounded-circle g-mr-12--sm"
                              src="../../../assets/common/img/130x130/img1.jpg"
                              alt="Image Description"
                            ><span class="g-hidden-sm-down g-line-height-1 g-color-black">约翰·多伊</span></span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
                      <li
                        data-original-index="2"
                        class="selected"
                      ><a
                          tabindex="0"
                          class=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="true"
                        ><span class="d-flex align-items-center"><img
                              class="g-width-40 g-height-40 rounded-circle g-mr-12--sm"
                              src="../../../assets/common/img/130x130/img1.jpg"
                              alt="Image Description"
                            ><span class="g-hidden-sm-down g-line-height-1 g-color-black">胡尔达伍兹</span></span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
                    </ul>
                  </div><select
                    class="js-select u-select--v1-select w-100"
                    style="display: none;"
                    tabindex="-98"
                  >
                    <option data-content="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;g-width-40 g-height-40 rounded-circle g-mr-12--sm&quot; src=&quot;../../../assets/common/img/130x130/img1.jpg&quot; alt=&quot;Image Description&quot;><span class=&quot;g-hidden-sm-down g-line-height-1 g-color-black&quot;>乔丹卡罗尔</span></span>">
                      乔丹卡罗尔</option>
                    <option data-content="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;g-width-40 g-height-40 rounded-circle g-mr-12--sm&quot; src=&quot;../../../assets/common/img/130x130/img1.jpg&quot; alt=&quot;Image Description&quot;><span class=&quot;g-hidden-sm-down g-line-height-1 g-color-black&quot;>约翰·多伊</span></span>">
                      约翰·多伊</option>
                    <option data-content="<span class=&quot;d-flex align-items-center&quot;><img class=&quot;g-width-40 g-height-40 rounded-circle g-mr-12--sm&quot; src=&quot;../../../assets/common/img/130x130/img1.jpg&quot; alt=&quot;Image Description&quot;><span class=&quot;g-hidden-sm-down g-line-height-1 g-color-black&quot;>胡尔达伍兹</span></span>">
                      胡尔达伍兹</option>
                  </select>
                </div>
                <i class="hs-admin-angle-down g-absolute-centered--y g-right-0 g-color-gray-light-v6 ml-auto"></i>
              </div>
            </div>

            <div class="media-body align-self-center g-ml-10 g-ml-0--md">
              <div class="input-group g-pos-rel g-max-width-380 float-right">
                <input
                  class="form-control h-100 g-font-size-default g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-20 g-pl-20 g-pr-50 g-py-10"
                  type="text"
                  placeholder="搜索"
                  v-model="query_data.product_name"
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

          </div>



          <!-- 列表 -->
            <div class="row">

              <div
                class="col-md-6 col-lg-4 g-mb-30"
                v-for="(pro,index) in result_products"
                :key="index"
              >
                <div class="card h-100 g-brd-gray-light-v7 rounded">
                  <header class="card-header g-bg-transparent g-brd-bottom-none g-pa-20 g-pa-30--sm">
                    <div class="media g-mb-15">
                      <div class="d-flex align-self-center">这是系列这是系列</div>

                      <div class="media-body d-flex justify-content-end">
                        <div class="g-pos-rel g-z-index-2">
                          <a
                            :id="forId(index,1)"
                            class="u-link-v5 g-line-height-0 g-font-size-24 g-color-gray-light-v6 g-color-secondary--hover"
                            href="#!"
                            :aria-controls="forId(index,2)"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-dropdown-event="click"
                            :data-dropdown-target="forId(index,3)"
                            data-dropdown-type="jquery-slide"
                          >
                            <i class="hs-admin-more-alt g-ml-20"></i>
                          </a>

                          <div
                            :id="forId(index,2)"
                            class="u-shadow-v31 g-pos-abs g-right-0 g-z-index-2 g-bg-white u-dropdown--css-animation u-dropdown--hidden u-dropdown--reverse-y u-dropdown--jquery-slide"
                            :aria-labelledby="forId(index,1)"
                            style="display: none;"
                          >
                            <ul class="list-unstyled g-nowrap mb-0">
                              <li>
                                <a
                                  class="d-flex align-items-center u-link-v5 g-bg-gray-light-v8--hover g-font-size-12 g-font-size-default--md g-color-gray-dark-v6 g-px-25 g-py-14"
                                  :href="'/p/edit.html?id='+pro.oid+'&c='+pro.category+'&cnn='+catInfo.name"
                                >
                                  <i class="hs-admin-pencil g-font-size-18 g-color-gray-light-v6 g-mr-10 g-mr-15--md"></i>
                                  编辑
                                </a>
                              </li>
                              <li>
                                <a
                                  class="d-flex align-items-center u-link-v5 g-bg-gray-light-v8--hover g-font-size-12 g-font-size-default--md g-color-gray-dark-v6 g-px-25 g-py-14"
                                  href="#!"
                                  @click="deleteProduct(pro,index)"
                                >
                                  <i class="hs-admin-trash g-font-size-18 g-color-gray-light-v6 g-mr-10 g-mr-15--md"></i>
                                  删除
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>

                    <h3 class="g-font-weight-300 g-font-size-20 g-color-black g-mb-15">{{pro.product_name}}</h3>
                    <span
                      v-if="pro.status==0"
                      class="u-tags-v1 text-center g-brd-around  g-width-130 g-brd-around g-rounded-50 g-py-4 g-px-15 g-brd-teal-v2 g-bg-teal-v2 g-font-weight-400 g-color-white g-rounded-50 g-px-10"
                    >正常</span>
                    <span
                      v-if="pro.status==1"
                      class="u-tags-v1 text-center g-brd-around  g-width-130 g-brd-around g-rounded-50 g-py-4 g-px-15 g-font-weight-400 g-color-white g-rounded-50 g-px-10"
                      style="background:#2196F3;"
                    >待审核</span>
                    <span
                      v-if="pro.status==-1"
                      class="u-tags-v1 text-center g-brd-around  g-width-130 g-brd-around g-rounded-50 g-py-4 g-px-15 g-font-weight-400 g-rounded-50 g-px-10"
                      style="background:#e9e9e9;color: black"
                    >已删除</span>
                    <span
                      v-if="pro.status==-2"
                      class="u-tags-v1 text-center g-brd-around  g-width-130 g-brd-around g-rounded-50 g-py-4 g-px-15 g-font-weight-400 g-color-white g-rounded-50 g-px-10"
                      style="background:red;"
                    >审核不通过</span>
                  </header>

                  <hr class="d-flex g-brd-gray-light-v7 g-mx-20 g-mx-30--sm my-0">

                  <div class="card-block d-flex justify-content-between g-px-20 g-px-30--sm g-py-15 g-py-20--sm">
                    <div>
                      <img
                        class="g-width-100 g-height-100"
                        src="../../../assets/common/img/130x130/img1.jpg"
                        alt="Image Description"
                      >
                    </div>

                    <div>
                      <img
                        class="g-width-100 g-height-100"
                        src="../../../assets/common/img/130x130/img1.jpg"
                        alt="Image Description"
                      >
                    </div>

                    <div>
                      <img
                        class="g-width-100 g-height-100"
                        src="../../../assets/common/img/130x130/img1.jpg"
                        alt="Image Description"
                      >
                    </div>
                  </div>

                  <hr class="d-flex g-brd-gray-light-v7 g-mx-20 g-mx-30--sm my-0">

                  <div class="card-block g-px-20 g-px-30--sm g-py-15 g-py-20--sm">
                    <div class="row g-mb-25">
                      <div class="col-md-6 g-mb-25 g-mb-0--md">
                        <h5 class="g-font-size-default g-color-gray-dark-v6 g-mb-5">创建日期</h5>
                        <p class="g-color-black mb-0">{{pro.create_time}}</p>
                      </div>

                      <div class="col-md-6">
                        <h5 class="g-font-size-default g-color-gray-dark-v6 g-mb-5">案例数</h5>
                        <p class="g-color-black mb-0">11</p>
                      </div>
                    </div>

                    <div class="g-mb-25">
                      <h5 class="g-font-size-default g-color-gray-dark-v6 g-mb-5">最新访问日期</h5>
                      <p class="g-color-black mb-0">{{pro.update_time}}</p>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            <!-- 分页 -->
            <!-- <ElPager
                  class="pull-left"
                  :pageTotal="usersearch.pageTotal"
                  @changePage="changePage"
                ></ElPager> -->

            <div class="media g-mb-30">
              <div class="d-flex align-self-center">
                <h1 class="g-font-weight-300 g-font-size-28 g-color-black mb-0">产品管理</h1>
              </div>
              <div class="media-body align-self-center g-ml-10 g-ml-0--md">
                <div class="input-group g-pos-rel g-max-width-380 float-right">
                  <input
                    class="form-control h-100 g-font-size-default g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-20 g-pl-20 g-pr-50 g-py-10"
                    type="text"
                    placeholder="搜索"
                    v-model="query_data.product_name"
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
                  href="#!"
                  data-src="#new-project-form"
                  data-speed="350"
                  data-options='{"touch" : false}'
                  @click="createNew()"
                >新增产品
                </a>
              </div>
            </div>

            <div class="table-responsive g-mb-40">
              <table class="js-datatable table u-table--v3 u-editable-table--v1 g-color-black">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>产品名称</th>
                    <th>新品排序等级</th>
                    <th>创建时间</th>
                    <th>更新时间</th>
                    <th>信息质量</th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(pro,index) in result_products"
                    :key="index"
                  >
                    <td>{{index+1}}</td>
                    <td>{{pro.product_name}}</td>
                    <td>{{pro.market_level}}</td>
                    <td>{{pro.create_time}}</td>
                    <td>{{pro.update_time}}</td>
                    <td>{{pro.info_factor}}</td>
                    <td>
                      <span
                        v-if="pro.status==0"
                        class="u-tags-v1 text-center g-brd-around g-brd-teal-v2 g-bg-teal-v2 g-font-weight-400 g-color-white g-rounded-50 g-px-10"
                      >正常</span>
                      <span
                        v-if="pro.status==1"
                        class="u-tags-v1 text-center g-brd-around g-font-weight-400 g-color-white g-rounded-50 g-px-10"
                        style="background:#2196F3;"
                      >待审核</span>
                      <span
                        v-if="pro.status==-1"
                        class="u-tags-v1 text-center g-brd-around g-font-weight-400 g-rounded-50 g-px-10"
                        style="background:#e9e9e9;color: black"
                      >已删除</span>
                      <span
                        v-if="pro.status==-2"
                        class="u-tags-v1 text-center g-brd-around g-font-weight-400 g-color-white g-rounded-50 g-px-10"
                        style="background:red;"
                      >审核不通过</span>
                    </td>
                    <td>
                      <a
                        class="u-tags-v1 text-center g-brd-around g-font-size-default g-rounded-50 g-px-5"
                        style="background:#e9e9e9;color: black"
                        target="_blank"
                        :href="'/p/edit.html?id='+pro.oid+'&c='+pro.category+'&cnn='+catInfo.name"
                      >修改</a>
                      <a
                        class="u-tags-v1 text-center g-brd-around g-font-size-default g-color-white g-rounded-50 g-px-5"
                        style="background:#F44336;"
                        @click="deleteProduct(pro,index)"
                      >删除</a>
                      <a
                        class="u-tags-v1 text-center g-brd-around g-font-size-default g-color-white g-rounded-50 g-px-5"
                        style="background:#2196f3;"
                        @click="setNewProduct(pro)"
                        :class="{btnwarning:pro.is_new==1}"
                      >{{pro.is_new>0?"取消":"设为"}}新品</a>
                      <a
                        class="u-tags-v1 text-center g-brd-around g-font-size-default g-color-white g-rounded-50 g-px-5"
                        style="background:#2196f3;"
                        @click="setMarketLevel(pro,index)"
                      >新品排序</a>
                      <a
                        class="u-tags-v1 text-center g-brd-around g-font-size-default g-color-white g-rounded-50 g-px-5"
                        style="background:#FF9800;"
                        target="_blank"
                        :href="'/prj/query.html?t=p&id='+pro.oid+'&c='+pro.category+'&n='+encodeURIComponent(pro.product_name)"
                      >维护案例</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="media align-items-center g-mb-45 g-pa-20">
              <nav
                id="datatable Pagination1"
                class="d-flex ml-auto"
                aria-label="Page Navigation"
              ></nav>
            </div>

          </div>
        </div>
      </div>
    </ElPageFrame>

    <div
      class="modal fade"
      v-if="functionlist.indexOf('copy_project@information_product')>=0"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div
          class="modal-content"
          v-if="copyProjectInfo.source_product!=null"
        >
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h2 class="modal-title">复制案例给同类型产品</h2>
            <h4 class="modal-title">来源产品: {{copyProjectInfo.source_product.product_name}}</h4>
          </div>
          <div class="modal-body">
            <div
              class="jarviswidget jarviswidget-color-blueDark"
              id="wid-id-x"
              data-widget-colorbutton="false"
              data-widget-editbutton="false"
              data-widget-togglebutton="false"
              data-widget-deletebutton="false"
              data-widget-fullscreenbutton="false"
              data-widget-custombutton="false"
              data-widget-sortable="false"
            >
              <header>
                <span class="widget-icon">
                  <i class="fa fa-align-justify"></i>
                </span>
                <h2>同类型产品列表 </h2>

              </header>
              <div>

                <!-- widget content -->
                <div class="widget-body noborder">
                  <div class="row smart-form">
                    <div class="col col-sm-12">
                      <label
                        class="checkbox"
                        v-for="(pro,index) in sameCatProducts"
                        :key="index"
                      >
                        <input
                          type="checkbox"
                          :value="pro.oid"
                          @change="proChanged(pro,$event)"
                          name="checkbox"
                        >
                        <i></i>{{pro.product_name}}</label>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="confirmCopy()"
            >
              确定
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <!-- 新品排序级别modal -->
    <div
      class="modal fade"
      id="marketModal"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog sm">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 class="modal-title">
              【{{currentProduct.product_name}}】设置新品排序
            </h4>
          </div>
          <div class="modal-body no-padding">

            <div
              id="ref-form"
              class="smart-form"
            >
              <fieldset>
                <div class="row">

                  <div>
                    <section class="col col-sm-12">
                      <label class="label sm">说明:等级从1到100, 等级越高, 排序越靠前;0表示取消新品排序.</label>
                      <label class="input">
                        <input
                          type="text"
                          placeholder="请输入新品排序"
                          name="text"
                          v-model="currentProduct.market_level"
                        >
                      </label>
                    </section>

                  </div>
                </div>
              </fieldset>
              <footer>
                <a
                  class="btn btn-primary pull-left"
                  href="javascript:void(0);"
                  data-dismiss="modal"
                >
                  取消</a>
                <a
                  class="btn btn-success pull-left"
                  href="javascript:void(0);"
                  @click="confirmMarketLevel()"
                >
                  确定</a>
              </footer>

            </div>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="rejectModal"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 class="modal-title">
              审核不通过的原因
            </h4>
          </div>
          <div class="modal-body no-padding">

            <div
              id="reject-form"
              class="smart-form"
            >

              <fieldset>
                <section>
                  <label class="label"></label>
                  <label class="textarea">
                    <textarea
                      rows="5"
                      v-model="reject_msg.content"
                      class="custom-scroll"
                      placeholder="请输入审核不通过的原因"
                    ></textarea>
                  </label>
                  <!-- <div class="note">
                      <strong>Note:</strong> height of the textarea depends on the rows attribute.
                    </div> -->
                </section>
              </fieldset>

              <footer>
                <button
                  @click="confirmRejectReason()"
                  type="button"
                  class="btn btn-primary"
                >
                  确定
                </button>
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  取消
                </button>

              </footer>
            </div>

          </div>

        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>

  </div>

</template>

<script>
import "common/httputils"; //引用js
import htmlHelper from "common/htmlutils";
import ElPageFrame from "components/el-PageFrame/el-PageFrame";
import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
import ElPager from "components/el-Pager/el-Pager";
import Vue from "vue";
export default {
  name: "app",
  data: function() {
    return {
      query_data: {
        p: "",
        company_name: null,
        product_name: null,
        company_oid: null,
        category_name: null, //类别名称
        category_code: null, //类别code
        series_code: null, //系列code
        series_name: null, //系列名称
        statuses: "-2,0,1,2,3,4",
        page_index: 0,
        info_factor: null
      },
      result_products: null,
      showToast: false,
      copyProjectInfo: {
        source_product: null,
        target_products: []
      },
      sameCatProducts: null,
      copyTargetOids: [],
      functionlist: [],
      selected_series: {
        name: null,
        code: null
      },
      seriesInfo: {
        name: null,
        code: null
      },
      catInfo: {
        category_name: null,
        category_code: null
      },
      series_query: {},
      series: [],
      headers: [],
      rejecting_pro: {},
      reject_msg: {
        content: null
      },
      currentProduct: {
        market_level: 1
      }
    };
  },
  components: {
    ElPageFrame,
    ElPager
  },
  computed: {},
  created: function() {
    this.queryClick()
    //类别名称
    //类别code
    // this.catInfo.code = $.getUrlParam("c");
    // this.catInfo.name = $.getUrlParam("cn");
    // this.query_data.category_code = this.catInfo.code;
    // //获取类别参数
    // if (this.catInfo.code != null && this.catInfo.code != undefined && this.catInfo.code.length > 1) {
    //  // this.initPage();
    //   this.getParams();
    // }
  },
  mounted: function() {},
  methods: {
    // 编辑菜单的id要不相同
    forId(index, flag) {
      index = index + 1;
      if (flag == 1) {
        return "dropDown" + index + "Invoker";
      } else if (flag == 2) {
        return "dropDown" + index;
      } else if (flag == 3) {
        return "#dropDown" + index;
      }
    },
    //将产品设置为新品(取消新品)
    setNewProduct: function(pro) {
      var is_new = 1;
      if (pro.is_new != null && pro.is_new != undefined && pro.is_new > 0) {
        is_new = 0;
      }
      var data = {
        product_oid: pro.oid,
        is_new: is_new
      };
      $.post_json(
        appsettings.apiroot + "home/product/core/isnew",
        data,
        this.callback_setNewProduct,
        pro
      );
    },
    callback_setNewProduct: function(result, pro) {
      if (result != null && result.status == 0) {
        if (pro.is_new != null && pro.is_new != undefined && pro.is_new > 0) {
          Vue.set(pro, "is_new", 0);
        } else {
          Vue.set(pro, "is_new", 1);
        }
      } else {
        //failed
        this.$refs.pf.showToast("error", "设置新品失败！", result.message);
      }
    },
    //新品排序
    setMarketLevel: function(pro, index) {
      //show modal
      pro.index = index;
      //把数据转换为对象
      this.currentProduct = JSON.parse(JSON.stringify(pro));
      //显示弹框
      $("#marketModal").modal("show");
    },
    //新品排序点击确定
    confirmMarketLevel: function() {
      if (/\d+/.test(this.currentProduct.market_level) == false) {
        this.$refs.pf.showToast("warning", "新品排序等级只能是数字", "");
        return;
      }

      if (this.currentProduct.market_level > 100) {
        this.$refs.pf.showToast("warning", "新品排序等级不能大于100", "");
        return;
      }
      if (this.currentProduct.market_level < 0) {
        this.$refs.pf.showToast("warning", "新品排序等级不能小于0", "");
        return;
      }
      var data = {
        product_oid: this.currentProduct.oid,
        market_level: this.currentProduct.market_level
      };
      $.post_json(
        appsettings.apiroot + "home/product/core/marketlevel",
        data,
        this.cb_confirmMarketLevel,
        this.currentProduct
      );
    },
    cb_confirmMarketLevel: function(res, pro) {
      if (res != null && res.status == 0) {
        $("#marketModal").modal("hide");
        Vue.set(
          this.result_products,
          pro.index,
          JSON.parse(JSON.stringify(pro))
        );
        this.$refs.pf.showToast(
          "success",
          "设置新品排序等级成功",
          pro.product_name
        );
      } else {
        this.$refs.pf.showToast("error", "设置新品排序等级失败", res.message);
      }
    },
    proChanged: function(pro, event) {
      if (event.currentTarget.checked) {
        this.copyTargetOids.push(pro.oid);
      } else {
        this.copyTargetOids.removeByValue(pro.oid);
      }
    },
    confirmCopy: function() {
      if (this.sameCatProducts != null && this.copyTargetOids.length > 0) {
        var data = {};
        data.s_product_oid = this.copyProjectInfo.source_product.oid;
        data.t_product_oid = this.copyTargetOids;
        data.company_oid = this.copyProjectInfo.source_product.company_oid;
        $.post_json(
          appsettings.apiroot + "project/batchcopy",
          data,
          this.callback_batchCopyProjects
        );
        $("#myModal").modal("hide");
      }
    },
    callback_batchCopyProjects: function(result) {
      if (result != null && result.status == 0) {
        //success
        this.$refs.pf.config = {
          type: "success",
          title: "复制案例成功",
          msg: ""
        };
        this.$refs.pf.show = true;
      } else {
        this.$refs.pf.config = {
          type: "error",
          title: "复制案例失败",
          msg: result.message
        };
        this.$refs.pf.show = true;
      }
    },
    pushProduct: function(pro) {
      window.open("/com/push.html?t=p&id=" + pro.oid);
    },
    copyProjects: function(pro) {
      //
      var data = {};
      data.category_code = pro.category;
      data.company_oid = pro.company_oid;
      $.post_json(
        appsettings.apiroot + "product/retrieve",
        data,
        this.callback_getSameCatProducts,
        pro
      );
      this.copyProjectInfo.source_product = pro;
      $("#myModal").modal();
    },
    callback_getSameCatProducts: function(result, source_pro) {
      if (result != null && result.status == 0) {
        for (var i = 0; i < result.data.products.length; i++) {
          if (source_pro.oid === result.data.products[i].oid) {
            result.data.products.splice(i, 1);
            break;
          }
        }
        this.sameCatProducts = result.data.products;
      } else {
      }
    },
    addSameCatProduct: function(pro) {
      if (pro != null) {
        //复制一个产品
        window.open(
          "/p/edit.html?t=p&c=" +
            pro.category +
            "&spoid=" +
            pro.oid +
            "&com=" +
            pro.company_oid +
            "&spid=" +
            pro.seqid
        );
      }
    },
    editProjects: function(pro) {
      if (pro != null) {
        window.open(
          "/prj/query.html?t=p&c=" +
            pro.category +
            "&id=" +
            pro.seqid +
            "&com=" +
            pro.company_oid
        );
      }
    },
    createNew: function() {
      window.open(
        "/p/edit.html?c=" +
          this.catInfo.code +
          "&cnn=" +
          encodeURIComponent(this.catInfo.name) +
          "&s=" +
          this.seriesInfo.code +
          "&sn=" +
          encodeURIComponent(this.seriesInfo.name)
      );
    },
    deleteProduct: function(pro, index) {
      //alert: 是否确定删除产品
      var that = this;
      pro.index = index;
      //confirm
      this.$refs.pf.confirmShow({
        action_code: "deleteproduct",
        title: "确定要删除该产品吗？",
        msg: "产品名称：" + pro.product_name,
        success: function(res) {
          if (res.confirm == true) {
            var data = {};
            data.oid = pro.oid;
            $.post_json(
              appsettings.apiroot + "home/product/delete",
              data,
              that.callback_deleteProduct,
              pro
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
    callback_deleteProduct: function(result, pro) {
      this.$refs.pf.hideLoading();
      if (result != null && result.status == 0) {
        pro.status = -1;
        this.result_products.splice(parseInt(pro.index), 1);
        this.$refs.pf.showToast("success", "删除产品成功", "");
      } else {
        this.$refs.pf.showToast("error", "删除产品出现异常", result.message);
      }
    },

    changeInfoFactor: function(info) {
      this.query_data.info_factor = info;
    },
    categoryChanged: function(cat, series) {
      this.query_data.category_code = cat;
    },
    queryStatusChanged: function(status, event) {
      if (event.currentTarget.checked) {
        if (status == "") {
          this.query_data.statuses = "";
        } else {
          this.query_data.statuses = this.query_data.statuses + "," + status;
        }
      } else {
        this.query_data.statuses = this.query_data.statuses.replace(
          "," + status,
          ""
        );
      }
    },
    getStatus: function(status) {
      switch (status) {
        case 0:
          return "正常";
        case 1:
          return "待审核";
        case -1:
          return "已删除";
        case -2:
          return "已冻结";
        default:
          return "未定义";
      }
    },
    queryClick: function() {
      console.log(222);
      this.query_data.page_index = 1;
      this.query_data.category_code = this.seriesInfo.code || this.catInfo.code;
      $.post_json(
        appsettings.apiroot + "home/product/retrieve",
        this.query_data,
        this.callback_queryClick
      );
    },
    callback_queryClick: function(result) {
      if (result != null && result.status == 0) {
        console.log(result.data,2123);
        this.result_products = result.data.products;
        this.query_data.pageTotal = result.data.page.total_page_count;
        this.query_data.page_index = result.data.page.page_index;
        if (this.result_products == null || this.result_products.length == 0) {
          this.$refs.pf.config = {
            type: "warning",
            title: "没有符合条件的产品",
            msg: result.message
          };
          this.$refs.pf.show = true;
        }

        this.$nextTick(function(){
          // initialization of HSDropdown component
          $.HSCore.components.HSDropdown.init($('[data-dropdown-target]'), {
              dropdownHideOnScroll: false,
              dropdownType: 'css-animation',
              dropdownAnimationIn: 'fadeIn',
              dropdownAnimationOut: 'fadeOut'

          });
        }) 

      } else {
        this.$refs.pf.config = {
          type: "error",
          title: "查询产品信息出现异常",
          msg: result.message
        };
        this.$refs.pf.show = true;
      }
    },
    changePage: function(pageindex) {
      this.query_data.page_index = pageindex;
      $.post_json(
        appsettings.apiroot + "home/product/retrieve",
        this.query_data,
        this.callback_queryClick
      );
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
  width: 280px;
}

.table {
  border-bottom: 1px solid #ccc !important;
}

.dropdown-menu {
  position: relative !important;
}

.jarviswidget > header {
  border: 0.5px solid #c2c2c2;
}

.fa-w {
  color: #03a9f4 !important;
}

.btn-group > a {
  margin-right: 5px;
}

.btnwarning {
  background: #2196f3 !important;
  border-color: #2196f3 !important;
}

.btnwarning:hover {
  background: #2196f3 !important;
  border-color: #2196f3 !important;
}
</style>