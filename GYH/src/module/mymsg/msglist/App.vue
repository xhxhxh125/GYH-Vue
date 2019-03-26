<template>
	<div id="app">
    <ElPageFrame ref="pf">
      <div slot="mainslot">
        <!-- main -->
        <div class="col g-ml-50 g-ml-0--lg g-overflow-hidden">

          <div class="g-pa-20">
            <div class="media-md align-items-center g-mb-30">
              <div class="d-flex g-mb-15 g-mb-0--md">
                <h1 class="g-font-weight-400 g-font-size-28 g-color-black">我的消息</h1>
              </div>

              <div class="media d-md-flex align-items-center ml-auto">
                <div class="d-flex align-items-center u-link-v5 g-color-secondary g-color-primary--hover" href="#!">
                  <span class="g-hidden-sm-down g-ml-10">全选</span>
                </div>

                <div class="d-flex align-items-center u-link-v5 g-color-secondary g-color-primary--hover g-ml-15 g-ml-45--md"
                  href="#!">
                  <i class="hs-admin-archive g-font-size-18"></i>
                  <span class="g-hidden-sm-down g-ml-10">标记已读</span>
                </div>

                <div class="d-flex align-items-center u-link-v5 g-color-secondary g-color-primary--hover g-ml-15 g-ml-45--md"
                  href="#!">
                  <i class="hs-admin-trash g-font-size-18"></i>
                  <span class="g-hidden-sm-down g-ml-10">删除</span>
                </div>

                <div class="d-flex g-ml-15 g-ml-55--md">
                  <div class="input-group g-pos-rel g-width-320--md">
                    <input id="datatableSearch3" class="form-control g-font-size-default g-brd-gray-light-v7 g-brd-lightblue-v3--focus g-rounded-20 g-pl-20 g-pr-50 g-py-10"
                      type="text">
                    <button class="btn g-pos-abs g-top-0 g-right-0 g-z-index-2 g-width-60 h-100 g-bg-transparent g-font-size-16 g-color-primary g-color-secondary--hover rounded-0"
                      type="submit">
                      <i class="hs-admin-search g-absolute-centered"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="g-mb-40">
              <div class="table-responsive">
                <table class="js-datatable table u-table--v3 u-editable-table--v1 g-color-black" >
                  <thead>
                    <tr style="background:#1cc9e4;">
                      <th>
                        <div class="media">
                          <div class="d-flex align-self-center g-color-gray-light-v6">名字</div>

                          <div class="d-flex align-self-center ml-auto">
                            <span class="d-inline-block g-width-10 g-line-height-1 g-font-size-10">
                              <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                href="#!">
                                <i class="hs-admin-angle-up"></i>
                              </a>
                              <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                href="#!">
                                <i class="hs-admin-angle-down"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                      </th>
                      <th>
                        <div class="media">
                          <div class="d-flex align-self-center g-color-gray-light-v6">消息内容</div>

                          <div class="d-flex align-self-center ml-auto">
                            <span class="d-inline-block g-width-10 g-line-height-1 g-font-size-10">
                              <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                href="#!">
                                <i class="hs-admin-angle-up"></i>
                              </a>
                              <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                href="#!">
                                <i class="hs-admin-angle-down"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                      </th>
                      <th>
                        <div class="media">
                          <div class="d-flex align-self-center g-color-gray-light-v6">日期</div>

                          <div class="d-flex align-self-center ml-auto">
                            <span class="d-inline-block g-width-10 g-line-height-1 g-font-size-10">
                              <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                href="#!">
                                <i class="hs-admin-angle-up"></i>
                              </a>
                              <a class="g-color-gray-light-v6 g-color-secondary--hover g-text-underline--none--hover"
                                href="#!">
                                <i class="hs-admin-angle-down"></i>
                              </a>
                            </span>
                          </div>
                        </div>
                      </th>
                      <th style="width:130px;"></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(msg,index) in messages[active]" :key="index" :class="msg.status===0?'unread':''">
                      <td>
                        <div class="media align-items-center u-check">
                          <div class="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0 g-bg-lightblue-v3--checked g-brd-lightblue-v3--checked">
														<input :v-model="msg.checked" type="checkbox" class="fa" @change="selectMsg(msg,$event)">
                         </div>
                          <div class="media-body text-left g-ml-30"><a href="">{{msg.from_user_name}}</a></div>
                        </div>
                      </td>
                      <td>
                        <div class="d-inline-block">
                          <span class="g-bg-gray-light-v8 d-flex align-items-center justify-content-center u-tags-v1 g-brd-around g-bg-white g-font-size-default g-color-gray-dark-v6 g-brd-white g-rounded-50 g-py-4 g-px-15">
                            {{msg.content}}
                          </span>
                        </div>
                      </td>
                      <td>{{msg.create_time}}</td>
                      <td>
                        <a class="js-edit u-link-v5 g-color-secondary--hover" href="#!" data-src="#new-project-form" data-speed="350">
                          <i class="hs-admin-archive" style="color:black"></i>
                        </a>
                        <a class="js-edit u-link-v5 g-color-secondary--hover g-ml-12">
                          <i class="hs-admin-trash" style="color:black"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


            <div class="media align-items-center g-mb-45">
              <nav id="datatablePagination1" class="d-flex ml-auto" aria-label="Page Navigation"></nav>
            </div>
          </div>
        </div>
      </div>
    </ElPageFrame>

    <ElToastAlert ref="toastAlert"></ElToastAlert>
	</div>
