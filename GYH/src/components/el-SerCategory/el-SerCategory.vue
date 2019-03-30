<template>
	<div class="smart-form row">
        <section class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
            <label class="label">{{required?"*":""}}服务类别</label>
            <!-- <label class="select ">
            <select  @change="firstCatChanged($event)" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12">
                <option :selected="selected_1st_cat==cat.code" :value="cat.code" v-for="(cat,index) in firstcats" :key="index">{{cat.name}}</option>
            </select> <i></i> </label> -->
        </section>

        <section class="col-md-9 align-self-center">
          <div class="row g-mx-minus-10">
            <div class="col-md align-self-center g-px-10 g-mb-20 g-mb-0--md">
              <!-- <div class="form-group u-select--v2 g-pos-rel g-brd-gray-light-v7 g-rounded-4 mb-0"> -->
              <label class="select w-100">
                <select  @change="firstCatChanged($event)" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12">
                    <option :selected="selected_1st_cat==cat.code" :value="cat.code" v-for="(cat,index) in firstcats" :key="index">{{cat.name}}</option>
                </select> <i></i> 
              </label>
            </div>

                  <label class="label">&nbsp;</label>

            <div class="col-md align-self-center g-px-10 g-mb-20 g-mb-0--md">
              <label class="select w-100">
                <select @change="secondCatChanged($event)" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12">
                    <option :selected="selected_2nd_cat==cat.code" :value="cat.code" v-for="(cat,index) in secondcats" :key="index">{{cat.name}}</option>
                </select> <i></i> 
              </label>
            </div>
          </div>
        </section>

	</div>
</template>
<script>
export default {
  name: "el-procategory",
  props: ["category", "required"],
  data: function() {
    return {
      firstcats: null,
      secondcats: null,
      thirdcats: null,
      selected_1st_cat: null,
      selected_2nd_cat: null,
      tmp_cat: null
    };
  },
  components: {},
  mounted: function() {},
  created: function() {
    this.tmp_cat = this.category;
    if (this.tmp_cat != null && this.tmp_cat.length > 0) {
      if (this.tmp_cat.length > 1) {
        this.selected_1st_cat = this.tmp_cat.substring(0, 2);
        this.getSecondCats();
      }
      if (this.tmp_cat.length > 2) {
        this.selected_2nd_cat = this.tmp_cat;
      }
    }
    //get first cats
    var data = {};
    data.level = 1;
    $.post_json(
      appsettings.apiroot + "service/getcats",
      data,
      this.callback_getFirstCats
    );
  },
  watch: {
    category: function(newVal, oldVal) {
      if (newVal.length > 1) {
        this.selected_1st_cat = newVal.substring(0, 2);
        this.getSecondCats();
      }
      if (newVal.length > 3) {
        this.selected_2nd_cat = newVal.substring(0, 4);
      }
    }
  },
  methods: {
    firstCatChanged: function(event) {
      var code = event.currentTarget.value;
      code = code == "00" ? "" : code;
      this.$emit("categoryChanged", code);
      this.selected_1st_cat = event.currentTarget.value;
      this.selected_2nd_cat = null;
      this.secondcats = [];
      this.getSecondCats();
    },
    secondCatChanged: function(event) {
      var code = event.currentTarget.value;
      code = code == "0000" ? "" : code;
      this.selected_2nd_cat = code;
      this.$emit("categoryChanged", code);
    },
    getSecondCats: function() {
      var data = {};
      data.level = 2;
      data.code = this.selected_1st_cat;
      $.post_json(
        appsettings.apiroot + "service/getcats",
        data,
        this.callback_getSecondCats
      );
    },
    callback_getSecondCats: function(result) {
      if (result != null && result.status == 0) {
        this.secondcats = result.data;
      } else {
      }
    },
    callback_getFirstCats: function(result) {
      if (result != null && result.status == 0) {
        this.firstcats = result.data;
      } else {
      }
    }
  }
};
</script>
<style scoped>
</style>
