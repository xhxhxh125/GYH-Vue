<template>
  <div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <!-- main -->
        <div class="col g-ml-50 g-ml-0--lg g-overflow-hidden">
          <div class="g-pa-20">
            <div class="row">
              <div class="col-md-3 g-mb-30 g-mb-0--md">
                <div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-20--md">
                  <!-- User Information -->
                  <section class="text-center g-mb-30 g-mb-50--md g-pa-30--md">
                    <div class="d-inline-block g-pos-rel g-mb-20">
                      <a
                        class="u-badge-v2--lg u-badge--bottom-right g-width-32 g-height-32 g-bg-secondary g-bg-primary--hover g-transition-0_3 g-mb-20 g-mr-20"
                        href="#!"
                        @click="changeUserImg()"
                      >
                        <i class="hs-admin-pencil g-absolute-centered g-font-size-16 g-color-white"></i>
                      </a>
                      <img
                        class="img-fluid rounded-circle"
                        :src="userinfo.picture"
                      >
                    </div>

                    <h3 class="g-font-weight-300 g-font-size-20 g-color-black mb-0">{{userinfo.nickname}}</h3>
                  </section>
                  <!-- User Information -->

                  <!-- Profile Completion -->
                  <section class="g-mb-30 g-mb-50--md">
                    <h4 class="media h6 g-font-weight-400 g-mb-15">
                      <span class="d-flex align-self-center g-color-gray-dark-v6">资料完成率</span>
                      <span class="media-body align-self-center text-right g-color-gray-dark-v6">75%</span>
                    </h4>

                    <div class="progress g-height-4 g-rounded-2">
                      <div
                        class="progress-bar g-bg-lightblue-v3 g-rounded-3"
                        role="progressbar"
                        style="width: 60%"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </section>
                  <!-- End Profile Completion -->

                  <!-- Profile Sidebar -->
                  <section>
                    <ul class="list-unstyled mb-0">
                      <li class="g-brd-top g-brd-gray-light-v7 mb-0">
                        <a
                          class="d-flex align-items-center u-link-v5 g-parent g-py-15"
                          href="/user/edit.html"
                        >
                          <span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
                            <i class="hs-admin-user"></i>
                          </span>
                          <span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">基本信息</span>
                        </a>
                      </li>
                      <li class="g-brd-top g-brd-gray-light-v7 mb-0">
                        <a
                          class="d-flex align-items-center u-link-v5 g-parent g-py-15"
                          href="/user/edit_account.html"
                        >
                          <span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
                            <i class="hs-admin-write"></i>
                          </span>
                          <span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">账号信息</span>
                        </a>
                      </li>
                      <li class="g-brd-top g-brd-gray-light-v7 mb-0">
                        <a
                          class="d-flex align-items-center u-link-v5 g-parent g-py-15"
                          href="/user/query.html"
                        >
                          <span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
                            <i class="hs-admin-medall"></i>
                          </span>
                          <span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">技能和爱好</span>
                        </a>
                      </li>
                      <li class="g-brd-top g-brd-gray-light-v7 mb-0">
                        <a
                          class="d-flex align-items-center u-link-v5 g-parent g-py-15 active"
                          :href="'/user/attachment.html?id='+userinfo.oid+'&t='+userinfo.user_type+'&coid='+userinfo.company_oid"
                        >
                          <span class="g-font-size-18 g-color-gray-light-v6 g-color-primary--parent-hover g-color-primary--parent-active g-mr-15">
                            <i class="hs-admin-mobile"></i>
                          </span>
                          <span class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">视频和图库</span>
                        </a>
                      </li>
                    </ul>

                  </section>
                  <!-- End Profile Sidebar -->
                </div>
              </div>

              <div class="col-md-9">
                <div class="g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md">
                  <header>
                    <h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">照片</h2>
                  </header>

                  <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-25--md">

                  <form>
                    <div class="form-group">
                      <div class="align-self-center d-flex g-mb-15">
                        <!-- Cube Portfolio Blocks - Item -->
                        <div
                          class="cbp-item identity design col-md-3"
                          v-for="(pic,index) in attachments"
                          :key="index"
                        >
                          <div
                            class="u-block-hover g-parent"
                            v-if="(pic.file_type!='.mp4' && pic.file_type != '.wma')"
                          >
                            <img
                              class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
                              :src="(appsettings.comfile_prefix+pic.oid+pic.file_type)"
                            >
                            <div class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-15">
                              <ul class="align-items-end flex-column list-inline mt-auto ml-auto mb-0">
                                <li class="list-inline-item">
                                  <a
                                    class="cbp-lightbox u-icon-v2 u-icon-size--xs g-brd-white g-color-black g-bg-white rounded-circle"
                                    :href="(appsettings.comfile_prefix+pic.oid+pic.file_type)"
                                  >
                                    <i class="hs-admin-image u-line-icon-pro"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a
                                    class="u-icon-v2 u-icon-size--xs g-brd-white g-color-black g-bg-white rounded-circle"
                                    @click="deleteAttachment(pic)"
                                  >
                                    <i class="hs-admin-trash u-line-icon-pro"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="g-bg-white text-center g-pa-15">
                            <h3 class="h6 g-color-black g-font-weight-700 mb-1">{{pic.file_name}}</h3>
                            <p class="g-font-size-13 mb-0">{{pic.create_time}}</p>
                          </div>
                        </div>
                        <!-- End Cube Portfolio Blocks - Item -->
                      </div>
                      <!-- <input class="js-file-attachment" type="file" name="fileAttachment[]"> -->
                      <div
                        @click="onNewImageClick()"
                        class="g-parent g-pos-rel g-height-230 g-bg-gray-light-v8--hover g-brd-around g-brd-style-dashed g-brd-gray-light-v7 g-brd-lightblue-v3--hover g-rounded-4 g-transition-0_2 g-transition--ease-in g-pa-15 g-pa-30--md"
                      >
                        <div class="d-md-flex align-items-center g-absolute-centered--md w-100 g-width-auto--md">
                          <div>
                            <div class="g-pos-rel g-width-80 g-width-100--lg g-height-80 g-height-100--lg g-bg-gray-light-v8 g-bg-white--parent-hover rounded-circle g-mb-20 g-mb-0--md g-transition-0_2 g-transition--ease-in mx-auto mx-0--md">
                              <i class="hs-admin-cloud-up g-absolute-centered g-font-size-30 g-font-size-36--lg g-color-lightblue-v3"></i>
                            </div>
                          </div>
                          <div class="text-center text-md-left g-ml-20--md">
                            <h3 class="g-font-weight-400 g-font-size-16 g-color-black g-mb-10">上传图片附件</h3>
                            <p class="g-font-weight-300 g-color-gray-dark-v6 mb-0">单击“上传”按钮并从计算机中浏览。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <header>
                    <h2 class="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">个人介绍视频</h2>
                  </header>

                  <hr class="d-flex g-brd-gray-light-v7 g-my-15 g-my-25--md">

                  <form>
                    <div class="form-group">
                      <div class="align-self-center d-flex g-mb-15">
                        <!-- Cube Portfolio Blocks - Item -->
                        <div
                          class="cbp-item identity design col-md-3"
                          v-for="(pic,index) in attachments"
                          :key="index"
                        >
                          <div
                            class="u-block-hover g-parent"
                            v-if="(pic.file_type=='.mp4' || pic.file_type == '.wma')"
                          >
                            <img
                              class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
                              :src="(appsettings.comfile_prefix+pic.oid+pic.file_type)"
                            >
                            <div class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-15">
                              <ul class="align-items-end flex-column list-inline mt-auto ml-auto mb-0">
                                <li class="list-inline-item">
                                  <a
                                    class="u-icon-v2 u-icon-size--xs g-brd-white g-color-black g-bg-white rounded-circle"
                                    href="#!"
                                  >
                                    <i class="icon-communication-095 u-line-icon-pro"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a
                                    class="cbp-lightbox u-icon-v2 u-icon-size--xs g-brd-white g-color-black g-bg-white rounded-circle"
                                    :href="(appsettings.comfile_prefix+pic.oid+pic.file_type)"
                                  >
                                    <i class="icon-communication-017 u-line-icon-pro"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="g-bg-white text-center g-pa-15">
                            <h3 class="h6 g-color-black g-font-weight-700 mb-1">{{pic.file_name}}</h3>
                            <p class="g-font-size-13 mb-0">{{pic.create_time}}</p>
                          </div>
                        </div>
                        <!-- End Cube Portfolio Blocks - Item -->
                      </div>
                      <!-- <input class="js-file-attachment" type="file" name="fileAttachment[]"> -->
                      <div
                        @click="onNewVideoClick()"
                        class="g-parent g-pos-rel g-height-230 g-bg-gray-light-v8--hover g-brd-around g-brd-style-dashed g-brd-gray-light-v7 g-brd-lightblue-v3--hover g-rounded-4 g-transition-0_2 g-transition--ease-in g-pa-15 g-pa-30--md"
                      >
                        <div class="d-md-flex align-items-center g-absolute-centered--md w-100 g-width-auto--md">
                          <div>
                            <div class="g-pos-rel g-width-80 g-width-100--lg g-height-80 g-height-100--lg g-bg-gray-light-v8 g-bg-white--parent-hover rounded-circle g-mb-20 g-mb-0--md g-transition-0_2 g-transition--ease-in mx-auto mx-0--md">
                              <i class="hs-admin-cloud-up g-absolute-centered g-font-size-30 g-font-size-36--lg g-color-lightblue-v3"></i>
                            </div>
                          </div>
                          <div class="text-center text-md-left g-ml-20--md">
                            <h3 class="g-font-weight-400 g-font-size-16 g-color-black g-mb-10">上传个人介绍视频</h3>
                            <p class="g-font-weight-300 g-color-gray-dark-v6 mb-0">单击“上传”按钮并从计算机中浏览。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <!-- <div>
                      <button class="btn btn-xl u-btn-secondary g-font-size-default g-px-40">提交</button>
                  </div>-->
                </div>
              </div>

              <div
                class="modal"
                id="accountpicture_modal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header g-flex">
                      <h4
                        class="modal-title"
                        id="myModalLabel"
                      >修改用户头像</h4>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >&times;</button>
                    </div>
                    <div class="modal-body">
                      <!-- imgcopper widget grid -->
                      <ElImgCopper
                        id="accountpicture"
                        arlockratio="1"
                        @imgCutCallback="onAccountImageCropper"
                      ></ElImgCopper>
                    </div>
                  </div>
                  <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </ElPageFrame>
    <ElToastAlert ref="toastAlert"></ElToastAlert>
    <a
      id="selectimage"
      style="display:none;"
    ></a>
    <a
      id="selectvideo"
      style="display:none;"
    ></a>
  </div>
