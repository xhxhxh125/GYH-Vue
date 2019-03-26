<template>
	<div class="no-padding">
		<!-- <div class="paging_simple_numbers">
			<ul class="pagination">
				<li class="paginate_button previous" :class="currentIndex==1?'disabled':''" @click="previousClick()">
					<a href="javascript:void(0);">上一页</a>
				</li>
				<li class="paginate_button previous" :class="currentIndex==1?'active':''" @click="numberClick(1)">
					<a href="javascript:void(0);">1</a>
				</li>

				<template v-if="(currentIndex==4)&&pageTotal==4">
					<li v-for="n in 4" :key="n" v-if="n>1&&n<pageTotal" class="paginate_button" :class="currentIndex==n?'active':''" @click="numberClick(n)">
						<a href="javascript:void(0);">{{n}}</a>
					</li>
				</template>

				
				<template v-if="(currentIndex==1||currentIndex==2||currentIndex==3)&&pageTotal>2">
					<li v-for="n in 6" :key="n" v-if="n>1&&n<pageTotal" class="paginate_button" :class="currentIndex==n?'active':''" @click="numberClick(n)">
						<a href="javascript:void(0);">{{(n==6&&pageTotal>7)?'...':n}}</a>
					</li>
				</template>
				
				<template v-else-if="(currentIndex==pageTotal||currentIndex==pageTotal-1||currentIndex==pageTotal-2)&&pageTotal>6">
					<li v-for="n in pageTotal-1" :key="n" v-if="n>pageTotal-6&&n<pageTotal" class="paginate_button" :class="currentIndex==n?'active':''" @click="numberClick(n)">
						<a href="javascript:void(0);">{{(n==pageTotal-5&&pageTotal>7)?'...':n}}</a>
					</li>
				</template>
				
				<template v-else-if="(currentIndex>3&&currentIndex<pageTotal-2)&&pageTotal>6">
					<li v-if="currentIndex==4" class="paginate_button " @click="numberClick(currentIndex - 2)">
						<a href="javascript:void(0);">{{currentIndex - 2}}</a>
					</li>
					<li v-else class="paginate_button ">
						<a href="javascript:void(0);">...</a>
					</li>

					<li class="paginate_button " @click="numberClick(currentIndex - 1)">
						<a href="javascript:void(0);">{{currentIndex - 1}}</a>
					</li>
					<li class="paginate_button active" @click="numberClick(currentIndex)">
						<a href="javascript:void(0);">{{currentIndex}}</a>
					</li>
					<li class="paginate_button " @click="numberClick(currentIndex + 1)">
						<a href="javascript:void(0);">{{currentIndex + 1}}</a>
					</li>

					<li v-if="currentIndex==pageTotal-3" class="paginate_button " @click="numberClick(currentIndex + 2)">
						<a href="javascript:void(0);">{{currentIndex + 2}}</a>
					</li>
					<li v-else class="paginate_button " @click="numberClick(currentIndex + 2)">
						<a href="javascript:void(0);">...</a>
					</li>
				</template>

				<li v-if="pageTotal>1" class="paginate_button " :class="currentIndex==pageTotal?'active':''" @click="numberClick(pageTotal)">
					<a href="javascript:void(0);">{{pageTotal}}</a>
				</li>
				<li class="paginate_button next" :class="currentIndex==pageTotal?'disabled':''" @click="nextClick()">
					<a href="javascript:void(0);" >下一页</a>
				</li>
			</ul>
		</div> -->

		<div class="paging_simple_numbers">
			<ul class="pagination">
				<li class="paginate_button previous" :class="currentIndex==1?'disabled':''" @click="previousClick()">
					<a href="javascript:(0)">上一页</a>
				</li>
				<li class="paginate_button previous" :class="currentIndex==1?'active':''" @click="numberClick(1)">
					<a href="javascript:(0)">1</a>
				</li>

				<!-- <template v-if="(currentIndex==4)&&pageTotal==4">
					<li v-for="n in 4" :key="n" v-if="n>1&&n<pageTotal" class="paginate_button" :class="currentIndex==n?'active':''" @click="numberClick(n)">
						<a href="javascript:(0)">{{n}}</a>
					</li>
				</template> -->

				<!-- 当前页码为 1 2 3：从2向上遍历到6 -->
				<!-- <template v-if="pageTotal>=2 && (currentIndex<=4)">
					<li v-for="n in 6" :key="n" v-if="n>1&&n<pageTotal" class="paginate_button" :class="currentIndex==n?'active':''" @click="numberClick(n)">
						<a href="javascript:(0)">{{(n==6&&pageTotal>7)?'...':n}}</a>
					</li>
				</template> -->
				<template v-if="pageTotal<=6 && pageTotal>0">
					<li v-for="n in pageTotal-1" :key="n" v-if="n>1" class="paginate_button" :class="currentIndex==n?'active':''"
					 @click="numberClick(n)">
						<a href="javascript:(0)">{{n}}</a>
					</li>
				</template>

				<template v-if="pageTotal>6 && (currentIndex>pageTotal-3)">
					<li v-for="n in 2" :key="n" v-if="n>1" class="paginate_button" :class="currentIndex==n?'active':''" @click="numberClick(n)">
						<a href="javascript:(0)">{{n}}</a>
					</li>
				</template>

				<template v-if="pageTotal>6 && (currentIndex<5)">
					<li v-for="n in 5" :key="n" v-if="n>1" class="paginate_button" :class="currentIndex==n?'active':''" @click="numberClick(n)">
						<a href="javascript:(0)">{{n}}</a>
					</li>
					<li class="paginate_button">
						<a href="javascript:(0)">...</a>
					</li>
				</template>

				<template v-if="pageTotal>6 && (currentIndex>=5)">
					<li class="paginate_button">
						<a href="javascript:(0)">...</a>
					</li>
					<li v-for="n in currentIndex+1" :key="n" v-if="n>currentIndex-2 && n<currentIndex+2 && n<pageTotal" class="paginate_button"
					 :class="currentIndex==n?'active':''" @click="numberClick(n)">
						<a href="javascript:(0)">{{n}}</a>
					</li>
					<li class="paginate_button" v-if="currentIndex<pageTotal-2">
						<a href="javascript:(0)">...</a>
					</li>
				</template>

				<!-- <template v-else-if="pageTotal>6 && (currentIndex>=pageTotal-1)">
					<li v-for="n in currentIndex+1" :key="n" v-if="n>=pageTotal-1" class="paginate_button" :class="currentIndex==n?'active':''" @click="numberClick(n)">
						<a href="javascript:(0)">{{n}}</a>
					</li>
				</template> -->

				<!-- 
				<template v-if="pageTotal>=2 && (pageTotal<=6)">
					<li v-for="n in (pageTotal-1)" :key="n" v-if="n>1" class="paginate_button" :class="currentIndex==n?'active':''" @click="numberClick(n)">
						<a href="javascript:(0)">{{n}}</a>
					</li>
				</template>
				
				<template v-if="pageTotal>6 && (currentIndex<5)">
					<li v-for="n in 6" :key="n" v-if="n>1" class="paginate_button" :class="currentIndex==n?'active':''" @click="numberClick(n)">
						<a href="javascript:(0)">{{(n==6&&pageTotal>7)?'...':n}}</a>
					</li>
				</template>

				<template v-if="pageTotal>6 && (currentIndex<pageTotal-2)&& (currentIndex>=5)">
					<li v-for="n in 6" :key="n" v-if="n>1" class="paginate_button" :class="currentIndex==n?'active':''" @click="numberClick(n)">
						<a href="javascript:(0)">{{(n==6&&pageTotal>7)?'...':n}}</a>
					</li>
				</template>
 				-->
				<!-- 当前页码为 n-2 n-1 n：从n-1向下遍历到n-5 -->
				<!-- <template v-else-if="(currentIndex==pageTotal||currentIndex==pageTotal-1||currentIndex==pageTotal-2)&&pageTotal>6">
					<li v-for="n in pageTotal-1" :key="n" v-if="n>pageTotal-6&&n<pageTotal" class="paginate_button" :class="currentIndex==n?'active':''" @click="numberClick(n)">
						<a href="javascript:(0)">{{(n==pageTotal-5&&pageTotal>7)?'...':n}}</a>
					</li>
				</template> -->
				<!-- 当前页码为 4 ~ pageTotal-3 -->
				<!-- <template v-else-if="(currentIndex>3&&currentIndex<pageTotal-2)&&pageTotal>6">
					<li v-if="currentIndex==4" class="paginate_button " @click="numberClick(currentIndex - 2)">
						<a href="javascript:(0)">{{currentIndex - 2}}</a>
					</li>
					<li v-else class="paginate_button ">
						<a href="javascript:(0)">...</a>
					</li>

					<li class="paginate_button " @click="numberClick(currentIndex - 1)">
						<a href="javascript:(0)">{{currentIndex - 1}}</a>
					</li>
					<li class="paginate_button active" @click="numberClick(currentIndex)">
						<a href="javascript:(0)">{{currentIndex}}</a>
					</li>
					<li class="paginate_button " @click="numberClick(currentIndex + 1)">
						<a href="javascript:(0)">{{currentIndex + 1}}</a>
					</li>

					<li v-if="currentIndex==pageTotal-3" class="paginate_button " @click="numberClick(currentIndex + 2)">
						<a href="javascript:(0)">{{currentIndex + 2}}</a>
					</li>
					<li v-else class="paginate_button " @click="numberClick(currentIndex + 2)">
						<a href="javascript:(0)">...</a>
					</li>
				</template> -->

				<li v-if="pageTotal>1" class="paginate_button " :class="currentIndex==pageTotal?'active':''" @click="numberClick(pageTotal)">
					<a href="javascript:(0)">{{pageTotal}}</a>
				</li>
				<li class="paginate_button next" :class="currentIndex==pageTotal?'disabled':''" @click="nextClick()">
					<a href="javascript:(0)">下一页</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: "el-pager",
  props: ["pageTotal", "index"], //子组件中不可以修改props 单向流
  data: function() {
    return {
      currentIndex: 1
    };
  },
  mounted: function() {},
  created: function() {
    this.currentIndex = this.index || this.currentIndex;
  },
  methods: {
    previousClick: function() {
      if (this.currentIndex > 1) {
        this.currentIndex = this.currentIndex - 1;
        this.$emit("changePage", this.currentIndex);
      } else {
        this.currentIndex = 1;
      }
    },

    nextClick: function() {
      if (this.currentIndex < this.pageTotal) {
        this.currentIndex = this.currentIndex + 1;
        this.$emit("changePage", this.currentIndex);
      } else {
        this.currentIndex = this.pageTotal;
      }
    },

    numberClick: function(index) {
      this.currentIndex = index;
      this.$emit("changePage", index);
    }
  }
};
</script>
<style>
.pagination {
  margin: 2px 0;
}
</style>
