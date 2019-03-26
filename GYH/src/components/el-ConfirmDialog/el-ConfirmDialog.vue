<template>
	<div v-show="show===true" class="divMessageBox animated fadeIn fast">
		<div class="MessageBoxContainer animated fadeIn fast" id="Msg1">
			<div class="MessageBoxMiddle">
				<span class="MsgTitle">
					<i class="fa fa-sign-out txt-color-orangeDark"></i>
					<span class="txt-color-orangeDark">
						<strong>
							{{options.title}}
						</strong>
					</span>
				</span>
				<p class="pText">
					{{options.msg}}
				</p>
				<div class="MessageBoxButtonSection">
					<button v-if="options.only_alert==false || options.only_alert==undefined" id="bot1-Msg1" class="btn btn-default btn-sm botTempo" @click="cancel"> 否</button>
					<button v-if="options.only_alert==false || options.only_alert==undefined" id="bot2-Msg1" class="btn btn-default btn-sm botTempo" @click="confirm"> 是</button>
					<button v-if="options.only_alert===true" id="bot3-Msg1" class="btn btn-default btn-sm botTempo" @click="ok"> 确认</button>
					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'el-confirmdialog',
	props: [],
	data: function() {
		return {
			show: false,
			options: {
				action_code: "",
				title: "",
				msg: "",
				data:null,
				success: null,
				error: null,
				only_alert:false
			}
		};
	},
	mounted: function() {

	},
	created: function() {

	},
	methods: {
		confirmShow: function(options) {
			this.show = true;
			this.options = options;
		},
		confirm: function() {
			this.show = false;
			if (this.options.success != null) {
				this.options.success({ confirm: true, action: this.action_code,data:this.options.data });
			}
			this.$emit('confirm',{confirm:true,action:this.action_code,data:this.options.data});
		},
		ok: function() {
			this.show = false;
		},
		cancel: function() {
			this.show = false;
			if (this.options.success != null) {
				this.options.success({ confirm: false, action: this.action_code,data:this.options.data });
			}
			this.$emit('cancel',{confirm:false,action:this.action_code,data:this.options.data});
		}
	}
}
</script>
<style>

</style>
