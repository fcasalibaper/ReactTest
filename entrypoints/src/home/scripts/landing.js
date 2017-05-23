// ESPECIFICO DE LANDING HOTSALE
var landingHS = {
	init: function() {
    $(document).on('ready',function() {
      landingHS.ready();
			//retinajs( $('img') );
    });
  },

  ready: function() {
    landingHS.vitrinasDestacada.wrapProduct();
    landingHS.vitrinasDestacada.categoriasDestacadas();
		landingHS.vitrinasDestacada.categoriasSecundarias();
		landingHS.listaDestacada.despliegaListas();
		landingHS.isSafari();

    if (!$('body').hasClass('hotsale2017')) {
      landingHS.listaDestacada.listaDestacada_height();
      // landingHS.listaDestacada.primariasSecundarias_height();
      // landingHS.listaDestacada.despliegaListas();
      $(window).on('load resize', function() {
        landingHS.listaDestacada.listaDestacada_height();
        // landingHS.listaDestacada.primariasSecundarias_height();
      })
    }

    $(document).ajaxSuccess(function( event, xhr, settings ) {
      if(settings.url.indexOf('user/welcome') > -1){
        landingHS.vitrinaCategorias.getCategories();
        landingHS.vitrinaCategorias.sliderConfigCategorias();
        landingHS.listaDestacada.listaDestacada_height();
        // landingHS.listaDestacada.primariasSecundarias_height();

        $(window).on('load resize', function() {
          landingHS.listaDestacada.listaDestacada_height();
          // landingHS.listaDestacada.primariasSecundarias_height();
        })
      }
    });
  },

	// SI ES APPLE DEVICE
  isAppleDevice: function() {
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/) != null) {
      return true;
    }
    return false;
  },

	isSafari : function() {
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
			$('.listaDestacada li').eq(8).find('.prodPrice').addClass('isSafari');
			$('.listaDestacada li').eq(15).find('.prodPrice').addClass('isSafari');
		}
	},

  vitrinasDestacada : {
    wrapProduct : function() {
      var $parent = $('.vitrinas__ofertas'),
          $li     = $parent.find('.shelf ul li');

      $li.each(function () {
        var $this     = $(this),
            $image    = $this.find('.image'),
            $title    = $image.siblings('h3'),
            $pricing  = $image.siblings('a'),
            $newCont  = $('<div class="pricing-detalle" />');

        $title.wrap($newCont);
        $this.find('.pricing-detalle').append($pricing);

      });
    },

    categoriasDestacadas : function() {
      var $categDestacada = $('.landHotsale__destacadas__primarias');

			$categDestacada.slick({
	        infinite: false,
	        slidesToShow: 6,
	        slidesToScroll: 6,
					arrows: true,
	        prevArrow : '<button type="button" class="slick-prev slick-arrow"><i class="material-icons">keyboard_arrow_left</i></button>',
	        nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="material-icons">keyboard_arrow_right</i></button>',
	        responsive : [
	          {
	            breakpoint: 992,
	            settings: {
	              slidesToShow: 6,
	              slidesToScroll: 6
	            }
	          },
	          {
	            breakpoint: 767,
	            settings: {
	              slidesToShow: 3,
	              slidesToScroll: 3
	            }
	          },
	          {
	            breakpoint: 480,
	            settings: {
	              slidesToShow: 2,
	              slidesToScroll: 2
	            }
	          }
	        ]
	      });

    },

		categoriasSecundarias : function() {
      var $categDestacada = $('.landHotsale__destacadas__secundarias');

      $categDestacada.slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow : '<button type="button" class="slick-prev slick-arrow"><i class="material-icons">keyboard_arrow_left</i></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="material-icons">keyboard_arrow_right</i></button>',
        responsive : [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      });
    }
  },

  vitrinaCategorias : {

    sliderConfigCategorias : function () {
      var $vitrinaCategorias = $(".vitrinaCategorias__content");

      $vitrinaCategorias.slick({
        infinite: false,
        slidesToShow: 11,
        slidesToScroll: 11,
        prevArrow : '<button type="button" class="slick-prev slick-arrow"><i class="material-icons">keyboard_arrow_left</i></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="material-icons">keyboard_arrow_right</i></button>',
        responsive : [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 8
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          }
        ]
      });
    },

    // TOMA CATEGORIAS DEL MENU HEADER
    getCategories : function () {
      var $vitrinaCategorias = $(".vitrinaCategorias__content");

      $('li#categoria').find('.menu-departamento h3 ul').each(function() {
        var $this     = $(this),
            $li       = $this.find('li.title a.menu-item-texto'),
            $href     = $li.attr('href'),
            $nameImg  = $this.attr('class'),
            $title    = $li.text();

        $vitrinaCategorias.append('<a href="'+ $href +'" class="box"><figure class="box__figure"><img src="/arquivos/category_img_'+ $nameImg +'.jpg" alt="" /></figure><h5> '+ $title +'</h5></a>');
      });

    }
  },

  listaDestacada : {

    // SACA CALCULO DEL ALTO DE "LAS MEJORES OFERTAS DE HOTSALE"
    listaDestacada_height : function() {
      var $list         = $('.listaDestacada').find('.shelf-lista-hotsale ul'),
          $li           = $list.find('li'),
          $li1          = $list.find('li').eq(0).outerHeight(),
          $li2          = $list.find('li').eq(5).outerHeight(),
          $li3          = $list.find('li').eq(9).outerHeight(),
          $li4          = $list.find('li').eq(14).outerHeight(),

          $lixs1        = $list.find('li').eq(2).outerHeight(),
          $lixs2        = $list.find('li').eq(4).outerHeight(),
          $lixs3        = $list.find('li').eq(6).outerHeight(),

          $liHeight     = ($li1 + $li2 + $li3 + $li4 ) + 15,
          $liHeightXs   = ($li1 + $lixs1 + $lixs2 + $lixs3 ) + 15;

			// SI ES MOBILE
      if (window.matchMedia('(max-width: 767px)').matches) {
        $list.css('height', $liHeightXs);
      } else {
        $list.css('height', $liHeight);
      }
    },

    // DESPLIEGA LISTA
    despliegaListas : function() {
      // LAS MEJORES OFERTAS DE HOTSALE
      landingHS.listaDestacada._listaDestacada_click('.listaDestacada');
    },

		// GENERAL - PASO PADRE PARA SUMAR CLASE .OPEN
    _listaDestacada_click : function(parent) {
      var $elementClicked = $(parent).find('.openmodule__content'),
          $textElement    = $elementClicked.find('h3 span'),
          $iconElement    = $elementClicked.find('i'),
          $despliega      = $(parent);

      $elementClicked.on('click', function() {

				console.log('hhs');

        $despliega.toggleClass('open');

        if ( $despliega.hasClass('open') ) {
          $textElement.text('Ver menos');
          $iconElement.text('keyboard_arrow_up')
        } else {
          $textElement.text('Ver más');
          $iconElement.text('keyboard_arrow_down');
        }
      });
    }
  }

};

// EJECUTA TODO
landingHS.init();
