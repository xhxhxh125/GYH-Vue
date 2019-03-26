<template>
	<div class="smart-form">
        <div class="input-group input-range">
            <input v-if="type!='date'" :placeholder="minPlaceHolder" type="number" class="num input-sm form-control" name="start" v-model="minVal"   @keyup.13="done($event)">
            <input v-if="type=='date'" :placeholder="minPlaceHolder"  onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" type="text" class="input-sm form-control" name="start" v-model="minVal"  @keyup.13="done($event)">
            <span class="input-group-addon">to</span>
            <input  v-if="type!='date'" :placeholder="maxPlaceHolder"  type="number" class="num input-sm form-control" name="end" v-model="maxVal"  @keyup.13="done($event)">
            <input  v-if="type=='date'" :placeholder="maxPlaceHolder"  onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" type="text" class="input-sm form-control" name="start" v-model="maxVal"  @keyup.13="done($event)">
        </div>
	</div>
</template>
<script>
export default {
  name: "el-regioninput",
  props: ["max","min","type","minPlaceHolder","maxPlaceHolder"],
  data: function() {
    return {
        minVal:"",
        maxVal:"",
        value:null,
        dateFmt:'yyyy-MM-dd'
    };
  },
  components: {},
  mounted: function() {},
  created: function() {
      if(this.type=='datetime'){
          this.dateFmt = "yyyy-MM-dd HH:mm:ss";
      }
  },
  watch:{
      max:function(newVal,oldVal){
          this.maxVal = max;
      },
      min:function(newVal,oldVal){
          this.minVal = min;
      },
      minVal:function(newVal,oldVal){
          this.value = newVal+","+this.maxVal;
          this.$emit("change",this.value);
      }
      ,
      maxVal:function(newVal,oldVal){
          this.value = this.minVal+","+newVal;
          this.$emit("change",this.value);
      }
  },
  methods: {
    done:function(event){
        this.$emit("inputDone",this.value);
    }
  }
};
</script>
<style scoped>
input{
    height: 32px!important;
    line-height: 32px!important;
}
    .input-group {
    position: relative;
    display: table;
    border-collapse: separate;
}
.input-group .form-control {
    position: relative;
    z-index: 2;
    float: left;
    width: 100%;
    margin-bottom: 0;
}
.num{
    padding-right: 0!important;
}
.input-range input {
    text-align: center;
}
.input-range{
    width:100%!important;
}
.input-range .input-group-addon {
    width: auto;
    min-width: 16px;
    padding: 4px 5px;
    font-weight: normal;
    line-height: 1.428571429;
    text-align: center;
    text-shadow: 0 1px 0 #fff;
    vertical-align: middle;
    background-color: #eeeeee;
    border-width: 1px 0;
    margin-left: -5px;
    margin-right: -5px;
}
</style>
