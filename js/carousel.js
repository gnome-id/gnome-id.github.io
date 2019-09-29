var owl = $('.owl-carousel');
$('.owl-carousel').owlCarousel({
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            loop:true,
            dots:true,
            autoplay:true
        },
        1200:{
            items:3,
            loop:false,
            autoplay: false,
            nav:false
        }
    }
})
