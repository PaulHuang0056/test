$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
              items:1,
              loop:true,
              margin:10,
              autoplay:true,
              autoplayTimeout:5000,
              autoplayHoverPause:true
      })

     $('.item').on('mouseout',function(){
          $(this).trigger('play.owl.autoplay',[500])
      })
      $('.item').on('mouseover',function(){
          $(this).trigger('stop.owl.autoplay')
      })

      $('.owl-nav .owl-prev').on('click',function(){
          $('.owl-theme .owl-carousel .item').trigger('prev.owl.carousel')
      })
      $('.owl-nav .owl-next').on('click',function(){
          $('.owl-theme .owl-carousel .item').trigger('next.owl.carousel')
      })
})
