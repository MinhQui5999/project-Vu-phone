$(function () {
    //carousel
    $(".owl-slides").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
            10000: {
                item:1,
            },
        },
    });
   
    $('.article-carousel').owlCarousel({
        center: true,
        dots: false,
        nav: true,
        loop: true,
        margin: 10,
        responsive: {
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            10000: {
                items: 2
            }
        }
    });

    $('.article-carousel-product').owlCarousel({
        center: true,
        dots: false,
        nav: true,
        loop: true,
        margin: 10,
        responsive: {
            600: {
                items: 2
            },
            1000: {
                items: 6
            },
            10000: {
                items: 6
            }
        }
    });
    

    //animmation
    AOS.init(
        {
            once: true,
        }
    );
    //button-croll to top
    $.backToTop({
        // background color
        backgroundColor: '#BE1E2D',

        // text color
        color: '#FFFFFF',
    });

    //stick menu
    $('.snazzymenu').snazzyMenu({
        theme:"",
    });

});