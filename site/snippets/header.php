<?php error_reporting(E_ALL ^ E_NOTICE); ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title><?php 
            // home
            if( $page->ishome() ) {
                echo html($page->title() . " | " . html($site->title()));
            // category
            } else if( $page->hasChildren() ) {
                echo html($page->title() . " | " . html($site->title()));
            }
            // post
            else {
                echo html($page->title() . ' - ' . $page->parent()->general_title_suffix() . " | " . html($site->title()));
            }
        ?></title>
    <meta name="description" content="<?php
        // home
        if( $page->ishome() ) {
            echo html($page->description());
        // category
        } else if( $page->hasChildren() ) {
            echo html($page->intro());
        }
        // post
        else {
            echo html($page->title() . ' ' . $page->parent()->general_header_description() );
        }
    ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" /> 
    
    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
    <link rel="icon" href="/favicon.png" type="image/png" />
    <link rel="apple-touch-icon" href="/favicon.png" />

    <?php if( $isPost ) { ?>
        <!-- facebook -->
        <meta property="og:title" content="<?php echo $page->title() . ' - ' . $page->parent()->general_title_suffix(); ?>">
        <meta property="og:image" content="<?php echo 'http://' . $_SERVER['SERVER_NAME'] . '/assets/img/' . $page->uri() . '.png'; ?>" /> 
        <meta property="og:description" content="<?php echo strip_tags( $page->about() ? $page->about() : $page->parent()->general_description() ); ?>" />
        <meta property="og:url" content="<?php echo $page->url(); ?>" />
        <!-- end: facebook -->
    <?php } ?>
    <?php
        echo '<style>';
        if( $page->background() ) {
            echo '#window{ background-color: '.$page->background().' !important; }';
            echo '.post-menu .active { background-color: '.$page->background().'; }';
        }
        if( $page->color() ) {
            echo '#info, #info .post-title { color: '.$page->color().' !important; }';
        }
        echo '</style>';

        echo css("/assets/styles/style.min.css",false,true);
        echo css("/assets/styles/codemirror.css",false,true);
        echo css("/assets/styles/show-hint.css",false,true);
    ?>
    <?php echo js("/assets/js/prefixfree.min.js"); ?>
</head>