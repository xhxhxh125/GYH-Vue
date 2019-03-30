<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">

        <!-- 新插入的页面 -->
        <div class="col g-ml-45 g-ml-0--lg g-pb-65--md">
          <div class="g-pa-20">
            <div class="row">
              <div class="col-md-12">
                <h2 class="text-uppercase g-font-size-20 g-font-size-default--md g-color-black mb-0">编辑产品</h2>
              </div>
              <hr class="g-my-15 g-my-15--md">
              <ElProAsdiear></ElProAsdiear>

              <div
                class="col-md-9"
                id="base_form"
              >
                <div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-20--md">
                  <header>
                    <h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">产品附件</h2>
                  </header>

                  <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-30--md">



                  <form>
                    <div class="form-group">
                      <div class="align-self-center d-flex g-mb-15">
                        <!-- Cube Portfolio Blocks - Item -->
                        <!-- <div
                          class="cbp-item identity design col-md-3"
                          v-for="(pic,index) in attachments"
                          :key="index"
                        > -->
                        <div
                          class="cbp-item identity design col-md-3"
                          v-for="(f,index) in productInfo.attachment_list" :key="index"
                        >
                        
                          <div
                            class="u-block-hover g-parent"
                            v-if="(f.file_type!='.mp4' && f.file_type != '.wma')"
                          >
                            <img
                              class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
                              :src="(appsettings.product_attachment+f.oid+f.file_type)"
                            >
                            <div
                              class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-15"
                            >
                              <ul
                                class="align-items-end flex-column list-inline mt-auto ml-auto mb-0"
                              >
                                <li class="list-inline-item">
                                  <a
                                    class="cbp-lightbox u-icon-v2 u-icon-size--xs g-brd-white g-color-black g-bg-white rounded-circle"
                                    :href="(appsettings.prsoduct_attachment+f.oid+f.file_type)"
                                  >
                                    <i class="hs-admin-image u-line-icon-pro"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a
                                    class="u-icon-v2 u-icon-size--xs g-brd-white g-color-black g-bg-white rounded-circle"
                                    @click="deleteAtttachment(f,index)"
                                  >
                                    <i class="hs-admin-trash u-line-icon-pro"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="g-bg-white text-center g-pa-15">
                            <h3 class="h6 g-color-black g-font-weight-700 mb-1">{{f.file_name}}</h3>
                            <p class="g-font-size-13 mb-0">{{f.create_time}}</p>
                          </div>
                        </div>
                        <!-- End Cube Portfolio Blocks - Item -->
                      </div>
                      <!-- <input class="js-file-attachment" type="file" name="fileAttachment[]"> -->
                      <div
                        @click="uploadAttachment()"
                        class="g-parent g-pos-rel g-height-230 g-bg-gray-light-v8--hover g-brd-around g-brd-style-dashed g-brd-gray-light-v7 g-brd-lightblue-v3--hover g-rounded-4 g-transition-0_2 g-transition--ease-in g-pa-15 g-pa-30--md"
                      >
                        <div
                          class="d-md-flex align-items-center g-absolute-centered--md w-100 g-width-auto--md"
                        >
                          <div>
                            <div
                              class="g-pos-rel g-width-80 g-width-100--lg g-height-80 g-height-100--lg g-bg-gray-light-v8 g-bg-white--parent-hover rounded-circle g-mb-20 g-mb-0--md g-transition-0_2 g-transition--ease-in mx-auto mx-0--md"
                            >
                              <i
                                class="hs-admin-cloud-up g-absolute-centered g-font-size-30 g-font-size-36--lg g-color-lightblue-v3"
                              ></i>
                            </div>
                          </div>
                          <div class="text-center text-md-left g-ml-20--md">
                            <h3
                              class="g-font-weight-400 g-font-size-16 g-color-black g-mb-10"
                            >上传图片附件</h3>
                            <p class="g-font-weight-300 g-color-gray-dark-v6 mb-0">单击“上传”按钮并从计算机中浏览。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>











                  

                </div>
              </div>

              <div
                id="uploaderInput"
                ref="uploaderInput1"
                v-show="false"
              ></div>
              <input
                id="uploaderPicture"
                type="file"
                ref="uploadPic"
                v-show="false"
                @change="uploadPicChanged()"
              />

            </div>
          </div>
        </div>

        <div
          id="main"
          role="main"
        >
          <!-- RIBBON -->
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
              <li><a :href="appsettings.portal_root">首页</a></li>
              <li>个人中心</li>
              <li>产品</li>
              <li>{{edit_mode=="edit"?'编辑':'新增'}}产品</li>
            </ol>
            <!-- end breadcrumb -->
          </div>
          <!-- END RIBBON -->

          <!-- MAIN CONTENT -->
          <div id="content">

            <section
              id="widget-grid"
              class=""
            >
              <ElBlockAlert ref="alert"></ElBlockAlert>
              <div class="row">
                <article class="col-sm-12 col-md-12">
                  <div
                    class="jarviswidget  jarviswidget-sortable"
                    data-widget-colorbutton="false"
                    data-widget-editbutton="false"
                    data-widget-togglebutton="false"
                    data-widget-deletebutton="false"
                    data-widget-fullscreenbutton="false"
                    data-widget-custombutton="false"
                    data-widget-collapsed="false"
                    data-widget-sortable="false"
                  >
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
                        <div
                          id="base_form"
                          class="smart-form"
                        >

                          <fieldset>
                            <div class="row">
                              <section class="col col-8">
                                <ElProCategory
                                  :required="true"
                                  :category="category_code"
                                  @categoryChanged="categoryChanged"
                                ></ElProCategory>
                              </section>
                              <section class="col col-4">
                                <label class="label">&nbsp;</label>
                                <label class="input">
                                  <a
                                    href="javascript:void(0);"
                                    @click="createNewProduct()"
                                    class="bope col-sm-6 btn btn-primary pull-left"
                                  >
                                    <i class="fa fa-plus"></i> 新建产品</a>
                                  <a
                                    v-if="edit_mode=='edit' && functionlist.indexOf('copy@information_product_edit')>=0"
                                    href="javascript:void(0);"
                                    @click="copyProduct()"
                                    class="bope col-sm-6 btn bg-color-orange txt-color-white pull-left"
                                  >
                                    <i class="fa fa-files-o"></i> 复制本产品</a>
                                </label>
                              </section>
                            </div>
                          </fieldset>

                          <fieldset>
                            <div class="row">
                              <section class="col col-sm-12">
                                <label class="label">*产品名称</label>
                                <label class="input">
                                  <input
                                    type="text"
                                    id="name"
                                    name="text"
                                    v-model="productInfo.core.product_name"
                                  >
                                </label>
                              </section>
                            </div>
                          </fieldset>

                          <fieldset>
                            <div class="row">
                              <section class="col col-sm-12">
                                <label class="label">产品标签</label>
                                <label class="input">
                                  <input
                                    type="text"
                                    name="text"
                                    v-model="productInfo.core.tags"
                                    placeholder="多个标签之间以逗号隔开"
                                  >
                                </label>
                              </section>
                            </div>
                          </fieldset>

                          <fieldset>
                            <div class="row">
                              <section class="col col-sm-12">
                                <label class="label">产品图片</label>
                                <div class="textarea">
                                  <div class="superbox col-sm-12">
                                    <div
                                      class="superbox-list imgbox"
                                      :class="selectedPic==pic?'active':''"
                                      v-for="(pic,index) in productInfo.picture_list"
                                      :key="index"
                                    >
                                      <img
                                        :src="appsettings.proimg+pic.oid+pic.file_type"
                                        :data-img="appsettings.proimg+pic.oid+pic.file_type"
                                        class="superbox-img"
                                      >
                                      <i
                                        class="fa fa-times ibtn"
                                        style="color: red;"
                                        @click="deleteProductPic(pic,index,'list')"
                                      ></i>
                                    </div>

                                    <div
                                      class="superbox-list imgbox"
                                      v-for="(pic,index) in productInfo.update_pictures"
                                      :key="index"
                                      v-show="productInfo.update_pictures!=null"
                                    >
                                      <img
                                        :src="pic.base64"
                                        :data-img="pic.base64"
                                        class="superbox-img"
                                      >
                                      <i
                                        class="fa fa-times ibtn"
                                        style="color: red;"
                                        @click="deleteProductPic(pic,index,'update')"
                                      ></i>
                                    </div>

                                    <div
                                      class="superbox-list"
                                      style="text-align:center;"
                                      @click="chooseLocalPicture()"
                                    >
                                      <!-- <img :src="appsettings.gyhImgPrefix+'add.png'" class="superbox-img" style="width: auto;" title="上传新的产品图片"> -->
                                      <i
                                        class="fa  fa-plus-circle"
                                        style="color: #2196F3;font-size: 50px;cursor:pointer;"
                                        title="上传新的产品图片"
                                      ></i>
                                    </div>
                                    <!-- <div v-if="selectedPic!=null" class="superbox-show" :style="selectedPic!=null?' display: block;':' display: none;'">
                                      <img :src="selectedPic.base64!=undefined && selectedPic.base64!=null?selectedPic.base64:(appsettings.proimg+selectedPic.oid+selectedPic.file_type)" class="superbox-current-img">
                                      <div id="imgInfoBox" class="superbox-imageinfo inline-block" :src="selectedPic.base64!=undefined && selectedPic.base64!=null?selectedPic.base64:(appsettings.proimg+selectedPic.oid+selectedPic.file_type)"> 
                                        <h1></h1><span><p><em>图片名称:{{selectedPic.file_name}}</em></p>
                                        <p class="superbox-img-description"></p>
                                        <p><a href="javascript:void(0);" class="btn btn-danger btn-sm" title="删除该产品图片" @click="deleteProductPic(selectedPic)">
                                          <i class="glyphicon glyphicon-trash"></i></a></p></span> </div>
                                          <div class="superbox-close txt-color-white" @click="closeBigPicture()" title="关闭"><i class="fa fa-times fa-lg"></i>
                                          </div>
                                        </div>

                                    <div class="superbox-float"></div>
                                    <div class="superbox-show" style="height:300px; display: none"></div> -->
                                  </div>

                                </div>
                              </section>
                            </div>
                          </fieldset>

                          <fieldset>
                            <div class="row">
                              <section class="col col-3">
                                <label class="label">产品系列</label>
                                <label class="input">
                                  <input
                                    type="text"
                                    v-model="productInfo.core.series"
                                  >
                                </label>
                              </section>

                              <section class="col col-3">
                                <label class="label">产品工艺</label>
                                <label class="input">
                                  <input
                                    type="text"
                                    v-model="productInfo.core.process"
                                  >
                                </label>
                              </section>

                              <section class="col col-3">
                                <label class="label">产品来源</label>
                                <div class="inline-group">
                                  <label class="radio">
                                    <input
                                      type="radio"
                                      name="psource"
                                      value="0"
                                      :checked="productInfo.core.product_source==0"
                                      @change="changeRource(0,$event)"
                                    >
                                    <i></i>原厂</label>

                                  <label class="radio">
                                    <input
                                      type="radio"
                                      name="psource"
                                      value="2"
                                      :checked="productInfo.core.product_source==2"
                                      @change="changeRource(2,$event)"
                                    >
                                    <i></i>代理</label>

                                  <label class="radio">
                                    <input
                                      type="radio"
                                      name="psource"
                                      value="1"
                                      :checked="productInfo.core.product_source==1"
                                      @change="changeRource(1,$event)"
                                    >
                                    <i></i>二手</label>
                                </div>
                              </section>
                            </div>

                          </fieldset>

                          <fieldset>
                            <div class="row">
                              <section class="col col-sm-12">
                                <label class="label">适用行业</label>
                                <div class="smart-form">
                                  <div class="inline-group">
                                    <label
                                      class="checkbox col-sm-2"
                                      v-for="(prof,index) in professions"
                                      :key="index"
                                    >
                                      <input
                                        type="checkbox"
                                        :value="prof.enum_code"
                                        :checked="checkProfession(prof)"
                                        @change="profChanged(prof.enum_code,$event)"
                                      >
                                      <i></i>{{prof.enum_name}}</label>

                                  </div>
                                </div>
                              </section>
                            </div>
                          </fieldset>
                          <fieldset>
                            <div class="row">
                              <section class="col col-6">
                                <label class="label">产品价格</label>
                                <label class="input col col-4 nopaddingl rl">
                                  <input
                                    type="text"
                                    placeholder="最低价"
                                    v-model="productInfo.core.min_price"
                                  >
                                </label>
                                <label class="nopaddingl col to">—</label>
                                <label class="input col col-4 nopaddingl rr">
                                  <input
                                    type="text"
                                    placeholder="最高价"
                                    v-model="productInfo.core.max_price"
                                  >
                                </label>
                                <label class="input col col-4 rr">
                                  <input
                                    type="text"
                                    placeholder="单位"
                                    v-model="productInfo.core.price_unit"
                                  >
                                </label>
                              </section>
                            </div>
                          </fieldset>
                          <fieldset>
                            <div class="row">
                              <section class="col col-sm-12">
                                <label class="label">产品亮点</label>
                                <div class="textarea">
                                  <textarea
                                    rows="10"
                                    width="100%"
                                    v-model="productInfo.core.highlight"
                                  ></textarea>
                                </div>
                              </section>
                            </div>
                          </fieldset>

                          <fieldset>
                            <div class="row">
                              <section class="col col-sm-12">
                                <label class="label">产品描述</label>
                                <div class="textarea">
                                  <ElUEditor
                                    id="ueditor"
                                    ref="ueditor"
                                    :code="'2'"
                                  ></ElUEditor>
                                </div>
                              </section>
                            </div>
                          </fieldset>

                          <footer>
                            <a
                              @click="saveBasicInfo()"
                              href="javascript:void(0);"
                              :class="need_save_basic?'btn-danger':'btn-primary'"
                              class="btn pull-left"
                            >
                              <i class="fa fa-save"></i> 保存基本信息</a>
                          </footer>

                        </div>
                      </div>
                      <!-- end widget content -->
                    </div>
                    <!-- end widget div -->
                  </div>

                  <div
                    class="jarviswidget  jarviswidget-sortable"
                    data-widget-colorbutton="false"
                    data-widget-editbutton="false"
                    data-widget-togglebutton="false"
                    data-widget-deletebutton="false"
                    data-widget-fullscreenbutton="false"
                    data-widget-custombutton="false"
                    data-widget-collapsed="false"
                    data-widget-sortable="false"
                  >
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
                        <div
                          id="para_form"
                          class="smart-form"
                        >
                          <fieldset
                            v-for="group in parametergroups"
                            :key="group.group_code"
                          >
                            <div class="row">
                              <section class="col col-3">
                                <label
                                  class="label"
                                  style="font-size:15px"
                                >{{group.group_name}}</label>
                              </section>
                            </div>

                            <div class="row">
                              <div
                                v-for="para in group.parameters"
                                :key="para.column_id"
                              >

                                <section
                                  v-if="para.data_type==0 && para.is_enum_data!=1"
                                  class="col col-3"
                                >
                                  <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                                  <label class="input">
                                    <input
                                      type="text"
                                      name="text"
                                      v-model="para.value"
                                    >
                                  </label>
                                </section>

                                <section
                                  v-if="para.data_type==1 && para.is_region_data!=1&& para.is_enum_data!=1"
                                  class="col col-3"
                                >
                                  <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                                  <label class="input">
                                    <i
                                      class="icon-append fa unit"
                                      v-if="para.unit!=null && para.unit!=undefined && para.unit.length>0"
                                    >{{para.unit}}</i>
                                    <input
                                      type="text"
                                      name="num"
                                      v-model="para.value"
                                    >
                                  </label>
                                </section>

                                <section
                                  v-if="para.data_type==2"
                                  class="col col-sm-12"
                                >
                                  <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                                  <div class="textarea">
                                    <textarea
                                      rows="5"
                                      width="100%"
                                      v-model="para.value"
                                    ></textarea>
                                  </div>
                                </section>

                                <section
                                  v-if="para.data_type==7 || para.is_region_data==1"
                                  class="col col-6"
                                >
                                  <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}({{para.unit}})</label>
                                  <label class="input col col-6 nopaddingl rl">

                                    <input
                                      type="text"
                                      v-model="para.mininput"
                                    >
                                  </label>
                                  <label class="nopaddingl col to">—</label>
                                  <label class="input col col-6 nopaddingl rr">
                                    <!-- <i class="icon-append fa unit" v-if="para.unit!=null && para.unit!=undefined && para.unit.length>0">{{para.unit}}</i> -->
                                    <input
                                      type="text"
                                      v-model="para.maxinput"
                                    >
                                  </label>

                                  <!-- <ElRegionInput :min="para.mininput" :max="para.maxinput"  @change="changeRegionPara($event,para)" ></ElRegionInput> -->
                                </section>

                                <section
                                  v-if="(para.data_type==8||para.is_enum_data==1) && para.enum_type==0"
                                  class="col col-3"
                                >
                                  <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                                  <label class="select">
                                    <select
                                      name="country"
                                      v-model="para.value"
                                    >
                                      <option value=""></option>
                                      <option
                                        :selected="para.value==ch.enum_code"
                                        :value="ch.enum_code"
                                        v-for="ch in para.enum_list"
                                        :key="ch.enum_code"
                                      >{{ch.enum_name}}</option>
                                    </select>
                                    <i></i>
                                  </label>
                                </section>

                                <fieldset
                                  v-if="(para.data_type==8||para.is_enum_data==1) && para.enum_type==1"
                                  class="border col col-sm-12"
                                >
                                  <section>
                                    <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                                    <div class="inline-group">
                                      <label
                                        class="checkbox"
                                        v-for="ch in para.enum_list"
                                        :key="ch.enum_code"
                                      >
                                        <input
                                          type="checkbox"
                                          :checked="checkEnumValue(ch.enum_code,para)"
                                          name="checkbox-inline"
                                          @change="enumParaChanged(ch.enum_code,para,$event)"
                                        >
                                        <i></i>{{ch.enum_name}}</label>
                                    </div>
                                  </section>
                                </fieldset>

                                <section
                                  v-if="para.data_type==9"
                                  class="col col-3"
                                >
                                  <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                                  <label class="input">
                                    <section v-if="para.value!=null && para.value!=undefined && para.value.indexOf('{')>=0">
                                      <a
                                        :href="v.href"
                                        target="_blank"
                                        class="btn pull-left"
                                        v-for="(v,ridx) in JSON.parse(para.value)"
                                        :key="ridx"
                                      >{{ridx>0?",":""+v.value}}</a>
                                    </section>
                                    <a
                                      href="javascript:void(0);"
                                      class="btn pull-left btn-primary"
                                      @click="editRefParameter(para)"
                                    >
                                      <i class="fa fa-edit"></i>编辑</a>
                                  </label>
                                </section>

                              </div>
                            </div>
                          </fieldset>

                          <footer>
                            <a
                              href="javascript:void(0);"
                              :class="need_save_para?'btn-danger':'btn-primary'"
                              class="btn pull-left"
                              @click="saveParas()"
                            >
                              <i class="fa fa-save"></i> 保存参数信息</a>
                          </footer>

                        </div>
                      </div>
                      <!-- end widget content -->
                    </div>
                    <!-- end widget div -->
                  </div>

                  <div
                    class="jarviswidget  jarviswidget-sortable"
                    data-widget-colorbutton="false"
                    data-widget-editbutton="false"
                    data-widget-togglebutton="false"
                    data-widget-deletebutton="false"
                    data-widget-fullscreenbutton="false"
                    data-widget-custombutton="false"
                    data-widget-collapsed="false"
                    data-widget-sortable="false"
                  >
                    <header>
                      <span class="widget-icon">
                        <i class="fa fa-table"></i>
                      </span>
                      <h2>上传产品附件</h2>
                    </header>

                    <!-- widget div-->
                    <div>
                      <div class="btn-upload">
                        <a
                          href="javascript:void(0);"
                          @click="uploadAttachment()"
                          class="btn btn-primary pull-left"
                        >
                          <i class="fa fa-upload"></i>上传附件</a>
                      </div>

                      <!-- widget edit box -->
                      <div class="jarviswidget-editbox">
                        <!-- This area used as dropdown edit box -->

                      </div>
                      <!-- end widget edit box -->

                      <!-- widget content -->

                      <!-- <div class="widget-body no-padding">
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
                                <td>{{productInfo.attachment_list.length+index+1-uploading_ok_count}}</td>
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
                      </div> -->

                      <!-- end widget content -->
                    </div>
                    <!-- end widget div -->
                  </div>

                  <div
                    class="jarviswidget jarviswidget-color-darken"
                    data-widget-colorbutton="false"
                    data-widget-editbutton="false"
                    data-widget-custombutton="false"
                  >

                    <div>
                      <div class="jarviswidget-editbox">
                      </div>

                      <div
                        class="widget-body no-padding"
                        style="min-height:0;"
                      >
                        <form
                          id="query-form"
                          class="smart-form"
                        >
                          <footer>
                            <!-- <a target="_blank" :href="appsettings.portal_root+'product/oneproduct.aspx?id='+product_oid" class="btn btn-primary pull-left"
                              :disabled="product_oid==null">
                              <i class="fa fa-eye"></i> 预览产品</a> -->

                            <!-- <a href="javascript:void(0);" class="btn btn-warning pull-left" @click="publishProduct()" :disabled="product_oid==null">
                                <i class="fa fa-check"></i> 发布产品</a> -->
                            <button
                              class="btn btn-warning pull-left"
                              @click="editProjects()"
                              :disabled="product_oid==null"
                            >
                              <i class="fa fa-envira"></i> 维护产品案例</button>

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
      </div>
    </ElPageFrame>

    <ElLoading ref="loading"></ElLoading>

    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      v-if="refModalData!=null && refModalData.para!=null"
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
              {{refModalData.para.column_name}}
            </h4>
          </div>
          <div class="modal-body no-padding">

            <form
              id="ref-form"
              class="smart-form"
            >
              <fieldset>
                <div class="row">
                  <section
                    class="col"
                    v-for="(row,index) in refModalData.oldValues"
                    :key="index"
                    v-if="refModalData.selectedKeys.indexOf(row.key)>=0"
                  >
                    <label class="checkbox">
                      <input
                        type="checkbox"
                        checked
                        @change="oldValChanged(row,$event)"
                      >
                      <i></i>{{row.value}}
                    </label>
                  </section>

                  <section
                    class="col"
                    v-for="(row,index) in refModalData.selectedRows"
                    :key="index"
                  >
                    <label class="checkbox">
                      <input
                        type="checkbox"
                        checked
                        @change="selectedValChanged(row,$event)"
                      >
                      <i></i>{{row.display_text}}
                    </label>
                  </section>

                </div>
              </fieldset>

              <fieldset v-if="refModalData!=undefined && refModalData!=null">
                <div class="row">
                  <section class="col col-sm-12">
                    <label class="input">
                      查询条件
                    </label>
                  </section>

                  <div
                    v-for="(cond,index) in refModalData.query_fields"
                    :key="index"
                  >

                    <section
                      v-if="(cond.data_type==0 && cond.is_enum_data!=1) || cond.data_type==2"
                      class="col col-3"
                    >
                      <label class="input">
                        <input
                          type="text"
                          name="text"
                          :placeholder="cond.column_name"
                          v-model="cond.value"
                        >
                      </label>
                    </section>

                    <section
                      v-if="(cond.data_type==1 && cond.is_enum_data!=1)||cond.data_type==7||(cond.is_region_data==1) "
                      class="col col-6"
                    >
                      <label class="label">{{cond.column_name}}</label>
                      <label class="input col col-6 nopaddingl">
                        <input
                          type="text"
                          :placeholder="cond.column_name"
                          @change="changeMin(cond.column_id,$event)"
                        >
                      </label>
                      <label class="nopaddingl col to">-</label>
                      <label class="input col col-6 nopaddingl">
                        <input
                          type="text"
                          :placeholder="cond.column_name"
                          @change="changeMax(cond.column_id,$event)"
                        >
                      </label>
                    </section>

                    <section
                      v-if="(cond.data_type==8||cond.is_enum_data==1) && cond.enum_type==0"
                      class="col col-3"
                    >
                      <label class="label">{{cond.column_name}}</label>
                      <label class="select">
                        <select name="country">
                          <option
                            value="0"
                            selected=""
                            disabled=""
                          >{{cond.column_name}}</option>
                          <option
                            v-for="ch in cond.choices"
                            :value="ch.code"
                            :key="ch.code"
                          >{{ch.name}}</option>
                        </select>
                        <i></i>
                      </label>
                    </section>
                  </div>
                </div>
              </fieldset>
              <footer>
                <a
                  class="btn btn-primary pull-left"
                  href="javascript:void(0);"
                  @click="queryRefPara()"
                >
                  <i class="fa fa-search"></i> 查询</a>
              </footer>
              <fieldset>
                <div>
                  <div>
                    <div class="jarviswidget-editbox">
                    </div>
                    <div
                      class="widget-body no-padding"
                      v-if="refModalData!=null"
                    >
                      <table
                        class="table table-striped table-bordered table-hover"
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th style="width: 60px;">
                              <label class="checkbox">
                                <input
                                  type="checkbox"
                                  v-model="selectAll"
                                >
                                <i></i>全选
                              </label>
                            </th>
                            <th>ID</th>
                            <th
                              v-for="head in refModalData.headers"
                              :key="head.id"
                              v-if="head.name!='' && head.name!=null"
                            >{{head.name}}</th>
                          </tr>
                        </thead>
                        <tbody v-if="refModalData!=null">
                          <tr
                            class="row-show"
                            v-for="(row,index) in refModalData.rows"
                            :key="index"
                          >
                            <td>
                              <label class="checkbox">
                                <input
                                  type="checkbox"
                                  :checked="refModalData.selectedRows.indexOf(row)>=0 || refModalData.selectedKeys.indexOf(row.cols.find(x=>x.id=refModalData.key_column_id).value)>=0"
                                  @change="selectRefPara(row,$event)"
                                >
                                <i></i>
                              </label>
                            </td>
                            <td>{{index+1}}</td>
                            <td
                              v-for="(para,pidx) in row.cols"
                              :key="pidx"
                              v-if="para.name!='' && para.name!=null"
                            >
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
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="confirmRefPara()"
                >
                  确定
                </button>
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                  @click="cancelRefPara()"
                >
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
    <ElToastAlert ref="toastAlert"></ElToastAlert>
    <ElConfirmDialog
      @confirm="doConfirm()"
      ref="confirmDlg"
    ></ElConfirmDialog>
  </div>
