<template>
	<section>
        <input  v-if="type=='date'" :placeholder="placeHolder"  onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" type="text" :class="styleClass"  @change="valueChanged($event)">
        <input  v-if="type=='time'" :placeholder="placeHolder"  onclick="WdatePicker({dateFmt:'HH:mm:ss'})" type="text" :class="styleClass"  @change="valueChanged($event)">
        <input  v-if="type=='datetime'" :placeholder="placeHolder"  onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" type="text" :class="styleClass"  @change="valueChanged($event)">
	</section>
</template>
<script>
export default {
  name: "el-datetimeinput",
  props: ["type","value","styleClass","placeHolder"],
  data: function() {
    return {
        dvalue:null
    };
  },
  watch:{
      dvalue:function(newVal,oldVal){
          console.log("into _value watch.");
          console.log(newVal);
      }
  },
  components: {},
  mounted: function() {},
  created: function() {},
  methods: {
    valueChanged:function(event){
        console.log(event);
        this.$emit("valueChanged",event.currentTarget.value);
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
