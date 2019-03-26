<template>
    <div style="width:100%;height:100%;" v-show="playerShow">
        <span style="position: absolute;top: 12px;left: 15px;color: #bfbfbf;">{{title}}</span>
        <video controls class="video" id="onevideo" ref="onevideo" :src="videoSrc" @click="pauseVideo()"></video>
        <i class="fa fa-lg fa-times-circle" style="position: absolute;top: 15px;right: 13px;color: #bfbfbf;" @click="closeClick()"></i>
    </div>
</template>
<script>
export default {
	name: 'el-footer',
	props: [],
	data: function() {
		return {
			playerShow:false,
			videoSrc:"",
		};
	},
	mounted: function() {

	},
	created: function() {
		
	},
	methods: {
		  	//播放视频
            playVideo: function (src,title) {
				this.videoSrc = src;
				this.title = title||document.title;
				this.playerShow=true;
				var self = this;
					this.$nextTick(function() {
						self.$refs.onevideo.play();
					});
                // setTimeout(function () {           
                //     self.$refs.onevideo.play();
                // }, 2000);
			},
			
			pauseVideo:function(){
                if(this.$refs.onevideo!=null){
                    if(this.$refs.onevideo.paused){
                         this.$refs.onevideo.play();
                    }
                    else{
                        this.$refs.onevideo.pause();
                    }
                }
			},
			
            closeClick:function(){
				console.log("before close event")
				this.$emit('close');
			},

            closeVideo: function () {
                if (this.$refs.onevideo!= null) {
                	this.$refs.onevideo.pause();
                }
                this.videoSrc="";
				this.$refs.onevideo.src=null;
				console.log("close video")
			},
	},
}
</script>
<style>
	.video{
		width:100%;height:auto;max-height:100%;margin:0 auto;
		background-color: black;
	}
</style>