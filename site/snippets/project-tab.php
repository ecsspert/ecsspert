<?
if( $page->parent() ) {
    $project = $page->parent();
} else {
    $project = $page;
}
?>
<div id="project-tab" class="tab">
    <?php snippet("header-tab"); ?>
    <div class="container-holder <?php echo $project->uri; ?>">
        <div class="container">
            <p class="title"><?php echo html($project->title()); ?></p>
            <p class="text"><?php echo html($project->intro()); ?></p>

            <?php
            /*-----------------------------------------------------------------------------
            -* Featured post
            -*---------------------------------------------------------------------------*/
            $featuredUri = $project->uri."/".$project->featured();
            $featured = $pages->find( $featuredUri );
            ?>
            <a href="<?php echo $featured->url(); ?>" class="featured post">
                <span class="preview" style="background: url(/assets/img/<?php echo $featured->uri;?>-428x150.png) no-repeat 50% 0;"><?php echo $featured->title(); ?></span>
                <span class="stats"><?php echo $featured->title(); ?></span>
            </a>
            <div class="projects fbox">
            <?php
            /*-----------------------------------------------------------------------------
            -* Get categories
            -*---------------------------------------------------------------------------*/
            foreach ($project->children()->visible() as $post) {
                if( $post->uri() !== $featuredUri ) {

            ?>
                <a href="<?php echo $post->url(); ?>" class="post fleft">
                    <span class="preview" style="background: url(/assets/img/<?php echo $post->uri;?>-428x150.png) no-repeat 50% 0;"><?php echo $post->title(); ?></span>
                    <span class="stats"><?php echo $post->title(); ?></span>
                </a>
            <?php 
                }
            }
            ?>
            </div>
        </div>
    </div>
    <?php snippet("footer-tab"); ?>
</div>