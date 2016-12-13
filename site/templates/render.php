<?php 
    error_reporting(E_ALL ^ E_NOTICE);
    if( $_GET["uid"] != '' ) {
    	$post = $pages->find( $_GET["uid"] );
    } else {
    	echo "Missing ID";
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?php echo html($site->title()) ?> - <?php echo html($page->title()) ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="shortcut icon" href="/favicon.ico" />

        <style>
        	body {
        		margin: 0;
                overflow: hidden;
        	}
            * {
                animation-play-state: paused;
            }
        </style>
        <style id="css"><?php echo $post->css(); ?></style>
        <?php if( $post->prefix() == "1" ) {
            echo js("/assets/js/prefixfree.min.js");
        } ?>
    </body>
    </head>
    <body id="html"><?php echo $post->html(); ?></body>
</html>
