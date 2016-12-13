<?php echo js('assets/js/jquery-2.1.0.min.js'); ?>
<?php echo js('assets/js/post.min.js', false, true); ?>
<?php echo js('assets/js/codemirror.min.js', false, true); ?>

<script type="text/javascript">
    $(function(){
        ecsspert.init('<?php echo $page->uri() ?>');
    });
</script>