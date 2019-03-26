<template>
	<table cellpadding="5" cellspacing="0" class="table table-hover table-condensed">
        <tbody>
			<template v-for="(item,index) in datalist">
            <tr :key="index">
                <td style="border-top: none; width:19px;">
                    <label class="checkbox">
                        <input type="checkbox" :name="'menu_checkbox_'+item.menu_code" @change="menuCheckChanged(item)">
                        <i></i>
                    </label>
                </td>
                <td>
                    <label>{{item.menu_name}}</label>
                </td>
                <td>
                    <label>{{item.menu_code}}</label>
                </td>
                <td>
                    <label>{{item.menu_url}}</label>
                </td>
            </tr>
            <tr :key="index" v-if="item!=undefined&&item.children" class="details-tr">
                <td colspan="4">
					<ElTableTreeItem :datalist="item.children" showheader="false"></ElTableTreeItem>
                </td>
            </tr>
			</template>
        </tbody>
    </table>
</template>
<script>
import ElTableTreeItem from "components/el-TableTreeItem/el-TableTreeItem";
export default {
	name: 'el-tabletreeitemchild',
	props: ["datalist"],
	data: function() {
		return {
			
		};
	},
	components: {
		ElTableTreeItem
  	},
	mounted: function() {
		
	},
	created: function() {
		
	},
	methods: {
		menuCheckChanged:function(e){
			
		},
	}
}
</script>
<style>

</style>
