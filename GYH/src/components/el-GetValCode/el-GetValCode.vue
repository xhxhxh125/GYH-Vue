<template>
	<a href="javascript:void(0)" class="obtain" style="display: block;">
		<b></b>
		<span @click="LoginGetValCode()">获取验证码</span>
	</a>
</template>
<script>
export default {
	name: 'el-getvalcode',
	props: ["account", "url","remain-seconds"],
	data: function() {
		return {
			InterValObj: null,
			timering: 0,
		};
	},
	mounted: function() {
		
	},
	created: function() {
		
	},
	methods: {
		LoginGetValCode: function() {
			if(this.account==null||this.account==undefined||this.account.length==0)
			{
				this.$emit('error','please enter your account');
				return;
			}
			//显示时间
			this.SetRemainTime();
			//获取验证码
			var data = { login_account: this.account };
			$.post_json(this.url, data, this.callback_getvalcode);
		},

		callback_getvalcode: function(result) {
			if (result != null && result.status == 0) {

			} else {
				this.clearTimer();
				this.$emit('error',result.message);
				return;
			}
		},

		SetRemainTime: function() {
			
			var that =this;
			var RemainSeconds = 120;
			if (this.timering == 0) {
				this.InterValObj = window.setInterval(dealEverySec, 1000);
				//标记timer正在执行
				this.timering = 1;
			}

			//定时器 执行函数
			function dealEverySec() {
				if (RemainSeconds == 0) {
					console.log(111)
					that.clearTimer();
				} else {
					RemainSeconds--;
					$('.obtain b').html("(" + RemainSeconds + ")");
					$('.obtain span').hide();
				}
			}
		},

		clearTimer: function() {
			window.clearInterval(this.InterValObj);
			$('.obtain b').html("");
			$('.obtain span').show();
			//标记timer停止
			this.timering = 0;
		}
	}
}
</script>
<style>
a:hover{color: #ffffff;
text-decoration:none
}
</style>
