<template>
  <div class="col-md-3 g-mb-30 g-mb-0--md">
    <div class="h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-20--md">
      <!-- Profile Sidebar -->
      <section>
        <ul class="list-unstyled mb-0">
          <li class="g-brd-top g-brd-gray-light-v7 mb-0" v-for="(item,index) in menu" :key="item" @click="gotoAddress(index)">
            <a class="d-flex align-items-center u-link-v5 g-parent g-py-15" :class="{'active' :activeIndex==index}"
              >
              <span
                class="g-color-gray-dark-v6 g-color-primary--parent-hover g-color-primary--parent-active">{{item.name}}</span>
            </a>
          </li>
        </ul>
      </section>
      <!-- End Profile Sidebar -->
    </div>
  </div>
</template>

<script>
//import 'assets/common/js/app.min.js';    //引用js

export default {
  name: "el-aside",
  props: ["a", "b"],
  data: function() {
    return {
      menu: [
        {
          href:'/p/edit.html',
          name:'基本信息'
        },
        {
          href:'../4-product/4-product-edit-parameter.html',
          name:'参数信息'
        },
        {
          href:'/p/edit_video.html',
          name:'产品视频'
        },
        {
          href:'/p/edit_img.html',
          name:'产品图库'
        },
        {
          href:'/p/edit_file.html',
          name:'上传产品附件'
        },
        {
          href:'../4-product/4-product-case.html',
          name:'案例维护'
        }
      ],
      activeIndex:3
    };
  },
  mounted: function() {
    
  },
  created: function() {
    console.log('侧边栏组件被调用了')
  },

  methods: {
    gotoAddress(index){
      console.log('子组件触发');
      
        this.activeIndex = index
      }
  }
};
</script>

<style>

</style>
