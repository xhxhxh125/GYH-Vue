<template>
    <!-- <div class="smart-form row">
        

            <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
              <label class="mb-0 label">{{required?"*":""}}产品类别</label>
            </div>
            
            <div class="col-md-9 align-self-center row">
              <div class="col-md-9 align-self-center">
                <div class="row g-mx-minus-10">

                  <div class="col-md align-self-center g-px-10 g-mb-20 g-mb-0--md">
                    <div class="form-group u-select--v2 g-pos-rel g-brd-gray-light-v7 g-rounded-4 mb-0">
                      <span
                        class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                        <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                      </span>
                      <select class="js-select u-select--v2-select w-100" @change="firstCatChanged($event)" id="firstprocat">
                        <option value=""></option>
                        <option :selected="selected_1st_cat==cat.code" :value="cat.code" v-for="(cat,index) in firstcats" :key="index">{{cat.name}}</option>
                      </select>
                      <i class="hs-admin-angle-down g-absolute-centered--y g-right-0 g-color-gray-light-v6 ml-auto g-mr-15"></i>
                    </div>
                  </div>

                  <div class="col-md align-self-center g-px-10 g-mb-20 g-mb-0--md">
                    <div class="form-group u-select--v2 g-pos-rel g-brd-gray-light-v7 g-rounded-4 mb-0">
                      <span
                        class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                        <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                      </span>
                      <select class="js-select u-select--v2-select w-100" @change="secondCatChanged($event)">
                        <option value=""></option>
                        <option :selected="selected_2nd_cat==cat.code" :value="cat.code" v-for="(cat,index) in secondcats" :key="index">{{cat.name}}</option>
                      </select>
                      <i
                        class="hs-admin-angle-down g-absolute-centered--y g-right-0 g-color-gray-light-v6 ml-auto g-mr-15"></i>
                    </div>
                  </div>

                  <div class="col-md align-self-center g-px-10 g-mb-20 g-mb-0--md">
                    <div class="form-group u-select--v2 g-pos-rel g-brd-gray-light-v7 g-rounded-4 mb-0">
                      <span
                        class="g-pos-abs g-top-0 g-right-0 d-block g-width-40 h-100 opacity-0 g-opacity-1--success">
                        <i class="hs-admin-check g-absolute-centered g-font-size-default g-color-secondary"></i>
                      </span>
                      <select class="js-select u-select--v2-select w-100" @change="thirdCatChanged($event)">
                        <option value=""></option>
                        <option :value="cat.code" :selected="selected_3rd_cat==cat.code" v-for="(cat,index) in thirdcats" :key="index">{{cat.name}}</option>
                      </select>
                      <i
                        class="hs-admin-angle-down g-absolute-centered--y g-right-0 g-color-gray-light-v6 ml-auto g-mr-15"></i>
                    </div>
                  </div>

                </div>
              </div>
            </div>

        <section class="row g-mb-20">
          <label class="select">
              <select @change="firstCatChanged($event)" id="firstprocat">
                  <option value=""></option>
                  <option :selected="selected_1st_cat==cat.code" :value="cat.code" v-for="(cat,index) in firstcats" :key="index">{{cat.name}}</option>
              </select>
              <i></i>
          </label>
        </section>
        <section class="col col-4">
            <label class="label">&nbsp;</label>
            <label class="select">
                <select @change="secondCatChanged($event)">
                    <option value=""></option>
                    <option :selected="selected_2nd_cat==cat.code" :value="cat.code" v-for="(cat,index) in secondcats" :key="index">{{cat.name}}</option>
                </select>
                <i></i>
            </label>
        </section>
        <section class="col col-4">
            <label class="label"> &nbsp;</label>
            <label class="select">
                <select @change="thirdCatChanged($event)">
                    <option value=""></option>
                    <option :value="cat.code" :selected="selected_3rd_cat==cat.code" v-for="(cat,index) in thirdcats" :key="index">{{cat.name}}</option>
                </select>
                <i></i>
            </label>
        </section>

    </div> -->
    <div class="row g-mb-20">

        <section class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
          <label class="mb-0">{{required?"*":""}}产品类别</label>
        </section>
        <div class="col-md-9 align-self-center row">
          <section class="col-md-9 align-self-center">
            <div class="row g-mx-minus-10">
              <div class="col-md align-self-center g-px-10 g-mb-20 g-mb-0--md">
                <!-- <div class="form-group u-select--v2 g-pos-rel g-brd-gray-light-v7 g-rounded-4 mb-0"> -->
                <label class="select w-100">
                  <select  @change="firstCatChanged($event)" id="firstprocat" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12">
                    <option :selected="selected_1st_cat==cat.code" :value="cat.code" v-for="(cat,index) in firstcats" :key="index">{{cat.name}}</option>
                  </select>
                  <i></i> 
                </label>
              </div>


              <div class="col-md align-self-center g-px-10 g-mb-20 g-mb-0--md">
                <label class="select w-100">
                  <select @change="secondCatChanged($event)" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12">
                    <option value=""></option>
                    <option :selected="selected_2nd_cat==cat.code" :value="cat.code" v-for="(cat,index) in secondcats" :key="index">{{cat.name}}</option>
                  </select>
                  <i></i> 
                </label>
              </div>


              <div class="col-md align-self-center g-px-10 g-mb-20 g-mb-0--md">
                <label class="select w-100">
                  <select @change="thirdCatChanged($event)" class="form-control h-100 form-control-md g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-brd-primary--error g-rounded-4 g-px-20 g-py-12">
                    <option value=""></option>
                    <option :value="cat.code" :selected="selected_3rd_cat==cat.code" v-for="(cat,index) in thirdcats" :key="index">{{cat.name}}</option>
                  </select>
                  <i></i> 
                </label>
              </div>
            </div>
          </section>
          <div class="col-md-3 align-self-center g-mb-5 g-mb-0--md">
            <button class="btn btn-xl u-btn-secondary g-font-size-default g-px-40 btn-primary" @click="createNewProduct()">新建产品</button>
          </div>
        </div>

    </div>
