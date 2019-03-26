<template>
	<!-- row msg show-->
	<div class="row">
		<!-- NEW WIDGET START -->
		<article class="col-sm-12">
			<div :hidden="type!='warning'" class="alert alert-warning fade in">
				<button class="close" @click="dismiss">
					×
				</button>
				<i class="fa-fw fa fa-warning"></i>
				<strong>警告</strong> {{msg}}
			</div>
			<div :hidden="type!='success'" class="alert alert-success fade in">
				<button class="close" @click="dismiss">
					×
				</button>
				<i class="fa-fw fa fa-check"></i>
				<strong>成功</strong> {{msg}}
			</div>
			<div :hidden="type!='info'" class="alert alert-info fade in">
				<button class="close" @click="dismiss">
					×
				</button>
				<i class="fa-fw fa fa-info"></i>
				<strong>消息提示!</strong> {{msg}}
			</div>
			<div :hidden="type!='error'" class="alert alert-danger fade in">
				<button class="close" @click="dismiss">
					×
				</button>
				<i class="fa-fw fa fa-times"></i>
				<strong>错误!</strong> {{msg}}
			</div>
		</article>
		<!-- WIDGET END -->
	</div>
</template>
<script>
export default {
	name: 'el-blockalert',
	//props: ["type","msg"],
	data: function() {
		return {
			type: '',
			msg: '',
		};
	},
	mounted: function() {
		//  console.log("into mounted.");
	},
	created: function() {
		//console.log("into created。");
	},
	methods: {
		blockAlert: function(type, msg) {
			this.type = type;
			this.msg = msg;
		},
		dismiss:function(){
			this.type="";
		}
	}
}
</script>
<style>

</style>
