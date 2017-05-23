// SLIDER PRINCIPAL
var sliderPrincipal = {
	init: function() {
    $(document).on('ready',function() {
      sliderPrincipal.ready();
    });
  },

  ready: function() {
    sliderPrincipal.sliderPrincipalConfig();
  },

  sliderPrincipalConfig : function () {
		var $fullbanner = $(".full-banner");

    $(".full-banner").slick({
			lazyLoad: 'ondemand',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:true,
      prevArrow : '<button type="button" class="slick-prev slick-arrow"><i></i></button>',
      nextArrow : '<button type="button" class="slick-next slick-arrow"><i></i></button>'
    })
  }
}
sliderPrincipal.init();
