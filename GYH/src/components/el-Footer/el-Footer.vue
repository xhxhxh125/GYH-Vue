<template>
	<!-- #PAGE FOOTER -->
	<div class="page-footer">
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<span class="txt-color-white">{{getdate()}}</span>
			</div>
		</div>
		<!-- end row -->
	</div>
	<!-- END FOOTER -->
</template>
<script>
export default {
	name: 'el-footer',
	props: ["a", "b"],
	data: function() {
		return {

		};
	},
	mounted: function() {
		//  console.log("into mounted.");
	},
	created: function() {
		//console.log("into created。");
		
	},
	methods: {
		getdate:function(){
			var today=new Date();
			return today.getFullYear()+"年"+(today.getMonth()+1)+"月"+today.getDate()+"日";
		},
	}
}
</script>
<style>
.page-footer {
    height: 52px;
    padding: 15px 13px 0;
    border-top: 1px solid #CECECE;
    background: #2a2725;
    width: 100%;
    position: absolute;
    display: block;
    bottom: 0;
	color:#ffffff;
	}
</style>
