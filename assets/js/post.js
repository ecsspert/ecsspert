var myEditor;
$(function(){
	/*-----------------------------------------------------------------------------
	-* GUI
	-*---------------------------------------------------------------------------*/
	var egui = {
		animationTime: 400,
		closeTab: function(fake) {
			var that = this;
			$('.open-tab').removeClass('active');
			$('body').removeClass('meny-active');
			if(!fake) {
				if($('.show-code').length)
					window.location.href = '#code';
				else
					window.location.href = '#full';
			}
		},
		openCode: function() {
			$('body').addClass('show-code');
			$('#code').attr('href','#full');
			$('.button.prev, .button.next').each(function(){
				var href = $(this).attr('href');
				href = href.replace('#full','');
				href += '#code';

				$(this).attr('href', href);
			});
		},
		closeCode: function() {
			$("#code")
				.attr('href','#code')
				.removeClass('active');
			$('body').removeClass('show-code');
			$('.button.prev, .button.next').each(function(){
				var href = $(this).attr('href');
				href = href.replace('#code','');
				href += '#full';

				$(this).attr('href', href);
			});
		},
		init: function() {
			var that = this;
			// open on hash change
			if ("onhashchange" in window) {
				$(window)
					.on("hashchange", function(e){
						var hash = window.location.hash;
						that.closeTab(true);
						// this is so that the rotate to close tab animation
						// still shows the current tab
						$('#left-tab .tab').hide();

						if(hash){
							$(hash).addClass('active');
							$(hash+'-tab').show();
							if( $(hash).hasClass('open-tab') ) {
								$('body').addClass('meny-active');
							}

							/*-----------------------------------------------------------------------------
							-* custom code for each hash
							-*---------------------------------------------------------------------------*/
							switch(hash) {
								case '#comments':
									loadComments();
									break;
								case '#code':
									that.openCode();
									break;
								case '#full':
									that.closeCode();
									break;
							}
						} else {
							that.closeCode();
						}
					})
					// if(window.location.hash) {
						$(window).trigger('hashchange');
					// } else {
						// window.location.hash = '#code';
					// }
			} else {
				alert('Sorry, you need a modern browser that supports onhashchange. Almost nothing will work on ecsspert.com without this');
			}

			/*-----------------------------------------------------------------------------
			-* Next prev from the keyboard
			-*---------------------------------------------------------------------------*/
			$("body")
				.keydown(function(e){
					if( e.which == 37 ) //left - prev post
						window.location = $('.button.prev').attr("href");
					else if( e.which == 39 ) //right - next post
						window.location = $('.button.next').attr("href");
				});
			/*-----------------------------------------------------------------------------
			-* Click outside to close
			-*---------------------------------------------------------------------------*/
			// close on post click
			$('#window').click(function(e){
				if( $('.meny-active').length ) {
						that.closeTab();
				}
			});

			/*-----------------------------------------------------------------------------
			-* placeholder for :hover on touch devices
			-*---------------------------------------------------------------------------*/
			$('.dropdown').on('touchstart', function(e){
				$(this).toggleClass('hover');
			})

		}
	};
	egui.init();
});

/*-----------------------------------------------------------------------------
-* eCSSpert
-*---------------------------------------------------------------------------*/

var ecsspert = {
	editors: {},
	options: {
		cursorScrollMargin: 5,
		indentUnit: 4,
		lineNumbers: true,
		showCursorWhenSelecting: true,
		tabSize: 4,
		viewportMargin: 500
	},
	init: function( postURI ){
		var that = this;
		that.postURI = postURI;
		/* --------------------------------------------------------------------------------
		-* Editors
		-* ----------------------------------------------------------------------------- */
		$('#editors').keydown(function(e){
			e.stopPropagation();
		});
		$('#editors textarea').each(function(){
			mode = $(this).attr("data-mode");
			switch(mode) {
				case 'css':
					CodeMirror.commands.autocomplete = function(cm) {
	                    mode = cm.doc.modeOption.replace('text/','');
	                    CodeMirror.showHint(cm, CodeMirror.hint[mode]);
	                };
					var options = $.extend(that.options,{
						autofocus: true,
						mode: 'text/css',
						autoCloseBrackets: true,
						extraKeys: {"Ctrl-Space": "autocomplete"}
					});
					that.editors[mode] = CodeMirror.fromTextArea($(this)[0],options);
					break;
				case 'html':
					var options = $.extend(that.options,{
						autofocus: false,
						mode: 'text/html',
						autoCloseTags: true,
						extraKeys: {"Ctrl-Space": "autocomplete"}
					});
					that.editors[mode] = CodeMirror.fromTextArea($(this)[0],options);
					break;
			}

			that.editors[mode].on('change',that.livePreview);
		});
		that.livePreview();
		// this makes the editor render on iPads - before you would need to click it before the editor would show
		$(window).resize();
	},
	livePreview: function(){
		var ecsspertCode = {
			uri: ecsspert.postURI
		};
		for( editor in ecsspert.editors ) {
			ecsspertCode[editor] = ecsspert.editors[editor].getValue();
		}

		localStorage.setItem("ecsspertCode", JSON.stringify(ecsspertCode));
	}
};