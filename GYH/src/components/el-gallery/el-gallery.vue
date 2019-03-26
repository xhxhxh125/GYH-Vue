<template>
<!-- Modal -->
		<div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content" style="min-height: 600px;">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
							&times;
						</button>
						<h4 class="modal-title">Gallery</h4>
					</div>
					<div class="modal-body">
						<div class="row">
							<!-- SuperBox -->
	<div class="superbox col-sm-12">
		<div v-for="(file,index) in files" :key="index" v-if="isImg(file.file_type)||(file.picture!=undefined)" class="superbox-list">
			<img :src="filedir+(file.picture==undefined?(file.oid+file.file_type):(file.picture))" :data-img="filedir+(file.picture==undefined?(file.oid+file.file_type):(file.picture))" class="superbox-img">
		</div>
		<div class="superbox-float"></div>
	</div>
	<!-- /SuperBox -->
	<div class="superbox-show" style="height:300px; display: none"></div>
						</div>
					</div>					
				</div>
				<!-- /.modal-content -->
			</div>
			<!-- /.modal-dialog -->
		</div>
		<!-- /.modal -->
        </template>
<script>
export default {
	name: 'el-footer',
	props: ["id", "files","filedir"],
	data: function() {
		return {

		};
	},
	mounted: function() {
		this.$nextTick(function() {
            //初始化superbox
            $("#"+this.id+" .superbox").SuperBox();
        });
	},
	created: function() {
		
	},
	methods: {
        isImg: function (type) {
			type = (type || "").toUpperCase();
			if (type == ".JPG" || type == ".JPEG" || type == ".BMP" || type == ".PNG") {
				return true;
			}
			return false;
		},
		isVideo: function (type) {
			type = (type || "").toUpperCase();
			if (type == ".MP4") {
				return true;
			}
			return false;
        },
	}
}
</script>
<style>

</style>