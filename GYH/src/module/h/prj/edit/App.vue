<template>
  <div id="app">
    <ElPageFrame></ElPageFrame>

    <div id="main" role="main">
      <!-- RIBBON -->
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
          <li>个人中心</li>
          <li>{{subject_type_name}}管理</li>
          <li>{{edit_mode=="edit"?'编辑':'新增'}}案例</li>
        </ol>
        <!-- end breadcrumb -->
      </div>
      <!-- END RIBBON -->

      <!-- MAIN CONTENT -->
      <div id="content">


        <section id="widget-grid" class="">
          <ElBlockAlert ref="alert"></ElBlockAlert>
          <div class="row">
            <article class="col-sm-12 col-md-12">
              <div class="jarviswidget jarviswidget-color-darken" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-custombutton="false">
                <header>
                  <span class="widget-icon">
                    <i class="fa fa-edit"></i>
                  </span>
                  <h2>案例基本信息 </h2>
                </header>
                <div>
                  <!-- widget edit box -->
                  <div class="jarviswidget-editbox">
                    <!-- This area used as dropdown edit box -->
                  </div>
                  <!-- end widget edit box -->

                  <!-- widget content -->
                  <div class="widget-body no-padding">
                    <form id="query-form" class="smart-form">

                      <fieldset>
                        <div class="row">
                          <section class="col col-6">
                            <label class="label">公司名称</label>
                            <label class="input">
                              <input type="text" class="typeahead_1" disabled :value="projectInfo.core.company_name">
                            </label>
                          </section>

                          <section class="col col-6">
                            <label class="label">{{subject_type_name}}名称</label>
                            <label class="input">
                              <input type="text" name="text" disabled :value="subject_name">
                            </label>
                          </section>

                        </div>
                      </fieldset>



                      <fieldset>
                        <div class="row">
                          <section class="col col-sm-12">
                            <label class="label">*案例名称</label>
                            <label class="input">
                              <input type="text" name="text" v-model="projectInfo.core.project_name">
                            </label>
                          </section>
                        </div>
                      </fieldset>

                      <fieldset>
                        <div class="row">
                          <section class="col col-sm-12">
                            <label class="label">关键词</label>
                            <label class="input">
                              <input type="text" v-model="projectInfo.core.key_tag">
                            </label>
                          </section>
                        </div>
                      </fieldset>

                      <fieldset>
                        <div class="row">
                          <section class="col col-sm-12">
                            <label class="label">适用工艺</label>
                            <label class="input">
                              <input type="text" v-model="projectInfo.core.process">
                            </label>
                          </section>
                        </div>
                      </fieldset>

                      <fieldset>
                        <div class="row">
                          <section class="col col-sm-12">
                            <label class="label">适用行业</label>
                            <div class="smart-form">
                              <div class="inline-group">
                                <label class="checkbox col-sm-2" v-for="(prof,index) in professions" :key="index">
                                  <input type="checkbox" :value="prof.enum_code" :checked="checkProfession(prof)" @change="profChanged(prof.enum_code,$event)">
                                  <i></i>{{prof.enum_name}}</label>
                              </div>
                            </div>
                          </section>
                        </div>
                      </fieldset>



                      <fieldset>
                        <div class="row">
                          <section class="col col-sm-12">
                            <label class="label">案例描述</label>
                            <div class="textarea">
                              <textarea v-model="projectInfo.core.description" rows="10"></textarea>
                            </div>
                          </section>
                        </div>
                      </fieldset>

                      <footer>
                        <a v-if="(subject_type=='s' && functionlist.indexOf('save@information_service_project_edit')>=0) ||(subject_type=='p' && functionlist.indexOf('save@information_product_project_edit')>=0)"
                          @click="saveBasicInfo()" href="javascript:void(0);" :class="basicInfoSuc?'btn-success':'btn-info'"
                          class="btn  pull-left">
                          <i class="fa fa-save"></i> 保存基本信息</a>
                      </footer>

                    </form>
                  </div>
                  <!-- end widget content -->
                </div>
                <!-- end widget div -->
              </div>

              <div class="jarviswidget jarviswidget-color-darken" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-custombutton="false">
                <header>
                  <span class="widget-icon">
                    <i class="fa fa-edit"></i>
                  </span>
                  <h2>案例参数信息 </h2>
                </header>
                <div>
                  <div class="jarviswidget-editbox">
                  </div>

                  <div class="widget-body no-padding">
                    <form id="para-form" class="smart-form">
                      <fieldset>
                        <div class="row">
                          <div v-for="para in parameters" :key="para.column_id">

                            <section v-if="para.data_type==0 && para.is_enum_data!=1" class="col col-3">
                              <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                              <label class="input">
                                <input type="text" name="text" v-model="para.value">
                              </label>
                            </section>

                            <section v-if="para.data_type==1 && para.is_region_data!=1 && para.is_enum_data!=1" class="col col-3">
                              <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                              <label class="input">
                                <i class="icon-append fa unit" v-if="para.unit!=null && para.unit!=undefined && para.unit.length>0">{{para.unit}}</i>
                                <input type="text" name="num" v-model="para.value">
                              </label>
                            </section>


                            <section v-if="para.data_type==2" class="col col-sm-12">
                              <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                              <div class="textarea">
                                <textarea rows="5" width="100%" v-model="para.value"></textarea>
                              </div>
                            </section>

                            <section v-if="para.data_type==3" class="col col-sm-12">
                              <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                              <div class="input">
                                <input type="text" v-model="para.value">
                              </div>
                            </section>

                            <section v-if="para.data_type==4" class="col col-3">
                              <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                              <div class="input">
                                <!-- <ElDateTimeInput :type="'date'" @valueChanged="paraValueChanged(para,$event)"></ElDateTimeInput> -->
                                <input type="text" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="paraChanged(para,$event)">
                              </div>
                            </section>

                            <section v-if="para.data_type==5" class="col col-3">
                              <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                              <div class="input">
                                <input type="text" onclick="WdatePicker({dateFmt:'HH:mm:ss'})" @focus="paraChanged(para,$event)">
                              </div>
                            </section>

                            <section v-if="para.data_type==6" class="col col-3">
                              <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                              <div class="input">
                                <input type="text" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" @focus="paraChanged(para,$event)">
                              </div>
                            </section>



                            <section v-if="para.data_type==7 || para.is_region_data==1" class="col col-6">
                              <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}({{para.unit}})</label>
                              <label class="input col col-6 nopaddingl rl">

                                <input type="text" v-model="para.mininput">
                              </label>
                              <label class="nopaddingl col to">—</label>
                              <label class="input col col-6 nopaddingl rr">
                                <input type="text" v-model="para.maxinput">
                              </label>
                            </section>

                            <fieldset v-if="(para.data_type==8||para.is_enum_data==1) && para.enum_type==0" class="border col col-sm-12">
                              <section>
                                <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                                <div class="inline-group">
                                  <label class="radio" v-for="ch in para.enum_list" :key="ch.enum_code">
                                    <input type="radio" @change="radioParaChanged(ch.enum_code,para,$event)" :value="ch.enum_code" :name="'radio_'+para.column_id">
                                    <i></i>{{ch.enum_name}}</label>
                                </div>
                              </section>
                            </fieldset>

                            <fieldset v-if="(para.data_type==8||para.is_enum_data==1) && para.enum_type==1" class="border col col-sm-12">
                              <section>
                                <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                                <div class="inline-group">
                                  <label class="checkbox" v-for="ch in para.enum_list" :key="ch.enum_code">
                                    <input type="checkbox" :checked="checkEnumValue(ch.enum_code,para)" name="checkbox-inline" @change="enumParaChanged(ch.enum_code,para,$event)">
                                    <i></i>{{ch.enum_name}}</label>
                                </div>
                              </section>
                            </fieldset>

                            <section v-if="para.data_type==9" class="col col-3">
                              <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                              <label class="input">
                                <section v-if="para.display_value!=null && para.display_value!=undefined && para.display_value.indexOf('{')>=0">
                                  <a :href="v.href" target="_blank" class="btn pull-left" v-for="(v,ridx) in JSON.parse(para.display_value)" :key="ridx">{{(ridx>0?",":"")+v.value}}</a>
                                </section>
                                <a href="javascript:void(0);" class="btn pull-left btn-info" @click="editRefParameter(para)">
                                  <i class="fa fa-edit"></i>编辑</a>
                              </label>
                            </section>

                          </div>
                        </div>
                      </fieldset>

                      <footer>
                        <a v-if="(subject_type=='s' && functionlist.indexOf('save@information_service_project_edit')>=0) ||(subject_type=='p' && functionlist.indexOf('save@information_product_project_edit')>=0)"
                          href="javascript:void(0);" :class="paraInfoSuc?'btn-success':'btn-info'" class="btn pull-left" @click="saveParas()">
                          <i class="fa fa-save"></i> 保存参数信息</a>
                      </footer>

                    </form>
                  </div>
                  <!-- end widget content -->
                </div>
                <!-- end widget div -->
              </div>




              <div class="jarviswidget jarviswidget-color-darken" data-widget-colorbutton="false" data-widget-editbutton="false">
                <header>
                  <span class="widget-icon">
                    <i class="fa fa-table"></i>
                  </span>
                  <h2>上传案例附件</h2>
                </header>

                <!-- widget div-->
                <div>
                  <div class="btn-upload">
                    <a v-if="(subject_type=='s' && functionlist.indexOf('save@information_service_project_edit')>=0) ||(subject_type=='p' && functionlist.indexOf('save@information_product_project_edit')>=0)"
                      href="javascript:void(0);" @click="uploadAttachment()" class="btn btn-success pull-left">
                      <i class="fa fa-save"></i>上传附件</a>
                  </div>

                  <!-- widget edit box -->
                  <div class="jarviswidget-editbox">
                    <!-- This area used as dropdown edit box -->

                  </div>
                  <!-- end widget edit box -->

                  <!-- widget content -->
                  <div class="widget-body no-padding">
                    <table id="datatable_tabletools1" class="table table-striped table-bordered table-hover" width="100%">
                      <thead>
                        <tr>
                          <th data-hide="phone">ID</th>
                          <th data-class="expand">文件名称</th>
                          <th>文件类型</th>
                          <th data-hide="phone">上传时间</th>
                          <th data-hide="phone,tablet">操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <tr v-for="(f,index) in projectInfo.attachment_list" :key="index">
                            <td>{{index+1}}</td>
                            <td>
                              {{f.file_name}}
                            </td>
                            <td>{{f.file_type!=null?f.file_type.toUpperCase().replace(".",""):""}}</td>
                            <td>{{f.create_time}}</td>
                            <td>
                              <a href="javascript:void(0);" class="btn btn-danger btn-xs" @click="deleteAtttachment(f,index)">
                              删除 </a>
                            </td>
                          </tr>

                          <tr v-for="(uploading_file,index) in uploading_files" :key="index" v-if="uploading_file.ok!==true">
                            <td>{{projectInfo.attachment_list.length+index+1}}</td>
                            <td>
                              <!-- <div class="easy-pie-chart txt-color-blue easyPieChart" :data-percent="uploading_progresses[uploading_file.guid]" data-pie-size="20">
										<span class="percent font-xs">{{uploading_progresses[uploading_file.guid]}}</span></div> -->
                              <span style="padding-left:100px;">{{uploading_file.name.replace('.'+uploading_file.ext,'')}}</span>
                              <div class="progress">
                                <div class="progress-bar bg-color-blue" :style="'width: '+uploading_progresses[uploading_file.index]+'%;'"></div>
                              </div>
                            </td>
                            <td>{{uploading_file.ext!=null?uploading_file.ext.toUpperCase():""}}</td>
                            <td></td>
                            <td></td>
                          </tr>




                      </tbody>
                    </table>
                  </div>
                  <!-- end widget content -->
                </div>
                <!-- end widget div -->
              </div>



              <!-- <div class="jarviswidget jarviswidget-color-darken" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-custombutton="false">
									
									<div>
										<div class="jarviswidget-editbox">
										</div>

										<div class="widget-body no-padding" style="min-height:0;">
											<form id="query-form" class="smart-form">
												<footer>			
													<a target="_blank" :href="(subject_type=='p'?'/p/one_p.html?id=':'/s/one_s.html?id=')+subject_oid" class="btn btn-info pull-left" :disabled="subject_oid==null">
														<i class="fa fa-check"></i> 预览案例</a>

													<a href="javascript:void(0);" class="btn btn-warning pull-left" @click="publishProject()">
														<i class="fa fa-check"></i> 发布案例</a>
												</footer>
											</form>
										</div>
										 end widget content 
									</div>
									end widget div 
							</div> -->


            </article>
          </div>
        </section>
      </div>
    </div>

    <div id="uploaderInput" ref="uploaderInput1" v-show="false"></div>
    <input type="file" ref="uploadPic" v-show="false" @change="uploadPicChanged()" />
    <ElLoading ref="loading"></ElLoading>

    <ElToastAlert ref="toastAlert"></ElToastAlert>
    <ElConfirmDialog @confirm="doConfirm()" ref="confirmDlg"></ElConfirmDialog>
  </div>
