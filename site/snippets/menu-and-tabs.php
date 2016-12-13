<?php snippet('header', array('isPost' => 1)); ?>
<body class="<?php echo $page->parent()->uri(); ?> grv1">
	<div id='left-tab'>
		<?php snippet('home-tab'); ?>
		<?php snippet('project-tab'); ?>
		<?php snippet('disqus'); ?>
	</div>
    <div id='window'>
<!-- Left menu -->
    	<div id='menu-left' class='post-menu' data-side='left'>
			<a href='#home' id='home' class='button open-tab' data-tab='home-tab'>
				<span class='home icon'></span>
				<span class='button-label'>Home</span>
			</a>
			<a href='#project' id='project' class='button open-tab' data-tab='project-tab'>
				<?php 
					$parent = $page->parent();
				?>
				<span class='<?php echo $parent->icon(); ?> icon'></span>
				<span class='button-label'><?php echo $parent->shorttitle(); ?></span>
			</a>
			<?php if( $page->hasPrevVisible() ) {
				$prevLink = $page->prev()->url();
				$prevTitle = $page->prev()->title();
			} else {
				$prevLink = $page->siblings()->visible()->last()->url();
				$prevTitle = $page->siblings()->visible()->last()->title();
			} ?>
			<a href="#comments" id='comments' class='button open-tab'>
				<span class='icon comments'></span>
				<span class='button-label'>Comments</span>
			</a>
			<div class='dropdown'>
				<div class='button'>
					<div class='icon share'></div>
					<div class='button-label'>Share</div>
				</div>

				<div class='dropdown-menu'>
					<a href='https://twitter.com/intent/tweet?url=<?php echo urlencode( thisURL() ); ?>&related=ecsspert' target='_blank' id='comments' class='button'>
						<span class='icon tweet'></span>
						<span class='button-label'>Twitter</span>
					</a>
					<a href='http://www.facebook.com/share.php?u=<?php echo urlencode( thisURL() ); ?>' target='_blank' id='comments' class='button'>
						<span class='icon facebook'></span>
						<span class='button-label'>Facebook</span>
					</a>
				</div>
			</div>
			<a href="#code" id="code" class='button'>
				<span class='icon code'></span>
				<span class='button-label'>Code</span>
			</a>
			<?php if( $page->hasNextVisible() ) {
				$nextLink = $page->next()->url();
				$nextTitle = $page->next()->title();
			} else if( $page->uri() !== $page->siblings()->visible()->first()->uri() ) {
				$nextLink = $page->siblings()->visible()->first()->url();
				$nextTitle = $page->siblings()->visible()->first()->title();
			} ?>
			<a href='<?php echo $prevLink; ?>' class='button prev'>
				<span class='previous icon'>&nbsp;</span>
			</a>
			<a href='<?php echo $nextLink; ?>' class='button next'>
				<span class='icon next'>&nbsp;</span>
			</a>
		</div>
<!-- POST -->
		<div id='post'>
<!-- Editors -->
<?php
?>
			<div id='editors' class='editorsHolder cols<?php echo $editors; ?>h'>
				<div id="css" class="editor">
					<h2 class="editor-label css">CSS</h2>
					<textarea data-mode='css'><?php echo str_replace('<br />','',$GLOBALS['css']); ?></textarea>
				</div>
				<div id="html" class="editor">
					<h2 class="editor-label html">HTML</h2>
					<textarea data-mode='html'><?php echo str_replace('<br />','',$GLOBALS['html']); ?></textarea>
				</div>
			</div>
<!-- Preview -->
			<div id='preview'><iframe id='iframe' src='/preview?uri=<?php echo $page->uri(); ?>&prefix=<?php echo $page->prefix(); ?>' frameBorder='0'>jidasjldsaljkdsajlkdsajlkdsajkldsajlkdsajlkdaslkjasd</iframe></div>
<!-- Post -->
		</div>
    </div>
<? snippet('post-js'); ?>
<? snippet('footer'); ?>