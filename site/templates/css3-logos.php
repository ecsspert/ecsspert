<?php
/*-----------------------------------------------------------------------------
-* HTML
-*---------------------------------------------------------------------------*/
$GLOBALS['html'] = multiline( $page->html() );
/*-----------------------------------------------------------------------------
-* Info
-*---------------------------------------------------------------------------*/
if(!$page->hideui()) {
    $GLOBALS['html'] = $GLOBALS['html'] . multiline('
<div id="info">
    <h1 class="post-title">' . $page->title() . '</h1>
    <div class="post-info">' . ( $page->about() ? $page->about() : $page->parent()->general_description() ) . '</div>
    <a href="'.$page->url().'#home" target="_top" class="ecsspert">eCSSpert.com</a>
    ' . ( $page->link() ? '<a href="/redirect?link=' . $page->link() . '" onmousedown="return false" class="reference">Like the logo? Buy the T-shirt</a>' : '' ) . '
</div>');
}
/*-----------------------------------------------------------------------------
-* CSS
-*---------------------------------------------------------------------------*/
$GLOBALS['css'] = multiline($page->css());
/*-----------------------------------------------------------------------------
-* COLOR
-*---------------------------------------------------------------------------*/
$color = $page->color() == '' ? '#000' : $page->color();
/*-----------------------------------------------------------------------------
-* Logo
-*---------------------------------------------------------------------------*/
$GLOBALS['css'] = multiline('/*      ________________                 __                         
  ___  / ____/ ___/ ___/____  ___  _____/ /_    _________  ____ ___ 
 / _ \/ /    \__ \\\__ \/ __ \/ _ \/ ___/ __/   / ___/ __ \/ __ `__ \
/  __/ /___ ___/ /__/ / /_/ /  __/ /  / /_   _/ /__/ /_/ / / / / / /
\___/\____//____/____/ .___/\___/_/   \__/  (_)___/\____/_/ /_/ /_/ 
                    /_/                                         */
') . $GLOBALS['css'];

/*-----------------------------------------------------------------------------
-* GENERAL CSS
-*---------------------------------------------------------------------------*/
$GLOBALS['css'] = $GLOBALS['css'] . multiline('
/*---------------------------------------------------------
-* General Styles
-*-------------------------------------------------------*/
.icon, .icon * {
    display: block;
    position: absolute;
}
.icon {
    top: 35% !important;
}
/*---------------------------------------------------------
-* Info
-*-------------------------------------------------------*/
/*
 * Web Fonts from fontspring.com
 *
 * All OpenType features and all extended glyphs have been removed.
 * Fully installable fonts can be purchased at http://www.fontspring.com
 * The fonts included in this stylesheet are subject to the End User License you purchased
 * from Fontspring. The fonts are protected under domestic and international trademark and 
 * copyright law. You are prohibited from modifying, reverse engineering, duplicating, or
 * distributing this font software.
 * (c) 2010-2013 Fontspring
 * 
 * The fonts included are copyrighted by the vendor listed below.
 * Vendor:      Fontfabric
 * License URL: http://www.fontspring.com/fflicense/fontfabric
 */
@font-face {
    font-family: "ZagBoldRegular";
    src: url("/assets/fonts/ZagBold/Zag_Bold-webfont.eot");
    src: url("/assets/fonts/ZagBold/Zag_Bold-webfont.eot?#iefix") format("embedded-opentype"),
         url("/assets/fonts/ZagBold/Zag_Bold-webfont.woff") format("woff"),
         url("/assets/fonts/ZagBold/Zag_Bold-webfont.ttf") format("truetype"),
         url("/assets/fonts/ZagBold/Zag_Bold-webfont.svg#ZagBoldRegular") format("svg");
    font-weight: normal;
    font-style: normal;
}
#info {
    bottom: 0;
    color: ' . $color . ';
    font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-size: 16px;
    height: 40%;
    position: absolute;
    text-align: center;
    width: 100%;
}
#info .post-title {
    color: inherit;
    font-family: "ZagBoldRegular", "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-size: 48px;
    margin: 0;
    padding: 30px 0 0;
}
#info .post-info {
    line-height: 1.35em;
    margin-top: 1em;
}
#info .post-info p {
    margin: 0;
}
#info .post-info a {
    font-weight: bold;
    color: inherit;
    text-decoration: underline;
}
#info .ecsspert {
    font-size: 2px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.5;
    transition: all 0.5s ease;
}
#info .ecsspert:hover {
    opacity: 1;
}');
/*-----------------------------------------------------------------------------
-* Logo
-*---------------------------------------------------------------------------*/
if($page->hidelogo() != '1') {
    snippet('ecsspert-logo-css');
    $GLOBALS['css'] = $GLOBALS['css'] . '
#info .ecsspert {
    border: 2em solid transparent;
    border-bottom-width: 1em;
    border-right-width: 1em;
    font-size: 2px;
    margin-left: auto;
    margin-right: auto;
    opacity: 1;
    transition: all 0.5s ease;
}
#info .ecsspert:hover {
    opacity: 1;
}';
}
/*-----------------------------------------------------------------------------
-* Reference link
-*---------------------------------------------------------------------------*/
if($page->link()){
    $GLOBALS['css'] = $GLOBALS['css'] . '
.reference {
    background: #fc0;
    border-radius: 3px;
    box-shadow: 0 -3px 0 rgba(0,0,0,.5) inset;
    color: #332900;
    display: inline-block;
    margin: 10px 5px 5px;
    padding: 5px 10px 8px 10px;
    text-decoration: none;
    text-shadow: 0 1px 0 #ff0;
}
.reference:hover {
    box-shadow: 0 -5px 0 rgba(0,0,0,.5) inset;
    margin-top: 8px;
    padding-bottom: 10px;
}
.reference:active {
    box-shadow: 0 -1px 0 rgba(0,0,0,.5) inset;
    margin-top: 12px;
    padding-bottom: 6px;
}';
}
/*-----------------------------------------------------------------------------
-* Menu and tabs
-*---------------------------------------------------------------------------*/
snippet('menu-and-tabs');
?>