</template>

<script>
  import "common/httputils"; //引用js
  import htmlHelper from "common/htmlutils";
  import ElPageFrame from "components/el-PageFrame/el-PageFrame";

  import ElPager from "components/el-Pager/el-Pager";
  import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
  import ElLoading from "components/el-Loading/el-Loading";
  import ElConfirmDialog from "components/el-ConfirmDialog/el-ConfirmDialog";
  import Vue from "vue";
  import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";
  import ElSerCategory from "components/el-SerCategory/el-SerCategory";
  import ElProCategory from "components/el-ProCategory/el-ProCategory";

  export default {
    name: "app",
    data: function () {
      return {
        subject_type: null,
        subject_name: null,
        subject_oid: null,


        uploader: null,
        uploading_progresses: [],
        uploading_files: [],
        init_cat: null,
        categorychanged: false,
        category_code: null,
        category_name: null,
        service_id: null,
        uploadingPicBase64: null,
        basicInfoSuc: false, //基本信息保存成功
        paraInfoSuc: false, //参数信息保存成功

        professions: [],
        companylist: [],
        projectInfo: {
          core: {
            oid: null,
            project_name: null,
            product_oid: null,
            service_oid: null,
            company_name: null,
            company_oid: null,
            process: null,
            key_tag: null,
            description: null,
            profession: '',
            category: null
          },
          delete_pictures: [],
          update_pictures: [],
          attachment_list: [],
          picture_list: []
        },
        parameters: [],
        functionlist: [],
      };
    },
    watch: {},
    computed: {
      subject_type_name: function () {
        return this.subject_type == "p" ?
          "产品" :
          this.subject_type == "s" ? "服务" : "";
      },
      edit_mode: function () {
        if (
          this.projectInfo.core.oid != "" &&
          this.projectInfo.core.oid != null &&
          this.projectInfo.core.oid != undefined &&
          this.projectInfo.core.oid.toUpperCase() != "NULL"
        ) {
          return "edit";
        } else {
          return "new";
        }
      }
    },
    components: {
      ElPageFrame,
      ElPager,
      ElBlockAlert,
      ElLoading,
      ElConfirmDialog,
      ElToastAlert,
      ElSerCategory,
      ElProCategory
    },
    created: function () {
      this.category_code = $.getUrlParam("c");
      this.projectInfo.core.category = $.getUrlParam("c");
      //$.getUrlParam("ac");
      this.projectInfo.core.product_seqid = $.getUrlParam("pid");
      this.projectInfo.core.service_seqid = $.getUrlParam("sid");
      this.projectInfo.core.oid = $.getUrlParam("id");
      this.subject_type = $.getUrlParam("t"); //s:service ,p:product
      this.projectInfo.core.company_oid = $.getUrlParam("com");

      var pageid = "";
      if (this.subject_type == 'p') {
        pageid = "information_product_project_edit";
      } else if (this.subject_type == 's') {
        pageid = "information_service_project_edit";
      }
      $.post_json(appsettings.apiroot + "account/userfunction", {
        pageid: pageid
      }, this.functionlist_callback);

      if (this.edit_mode == "new") {

      } else if (this.edit_mode == "edit") {
        //get para values
        this.getPrjParameters();

        var data = {};
        data.project_oid = this.projectInfo.core.oid;
        //get attachments
        $.post_json(
          appsettings.apiroot + "home/project/attachment/retrieve",
          data,
          this.callback_getAttachments
        );
      }

      if (this.subject_type == "p") {
        //get product core info
        this.getProCoreInfo();
      } else if (this.subject_type == "s") {
        //get service core info
        this.getSerCoreInfo();
      }

      //get professions
      $.post_json(
        appsettings.apiroot + "utility/profession/retrieve",
        null,
        this.callback_getProfesions
      );
    },
    mounted: function () {
      if (this.edit_mode == "edit") {
        var data = {};
        data.project_oid = this.projectInfo.core.oid;
        this.$refs.loading.showLoading("正在加载数据...");
        $.post_json(
          appsettings.apiroot + "home/project/core/retrieve",
          data,
          this.callback_getCoreInfo
        );
      }

      this.InitUploader();
      setTimeout(function () {
        //初始化datatable组件
        InitDatatable({
          tableid: "datatable_tabletools",
          jslocation: appsettings.jsPrefix
        });
        //配置validate组件
        ValidateConfig({
          formid: "query-form",
          rules: {
            text: {
              required: true
            },
            email: {
              required: true,
              email: true
            },
            phone: {
              required: true,
              isMobile: true
            },
            country: {
              required: true
            },
            digital: {
              required: true,
              digits: true
            }
          },
          messages: {
            text: {
              required: "Please enter your last name"
            },
            email: {
              required: "Please enter your email address",
              email: "Please enter a VALID email address"
            },
            phone: {
              required: "Please enter your phone number",
              isMobile: "Please enter VALID phone number"
            },
            country: {
              required: "Please select your country"
            },
            digital: {
              required: "Please enter code",
              digits: "Digits only please"
            }
          }
        });
        $("#date").datepicker({
          dateFormat: "yy/mm/dd",
          prevText: '<i class="fa fa-chevron-left"></i>',
          nextText: '<i class="fa fa-chevron-right"></i>',
          onSelect: function (selectedDate) {
            //$('#startdate').datepicker('option', 'maxDate', selectedDate);
          }
        });
      }, 0);
    },

    methods: {
      radioParaChanged: function (code, para, event) {
        if (event.currentTarget.checked) {
          para.value = code;
        }
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
      checkEnumValue: function (code, para) {
        if (para.value != null && para.value.length > 0) {
          var codes = para.value.split(',');
          for (var i = 0; i < codes.length; i++) {
            if (codes[i] === code) {
              return true;
            }
          }
          return false;
        }

      },
      enumParaChanged: function (code, para, event) {
        if (event.currentTarget.checked) {
          para.value += "," + code;
        } else {
          var codes = para.value.split(',');
          for (var i = 0; i < codes.length; i++) {
            if (code == codes[i]) {
              codes.splice(i, 1);
              break;
            }
          }
          para.value = codes.join(",");
        }
      },
      checkProfession: function (prof) {
        if (this.projectInfo.core.profession != null && this.projectInfo.core.profession.length > 0) {
          var codes = this.projectInfo.core.profession.split(',');
          for (var i = 0; i < codes.length; i++) {
            if (codes[i] === prof.enum_code) {
              return true;
            }
          }
          return false;
        }
      },
      getProCoreInfo: function () {
        var data = {};
        data.seqid = this.projectInfo.core.product_seqid;
        $.post_json(
          appsettings.apiroot + "home/product/core/retrieve",
          data,
          this.callback_getProCoreInfo
        );
      },
      callback_getProCoreInfo: function (result) {
        if (result != null && result.status == 0) {
          this.subject_name = result.data.product_name;
          this.projectInfo.core.company_name = result.data.company_name;
          this.subject_oid = result.data.oid;
          this.projectInfo.core.product_oid = result.data.oid;
        } else {}
      },
      getSerCoreInfo: function () {
        var data = {};
        data.seqid = this.projectInfo.core.service_seqid;
        $.post_json(
          appsettings.apiroot + "home/service/core/retrieve",
          data,
          this.callback_getSerCoreInfo
        );
      },
      callback_getSerCoreInfo: function (result) {
        if (result != null && result.status == 0) {
          this.subject_name = result.data.service_name;
          this.subject_oid = result.data.oid;
          this.projectInfo.core.company_name = result.data.company_name;
          this.projectInfo.core.service_oid = result.data.oid;
        } else {}
      },
      getPrjParameters: function () {
        var data = {};
        data.project_oid = this.projectInfo.core.oid;
        $.post_json(
          appsettings.apiroot + "home/project/paramvalues/retrieve",
          data,
          this.callback_getPrjParameters
        );
      },
      callback_getPrjParameters: function (result) {
        if (result != null && result.status == 0) {
          this.parameters = result.data;
          for (var j = 0; j < this.parameters.length; j++) {
            if (this.parameters[j].is_region_data == "1") {
              if (this.parameters[j].value != null) {
                var values = this.parameters[j].value.split(',');
                this.parameters[j].mininput = values[0];
                this.parameters[j].maxinput = values[1];
              }
            }
          }
        } else {}
      },
      productCatChanged: function (cat) {
        this.projectInfo.core.pro_category = cat;
      },
      categoryChanged: function (cat) {
        this.category_code = cat;
      },
      callback_getAttachments: function (result) {
        if (result != null && result.status == 0) {
          this.projectInfo.attachment_list = result.data;
        } else {
          this.$refs.toastAlert.config = {
            type: "error",
            title: "查询案例附件列表出现异常",
            msg: "" + result.message
          };
          this.$refs.toastAlert.show = true;
        }
      },
      callback_getProfesions: function (result) {
        if (result != null && result.status == 0) {
          this.professions = result.data;
        } else {
          this.$refs.toastAlert.config = {
            type: "error",
            title: "页面初始化失败",
            msg: "获取适用行业信息失败：" + result.message
          };
          this.$refs.toastAlert.show = true;
        }
      },
      profChanged: function (code, event) {
        if (event.currentTarget.checked) {
          //add  prof
          this.projectInfo.core.profession += "," + code;
        } else {
          //remove prof
          var codes = this.projectInfo.core.profession.split(',');
          codes.removeByValue(code);
          this.projectInfo.core.profession = codes.join(",");
        }
      },
      publishProject: function () {
        var data = {};
        data.seqid = this.service_id;
        $.post_json(
          appsettings.apiroot + "project/pass",
          data,
          this.callback_publishProject
        );
        this.$refs.loading.showLoading("正在发布案例...");
      },
      callback_publishProject: function (result) {
        this.$refs.loading.hideLoading();
        if (result != null && result.status == 0) {
          this.$refs.confirmDlg.confirmShow({
            title: "发布成功",
            msg: "您已成功发布案例【" + this.projectInfo.core.project_name + "】.",
            only_alert: true
          });
        } else {
          //failed
          this.$refs.confirmDlg.confirmShow({
            title: "发布失败！",
            msg: "发布案例【" +
              this.projectInfo.core.project_name +
              "】失败! 原因:" +
              result.message,
            only_alert: true
          });
        }
      },
      doConfirm: function () {
        switch (this.$refs.confirmDlg.options.action_code) {
          case "deleteA":
            break;
        }
      },
      deleteAtttachment: function (attach, attach_index) {
        var self = this;
        this.$refs.confirmDlg.confirmShow({
          only_alert: false,
          action_code: "deleteA",
          title: "删除附件",
          msg: "确定要删除附件【" + attach.file_name + attach.file_type + "】吗？",
          success: function (res) {
            if (res.confirm == true) {
              //do delete
              $.post_json(
                appsettings.apiroot + "home/project/attachment/delete",
                attach,
                self.callback_deleteAtttachment,
                attach_index
              );
            }
          }
        });
      },
      callback_deleteAtttachment: function (result, attach_index) {
        if (result != null && result.status == 0) {
          this.projectInfo.attachment_list.splice(attach_index, 1);
        } else {
          //删除失败
          this.$refs.toastAlert.config = {
            type: "error",
            title: "删除案例附件失败",
            msg: result.message
          };
          this.$refs.toastAlert.show = true;
        }
      },
      callback_getCoreInfo: function (result) {
        this.$refs.loading.hideLoading();
        if (result != null && result.status == 0) {
          this.$refs.toastAlert.config = {
            type: "success",
            title: "查询案例基本信息成功",
            msg: result.message
          };
          this.projectInfo.core = result.data;

          this.projectInfo.core.description = this.projectInfo.core.description
            .replace(/<br\/>/g, "\n")
            .replace(/<br( )*\/>/g, "\n")
            .replace(/<br(	)*\/>/g, "\n");
        } else {
          this.$refs.toastAlert.config = {
            type: "error",
            title: "查询案例基本信息失败",
            msg: result.message
          };
        }
        this.$refs.toastAlert.show = true;
      },
      formatParaValues:function(parameters){
        var paras=[];
         for (var j = 0; j < parameters.length; j++) {
            para = {};
            para.column_id = parameters[j].column_id;
            if (
              parameters[j].data_type == 7 ||
              parameters[j].is_region_data == "1"
            ) {
              para.value =
                (parameters[j].mininput || "") +
                "," +
                (parameters[j].maxinput || "");
            } else if (parameters[j].data_type == 9) {
              para.value = "";
              if (
                parameters[j].value != null &&
                parameters[j].value != undefined &&
                parameters[j].value.indexOf("{") > 0
              ) {
                var v = JSON.parse(parameters[j].value);
                for (var k = 0; k < v.length; k++) {
                  if (k > 0) {
                    para.value += ",";
                  }
                  para.value += v[k].key;
                }
              }
            } else if (parameters[j].data_type == 3) {
              var ue = this.$refs["ueditor_" + parameters[j].category_code + parameters[j].column_id];
              if (ue != undefined && ue != null) {
                para.value = ue[0].getUEContent();
              }
            } else {
              para.value = parameters[j].value;
            }
            paras.push(para);
         }
         return paras;
      },
      saveParas: function () {
        if (this.edit_mode == "new") {
          this.$refs.confirmDlg.confirmShow({
            action_code: "cantsavepara",
            title: "请先保存案例基本信息",
            msg: "保存案例基本信息后才能保存案例参数信息.",
            only_alert: true
          });
          return;
        }
        var data = {};
        data.project_oid = this.projectInfo.core.oid;
        data.parameters = [];
       // console.log(this.parameters);
        data.parameters = this.formatParaValues(this.parameters);
        $.post_json(
          appsettings.apiroot + "home/project/paramvalues/update",
          data,
          this.callback_saveParas
        );
        this.$refs.loading.showLoading("正在保存案例参数信息...");
      },
      callback_saveParas: function (result) {
        this.$refs.loading.hideLoading();
        if (result != null && result.status == 0) {
          //success
          this.$refs.toastAlert.config = {
            type: "success",
            title: "保存案例参数信息成功",
            msg: result.message
          };
        } else {
          //failed
          this.$refs.toastAlert.config = {
            type: "error",
            title: "保存案例参数信息失败",
            msg: result.message
          };
        }
        this.$refs.toastAlert.show = true;
      },

      saveBasicInfo: function () {
        this.basicInfoSuc = false;
        this.projectInfo.core.category = this.category_code;
        if (this.edit_mode == "new") {
          $.post_json(
            appsettings.apiroot + "home/project/create",
            this.projectInfo,
            this.callback_saveBasicInfo
          );
        } else {
          $.post_json(
            appsettings.apiroot + "home/project/update",
            this.projectInfo,
            this.callback_saveBasicInfo
          );
        }

        this.$refs.loading.showLoading("正在保存...");
      },
      callback_saveBasicInfo: function (result) {
        this.$refs.loading.hideLoading();
        if (result != null && result.status == 0) {

          //success
          this.basicInfoSuc = true;
          if (this.edit_mode == "new") {
            this.projectInfo.core.oid = result.data;
            this.project_oid = result.data;
            history.pushState(
              null,
              document.title,
              window.location.href + "&id=" + result.data
            );
            //通知父窗口
            //window.opener.location.reload();
          }
          this.$refs.toastAlert.config = {
            type: "success",
            title: "保存案例基本信息成功",
            msg: result.message
          };
          this.$refs.toastAlert.show = true;
          //get paravalues
          this.getPrjParameters();
        } else {
          //failed
          this.basicInfoSuc = false;
          $(window).scrollTop(0);
          this.$refs.toastAlert.config = {
            type: "error",
            title: "保存案例基本信息失败",
            msg: result.message
          };
          this.$refs.toastAlert.show = true;
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
          server: appsettings.apiroot + "home/project/attachment/upload",
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
          self.uploader.options.formData.project_oid = self.projectInfo.core.oid;
          self.uploader.options.formData.token = window.localStorage.getItem(
            "token"
          );
          //如果是图片，则生成缩略图
          if (htmlHelper.isImg("." + file.ext)) {
            self.uploader.makeThumb(
              file,
              function (error, ret) {
                file.url = ret;
                // self.uploading_file = file;
                self.uploading_files.push(file);
              },
              100,
              100
            );
          } else {
            //其他文件，则用一个背景图片
            file.url = appsettings.gyhImgPrefix + "file.png";
            //  self.uploading_file = file;
            self.uploading_files.push(file);
          }
        });
        this.uploader.on("uploadProgress", function (file, percentage) {
          Vue.set(self.uploading_progresses, file.index, (percentage * 100 + "").substring(0, 5));
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
          response = JSON.parse(response);
          if (response != null) {
            if (response.status == 0) {
              file.ok = true;
              file.project_oid = self.projectInfo.core.oid;
              file.oid = response.data.oid;
              file.create_time = response.data.create_time;
              
              var filedata = {};
              filedata.file_name = file.name.replace("." + file.ext, "");
              filedata.oid = response.data.oid;
              filedata.file_type = "." + file.ext;
              filedata.project_oid = self.projectInfo.core.oid;
              filedata.create_time = response.data.create_time;
              self.projectInfo.attachment_list.push(filedata);

           
              setTimeout(() => {
                self.uploading_files = self.uploading_files.splice(file.index - 1, 1);
              }, 0);
            } else if (response.status == 9999) {
              window.location.href =
                appsettings.login_url+ encodeURIComponent(window.location.href);
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
      callback_persistAttachment: function (result, filedata) {
        if (result != null && result.status == 0) {
          filedata.create_time = result.data.create_time;
          Vue.set(
            this.projectInfo.attachment_list,
            this.projectInfo.attachment_list.length - 1,
            filedata
          );
          //	this.projectInfo.attachment_list = this.projectInfo.attachment_list;
        } else {}
      }
    }
  };
</script>

<style>
  .nopaddingl {
    padding-left: 0 !important;
  }

  .superbox-list {
    padding: 5px;
  }

  .to {
    height: 32px;
    line-height: 32px;
    vertical-align: middle;
    margin-left: -10px !important;
    padding-right: 2px !important;
    margin-right: 2px !important;
  }

  .border {
    border: solid 1px #ccc !important;
    border-bottom: none !important;
  }

  i.unit {
    width: auto !important;
  }

  .btn-small {
    height: 31px;
    padding: 0 22px;
  }

  .btn-upload {
    margin: -13px 0 20px -5px;
  }

  .btn-upload:after {
    content: "";
    display: table;
    clear: both;
  }

  .btn-upload a {
    margin: 10px 5px 0 0;
    height: 31px;
    margin: 10px 0 0 5px;
    padding: 0 22px;
    font: 300 15px/29px "Open Sans", Helvetica, Arial, sans-serif;
    cursor: pointer;
  }

  .progress {
    height: 5px!important;
  }

  .progress .progress-bar {
    line-height: 5px!important;
  }

  .smart-form .inline-group .radio {
    margin-right: 20px !important;
  }

  .rr {
    margin-right: -20px;
    margin-left: 5px;
  }

  .rl {
    margin-right: 2px;
  }

  @media (min-width: 1200px) {
    .modal-dialog {
      width: 1000px;
      margin: 30px auto;
    }
  }

  .no-padding .table-bordered {
    border-bottom: 1px solid #ccc !important;
  }

  .table-bordered,
  .no-padding>.table-responsive>.table-bordered {
    border-bottom: 1px solid #ccc !important;
  }
</style>