<? $home = $pages->find('home'); ?>
<div id="home-tab" class="tab">
    <?php snippet("header-tab"); ?>
    <div class="container-holder">
        <div class="container">
            <p class="title"><?php echo html($home->title()); ?></p>

            <p class="text"><?php echo html($home->intro()); ?></p>

            <?php
            /*-----------------------------------------------------------------------------
            -* Get categories
            -*---------------------------------------------------------------------------*/
            foreach ($pages->visible() as $category) {
                // get featured post
                $post = $pages->find( $category->uri."/".$category->featured() );
                $previewImage = "/assets/img/" . $category->uri . "/";
                if( $category->uri !== 'qanda' ) {
                    $previewImage .= $category->featured();
                } else {
                    $previewImage .= $category->uri;
                }
                $previewImage .= '-120x120.png';
            ?>
                <a href="<?php echo $post->url(); ?>#project" id="<?php echo $category->uri; ?>" class="project fbox">
                    <img  class="preview fleft" src="<?php echo $previewImage; ?>" width="120" height="120" alt="<?php echo $post->title(); ?>" />
                    <span class="details">
                        <span class="post-title"><?php echo $post->title(); ?>, part of</span>
                        <span class="title"><?php echo $category->title(); ?></span>
                        <span class="text"><?php echo $category->intro(); ?></span>
                    </span>
                </a>
            <?php } ?>
        </div>
    </div>
    <?php snippet("footer-tab"); ?>
</div>