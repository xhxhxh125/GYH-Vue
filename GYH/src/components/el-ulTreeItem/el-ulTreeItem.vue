<template>
	<li @click.stop="toggle($event)">
		<span class="sw">
			<label :class="type=='checkbox'?'checkbox':(type=='radio'?'radio':'')" class="inline-block" style="float:left;">
				<input v-if="type=='checkbox'" type="checkbox" :value="value" :checked="value==model.enum_code || value==model.code" name="checkbox-inline" @click="chosenChanged(model,$event)">
				<input v-if="type=='radio'" type="radio" :value="value" :checked="value==model.enum_code || value==model.code" name="radio-inline" @click="chosenChanged(model,$event)">
				<i></i>&nbsp;
			</label>
			{{model.name}}
		</span>
		<ul>
			<el-ul-tree-item :type="type" @chosenChanged="childChosenChanged($event)" style="display:none;" v-for="(item,index) in model.children"  :value="value" :model="item" :key="index"></el-ul-tree-item>
		</ul>
	</li>


</template>
<script>
	export default {
		name: 'elUlTreeItem',
		props: ["model","type","value"],
		data: function () {
			return {

			};
		},
		components: {

		},
		mounted: function () {
			$('.tree > ul').attr('role', 'tree').find('ul').attr('role', 'group');
			$('.tree').find('li:has(ul)').addClass('parent_li').attr('role', 'treeitem').find(' > span').attr('title',
				'点击展开');
		},
		created: function () {
		},
		methods: {
			childChosenChanged:function(event){
				this.$emit("chosenChanged", event);
			},
			toggle:function(event){
				var self = this;
				var li = event.currentTarget;
				var children = jQuery(li).find(' > ul > li');
				if (children.is(':visible')) {
					children.hide('fast');
					//console.log("hide");
					jQuery(li).attr("title","点击展开");
				} else {
					children.show('fast');
					//console.log("show");
					jQuery(li).attr("title","点击收起");
					// this.$nextTick(function(){
					// 	jQuery(children).on("click",self.toggle);
					// });
					
				}
			},
			chosenChanged: function (model, event) {
				if (event.currentTarget.checked) {
					this.$emit("chosenChanged", model);
				}
			},
		}
	}
</script>
<style scoped>
.sw{
	line-height: 26px!important;
}
</style>
