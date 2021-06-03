const responsive={
  0:{
     items:1
  },
   360:{
      items:1
   },
   560:{
      items:2
   },
   960:{
      items:3
   }
}

$(function(){
    
     $('.toggle-collapse').on('click',function(){
        $('.nav').toggleClass('collapse');
     })

     $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeOut:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive:responsive
     });

     //scroll up
     $('.move-up span').click(function(){
        $('html, body').animate({
           scrollTop:0
        }, 1000)
     })

     //instancier l'animation
     AOS.init();
});  