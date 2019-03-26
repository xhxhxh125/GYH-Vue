<template>
  <!-- <div>
		<aside id="left-panel">
			<div class="login-info">
				<span>
					<a href="javascript:void(0);" id="show-shortcut">
						<img v-if="user.picture!=undefined" :src="appsettings.userimg+user.picture" alt="me" class="online" />
						<span>
							{{user.nickname||user.privatename||user.user_mobile||user.user_email}}
						</span>
						<i class="fa fa-angle-down"></i>
					</a>
				</span>
			</div>
			<nav>
			
				<ul>
					
					<li v-for="master in menu" :key="master.menu_code">
						<a :href="master.children.length>0?'javascript:void(0);':master.menu_url">
							<i v-if="master.menu_code.indexOf('_index')>=0" class="fa fa-lg fa-fw fa-home"></i>
							<i v-else-if="master.menu_code=='favourite'" class="fa fa-lg fa-fw fa-star"></i>
							<i v-else-if="master.menu_code=='manager'" class="fa fa-lg fa-fw fa-cube"></i>
							<i v-else-if="master.menu_code=='myprofile'" class="fa fa-lg fa-fw fa-user"></i>
							<i v-else-if="master.menu_code=='message'" class="fa fa-lg fa-fw fa-inbox"></i>
							<img v-else :src="'/assets/gyh/images/'+master.menu_code+'.png'" class="mico">
							<span class="menu-item-parent" :title="master.menu_name">{{master.menu_name}}</span>
						</a>
						<ul v-if="master.children.length>0">
							<li v-if="show2Menu(menu_2)" v-for="menu_2 in master.children" :key="menu_2.menu_code" data-dddd="aaaa">
								<a :href="menu_2.children.length>0?'javascript:void(0);':menu_2.menu_url">
									<img :src="'/assets/gyh/images/'+menu_2.menu_code+'.png'" class="mico">
									<span class="menu-item-parent" :title="menu_2.menu_name">{{menu_2.menu_name}}</span>
								</a>
								<ul v-if="menu_2.children.length>0">
									<li v-for="menu_3 in menu_2.children" :key="menu_3.menu_code">
										<a :href="menu_3.children.length>0?'javascript:void(0);':menu_3.menu_url">
											<i class="fa fa-fw"></i> {{menu_3.menu_name}}
											<span class="badge inbox-badge bg-color-greenLight hidden-mobile"></span>
										</a>
										<ul v-if="menu_3.children.length>0">
											<li v-for="menu_4 in menu_3.children" :key="menu_4.menu_code">
												<a :href="menu_4.children.length>0?'javascript:void(0);':menu_4.menu_url">
													<i class="fa fa-fw"></i> {{menu_4.menu_name}}
													<span class="badge inbox-badge bg-color-greenLight hidden-mobile"></span>
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<span class="minifyme" data-action="minifyMenu">
				<i class="fa fa-arrow-circle-left hit"></i>
			</span>
		</aside>
		<div id="shortcut">
			<ul>
				<li>
					<a href="/com/changepassword.html" target="_blank" class="jarvismetro-tile big-cubes bg-color-blue">
						<span class="iconbox">
							<i class="fa fa-lock fa-5x"></i>
							<span>修改密码
							</span>
						</span>
					</a>
				</li>
				<li>
					<a href="/mymsg/list.html?t=list" class="jarvismetro-tile big-cubes bg-color-blue">
						<span class="iconbox">
							<i class="fa fa-envelope fa-4x"></i>
							<span>消息通知
							</span>
						</span>
					</a>
				</li>
				<li>
					<a href="/h/p/query.html" class="jarvismetro-tile big-cubes bg-color-blueDark">
						<span class="iconbox">
							<i class="fa fa-book fa-4x"></i>
							<span>我的产品
							</span>
						</span>
					</a>
				</li>
				<li>
					<a href="/adm/user/edit.html?t=self" class="jarvismetro-tile big-cubes selected bg-color-pinkDark">
						<span class="iconbox">
							<i class="fa fa-user fa-4x"></i>
							<span>个人中心 </span>
						</span>
					</a>
				</li>
			</ul>
		</div>

  </div>-->
  <!-- Sidebar Nav -->
  <div id="sideNav" class="col-auto u-sidebar-navigation-v1 u-sidebar-navigation--dark">
    <ul
      id="sideNavMenu"
      class="u-sidebar-navigation-v1-menu u-side-nav--top-level-menu g-min-height-100vh mb-0"
    >
      <!-- Dashboards -->
      <li
        v-for="(master,index) in menu"
        :key="master.menu_code"
        class="u-sidebar-navigation-v1-menu-item u-side-nav--has-sub-menu u-side-nav--top-level-menu-item u-side-nav-opened has-active"
      >
        <a
          v-if="master.children.length<=0"
          class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12"
          :href="master.menu_url"
        >
          <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
            <i class="hs-admin-layout-media-center-alt"></i>
          </span>
          <span class="media-body align-self-center">{{master.menu_name}}</span>
        </a>
        
        <a
          v-if="master.children.length>0"
          class="media u-side-nav--top-level-menu-link u-side-nav--hide-on-hidden g-px-15 g-py-12"
          href="javascript:void(0)"
          @click="showToggle(index)"
        >
          <span class="d-flex align-self-center g-pos-rel g-font-size-18 g-mr-18">
            <i v-if="master.menu_code=='user'" class="hs-admin-server"></i>
            <i v-else-if="master.menu_code=='business'" class="hs-admin-pencil-alt"></i>
            <i
              v-else-if="master.menu_code=='my_contactor'"
              class="hs-admin-layout-media-center-alt"
            ></i>
            <i v-else-if="master.menu_code=='my_favorite'" class="hs-admin-layout-grid-3"></i>
            <i v-else-if="master.menu_code=='my_message'" class="hs-admin-layout-media-center-alt"></i>
          </span>
          <span class="media-body align-self-center" :title="master.menu_name">{{master.menu_name}}</span>
          <span class="d-flex align-self-center u-side-nav--control-icon">
            <i class="hs-admin-angle-right"></i>
          </span>
          <span class="u-side-nav--has-sub-menu__indicator"></span>
        </a>

        <!-- Dashboards: Submenu-1 -->
        <ul
          v-if="master.children.length>0"
          :id="master.menu_code"
          class="u-sidebar-navigation-v1-menu mb-0"  
          :class="{'active' :index===isShow}" 
          >
          <!-- Dashboards v1 -->
          <li
            v-for="menu_2 in master.children"
            :key="menu_2.menu_code"
            class="u-sidebar-navigation-v1-menu-item u-side-nav--second-level-menu-item"
          >
            <a
              class="media u-side-nav--second-level-menu-link g-px-15 g-py-12"
              :href="menu_2.children.length>0?'javascript:void(0);':menu_2.menu_url"
            >
              <span class="d-flex align-self-center g-mr-15 g-mt-minus-1">
                <i class="hs-admin-list"></i>
              </span>
              <span
                class="media-body align-self-center"
                :title="menu_2.menu_name"
              >{{menu_2.menu_name}}</span>
            </a>
          </li>
          <!-- End Dashboards v1 -->
        </ul>
        <!-- End Dashboards: Submenu-1 -->
      </li>
      <!-- End Dashboards -->
      
    </ul>
  </div>
  <!-- End Sidebar Nav -->
