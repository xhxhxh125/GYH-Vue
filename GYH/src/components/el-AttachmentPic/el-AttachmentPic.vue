<template>
  <div class="col-md-12 align-self-center d-flex g-mb-15 flex-wrap">
    <!-- Cube Portfolio Blocks - Item -->
    <div
      class="cbp-item identity design col-md-3"
      v-for="(att,index) in attachment_pic_list"
      :key="index"
    >
      <!-- 图片 -->
      <div
        v-if="isImg(att.file_type)"
        class="u-block-hover g-parent"
        style="min-height:150px; max-height:200px;text-align:center;"
      >
        <img
          class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
          :src="file_prefix+att.oid+att.file_type"
          alt="Image description"
          style="object-fit: cover; height:200px;"
        >
        <a :href="file_prefix+att.oid+att.file_type" target="_blank">
          <div
            class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-15"
          >
            <ul class="align-items-end flex-column list-inline mt-auto ml-auto mb-0">
              <li class="list-inline-item">
                <a
                  class="u-icon-v2 u-icon-size--xs g-brd-white g-color-black g-bg-white rounded-circle"
                  v-if="edit==true"
                  href="javascript:void(0);"
                  @click="deleteFile(att,index)"
                >
                  <i class="hs-admin-trash"></i>
                </a>
              </li>
            </ul>
          </div>
        </a>
      </div>

      <!-- 视频 -->
      <div
        v-else-if="isVideo(att.file_type)"
        class="u-block-hover g-parent"
        style="min-height:150px; max-height:200px;text-align:center;"
      >
        <img
          class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
          :src="appsettings.gyhImgPrefix+'video_poster.jpg'"
          alt="Image description"
          style="object-fit: cover; height:200px;"
        >
        <a :href="file_prefix+att.oid+att.file_type" target="_blank">
          <div
            class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-15"
          >
            <ul class="align-items-end flex-column list-inline mt-auto ml-auto mb-0">
              <li class="list-inline-item">
                <a
                  v-if="edit==true"
                  class="u-icon-v2 u-icon-size--xs g-brd-white g-color-black g-bg-white rounded-circle"
                  href="javascript:void(0);"
                  @click="deleteFile(att,index)"
                >
                  <i class="hs-admin-trash"></i>
                </a>
              </li>
            </ul>
          </div>
        </a>
      </div>

      <div
        class="g-bg-white text-center g-pa-15"
        v-if="isImg(att.file_type)||isVideo(att.file_type)"
      >
        <p class="g-font-size-13 mb-0" style="word-break:break-all">{{att.file_name+att.file_type}}</p>
      </div>
    </div>
    <!-- End Cube Portfolio Blocks - Item -->
    <div class="cbp-item identity design col-md-3">
      <div
        v-if="edit==true"
        class="u-block-hover g-parent"
        style="min-height:150px; max-height:200px;text-align:center;"
      >
        <a href="javascript:void(0);" @click="uploadNewFile()">
          <img
            class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
            :src="appsettings.gyhImgPrefix+'upload_pic.jpg'"
            alt="Image description"
            style="object-fit: cover; height:200px;"
          >
        </a>

        <div class="g-bg-white text-center g-pa-15">
          <p
            class="g-font-size-13 mb-0"
            style="word-break:break-all"
            v-for="(file,index) in uploading_files"
            :key="index"
          >{{index}}:{{file.progress}}</p>
        </div>
      </div>
    </div>

    <ElUploader ref="webuploader"></ElUploader>
    <ElConfirmDialog ref="confirm"></ElConfirmDialog>
    <ElLoading ref="loading"></ElLoading>
    <ElToastAlert ref="toastAlert"></ElToastAlert>
  </div>
</template>


<script>
import ElUploader from "components/el-Uploader/el-Uploader";
import Vue from "vue";
import ElConfirmDialog from "components/el-ConfirmDialog/el-ConfirmDialog";
import ElLoading from "components/el-Loading/el-Loading";
import ElToastAlert from "components/el-ToastAlert/el-ToastAlert";

export default {
  name: "el-AttachmentPic",
  props: [
    "attachment_pic_list",
    "file_prefix",
    "edit",
    "source_oid",
    "source_type",
    "reload_callback"
  ],
  data: function() {
    return {
      uploading_files: [] //正在上传的附件
    };
  },
  mounted: function() {
    var self = this;
  },
  components: {
    ElUploader,
    ElConfirmDialog,
    ElLoading,
    ElToastAlert
  },
  created: function() {},
  methods: {
    isImg: function(type) {
      type = (type || "").toUpperCase();
      if (
        type == ".JPG" ||
        type == ".JPEG" ||
        type == ".BMP" ||
        type == ".PNG"
      ) {
        return true;
      }
      return false;
    },
    isVideo: function(type) {
      type = (type || "").toUpperCase();
      if (type == ".MP4") {
        return true;
      }
      return false;
    },
    uploadNewFile: function() {
      this.$refs.webuploader.uploadNewFiles(
        this.source_oid,
        "remark",
        this.uploadProgressChanged,
        this.uploadSuccess
      );
    },

    deleteFile: function(file, index) {
      that = this;
      this.$refs.confirm.confirmShow({
        only_alert: false,
        action_code: "deleteA",
        title: "删除附件",
        msg: "确定要删除附件【" + file.file_name + file.file_type + "】吗？",
        success: function(res) {
          if (res.confirm == true) {
            // file.source_oid = that.source_oid;
            // file.target_type = that.source_type;
            $.post_json(
              appsettings.apiroot + "utility/attachment/delete",
              file,
              that.cb_deleteFile
            );
          }
        }
      });
      //event.preventDefault();
      //event.stopPropagation();
    },
    cb_deleteFile: function(res) {
      console.log(res);
      if (res != null && res.status == 0) {
        if (this.reload_callback) this.reload_callback();
        this.$refs.toastAlert.showToast("success", "删除附件成功", "");
      } else {
        this.$refs.toastAlert.showToast("error", "附件删除失败！", res.message);
      }
    },
    //附件上传成功的回调函数
    uploadSuccess: function(files) {
      //上传成功
      var all_done = true;
      for (var i = 0; i < files.length; i++) {
        var f = files[i];
        var idx = this.uploading_files.findByKeyAndValue("fid", f.fid);
        if (idx >= 0) {
          Vue.set(this.uploading_files, idx, f);
        }
        if (f.progress < "100") all_done = false;
      }
      if (all_done == true) {
        if (this.reload_callback) this.reload_callback();
      }
    },
    //附件上传进度变化的回调函数
    uploadProgressChanged: function(files) {
      //上传进度发生变化
      for (var i = 0; i < files.length; i++) {
        var f = files[i];
        var idx = this.uploading_files.findByKeyAndValue("fid", f.fid);
        if (idx >= 0) {
          Vue.set(this.uploading_files, idx, f);
        } else {
          this.uploading_files.push(f);
        }
      }
    }
  }
};
</script>
<style>
</style>