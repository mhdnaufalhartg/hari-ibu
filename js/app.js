$('.page-scroll').on('click', function (e) {
  var tujuan = $(this).attr('href')
  var elemetTujuan = $(tujuan)

  $(html, body).animate(
    {
      scrollTop: elemetTujuan.offset().top - 50,
    },
    1500,
  )
  e.preventDefault
})

var owl = $('.owl-carousel')
owl.owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
})