</template>
<script>
export default {
  name: "el-procategory",
  props: ["category", "adminEdit", "required"],
  data: function() {
    return {
      firstcats: null,
      secondcats: null,
      thirdcats: null,
      selected_1st_cat: null,
      selected_2nd_cat: null,
      selected_3rd_cat: null,
      temp_cat: null,
      selectedCats: [],
      inited: false
    };
  },
  components: {},
  mounted: function() {},
  created: function() {
    this.temp_cat = this.category;
    if (this.temp_cat != null) {
      if (this.temp_cat.length > 1) {
        this.selected_1st_cat = this.temp_cat.substring(0, 2);
        this.getSecondCats();
      }
      if (this.temp_cat.length > 3) {
        this.selected_2nd_cat = this.temp_cat.substring(0, 4);
        this.getThirdCats();
      }
      if (this.temp_cat.length > 5) {
        this.selected_3rd_cat = this.temp_cat;
      }
    } else {
      this.inited = true;
    }
    //get first cats
    this.getFirstCats();
  },
  watch: {
    category: function(newVal, oldVal) {
      if (newVal == null || newVal == undefined) {
        return;
      }
      if (newVal.length > 1) {
        this.selected_1st_cat = newVal.substring(0, 2);
        this.getSecondCats();
      }
      if (newVal.length > 3) {
        this.selected_2nd_cat = newVal.substring(0, 4);
        this.getThirdCats();
      }
      if (newVal.length > 5) {
        this.selected_3rd_cat = newVal;
      }
    }
  },
  methods: { 
    createNewProduct(){
      this.$emit('createNewProduct')
    },
    refresh: function(level) {
      switch (level) {
        case 1:
          this.getFirstCats();
          break;
        case 2:
          this.getSecondCats();
          break;
        case 3:
          this.getThirdCats();
          break;
      }
    },
    getFirstCats: function() {
      var data = {};
      data.level = 1;
      $.post_json(
        appsettings.apiroot +
          (this.adminEdit === true ? "admin/" : "") +
          "product/category/retrieve",
        data,
        this.callback_getFirstCats,
        data
      );
    },
    firstCatChanged: function(event) {
      this.selectedCats = [];
      var index = event.target.selectedIndex;
      console.log(index,1111)
      if (index > 0) {
        this.selectedCats.push(this.firstcats[index - 1]);
      }
      this.selected_1st_cat = event.currentTarget.value;
      this.$emit(
        "categoryChanged",
        event.currentTarget.value,
        this.selectedCats
      );
      this.secondcats = [];
      this.thirdcats = [];
      this.selected_2nd_cat = null;
      this.selected_3rd_cat = null;
      if (this.selected_1st_cat.length > 0) {
        this.getSecondCats();
      } else {
        this.getFirstCats();
      }
    },
    secondCatChanged: function(event) {
      var index = event.target.selectedIndex;
      this.selectedCats = [this.selectedCats[0]];
      if (index > 0) {
        this.selectedCats.push(this.secondcats[index - 1]);
      }

      this.selected_2nd_cat = event.currentTarget.value;
      this.$emit(
        "categoryChanged",
        event.currentTarget.value,
        this.selectedCats
      );
      this.thirdcats = [];
      this.selected_3rd_cat = null;
      if (this.selected_2nd_cat.length > 0) {
        this.getThirdCats();
      } else {
        this.getSecondCats();
      }
    },
    thirdCatChanged: function(event) {
      var index = event.target.selectedIndex;
      this.selectedCats = [this.selectedCats[0], this.selectedCats[1]];
      if (index > 0) {
        this.selectedCats.push(this.thirdcats[index - 1]);
      }
      this.selected_3rd_cat = event.currentTarget.value;
      this.$emit(
        "categoryChanged",
        event.currentTarget.value,
        this.selectedCats
      );
    },
    getThirdCats: function() {
      var data = {};
      data.level = 3;
      data.parent_code = this.selected_2nd_cat;
      $.post_json(
        appsettings.apiroot +
          (this.adminEdit === true ? "admin/" : "") +
          "product/category/retrieve",
        data,
        this.callback_getThirdCats,
        data
      );
    },
    callback_getThirdCats: function(result, parentdata) {
      if (result != null && result.status == 0) {
        this.thirdcats = result.data;
        if (this.inited === true) {
          this.$emit("gotChildren", parentdata, this.thirdcats);
        } else {
          var cat = {};
          cat = this.thirdcats.find(x => x.code == this.selected_3rd_cat);
          if (this.selectedCats.length < 3) {
            for (var i = 0; i < 3 - this.selectedCats.length; i++) {
              this.selectedCats.push(cat);
            }
          } else {
            this.selectedCats[3] = cat;
          }
          if (this.selectedCats.length == 3) {
            this.inited = true;
            this.$emit(
              "categoryChanged",
              this.selected_3rd_cat,
              this.selectedCats
            );
          }
        }
      } else {
      }
    },
    getSecondCats: function() {
      var data = {};
      data.level = 2;
      data.parent_code = this.selected_1st_cat;
      $.post_json(
        appsettings.apiroot +
          (this.adminEdit === true ? "admin/" : "") +
          "product/category/retrieve",
        data,
        this.callback_getSecondCats,
        data
      );
    },
    callback_getSecondCats: function(result, parentdata) {
      if (result != null && result.status == 0) {
        this.secondcats = result.data;
        if (this.inited === true) {
          this.$emit("gotChildren", parentdata, this.secondcats);
        } else {
          var cat = {};
          cat = this.secondcats.find(x => x.code == this.selected_2nd_cat);
          if (this.selectedCats.length < 2) {
            for (var i = 0; i < 2 - this.selectedCats.length; i++) {
              this.selectedCats.push(cat);
            }
          } else {
            this.selectedCats[1] = cat;
          }
          if (this.selectedCats.length == 3) {
            this.inited = true;
          }
        }
        if (this.selected_3rd_cat != null && this.selected_3rd_cat.length > 0) {
          this.getThirdCats();
        }
      } else {
      }
    },
    callback_getFirstCats: function(result, parentdata) {
      // console.log("ccccccccccccccc");
      if (result != null && result.status == 0) {
        this.firstcats = result.data;
        if (this.inited === true) {
          this.$emit("gotChildren", parentdata, this.firstcats);
        } else {
          var cat = {};
          cat = this.firstcats.find(x => x.code == this.selected_1st_cat);
          if (this.selectedCats.length < 1) {
            this.selectedCats.push(cat);
          } else {
            this.selectedCats[0] = cat;
          }
          if (this.selectedCats.length == 3) {
            this.inited = true;
          }
        }
        if (this.selected_2nd_cat != null && this.selected_2nd_cat.length > 0) {
          this.getSecondCats();
        }
      } else {
      }
    }
  }
};
</script>
<style scoped>
</style>