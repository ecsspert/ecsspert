<? if($_GET['link']) { 
	$link = $_GET['link'];
	$seconds = 3;
?>
<html>
  <head>
    <title>Curiosity redirect</title>
    <meta http-equiv="refresh" content="<? echo $seconds; ?>;URL=<? echo $link; ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta charset="utf-8">
    <? echo css("/assets/styles/style.min.css",false,true); ?>
    <style type="text/css">
    	body {
    		color: #fff;
    	}
    	.ecsspert {
    		display: block;
    		font-size: 3px;
    		margin: 20px auto 0;
    	}
    	p {
    		line-height: 1.5em;
    		margin: 60px 0 0;
    		text-align: center;
    		padding: 0 10px;
    	}
    	a {
    		color: #74C9AB;
    		text-decoration: underline;
    	}
    </style>
    <?php echo js("/assets/js/prefixfree.min.".$site->version().".js"); ?>
  </head>
  <body>
  	<div class="ecsspert" href="#home">eCSSpert</div>
    <p>We are redirecting you to <a href="<? echo $link; ?>"> <? echo $link; ?></a>.<br />You will be redirected to the new location automatically in <? echo $seconds; ?> seconds.</p>
	<? snippet('tracking'); ?>
  </body>
</html>
<? } ?>