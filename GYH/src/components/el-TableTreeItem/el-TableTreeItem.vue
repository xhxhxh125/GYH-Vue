<template>
	<table class="table table-bordered table-striped table-condensed table-hover smart-form has-tickbox nowrap" width="100%">
        <thead>
            <tr>
                <th colspan="4">菜单名称</th>
                <th>菜单code</th>
                <th>url</th>
            </tr>
        </thead>
        <tbody>

            <template v-for="(item,index) in datalist">
                <tr :key="index" class="row-show">
                    <td colspan="4" class="checktd-border">
                        <label class="checkbox">
                            <input type="checkbox" :name="'menu_checkbox_'+item.menu_code" :checked="checkedMenus.indexOf('@'+item.menu_code+'@') >= 0" @change="menuCheckChanged($event,item)">
                            <i></i>
                        </label>
                        <label style="padding-left:30px;">{{item.menu_name}}</label>
                    </td>
                    <td>
                        <label>{{item.menu_code}}</label>
                    </td>
                    <td>
                        <label>{{item.menu_url}}</label>
                    </td>
                </tr>
                <template v-if="item!=undefined&&item.children!=undefined&&item.children.length>0">
                    <template v-for="(menu2,index) in item.children">
                        <tr :key="index" class="details-tr">
                            <td class="spacetab"></td>
                            <td colspan="3" class="checktd-border">
                                <label class="checkbox">
                                    <input type="checkbox" :name="'menu_checkbox_'+menu2.menu_code" :checked="checkedMenus.indexOf('@'+menu2.menu_code+'@') >= 0" @change="menuCheckChanged($event,menu2)">
                                    <i></i>
                                </label>
                                <label>{{menu2.menu_name}}</label>
                            </td>
                            <td>
                                <label>{{menu2.menu_code}}</label>
                            </td>
                            <td>
                                <label>{{menu2.menu_url}}</label>
                            </td>
                        </tr>
                        <template v-if="menu2!=undefined&&menu2.children!=undefined&&menu2.children.length>0">
                            <template v-for="(menu3,index) in menu2.children">
                                <tr :key="index" class="details-tr">
                                    <td class="spacetab"></td>
                                    <td class="spacetab"></td>
                                    <td colspan="2" class="checktd-border">
                                        <label class="checkbox">
                                            <input type="checkbox" :name="'menu_checkbox_'+menu3.menu_code" :checked="checkedMenus.indexOf('@'+menu3.menu_code+'@') >= 0" @change="menuCheckChanged($event,menu3)">
                                            <i></i>
                                        </label>
                                        <label>{{menu3.menu_name}}</label>
                                    </td>
                                    <td>
                                        <label>{{menu3.menu_code}}</label>
                                    </td>
                                    <td>
                                        <label>{{menu3.menu_url}}</label>
                                    </td>
                                </tr>
                                <template v-if="menu3!=undefined&&menu3.children!=undefined&&menu3.children.length>0">
                                    <template v-for="(menu4,index) in menu3.children">
                                        <tr :key="index" class="details-tr">
                                            <td class="spacetab"></td>
                                            <td class="spacetab"></td>
                                            <td class="spacetab"></td>
                                            <td class="checktd-border">
                                                <label class="checkbox">
                                                    <input type="checkbox" :name="'menu_checkbox_'+menu4.menu_code" :checked="checkedMenus.indexOf('@'+menu4.menu_code+'@') >= 0" @change="menuCheckChanged($event,menu4)">
                                                    <i></i>
                                                </label>
                                                <label>{{menu4.menu_name}}</label>
                                            </td>
                                            <td>
                                                <label>{{menu4.menu_code}}</label>
                                            </td>
                                            <td>
                                                <label>{{menu4.menu_url}}</label>
                                            </td>
                                        </tr>
                                    </template>
                                </template>
                            </template>
                        </template>
                    </template>
                </template>
            </template>

        </tbody>
    </table>
</template>
<script>
import ElTableTreeItemChild from "components/el-TableTreeItemChild/el-TableTreeItemChild";
export default {
	name: 'el-tabletreeitem',
	props: ["datalist", "showheader"],
	data: function() {
		return {
			checkedMenus:[]
		};
	},
	components: {
		ElTableTreeItemChild
  	},
	mounted: function() {
		
	},
	created: function() {
        
	},
	methods: {
        setCheckedMenu:function(menus){
            this.checkedMenus=menus;
        },
		menuCheckChanged:function(e,menu){
			this.$emit("menuCheckChanged",{checked:e.target.checked,menu:menu});
		},
	}
}
</script>
<style>
    .table-condensed.table>tbody>tr>td.checktd-border
    {
        border-left: 2px solid #ddd;
        border-bottom: 1px solid #ddd;
    }

    .table-condensed.table>tbody>tr>td.spacetab{
        padding: 0!important;
        width: 19px;
        border-top: none;
        border-left-width: 2px;
    }

    .table-condensed.table>tbody>tr>td.checktd-border .checkbox +label
    {
        padding-left:30px;
    }

    .smart-form .checkbox {
        margin-bottom: 0;
    }
</style>
