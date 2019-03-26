<template>
	<select multiple="multiple" size="10" :id="id" :name="name" :datalist="datalist">
		<option v-for = "item in datalist" :key="item" :value="item">{{item}}</option>
	</select>
</template>
<script>
export default {
	name: 'el-footer',
	props: ["id","name", "nonSelectedListLabel", "selectedListLabel","datalist"],
	data: function() {
		return {
			
		};
	},
	mounted: function() {
		var that =this;
		setTimeout(function() {
			var initializeDuallistbox = $('#'+that.id).bootstrapDualListbox({
	          nonSelectedListLabel: that.nonSelectedListLabel==null?"non-selected":that.nonSelectedListLabel,
	          selectedListLabel: that.selectedListLabel==null?"selected":that.selectedListLabel,
	          preserveSelectionOnMove: 'moved',
	          moveOnSelect: false,
	          nonSelectedFilter: ''
	        });
		}, 2000);
	},
	created: function() {
		//选中列表发生变化
	},
	methods: {
		selectedListValue:function(){
			return $('[name="'+this.name+'"]').val();
		}
	}
}
</script>
<style>

</style>
