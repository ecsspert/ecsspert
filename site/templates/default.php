<?php snippet("header"); ?>
<div id="left-tab">
<?php 
if( $page->isHomePage() ) {
    snippet("home-tab");
    $hash = "#home";
    $uri = $page->featured();
}
else {
    $post = $pages->find( $page->uri() );
    $uri = $post->uri() . '/' . $post->featured();
	snippet("project-tab");
	$hash = "#project";
}
?>
</div>

<script>
    window.location = "/<?php echo $uri . $hash; ?>";
</script>
<?php snippet("footer"); ?>