</template>

<script>
	import "common/httputils"; //引用js
	import htmlutils from "common/htmlutils";
	import ElPageFrame from "components/el-PageFrame/el-PageFrame";
	import Vue from 'vue';
	export default {
		name: "app",
		data: function () {
			return {
				//数据
				id: "",
				page: {
					user: {},
					pro: {},
					sys: {}
				},
				active: 'user',
				messages: [],
				selected_msgs: [],
				showing_msg: {
					oid: null
				},
				current_show: "list",
				replying_msg: {
					to_user_name: null
				},

				msg_count: {
					user: 0,
					pro: 0,
					sys: 0
				},
				all_selected: false
			};
		},
		components: {
			ElPageFrame
		},
		created: function () {
			//get msgs
			this.current_show = $.getUrlParam("t", ignore_null = true) || "list";
			this.showing_msg.oid = $.getUrlParam("id", ignore_null = true);
			this.showing_msg.from_user_name = $.getUrlParam("funame", ignore_null = true);
			this.replying_msg.to_user_oid = $.getUrlParam("fuoid", ignore_null = true);
			this.init();
		},
		mounted: function () {

		},
		computed: {

		},
		methods: {
			selectAll: function () {
				this.all_selected = !this.all_selected;
			},
			init: function () {
				this.getMsgsByType(0, 'user');
				this.getMsgsByType(1, 'sys');
				this.getMsgsByType(2, 'pro');
			},
			nextPage: function (active) {
				if (this.page[active].page_index < parseInt(this.msg_count[active])) {
					this.page[active].page_index += 1;
					this.getMsgs(active);
				}
			},
			prePage: function (active) {
				if (this.page[active].page_index > 1) {
					this.page[active].page_index -= 1;
					this.getMsgs(active);
				}
			},
			getMsgsByType: function (type, active) {
				//0 - 用户  1- 系统 2- 订阅
				this.page[active].page_index = 1;
				this.page[active].message_type = type;
				this.getMsgs(active);
			},
			getMsgs: function (active) {
				$.post_json(appsettings.apiroot + "message/my/receive", this.page[active], this.callback_getMsgs, active);
			},
			refreshMsgs: function (active) {
				this.page[active].page_index = 1;
				this.getMsgs(active);
			},
			cancelReply: function () {
				this.current_show = "list";
				$.setUrlParam("t", "list");
				$.setUrlParam("id", null);
			},
			sendReply: function () {
				if (this.replying_msg.content == null || this.replying_msg.content === undefined || this.replying_msg.content.length ==
					0) {
					this.$refs.pf.showToast("error", "回复内容不能为空！", "");
					return;
				}
				$.post_json(appsettings.apiroot + "message/reply", this.replying_msg, this.callback_sendReply);
			},
			callback_sendReply: function (result) {
				if (result != null && result.status == 0) {
					this.$refs.pf.showToast("success", "发送成功！", "");
					this.current_show = "list";
					$.setUrlParam("t", "list");
				} else {
					this.$refs.pf.showToast("error", "发送消息失败！", result.message);
				}
			},
			reply: function (msg) {
				$.setUrlParam("t", "reply");
				this.current_show = "reply";
				this.showing_msg = msg;
				this.replying_msg.title = "回复:" + this.showing_msg.title;
				this.replying_msg.to_user_oid = this.showing_msg.from_user_oid;
			},
			toggleCat: function (active, t) {
				this.page[active].page_index = 1;
				this.active = active;
				$.setUrlParam("t", "list");
				this.current_show = "list";
				this.getMsgsByType(t, active);
			},
			callback_getMsgs: function (result, active) {
				if (result != null && result.status == 0) {
					Vue.set(this.messages, active, result.data.messages);
					Vue.set(this.page, active, result.data.page);
					Vue.set(this.msg_count, active, this.page[active].total);
					if (this.current_show == 'detail' || this.current_show == 'reply') {
						this.showing_msg = this.messages[active].findByKey("oid", this.showing_msg.oid) || this.showing_msg;
					}
				} else {
					this.$refs.pf.showToast("error", "获取消息失败！", result.message);
				}
			},
			selectMsg: function (msg, event) {
				if (event.currentTarget.checked) {
					this.selected_msgs.push(msg);
				} else {
					this.selected_msgs.removeByKey("oid", msg.oid);
				}
				//console.log(this.selected_msgs);
			},
			deleteMsgs: function () {
				if ((this.selected_msgs == null || this.selected_msgs.length == 0) && this.all_selected == false) {
					this.$refs.pf.showToast("warning", "没有选中任何消息！", "");
					return;
				}
				if (this.all_selected == false) {
					for (var i = 0; i < this.selected_msgs.length; i++) {
						$.post_json(appsettings.apiroot + "message/delete", {
							oid: this.selected_msgs[i].oid
						}, this.callback_deleteMsg, this.selected_msgs[i]);
					}
				} else {
					for (var i = 0; i < this.messages[this.active].length; i++) {
						$.post_json(appsettings.apiroot + "message/delete", {
							oid: this.messages[this.active][i].oid
						}, this.callback_deleteMsg, this.messages[this.active][i]);
					}
				}
			},
			callback_deleteMsg: function (result, msg) {
				if (result != null && result.status == 0) {
					Vue.set(msg, "status", -1);
				} else {
					//failed
					this.$refs.pf.showToast("error", "删除失败！", msg.title);
				}
			},
			readMsg: function (msg) {
				//set status and open detail
				this.setReadMsg(msg);
				//var url = "/mymsg/msg.html?id="+msg.oid;
				//window.open(url,"_blank");
				this.current_show = "detail";
				this.showing_msg = msg;
				$.setUrlParam("t", "detail");
				$.setUrlParam("id", msg.oid);
				//console.log(msg);
			},
			setReadMsgs: function () {
				if ((this.selected_msgs == null || this.selected_msgs.length == 0) && this.all_selected == false) {
					this.$refs.pf.showToast("warning", "没有选中任何消息！", "");
					return;
				}
				if (this.all_selected == false) {
					for (var i = 0; i < this.selected_msgs.length; i++) {
						this.setReadMsg(this.selected_msgs[i]);
					}
				} else {
					for (var i = 0; i < this.messages[this.active].length; i++) {
						this.setReadMsg(this.messages[this.active][i]);
					}
				}
			},
			setReadMsg: function (msg) {
				$.post_json(appsettings.apiroot + "message/read", {
					oid: msg.oid
				}, this.callback_setReadMsg, msg);
			},
			callback_setReadMsg: function (result, msg) {
				if (result != null && result.status == 0) {
					Vue.set(msg, "status", 1);
				} else {
					//failed
					this.$refs.pf.showToast("error", "删除失败！", msg.title);
				}
			},
		}
	};
</script>

<style>
	/* .well {
		border-right: 0;
		border-left: 0;
	}

	#inbox-content {
		min-height: 500px;
	}

	.bold {
		font-weight: bolder;
	}

	.unread {
		font-weight: bolder;
		color: black !important;
	}

	.receivor {
		background: #2a6395;
		color: white;
		padding: 3px 5px;
		margin: 5px 10px -10px 20px;
		line-height: 32px;
	} */
</style>