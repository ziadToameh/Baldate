﻿<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ucSliderBottom.ascx.cs"
    Inherits="UserControls_ucSliderBottom" %>
    <!-- it works the same with all jquery version from 1.x to 2.x -->
    <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
     <script type="text/javascript" src="js/jssor.core.js"></script>
    <script type="text/javascript" src="js/jssor.utils.js"></script>
    <script type="text/javascript" src="js/jssor.slider.js"></script>
<script src="js/scripts.js"></script>
    <!-- Jssor Slider Begin -->
    <!-- You can move inline styles (except 'top', 'left', 'width' and 'height') to css file or css block. -->
    <div id="slider1_container" style="position: relative; top: 0px; left: 0px; width: 810px; height: 300px; background: #000; overflow: hidden; ">

        <!-- Loading Screen -->
        <div u="loading" style="position: absolute; top: 0px; left: 0px;">
            <div style="filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block;
                background-color: #000000; top: 0px; left: 0px;width: 100%;height:100%;">
            </div>
            <div style="position: absolute; display: block; background: url(img/loading.gif) no-repeat center center;
                top: 0px; left: 0px;width: 100%;height:100%;">
            </div>
        </div>

        <!-- Slides Container -->
        <div u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width: 600px; height: 300px;
            overflow: hidden;">
            <div>
                <img src="img/photography/002.jpg" />
                <div u="thumb">
                    <img class="i" src="img/photography/thumb-002.jpg" /><div class="t">Banner Rotator</div>
                    <div class="c">360+ touch swipe slideshow effects</div>
                </div>
            </div>
            <div>
                <img src="../img/photography/003.jpg" />
                <div u="thumb">
                    <img class="i" src="../img/photography/thumb-003.jpg" /><div class="t">Image Gallery</div>
                    <div class="c">Image gallery with thumbnail navigation</div>
                </div>
            </div>
            <div>
                <img src="../img/photography/004.jpg" />
                <div u="thumb">
                    <img class="i" src="../img/photography/thumb-004.jpg" /><div class="t">Carousel</div>
                    <div class="c">Touch swipe, mobile device optimized</div>
                </div>
            </div>
            <div>
                <img src="../img/photography/005.jpg" />
                <div u="thumb">
                    <img class="i" src="../img/photography/thumb-005.jpg" /><div class="t">Themes</div>
                    <div class="c">30+ professional themems + growing</div>
                </div>
            </div>
            <div>
                <img src="../img/photography/006.jpg" />
                <div u="thumb">
                    <img class="i" src="../img/photography/thumb-006.jpg" /><div class="t">Tab Slider</div>
                    <div class="c">Tab slider with auto play options</div>
                </div>
            </div>
        </div>
        
        <!-- ThumbnailNavigator Skin Begin -->
        <div u="thumbnavigator" class="jssort11" style="position: absolute; width: 200px; height: 300px; left:605px; top:0px;">
            <!-- Thumbnail Item Skin Begin -->
            <style>
                /* jssor slider thumbnail navigator skin 11 css */
                /*
                .jssort11 .p            (normal)
                .jssort11 .p:hover      (normal mouseover)
                .jssort11 .pav          (active)
                .jssort11 .pav:hover    (active mouseover)
                .jssort11 .pdn          (mousedown)
                */
                .jssort11
                {
                	font-family: Arial, Helvetica, sans-serif;
                }
                .jssort11 .i, .jssort11 .pav:hover .i
                {
                	position: absolute;
                	top:3px;
                	left:3px;
                	WIDTH: 60px;
                	HEIGHT: 30px;
                	border: white 1px dashed;
                }
                * html .jssort11 .i
                {
                	WIDTH /**/: 62px;
                	HEIGHT /**/: 32px;
                }
                .jssort11 .pav .i
                {
                	border: white 1px solid;
                }
                .jssort11 .t, .jssort11 .pav:hover .t
                {
                	position: absolute;
                	top: 3px;
                	left: 68px;
                	width:129px;
                	height: 32px;
                	line-height:32px;
                	text-align: center;
                	color:#fc9835;
                	font-size:13px;
                	font-weight:700;
                }
                .jssort11 .pav .t, .jssort11 .phv .t, .jssort11 .p:hover .t
                {
                	color:#fff;
                }
                .jssort11 .c, .jssort11 .pav:hover .c
                {
                	position: absolute;
                	top: 38px;
                	left: 3px;
                	width:197px;
                	height: 31px;
                	line-height:31px;
                	color:#fff;
                	font-size:11px;
                	font-weight:400;
                	overflow: hidden;
                }
                .jssort11 .pav .c, .jssort11 .phv .c, .jssort11 .p:hover .c
                {
                	color:#fc9835;
                }
                .jssort11 .t, .jssort11 .c
                {
                	transition: color 2s;
                    -moz-transition: color 2s;
                    -webkit-transition: color 2s;
                    -o-transition: color 2s;
                }
                .jssort11 .p:hover .t, .jssort11 .phv .t, .jssort11 .pav:hover .t, .jssort11 .p:hover .c, .jssort11 .phv .c, .jssort11 .pav:hover .c
                {
                	transition: none;
                    -moz-transition: none;
                    -webkit-transition: none;
                    -o-transition: none;
                }
                .jssort11 .p
                {
                	background:#181818;
                }
                .jssort11 .pav, .jssort11 .pdn
                {
                	background:#462300;
                }
                .jssort11 .p:hover, .jssort11 .phv, .jssort11 .pav:hover
                {
                	background:#333;
                }
            </style>
            <div u="slides" style="cursor: move;">
                <div u="prototype" class="p" style="position: absolute; width: 200px; height: 69px; top: 0; left: 0;">
                    <thumbnailtemplate style=" width: 100%; height: 100%; border: none;position:absolute; top: 0; left: 0;"></thumbnailtemplate>
                </div>
            </div>
            <!-- Thumbnail Item Skin End -->
        </div>
        <!-- ThumbnailNavigator Skin End -->
        <a style="display: none" href="http://www.jssor.com">html slider</a>
    </div>
    <!-- Jssor Slider End -->