<?php
/*-----------------------------------------------------------------------------
-* HTML
-*---------------------------------------------------------------------------*/
$GLOBALS['html'] = multiline( $page->html() );
/*-----------------------------------------------------------------------------
-* CSS
-*---------------------------------------------------------------------------*/
$GLOBALS['css'] = multiline($page->css());
/*-----------------------------------------------------------------------------
-* Menu and tabs
-*---------------------------------------------------------------------------*/
snippet('menu-and-tabs');
?>