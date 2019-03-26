<template>
	<!-- #PAGE FRAME -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" v-if="ref_data!=null && ref_data.para!=null">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title">
              {{ref_data.para.column_name}}
            </h4>
          </div>
          <div class="modal-body no-padding">

            <form id="ref-form" class="smart-form" @change="formChanged">
              <!-- <fieldset>
                <div class="row">
                  <section class="col" v-for="(row,index) in ref_data.oldValues" :key="index" v-if="ref_data.selectedKeys.indexOf(row.key)>=0">
                    <label class="checkbox">
                      <input type="checkbox" checked @change="oldValChanged(row,$event)">
                      <i></i>{{row.value}}
                    </label>
                  </section>

                  <section class="col" v-for="(row,index) in ref_data.selectedRows" :key="index">
                    <label class="checkbox">
                      <input type="checkbox" checked @change="selectedValChanged(row,$event)">
                      <i></i>{{row.display_text}}
                    </label>
                  </section>

                </div>
              </fieldset> -->

              <fieldset v-if="ref_data!=undefined && ref_data!=null">
                <div class="row">
                  <section class="col col-sm-12">
                    <label class="input">
                      查询条件
                    </label>
                  </section>


                  <div v-for="(para,index) in ref_data.query_fields" :key="index">

                    <section v-if="para.data_type==0 && para.is_enum_data!=1" class="col col-3">
                      <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                      <label class="input">
                        <input type="text" name="text" v-model="para.value">
                      </label>
                    </section>

                    <section v-if="para.data_type==1 && para.is_region_data!=1 && para.is_enum_data!=1" class="col col-3">
                      <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                      <label class="input">
                        <i class="icon-append fa unit" v-if="para.unit!=null && para.unit!=undefined && para.unit.length>0">{{para.unit}}</i>
                        <input type="text" name="num" v-model="para.value">
                      </label>
                    </section>


                    <section v-if="para.data_type==2" class="col col-sm-12">
                      <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                      <div class="textarea">
                        <textarea rows="5" width="100%" v-model="para.value"></textarea>
                      </div>
                    </section>


                    <section v-if="para.data_type==7 || para.is_region_data==1" class="col col-6">
                      <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}({{para.unit}})</label>
                      <label class="input col col-6 nopaddingl rl">

                        <input type="text" v-model="para.mininput">
                      </label>
                      <label class="nopaddingl col to">—</label>
                      <label class="input col col-6 nopaddingl rr">
                        <input type="text" v-model="para.maxinput">
                      </label>
                    </section>

                    <section v-if="(para.data_type==8||para.is_enum_data==1)  && para.enum_type==0" class="col col-3">
                      <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                      <label class="select">
                        <select name="country" v-model="para.value">
                          <option v-for="ch in para.enum_list" :key="ch.enum_code" :value="ch.enum_code">{{ch.enum_name}}</option>
                        </select>
                        <i></i>
                      </label>
                    </section>

                    <fieldset v-if="(para.data_type==8||para.is_enum_data==1) && para.enum_type==1" class="border col col-sm-12">
                      <section>
                        <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                        <div class="inline-group">
                          <label class="checkbox" v-for="ch in para.enum_list" :key="ch.enum_code">
                            <input type="checkbox" :checked="checkEnumValue(ch.enum_code,para)" name="checkbox-inline" @change="enumParaChanged(ch.enum_code,para,$event)">
                            <i></i>{{ch.enum_name}}</label>
                        </div>
                      </section>
                    </fieldset>

                    <section v-if="para.data_type==9" class="col col-3">
                      <label class="label">{{para.is_required=='1'?'*':''}}{{para.column_name}}</label>
                      <label class="input">
                        <section v-if="para.value!=null && para.value!=undefined && para.value.indexOf('{')>=0">
                          <a :href="v.href" target="_blank" class="btn pull-left" v-for="(v,ridx) in JSON.parse(para.value)" :key="ridx">{{(ridx>0?",":"")+v.value}}</a>
                        </section>
                        <a href="javascript:void(0);" class="btn pull-left btn-info" @click="editRefParameter(para)">
                          <i class="fa fa-edit"></i>编辑</a>
                      </label>
                    </section>
                  </div>
                </div>
              </fieldset>
              <footer>
                <a class="btn btn-primary pull-left" href="javascript:void(0);" @click="queryRefPara()">
                  <i class="fa fa-search"></i> 查询</a>
              </footer>
              <fieldset>
                <div>
                  <div>
                    <div class="jarviswidget-editbox">
                    </div>
                    <div class="widget-body no-padding" v-if="ref_data!=null">
                      <table class="table table-striped table-bordered table-hover" width="100%">
                        <thead>
                          <tr>
                            <th style="width: 30px;">
                              <!-- <label class="checkbox">
                                <input type="checkbox" v-model="selectAll">
                                <i></i>全选
                              </label> -->
                            </th>
                            <th v-for="head in ref_data.headers" :key="head.id" v-if="head.name!='' && head.name!=null">{{head.name}}</th>
                          </tr>
                        </thead>
                        <tbody v-if="ref_data!=null">
                          <tr class="row-show" v-for="(row,index) in ref_data.rows" :key="index">
                            <td>
                              <!-- <label class="checkbox">
                                <input type="checkbox" :checked="ref_data.selectedRows.indexOf(row)>=0 || ref_data.selectedKeys.indexOf(row.cols.find(x=>x.id=ref_data.key_column_id).value)>=0"
                                  @change="selectRefPara(row,$event)">
                                <i></i>
                              </label> -->
                              <label class="radio">
                                <input type="radio" @click="refParaClicked(row,$event)" name="refradio">
                                <i></i>
                              </label>
                            </td>
                            <td v-for="(para,pidx) in row.cols" :key="pidx" v-if="para.name!='' && para.name!=null">
                              <label>{{para.value}}{{(para.value!="" && para.data_type==1) ?para.unit:""}}</label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- <ElPager :pageTotal="query_data.pageTotal" @changePage="changePage"></ElPager> -->
                  </div>
                </div>
              </fieldset>

              <footer>
                <button type="button" class="btn btn-primary" @click="confirmRefPara()">
                  确定
                </button>
                <button type="button" class="btn btn-default" data-dismiss="modal" @click="cancelRefPara()">
                  取消
                </button>

              </footer>
            </form>


          </div>

        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
	<!-- END FRAME -->
