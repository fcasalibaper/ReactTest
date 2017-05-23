var vitrinas = {
  init: function() {
    $(document).on('ready',function() {
      vitrinas.ready();
    });
  },

  ready: function() {
    vitrinas.sliderConfig();
    vitrinas.sliderConfigCategorias();
    vitrinas.vitrinasEmpty();

    if ($('body').hasClass('prueba')) {
      vitrinas.ellipsis();
      vitrinas.ListPrice_Equal_BestPrice();
      vitrinas.descuento_off();
      vitrinas.cuotaMenoraUno();
      vitrinas.quitar_Title();
      vitrinas.highlight.ahora12_18();
    }

    // AJAX CALL
    $(document).ajaxSuccess(function( event, xhr, settings ) {
      if(settings.url.indexOf('user/welcome') > -1){
        vitrinas.ellipsis();
        vitrinas.ListPrice_Equal_BestPrice();
        vitrinas.descuento_off();
        vitrinas.cuotaMenoraUno();
        vitrinas.quitar_Title();
        vitrinas.highlight.ahora12_18();
      }
    });
  },

  vitrinasEmpty : function () {
    const vit 		= $('.vitrina-module');

    vit.each(function () {
      const $vitContent = $(this).find('.vitrina');
      if (!$vitContent.html().length > 0) {
        $(this).hide();
      }
    })
  },

  sliderConfig : function () {
    $(".vitrina > .shelf ul").slick({
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      prevArrow : '<button type="button" class="slick-prev slick-arrow"><i class="material-icons">keyboard_arrow_left</i></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="material-icons">keyboard_arrow_right</i></button>',
      responsive : [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
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

  sliderConfigCategorias : function () {
    $(".vitrinaCategorias__content").slick({
      infinite: false,
      slidesToShow: 11,
      slidesToScroll: 11,
      prevArrow : '<button type="button" class="slick-prev slick-arrow"><i class="material-icons">keyboard_arrow_left</i></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="material-icons">keyboard_arrow_right</i></button>',
      responsive : [
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
            slidesToShow: 5,
            slidesToScroll: 5
          }
        }
      ]
    });
  },

  ellipsis : function () {
    $(".slick-slide h3 a, .vitrinas__ofertas li h3 a, .listaDestacada li a .prodPrice h5").dotdotdot({
      ellipsis  : '... ',
      watch   : true,
      wrap    : 'word',
      height    : 40
    });
  },

  descuento_off : function() {
    var $pill = $('.pill');

    // desktop
    $pill.find(".ListPriceMinusBestPriceInPercent").each(function() {
      var $this = $(this).text().toString(),
          f = $this.replace("%", ""),
          f = Number(f);

      $this = $this.replace("%", ""),
      $this = $this.replace(",", "."),
      $this = parseInt($this), $this = ($this + "%").toString();

      $(this).text( $this );

      // $('.pill').find('.ListPriceMinusBestPriceInPercent').filter(function(){
      //   $(this).text().replace('%','0');
      //   //return $.trim($(this).text()) == '0%' || '';
      // }).parent('.pill').addClass('conCero');

      var numm = $(this).text().match(/\d/g),
          numm = numm.join('');

      // si el descuento es menor al 5% lo oculta (sumandole la clase .conCero)
      if (numm <= 5 ) {
        //console.log($(this).text());
        $(this).parent('.pill').addClass('conCero');
      }
    }),

    $pill.find(".BestPrice, .ListPrice").each(function() {
      var e = $(this).text().toString();
      e = e.split(","), $(this).text(e[0])
    });
  },

  ListPrice_Equal_BestPrice : function() {
    var $parentShelf  = $('.shelf').find('li');

    $parentShelf.each(function() {
      var $prod     = $(this).find('.prodPrice'),
          $list     = $prod.find('.ListPrice'),
          $listNumb = $list.text().replace('$',''),
          $best     = $prod.find('.BestPrice'),
          $bestNumb = $best.text().replace('$','');

      // si el list-price y el best-price son iguales oculta el primero
      if ( $listNumb == $bestNumb ) {
        $list.hide();
      }
    });

    var $parentShelf2  = $('.shelf-lista-hotsale').find('li');
    $parentShelf2.each(function() {
      var $prod     = $(this).find('.prodPrice'),
          $list     = $prod.find('.ListPrice'),
          $listNumb = $list.text().replace('$',''),
          $best     = $prod.find('.BestPrice'),
          $bestNumb = $best.text().replace('$','');

      // si el list-price y el best-price son iguales oculta el primero
      if ( $listNumb == $bestNumb ) {
        $list.css('visibility', 'hidden');
      }
    });

    $parentShelf.each(function() {
      var $prod     = $(this).find('.prodPrice'),
          $list     = $prod.find('.ListPrice'),
          $listNumb = $list.text().replace('$',''),
          $best     = $prod.find('.BestPrice'),
          $bestNumb = $best.text().replace('$','');

      // si el list-price y el best-price son iguales oculta el primero
      if ( $listNumb == $bestNumb ) {
        $list.css('visibility', 'hidden');
      }
    });
  },

  cuotaMenoraUno : function () {
    $('.percent').each(function() {
      var $this = $(this).text();

      if ( $this <= 1) {
        var $txt      = 'En un pago con tarjeta',
            $parent  = $(this).parent().closest('li');

        // SI es menor a 1 cuota
        $parent.addClass('menos-de-uno');
        $parent.find('a .prodPrice').after('<em class="coutas"><span class="NumbersOfInstallment">'+$txt+'</span></em>');

        // si TAMBIEN el Off es 0
        if ($parent.find('.ListPriceMinusBestPriceInPercent').text() === '0%' || $parent.find('.ListPriceMinusBestPriceInPercent').text() === '0' ) {
          $parent.find('.pill').css('visibility','hidden');
        }

        // si TAMBIEN NO tiene precio de lista
        if (!$parent.find('.ListPrice').length) {
          //console.log('no tiene cuotas');
          $parent.find('a .BestPrice').after('<em class="coutas"><span class="NumbersOfInstallment">'+$txt+'</span></em>');
        }
        //.NumbersOfInstallment
      }
    });
  },

  quitar_Title : function () {
    var $vitrina  = $('.vitrina');

    $vitrina.each(function() {
      var $this     = $(this),
          $img      = $(this).find('.box-banner'),
          $boxTitle = $this.find('.shelf > h2');

      if ( $img.length > 0 ) {
        $boxTitle.hide();
      }

    });

  },

  highlight : {
    ahora12_18 : function (){
      var $flagParent  =  $('.HightLight');


      $flagParent.each(function () {
        var $this        = $(this),
            $ahora12     =  $this.find('.flag.ahora12, .flag.ahora-12'),
            $ahora18     =  $this.find('.flag.ahora18, .flag.ahora-18'),
            $bluedays    =  $this.find('.flag.blue-days');

        $ahora12.add($ahora18).add($bluedays).hide();

        if ($(this).length > 0){
          if($ahora12.length > 0){
            $ahora12.show();
          }
          if($ahora18.length > 0){
            $ahora12.hide();
            $ahora18.show();
          }
          if($bluedays.length > 0){
            $ahora12.hide();
            $ahora18.hide();
            $bluedays.show();
          }
        }
      });
    }
  },

}

// EJECUTA TODO
vitrinas.init();
