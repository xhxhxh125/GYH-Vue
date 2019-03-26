<template>
	<!-- content -->
	<div :id="id" class="tab-content">
		<!-- new tab: API interface -->
		<div class="tab-pane fade clearfix active in noselect" id="s1">
			<!-- <h4 class="margin-bottom-10">API Interface — real-time API example</h4> -->
			<!-- <div id="image-wrap" class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style="border: solid 1px lightGray; padding:0;">
			                    							</div> -->
			<div :id="id+'-image-wrap'">
				<img :src="appsettings.imgPrefix+'img1.jpg'" :id="id+'-img-target'" alt="[Jcrop Example]" class="pull-left" style="width: 100%;"/>
			</div>
			<canvas id="load-area" style="display:none"></canvas>
			<div class="pull-left padding-gutter padding-top-0 padding-bottom-0 jcrop-api-tabs-options">
				<fieldset v-if="optiontoggle=='true'" class="optdual requiresjcrop">
					<legend>
						Option Toggles
					</legend>
					<div class="optlist offset">
						<label class="margin-top-0">
							<input type="checkbox" class="checkbox style-0" id="ar_lock">
							<span>Aspect ratio</span>
						</label>

						<label class="">
							<input type="checkbox" class="checkbox style-0" id="size_lock">
							<span>minSize/maxSize setting</span>
						</label>
					</div>
					<div class="optlist">
						<label class="margin-top-0">
							<input type="checkbox" class="checkbox style-0" id="can_click">
							<span>Allow new selections</span>
						</label>

						<label class="">
							<input type="checkbox" class="checkbox style-0" id="can_move">
							<span>Selection can be moved</span>
						</label>

						<label class="">
							<input type="checkbox" class="checkbox style-0" id="can_size">
							<span>Resizable selection</span>
						</label>
					</div>
				</fieldset>
				<fieldset class="requiresjcrop changeImages">
					<legend>
						操作
					</legend>
					<div class="btn-group">
						<a class="btn btn-default" id="selectimg" @click="selectPic">
							选择图片
						</a>
						<a class="btn btn-default" id="saveimg" @click="saveCut">
							保存
						</a>
						<input type="file" :id="id+'-image-file'" @change="fileChange" style="display:none;">
					</div>
				</fieldset>
			</div>
		</div>
		<!-- end s1 tab pane -->
	</div>
	<!-- end content -->
