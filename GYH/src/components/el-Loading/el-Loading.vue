<template>
	<div :hidden="show==false" class="divMessageBox animated fadeIn fast">
		<div class="MessageBoxContainer animated fadeIn fast">
			<div class="MessageBoxMiddle">
				<span class="MsgTitle">
					<i class="fa fa-circle-o-notch fa-spin txt-color-orangeDark"></i>
					<span class="txt-color-orangeDark">
						<strong>
							{{title}}
						</strong>
					</span>
				</span>
				<p class="pText" style="height:18px;">

				</p>
				<div class="MessageBoxButtonSection" style="height:30px;">
					<!-- <button id="bot1-Msg1" class="btn btn-default btn-sm botTempo"></button>
					<button id="bot2-Msg1" class="btn btn-default btn-sm botTempo"></button> -->
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'el-loading',
	props: [],
	data: function() {
		return {
			show: false,
			title: "Loading",
		};
	},
	mounted: function() {

	},
	created: function() {

	},
	methods: {
		showLoading: function(title) {
			this.show = true;
			this.title = title;
		},
		hideLoading: function() {
			this.show = false;
			this.title = "Loading";
		}
	}
}
</script>
<style>

</style>