</template>

<script>
//import 'assets/common/js/app.min.js';    //引用js

export default {
  name: "el-aside",
  props: ["a", "b"],
  data: function() {
    return {
      topmenu: false,
      menu: [],
      user: {},
      isShow:0,
    };
  },
  mounted: function() {
    
  },
  created: function() {
    $.post_json(
      appsettings.apiroot + "account/usermenu",
      null,
      this.callback_rendermenu
    );
    $.post_json(
      appsettings.apiroot + "account/info/formobile",
      null,
      this.callback_retrieveuserinfo
    );
  },

  methods: {
    showToggle:function(index){  
                this.isShow = index;  
                console.log(this.isShow)
            },
    show2Menu: function(m2) {
      //公司普通员工，不显示“员工管理” 二级菜单
      if (m2.menu_code == "employees") {
        if (
          (this.user.company_role || "") != "" &&
          this.user.company_role != "1"
        ) {
          return true;
        }
        return false;
      }
      return true;
    },
    callback_rendermenu: function(result) {
      if (result != null && result.status == 0) {
        this.menu = result.data.menus;
        // if(window.location.pathname=='/' || window.location.pathname=='/index.html'){
        // 	homemenu=this.menu[0];
        // 	window.location.href=homemenu.menu_url;
        // }
        // this.$nextTick(function() {
        // 	this.menuPos();
        // 	this.leftNav();
        // })
      }
    },
    callback_retrieveuserinfo: function(result) {
      if (result != null && result.status == 0) {
        this.user = result.data;
      } else {
        //failed
      }
    },
  }
};
</script>

<style>
.menu-item-parent {
  white-space: nowrap;
  width: 125px;
  text-overflow: ellipsis;
}
.mico {
  width: 15px;
  height: 15px;
  margin-top: -4px !important;
}
body.smart-style-6 .login-info img {
  height: 50px;
}
.active{
  display:block !important;
}
</style>