</template>

<script>
import "common/httputils"; //引用js
import htmlHelper from "common/htmlutils";
import ElPageFrame from "components/el-PageFrame/el-PageFrame";
import ElProAsdiear from "components/el-ProAsideBar/el-ProAsideBar";

import ElPager from "components/el-Pager/el-Pager";
import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
import ElLoading from "components/el-Loading/el-Loading";
import ElConfirmDialog from "components/el-ConfirmDialog/el-ConfirmDialog";
import ElUEditor from "components/el-UEditor/el-UEditor";
import Vue from "vue";
import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";
import ElProCategory from "components/el-ProCategory/el-ProCategory";
import ElRegionInput from "components/el-RegionInput/el-RegionInput";
import ElCompanyIntellisense from "components/el-CompanyIntellisense/el-CompanyIntellisense";

export default {
  name: "app",
  data: function() {
    return {
      uploader: null,
      uploading_progresses: [],
      uploading_files: [],
      uploading_ok_count: 0,
      selectedPic: null,
      init_cat: null,
      categorychanged: false,
      category_code: null,
      product_oid: null,
      uploadingPicBase64: null,
      basicInfoSuc: false, //基本信息保存成功
      paraInfoSuc: false, //参数信息保存成功
      selectAll: false,

      refModalData: {
        para: null,
        query_fields: null,
        headers: null,
        key_column_id: null,
        display_columns: [],
        rows: [],
        oldValues: [],
        selectedRows: [],
        selectedKeys: []
      },
      professions: [],
      companylist: [],
      productInfo: {
        core: {
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
          tags: null
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
      functionlist: [],
      action_result: "",

      need_save_basic: false,
      need_save_para: false
    };
  },
  watch: {
    selectAll: function(newVal, oldVal) {
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
    category_code: function(newVal, oldVal) {
      //get parameters structure
      if (this.edit_mode == "new") {
        this.categorychanged = true;
        var data = {};
        data.category_code = this.category_code;
        $.post_json(
          appsettings.apiroot + "product/category/paramvalues/retrieve",
          data,
          this.callback_getParas
        );
      } else if (this.categorychanged === true) {
        var data = {};
        data.category_code = this.category_code;
        data.product_oid = this.product_oid;
        $.post_json(
          appsettings.apiroot + "home/product/paramvalues/retrieve",
          data,
          this.callback_getParas
        );
      }
    }
  },
  computed: {
    edit_mode: function() {
      if (
        this.product_oid != "" &&
        this.product_oid != null &&
        this.product_oid != undefined
      ) {
        return "edit";
      } else if (
        this.copy_source_oid != null &&
        this.copy_source_oid != undefined &&
        this.copy_source_oid.length > 30
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
    ElCompanyIntellisense,
    ElProAsdiear
  },
  created: function() {
    //获取产品类别
    this.category_code = ($.getUrlParam("c") || "").replace("undefined", "");
    this.productInfo.core.company_name = $.getUrlParam("cn");
    this.productInfo.core.company_oid = $.getUrlParam("com");
    this.product_oid = $.getUrlParam("id");
    this.copy_source_oid = $.getUrlParam("spid");
    this.action_result = $.getUrlParam("a");

    this.init_cat = this.category_code;
    this.productInfo.core.category = this.category_code;
    this.productInfo.core.oid = this.product_oid;

    if (this.edit_mode == "new") {
      this.getParaDef();
    } else if (this.edit_mode == "edit") {
      this.getProductInfo();
    } else if (this.edit_mode == "copy") {
      //do copy
      var copydata = {};
      copydata.product_oid = this.copy_source_oid;
      $.post_json(
        appsettings.apiroot + "product/copy",
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
  },
  mounted: function() {
    var self = this;
    if (this.edit_mode == "edit") {
      this.$refs.loading.showLoading("正在加载数据...");
    } else if (this.edit_mode == "copy") {
      this.$refs.loading.showLoading("正在复制产品信息....");
    }

    // jQuery(".superbox-img").hover(function(){
    //   jQuery(this).next().show();
    // });
    jQuery(document).on("mouseover", ".imgbox", function() {
      jQuery(this)
        .find("i")
        .show();
      event.preventDefault();
      event.stopPropagation();
    });
    jQuery(document).on("mouseout", ".imgbox", function() {
      jQuery(this)
        .find("i")
        .hide();
      event.preventDefault();
      event.stopPropagation();
    });

    jQuery(document).on("change", "#base_form", function(event) {
      self.need_save_basic = true;
    });
    jQuery(document).on("change", "#para_form", function(event) {
      self.need_save_para = true;
    });
    // jQuery(document).on("mouseover",".ibtn",function(event){
    //   jQuery(this).next().show();
    //   event.preventDefault();
    //   event.stopPropagation();
    // });
    // jQuery(document).on("mouseout",".ibtn",function(){
    //   jQuery(this).next().hide();
    //   event.preventDefault();
    //   event.stopPropagation();
    // });

    this.InitUploader();
    setTimeout(function() {
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
          "#name": {
            required: "Please enter your last nameaaaaa"
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
        onSelect: function(selectedDate) {
          //$('#startdate').datepicker('option', 'maxDate', selectedDate);
        }
      });
    }, 0);
  },

  methods: {
    getIf (){
      console.log(this.productInfo)
    },
    getParaDef: function() {
      var data = {};
      data.category_code = this.category_code;
      $.post_json(
        appsettings.apiroot + "product/category/paramvalues/retrieve",
        data,
        this.callback_getParas
      );
    },
    functionlist_callback: function(res) {
      if (res.status == 0) {
        var funlist = res.data.functions;
        this.functionlist.splice(0, this.functionlist.length);
        for (var i = 0; i < funlist.length; i++) {
          this.functionlist.push(funlist[i].function_code);
        }
      }
    },
    editProjects: function() {
      var pro = this.productInfo.core;
      if (pro != null) {
        window.open(
          "/prj/query.html?t=p&c=" +
            pro.category +
            "&id=" +
            pro.oid +
            "&com=" +
            pro.company_oid
        );
      }
    },
    companyChanged: function(company) {
      this.productInfo.core.company_oid = company.id;
      this.productInfo.core.company_name = company.company_name;
    },
    checkEnumValue: function(code, para) {
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
    enumParaChanged: function(code, para, event) {
      if (event.currentTarget.checked) {
        para.value += "," + code;
      } else {
        var codes = para.value.split(",");
        for (var i = 0; i < codes.length; i++) {
          if (code == codes[i]) {
            codes.splice(i, 1);
            break;
          }
        }
        para.value = codes.join(",");
      }
    },
    deleteProductPic: function(pic, index, type) {
      pic.type = type;
      var pic_index = index;
      var self = this;
      //是否确定要删除图片
      // this.$refs.confirmDlg.confirmShow({
      //   only_alert: false,
      //   action_code: "deleteP",
      //   title: '删除产品图片【点击"保存基本信息"按钮后才生效】',
      //   msg: "确定要删除产品图片【" + pic.file_name + pic.file_type + "】吗？",
      //   success: function(res) {
      //     if (res.confirm == true) {
      //       if (pic.type == "list") {
      //         //原图片列表
      //         self.productInfo.delete_pictures.push(pic.oid);
      //         self.productInfo.picture_list.splice(pic_index, 1);
      //         self.productInfo.picture_list = self.productInfo.picture_list;
      //       } else if (pic.type == "update") {
      //         //新加的图片
      //         self.productInfo.update_pictures.splice(pic_index, 1);
      //         self.productInfo.update_pictures = self.productInfo.update_pictures;
      //       }
      //       self.selectedPic = null;
      //     }
      //   }
      // });

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
    },
    changeRegionPara: function(value, para) {
      // console.log(value);
      // console.log(para);
    },
    createNewProduct: function() {
      window.location.href = "/p/edit.html?c=" + this.category_code;
    },
    copyProduct: function() {
      if (this.edit_mode == "new") {
        this.$refs.pf.showToast("error", "新建产品时，无法复制产品!", "");
        return;
      }
      var newurl = window.location.href
        .replace("&id=" + this.product_oid, "&spid=" + this.product_oid)
        .replace("?id=" + this.product_oid, "?spid=" + this.product_oid);
      window.location.href = newurl;
    },
    getProductInfo: function() {
      var data = {};
      data.product_oid = this.product_oid;
      data.oid = this.product_oid;
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
    callback_copyProduct: function(result) {
      if (result != null && result.status == 0) {
        //success
        this.$refs.loading.showLoading("产品复制成功，正在更新数据....");
        this.product_oid = result.data;
        //change url
        var newurl =
          window.location.href.replace(
            "spid=" + this.copy_source_oid,
            "id=" + this.product_oid
          ) + "&a=c";
        this.action_result = "c";
        this.copy_source_oid = null;
        window.history.pushState(null, document.title, newurl);
        //do query
        this.getProductInfo();
      } else {
        this.$refs.pf.showToast("error", "复制产品出现异常", "");
      }
    },
    checkProfession: function(prof) {
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
    categoryChanged: function(cat) {
      var newurl = window.location.href.replace(
        "c=" + this.category_code,
        "c=" + cat
      );
      this.category_code = cat;
      history.pushState(null, document.title, newurl);
    },
    callback_getPictures: function(result) {
      if (result != null && result.status == 0) {
        this.productInfo.picture_list = result.data;
      } else {
        this.$refs.pf.showToast("error", "查询产品图片列表出现异常", "");
      }
    },
    callback_getAttachments: function(result) {
      if (result != null && result.status == 0) {
        this.productInfo.attachment_list = result.data;
      } else {
        this.$refs.pf.showToast("error", "查询产品附件列表出现异常", "");
      }
    },
    callback_getAllCompanies: function(result) {
      if (result != null && result.status == 0) {
        this.companylist = result.data;
        for (var i = 0; i < this.companylist.length; i++) {
          this.companylist[i]["name"] = this.companylist[i].company_name;
        }
        var self = this;
        jQuery(".typeahead_1").typeahead({
          source: self.companylist,
          updater: function(item) {
            self.productInfo.core.company_oid = item.oid;
            self.productInfo.core.company_name = item.company_name;
          }
        });
      } else {
        this.$refs.pf.showToast(
          "error",
          "页面初始化失败",
          "获取公司信息失败：" + result.message
        );
      }
    },
    callback_getProfesions: function(result) {
      if (result != null && result.status == 0) {
        this.professions = result.data;
      } else {
        this.$refs.pf.showToast(
          "error",
          "页面初始化失败",
          "获取适用行业信息失败：" + result.message
        );
      }
    },
    profChanged: function(code, event) {
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
    publishProduct: function() {
      var data = {};
      data.product_oid = this.product_oid;
      $.post_json(
        appsettings.apiroot + "product/pass",
        data,
        this.callback_publishProduct
      );
      this.$refs.loading.showLoading("正在发布产品...");
    },
    callback_publishProduct: function(result) {
      this.$refs.loading.hideLoading();
      if (result != null && result.status == 0) {
        this.$refs.confirmDlg.confirmShow({
          title: "发布成功",
          msg:
            "您已成功发布产品【" + this.productInfo.core.product_name + "】.",
          only_alert: true
        });
      } else {
        //failed
        this.$refs.confirmDlg.confirmShow({
          title: "发布失败！",
          msg:
            "发布产品【" +
            this.productInfo.core.product_name +
            "】失败! 原因:" +
            result.message,
          only_alert: true
        });
      }
    },
    doConfirm: function() {
      switch (this.$refs.confirmDlg.options.action_code) {
        case "deleteA":
          break;
      }
    },
    deleteAtttachment: function(attach, attach_index) {
      var self = this;
      this.$refs.confirmDlg.confirmShow({
        only_alert: false,
        action_code: "deleteA",
        title: "删除附件",
        msg:
          "确定要删除附件【" + attach.file_name + attach.file_type + "】吗？",
        success: function(res) {
          if (res.confirm == true) {
            //do delete
            $.post_json(
              appsettings.apiroot + "home/product/attachment/delete",
              attach,
              self.callback_deleteAtttachment,
              attach_index
            );
          }
        }
      });
      // $.post_json(
      //   appsettings.apiroot + "home/product/attachment/delete",
      //   attach,
      //   self.callback_deleteAtttachment,
      //   attach_index
      // );
    },
    callback_deleteAtttachment: function(result, attach_index) {
      if (result != null && result.status == 0) {
        this.productInfo.attachment_list.splice(attach_index, 1);
      } else {
        //删除失败
        this.$refs.pf.showToast("error", "删除产品附件失败", result.message);
      }
    },
    changeRource: function(code, event) {
      if (event.currentTarget.checked) {
        this.productInfo.core.product_source = code;
      }
    },
    callback_getCoreInfo: function(result) {
      this.$refs.loading.hideLoading();
      this.initing = false;
      if (result != null && result.status == 0) {
        var title = "查询产品基本信息成功";
        if (this.action_result == "c") {
          title = "复制产品信息成功！";
          var newurl = window.location.href
            .replace("?a=c", "")
            .replace("&a=c", "");
          history.pushState(null, document.title, newurl);
        }

        this.$refs.pf.showToast("success", title, result.message);
        this.productInfo.core = result.data;
        this.category_code = this.productInfo.core.category;
        var self = this;
        var trial = 0;
        var interval = setInterval(function() {
          trial++;
          if (
            self.$refs.ueditor != null &&
            self.$refs.ueditor != undefined &&
            self.$refs.ueditor.editor.isReady > 0
          ) {
            window.clearInterval(interval);
            self.$refs.ueditor.setUEContent(self.productInfo.core.description);
          } else {
            if (trial > 10) {
              window.clearInterval(interval);
              self.$refs.pf.showToast(
                "error",
                "查询产品描述信息失败",
                "请稍后再试"
              );
            } else {
            }
          }
        }, 100);
      } else {
        this.$refs.pf.showToast(
          "error",
          "查询产品基本信息失败",
          result.message
        );
      }
    },
    callback_getAllValues: function(result) {
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
          this.productInfo.category_name = this.productInfo.category_stack[
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
        setTimeout(function() {
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
    oldValChanged: function(row, event) {
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
    selectedValChanged: function(row, event) {
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
    confirmRefPara: function() {
      if (this.refModalData.para != undefined) {
        var obj = {};
        this.refModalData.para.value = [];
        for (var i = 0; i < this.refModalData.selectedRows.length; i++) {
          obj = {};
          obj.key = this.refModalData.selectedRows[i].value;
          obj.value = this.refModalData.selectedRows[i].display_text;
          this.refModalData.para.value.push(obj);
        }
        for (var i = 0; i < this.refModalData.oldValues.length; i++) {
          this.refModalData.para.value.push(this.refModalData.oldValues[i]);
        }
        this.refModalData.para.value = JSON.stringify(
          this.refModalData.para.value
        );
      }
      //	this.parametergroups.find((x)=>x.group_code==	this.editingRefPara.value.group_code).parameters.find((x)=>x.column_id==this.editingRefPara.value.column_id);
      $("#myModal").modal("hide");
    },
    cancelRefPara: function() {},
    selectRefPara: function(row, event) {
      if (row.value == undefined || row.value == null) {
        row.value = row.cols.find(
          x => x.id == this.refModalData.key_column_id
        ).value;
      }
      if (row.display_text == undefined || row.display_text == null) {
        row.display_text = "";

        var col = row.cols.find(
          x => x.id == this.refModalData.display_columns[1].id
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
    queryRefPara: function() {
      var data = {};
      data.category_code = this.category_code;
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
    callback_queryRefPara: function(result) {
      if (result != null && result.status == 0) {
        this.refModalData.rows = result.data.rows;
      } else {
        //failed
      }
    },
    callback_getParas: function(result) {
      if (result != null && result.status == 0) {
        this.parametergroups = result.data;
        // console.log(this.parametergroups);
        for (var i = 0; i < this.parametergroups.length; i++) {
          for (var j = 0; j < this.parametergroups[i].parameters.length; j++) {
            if (this.parametergroups[i].parameters[j].is_region_data == "1") {
              if (this.parametergroups[i].parameters[j].value != null) {
                var values = this.parametergroups[i].parameters[j].value.split(
                  ","
                );
                this.parametergroups[i].parameters[j].mininput = values[0];
                this.parametergroups[i].parameters[j].maxinput = values[1];
              }
            }
            if (
              this.parametergroups[i].parameters[j].is_enum_data == "1" ||
              this.parametergroups[i].parameters[j].data_type == "8"
            ) {
              if (this.parametergroups[i].parameters[j].value != null) {
                this.parametergroups[i].parameters[
                  j
                ].value = this.parametergroups[i].parameters[j].value.trim(",");
              }
            }
          }
        }
      }
    },
    saveParas: function() {
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
      data.oid = this.product_oid;
      data.parameters = [];
      var para = {};
      for (var i = 0; i < this.parametergroups.length; i++) {
        for (var j = 0; j < this.parametergroups[i].parameters.length; j++) {
          para = {};
          para.column_id = this.parametergroups[i].parameters[j].column_id;
          if (
            this.parametergroups[i].parameters[j].data_type == 7 ||
            this.parametergroups[i].parameters[j].is_region_data == "1"
          ) {
            para.value =
              (this.parametergroups[i].parameters[j].mininput || "") +
              "," +
              (this.parametergroups[i].parameters[j].maxinput || "");
          } else if (this.parametergroups[i].parameters[j].data_type == 9) {
            para.value = "";
            if (
              this.parametergroups[i].parameters[j].value != null &&
              this.parametergroups[i].parameters[j].value != undefined &&
              this.parametergroups[i].parameters[j].value.indexOf("{") > 0
            ) {
              var v = JSON.parse(this.parametergroups[i].parameters[j].value);
              for (var k = 0; k < v.length; k++) {
                para.value += v[k].key + ",";
              }
            }
          } else {
            para.value = this.parametergroups[i].parameters[j].value;
          }
          data.parameters.push(para);
        }
      }
      $.post_json(
        appsettings.apiroot + "home/product/paramvalues/update",
        data,
        this.callback_saveParas
      );
      this.$refs.loading.showLoading("正在保存产品参数信息...");
    },
    callback_saveParas: function(result) {
      this.$refs.loading.hideLoading();
      if (result != null && result.status == 0) {
        //success
        this.need_save_para = false;
        this.$refs.pf.showToast(
          "success",
          "保存产品参数信息成功",
          result.message
        );
      } else {
        //failed
        this.$refs.pf.showToast(
          "error",
          "保存产品参数信息失败",
          result.message
        );
      }
    },
    showModal: function() {
      $("#myModal").modal("show");
    },
    editRefParameter: function(para) {
      this.refModalData = {
        para: null,
        query_fields: null,
        headers: null,
        key_column_id: null,
        display_columns: [],
        rows: [],
        oldValues: [],
        selectedRows: [],
        selectedKeys: []
      };
      this.selectAll = false;
      if (this.refModalData != null) {
        this.refModalData.para = para;
        this.refModalData.oldValues =
          para.value instanceof Array
            ? para.value
            : para.value != null &&
              para.value != undefined &&
              para.value.indexOf("[") >= 0
            ? JSON.parse(para.value)
            : [];
        for (var i = 0; i < this.refModalData.oldValues.length; i++) {
          this.refModalData.selectedKeys.push(
            this.refModalData.oldValues[i].key
          );
        }
      }
      //get para define
      var data = {};
      data.category_code = this.category_code;
      data.column_id = para.column_id;
      $.post_json(
        appsettings.apiroot + "product/parameter/reference/init",
        data,
        this.callback_getRefPara
      );
    },
    callback_getRefPara: function(result) {
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
    saveBasicInfo: function() {
      if ((this.category_code || "") == "") {
        this.$refs.pf.showToast("error", "产品类别不能为空", "");
        return;
      }
      if ((this.category_code || "").length != 6) {
        this.$refs.pf.showToast("error", "三级产品类别都必须选择", "");
        return;
      }
      if ((this.productInfo.core.product_name || "") == "") {
        this.$refs.pf.showToast("error", "产品名称不能为空", "");
        return;
      }
      this.basicInfoSuc = false;
      this.productInfo.core.description = this.$refs.ueditor.getUEContent();
      this.productInfo.core.category = this.category_code;

      this.productInfo.core.oid = this.product_oid;

      this.productInfo.core.tags = (this.productInfo.core.tags || "").replace(
        "，",
        ","
      );

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
    callback_saveBasicInfo: function(result) {
      this.$refs.loading.hideLoading();
      if (result != null && result.status == 0) {
        //success
        this.basicInfoSuc = true;
        this.need_save_basic = false;
        if (this.edit_mode == "new") {
          this.productInfo.core.oid = result.data;
          this.product_oid = result.data;
          $.setUrlParam("id", result.data);
        }

        this.$refs.pf.showToast(
          "success",
          "保存产品基本信息成功",
          result.message
        );
      } else {
        //failed
        this.basicInfoSuc = false;
        $(window).scrollTop(0);
        this.$refs.pf.showToast(
          "error",
          "保存产品基本信息失败",
          result.message
        );
      }
    },
    uploadAttachment: function() {
      $("#uploaderInput input").click();
    },
    persistAttachment: function(file) {
      this.productInfo.attachment_list.push(file);
      this.uploading_files[file.index].ok = true; // = this.uploading_files.splice(filedata.index, 1);
      this.uploading_ok_count++;

      // this.productInfo.attachment_list.push(filedadta);
      // $.post_json(
      //   appsettings.apiroot + "home/product/attachment/create",
      //   filedadta,
      //   this.callback_persistAttachment,
      //   filedadta
      // );
      // var self = this;
      // setTimeout(() => {
      //   self.uploading_files = self.uploading_files.splice(file.index-1,1);
      // }, 0);
    },
    InitUploader: function() {
      var self = this;
      this.uploader = WebUploader.create({
        // swf文件路径
        swf: appsettings.gyhpluginsPrefix + "webuploader/Uploader.swf",
        // 文件接收服务端。
        server: appsettings.apiroot + "home/product/attachment/upload",
        // server: appsettings.apiroot + "utility/attachment/upload",
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
        chunkSize: 4000880,
        duplicate: true
        // accept: {
        //   title: "Images",
        //   extensions: "gif,jpg,jpeg,bmp,png",
        //   mimeTypes: "image/*"
        // }
      });

      this.uploader.on("beforeFileQueued", function(file) {});

      this.uploader.on("fileQueued", function(file) {
        self.uploader.options.formData.guid = Math.random();
        file.index = self.uploading_files.length;
        self.uploading_progresses.push("0");
        self.uploader.options.formData.pid = self.product_oid;
        self.uploader.options.formData.token = window.localStorage.getItem(
          "token"
        );
        self.uploading_files.push(file);
      });
      this.uploader.on("uploadProgress", function(file, percentage) {
        Vue.set(
          self.uploading_progresses,
          file.index,
          (percentage * 100 + "").substring(0, 5)
        );
      });

      this.uploader.on("uploadAccept", function(file, response) {
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

      this.uploader.on("uploadSuccess", function(file, response) {
        response = JSON.parse(response);
        console.log(response,435435);
        
        if (response != null) {
          if (response.status == 0) {
            var index = file.index;
            file = response.data;
            file.index = index;
            self.persistAttachment(file);
          } else if (response.status == 9999) {
            window.location.href =
              appsettings.login_url + encodeURIComponent(window.location.href);
          } else if (response.status < 0) {
            self.$refs.pf.showToast("error", "附件上传异常", response.message);
          }
        }
      });

      this.uploader.on("uploadError", function(file) {});

      this.uploader.on("uploadComplete", function(file) {});

      setTimeout(function() {
        $("#uploaderInput")
          .find("div")
          .each(function() {
            $(this).css("height", "80px");
            $(this).css("width", "80px");
          }, this);
      }, 0);
    },
    chooseLocalPicture: function() {
      //激活 webuploader
      this.$refs["uploadPic"].click();
    },
    uploadPicChanged: function() {
      this.readFile();
    },
    readFile: function() {
      var file = this.$refs["uploadPic"].files[0];
      //判断是否是图片类型
      if (!/image\/\w+/.test(file.type)) {
        alert("只能选择图片");
        return false;
      }
      var reader = new FileReader();
      var self = this;
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        self.uploadingPicBase64 = this.result;
        //do upload
        var data = {};
        data.base64 = self.uploadingPicBase64;
        data.filename = file.name;
        file.base64 = data.base64;

        //清空input[type=file]的值
        $("#uploaderPicture").val(null);

        $.post_json(
          appsettings.apiroot + "home/product/picture/upload2",
          data,
          self.callback_uploadPicture,
          file
        );
      };
    },
    callback_persistAttachment: function(result, filedata) {
      if (result != null && result.status == 0) {
        filedata.create_time = result.data.create_time;
        this.productInfo.attachment_list.push(filedata);
        this.uploading_files[filedata.index].ok = true; // = this.uploading_files.splice(filedata.index, 1);
        this.uploading_ok_count++;
        //	this.productInfo.attachment_list = this.productInfo.attachment_list;
      } else {
      }
    },
    callback_uploadPicture: function(result, file) {
      if (result != null && result.status == 0) {
        //upload success
        var pic = {};
        pic.oid = result.data.oid;
        pic.base64 = this.uploadingPicBase64;
        pic.product_oid = this.product_oid;
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
        this.$refs.pf.showToast(
          "error",
          "上传产品图片出现异常",
          result.message
        );
      }
    },
    closeBigPicture: function() {
      this.selectedPic = null;
    },
    showBigPicture: function(pic, index, type) {
      pic.index = index;
      pic.type = type;
      this.selectedPic = pic;
    },
    statusClass: function(status) {
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

.no-padding .table-bordered {
  border-bottom: 1px solid #ccc !important;
}

.table-bordered,
.no-padding > .table-responsive > .table-bordered {
  border-bottom: 1px solid #ccc !important;
}

.progress {
  height: 5px !important;
}

.progress .progress-bar {
  line-height: 5px !important;
}

.bope {
  padding: 6px 12px !important;
}

.jarviswidget > header {
  border: 0.5px solid #c2c2c2;
}

input:disabled {
  background-color: #eee !important;
}
</style>