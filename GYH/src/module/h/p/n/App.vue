<template>
  <div id="app">
    <ElPageFrame ref="pf"></ElPageFrame>

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
          <li>首页</li>
          <li>个人中心</li>
          <li>产品管理</li>
          <li>{{edit_mode=="edit"?'编辑':'新增'}}产品</li>
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
                  <h2>产品基本信息 </h2>
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
                          <!-- <section class="col col-4">
                            <label class="label">产品类别</label>
                            <label class="input">
                              <input type="text" :value="productInfo.core.category_name" @focus="showCatModal">
                            </label>
                          </section> -->
                          <section class="col col-4">
                            <label class="label">产品系列</label>
                            <label class="input">
                              <input type="text" :value="productInfo.core.category_name" @focus="showCatModal">
                            </label>
                          </section>
                          <!-- <section class="col col-4">
                            <label class="label">&nbsp;</label>
                            <label class="input">
                              <a href="javascript:void(0);" @click="createNewProduct()" class="bope col-sm-6 btn btn-success pull-left">
                                <i class="fa fa-save"></i> 新建产品</a>
                             
                            </label>
                          </section> -->

                           <section class="col col-4">
                            <label class="label">*产品名称</label>
                            <label class="input">
                              <input type="text" name="text" v-model="productInfo.core.product_name">
                            </label>
                          </section>
                          <section class="col col-4">
                            <label class="label">*公司名称</label>
                            <label class="input">
                              <input type="text" :value="myComInfo.name" disabled="disabled"/>
                              <!-- <input type="text" class="typeahead_1"  v-model="productInfo.core.company_name"> -->
                              <!-- <ElCompanyIntellisense @companyChanged="companyChanged" :comname="productInfo.core.company_name"></ElCompanyIntellisense> -->
                            </label>
                          </section>
                        </div>
                      </fieldset>


                      <!-- // <fieldset>
                      //   <div class="row">
                         


                      //   </div>
                      // </fieldset> -->

                      <!-- <fieldset>
                        <div class="row">
                          <section class="col col-sm-12">
                            <label class="label">产品图片</label>
                            <div class="textarea">
                              <div class="superbox col-sm-12">
                                <div class="superbox-list imgbox" :class="selectedPic==pic?'active':''" v-for="(pic,index) in productInfo.picture_list" :key="index">
                                  <img :src="appsettings.proimg+pic.oid+pic.file_type" :data-img="appsettings.proimg+pic.oid+pic.file_type" class="superbox-img">
                                  <i class="fa fa-times ibtn" style="color: red;" @click="deleteProductPic(pic,'list')"></i>
                                </div>

                                <div class="superbox-list imgbox" v-for="(pic,index) in productInfo.update_pictures" :key="index" v-show="productInfo.update_pictures!=null">
                                  <img :src="pic.base64" :data-img="pic.base64" class="superbox-img">
                                  <i class="fa fa-times ibtn" style="color: red;" @click="deleteProductPic(pic,'update')"></i>
                                </div>

                                <div class="superbox-list" style="text-align:center;" @click="chooseLocalPicture()">

                                  <i class="fa  fa-plus-circle" style="color: #3276B1;font-size: 50px;cursor:pointer;" title="上传新的产品图片"></i>
                                </div>
                              </div>

                            </div>
                          </section>
                        </div>
                      </fieldset> -->

                      <fieldset v-if="false">
                        <div class="row">
                          <!-- <section class="col col-3">
                            <label class="label">产品系列</label>
                            <label class="input">
                              <input type="text" v-model="productInfo.core.series">
                            </label>
                          </section> -->

                          <section class="col col-3">
                            <label class="label">产品工艺</label>
                            <label class="input">
                              <input type="text" v-model="productInfo.core.process">
                            </label>
                          </section>

                          <section class="col col-3">
                            <label class="label">产品来源</label>
                            <div class="inline-group">
                              <label class="radio">
                                <input type="radio" name="psource" value="0" :checked="productInfo.core.product_source==0" @change="changeRource(0,$event)">
                                <i></i>原厂</label>

                              <label class="radio">
                                <input type="radio" name="psource" value="2" :checked="productInfo.core.product_source==2" @change="changeRource(2,$event)">
                                <i></i>代理</label>

                              <label class="radio">
                                <input type="radio" name="psource" value="1" :checked="productInfo.core.product_source==1" @change="changeRource(1,$event)">
                                <i></i>二手</label>
                            </div>
                          </section>
                        </div>

                      </fieldset>

                      <fieldset v-if="false">
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

                      <fieldset v-if="false">
                        <div class="row">
                          <section class="col col-sm-12">
                            <label class="label">产品亮点</label>
                            <div class="textarea">
                              <textarea rows="5" width="100%" v-model="productInfo.core.highlight"></textarea>
                            </div>
                          </section>
                        </div>
                      </fieldset>

                      <fieldset>
                        <div class="row">
                          <section class="col col-sm-12">
                            <label class="label">产品描述</label>
                            <div class="textarea">
                              <ElUEditor ref="ueditor" :code="'2'"></ElUEditor>
                            </div>
                          </section>
                        </div>
                      </fieldset>

                      <footer>
                        <a @click="saveBasicInfo()" href="javascript:void(0);" :class="basicInfoSuc?'btn-success':'btn-info'"
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
                  <h2>产品参数信息 </h2>
                </header>
                <div>
                  <div class="jarviswidget-editbox">
                  </div>

                  <div class="widget-body no-padding">
                    <form id="para-form" class="smart-form">
                      <fieldset v-for="group in parametergroups" :key="group.group_code">
                        <div class="row">
                          <section class="col col-3">
                            <label class="label" style="font-size:15px">{{group.group_name}}</label>
                          </section>
                        </div>

                        <div class="row">
                          <div v-for="para in group.parameters" :key="para.column_id">

                            <section v-if="para.data_type==0 && para.is_enum_data!=1&& para.is_region_data!=1" class="col col-3">
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

                            <fieldset v-if="para.data_type==3" class="border col col-sm-12">
                              <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                              <section>
                                <ElUEditor :id="'ueditor_'+para.category_code+para.column_id" :ref="'ueditor_'+para.category_code+para.column_id" :code="'2'"></ElUEditor>
                              </section>
                            </fieldset>

                            <section v-if="para.data_type==4" class="col col-3">
                              <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                              <div class="input">
                                <!-- <ElDateTimeInput :type="'date'" @valueChanged="paraValueChanged(para,$event)"></ElDateTimeInput> -->
                                <input type="text" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="paraChanged(para,$event)" :value="para.value">
                              </div>
                            </section>

                            <section v-if="para.data_type==5" class="col col-3">
                              <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                              <div class="input">
                                <input type="text" onclick="WdatePicker({dateFmt:'HH:mm:ss'})" @focus="paraChanged(para,$event)" :value="para.value">
                              </div>
                            </section>

                            <section v-if="para.data_type==6" class="col col-3">
                              <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                              <div class="input">
                                <input type="text" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" @focus="paraChanged(para,$event)" :value="para.value">
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
                                    <input type="radio" @change="radioParaChanged(ch.enum_code,para,$event)" :value="ch.enum_code" :checked="para.value==ch.enum_code"
                                      :name="'radio_'+para.column_id">
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
                        <a href="javascript:void(0);" :class="paraInfoSuc?'btn-success':'btn-info'"
                          class="btn pull-left" @click="saveParas()">
                          <i class="fa fa-save"></i> 保存参数信息</a>


                      </footer>

                    </form>
                  </div>
                  <!-- end widget content -->
                </div>
                <!-- end widget div -->
              </div>

              <div v-for="(ctable,index) in children_tables" :key="index" class="jarviswidget jarviswidget-color-darken" data-widget-colorbutton="false"
                data-widget-editbutton="false" data-widget-custombutton="false">
                <header>
                  <span class="widget-icon">
                    <i class="fa fa-pencil-square-o"></i>
                  </span>
                  <h2>{{ctable.table_name}} </h2>
                  <a class="pull-right btn btn-success btn-xs" data-toggle="modal" data-target="#st-Modal" @click="selectSlaveTableItem(ctable,null)"
                    style="margin:5px 10px;">
                    <i class="fa fa-plus"></i> 添加记录</a>
                </header>
                <!-- datatable-->
                <div v-if="ctable.records.length>0">
                  <div class="jarviswidget-editbox">
                  </div>
                  <div class="widget-body no-padding">
                    <div class="custom-scroll" style="max-height:500px; overflow-y: scroll;margin: 0 0 10px 10px;">
                      <div style="padding: 4px 0;margin: 5px 1px;">
                        <!-- {{group.group_name}} -->
                      </div>
                      <table id="datatable_tabletools" class="nowrap table table-bordered" style="border: 1px solid #ccc !important; margin:0;">
                        <thead>
                          <tr>
                            <th>操作</th>
                            <th v-for="para in getSlaveTableHeaders(ctable)" :key="para.column_id">{{para.column_name}}</th>
                          </tr>
                        </thead>
                        <tbody class="table-responsive">
                          <tr class="row-show" v-for="record in ctable.records" :key="record.oid">
                            <td>
                              <div class="btn-group op">
                                <a class="btn btn-default btn-xs" data-toggle="modal" data-target="#st-Modal" @click="selectSlaveTableItem(ctable,record)">修改</a>
                                <a class="btn btn-default dropdown-toggle btn-xs" data-toggle="dropdown" href="javascript:void(0);">
                                  <span class="caret"></span>
                                </a>
                                <div class="dropdown-menu" style="width:500px;padding:8px 10px;background-color: #fff;">
                                  <span style="padding-right:20px;">操作:</span>
                                  <a class="btn btn-danger btn-xs" @click="deleteSlaveTableItem(ctable,record)">删除</a>
                                </div>
                              </div>
                            </td>
                            <template v-for="rec_para_group in record.para_groups">
                              <td v-for="(para,index) in rec_para_group.parameters" :key="rec_para_group.group_code+index">{{para.value}}</td>
                            </template>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- end datatable -->
              </div>

              <div class="jarviswidget jarviswidget-color-darken" data-widget-colorbutton="false" data-widget-editbutton="false">
                <header>
                  <span class="widget-icon">
                    <i class="fa fa-table"></i>
                  </span>
                  <h2>上传产品附件</h2>
                </header>

                <!-- widget div-->
                <div>
                  <div class="btn-upload">
                    <a href="javascript:void(0);" @click="uploadAttachment()"
                      class="btn btn-success pull-left">
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
                          <tr v-for="(f,index) in productInfo.attachment_list" :key="index">
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
                            <td>{{productInfo.attachment_list.length+index+1}}</td>
                            <td>
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

              <div class="jarviswidget jarviswidget-color-darken" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-custombutton="false">
                <div>
                  <div class="jarviswidget-editbox">
                  </div>

                  <div class="widget-body no-padding" style="min-height:0;">
                    <form id="query-form" class="smart-form">
                      <footer>
                        <!-- <a target="_blank" :href="'/p/one_p.html?id='+productInfo.core.seqid" class="btn btn-info pull-left" :disabled="product_id==null">
                          <i class="fa fa-check"></i> 预览产品</a> -->

                        <!-- // <a href="javascript:void(0);" v-if="functionlist.indexOf('add_project@information_product_edit')>=0" class="btn btn-warning pull-left"
                        //   @click="editProjects()" :disabled="product_id==null">
                        //   <i class="fa fa-check"></i> 维护产品案例</a> -->


                      </footer>
                    </form>
                  </div>
                  <!-- end widget content -->
                </div>
                <!-- end widget div -->
              </div>

            </article>
          </div>
        </section>
      </div>
    </div>

    <div id="uploaderInput" ref="uploaderInput1" v-show="false"></div>
    <input type="file" ref="uploadPic" v-show="false" @change="uploadPicChanged()" />
    <ElLoading ref="loading"></ElLoading>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" v-if="refModalData!=null && refModalData.para!=null">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title">
              {{refModalData.para.column_name}}
            </h4>
          </div>
          <div class="modal-body no-padding">

            <form id="ref-form" class="smart-form">
              <!-- <fieldset>
                <div class="row">
                  <section class="col" v-for="(row,index) in refModalData.oldValues" :key="index" v-if="refModalData.selectedKeys.indexOf(row.key)>=0">
                    <label class="checkbox">
                      <input type="checkbox" checked @change="oldValChanged(row,$event)">
                      <i></i>{{row.value}}
                    </label>
                  </section>

                  <section class="col" v-for="(row,index) in refModalData.selectedRows" :key="index">
                    <label class="checkbox">
                      <input type="checkbox" checked @change="selectedValChanged(row,$event)">
                      <i></i>{{row.display_text}}
                    </label>
                  </section>

                </div>
              </fieldset> -->

              <fieldset v-if="refModalData!=undefined && refModalData!=null">
                <div class="row">
                  <section class="col col-sm-12">
                    <label class="input">
                      查询条件
                    </label>
                  </section>

                  <div v-for="(para,index) in refModalData.query_fields" :key="index">

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

                    <section v-if="(para.data_type==8||para.is_enum_data==1)  && para.enum_type==0" class="col col-3">
                      <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                      <label class="select">
                        <select name="country" v-model="para.value">
                          <option v-for="ch in para.enum_list" :key="ch.enum_code" :value="ch.enum_code">{{ch.enum_name}}</option>
                        </select>
                        <i></i>
                      </label>
                    </section>

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
                <a class="btn btn-primary pull-left" href="javascript:void(0);" @click="queryRefPara()">
                  <i class="fa fa-search"></i> 查询</a>
              </footer>
              <fieldset>
                <div>
                  <div>
                    <div class="jarviswidget-editbox">
                    </div>
                    <div class="widget-body no-padding" v-if="refModalData!=null">
                      <table class="table table-striped table-bordered table-hover" width="100%">
                        <thead>
                          <tr>
                            <th style="width: 30px;">
                              <!-- <label class="checkbox">
                                <input type="checkbox" v-model="selectAll">
                                <i></i>全选
                              </label> -->
                            </th>
                            <th v-for="head in refModalData.headers" :key="head.id" v-if="head.name!='' && head.name!=null">{{head.name}}</th>
                          </tr>
                        </thead>
                        <tbody v-if="refModalData!=null">
                          <tr class="row-show" v-for="(row,index) in refModalData.rows" :key="index">
                            <td>
                              <!-- <label class="checkbox">
                                <input type="checkbox" :checked="refModalData.selectedRows.indexOf(row)>=0 || refModalData.selectedKeys.indexOf(row.cols.find(x=>x.id=refModalData.key_column_id).value)>=0"
                                  @change="selectRefPara(row,$event)">
                                <i></i>
                              </label> -->
                              <label class="radio">
                                <input type="radio" @click="refParaClicked(row,$event)" name="refradio">
                                <i></i>
                              </label>
                            </td>
                            <td v-for="(para,pidx) in row.cols" :key="pidx" v-if="para.name!='' && para.name!=null">
                              <label>{{para.value}}{{(para.value!="" && para.data_type==1) ?para.unit:""}}</label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- <ElPager :pageTotal="query_data.pageTotal" @changePage="changePage"></ElPager> -->
                  </div>
                </div>
              </fieldset>

              <footer>
                <button type="button" class="btn btn-primary" @click="confirmRefPara()">
                  确定
                </button>
                <button type="button" class="btn btn-default" data-dismiss="modal" @click="cancelRefPara()">
                  取消
                </button>

              </footer>
            </form>


          </div>

        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <div class="modal fade" id="st-Modal" tabindex="-1" role="dialog" aria-labelledby="st-Modal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title">
              {{selected_slavetable_item.slavetable.table_name}}
            </h4>
          </div>
          <div class="modal-body no-padding">
            <form id="para-form" class="smart-form">
              <div style="max-height:490px; overflow-y: scroll;padding-right: 1px;">
                <fieldset v-for="group in selected_slavetable_item.update_para_groups" :key="group.group_code">
                  <div class="row">
                    <section class="col col-3">
                      <label class="label" style="font-size:15px">{{group.group_name}}</label>
                    </section>
                  </div>

                  <div class="row">
                    <div v-for="para in group.parameters" :key="para.column_id">

                      <section v-if="para.data_type==0 && para.is_enum_data!=1&& para.is_region_data!=1" class="col col-3">
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

                      <fieldset v-if="para.data_type==3" class="border col col-sm-12">
                        <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                        <section>
                          <ElUEditor :id="'ueditor_'+para.category_code+para.column_id" :ref="'ueditor_'+para.category_code+para.column_id" :code="'2'"></ElUEditor>
                        </section>
                      </fieldset>

                      <section v-if="para.data_type==4" class="col col-3">
                        <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                        <div class="input">
                          <!-- <ElDateTimeInput :type="'date'" @valueChanged="paraValueChanged(para,$event)"></ElDateTimeInput> -->
                          <input type="text" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" @focus="paraChanged(para,$event)" :value="para.value">
                        </div>
                      </section>

                      <section v-if="para.data_type==5" class="col col-3">
                        <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                        <div class="input">
                          <input type="text" onclick="WdatePicker({dateFmt:'HH:mm:ss'})" @focus="paraChanged(para,$event)" :value="para.value">
                        </div>
                      </section>

                      <section v-if="para.data_type==6" class="col col-3">
                        <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                        <div class="input">
                          <input type="text" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" @focus="paraChanged(para,$event)" :value="para.value">
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
                              <input type="radio" @change="radioParaChanged(ch.enum_code,para,$event)" :value="ch.enum_code" :checked="para.value==ch.enum_code"
                                :name="'radio_'+para.column_id">
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
              </div>
              <footer>
                <a href="javascript:void(0);" v-if="functionlist.indexOf('save@information_product_edit')>=0" :class="paraInfoSuc?'btn-success':'btn-info'"
                  class="btn pull-left" @click="saveChildParas()">
                  <i class="fa fa-save"></i> 保存参数信息</a>
              </footer>
            </form>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->


    <!-- 产品类别查询modal -->
    <div class="modal fade" id="catmodal" tabindex="-1" role="dialog">
      <div class="modal-dialog sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title">
              查询产品系列
            </h4>
          </div>
          <div class="modal-body no-padding">

            <div id="ref-form" class="smart-form">
              <fieldset>
                <div class="row">

                  <div>
                    <section class="col col-sm-12">
                      <label class="label">产品系列名称</label>
                      <label class="input">
                        <input type="text" placeholder="输入产品系列名称进行查询" name="text" @keyup.enter="queryCat()" v-model="cat_query.category_name">
                      </label>
                    </section>

                  </div>
                </div>
              </fieldset>
              <footer>
                <a class="btn btn-primary pull-left" href="javascript:void(0);" @click="queryCat()">
                  <i class="fa fa-search"></i> 查询</a>

                <a class="btn btn-success pull-left" href="javascript:void(0);" @click="confirmCat()">
                  <i class="fa fa-search"></i> 确定</a>
                  
              </footer> 
              <fieldset>
                <div>
                  <div>
                    <div class="jarviswidget-editbox">
                    </div>
                    <div class="widget-body no-padding">
                      <table class="table table-striped table-bordered table-hover" width="100%">
                        <thead>
                          <tr>
                            <th style="width: 30px;"></th>
                            <th>名称</th>
                            <th>业务编码</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="row-show" v-for="(row,index) in cats" :key="index">
                            <td>
                              <label class="radio">
                                <input type="radio" @click="selectCat(row,$event)" name="refradio">
                                <i></i>
                              </label>
                            </td>
                            <td>
                              {{row.name}}
                            </td>
                            <td>
                              {{row.code}}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- <ElPager :pageTotal="query_data.pageTotal" @changePage="changePage"></ElPager> -->
                  </div>
                </div>
              </fieldset>

              <footer>
                <button type="button" class="btn btn-primary" @click="confirmCat()">
                  确定
                </button>
                <button type="button" class="btn btn-default" data-dismiss="modal" @click="cancelCat()">
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

    <ElToastAlert ref="toastAlert"></ElToastAlert>
    <ElConfirmDialog @confirm="doConfirm()" ref="confirmDlg"></ElConfirmDialog>
  </div>
