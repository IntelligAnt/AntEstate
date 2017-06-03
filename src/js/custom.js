jQuery(document).ready(function($) {
    "use strict";
	
	/* PrettyPhoto Script
    ======================================================*/
    $('a[data-rel]').each(function () {
        $(this).attr('rel', $(this).data('rel'));
        $(".pretty-gallery a[rel^='prettyPhoto']").prettyPhoto();
    });


    /* Owl Slider For Banner 
    ======================================================*/
    if ($('#tl-banner-slider').length) {
        $('#tl-banner-slider').owlCarousel({
            loop:true,
            dots: false,
            nav:false,
            navText:'',
            items:1,
            autoplay: true,
            smartSpeed:2000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplayHoverPause:false,

        });
    }

     /* Owl Slider For Featured Slider
    ======================================================*/
    if ($('#tl-featured-slider').length) {
        $('#tl-featured-slider').owlCarousel({
            loop:true,
            dots: true,
            nav:true,
            navText:'',
            items:3,
            smartSpeed:1000,
            padding:0,
            margin: 30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:3,
                },
                1199:{
                    items:3,
                }
            }
        });
    }

    /* Owl Slider For Testimonial
    ======================================================*/
    if ($('#tl-testimonial-slider').length) {
        $('#tl-testimonial-slider').owlCarousel({
            loop:true,
            dots: true,
            nav:false,
            navText:'',
            items:1,
            autoplay: false,
            smartSpeed:1500,
        });
    }

    /* Owl Slider For Partners
    ======================================================*/
    if ($('#tl-partners-listed').length) {
        $('#tl-partners-listed').owlCarousel({
            loop:true,
            dots: false,
            nav:false,
            navText:'',
            items:6,
            autoplay: false,
            smartSpeed:1500,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                },
                768:{
                    items:3,
                },
                992:{
                    items:4,
                },
                1199:{
                    items:6,
                }
            }
        });
    }


    /* FILTERABLE Outer
    ======================================================*/
    if ($('.tl-filterOuter').length) {
        var $container = $('.tl-filterOuter');
        $container.imagesLoaded( function(){
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
        });
        $('.tl-filterlist a').on('click', function(){
            $('.tl-filterlist .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }


    
    /* Filterable SlideToggle
    ======================================================*/
    if ($('.tl-morefilter .more-filters').length) {
        $(".tl-morefilter .more-filters").on('click', function(){
            $("#filter-dropdown").slideToggle();
        });
    }

    /* Accordian For About Page
    ======================================================*/ 
    if ($('#myCollapsible').length) {
        $('#myCollapsible').collapse({
          toggle: false
        })
    }
    
    /* ImageLightbox Jquery Code
    ======================================================*/
    if ($('.tl-lightbox a').length) {
        $('.tl-lightbox a').imageLightbox({
            selector:       'id="imagelightbox"',   // string;
            allowedTypes:   'png|jpg|jpeg|gif',     // string;
            animationSpeed: 250,                    // integer;
            preloadNext:    true,                   // bool;            silently preload the next image
            enableKeyboard: true,                   // bool;            enable keyboard shortcuts (arrows Left/Right and Esc)
            quitOnEnd:      false,                  // bool;            quit after viewing the last image
            quitOnImgClick: false,                  // bool;            quit when the viewed image is clicked
            quitOnDocClick: true,                   // bool;            quit when anything but the viewed image is clicked
            onStart:        false,                  // function/bool;   calls function when the lightbox starts
            onEnd:          false,                  // function/bool;   calls function when the lightbox quits
            onLoadStart:    false,                  // function/bool;   calls function when the image load begins
            onLoadEnd:      false                   // function/bool;   calls function when the image finishes loading
        });
    }


});

