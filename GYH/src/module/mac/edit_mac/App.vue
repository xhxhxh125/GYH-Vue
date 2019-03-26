<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <!-- main -->
        <div class="col g-ml-45 g-ml-0--lg g-pb-65--md">
          <div class="g-pa-20">
            <div class="media-md align-items-center g-mb-30">
              <div class="d-flex g-mb-15 g-mb-0--md">
                <h1 class="g-font-weight-400 g-font-size-28 g-color-black">{{action_mode=='new'?'新增':'修改'}}设备信息</h1>
              </div>
            </div>

            <div class="table-responsive g-mb-40">
              <div class="col-md-9">
                <div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-20--md">
                  <form class="js-validate">
                    <header v-if="canEditCore(action_mode,userrole)">
                      <h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">设备信息</h2>
                    </header>

                    <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-15--md" v-if="canEditCore(action_mode,userrole)">

                    <div class="row g-mb-20" v-if="canEditCore(action_mode,userrole)">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">选择产品</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                            <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                          </span>
                          <input class="js-fancybox form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                            type="text" placeholder="点击这里可以搜索已经录入的产品信息" v-model="mac.product_name" @focus="showProductModal">
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20" v-if="canEditCore(action_mode,userrole)">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">设备编号</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                            <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                          </span>
                          <input class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                            type="text" placeholder="请输入设备编号" required="required" data-msg="This field is mandatory"
                            data-error-class="u-has-error-v3" data-success-class="has-success" aria-required="true"
                            v-model="mac.machine_no">
                        </div>
                      </div>
                    </div>

                    <header v-if="canEditCustomer(action_mode,userrole)">
                      <h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">客户信息</h2>
                    </header>

                    <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-15--md" v-if="canEditCustomer(action_mode,userrole)">

                    <div class="row g-mb-20" v-if="canEditCustomer(action_mode,userrole)">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">客户姓名</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                            <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                          </span>
                          <input class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                            type="text" placeholder="请输入姓名" data-msg="This field is mandatory" data-error-class="u-has-error-v3"
                            data-success-class="has-success" aria-required="true" v-model="mac.customer">
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20" v-if="canEditCustomer(action_mode,userrole)">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">联系电话</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                            <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                          </span>
                          <input class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                            type="text" placeholder="请输入联系电话" data-msg="This field is mandatory" data-error-class="u-has-error-v3"
                            data-success-class="has-success" aria-required="true" v-model="mac.tel">
                        </div>
                      </div>
                    </div>
                    <div class="row g-mb-20" v-if="canEditCustomer(action_mode,userrole)">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#dateFrom">购买日期</label>
                      </div>

                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0" id="dateFromWrapper">
                          <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                            <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                          </span>
                          <input class="form-control w-100 h-100 form-control-md g-bg-white g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12"
                            type="text" data-rp-wrapper="#dateFromWrapper" data-rp-date-format="Y-M-d" placeholder="购买日期"
                            v-model="mac.buy_time" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="bindBuyTimeChange($event)">
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20" v-if="canEditCustomer(action_mode,userrole)">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#dateFrom">安装城市</label>
                      </div>

                      <div class="col-md-9 align-self-center">
                        <!-- 复制文件在 c/info.html -->
                        <section class="d-flex">
                          <div class="col-md-4" style="padding-left:0;">
                            <label class="select">
                              <select :value="getProvinceCode()" @change="onProvinceChange($event)" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12">
                                <option disabled value="000000">省</option>
                                <option v-for="(item,index) of provinces" :value="item.code" :key="index">{{item.name}}</option>
                              </select>
                              <i></i>
                            </label>
                          </div>
                          <div class="col-md-4" style="padding-left:0;">
                            <label class="select">
                              <select :value="mac.setup_zip" @change="onCityChange($event)" class="chosen-select form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12">
                                <option disabled :value="getDeraultCityCode()">市</option>
                                <option v-for="(item,index) of cities" :value="item.code" :key="index">{{item.name}}</option>
                              </select>
                              <i></i>
                            </label>
                          </div>
                        </section>
                      </div>
                    </div>

                    <div class="row g-mb-20" v-if="canEditCustomer(action_mode,userrole)">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">安装地址</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <input class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                            type="text" data-msg="This field is mandatory" data-error-class="u-has-error-v3"
                            data-success-class="has-success" aria-required="true" placeholder="请输入安装地址" v-model="mac.setup_address">
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20" v-if="canEditCustomer(action_mode,userrole)">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">备注</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group mb-0">
                          <textarea class="form-control form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12"
                            rows="3" placeholder="请输入备注" v-model="mac.remark"></textarea>
                        </div>
                      </div>
                    </div>

                    <header v-if="canEditContract(action_mode,userrole)">
                      <h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">合同信息</h2>
                    </header>

                    <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-15--md" v-if="canEditContract(action_mode,userrole)">

                    <div class="row g-mb-20" v-if="canEditContract(action_mode,userrole)">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">合同编号</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0">
                          <input class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12"
                            type="text" data-msg="This field is mandatory" data-error-class="u-has-error-v3"
                            data-success-class="has-success" aria-required="true" placeholder="请输入合同编号" v-model="mac.contract_no">
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20" v-if="canEditContract(action_mode,userrole)">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">合同开始日期</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0" id="dateFromWrapper">
                          <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                            <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                          </span>
                          <input class="form-control w-100 h-100 form-control-md g-bg-white g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12"
                            type="text" data-rp-wrapper="#dateFromWrapper" data-rp-date-format="Y-M-d" placeholder="合同开始日期"
                            v-model="mac.contract_start" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="bindContractStartChange($event)">
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20" v-if="canEditContract(action_mode,userrole)">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">合同截止日期</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0" id="dateFromWrapper">
                          <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                            <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                          </span>
                          <input class="form-control w-100 h-100 form-control-md g-bg-white g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12"
                            type="text" data-rp-wrapper="#dateFromWrapper" data-rp-date-format="Y-M-d" placeholder="合同截止日期"
                            v-model="mac.contract_end" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="bindContractEndChange($event)">
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20" v-if="canEditContract(action_mode,userrole)">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">服务开始日期</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0" id="dateFromWrapper">
                          <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                            <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                          </span>
                          <input class="form-control w-100 h-100 form-control-md g-bg-white g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12"
                            type="text" data-rp-wrapper="#dateFromWrapper" data-rp-date-format="Y-M-d" placeholder="服务开始日期"
                            v-model="mac.service_start" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="bindServiceStartChange($event)">
                        </div>
                      </div>
                    </div>

                    <div class="row g-mb-20" v-if="canEditContract(action_mode,userrole)">
                      <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
                        <label class="mb-0" for="#lastName">服务截止日期</label>
                      </div>
                      <div class="col-md-9 align-self-center">
                        <div class="form-group g-pos-rel mb-0" id="dateFromWrapper">
                          <span class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                            <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                          </span>
                          <input class="form-control w-100 h-100 form-control-md g-bg-white g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12"
                            type="text" data-rp-wrapper="#dateFromWrapper" data-rp-date-format="Y-M-d" placeholder="服务截止日期"
                            v-model="mac.service_end" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="bindServiceEndChange($event)">
                        </div>
                      </div>
                    </div>

                    <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-15--md" v-if="canEditContract(action_mode,userrole)">

                    <div class="row g-mb-20" v-if="canEditContract(action_mode,userrole)">
                      <a class="js-fancybox btn btn-xl u-btn-secondary g-width-140--md g-font-size-default g-ml-10"
                        href="javascript:void(0);" @click="raise()">提交</a>
                    </div>

                    <div class="row g-mb-20" v-if="userrole.isuser||userrole.iscreator">
                      <div class="col-md-12 align-self-center g-mb-20">
                        <label class="mb-0" for="#lastName">图片视频</label>
                      </div>
                      <ElAttachmentPic :attachment_pic_list="attachment_pic_list" :file_prefix="appsettings.comfile_prefix"
                        :edit="true" :source_oid="mac.oid" :source_type="8" :reload_callback="this.reload_attachment"></ElAttachmentPic>
                    </div>
                    <div class="row g-mb-20" v-if="userrole.isuser||userrole.iscreator">
                      <div class="col-md-12 align-self-center g-mb-20">
                        <label class="mb-0" for="#lastName">附件</label>
                      </div>
                      <ElAttachmentDoc :attachment_doc_list="attachment_doc_list" :file_prefix="appsettings.comfile_prefix"
                        :edit="true" :source_oid="mac.oid" :source_type="8" :reload_callback="this.reload_attachment"></ElAttachmentDoc>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ElPageFrame>
    <div id="productmodal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog sm">
        <div class="modal-content">
          <header class="g-bg-gray-light-v8 g-px-15 g-px-30--sm g-py-20">
            <h2 class="g-font-weight-300 g-font-size-16 g-color-black mb-0">查询产品</h2>
            <button type="button" class="close" @click="close()">
              &times;
            </button>
          </header>

          <div class="g-pa-15 g-pa-30--sm">
            <div>
              <div class="form-group g-mb-30">
                <h3 class="g-font-weight-300 g-font-size-16 g-color-black g-mb-20">产品名称</h3>
                <label class="g-resize-none g-line-height-1_6 g-brd-gray-light-v7" style="width:100%;">
                  <input class="form-control w-100 h-100 form-control-md g-bg-white g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-4 g-px-20 g-py-12"
                    type="text" name="text" v-model="product_query.product_name">
                </label>
              </div>
              <div class="g-mb-30">
                <h3 class="g-font-weight-300 g-font-size-16 g-color-black g-mb-20">本公司产品</h3>
                <div class="g-mb-15">
                  <label class="form-check-inline u-check ml-0 g-mr-10 g-mr-15--sm" v-for="(row,index) in company_products"
                    :key="index">
                    <input type="radio" @click="selectProduct(row,$event)" name="refradio">
                    <i></i>
                    {{row.product_name}}
                  </label>
                </div>
              </div>
              <footer class="row col-md-12 g-mb-20">
                <a class="btn btn-primary pull-left g-mr-10" href="javascript:void(0);" @click="queryProduct()">
                  <i class="fa fa-search"></i> 查询平台产品
                </a>
                <a class="btn btn-success pull-left" href="javascript:void(0);" @click="confirmProduct()">选定产品</a>
              </footer>
              <fieldset class="row col-md-12">
                <div>
                  <div>
                    <div class="jarviswidget-editbox"></div>
                    <div class="widget-body no-padding">
                      <table class="table table-striped table-bordered table-hover" width="100%">
                        <thead>
                          <tr>
                            <th style="width: 30px;"></th>
                            <th>产品名称</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="row-show" v-for="(row,index) in products" :key="index">
                            <td>
                              <label class="radio">
                                <input type="radio" @click="selectProduct(row,$event)" name="refradio">
                                <i></i>
                              </label>
                            </td>
                            <td>{{row.product_name}} / {{row.company_name}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </fieldset>

              <footer class="row col-md-12">
                <button type="button" class="btn btn-success g-mr-10" @click="confirmProduct()">选定产品</button>
                <button type="button" class="btn btn-default" data-dismiss="modal" @click="cancelProduct()">取消</button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ElToastAlert ref="toastAlert"></ElToastAlert>
  </div>
</template>

<script>
  import "common/httputils"; //引用js
  import Vue from "vue";
  import htmlHelper from "common/htmlutils";
  import htmlutils from "common/htmlutils";
  import ElPageFrame from "components/el-PageFrame/el-PageFrame";

  import ElPager from "components/el-Pager/el-Pager";
  import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
  import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";
  import ElCompanyIntellisense from "components/el-CompanyIntellisense/el-CompanyIntellisense";
  import ElVideoPlayer from "components/el-videoplayer/el-videoplayer";
  import ElAttachmentPic from "components/el-AttachmentPic/el-AttachmentPic";
  import ElAttachmentDoc from "components/el-AttachmentDoc/el-AttachmentDoc";

  export default {
    name: "app",
    data: function () {
      return {
        action_mode: "",
        mac_id: "",
        userrole: {},

        mac: {
          product_name: "",
          company_name: "",
          setup_zip: "000000"
        },

        provinces: [],
        cities: [],

        product_query: {
          product_name: null,
          page_index: 1
        },
        products: [],
        company_products: [],

        company_query: {
          company_name: null,
          page_index: 1
        },
        companies: [],

        attachment_pic_list: [],
        attachment_doc_list: [],

        uploader: null,
        uploading_progresses: [],
        fileList: [],
        uploading_files: []
      };
    },
    components: {
      ElPageFrame,
      ElPager,
      ElBlockAlert,
      ElToastAlert,
      ElCompanyIntellisense,
      ElVideoPlayer,
      ElAttachmentPic,
      ElAttachmentDoc
    },
    created: function () {
      //get queryfields
      this.mac.mac_id = $.getUrlParam("mac_id");
      if (this.mac.mac_id != null && this.mac.mac_id != undefined) {
        htmlutils.setPageTitle("编辑设备");
        this.action_mode = "edit";
        var data = {
          seqid: this.mac.mac_id
        };

        //查询所有省份列表
        $.post_json(
          appsettings.apiroot + "utility/province/retrieve",
          null,
          this.callback_getAllProvinces
        );

        $.post_json(
          appsettings.apiroot + "machine/info",
          data,
          this.callback_retrieve
        );
      } else {
        //生成会议oid
        this.mac.oid = $.guid();
        this.action_mode = "new";
        htmlutils.setPageTitle("创建设备");
        //判断是否为管理员
        $.post_json(
          appsettings.apiroot + "home/machine/macuserrole", {
            create_company_oid: "",
            company_oid: ""
          },
          this.callback_iscreator
        );
        //查询所有省份列表
        $.post_json(
          appsettings.apiroot + "utility/province/retrieve",
          null,
          this.callback_getAllProvinces
        );
      }
    },
    mounted: function () {
      this.InitUploader();
    },
    methods: {
      canEditCore: function (action_mode, userrole) {
        return (
          (action_mode == "new" && userrole.iscomadmin) ||
          (action_mode == "edit" && userrole.iscreator && userrole.iscomadmin)
        );
      },
      canEditCustomer: function (action_mode, userrole) {
        return (
          (action_mode == "new" && userrole.iscomadmin) ||
          (action_mode == "edit" && (userrole.isuser || userrole.iscreator))
        );
      },
      canEditContract: function (action_mode, userrole) {
        return (
          (action_mode == "new" && userrole.iscomadmin) ||
          (action_mode == "edit" && userrole.iscreator && userrole.iscomadmin)
        );
      },
      reload_attachment: function () {
        var data = {
          seqid: this.mac.seqid
        };
        $.post_json(
          appsettings.apiroot + "machine/info",
          data,
          this.callback_reload_attachment
        );
      },
      callback_reload_attachment: function (result) {
        this.$refs.pf.hideLoading();
        if (result != null && result.status == 0) {
          this.attachment_pic_list = result.data.attachment_pic_list;
          this.attachment_doc_list = result.data.attachment_doc_list;
        } else {
          this.$refs.toastAlert.config = {
            type: "error",
            title: "加载设备信息失败！",
            msg: result.message
          };
          this.$refs.toastAlert.show = true;
        }
      },
      callback_retrieve: function (result) {
        this.$refs.pf.hideLoading();
        if (result != null && result.status == 0) {
          this.mac = result.data.core;
          this.fileList = result.data.attachment_pic_list.concat(
            result.data.attachment_doc_list
          );
          this.attachment_pic_list = result.data.attachment_pic_list;
          this.attachment_doc_list = result.data.attachment_doc_list;
          //判断是否为创建者
          $.post_json(
            appsettings.apiroot + "home/machine/macuserrole", {
              create_company_oid: this.mac.create_company_oid,
              company_oid: this.mac.company_oid,
              tel: this.mac.tel
            },
            this.callback_iscreator
          );

          //初始获取公司所在省份的城市列表
          var body = {
            provincecode: this.mac.setup_zip.substring(0, 2) + "0000"
          };
          $.post_json(
            appsettings.apiroot + "utility/city/retrieve",
            body,
            this.callback_getAllcities
          );
        } else {
          this.$refs.toastAlert.config = {
            type: "error",
            title: "加载设备信息失败！",
            msg: result.message
          };
          this.$refs.toastAlert.show = true;
        }
      },

      callback_iscreator: function (result) {
        if (result != null && result.status == 0) {
          this.userrole = result.data;
        }
      },
      //日期
      bindContractStartChange: function (e) {
        this.mac.contract_start = e.target.value;
      },
      bindContractEndChange: function (e) {
        this.mac.contract_end = e.target.value;
      },
      bindServiceStartChange: function (e) {
        this.mac.service_start = e.target.value;
      },
      bindServiceEndChange: function (e) {
        this.mac.service_end = e.target.value;
      },
      bindBuyTimeChange: function (e) {
        this.mac.buy_time = e.target.value;
      },

      //省市选择
      callback_getAllProvinces: function (e) {
        if (e != null && e.status == 0) {
          this.provinces = e.data;
          setTimeout(() => {
            $(".province-select").trigger("chosen:updated");
          }, 0);
        }
      },

      callback_getAllcities: function (e) {
        if (e != null && e.status == 0) {
          this.cities = e.data;
          setTimeout(() => {
            this.cities = [];
            this.cities = e.data;
            $(".chosen-select").trigger("chosen:updated");
          }, 0);
        }
      },

      getProvinceCode: function () {
        if (this.mac.setup_zip == undefined) {
          return "000000";
        } else {
          return this.mac.setup_zip.substring(0, 2) + "0000";
        }
      },

      getCityCode: function () {
        if (this.mac.setup_zip == undefined) {
          return "000000";
        } else {
          return this.mac.setup_zip;
        }
      },

      onProvinceChange: function (e) {
        //获取该省城市列表
        this.mac.setup_zip = e.currentTarget.value;
        var body = {
          provincecode: e.currentTarget.value
        };
        $.post_json(
          appsettings.apiroot + "utility/city/retrieve",
          body,
          this.citiesRender
        );
      },

      citiesRender: function (res) {
        this.cities = res.data;
        this.onSltCitiesChanged();
      },

      getDeraultCityCode: function () {
        if (this.mac.setup_zip == undefined) {
          return "000000";
        } else {
          return this.mac.setup_zip.substring(0, 2) + "0000";
        }
      },

      onSltCitiesChanged: function () {
        setTimeout(() => {
          $(".chosen-select").trigger("chosen:updated");
        }, 0);
      },

      onCityChange: function (e) {
        //绑定选择的城市
        this.mac.setup_zip = e.currentTarget.value;
      },

      //Model
      // showCompanyModal: function () {
      //   $("#companymodal").modal("show");
      // },
      // queryCompany: function () {
      //     if((this.company_query.company_name||"")==""){
      //       this.$refs.pf.showToast("warning","查询条件不能为空","");
      //       return;
      //     }
      //     $.post_json(appsettings.apiroot + "home/company/retrieve", this.company_query, this.callback_queryCompany);
      //     this.$refs.pf.showLoading("正在查询....");
      //   },
      //   callback_queryCompany: function (result) {
      //     this.$refs.pf.hideLoading();
      //     if (result != null && result.status == 0) {
      // 			this.companies = result.data.companulist;
      //       if (this.companies == null || this.companies.length == 0) {
      //         this.$refs.toastAlert.showToast("warning", "没有查到公司！", "");
      //       }
      //     } else {
      //       this.$refs.toastAlert.showToast("error", "查询公司出现异常！", result.message);
      //     }
      //   },
      //   selectCompany: function (com, event) {
      //     if (event.currentTarget.checked) {
      //       this.selectedCompany = com;
      //     }
      //   },
      //   confirmCompany: function () {
      //     this.mac.company_oid = this.selectedCompany.oid;
      //     this.mac.company_name = this.selectedCompany.company_name;
      //     $("#companymodal").modal("hide");
      //   },

      userCompanyChanged: function (company) {
        this.mac.company_oid = company.id;
        this.mac.company_name = company.name;
      },

      showProductModal: function () {
        this.$refs.pf.showLoading("正在查询....");
        this.product_query.page_size = 1000;
        this.product_query.statuses = 0;
        $.post_json(
          appsettings.apiroot + "home/product/retrieve",
          this.product_query,
          this.callback_queryCompanyProduct
        );
      },
      callback_queryCompanyProduct: function (result) {
        this.$refs.pf.hideLoading();
        if (result != null && result.status == 0) {
          this.company_products = result.data.products;
          $("#productmodal").modal("show");
        } else {
          this.$refs.toastAlert.showToast(
            "error",
            "查询公司产品出现异常！",
            result.message
          );
        }
      },

      queryProduct: function () {
        if ((this.product_query.product_name || "") == "") {
          this.$refs.pf.showToast("warning", "查询条件不能为空", "");
          return;
        }
        $.post_json(
          appsettings.apiroot + "product/retrieve",
          this.product_query,
          this.callback_queryProduct
        );
        this.$refs.pf.showLoading("正在查询....");
      },
      callback_queryProduct: function (result) {
        this.$refs.pf.hideLoading();
        if (result != null && result.status == 0) {
          this.products = result.data.products;
          if (this.products == null || this.products.length == 0) {
            this.$refs.toastAlert.showToast("warning", "没有查到产品！", "");
          }
        } else {
          this.$refs.toastAlert.showToast(
            "error",
            "查询产品出现异常！",
            result.message
          );
        }
      },
      selectProduct: function (pro, event) {
        if (event.currentTarget.checked) {
          this.selectedProduct = pro;
        }
      },
      confirmProduct: function () {
        
        this.mac.product_oid = this.selectedProduct.oid;
        this.mac.product_name = this.selectedProduct.product_name;
        $("#productmodal").modal("hide");
      },
      close:function(){
        console.log("111")
        $("#productmodal").modal("hide");
      },
      cancelProduct: function () {
        console.log("222")
        $("#productmodal").modal("hide");
      },

      //提交
      raise: function () {
        if (
          this.mac.product_oid == undefined ||
          this.mac.product_oid.length == 0
        ) {
          this.$refs.toastAlert.config = {
            type: "warning",
            title: "请选择产品"
          };
          this.$refs.toastAlert.show = true;
          return;
        }
        if (this.mac.machine_no == undefined || this.mac.machine_no.length == 0) {
          this.$refs.toastAlert.config = {
            type: "warning",
            title: "请填写设备编号"
          };
          this.$refs.toastAlert.show = true;
          return;
        }

        this.$refs.pf.showLoading("提交中....");
        if (this.action_mode == "new") {
          $.post_json(
            appsettings.apiroot + "home/machine/create",
            this.mac,
            this.callback_raise
          );
        } else {
          $.post_json(
            appsettings.apiroot + "home/machine/core/update",
            this.mac,
            this.callback_raise
          );
        }
      },

      callback_raise: function (result) {
        this.$refs.pf.hideLoading();
        if (result != null && result.status == 0) {
          //提示提交成功（提示页面加链接回到我的需求响应界面）
          this.action_mode = "edit";
          this.userrole.iscreator = true;
          this.$refs.toastAlert.config = {
            type: "success",
            title: "提交成功！",
            msg: ""
          };
          this.$refs.toastAlert.show = true;
        } else {
          this.$refs.toastAlert.config = {
            type: "error",
            title: "保存设备失败！",
            msg: result.message
          };
          this.$refs.toastAlert.show = true;
        }
      },

      deleteAtttachment: function (attach, attach_index) {
        var self = this;
        var data = {
          oid: attach.oid,
          source_oid: this.mac.oid,
          target_type: 8, //v_all_target_type
          cache_key: "Machine_"
        };

        this.$refs.pf.confirmShow({
          only_alert: false,
          action_code: "deleteA",
          title: "删除附件",
          msg: "确定要删除附件【" + attach.file_name + attach.file_type + "】吗？",
          success: function (res) {
            if (res.confirm == true) {
              //do delete
              $.post_json(
                appsettings.apiroot + "utility/attachment/delete",
                data,
                self.callback_deleteAtttachment,
                attach_index
              );
            }
          }
        });
      },
      callback_deleteAtttachment: function (result, attach_index) {
        if (result != null && result.status == 0) {
          this.fileList.splice(attach_index, 1);
        } else {
          //删除失败
          this.$refs.toastAlert.showToast(
            "error",
            "删除附件失败",
            result.message
          );
        }
      },

      uploadAttachment: function () {
        $("#uploaderInput input").click();
      },

      InitUploader: function () {
        var self = this;
        this.uploader = WebUploader.create({
          // swf文件路径
          swf: appsettings.gyhpluginsPrefix + "webuploader/Uploader.swf",
          // 文件接收服务端。
          server: appsettings.apiroot + "utility/attachment/upload",
          chunked: true,
          threads: 1,
          auto: true,
          fromData: {
            guid: "guid"
          },
          // 选择文件的按钮。可选。
          // 内部根据当前运行是创建，可能是input元素，也可能是flash.
          pick: "#uploaderInput",
          multiple: true,
          // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
          resize: false,
          chunkSize: 4000880
        });

        this.uploader.on("beforeFileQueued", function (file) {});

        this.uploader.on("fileQueued", function (file) {
          self.uploader.options.formData.guid = Math.random();
          file.index = self.uploading_files.length;
          self.uploading_progresses.push("0");
          self.uploader.options.formData.soid = self.mac.oid;
          self.uploader.options.formData.target_type = 11;
          self.uploader.options.formData.cache_key = "Machine_";
          self.uploader.options.formData.token = window.localStorage.getItem(
            "token"
          );
          //如果是图片，则生成缩略图
          if (htmlHelper.isImg("." + file.ext)) {
            self.uploader.makeThumb(
              file,
              function (error, ret) {
                file.url = ret;
                self.uploading_files.push(file);
              },
              100,
              100
            );
          } else {
            //其他文件，则用一个背景图片
            file.url = appsettings.gyhImgPrefix + "file.png";
            self.uploading_files.push(file);
          }
          self.$refs.pf.showLoading("上传中....");
        });
        this.uploader.on("uploadProgress", function (file, percentage) {
          Vue.set(
            self.uploading_progresses,
            file.index,
            (percentage * 100 + "").substring(0, 5)
          );
        });

        this.uploader.on("uploadAccept", function (file, response) {
          response = JSON.parse(response);
          if (response != null) {
            if (response.status == 0) {
              return true;
            } else if (response.status == 9999) {
              window.location.href =
                appsettings.login_url + encodeURIComponent(window.location.href);
              return false;
            }
          }
        });

        this.uploader.on("uploadSuccess", function (file, response) {
          self.$refs.pf.hideLoading();
          response = JSON.parse(response);

          if (response != null) {
            if (response.status == 0) {
              let albumList = self.fileList;
              var uploading_file = response.data;
              uploading_file.ok = true;
              uploading_file.index = file.index;

              self.fileList.push(uploading_file);
              setTimeout(() => {
                self.uploading_files.splice(uploading_file.index, 1);
              }, 0);
            } else if (response.status == 9999) {
              window.location.href =
                appsettings.login_url + encodeURIComponent(window.location.href);
            } else if (response.status < 0) {
              self.$refs.toastAlert.config = {
                type: "error",
                title: "上传附件失败",
                msg: result.message
              };
              self.$refs.toastAlert.show = true;
            }
          }
        });

        this.uploader.on("uploadError", function (file) {});

        this.uploader.on("uploadComplete", function (file) {});

        setTimeout(function () {
          $("#uploaderInput")
            .find("div")
            .each(function () {
              $(this).css("height", "80px");
              $(this).css("width", "80px");
            }, this);
        }, 0);
      },

      isVideo: function (type) {
        type = (type || "").toUpperCase();
        if (type == ".MP4" || type == ".WMA" || type == ".MKV") {
          return true;
        }
        return false;
      },
      previewPic: function (src) {
        this.previewPicSrc = src;
        $("#previewpicmodal").modal("show");
      },
      closePreviewPic: function () {
        this.previewPicSrc = "";
        $("#previewpicmodal").modal("hide");
      },

      playVideo: function (src, title) {
        this.$refs.player.playVideo(src, title);
      },

      closeVideo: function () {
        this.$refs.player.closeVideo();
      },

      hideVideoModel: function () {
        $("#videomodel").modal("hide");
      }
    }
  };
</script>

<style>
  body.smart-style-6 .dropdown-menu {
    transform: scale(1);
    opacity: 100;
  }

  .inbox-download-list {
    margin: 10px;
    min-height: 320px;
  }

  .inbox-download-list li {
    margin: 0 5px 5px 0;
  }

  .inbox-download-list li> :first-child> :first-child>img {
    max-height: 150px;
  }

  .inbox-download-list li> :first-child> :first-child> :first-child>img {
    max-height: 150px;
  }

  .text-muted {
    width: 100px;
    display: inline-block;
  }

  .inbox-download-list li> :first-child {
    width: 154px;
    height: 154px;
    display: flex;
    justify-content: center;
    align-items: Center;
  }

  .inbox-download-list li> :first-child span {
    overflow-wrap: break-word;
    width: 100%;
  }

  .inbox-download-list li> :first-child span a {
    padding: 5px;
    display: block;
  }

  .inbox-download-list li> :first-child span a i {
    display: block;
  }

  .inbox-download-list li> :first-child .delete {
    font-size: 20px;
    position: absolute;
    top: 4px;
    right: 4px;
    color: #aaa;
  }

  .modal {
    position: absolute !important;
    top: 20px;
    right: 0;
    bottom: 0;
    left: 35px;
  }

  .close {
    position: absolute;
    right: 30px;
    top: 20px;
  }
</style>