</template>

<script>
import "common/httputils"; //引用js
import htmlHelper from "common/htmlutils";
import ElPageFrame from "components/el-PageFrame/el-PageFrame";
import ElImgCopper from "components/el-ImgCopper/el-ImgCopper";
import ElBlockAlert from "components/el-BlockAlert/el-BlockAlert";
import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";

export default {
  name: "app",
  data: function() {
    return {
      id: "",
      user_type: "",
      functionlist: [],
      userinfo: {
        oid: "",
        picture: "/assets/common/img/user_default.jpg"
      },
      uploading_progresses: [],
      attachments: [],
      uploading_files: []
    };
  },
  components: {
    ElPageFrame,
    ElBlockAlert,
    ElImgCopper,
    ElToastAlert
  },
  created: function() {
    this.id = $.getUrlParam("id");
    this.user_type = $.getUrlParam("t");
    this.company_oid = $.getUrlParam("coid");

    var infobody = {
      account_oid: this.id
    };
    $.post_json(
      appsettings.apiroot + "account/info",
      infobody,
      this.userInfoRender
    );

    var body = {
      source_oid: this.id
    };
    $.post_json(
      appsettings.apiroot + "utility/attachment/retrieve",
      body,
      this.attRender
    );
    //}
    //self.util_service.getComAttachTypeList().subscribe(res => self.attchTypes = res.data);
    $.post_json(
      appsettings.apiroot + "account/userfunction",
      {
        pageid: "user2_account_edit"
      },
      this.functionlist_callback
    );
  },
  mounted: function() {
    this.InitImageUploader();
    this.InitVideoUploader();
  },
  methods: {
    functionlist_callback: function(res) {
      if (res.status == 0) {
        var funlist = res.data.functions;
        this.functionlist.splice(0, this.functionlist.length);
        for (var i = 0; i < funlist.length; i++) {
          this.functionlist.push(funlist[i].function_code);
        }
      }
    },
    userInfoRender: function(res) {
      if (res.status == 0) {
        this.userinfo = res.data;
      } else {
        this.$refs.toastAlert.config = {
          type: "error",
          title: "错误",
          msg: res.message
        };
      }
    },
    attRender: function(res) {
      if (res.status == 0) {
        this.attachments = res.data;
      } else {
        this.$refs.toastAlert.config = {
          type: "error",
          title: "错误",
          msg: res.message
        };
        this.$refs.toastAlert.show = true;
      }
    },

    deleteAttachment: function(attachment) {
      that = this;
      this.$refs.pf.confirmShow({
        title: "删除附件",
        msg: "确定要删除附件【" + attachment.file_name + "】吗？",
        data: attachment,
        success: that.doDelete
      });
    },

    doDelete: function(res) {
      if (res.confirm == true) {
        this.delete_file = res.data;

        this.$refs.pf.showLoading("正在删除....");
        var url = "utility/attachment/delete";
        if (parseInt(this.user_type) === 1) {
          url = "home/company/attachment/delete";
        }
        var data = {
          oid: this.delete_file.oid,
          source_oid: this.id,
          company_oid: this.company_oid,
          target_type: "0",
          cache_key: "User_"
        };
        $.post_json(appsettings.apiroot + url, data, this.callback_deleteAtt);
      }
    },

    callback_deleteAtt: function(res, p) {
      this.$refs.pf.hideLoading();
      if (res.status == 0) {
        //从页面上删除
        this.attachments.splice(this.attachments.indexOf(this.delete_file), 1);
        this.$refs.pf.confirmShow({
          title: "删除成功！",
          msg: "",
          only_alert: true
        });
      } else {
        //提示错误信息
        this.$refs.toastAlert.config = {
          type: "error",
          title: "错误",
          msg: res.message
        };
        this.$refs.toastAlert.show = true;
      }
    },

    onNewImageClick: function(id) {
      $("#selectimage input").click();
    },
    onNewVideoClick: function(id) {
      $("#selectvideo input").click();
    },

    InitImageUploader: function() {
      var self = this;
      //技术专家：上传个人附件
      var url = "utility/attachment/upload";
      //销售精英：上传公司附件
      if (this.user_type == "1") {
        url = "home/company/attachment/upload";
      }
      this.uploader = WebUploader.create({
        // swf文件路径
        swf: appsettings.gyhpluginsPrefix + "webuploader/Uploader.swf",
        // 文件接收服务端。
        server: appsettings.apiroot + url,
        chunked: true,
        threads: 1,
        auto: true,
        fromData: {
          guid: "guid"
        },
        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: "#selectimage",
        // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
        resize: false,
        //fileNumLimit:1,
        chunkSize: 4000880,
        accept: {
          title: "Images",
          extensions: "gif,jpg,jpeg,bmp,png",
          mimeTypes: "image/*"
        }
      });

      this.uploader.on("fileQueued", function(file) {
        self.uploader.options.formData.guid = Math.random();
        file.index = self.uploading_files.length;
        self.uploading_progresses.push("0");
        self.uploader.options.formData.soid = self.id;
        self.uploader.options.formData.target_type = "0";
        self.uploader.options.formData.cache_key = "User_";
        (self.uploader.options.formData.cid = self.company_oid),
          (self.uploader.options.formData.token = window.localStorage.getItem(
            "token"
          ));
        //如果是图片，则生成缩略图
        if (htmlHelper.isImg("." + file.ext)) {
          self.uploader.makeThumb(
            file,
            function(error, ret) {
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
      this.uploader.on("uploadProgress", function(file, percentage) {
        $("#" + file.id)
          .find("span.state")
          .html((percentage * 100 + "").substring(0, 5) + "%");
      });
      this.uploader.on("uploadSuccess", function(file, response) {
        // $("#" + file.id)
        // 	.find("span.state")
        // 	.text("已上传");
        // var file_des = $("#" + file.id)
        // 	.find("span.state")
        // 	.attr("data-atttype");
        console.log(file, 54645);

        self.persistAttachmentCallback(file, JSON.parse(response));
      });
      this.uploader.on("uploadError", function(file) {
        $("#" + file.id)
          .find("span.state")
          .text("上传出错");
      });
    },

    InitVideoUploader: function() {
      var self = this;
      //技术专家：上传个人附件
      var url = "utility/attachment/upload";
      //销售精英：上传公司附件
      if (this.user_type == "1") {
        url = "home/company/attachment/upload";
      }
      this.uploader = WebUploader.create({
        // swf文件路径
        swf: appsettings.gyhpluginsPrefix + "webuploader/Uploader.swf",
        // 文件接收服务端。
        server: appsettings.apiroot + url,
        chunked: true,
        threads: 1,
        auto: true,
        fromData: {
          guid: "guid"
        },
        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: "#selectvideo",
        // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
        resize: false,
        //fileNumLimit:1,
        chunkSize: 4000880,
        accept: {
          title: "Video",
          extensions: "mp4.wma",
          mimeTypes: "video/*"
        }
      });

      this.uploader.on("fileQueued", function(file) {
        self.uploader.options.formData.guid = Math.random();
        file.index = self.uploading_files.length;
        self.uploading_progresses.push("0");
        self.uploader.options.formData.soid = self.id;
        self.uploader.options.formData.target_type = "0";
        self.uploader.options.formData.cache_key = "User_";
        (self.uploader.options.formData.cid = self.company_oid),
          (self.uploader.options.formData.token = window.localStorage.getItem(
            "token"
          ));
        //如果是图片，则生成缩略图
        if (htmlHelper.isImg("." + file.ext)) {
          self.uploader.makeThumb(
            file,
            function(error, ret) {
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
      this.uploader.on("uploadProgress", function(file, percentage) {
        $("#" + file.id)
          .find("span.state")
          .html((percentage * 100 + "").substring(0, 5) + "%");
      });
      this.uploader.on("uploadSuccess", function(file, response) {
        // $("#" + file.id)
        // 	.find("span.state")
        // 	.text("已上传");
        // var file_des = $("#" + file.id)
        // 	.find("span.state")
        // 	.attr("data-atttype");
        self.persistAttachmentCallback(file, JSON.parse(response));
      });
      this.uploader.on("uploadError", function(file) {
        $("#" + file.id)
          .find("span.state")
          .text("上传出错");
      });
    },

    persistAttachmentCallback: function(file, res) {
      if (res.status == 0) {
        //通知主页面更新
        this.attachments.push(res.data);

        var self = this;
        setTimeout(() => {
          self.uploading_files = self.uploading_files.splice(file.index - 1, 1);
        }, 0);
      } else {
        this.$refs.toastAlert.config = {
          type: "error",
          title: "错误",
          msg: res.message
        };
        this.$refs.toastAlert.show = true;
      }
    },

    onAccountImageCropper: function(imgbase64) {
      if (this.userinfo.oid == undefined || this.userinfo.oid.length == 0) {
        this.$refs.pf.confirmShow({
          title: "尚未创建账户",
          msg: "请维护账户基本信息以创建账户",
          only_alert: true
        });
      } else {
        var body = {
          account_oid: this.userinfo.oid,
          base64: imgbase64.split(",")[1]
        };
        $.post_json(
          appsettings.apiroot + "home/account/picture/update",
          body,
          this.uploadPictureRender
        );
      }
    },

    uploadPictureRender: function(res) {
      $("#accountpicture_modal").modal("hide");
      if (res.status == 0) {
        var that = this;
        setTimeout(() => {
          this.$refs.pf.confirmShow({
            title: "提交成功",
            msg: "账户头像修改提交成功！",
            only_alert: true
          });
          that.userinfo.picture = res.data + "?t=" + Math.random();
        }, 1500);
      } else {
        this.$refs.toastAlert.config = {
          type: "error",
          title: "错误",
          msg: res.message
        };
      }
    }
  }
};
</script>

<style>
.userrole-label {
  margin: 0 auto;
  color: #fff;
  line-height: 1;
  display: inline;
  padding: 0.2em 0.6em 0.3em !important;
  text-align: center;
  margin-right: 5px;
  border-radius: 0.25em;
}
</style>