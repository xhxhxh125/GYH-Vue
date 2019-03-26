<template>
  <section style="border-color: #e1eaea !important;">
        <input type="text" :id="'input_'+id" autocomplete="off" class="form-control g-resize-none g-line-height-1_6 g-brd-gray-light-v7 g-brd-lightblue-v3--focus" :placeholder="placeHolder" v-model="company_name" @change="companyNameChange" @blur="companyNameBlur">
    </section>
</template>
<script>
    import "common/httputils"; //引用js
    export default {
	name: 'el-companyintellisense',
	props: ["id","comname","placeHolder","styleclass","entity"],
	data: function() {
		return {
            companylist:[],
            selectedCompany:null,
            company_name:null,
            data_index:null,

            selector:".typeahead_1",
		};
	},
	mounted: function() {
        this.company_name = this.comname;
        this.data_Entity = this.entity;
        var self = this;
        if(this.id!=null&&this.id!=undefined){
            this.selector="#input_"+this.id;
        }
        console.log(this.selector);
        jQuery(this.selector).typeahead({
                source: function(query,process){
                    var data = {};
                    data.keyword = query;
                    $.post_json(appsettings.apiroot+"company/intellisense",data,function(result){
                        if(result.data==null){
                            return [];
                        }else{
                            return process(result.data);
                        }
                    });
                },
                updater: function(item) {
                  //  console.log(item);
                  $("ul.typeahead").hide();
                    self.selectedCompany = item;
                    self.company_name = item.name;
                    self.$emit("companyChanged",item);
                    self.$emit("itemCompanyChanged",[this.data_Entity,item]);
                 }
                });

        setTimeout(function(){
            self.company_name = self.comname;
        },10);
	},
	created: function() {
		//选中列表发生变化
    },
    watch:{
       comname:function(newVal,oldVal){
           if(newVal!=undefined){
           this.company_name = newVal;
           }
       
       }
    },
	methods: {
        companyNameBlur:function(){
            if(this.selectedCompany==null||this.selectedCompany==undefined){
                this.$emit("companyChanged",{name:this.company_name});
            }
        },
        companyNameChange:function(){
            this.selectedCompany=null;
        }
	}
}
</script>
