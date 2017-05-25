(function() {

	// ESPECIFICO DE LANDING HOTSALE
	var landingS8 = {
		init: function() {
	    $(document).on('ready',function() {
	      landingS8.ready();
				retinajs( $('img') );
	    });
	  },

	  ready: function() {
			landingS8.videoSelector();
			landingS8.scrollToElement();
			landingS8.smoothscrollDocument();
	  },

		smoothscrollDocument : function() {
			var nice = false;
			nice = $("html").niceScroll({
				cursorcolor: "#424242",
				cursorborder: "1px solid #fff",
				scrollspeed: 60,
				mousescrollstep: 40,
				preventmultitouchscrolling: true,
				enablekeyboard: true
			});
		},

		videoSelector : function() {
			var $videoElement = $('.samsS8__full__videos__box'),
					$videoLayer  	= $('.video__layer'),
					$videoIframe  = $videoLayer.find('.video__layer__cont > iframe'),
					$videoClose  	= $videoLayer.find('.video__layer__close');

			$videoElement.on('click', _openVideo);
			$videoClose.on('click', _closeVideo);

			function _openVideo() {
				var $id = $(this).data('video');

				$videoLayer.fadeIn(350);

				$videoIframe.attr('src','https://www.youtube.com/embed/'+$id+'?rel=0&amp;controls=0&amp;showinfo=0');
			}

			function _closeVideo() {
				$videoIframe.attr('src','');

				$videoLayer.fadeOut(350);
			}
		},

		scrollToElement : function() {
			var $parent	= $('.samsS8__full__btnvolver'),
					$element	= $parent.find('.btn');

			$element.on('click', function(event) {
				var $this = $(this).attr('href');

				event.preventDefault();

				$('html, body').scrollTo($this, 350, 'easeOutCubic');
			})
		}
	};

	landingS8.init();

})();
