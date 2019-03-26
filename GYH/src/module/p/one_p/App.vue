<template>
	<div id="app">
        <ElPageFrame></ElPageFrame>
        <!-- #MAIN PANEL -->
        <div id="main" role="main">
            <!-- RIBBON -->
            <div id="ribbon">
                <span class="ribbon-button-alignment">
                    <span id="refresh" class="btn btn-ribbon" data-action="resetWidgets" data-title="refresh" rel="tooltip" data-placement="bottom" data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings." data-html="true">
                        <i class="fa fa-refresh"></i>
                    </span>
                </span>
                <!-- breadcrumb -->
                <ol class="breadcrumb">
                    <li><a :href="appsettings.portal_root">首页</a></li>
                    <!-- <li v-for="(cat,index) in product.category_stack" :key="index"><a :href="index+1==product.category_stack.length?'/p/onetype.html?c='+cat.code:'javascript:void(0);'">{{cat.name}}</a></li> -->
                    <li>{{product.core!=undefined?product.core.product_name:''}}</li>
                </ol>
                <!-- end breadcrumb -->
            </div>
            <!-- END RIBBON -->
            <!-- MAIN CONTENT -->
            <div id="content">
                <!-- row -->
                <div class="row">
                    <!-- col -->
                    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                        <h1 class="page-title txt-color-blueDark">
                            <!-- PAGE HEADER -->
                            <a href="/"><i class="fa-fw fa fa-home"></i></a>
                            <a v-if="product.category_stack!=null&&product.category_stack.length>0" :href="'/p/onetype.html?c='+product.category_stack[product.category_stack.length-1].code">
                            {{product.category_stack!=null&&product.category_stack.length>0?product.category_stack[product.category_stack.length-1].name:""}}
                           </a>
                            <!-- <span v-for="(cat,index) in product.category_stack" :key="index">>{{cat.name}}</span> -->
                            <span>
                                >  {{product.core!=undefined?product.core.product_name:''}}
                            </span>
                        </h1>
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
                <!-- widget grid -->
                <section id="widget-grid" class="">
                    <!-- row -->
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <!-- product -->
                            <div class="product-content product-wrap clearfix product-deatil">
                                <div class="row">
                                    <!-- <div class="col-md-5 col-sm-12 col-xs-12 ">
                                        <div id="pro-imglist" class="product-image">
                                            <div id="pro-img" class="carousel slide">
                                                <ol class="carousel-indicators">
                                                    <li v-for="(file,index) in product.picture_list" :key="index" data-target="#pro-img" :data-slide-to="index" :class="index==0?'active':''"></li>
                                                </ol>
                                                <div class="carousel-inner">
                                               
                                                    <div v-for="(file,index) in product.picture_list" :key="index" class="item" :class="index==0?'active':''">
                                                        <div>
                                                            <img :src="appsettings.proimg+(file.picture==undefined?(file.oid+file.file_type):(file.picture))" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <a class="left carousel-control" href="#pro-img" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a>
                                                <a class="right carousel-control" href="#pro-img" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a>
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="col-md-7 col-sm-12 col-xs-12">

                                        <h2 class="name">
                                            {{product.core!=undefined?product.core.product_name:''}}
                                            <small style="margin-top:20px;"><a :href="'/p/one_c.html?id='+company.id" target="_blank">{{company.company_name}}</a></small>

                                        </h2>
                                        <hr>
                                        <div class="description description-tabs">
                                            <div id="myTabContent">
                                                <!-- <div v-if="product.core!=null&&product.core.series!=null&&product.core.series!=undefined&&product.core.series.length>0" class="tab-pane fade active in" id="more-information">
                                                    <strong>产品系列</strong>
                                                    <p>{{product.core!=null?product.core.series:''}} </p>
                                                </div>
                                                <div v-if="product.core!=null&&product.core.process!=null&&product.core.process!=undefined&&product.core.process.length>0" class="tab-pane fade active in" id="more-information">
                                                    <strong>工艺</strong>
                                                    <p>{{product.core.process}} </p>
                                                </div>
                                                <div v-if="product.core!=null&&product.core.profession!=null&&product.core.profession!=undefined&&product.core.profession.length>0" class="tab-pane fade active in" id="more-information">
                                                    <strong>行业</strong>
                                                    <p>{{product.core.profession}} </p>
                                                </div>
                                                <div v-if="product.core!=null&&product.core.product_source!=null&&product.core.product_source!=undefined&&product.core.product_source.length>0" class="tab-pane fade active in" id="more-information">
                                                    <strong>来源</strong>
                                                    <p>{{product.core.product_source}} </p>
                                                </div> -->
                                                <div v-for="core_para in product.core_parameters" :key="core_para.name" class="tab-pane fade active in" id="more-information">
                                                    <strong>{{core_para.name}}</strong>
                                                    <p>{{core_para.value+((core_para.unit!=null&&core_para.unit!=undefined&&core_para.unit.length>0)?core_para.unit:"")}} </p>
                                                </div>
                                                <div class="tab-pane fade active in" v-if="product.core!=null&&product.core.highlight!=null&&product.core.highlight!=undefined&&product.core.highlight.length>0">
                                                    <strong>产品亮点</strong>
                                                    <p v-html="product.core.highlight"></p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <!-- <div class="col-sm-12 col-md-6 col-lg-6">

                                                    <a href="javascript:void(0);" class="btn btn-success btn-lg">Add to cart ($129.54)</a>

                                            </div> -->
                                            <div class="col-sm-12 col-md-6 col-lg-6">
                                                <div class="btn-group">
                                                    <a href="javascript:void(0);" @click="collect()" class="btn btn-white btn-default">
                                                        <i class="fa fa-star" :class="product.favorited?'text-primary':''"></i> {{product.favorited?"已":""}}收藏
                                                    </a>
                                                    <!-- <a :href="'/adm/eos/edit.html?pid='+product.core.id" target="_blank" class="btn btn-warning">
                                                        <i class="fa fa-warning" :class="product.favorited?'text-primary':''"></i> 报告现场故障
                                                    </a> -->
                                                    <!-- <button class="btn btn-white btn-default"><i class="fa fa-envelope"></i> Contact Seller</button> -->
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- end product -->
                        </div>
                        <!-- NEW WIDGET START -->
                        <article class="col-sm-12 col-md-12 col-lg-12">
                            <!-- Widget ID (each widget will need unique ID)-->
                            <div class="jarviswidget" id="wid-id-7" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-fullscreenbutton="false" data-widget-deletebutton="false" data-widget-custombutton="false" data-widget-sortable="false">
                                <header>
                                    <ul class="nav nav-tabs pull-left in">
                                        
                                        <li class="active">
                                            <a href="#tab-r2" data-toggle="tab"><i class="fa fa-lg"></i><span class="badge bg-color-blueDark txt-color-white"></span> 规格参数</a>
                                        </li>
										<li v-for="slave in slaves" v-bind:key="slave.table_id">
                                            <a :href="'#tab-'+slave.table_id" data-toggle="tab"><span class="badge bg-color-greenLight txt-color-white"></span> {{slave.table_name}}</a>
                                        </li>
                                        <!-- <li>
                                            <a href="#tab-r3" data-toggle="tab" @click="resetPrjPicSize()"><span class="badge bg-color-greenLight txt-color-white"></span> 应用案例</a>
                                        </li> -->
                                        <li>
                                            <a href="#tab-r4" data-toggle="tab"><span class="badge bg-color-greenLight txt-color-white"></span> 产品附件</a>
                                        </li>
										<li>
                                            <a href="#tab-r1" data-toggle="tab"><i class="fa fa-lg"></i><span class="badge bg-color-blue txt-color-white"></span> 产品介绍 </a>
                                        </li>
                                        
                                    </ul>
                                </header>
                                <!-- widget div-->
                                <div>
                                    <!-- widget edit box -->
                                    <div class="jarviswidget-editbox">
                                        <!-- This area used as dropdown edit box -->
                                    </div>
                                    <!-- end widget edit box -->
                                    <!-- widget content -->
                                    <div class="widget-body">
                                        <div class="tab-content">
                                            <div class="tab-pane" id="tab-r1">
                                                <div v-if="product.core!=null&&product.core.description!=null&&product.core.description!=undefined&&product.core.description.length>0">
                                                    <p style="padding: 10px 0;" v-html="product.core.description"></p>
                                                </div>
                                            </div>
                                            <div class="tab-pane active" id="tab-r2">
                                                <table v-for="group in paragroups" v-bind:key="group.group_code" class="table table-striped table-bordered table-hover" width="100%">
                                                    <thead>
                                                        <tr>
                                                            <th colspan="3">{{group.group_name}}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="para in group.parameters" :key="para.name" class="row-show">
                                                            <td style="width:33%">{{para.name}}</td>
                                                            <template v-if="para.data_type==9">
                                                                <td colspan="2">
                                                                    <a v-for="(refpara,index) in parseReferParameter(para.value)" :key="index" :href="refpara.href" target="_blank" class="editable-click">{{refpara.value}}</a>
                                                                </td>
                                                            </template>
                                                            <template v-else>
                                                                <td style="width:33%">{{para.value}}
                                                                <td style="width:33%">{{para.value!=""?para.unit:""}}</td>
                                                            </template>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <div class="col-sm-12 col-md-12 col-lg-12 jarviswidget" v-for="richtext_para in product.richtext_parameters" v-bind:key="richtext_para.name" data-widget-editbutton="false" data-widget-colorbutton="false" data-widget-custombutton="false">
                                                    <header>
                                                        <span class="widget-icon">
                                                            <i class="fa fa-pencil-square-o"></i>
                                                        </span>
                                                        <h2>{{richtext_para.name}}</h2>
                                                    </header>
                                                    <!-- datatable-->
                                                    <div>
                                                        <p style="padding: 10px 0;" v-html="richtext_para.value"></p>
                                                    </div>
                                                    <!-- end datatable -->
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="tab-r3">

                                                <!-- 添加案例 用弹出model -->
                                                <!-- <button class="fup_file" @click="newproject()">新增案例</button> -->
                                                <a class="btn btn-primary btn-sm" :href="'/adm/prj/edit.html?t=p&c=' +(product.core!=undefined?product.core.category_code:'') +'&pid=' +(product.core!=undefined?product.core.id:'') +'&com=' +(product.core!=undefined?product.core.company_oid:'')" target="_blank">新增案例</a>
                                                <div v-for="(prj,index) in projects" v-bind:key="index" style="clear: both;">
                                                    <hr style="margin-right:15px;">
                                                    <!-- 案例描述 富文本 -->
                                                    <h6>案例{{index+1}}: {{prj.core.project_name}}</h6>
                                                    <div class="col-sm-7 col-md-7 col-lg-7" style="padding:0 0 20px 0;">
                                                        <table class="table table-striped table-bordered table-hover" width="100%">
                                                            <tbody>
                                                                <tr v-if="prj.core.profession!='APPNULL' && prj.core.profession!=''" class="row-show">
                                                                    <td class="wt haf" style="width:50%">行业</td>
                                                                    <td class="twh haf tal pl" style="width:50%">{{prj.core.profession}}</td>
                                                                </tr>
                                                                <tr v-for="para in prj.parameters" :key="para.name" v-if="para.value!='APPNULL' && para.value!=''" class="row-show">
                                                                    <td class="wt haf" style="width:50%">{{para.name}}</td>
                                                                    <td class="twh haf tal pl" style="width:50%">{{para.value}} {{para.value==""?"":para.unit}}</td>
                                                                </tr>
                                                                <tr class="row-show">
                                                                    <td class="twh haf tal pl" colspan="2"><div class="nm" v-html="prj.core.description"></div></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="col-sm-5 col-md-5 col-lg-5" style="padding-bottom: 20px;">
                                                        <!-- 案例图片 -->
                                                        <div v-if="prj.attachments_pic!=null&&prj.attachments_pic!=undefined&&prj.attachments_pic.length>0" class="row">
                                                            <div class="col-sm-12 col-md-12 col-lg-12">
                                                                <!-- well -->
                                                                <div class="well" style="padding: 8px;">
                                                                    <h3 style="margin: 0;font-size: 15px;">案例图片<a class="pull-right" data-toggle="modal" :data-target="'#prjatt_gallery_'+index">更多</a></h3>

                                                                    <div :id="'prj-attimg'+prj.core.oid" class="prj_attimg carousel slide">
                                                                        <ol class="carousel-indicators">
                                                                            <li v-for="(file,index) in prj.attachments_pic" :key="index" :data-target="'#prj-attimg'+prj.core.oid" :data-slide-to="index" :class="index==0?'active':''"></li>
                                                                        </ol>
                                                                        <div class="carousel-inner">
                                                                            <div v-for="(file,index) in prj.attachments_pic" :key="index" class="item" :class="index==0?'active':''">
                                                                                <div>
                                                                                    <img v-if="isImg(file.file_type)||(file.picture!=undefined)" :src="appsettings.project_attachment+(file.picture==undefined?(file.oid+file.file_type):(file.picture))" alt="">
                                                                                    <img v-if="isVideo(file.file_type)" :src="appsettings.comimg+company.logo" alt="">
                                                                                    <i v-if="isVideo(file.file_type)" @click="playVideo(appsettings.project_attachment+file.oid+file.file_type,null)" data-toggle="modal" data-target="#videomodel" class="fa fa-lg fa-play-circle-o" style="position: absolute;font-size: 4em;opacity: 0.8;"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <a class="left carousel-control" :href="'#prj-attimg'+prj.core.oid" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a>
                                                                        <a class="right carousel-control" :href="'#prj-attimg'+prj.core.oid" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a>
                                                                    </div>
                                                                </div>
                                                                <!-- end well-->
                                                            </div>
                                                        </div>

                                                        <!-- 案例附件 -->
                                                        <div v-if="prj.attachments_doc!=null && prj.attachments_doc.length>0" class="jarviswidget" id="wid-prj-atts" data-widget-editbutton="false" data-widget-colorbutton="false" data-widget-custombutton="false">
                                                            <header>
                                                                <span class="widget-icon">
                                                                    <i class="fa fa-pencil-square-o"></i>
                                                                </span>
                                                                <h2>案例附件</h2>
                                                            </header>
                                                            <!-- datatable-->
                                                            <div>
                                                                <div class="jarviswidget-editbox">
                                                                </div>
                                                                <div class="widget-body no-padding">
                                                                    <table id="datatable_tabletools" class="table table-striped table-bordered table-hover" width="100%">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>文件信息</th>
                                                                                <th>文件类型</th>
                                                                                <th>操作</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr v-for="file in prj.attachments_doc" :key="file.oid" class="row-show">
                                                                                <td>{{file.file_name}}</td>
                                                                                <td><label>{{file.file_type}}</label></td>
                                                                                <td>
                                                                                    <div>
                                                                                        <a v-if="file.file_type.toUpperCase()!='WEBVIDEO'" :href="appsettings.project_attachment+file.oid+file.file_type" :download="file.file_name">下载</a>
                                                                                        <a v-if="file.file_type.toUpperCase()=='WEBVIDEO'" :href="file.url">查看</a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            <!-- end datatable -->
                                                        </div>
                                                        <!-- end widget -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="tab-r4">
                                                <!-- <div class="row">
                                                    <div class="col-sm-12 col-md-12 col-lg-12">
                                                        <div class="well">
                                                            <h3 style="margin:6px 0">产品图库<a class="pull-right" style="font-size:16px;" data-toggle="modal" data-target="#proatt_gallery">更多</a></h3>
                                                            <div id="pro-attimg" class="carousel slide">
                                                                <ol class="carousel-indicators">
                                                                    <li v-for="(file,index) in product.attachment_pic_list" :key="index" data-target="#pro-attimg" :data-slide-to="index" :class="index==0?'active':''"></li>
                                                                </ol>
                                                                <div class="carousel-inner">
                                                                    <div v-for="(file,index) in product.attachment_pic_list" :key="index" class="item" :class="index==0?'active':''">
                                                                        <div style="color: #bbb">
                                                                            <img v-if="isImg(file.file_type)||(file.picture!=undefined)" :src="appsettings.product_attachment+(file.picture==undefined?(file.oid+file.file_type):(file.picture))" alt="">
                                                                            <img v-if="isVideo(file.file_type)" :src="appsettings.comimg+company.logo" alt="">
                                                                            <i v-if="isVideo(file.file_type)" @click="playVideo(appsettings.product_attachment+file.oid+file.file_type,null)" data-toggle="modal" data-target="#videomodel" class="fa fa-lg fa-play-circle-o" style="position: absolute;font-size: 6em;opacity: 0.8;"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <a class="left carousel-control" href="#pro-attimg" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a>
                                                                <a class="right carousel-control" href="#pro-attimg" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> -->
                                                <!-- 产品附件 -->
                                                <div class="col-sm-12 col-md-12 col-lg-6 jarviswidget" v-if="product!=null && product.attachment_doc_list!=null && product.attachment_doc_list.length>0" id="wid-atts" data-widget-editbutton="false" data-widget-colorbutton="false" data-widget-custombutton="false">
                                                    <header>
                                                        <span class="widget-icon">
                                                            <i class="fa fa-pencil-square-o"></i>
                                                        </span>
                                                        <h2>产品附件</h2>
                                                    </header>
                                                    <!-- datatable-->
                                                    <div>
                                                        <div class="jarviswidget-editbox">
                                                        </div>
                                                        <div class="widget-body no-padding">
                                                            <table id="datatable_tabletools" class="table table-striped table-bordered table-hover" width="100%">
                                                                <thead>
                                                                    <tr>
                                                                        <th>文件信息</th>
                                                                        <th>文件类型</th>
                                                                        <th>操作</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="(file,index) in product.attachment_doc_list" :key="index" class="row-show">
                                                                        <td>{{file.file_name}}</td>
                                                                        <td><label>{{file.file_type}}</label></td>
                                                                        <td>
                                                                            <div>
                                                                                <a v-if="file.file_type.toUpperCase()!='WEBVIDEO'" :href="appsettings.product_attachment+file.oid+file.file_type" :download="file.file_name">下载</a>
                                                                                <a v-if="file.file_type.toUpperCase()=='WEBVIDEO'" :href="file.url">查看</a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <!-- end datatable -->
                                                </div>
                                                <!-- end widget -->
                                                <article class="col-sm-12 col-md-12 col-lg-12 sortable-grid ui-sortable no-padding">
                                                    <!-- Widget ID (each widget will need unique ID)-->
                                                    <div class="jarviswidget" id="wid-id-pro-att-pic" data-widget-colorbutton="false" data-widget-editbutton="false" data-widget-fullscreenbutton="false" data-widget-custombutton="false" data-widget-sortable="false">
                                                        <header>
                                                            <h2>产品图库 </h2>
                                                        </header>

                                                        <!-- widget div-->
                                                        <div style="padding-bottom: 30px;min-height:512px;">
                                                            <!-- widget content -->
                                                            <div class="widget-body">

                                                                <!-- SuperBox -->
                                                                <div class="superbox col-sm-12">
                                                                    <div v-for="(file,index) in product.attachment_pic_list" :key="index" v-if="isImg(file.file_type)||(file.picture!=undefined)" class="superbox-list">
                                                                        <img :src="appsettings.product_attachment+(file.picture==undefined?(file.oid+file.file_type):(file.picture))" :data-img="appsettings.product_attachment+(file.picture==undefined?(file.oid+file.file_type):(file.picture))" class="superbox-img">
                                                                    </div>
                                                                    <div class="superbox-float"></div>
                                                                </div>
                                                                <!-- /SuperBox -->
                                                                <div class="superbox-show" style="height:300px; display: none"></div>
                                                            </div>
                                                            <!-- end widget content -->
                                                        </div>
                                                        <!-- end widget div -->
                                                    </div>
                                                    <!-- end widget -->
                                                </article>
                                            </div>
                                            <div v-for="slave in slaves" v-bind:key="slave.table_id" class="tab-pane" :id="'tab-'+slave.table_id">
                                                <!-- datatable-->
                								<div v-for="group in slave.groups" :key="group.group_code">
	    		            						<div class="jarviswidget-editbox">
		    				            			</div>
			    						            <div class="widget-body no-padding">
            	    									<div class="custom-scroll" style="max-height:500px; overflow-y: scroll;margin: 0 0 10px 10px;border-bottom:1px #ddd solod;">
                                                            <div style="padding: 4px 0;margin: 5px 1px;">
                                                                {{group.group_name}}
                                                            </div>                    
  					                					    <table id="datatable_tabletools" class="nowrap table table-bordered" style="border: 1px solid #ccc !important; margin:0;">
	  							                			    <thead>
		  								    	            	    <tr>
				  							    	    	            <th v-for="para in group.parameters" :key="para.column_id">{{para.name}}</th>					
            					  				    			    </tr>
			            			  				    	    </thead>
						            	  		    	    	<tbody class="table-responsive">
		    						  	            		    	<tr class="row-show" v-for="record in slave.records" :key="record.oid">
		              	    						  			    	<template v-for="rec_para_group in record.para_groups" v-if="rec_para_group.group_code==group.group_code">
			                    				  					    	<td v-for="(para,index) in rec_para_group.parameters" :key="index">{{para.value}}</td>
	    					            			  				    </template>
		    				                  						</tr>
			                    		  						</tbody>
			                    	  						</table>
			                							</div>
				                					</div>
				                				</div>
				            	    			<!-- end datatable -->
                                            </div>
                                            <!-- <div class="tab-pane" id="tab-r5">

                                                <ul class="nav nav-tabs">
                                                    <li class="active">
                                                        <a href="#guang_l1" data-toggle="tab">性能参数</a>
                                                    </li>
                                                    <li>
                                                        <a href="#guang_l2" data-toggle="tab">老化测试条件</a>
                                                    </li>
                                                </ul>
                                                <div class="tab-content padding-10">
                                                    <div class="tab-pane active" id="guang_l1">
                                                        <p class="table-responsive custom-scroll" style="height:500px; overflow-y: scroll;">
                                                            <table id="datatable_fixed_column" class="nowrap table table-bordered hidden-mobile">
                                                                <thead>
                                                                    <tr>
                                                                        <th>光通量</th>
                                                                        <th>辐射通量</th>
                                                                        <th>光效</th>
                                                                        <th>色坐标u'</th>
                                                                        <th>色坐标v'</th>
                                                                        <th>显色指数Ra</th>
                                                                        <th>显色指数R9</th>
                                                                        <th>标称色温</th>
                                                                        <th>色彩逼真度指数Rf</th>
                                                                        <th>色彩饱和度指数Rg</th>
                                                                        <th>额定功率P</th>
                                                                        <th>额定电流If</th>
                                                                        <th>额定电压Uf</th>
                                                                        <th>光谱功率分布SPD</th>
                                                                        <th>发光角度</th>
                                                                        <th>环境温度</th>
                                                                        <th>环境湿度</th>
                                                                        <th>参数测试条件</th>
                                                                        <th>稳定时间</th>
                                                                        <th>参数测试标准</th>
                                                                        <th>光型</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>(lm)</th>
                                                                        <th>(W)</th>
                                                                        <th>(lm/W)</th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th>(K)</th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th>(W)</th>
                                                                        <th>(A)</th>
                                                                        <th>(V)</th>
                                                                        <th></th>
                                                                        <th>(︒)</th>
                                                                        <th>（℃)</th>
                                                                        <th>(%RH)</th>
                                                                        <th></th>
                                                                        <th>(min)</th>
                                                                        <th></th>
                                                                        <th></th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>462.96</td>
                                                                        <td>/</td>
                                                                        <td>60.24</td>
                                                                        <td>.2511</td>
                                                                        <td>.5204</td>
                                                                        <td>81.3</td>
                                                                        <td>0</td>
                                                                        <td>2994</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>462.96</td>
                                                                        <td>7.686</td>
                                                                        <td>60.23</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A1&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A1</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B1&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B1</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>461.4</td>
                                                                        <td>/</td>
                                                                        <td>60.16</td>
                                                                        <td>.2504</td>
                                                                        <td>.5199</td>
                                                                        <td>81.3</td>
                                                                        <td>0</td>
                                                                        <td>3012</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>461.4</td>
                                                                        <td>7.67</td>
                                                                        <td>60.16</td>
                                                                        <td><a :href="'/com/polar.html?id=B2&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A2</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B2&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B2</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>457.77</td>
                                                                        <td>/</td>
                                                                        <td>59.59</td>
                                                                        <td>.25</td>
                                                                        <td>.5194</td>
                                                                        <td>81.4</td>
                                                                        <td>0</td>
                                                                        <td>3028</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>457.77</td>
                                                                        <td>7.683</td>
                                                                        <td>59.58</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A3&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A3</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B3&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B3</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>454.8</td>
                                                                        <td>/</td>
                                                                        <td>59.22</td>
                                                                        <td>.2499</td>
                                                                        <td>.5192</td>
                                                                        <td>81.4</td>
                                                                        <td>0</td>
                                                                        <td>3031</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>454.8</td>
                                                                        <td>7.68</td>
                                                                        <td>59.22</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A4&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A4</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B4&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B4</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>450.93</td>
                                                                        <td>/</td>
                                                                        <td>58.7</td>
                                                                        <td>.2498</td>
                                                                        <td>.5191</td>
                                                                        <td>81.5</td>
                                                                        <td>0</td>
                                                                        <td>3036</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>450.93</td>
                                                                        <td>7.681</td>
                                                                        <td>58.71</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A5&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A5</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B5&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B5</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>443.61</td>
                                                                        <td>/</td>
                                                                        <td>57.7</td>
                                                                        <td>.25</td>
                                                                        <td>.5192</td>
                                                                        <td>81.4</td>
                                                                        <td>0</td>
                                                                        <td>3029</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>443.61</td>
                                                                        <td>7.688</td>
                                                                        <td>57.70</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A6&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A6</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B6&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B6</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>441.55</td>
                                                                        <td>/</td>
                                                                        <td>57.39</td>
                                                                        <td>.2499</td>
                                                                        <td>.5191</td>
                                                                        <td>81.4</td>
                                                                        <td>0</td>
                                                                        <td>3031</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>441.55</td>
                                                                        <td>7.693</td>
                                                                        <td>57.40</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A7&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A7</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B7&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B7</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>429.72</td>
                                                                        <td>/</td>
                                                                        <td>55.86</td>
                                                                        <td>.2497</td>
                                                                        <td>.5188</td>
                                                                        <td>81.4</td>
                                                                        <td>0</td>
                                                                        <td>3038</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>429.72</td>
                                                                        <td>7.692</td>
                                                                        <td>55.87</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A8&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A8</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B8&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B8</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>421.54</td>
                                                                        <td>/</td>
                                                                        <td>54.84</td>
                                                                        <td>.2498</td>
                                                                        <td>.5188</td>
                                                                        <td>81.5</td>
                                                                        <td>0</td>
                                                                        <td>3036</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>421.54</td>
                                                                        <td>7.686</td>
                                                                        <td>54.85</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A9&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A9</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B9&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B9</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>419.43</td>
                                                                        <td>/</td>
                                                                        <td>54.48</td>
                                                                        <td>.2498</td>
                                                                        <td>.5188</td>
                                                                        <td>81.5</td>
                                                                        <td>0</td>
                                                                        <td>3035</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>419.43</td>
                                                                        <td>7.698</td>
                                                                        <td>54.49</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A10&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A10</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B10&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B10</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>415.91</td>
                                                                        <td>/</td>
                                                                        <td>53.74</td>
                                                                        <td>.2498</td>
                                                                        <td>.5191</td>
                                                                        <td>81.6</td>
                                                                        <td>0</td>
                                                                        <td>3035</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>415.91</td>
                                                                        <td>7.739</td>
                                                                        <td>53.74</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A11&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A11</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B11&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B11</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>410.5</td>
                                                                        <td>/</td>
                                                                        <td>53.23</td>
                                                                        <td>.2499</td>
                                                                        <td>.5189</td>
                                                                        <td>81.5</td>
                                                                        <td>0</td>
                                                                        <td>3032</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>410.5</td>
                                                                        <td>7.712</td>
                                                                        <td>53.23</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A12&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A12</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B12&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B12</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>402.58</td>
                                                                        <td>/</td>
                                                                        <td>52.24</td>
                                                                        <td>.2499</td>
                                                                        <td>.5189</td>
                                                                        <td>81.5</td>
                                                                        <td>0</td>
                                                                        <td>3032</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>402.58</td>
                                                                        <td>7.707</td>
                                                                        <td>52.24</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A13&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A13</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B13&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B13</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>402.64</td>
                                                                        <td>/</td>
                                                                        <td>52.14</td>
                                                                        <td>.2501</td>
                                                                        <td>.5191</td>
                                                                        <td>81.4</td>
                                                                        <td>0</td>
                                                                        <td>3025</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>402.64</td>
                                                                        <td>7.722</td>
                                                                        <td>52.14</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A14&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A14</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B14&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B14</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>400.17</td>
                                                                        <td>/</td>
                                                                        <td>51.81</td>
                                                                        <td>.25</td>
                                                                        <td>.5191</td>
                                                                        <td>81.5</td>
                                                                        <td>0</td>
                                                                        <td>3028</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>400.17</td>
                                                                        <td>7.725</td>
                                                                        <td>51.80</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A15&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A15</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B15&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B15</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>403.68</td>
                                                                        <td>/</td>
                                                                        <td>52.17</td>
                                                                        <td>.2501</td>
                                                                        <td>.5192</td>
                                                                        <td>81.5</td>
                                                                        <td>0</td>
                                                                        <td>3027</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>403.68</td>
                                                                        <td>7.738</td>
                                                                        <td>52.17</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A16&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A16</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B16&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B16</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>402.67</td>
                                                                        <td>/</td>
                                                                        <td>52.07</td>
                                                                        <td>.2502</td>
                                                                        <td>.5195</td>
                                                                        <td>81.5</td>
                                                                        <td>0</td>
                                                                        <td>3022</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>402.67</td>
                                                                        <td>7.734</td>
                                                                        <td>52.06</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A17&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A17</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B17&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B17</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>400.6</td>
                                                                        <td>/</td>
                                                                        <td>51.73</td>
                                                                        <td>.2502</td>
                                                                        <td>.5196</td>
                                                                        <td>81.4</td>
                                                                        <td>0</td>
                                                                        <td>3021</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>400.6</td>
                                                                        <td>7.744</td>
                                                                        <td>51.73</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A18&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A18</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B18&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B18</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>401.19</td>
                                                                        <td>/</td>
                                                                        <td>51.68</td>
                                                                        <td>.2502</td>
                                                                        <td>.5199</td>
                                                                        <td>81.4</td>
                                                                        <td>0</td>
                                                                        <td>3017</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>401.19</td>
                                                                        <td>7.764</td>
                                                                        <td>51.67</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A19&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A19</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B19&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B19</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>397.16</td>
                                                                        <td>/</td>
                                                                        <td>51.15</td>
                                                                        <td>.2503</td>
                                                                        <td>.52</td>
                                                                        <td>81.4</td>
                                                                        <td>0</td>
                                                                        <td>3016</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>397.16</td>
                                                                        <td>7.765</td>
                                                                        <td>51.15</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A20&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A20</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B20&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B20</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>391.45</td>
                                                                        <td>/</td>
                                                                        <td>50.37</td>
                                                                        <td>.2504</td>
                                                                        <td>.5201</td>
                                                                        <td>81.4</td>
                                                                        <td>0</td>
                                                                        <td>3013</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>391.45</td>
                                                                        <td>7.771</td>
                                                                        <td>50.37</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A21&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A21</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B21&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B21</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>386.42</td>
                                                                        <td>/</td>
                                                                        <td>49.74</td>
                                                                        <td>.25</td>
                                                                        <td>.5201</td>
                                                                        <td>81.5</td>
                                                                        <td>0</td>
                                                                        <td>3021</td>
                                                                        <td>/</td>
                                                                        <td>/</td>
                                                                        <td>386.42</td>
                                                                        <td>7.769</td>
                                                                        <td>49.74</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=A22&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光谱功率分布SPD'" target="_blank" class="editable-click">见A22</a></td>
                                                                        <td>60</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>LM80</td>
                                                                        <td><a :href="'/com/polar.html?id=B22&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=光色参数性能'+'&dp=光型'" target="_blank" class="editable-click">见B22</a></td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>

                                                        </p>
                                                    </div>
                                                    <div class="tab-pane fade" id="guang_l2">
                                                        <p>
                                                            <table id="datatable_fixed_column" class="nowrap table table-striped table-bordered" width="100 % ">
                                                                <thead>
                                                                    <tr>
                                                                        <th>老化时间</th>
                                                                        <th>老化测试条件</th>
                                                                        <th>老化测试类型</th>
                                                                        <th>老化样品工作条件</th>
                                                                        <th>老化测试设备</th>
                                                                        <th>老化测试标准</th>
                                                                        <th>老化测试单位</th>
                                                                        <th>老化测试操作人员</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>(h)</th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>0</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>24</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>240</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>336</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>504</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>816</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>1008</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>1464</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>1776</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2016</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2472</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2616</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>3072</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>3212</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>3524</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>3812</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>4172</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>4460</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>4724</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>5015</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>5351</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>5735</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>

                                                        </p>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="tab-pane" id="tab-r6">

                                                <ul class="nav nav-tabs">
                                                    <li class="active">
                                                        <a href="#dian_l1" data-toggle="tab">性能参数</a>
                                                    </li>
                                                    <li>
                                                        <a href="#dian_l2" data-toggle="tab">老化测试条件</a>
                                                    </li>
                                                </ul>
                                                <div class="tab-content padding-10">
                                                    <div class="tab-pane active" id="dian_l1">
                                                        <p class="table-responsive">
                                                            <table id="datatable_fixed_column" class="nowrap table table-striped table-bordered" width="100 % ">
                                                                <thead>
                                                                    <tr>
                                                                        <th>开启电压Ui</th>
                                                                        <th>最大额定电流Ifmax</th>
                                                                        <th>最大额定电压Ufmax</th>
                                                                        <th>峰值电流Ifp</th>
                                                                        <th>反向漏电流Ileak</th>
                                                                        <th>IV曲线</th>
                                                                        <th>环境温度</th>
                                                                        <th>环境湿度</th>
                                                                        <th>参数测试条件</th>
                                                                        <th>稳定时间</th>
                                                                        <th>参数测试标准</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>(V)</th>
                                                                        <th>(A)</th>
                                                                        <th>(V)</th>
                                                                        <th>(A)</th>
                                                                        <th>(A)</th>
                                                                        <th></th>
                                                                        <th>（℃)</th>
                                                                        <th>(%RH)</th>
                                                                        <th></th>
                                                                        <th>(min)</th>
                                                                        <th></th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>3</td>
                                                                        <td>.7</td>
                                                                        <td>5</td>
                                                                        <td>1</td>
                                                                        <td>.0005</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=C1&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=电参数性能'+'&dp=IV曲线'" target="_blank" class="editable-click">见C1</a></td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>/</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2.95</td>
                                                                        <td>.7</td>
                                                                        <td>5</td>
                                                                        <td>1</td>
                                                                        <td>.0005</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=C2&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=电参数性能'+'&dp=IV曲线'" target="_blank" class="editable-click">见C2</a></td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>/</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2.9</td>
                                                                        <td>.7</td>
                                                                        <td>5</td>
                                                                        <td>1</td>
                                                                        <td>.0005</td>
                                                                        <td><a :href="'/com/dygraphs.html?id=C3&pn='+(product!=undefined&&product.core!=undefined?product.core.product_name:'')+'&dg=电参数性能'+'&dp=IV曲线'" target="_blank" class="editable-click">见C3</a></td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>/</td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>

                                                        </p>
                                                    </div>
                                                    <div class="tab-pane fade" id="dian_l2">
                                                        <p>
                                                            <table id="datatable_fixed_column" class="nowrap table table-striped table-bordered" width="100 % ">
                                                                <thead>
                                                                    <tr>
                                                                        <th>老化时间</th>
                                                                        <th>老化测试条件</th>
                                                                        <th>老化测试类型</th>
                                                                        <th>老化样品工作条件</th>
                                                                        <th>老化测试设备</th>
                                                                        <th>老化测试标准</th>
                                                                        <th>老化测试单位</th>
                                                                        <th>老化测试操作人员</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>(h)</th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>0</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>100</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>200</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>

                                                        </p>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="tab-pane" id="tab-r7">

                                                <ul class="nav nav-tabs">
                                                    <li class="active">
                                                        <a href="#re_l1" data-toggle="tab">性能参数</a>
                                                    </li>
                                                    <li>
                                                        <a href="#re_l2" data-toggle="tab">老化测试条件</a>
                                                    </li>
                                                </ul>
                                                <div class="tab-content padding-10">
                                                    <div class="tab-pane active" id="re_l1">
                                                        <p>
                                                            <table id="datatable_fixed_column" class="nowrap table table-striped table-bordered" width="100 % ">
                                                                <thead>
                                                                    <tr>
                                                                        <th>结温Tj</th>
                                                                        <th>焊点温度 Ts</th>
                                                                        <th>壳温 Tc</th>
                                                                        <th>输入功率P</th>
                                                                        <th>驱动电流If</th>
                                                                        <th>驱动电压Uf</th>
                                                                        <th>环境温度</th>
                                                                        <th>环境湿度</th>
                                                                        <th>参数测试条件</th>
                                                                        <th>稳定时间</th>
                                                                        <th>参数测试标准</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>（℃)</th>
                                                                        <th>（℃)</th>
                                                                        <th>（℃)</th>
                                                                        <th>(W)</th>
                                                                        <th>(A)</th>
                                                                        <th>(V)</th>
                                                                        <th>（℃)</th>
                                                                        <th>(%RH)</th>
                                                                        <th></th>
                                                                        <th>(min)</th>
                                                                        <th></th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>80</td>
                                                                        <td>60</td>
                                                                        <td>40</td>
                                                                        <td>462.96</td>
                                                                        <td>7.686</td>
                                                                        <td>60.23</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>/</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>82</td>
                                                                        <td>62</td>
                                                                        <td>42</td>
                                                                        <td>461.4</td>
                                                                        <td>7.67</td>
                                                                        <td>60.16</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>/</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>83</td>
                                                                        <td>63</td>
                                                                        <td>43</td>
                                                                        <td>457.77</td>
                                                                        <td>7.683</td>
                                                                        <td>59.58</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>/</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>84</td>
                                                                        <td>64</td>
                                                                        <td>44</td>
                                                                        <td>454.8</td>
                                                                        <td>7.68</td>
                                                                        <td>59.22</td>
                                                                        <td>25</td>
                                                                        <td>65</td>
                                                                        <td>稳态</td>
                                                                        <td>15</td>
                                                                        <td>/</td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>

                                                        </p>
                                                    </div>
                                                    <div class="tab-pane fade" id="re_l2">
                                                        <p class="table-responsive">
                                                            <table id="datatable_fixed_column" class="nowrap table table-striped table-bordered" width="100 % ">
                                                                <thead>
                                                                    <tr>
                                                                        <th>老化时间</th>
                                                                        <th>老化测试条件</th>
                                                                        <th>老化测试类型</th>
                                                                        <th>老化样品工作条件</th>
                                                                        <th>老化测试设备</th>
                                                                        <th>老化测试标准</th>
                                                                        <th>老化测试单位</th>
                                                                        <th>老化测试操作人员</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>(h)</th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        <th></th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>0</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>100</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>200</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>300</td>
                                                                        <td>55℃</td>
                                                                        <td>高温老化测试</td>
                                                                        <td>点亮</td>
                                                                        <td>Espec SEG-081 高温试验箱</td>
                                                                        <td>CSA020-2014</td>
                                                                        <td>常州研究院</td>
                                                                        <td>钱诚</td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>

                                                        </p>
                                                    </div>
                                                </div>

                                            </div> -->


                                        </div>

                                    </div>
                                    <!-- end widget content -->

                                </div>
                                <!-- end widget div -->

                            </div>
                            <!-- end widget -->

                        </article>
                        <!-- WIDGET END -->

                    </div>
                    <!-- end row -->
                </section>
                <!-- end widget grid -->
            </div>
            <!-- END #MAIN CONTENT -->
        </div>
        <!-- END #MAIN PANEL -->

        <ElGallery id="proatt_gallery" :files="product.attachment_pic_list" :filedir="appsettings.product_attachment"></ElGallery>

        <ElGallery v-for="(prj,index) in projects" v-bind:key="index" v-if="prj.attachments_pic!=null&&prj.attachments_pic!=undefined&&prj.attachments_pic.length>0" :id="'prjatt_gallery_'+index" :files="prj.attachments_pic" :filedir="appsettings.project_attachment"></ElGallery>

        <div class="modal fade" id="videomodel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" style="width:800px; height: 580px;">
                <ElVideoPlayer ref="player" @close="hideVideoModel()"></ElVideoPlayer>
            </div>
        </div>
    </div>
