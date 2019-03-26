<template>
  <div class="col-md-12 align-self-center g-mb-20">
    <div class="row g-mb-20" v-if="edit==true">
      <a
        class="js-fancybox btn btn-xl u-btn-secondary g-width-140--md g-font-size-default g-ml-10"
        href="javascript:void(0);"
        @click="uploadNewFile()"
      >上传附件</a>
    </div>

    <div class="table-responsive g-mb-40">
      <table class="js-datatable table u-table--v3 u-editable-table--v1 g-color-black">
        <thead>
          <tr>
            <th>ID</th>
            <th>文件名称</th>
            <th>上传时间</th>
            <th v-if="edit==true">操作</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(att,index) in attachment_doc_list" :key="index">
            <td>{{index+1}}</td>
            <td>
              <a
                :href="file_prefix+att.oid+att.file_type"
                target="_blank"
              >{{att.file_name+att.file_type}}</a>
            </td>
            <td>{{att.update_time}}</td>
            <td v-if="edit==true">
              <a
                class="u-link-v5 g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover g-ml-12"
                href="javascript:void(0);"
                @click="deleteFile(att,index)"
              >
                <i class="hs-admin-trash"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
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
  name: "el-AttachmentDoc",
  props: [
    "attachment_doc_list",
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
            file.source_oid = that.source_oid;
            file.target_type = that.source_type;
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