</template>
<script>
export default {
	name: 'el-imgcopper',
	props: ["id","arlockratio","optiontoggle","noselect"],
	data: function() {
		return {
			imgBase64: "",
			coords: {
				c_x: 200,
				c_y: 140,
				c_x2: 400,
				c_y2: 240,
				c_w: 200,
				c_h: 100,
			},
			imgSelectOption: {
				//包裹图片的元素
				wrapSelector: "#"+this.id+"-image-wrap",
				imageSelector: "#"+this.id+"-img-target",
				//<input type=file />元素
				fileSelector: "#"+this.id+"-image-file",
				width: '100%',
				height: 'auto',
				errorMessage: "not image"
			},
			thumbnail: null,
		};
	},
	mounted: function() {
		$('#can_click, #can_move, #can_size').attr('checked', 'checked');
	},
	created: function() {
		console.log(this.arlockratio);
	},
	methods: {
		setCoords: function(c) {
			this.coords.x = c.x;
			this.coords.y = c.y;
			this.coords.x2 = c.x2;
			this.coords.y2 = c.y2;
			this.coords.w = c.w;
			this.coords.h = c.h;
		},
		imgCopperSetup: function(options) {
			var cb;
			$(this.imgSelectOption.imageSelector).Jcrop({
				onChange: this.setCoords,
				onSelect: this.setCoords,
			},
			function() {
				interface_load(this);
				//截图预览
				//var thumbnail = this.initComponent('Thumbnailer', { width: 250, height: 170 });
				//this.ui.preview = thumbnail;
			});
			function interface_load(obj) {
				cb = obj;
				cb.newSelection();
				cb.setSelect([200, 140, 200, 100]);
				function run_cleanup() {
					var m = cb.ui.multi, s = cb.ui.selection;

					for (var i = 0; i < m.length; i++)
						if (s !== m[i]) m[i].remove();

					cb.ui.multi = [s];
					s.center();
					s.focus();
				}
				if (options.aspectRatio!=null&&options.aspectRatio!=undefined){
					cb.setOptions(options);
				}

				function allOptions(boolean) {
					var array = {
						canResize: boolean,
						allowSelect: boolean,
						canDrag: boolean,
						canResize: boolean
					};
					return array;
				};
				function checked(element) {
					return document.getElementById(element).checked;
				}
				$('.optlist').on('change', 'input[type="checkbox"]', function() {
					var id = $(this).attr('id');
					switch (id) {
						case 'can_click':
							cb.setOptions({
								allowSelect: checked(id) ? true : false
							});
							break;
						case 'ar_lock':
							cb.setOptions({
								aspectRatio: checked(id) ? 5 / 3 : false
							});
							break;
						case 'can_move':
							cb.setOptions({
								canDrag: checked(id) ? true : false
							});
							break;
						case 'can_size':
							cb.setOptions({
								canResize: checked(id) ? true : false
							});
							break;
						case 'size_lock':
							cb.setOptions({
								minSize: checked(id) ? [100, 100] : [50, 50],
								maxSize: checked(id) ? [400, 350] : [0, 0]
							});
							break;
					}

				});
				function checkActive(element, cl) {
					if ($(element).hasClass(cl)) {
						return true;
					} else {
						$(element).parent().children().removeClass(cl);
						$(element).addClass(cl);
						return true;
					}
				}
				$('.changeImages').on('click', 'button', function() {
					var id = $(this).attr('id');
					checkActive(this, 'active');
				})

			}
		},

		selectPic: function() {
			$(this.imgSelectOption.fileSelector).click();
		},
		//选择图片
		fileChange: function(e) {
			var file = e.target.files[0];
			var imageType = /image.*/;
			if (file.type.match(imageType)) {
				var reader = new FileReader();
				var that = this;
				reader.onload = function() {
					var img = new Image();
					img.src = reader.result;
					img.id = that.imgSelectOption.imageSelector.replace('#', '');
					$(img).width(that.imgSelectOption.width);
					$(img).height(that.imgSelectOption.height);
					$(that.imgSelectOption.wrapSelector).height("auto");
					$(that.imgSelectOption.wrapSelector).empty();
					$(that.imgSelectOption.wrapSelector).append(img);

					that.coords.x=0;
					that.coords.y=0;
					that.coords.w = $(that.imgSelectOption.imageSelector)[0].width;
					that.coords.h = $(that.imgSelectOption.imageSelector)[0].height;

					that.imgBase64 = reader.result;
					that.imgCopperSetup({ aspectRatio: that.arlockratio });
				};
				reader.readAsDataURL(file);//读取文件
			} else {
				alert(this.imgSelectOption.errorMessage);
			}
		},

		//裁剪图片
		saveCut: function() {
			var loadCanvas = document.getElementById("load-area"),
				context = loadCanvas.getContext("2d"),
				tmpImage = new Image();
			this.imgBase64 = "";
			loadCanvas.width = this.coords.w;
			loadCanvas.height = this.coords.h;

			//强制截图为原图
			//this.coords.x=0;
			//this.coords.y=0;
			//loadCanvas.width = $(this.imgSelectOption.imageSelector)[0].width;
			//loadCanvas.height = $(this.imgSelectOption.imageSelector)[0].height;

			tmpImage.src = $(this.imgSelectOption.imageSelector)[0].src;
			context.drawImage(tmpImage, -this.coords.x, -this.coords.y);
			this.imgBase64 = loadCanvas.toDataURL("image/png");

			this.$emit('imgCutCallback', this.imgBase64);
		},
	}
}
</script>
<style>
/* Apply these styles only when #preview-pane has
		 been placed within the Jcrop widget */

.jcrop-holder #preview-pane {
	display: block;
	position: absolute;
	z-index: 200;
	right: -280px;
	padding: 3px;
	border: 1px rgba(0, 0, 0, .4) solid;
	background-color: white;
	-webkit-box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.1);
	box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.1);
}


/* The Javascript code will set the aspect ratio of the crop
		 area based on the size of the thumbnail preview,
		 specified here */

#preview-pane .preview-container {
	width: 250px;
	height: 170px;
	overflow: hidden;
}

.optdual {
	position: relative;
}

.optdual .offset {
	position: absolute;
	left: 18em;
}

.optlist label {
	width: 16em;
	display: block;
}

#dl_links {
	margin-top: .5em;
}
/* .jcrop-active{
	width:100%!important;
	height:100%!important;
} */

/* 隐藏截图区域 */
.noselect .jcrop-shades{
	/* display: none!important; */
}

.noselect .jcrop-selection{
	/* display: none!important; */
}

.jcrop-active{
direction: ltr;
    text-align: left;
}
.jcrop-selection{
    position: absolute;
}

</style>