</template>

<script>
import "common/httputils"; //引用js
import htmlutils from "common/htmlutils";
import ElPageFrame from "components/el-PageFrame/el-PageFrame";
import ElGallery from "components/el-gallery/el-gallery";
import ElVideoPlayer from "components/el-videoplayer/el-videoplayer";

export default {
  name: "app",
  data: function() {
    return {
      //数据
      id: "",
      categories: [],
      product: {},
      related_products: [],
      company: {}
    };
  },
  components: {
    ElPageFrame,
    ElGallery,
    ElVideoPlayer
  },
  created: function() {
    htmlutils.setPageTitle(appsettings.title);
    //请求数据
    this.id = $.getUrlParam("id");
    var data = { seqid: this.id };
    $.post_json(
      appsettings.apiroot + "product/cidepinfo",
      data,
      this.callback_getallinfo
    );
  },
  mounted: function() {
    var that = this;
    setTimeout(function() {
      pageSetUp();

      $("#videomodel").on("hide.bs.modal", function() {
        that.closeVideo();
      });
    }, 0);
  },
  computed: {
    projects: function() {
      if (this.product != null) {
        return this.product.project_list;
      } else {
        return [];
      }
    },
    paragroups: function() {
      if (this.product != null) {
        return this.product.parameter_groups;
      } else {
        return [];
      }
    },
    slaves: function() {
      if (this.product != null) {
        return this.product.slaves;
      } else {
        return [];
      }
    }
  },
  methods: {
    callback_getallinfo: function(result) {
      if (result != null && result.status == 0) {
        //meta
        htmlutils.setPageTitle(result.data.meta.title);
        htmlutils.setPageKeywords(result.data.meta.keywords);
        //console.log(result.data);
        this.product = result.data.product;
        this.company = result.data.company;
        this.related_products = result.data.related_products;

        this.$nextTick(function() {
          //渲染完成后 重置swiper图片尺寸
          $("#pro-imglist .carousel-inner>.item>div").each(function() {
            $(this).width(
              $(this)
                .parent()
                .width()
            );
            $(this).height($(this).width());
          });
          $("#pro-attimg .carousel-inner>.item>div").each(function() {
            $(this).width(
              $(this)
                .parent()
                .width()
            );
            $(this).height($(this).width() * 2 / 3);
          });
          //初始化 产品图库 superbox
          $("#tab-r4 .superbox").SuperBox();
        });
      } else if (result.status == 1) {
        showInfo(
          "今日浏览产品数量已达" + result.data.limit + "条,。",
          "",
          "返回",
          "/p/p_list.html",
          "",
          ""
        );
      } else if (result.status == 2) {
        showInfo("今日浏览产品数量已达到上限，明日再来", "", "", "m", "确定", "/p/p_list.html");
      } else if (result.status > 0) {
        showInfo("今日浏览产品数量已达到上限，明日再来", "", "", "m", "确定", "/p/p_list.html");
      }
    },

    parseReferParameter: function(para) {
        if(para!=undefined&&para.length>0){
            return JSON.parse(para);
        }
        else{
            return [];
        }
    },

    newproject: function() {
      $.checklogin();
      window.location.href =
        "/p/new_prj.html?id=" +
        this.product.core.id +
        "&t=product" +
        "&ref=" +
        encodeURIComponent(window.location.href);
    },
    resetPrjPicSize: function() {
      //用settimeout确保在tab页add class active后执行
      setTimeout(function() {
        $(".prj_attimg .carousel-inner>.item>div").each(function() {
          $(this).width(
            $(this)
              .parent()
              .width()
          );
          $(this).height($(this).width() * 2 / 3);
        });
      }, 0);
    },

    collect: function() {
      //收藏
      var data = {};
      data.target_oid = this.product.core.id;
      data.target_type = 2;
      var url = "account/favorite";
      if (this.product != null && this.product.favorited) {
        url = "account/favorite/cancel";
      }
      $.post_json(appsettings.apiroot + url, data, this.callback_collect);
    },
    callback_collect: function(result) {
      if (result != null && result.status == 0) {
        this.product.favorited = !this.product.favorited;
      } else {
        //failed
      }
    },

    playVideo: function(src, title) {
      this.$refs.player.playVideo(src, title);
    },

    closeVideo: function() {
      this.$refs.player.closeVideo();
    },

    hideVideoModel: function() {
      $("#videomodel").modal("hide");
    },

    isImg: function(type) {
      type = (type || "").toUpperCase();
      if (
        type == ".JPG" ||
        type == ".JPEG" ||
        type == ".BMP" ||
        type == ".PNG"||
        type == ".GIF"
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
    }
  }
};
</script>

<style>
.product-content {
  margin-top: 0;
}
.jarviswidget .widget-body {
  min-height: 10px;
}
.dt-toolbar-footer {
  padding: 0;
  border-top: 0;
}
.well {
  padding: 10px;
}
.superbox-show .superbox-imageinfo {
  display: none;
}

.carousel-inner > .item {
  /* 水平居中 垂直居中 */
  width: 100%;
}

.carousel-inner > .item > div {
  /* 水平居中 垂直居中 */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: Center;
}

#pro-imglist .carousel-inner > .item > div {
  width: 100% !important;
  height: auto !important;
  display: flex;
  justify-content: center;
  align-items: Center;
}

.description.description-tabs {
  font-size: 15px;
}

.description-tabs .tab-pane p {
  margin-top: 3px;
}

.carousel-inner > .item > div > img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

#pro-imglist .carousel-inner > .item > div > img {
  /* width: 400px;
    height: auto; */
  max-height: 100%;
  margin: 0 auto;
}

.tab-content {
  min-height: 500px;
}
.tab-pane p img {
  max-width: 100%;
}
.carousel-control.left,
.carousel-control.right {
  background-image: none;
}
.tabs-left > .tab-content {
  margin-left: 135px;
}
.nowrap th {
  white-space: nowrap !important;
}
</style>
