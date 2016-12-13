<?php
/*-----------------------------------------------------------------------------
-* Defaults
-*---------------------------------------------------------------------------*/
$page->about= "QnA with eCSSpert";
$page->background= "#fc0";
$page->prefix= 1;
$page->hideui= 0;
/*-----------------------------------------------------------------------------
-* HTML
-*---------------------------------------------------------------------------*/
$GLOBALS['html'] = multiline( "
<h1>" . $page->title() . "?</h1>
" .
$page->answer() );
/*-----------------------------------------------------------------------------
-* CSS
-*---------------------------------------------------------------------------*/
$GLOBALS['css'] = multiline('html {
	background-image: linear-gradient(90deg, #f2f2f2 1px, transparent 1px), linear-gradient(180deg, #f2f2f2 1px, transparent 1px);
	background-position: 0px 0, 0 1em;
	background-size: 1em 1em, 1em 1em;
	font-size: 16px;
	height: 100%;
	padding-left: 3em;
}
body {
	border-left: 1px solid #ccc;
	box-shadow: -2px 0 0 #fff, -3px 0 0 #ccc;
	box-sizing: border-box;
	color: #111;
	font-size: 1em;
	margin: 0;
	min-height: 100%;
	padding: 2em 1em;
	position: relative;
	top: 1px; /* offset to match the horizontal stripes */
}

body * {
	font-family: monospace;
	font-size: 1em;
	line-height: 1em;
	margin: 0;
}

h1 {
	box-shadow: 0 -2px #ff0 inset;
	display: inline-block;
	margin-bottom: 2em;
}
p {
	line-height: 1em;
	margin-bottom: 1em;
}
pre {
	background: rgba(255,255,0, .6);
	border: 0;
	border-bottom: 1px solid transparent;
	box-sizing: border-box;
	margin: -1px 0 1em 0;
	padding: 1em;
	white-space: pre-wrap;
	width: 60em;
	word-wrap: break-word;
}
pre span {
	opacity: 0.45
}');
/*-----------------------------------------------------------------------------
-* Menu and tabs
-*---------------------------------------------------------------------------*/
snippet('menu-and-tabs');
?>