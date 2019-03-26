<template>
  <div>
    <div class="swiper-container" :class="'s'+container">
      <div class="swiper-wrapper">
        <div class="det_img swiper-slide" v-for="(file,index) in files" :key="index">
          <a :href="file.url==undefined||file.url==''||file.url==null?'javascript:;':file.url">
            <img
              :src="urlPrefix+ (file.picture==undefined?(file.oid+file.file_type):(file.picture))"
              v-if="isImg(file.file_type)||(file.picture!=undefined)"
            >
            <!-- <video :poster="appsettings.gyhImgPrefix+'video.jpg'" :src="urlPrefix+file.oid+file.file_type" v-if="isVideo(file.file_type)"></video> -->
            <img
              :src="appsettings.gyhImgPrefix+'video.jpg'"
              @click="playVideo(urlPrefix+file.oid+file.file_type,null)"
              v-if="isVideo(file.file_type)"
            >
          </a>
        </div>
      </div>
    </div>

    <div class="vplayer" v-show="showVideo">
      <div class="tcontainer">
        <div class="vtn">
          <span>{{videoTitle}}</span>
        </div>
      </div>
      <div class="vcontainer weui-btn-area">
        <video controls id="onevideo" ref="onevideo" :src="videoSrc" @click="pauseVideo()"></video>
      </div>
      <div class="weui-btn-area">
        <button type="button" class="weui-btn weui-btn_primary" @click="closeVideo()">关 闭</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "gyhswiper",
  props: ["files", "urlPrefix"],
  data: function() {
    return {
      // playingVideoContext:null,
      videoSrc: null,
      videoTitle: "",
      showVideo: false,
      mySwiper: null,
      container:
        new Date().getMilliseconds() +
        Math.random()
          .toString()
          .substr(2)
    };
  },
  mounted: function() {
    //  console.log("into mounted.");
    this.initSwiper();
  },
  created: function() {
    //console.log("into created。");
  },
  methods: {
    pauseVideo: function() {
      if (this.$refs.onevideo != null) {
        if (this.$refs.onevideo.paused) {
          // console.log("going to play");
          this.$refs.onevideo.play();
        } else {
          //  console.log("going to pause");
          this.$refs.onevideo.pause();
        }
      }
    },
    //播放视频
    playVideo: function(src, title) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.videoSrc = src;
      this.videoTitle = title || document.title;
      //    if (window.playingVideoContext == null) {
      //             window.playingVideoContext = document.getElementById("onevideo");
      //             window.playingVideoContext.src=this.videoSrc;
      //         }

      this.showVideo = true;
      var self = this;
      setTimeout(function() {
        self.$refs.onevideo.play();
      }, 1500);
    },
    closeVideo: function() {
      if (this.$refs.onevideo != null) {
        this.$refs.onevideo.pause();
      }
      this.videoSrc = "";
      this.$refs.onevideo.src = null;
      this.showVideo = false;
    },
    isImg: function(type) {
      type = (type || "").toUpperCase();
      if (
        type == ".JPG" ||
        type == ".JPEG" ||
        type == ".BMP" ||
        type == ".PNG"
      ) {
        return true;
      }
      return false;
    },
    isVideo: function(type) {
      type = (type || "").toUpperCase();
      if (type == ".MP4") {
        return true;
      }
      return false;
    },
    initSwiper: function() {
      //    console.log("this.container="+this.container);
      this.mySwiper = new Swiper(".s" + this.container, {
        loop: false,
        autoplay: 3000,
        observer: true,
        observeParents: true
      });
      // console.log(this.mySwiper);
      $("video").bind("contextmenu", function() {
        return false;
      });
      var self = this;
      $("video").on("click", function() {
        var v = $(this)[0];
        // if paused,then play
        // console.log(self.mySwiper);
        if (v.paused) {
          self.mySwiper.stopAutoplay();
          v.play();
        } else {
          //if playing,then pause
          v.pause();
          self.mySwiper.startAutoplay();
        }
      });
    }
  }
};
</script>
<style>
.swiper-container {
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 300px;
}
.swiper-container .swiper-slide {
  text-align: center;
  background-color: #f8f8f8;
}
.det_img img {
  width: auto;
  max-width: 100%;
  height: auto;
  display: inline-block;
  vertical-align: middle;
}
.det_img video {
  width: auto;
  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
}

/* video_player.wxss */
.vcontainer {
  text-align: center;
}
.tcontainer {
  width: 100%;
  text-align: center;
  font-size: 12px;
}
.tcontainer {
  height: 100px;
  vertical-align: middle;
  line-height: 100px;
}
.vcontainer video,
.tcontainer .vtn {
  margin: auto;
}
.vtn span {
  color: #a9a9a9;
  border-bottom: 1px solid #a9a9a9;
  padding-bottom: 10px;
}
.vplayer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: #f5f5f5;
  z-index: 9999;
}
.vcontainer video {
  max-height: 200px;
}
</style>