</template>
<script>


export default {
	name: 'el-refmodal',
	props: ["param"],
	data: function() {
		return {
            ref_data:{
                query_fields:null,//被引用的表的查询条件
                headers:null,
                rows:null,
                cols:null
            },
            keyword:null,//输入的查询关键词
            results:null,//查询结果列表
		};
	},
	components: {
		
	},
	mounted: function() {
		//  console.log("into mounted.");
	},
	created: function() {
		//console.log("into created。");
	},
	methods: {
        //获取引用类型的查询条件
        getQueryFields:function(){
            var data={
                category_code:this.param.table_id
            };
            $.post_json(appsettings.apiroot+"parameter/reference/init",data,this.callback_getQueryFields);
        },
        callback_getQueryFields:function(result){
            if(result!=null && result.status==0){
                this.ref_data.query_fields = result.data;
            }else{
                //failed
            }
        },
		//根据关键词查询被引用的数据，返回列表
        getRefDatas:function(){
            var data={
                table_id:this.param.table_id, //引用表的table_id
                keyword:this.keyword  //输入的查询条件
            };
            $.post_json(appsettings.apiroot+"",data,this.callback_getRefDatas);
        },
        callback_getRefDatas:function(result){
            if(result!=null && result.status==0){
                this.results = result.data;
            }else{
                //failed
            }
        },
        //在点击“确定”时，返回被选中的引用数据
        confirm:function(){
            this.$emit('categoryChanged', event.currentTarget.value,this.selectedCats);
        },
	}
}
</script>
<style>

</style>
