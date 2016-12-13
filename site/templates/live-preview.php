<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?php echo html($site->title()) ." ". html($page->title()); ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="shortcut icon" href="/favicon.ico" />
        <style>body { margin: 0; }</style>
        <style id="css"></style>

        <?php if( isset($_GET["prefix"]) )
        if( $_GET["prefix"] == 1 ) {
            echo js("/assets/js/prefixfree.min.js");
        } ?>
        
        <script>
            window.addEventListener("storage", function(e){
                livePreview();
            });
            var livePreview = function(e){
                var ecsspertCode = JSON.parse( localStorage.getItem("ecsspertCode") ),
                    prefix = <?php echo isset($_GET["prefix"]) && $_GET["prefix"] != "0"  ? "1" : "0"; ?>,
                    uri = '<?php echo $_GET["uri"]; ?>';
                
                if( ecsspertCode && ecsspertCode.uri == uri ){
                    if( ecsspertCode.html || ecsspertCode.html === "" )
                        document.getElementById("html").innerHTML = ecsspertCode.html;
                    
                    if( ecsspertCode.css || ecsspertCode.css === "" )
                    document.getElementById("css").innerHTML = prefix ? PrefixFree.prefixCSS( ecsspertCode.css ) : ecsspertCode.css;
                }
            }
        </script>
    </head>
    <body id="html" onload="livePreview();"></body>
</html>