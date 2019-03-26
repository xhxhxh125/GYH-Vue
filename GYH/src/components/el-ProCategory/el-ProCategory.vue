<template>
    <div class="smart-form row">
        <section class="col col-4">
            <label class="label">{{required?"*":""}}产品类别</label>
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