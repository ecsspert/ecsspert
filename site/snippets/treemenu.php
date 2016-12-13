<?php
	if(!isset($subpages))
		$subpages = $site->pages();

	foreach($subpages->visible() AS $p):
		if($p->hasChildren()) {
			snippet('treemenu', array('subpages' => $p->children()));
		} else {
			echo '<p>'.$p->url().'</p>';
		}
	endforeach
?>