</template>

<script>
  import "common/httputils"; //引用js
  import Vue from "vue";
  import htmlHelper from "common/htmlutils";
  import ElPageFrame from "components/el-PageFrame/el-PageFrame";

  import ElPager from "components/el-Pager/el-Pager";
  import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
  import ElLoading from "components/el-Loading/el-Loading";
  import ElConfirmDialog from "components/el-ConfirmDialog/el-ConfirmDialog";
  import ElUEditor from "components/el-UEditor/el-UEditor";

  import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";
  import ElProCategory from "components/el-ProCategory/el-ProCategory";
  import ElRegionInput from "components/el-RegionInput/el-RegionInput";
  import ElCompanyIntellisense from "components/el-CompanyIntellisense/el-CompanyIntellisense";

  // import ElDateTimeInput from "components/el-DateTimeInput/el-DateTimeInput";

  export default {
    name: "app",
    data: function () {
      return {
        uploader: null,
        uploading_progresses: [],
        uploading_files: [],
        selectedPic: null,
        init_cat: null,
        categorychanged: false,
        first_category_code: null,
        product_id: null,
        uploadingPicBase64: null,
        basicInfoSuc: false, //基本信息保存成功
        paraInfoSuc: false, //参数信息保存成功
        selectAll: false,
        action_result: "",
        myComInfo:{},
        catInfo: {
          category_code: null,
          category_name: null
        },

        refModalData: {
          para: null,
          query_fields: null,
          headers: null,
          key_column_id: null,
          display_columns: [],
          rows: [],
          oldValues: [],
          selectedRows: [],
          selectedKeys: [],
          selectedItem: {
            key: null,
            value: null
          }
        },
        professions: [],
        companylist: [],
        productInfo: {

          core: {
            category_name: null,
            product_name: null,
            company_name: null,
            profession: "",
            process: null,
            product_source: null,
            description: null,
            category: null,
            series: null,
            highlight: null,
            seqid: null,

          },
          update_pictures: [],
          delete_pictures: [],
          attachment_list: [],
          picture_list: [],
          category_stack: []
        },
        parametergroups: [],
        company_options: null,
        copy_source_oid: null,
        copy_source_id: null,
        functionlist: [],
        children_tables: [],

        selected_slavetable_item: {
          slavetable: {},
          slaverecord_oid: "",
          update_para_groups: []
        },

        cat_query: {
          category_name: null
        },
        cats: null,
        selected_cat: null,

      };
    },
    watch: {
      selectAll: function (newVal, oldVal) {
        if (newVal) {
          for (var i = 0; i < this.refModalData.rows.length; i++) {
            var key = this.refModalData.rows[i].cols.find(
              x => x.id == this.refModalData.key_column_id
            ).value;
            if (this.refModalData.selectedKeys.indexOf(key) >= 0) {
              continue;
            }
            this.refModalData.selectedKeys.push(key);
            if (this.refModalData.rows[i].display_text == undefined) {
              this.refModalData.rows[i].display_text = "";
              var col = this.refModalData.rows[i].cols.find(
                x => x.id == this.refModalData.display_columns[1].id
              );
              if (col != null) {
                this.refModalData.rows[i].display_text += col.value;
              }
            }
            this.refModalData.selectedRows.push(
              JSON.parse(JSON.stringify(this.refModalData.rows[i]))
            );
          }
        } else {
          this.refModalData.selectedKeys = [];
          this.refModalData.selectedRows = [];
        }
      },
      category_code: function (newVal, oldVal) {
        //get parameters structure
        if (this.init_cat != this.first_category_code || this.edit_mode == "new") {
          this.categorychanged = true;
          var data = {};
          data.category_code = this.first_category_code;
          $.post_json(
            appsettings.apiroot + "product/category/paramvalues/retrieve",
            data,
            this.callback_getParas
          );
        } else if (this.categorychanged === true) {
          var data = {};
          data.category_code = this.first_category_code;
          data.product_oid = this.product_id;
          $.post_json(
            appsettings.apiroot + "home/product/paramvalues/retrieve",
            data,
            this.callback_getParas
          );
        }
      }
    },
    computed: {
      edit_mode: function () {
        if (
          this.product_id != "" &&
          this.product_id != null &&
          this.product_id != undefined
        ) {
          return "edit";
        } else if (
          this.copy_source_id != null &&
          this.copy_source_id != undefined
        ) {
          return "copy";
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
      ElUEditor,
      ElConfirmDialog,
      ElToastAlert,
      ElProCategory,
      ElRegionInput,
      ElCompanyIntellisense
      //  ,ElDateTimeInput
    },
    created: function () {
      //获取产品类别
      this.first_category_code = $.getUrlParam("c", ignore_null = true);
      this.productInfo.core.company_name = $.getUrlParam("cn", ignore_null = true);

      this.productInfo.core.category_name = $.getUrlParam("sn", ignore_null = true);
      this.catInfo.category_code = this.first_category_code;
      this.catInfo.category_name = $.getUrlParam("cnn", ignore_null = true);;


      this.productInfo.core.category = $.getUrlParam("s", ignore_null = true);

      this.productInfo.core.company_oid = $.getUrlParam("com", ignore_null = true);
      this.product_id = $.getUrlParam("id", ignore_null = true);
      this.copy_source_oid = $.getUrlParam("spoid", ignore_null = true);
      this.copy_source_id = $.getUrlParam("spid", ignore_null = true);
      this.action_result = $.getUrlParam("a", ignore_null = true);

      this.init_cat = this.first_category_code;
      this.productInfo.core.oid = this.product_id;

      $.post_json(
        appsettings.apiroot + "account/userfunction", {
          pageid: "information_product_edit"
        },
        this.functionlist_callback
      );

      if (this.edit_mode == "new") {
        //查询动态参数列表
        this.getParams();
      } else if (this.edit_mode == "edit") {
        this.getProductInfo();
      } else if (this.edit_mode == "copy") {
        //do copy
        var copydata = {};
        copydata.product_seqid = this.copy_source_id;
        $.post_json(
          appsettings.apiroot + "home/product/copy",
          copydata,
          this.callback_copyProduct
        );
      }
      //get professions
      $.post_json(
        appsettings.apiroot + "utility/profession/retrieve",
        null,
        this.callback_getProfesions
      );
      this.getmyComInfo();
    },
    mounted: function () {
      var self = this;
      if (this.edit_mode == "edit") {
        this.$refs.loading.showLoading("正在加载数据...");
      } else if (this.edit_mode == "copy") {
        this.$refs.loading.showLoading("正在复制产品信息....");
      }

      jQuery(document).on("mouseover", ".imgbox", function () {
        jQuery(this).find("i").show();
        event.preventDefault();
        event.stopPropagation();
      });
      jQuery(document).on("mouseout", ".imgbox", function () {
        jQuery(this).find("i").hide();
        event.preventDefault();
        event.stopPropagation();
      });

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
      //获取本人的公司信息
      getmyComInfo:function(){
        $.post_json(appsettings.apiroot+"account/info/company",null,this.callback_getmyComInfo);
      },
      callback_getmyComInfo:function(result){
        if(result!=null && result.status==0){
          this.myComInfo = result.data;//id,name
          this.productInfo.company_oid = this.myComInfo.id;
        }else{
          //failed
        }
      },
      getParams:function(){
        var data = {};
        data.category_code = this.first_category_code;
        $.post_json(
          appsettings.apiroot + "product/category/paramvalues/retrieve",
          data,
          this.callback_getParas
        );
      },
      getSlaveTableHeaders: function (table) {
        var heads = [];
        if (table != null && table.records.length > 0 && table.records[0].para_groups.length > 0) {
          for (var i = 0; i < table.records[0].para_groups.length; i++) {
            for (var j = 0; j < table.records[0].para_groups[i].parameters.length; j++) {
              heads.push(table.records[0].para_groups[i].parameters[j]);
            }
          }
        }
        return heads;

      },
      selectCat: function (cat, event) {
        this.selected_cat = cat;
      },
      confirmCat: function () {
        this.productInfo.core.category = this.selected_cat.code;
        this.productInfo.core.category_name = this.selected_cat.name;
        this.first_category_code= this.selected_cat.code;
        //查询动态参数

        this.getParams();
        $("#catmodal").modal("hide");
      },
      queryCat: function () {
        var data = {
          keyword: this.cat_query.category_name,
          code_level1: this.catInfo.category_code,
        };
        $.post_json(appsettings.apiroot + "product/category/search", data, this.callback_queryCat);
      },
      callback_queryCat: function (result) {
        if (result != null && result.status == 0) {
          this.cats = result.data;
          if (this.cats.length == 0) {
            this.$refs.toastAlert.showToast("warning", "没有这种产品类别！", "");
          }
        } else {
          this.$refs.toastAlert.showToast("error", "类别查询失败！", result.message);
        }
      },
      showCatModal: function () {
        $("#catmodal").modal("show");
      },
      radioParaChanged: function (code, para, event) {
        if (event.currentTarget.checked) {
          para.value = code;
        }
      },
      refParaClicked: function (para, event) {
        if (para.cols[0].value == this.refModalData.selectedItem.key) {
          this.refModalData.selectedItem = {
            key: null,
            value: null
          };
        } else {
          this.refModalData.selectedItem = {
            key: para.cols[0].value,
            value: para.cols[1].value
          };
        }
      },
      paraChanged: function (para, event) {
        para.value = event.target.value;
      },

      selectSlaveTableItem: function (slavetable, slaverecord) {
        this.selected_slavetable_item.slavetable = slavetable;
        this.selected_slavetable_item.slaverecord = slaverecord;
        if (slaverecord == undefined || slaverecord == null) {
          this.selected_slavetable_item.update_para_groups = JSON.parse(JSON.stringify(slavetable.groups));
        } else {
          this.selected_slavetable_item.update_para_groups = JSON.parse(JSON.stringify(slaverecord.para_groups));
        }

      },
      saveChildParas: function () {
        var data = {};
        data.table_id = this.selected_slavetable_item.slavetable.table_id;
        data.slave_oid = this.selected_slavetable_item.slaverecord == undefined ? null : this.selected_slavetable_item
          .slaverecord.oid;
        data.seqid = this.product_id;
        data.parameters = this.paraGroupsToParas(this.selected_slavetable_item.update_para_groups);
        $.post_json(
          appsettings.apiroot + "admin/product/slave/update",
          data,
          this.callback_saveChildParas
        );
      },
      callback_saveChildParas: function (result) {
        if (result != null && result.status == 0) {
          if (this.selected_slavetable_item.slaverecord == undefined || this.selected_slavetable_item.slaverecord ==
            null) {
            var new_record = {};
            new_record.oid = result.data;
            new_record.para_groups = JSON.parse(JSON.stringify(this.selected_slavetable_item.update_para_groups));
            //更新选中的slave record
            this.selected_slavetable_item.slaverecord = new_record;
            //更新slave table 的record 列表
            this.selected_slavetable_item.slavetable.records.unshift(new_record);
          } else {
            this.selected_slavetable_item.slaverecord.para_groups = JSON.parse(JSON.stringify(this.selected_slavetable_item
              .update_para_groups));
          }
          this.$refs.toastAlert.showToast("success", "保存" + this.selected_slavetable_item.slavetable.table_name +
            "信息成功!", "");
        } else {
          this.$refs.toastAlert.showToast("error", "保存" + this.selected_slavetable_item.slavetable.table_name +
            "信息失败!", (result || {
              message: ""
            }).message);
        }
      },

      deleteSlaveTableItem: function (slavetable, slaverecord) {
        this.selected_slavetable_item.slavetable = slavetable;
        this.selected_slavetable_item.slaverecord = slaverecord;

        var data = {};
        data.table_id = slavetable.table_id;
        data.slave_oid = slaverecord.oid;
        data.seqid = this.product_id;
        $.post_json(
          appsettings.apiroot + "admin/product/slave/record/delete",
          data,
          this.callback_deleteSlaveTableItem
        );
      },
      callback_deleteSlaveTableItem: function (result) {
        if (result != null && result.status == 0) {
          //更新slave table 的record 列表
          this.selected_slavetable_item.slavetable.records.splice(this.selected_slavetable_item.slavetable.records.indexOf(
            this.selected_slavetable_item.slaverecord), 1);
          this.$refs.toastAlert.showToast("success", "删除" + this.selected_slavetable_item.slavetable.table_name +
            "记录成功!", "");
        } else {
          this.$refs.toastAlert.showToast("error", "删除" + this.selected_slavetable_item.slavetable.table_name +
            "记录失败!", (result || {
              message: ""
            }).message);
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
      editProjects: function () {
        var seqid = this.productInfo.core.seqid;
        if (seqid == null || seqid == undefined) {
          this.$refs.confirmDlg.confirmShow({
            action_code: "cantsavepara",
            title: "请先保存产品基本信息",
            msg: "保存产品基本信息后才能编辑产品案例信息.",
            only_alert: true
          });
          return;
        }
        var pro = this.productInfo.core;
        if (pro != null) {
          window.open(
            "/adm/prj/query.html?t=p&c=" +
            pro.category +
            "&id=" +
            pro.seqid +
            "&com=" +
            pro.company_oid
          );
        }
      },
      companyChanged: function (company) {
        this.productInfo.core.company_oid = company.id;
        this.productInfo.core.company_name = company.company_name;
      },
      checkEnumValue: function (code, para) {
        if (para.value != null && para.value.length > 0) {
          var codes = para.value.split(",");
          for (var i = 0; i < codes.length; i++) {
            if (codes[i] === code) {
              return true;
            }
          }
          return false;
        }
      },
      enumParaChanged: function (code, para, event) {
        var codes = para.value.split(',');
        codes.removeByValue("");
        if (event.currentTarget.checked) {
          codes.push(code);
        } else {
          for (var i = 0; i < codes.length; i++) {
            if (code == codes[i]) {
              codes.splice(i, 1);
              break;
            }
          }
        }
        para.value = codes.join(",");
      },
      deleteProductPic: function (pic, type) {
        pic.type = type;
        var pic_index = pic.index;
        var self = this;
        //是否确定要删除图片
        this.$refs.confirmDlg.confirmShow({
          only_alert: false,
          action_code: "deleteP",
          title: '删除产品图片【点击"保存基本信息"按钮后才生效】',
          msg: "确定要删除产品图片【" + pic.file_name + pic.file_type + "】吗？",
          success: function (res) {
            if (res.confirm == true) {
              if (pic.type == "list") {
                //原图片列表
                self.productInfo.delete_pictures.push(pic.oid);
                self.productInfo.picture_list.splice(pic_index, 1);
                self.productInfo.picture_list = self.productInfo.picture_list;
              } else if (pic.type == "update") {
                //新加的图片
                self.productInfo.update_pictures.splice(pic_index, 1);
                self.productInfo.update_pictures = self.productInfo.update_pictures;
              }
              self.selectedPic = null;
            }
          }
        });
      },
      changeRegionPara: function (value, para) {
        // console.log(value);
        // console.log(para);
      },
      createNewProduct: function () {
        window.open("/h/p/edit.html?c=" + this.first_category_code, "_blank");;
      },
      copyProduct: function () {
        if (this.edit_mode == "new") {
          this.$refs.toastAlert.showToast("error", "新建产品时，无法复制产品!", "");
          return;
        }
        var newurl = window.location.href.replace(
          "&id=" + this.product_id,
          "&spoid=" + this.productInfo.core.oid
        ).replace(
          "?id=" + this.product_id,
          "?spoid=" + this.productInfo.core.oid
        );
        window.open(newurl + "&spid=" + this.product_id, "_blank");
      },
      getProductInfo: function () {
        var data = {};
        data.seqid = this.product_id;
        data.category_code = this.first_category_code;
        $.post_json(
          appsettings.apiroot + "home/product/core/retrieve",
          data,
          this.callback_getCoreInfo
        );
        $.post_json(
          appsettings.apiroot + "home/product/paramvalues/retrieve",
          data,
          this.callback_getParas
        );
        //get slave
        $.post_json(
          appsettings.apiroot + "home/product/slave/retrieve",
          data,
          this.callback_getSlaveParas
        );
        //get attachments
        $.post_json(
          appsettings.apiroot + "home/product/attachment/retrieve",
          data,
          this.callback_getAttachments
        );
        //get pictures
        $.post_json(
          appsettings.apiroot + "home/product/picture/retrieve",
          data,
          this.callback_getPictures
        );
      },
      callback_getSlaveParas: function (result) {
        if (result != null && result.status == 0) {
          //success
          // console.log(result.data);
          this.children_tables = result.data;
          for (var i = 0; i < this.children_tables.length; i++) {
            this.children_tables[i].groups = this.formatParaGroups(this.children_tables[i].groups);
          }
        } else {
          this.$refs.toastAlert.showToast("error", "查询产品参数信息出现异常", "" + result.message);
        }
      },
      callback_copyProduct: function (result) {
        this.$refs.loading.hideLoading();
        if (result != null && result.status == 0) {
          //success
          this.$refs.loading.showLoading("产品复制成功，正在更新数据....");
          this.product_id = result.data;
          //change url
          var newurl =
            window.location.href.replace("&spid=" + this.copy_source_id, '').replace("?spid=" + this.copy_source_id,
              '').replace(/spoid=[0-9a-fA-F\-]{36}/, "id=" + this.product_id) + "&a=c";
          this.action_result = "c";
          this.copy_source_oid = null;
          window.history.pushState(null, document.title, newurl);
          //do query
          this.getProductInfo();
        } else {
          this.$refs.toastAlert.showToast("error", "复制产品出现异常", "" + result.message);
        }
      },
      checkProfession: function (prof) {
        if (
          this.productInfo.core.profession != null &&
          this.productInfo.core.profession.length > 0
        ) {
          var codes = this.productInfo.core.profession.split(",");
          for (var i = 0; i < codes.length; i++) {
            if (codes[i] === prof.enum_code) {
              return true;
            }
          }
          return false;
        }
      },
      categoryChanged: function (cat) {
        var newurl = window.location.href.replace(
          "c=" + this.first_category_code,
          "c=" + cat
        );
        this.first_category_code = cat;
        history.pushState(null, document.title, newurl);
      },
      callback_getPictures: function (result) {
        if (result != null && result.status == 0) {
          this.productInfo.picture_list = result.data;
          if (this.productInfo.picture_list != null) {
            for (var i = 0; i < this.productInfo.picture_list.length; i++) {
              this.productInfo.picture_list[i].index = i;
            }
          }
        } else {
          this.$refs.toastAlert.showToast("error", "查询产品图片列表出现异常", "" + result.message);
        }
      },
      callback_getAttachments: function (result) {
        if (result != null && result.status == 0) {
          this.productInfo.attachment_list = result.data;
        } else {
          this.$refs.toastAlert.showToast("error", "查询产品附件列表出现异常", "" + result.message);
        }
      },
      callback_getAllCompanies: function (result) {
        if (result != null && result.status == 0) {
          this.companylist = result.data;
          for (var i = 0; i < this.companylist.length; i++) {
            this.companylist[i]["name"] = this.companylist[i].company_name;
          }
          var self = this;
          jQuery(".typeahead_1").typeahead({
            source: self.companylist,
            updater: function (item) {
              self.productInfo.core.company_oid = item.oid;
              self.productInfo.core.company_name = item.company_name;
            }
          });
        } else {
          this.$refs.toastAlert.showToast("error", "页面初始化失败", "获取公司信息失败：" + result.message);
        }
      },
      callback_getProfesions: function (result) {
        if (result != null && result.status == 0) {
          this.professions = result.data;
        } else {
          this.$refs.toastAlert.showToast("error", "页面初始化失败", "获取适用行业信息失败：" + result.message);
        }
      },
      profChanged: function (code, event) {
        if (event.currentTarget.checked) {
          //add  prof
          this.productInfo.core.profession += "," + code;
        } else {
          //remove prof
          var codes = this.productInfo.core.profession.split(",");
          codes.removeByValue(code);
          this.productInfo.core.profession = codes.join(",");
        }
      },
      publishProduct: function () {
        var data = {};
        data.product_id = this.product_id;
        $.post_json(
          appsettings.apiroot + "admin/product/pass",
          data,
          this.callback_publishProduct
        );
        this.$refs.loading.showLoading("正在发布产品...");
      },
      callback_publishProduct: function (result) {
        this.$refs.loading.hideLoading();
        if (result != null && result.status == 0) {
          this.$refs.confirmDlg.confirmShow({
            title: "发布成功",
            msg: "您已成功发布产品【" + this.productInfo.core.product_name + "】.",
            only_alert: true
          });
        } else {
          //failed
          this.$refs.confirmDlg.confirmShow({
            title: "发布失败！",
            msg: "发布产品【" +
              this.productInfo.core.product_name +
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
        attach.product_id = this.product_id;
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
                appsettings.apiroot + "admin/product/attachment/delete",
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
          this.productInfo.attachment_list.splice(attach_index, 1);
        } else {
          //删除失败
          this.$refs.toastAlert.showToast("error", "删除产品附件失败", result.message);
        }
      },
      changeRource: function (code, event) {
        if (event.currentTarget.checked) {
          this.productInfo.core.product_source = code;
        }
      },
      callback_getCoreInfo: function (result) {
        this.$refs.loading.hideLoading();
        if (result != null && result.status == 0) {
          if (this.action_result == 'c') {
            var title = "复制产品信息成功！";
            var newurl = window.location.href.replace("?a=c", "").replace("&a=c", "");
            history.pushState(
              null,
              document.title,
              newurl
            );
            this.$refs.toastAlert.showToast("success", title, result.message);
          }
          // console.log(result.data);
          this.productInfo.core = result.data;
          var self = this;
          var trial = 0;
          var interval = setInterval(function () {
            trial++;
            if (
              self.$refs.ueditor != null &&
              self.$refs.ueditor != undefined &&
              self.$refs.ueditor.editor != null &&
              self.$refs.ueditor.editor != undefined &&
              self.$refs.ueditor.editor.isReady > 0
            ) {
              window.clearInterval(interval);
              self.$refs.ueditor.setUEContent(self.productInfo.core.description);
            } else {
              if (trial > 10) {
                window.clearInterval(interval);
                self.$refs.toastAlert.showToast("error", "查询产品描述信息失败", "请稍后再试");
              } else {}
            }
          }, 100);
        } else {
          this.$refs.toastAlert.showToast("error", "查询产品基本信息失败", result.message);
        }

      },
      callback_getAllValues: function (result) {
        if (result != null && result.status == 0) {
          this.$refs.loading.hideLoading();
          var fullProInfo = result.data;
          this.productInfo.core = fullProInfo.product.core;
          this.productInfo.picture_list = fullProInfo.product.picture_list;
          this.productInfo.category_stack = fullProInfo.product.category_stack;

          if (
            this.productInfo.category_stack != null &&
            this.productInfo.category_stack instanceof Array &&
            this.productInfo.category_stack.length > 0
          ) {
            this.productInfo.core.category_name = this.productInfo.category_stack[
              this.productInfo.category_stack.length - 1
            ].name;
          }
          if (this.productInfo.core.highlight != null) {
            this.productInfo.core.highlight = this.productInfo.core.highlight
              .replace(/<br\/>/g, "\n")
              .replace(/<br( )*\/>/g, "\n")
              .replace(/<br(	)*\/>/g, "\n");
          }

          var self = this;
          setTimeout(function () {
            self.$refs.ueditor.setUEContent(self.productInfo.core.description);
          }, 200);

          var parameter_groups = fullProInfo.product.parameter_groups;
          if (parameter_groups != null && parameter_groups.length > 0) {
            for (var i = 0; i < parameter_groups.length; i++) {
              var group = this.parametergroups.find(
                x => x.group_code == parameter_groups[i].group_code
              );
              if (group != null) {
                for (var j = 0; j < parameter_groups[i].parameters.length; j++) {
                  var para = group.parameters.find(
                    x => x.column_id == parameter_groups[i].parameters[j].id
                  );
                  if (para != null) {
                    //enum
                    if (para.data_type == 8 && para.enum_type == 0) {
                      var en = para.enum_list.find(
                        x =>
                        x.enum_name == parameter_groups[i].parameters[j].value
                      );
                      if (en != null) {
                        para.value = en.enum_code;
                      }
                    } else {
                      para.value = parameter_groups[i].parameters[j].value;
                    }
                  }
                }
              }
            }
          }

          //file list
          this.productInfo.attachment_list = this.productInfo.attachment_list
            .concat(result.data.product.attachment_pic_list)
            .concat(result.data.product.attachment_doc_list);
        } else {
          //failed
        }
      },
      oldValChanged: function (row, event) {
        if (event.currentTarget.checked == false) {
          this.refModalData.oldValues.splice(
            this.refModalData.oldValues.indexOf(row),
            1
          );
          this.refModalData.selectedKeys.splice(
            this.refModalData.selectedKeys.indexOf(row.key),
            1
          );
        }
      },
      selectedValChanged: function (row, event) {
        if (event.currentTarget.checked == false) {
          this.refModalData.selectedRows.splice(
            this.refModalData.selectedRows.indexOf(row),
            1
          );
          this.refModalData.selectedKeys.splice(
            this.refModalData.selectedKeys.indexOf(row.key),
            1
          );
        }
      },
      confirmRefPara: function () {
        if (this.refModalData.para != undefined) { 
          var v = [];
          v.push(this.refModalData.selectedItem);
          var display_value = {};
          display_value["value"] = this.refModalData.selectedItem.value;
          display_value["href"] = "/p/one_p.html?id=" + this.refModalData.selectedItem.key;
          this.refModalData.para.display_value = JSON.stringify([display_value]);
          this.refModalData.para.value = JSON.stringify(v);
        }
      
        $("#myModal").modal("hide");
      },
      cancelRefPara: function () {},
      selectRefPara: function (row, event) {
        if (row.value == undefined || row.value == null) {
          row.value = row.cols.find(
            x => x.id == this.refModalData.key_column_id
          ).value;
        }
        if (row.display_text == undefined || row.display_text == null) {
          row.display_text = "";

          var col = row.cols.find(
            x => x.id == this.refModalData.display_columns[0].id
          );
          if (col != null) {
            row.display_text += col.value;
          }
        }
        if (event.currentTarget.checked) {
          var key = row.cols.find(x => x.id == this.refModalData.key_column_id)
            .value;
          if (this.refModalData.selectedKeys.indexOf(key) >= 0) {
            return;
          }
          this.refModalData.selectedKeys.push(key);
          this.refModalData.selectedRows.push(row);
        } else {
          this.selectAll = false;
          var key = row.cols.find(x => x.id == this.refModalData.key_column_id)
            .value;
          var t = this.refModalData.oldValues.find(x => x.key == key);
          if (t != null) {
            this.refModalData.oldValues.splice(
              this.refModalData.oldValues.indexOf(t),
              1
            );
          }
          this.refModalData.selectedKeys.splice(
            this.refModalData.selectedKeys.indexOf(
              row.cols.find(x => x.id == this.refModalData.key_column_id).value
            ),
            1
          );
          this.refModalData.selectedRows.splice(
            this.refModalData.selectedRows.indexOf(row),
            1
          );
          this.refModalData.selectedRows = this.refModalData.selectedRows;
        }
      },
      queryRefPara: function () {
        var data = {};
        data.category_code = this.first_category_code;
        data.column_id = this.refModalData.para.column_id;
        var dic = {};
        for (var i = 0; i < this.refModalData.query_fields.length; i++) {
          dic[
            this.refModalData.query_fields[i].column_id
          ] = this.refModalData.query_fields[i].value;
        }
        data.search_tags = JSON.stringify(dic);
        $.post_json(
          appsettings.apiroot + "product/parameter/reference/retrieve",
          data,
          this.callback_queryRefPara
        );
      },
      callback_queryRefPara: function (result) {
        if (result != null && result.status == 0) {
          this.refModalData.rows = result.data.rows;
        } else {
          //failed
        }
      },
      formatParaGroups: function (groups) {
        for (var i = 0; i < groups.length; i++) {
          for (var j = 0; j < groups[i].parameters.length; j++) {
            var para = groups[i].parameters[j];
            if (groups[i].parameters[j].is_region_data == "1" || groups[i].parameters[j].data_type == 7) {
              if (groups[i].parameters[j].value != null) {
                var values = groups[i].parameters[j].value.split(",");
                groups[i].parameters[j].mininput = values[0];
                groups[i].parameters[j].maxinput = values[1];
              }
            } else if ((para.data_type == 8 || para.is_enum_data == 1) && para.enum_type == 0) {
              groups[i].parameters[j].value = groups[i].parameters[j].value.replace(/,/g, '');
            } else if (para.data_type == 3) {
              var self = this;
              var trial = 0;
              var p = para;
              var uename = 'ueditor_' + p.category_code + p.column_id;
              var interval = setInterval(function () {
                trial++;
                if (
                  self.$refs[uename] != null &&
                  self.$refs[uename].length > 0 &&
                  self.$refs[uename][0] != undefined &&
                  self.$refs[uename][0].editor != null &&
                  self.$refs[uename][0].editor != undefined &&
                  self.$refs[uename][0].editor.isReady > 0
                ) {
                  window.clearInterval(interval);
                  self.$refs[uename][0].setUEContent(p.value);
                } else {
                  if (trial > 10) {
                    window.clearInterval(interval);
                    //self.$refs.toastAlert.showToast("error", "产品参数【"+p.column_name+"】初始化失败", "请稍后再试");
                  } else {}
                }
              }, 200);
            }
          }
        }
        return groups;
      },
      callback_getParas: function (result) {
        if (result != null && result.status == 0) {
          this.parametergroups = this.formatParaGroups(result.data);
        }
      },
      saveParas: function () {
        if (this.edit_mode == "new") {
          this.$refs.confirmDlg.confirmShow({
            action_code: "cantsavepara",
            title: "请先保存产品基本信息",
            msg: "保存产品基本信息后才能保存产品参数信息.",
            only_alert: true
          });
          return;
        }
        var data = {};
        data.seqid = this.product_id;
        data.parameters = [];
        var para = {};
        data.parameters = this.paraGroupsToParas(this.parametergroups);
        $.post_json(
          appsettings.apiroot + "admin/product/paramvalues/update",
          data,
          this.callback_saveParas
        );
        this.$refs.loading.showLoading("正在保存产品参数信息...");
      },
      paraGroupsToParas: function (groups) {
        var parameters = [];
        for (var i = 0; i < groups.length; i++) {
          for (var j = 0; j < groups[i].parameters.length; j++) {
            para = {};
            para.column_id = groups[i].parameters[j].column_id;
            if (
              groups[i].parameters[j].data_type == 7 ||
              groups[i].parameters[j].is_region_data == "1"
            ) {
              para.value =
                (groups[i].parameters[j].mininput || "") +
                "," +
                (groups[i].parameters[j].maxinput || "");
            } else if (groups[i].parameters[j].data_type == 9) {
              para.value = "";
              if (
                groups[i].parameters[j].value != null &&
                groups[i].parameters[j].value != undefined &&
                groups[i].parameters[j].value.indexOf("{") > 0
              ) {
                var v = JSON.parse(groups[i].parameters[j].value);
                for (var k = 0; k < v.length; k++) {
                  if (k > 0) {
                    para.value += ",";
                  }
                  para.value += v[k].key;
                }
              } else {
                para.value = groups[i].parameters[j].value;
              }
            } else if (groups[i].parameters[j].data_type == 3) {
              var ue = this.$refs["ueditor_" + groups[i].parameters[j].category_code + groups[i].parameters[j].column_id];
              if (ue != undefined && ue != null) {
                para.value = ue[0].getUEContent();
              }
            } else {
              para.value = groups[i].parameters[j].value;
            }
            parameters.push(para);
          }
        }
        return parameters;
      },
      callback_saveParas: function (result) {
        this.$refs.loading.hideLoading();
        if (result != null && result.status == 0) {
          //success
          this.$refs.toastAlert.config = {
            type: "success",
            title: "保存产品参数信息成功",
            msg: result.message
          };
        } else {
          //failed
          this.$refs.toastAlert.config = {
            type: "error",
            title: "保存产品参数信息失败",
            msg: result.message
          };
        }
        this.$refs.toastAlert.show = true;
      },
      showModal: function () {
        $("#myModal").modal("show");
      },
      editRefParameter: function (para) {
        this.refModalData = {
          para: null,
          query_fields: null,
          headers: null,
          key_column_id: null,
          display_columns: [],
          rows: [],
          oldValues: [],
          selectedRows: [],
          selectedKeys: [],
          selectedItem: {
            key: null,
            value: null
          }
        };
        this.selectAll = false;
        if (this.refModalData != null) {
          this.refModalData.para = para;
          this.refModalData.oldValues =
            para.value instanceof Array ?
            para.value :
            para.value != null &&
            para.value != undefined &&
            para.value.indexOf("[") >= 0 ?
            JSON.parse(para.value) : [];
          for (var i = 0; i < this.refModalData.oldValues.length; i++) {
            this.refModalData.selectedKeys.push(
              this.refModalData.oldValues[i].key
            );
          }
        }
        //get para define
        var data = {};
        data.category_code = this.first_category_code;
        data.column_id = para.column_id;
        $.post_json(
          appsettings.apiroot + "product/parameter/reference/init",
          data,
          this.callback_getRefPara
        );
      },
      callback_getRefPara: function (result) {
        if (result != null && result.status == 0) {
          //success
          //弹出modal
          this.showModal();

          this.refModalData.query_fields = result.data.query_fields;
          this.refModalData.headers = result.data.headers;
          this.refModalData.key_column_id = result.data.key_column_id;
          this.refModalData.display_columns = result.data.display_columns;
        } else {
          //failed
        }
      },
      saveBasicInfo: function () {
        this.basicInfoSuc = false;
        this.productInfo.core.description = this.$refs.ueditor.getUEContent();
        this.productInfo.core.seqid = this.product_id;
        if (this.edit_mode == "new") {
          $.post_json(
            appsettings.apiroot + "home/product/create",
            this.productInfo,
            this.callback_saveBasicInfo
          );
        } else {
          $.post_json(
            appsettings.apiroot + "home/product/core/update",
            this.productInfo,
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
            this.productInfo.core.seqid = result.data;
            this.product_id = result.data;
            history.pushState(
              null,
              document.title,
              window.location.href + "&id=" + result.data
            );

            //get slave
            // var data = {
            //   seqid: result.data
            // };
            // $.post_json(
            //   appsettings.apiroot + "admin/product/slave/retrieve",
            //   data,
            //   this.callback_getSlaveParas
            // );

          }

          this.$refs.pf.showToast("success","保存产品基本信息成功","");
       
        } else {
          //failed
          this.basicInfoSuc = false;
          $(window).scrollTop(0);
          this.$refs.pf.showToast("error","保存产品基本信息失败",result.message);
        }
      },
      uploadAttachment: function () {
        $("#uploaderInput input").click();
      },
      persistAttachment: function (file, info) {
        var filedata = {};
        filedata.file_name = file.name.replace("." + file.ext, "");
        filedata.oid = file.oid;
        filedata.file_type = "." + file.ext;
        filedata.product_id = this.product_id;
        filedata.create_time = info.create_time;
        this.productInfo.attachment_list.push(filedata);

        Vue.set(
          this.productInfo.attachment_list,
          this.productInfo.attachment_list.length - 1,
          filedata
        );

        // $.post_json(
        //   appsettings.apiroot + "admin/product/attachment/create",
        //   filedadta,
        //   this.callback_persistAttachment,
        //   filedadta
        // );
        var self = this;
        setTimeout(() => {
          self.uploading_files = self.uploading_files.splice(file.index - 1, 1);
        }, 0);
      },
      InitUploader: function () {
        var self = this;
        this.uploader = WebUploader.create({
          // swf文件路径
          swf: appsettings.gyhpluginsPrefix + "webuploader/Uploader.swf",
          // 文件接收服务端。
          server: appsettings.apiroot + "admin/product/attachment/upload",
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
          self.uploader.options.formData.pid = self.product_id;
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
        });
        this.uploader.on("uploadProgress", function (file, percentage) {
          //  Vue.set(self.uploading_file,"progress", (percentage * 100 + "").substring(0, 5) + "%");
          //  self.uploading_progress =
          //    (percentage * 100 + "").substring(0, 5);

          Vue.set(self.uploading_progresses, file.index, (percentage * 100 + "").substring(0, 5));
          //  self.uploading_progresses[file.guid] = (percentage * 100 + "").substring(0, 5);
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
              var attachinfo = response.data;

              file.product_id = self.product_id;
              file.oid = attachinfo.oid;
              // self.uploading_file = null;
              //保存附件信息到数据库中
              // self.productInfo.update_pictures.push(file.oid);
              // if(self.edit_mode=='edit'){

              self.persistAttachment(file, attachinfo);
              // }
            } else if (response.status == 9999) {
              window.location.href =
                appsettings.login_url + encodeURIComponent(window.location.href);
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
      chooseLocalPicture: function () {
        //激活 webuploader
        this.$refs["uploadPic"].click();
      },
      uploadPicChanged: function () {
        this.readFile();
      },
      readFile: function () {
        var file = this.$refs["uploadPic"].files[0];
        //判断是否是图片类型
        if (!/image\/\w+/.test(file.type)) {
          alert("只能选择图片");
          return false;
        }
        var reader = new FileReader();
        var self = this;
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          self.uploadingPicBase64 = this.result;
          //do upload
          var data = {};
          data.base64 = self.uploadingPicBase64;
          data.filename = file.name;
          file.base64 = data.base64;

          $.post_json(
            appsettings.apiroot + "admin/product/picture/upload",
            data,
            self.callback_uploadPicture,
            file
          );
        };
      },
      callback_persistAttachment: function (result, filedata) {
        if (result != null && result.status == 0) {
          filedata.create_time = result.data.create_time;
          Vue.set(
            this.productInfo.attachment_list,
            this.productInfo.attachment_list.length - 1,
            filedata
          );
          //	this.productInfo.attachment_list = this.productInfo.attachment_list;
        } else {}
      },
      callback_uploadPicture: function (result, file) {
        if (result != null && result.status == 0) {
          //upload success
          var pic = {};
          pic.oid = result.data.oid;
          pic.base64 = this.uploadingPicBase64;
          pic.product_id = this.product_id;
          var tmps = file.name.split(".");
          var ext = "." + tmps[tmps.length - 1];
          pic.file_name = (file.name + "$").replace(ext + "$", "");
          pic.file_type = ext;
          pic.is_main = "";
          pic.description = "";
          //上传成功后存入持久化数据
          this.productInfo.update_pictures.push(pic);
          // $.post_json(
          //   appsettings.apiroot + "product/picture/create",
          //   pic,
          //   this.callback_persistPicture,
          //   pic
          // );
        } else {
          //failed
          this.$refs.toastAlert.config = {
            type: "error",
            title: "上传产品图片出现异常",
            msg: result.message
          };
          this.$refs.toastAlert.show = true;
        }
      },
      closeBigPicture: function () {
        this.selectedPic = null;
      },
      showBigPicture: function (pic, index, type) {
        pic.index = index;
        pic.type = type;
        this.selectedPic = pic;
      },
      statusClass: function (status) {
        switch (status) {
          case 0:
            return "label-success";
            break;
          case 1:
            return "label-warning";
            break;
          case 2:
            return "label-default";
            break;
          case 3:
            return "label-info";
            break;
          case -1:
            return "label-danger";
            break;
          default:
            return "";
        }
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

  .ibtn {
    font-size: 50px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -20px;
    display: none;
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

  .sm {
    width: 500px !important;
  }

  .no-padding .table-bordered {
    border-bottom: 1px solid #ccc !important;
  }

  .table-bordered,
  .no-padding>.table-responsive>.table-bordered {
    border-bottom: 1px solid #ccc !important;
  }

  .progress {
    height: 5px !important;
  }

  .progress .progress-bar {
    line-height: 5px !important;
  }

  .bope {
    /* margin-left: -10px!important;
  padding-left:10px!important; */
    padding: 6px 12px !important;
  }

  .nowrap th {
    white-space: nowrap !important;
  }
</style>