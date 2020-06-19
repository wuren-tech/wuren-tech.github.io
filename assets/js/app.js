/*-------------------------------------------------*/
/*  Template Name: PatLan
/*  Author: CODASTROID
/*  Version: 1.0.0
/*  File Description: Main JavaScript File
/*-------------------------------------------------*/
/*  Table of Contents:
/*---------------------
/*      + Background Image
/*      + Owl Carousel Slider
/*      + Navbar Placeholder
/*      + Contact Form
/*      + When Document Is Ready
/*      + When Window Is Loaded
/*      + When Window Is Scrolled
/*      + When Window Is Resized
/*-------------------------------------------------*/


(function($) {

    "use strict";

    /*-------------------------------------------------*/
    /* BACKGROUND IMAGE
    /*-------------------------------------------------*/
    var bgImage = function() {
        var bgImgSelector = $("[data-bg-img]");
        if (bgImgSelector.length) {
            bgImgSelector.each(function() {
                var dataBgImg = $(this).attr('data-bg-img');
                var cssBgImg = $(this).css('background-image');
                var bgImg = 'url(' + dataBgImg + ')';
                if (cssBgImg !== undefined && cssBgImg !== '' && cssBgImg !== 'none') {
                    bgImg = cssBgImg + ', ' + bgImg;
                }
                if (typeof dataBgImg !== typeof undefined && dataBgImg !== false && dataBgImg !== "") {
                    $(this).css('background-image', bgImg);
                }
            });
        }
    };


    /*-------------------------------------------------*/
    /* OWL CAROUSEL SLIDER
    /*-------------------------------------------------*/
    var carouselSlider = function() {
        var owlSelector = $('.owl-carousel');
        if (owlSelector.length) {
            owlSelector.each(function() {
                var carousel         = $(this),
                autoplay_hover_pause = carousel.data('autoplay-hover-pause'),
                loop                 = carousel.data('loop'),
                items_general        = carousel.data('items'),
                margin               = carousel.data('margin'),
                autoplay             = carousel.data('autoplay'),
                autoplayTimeout      = carousel.data('autoplay-timeout'),
                smartSpeed           = carousel.data('smart-speed'),
                nav_general          = carousel.data('nav'),
                navSpeed             = carousel.data('nav-speed'),
                xs_items             = carousel.data('xs-items'),
                xs_nav               = carousel.data('xs-nav'),
                sm_items             = carousel.data('sm-items'),
                sm_nav               = carousel.data('sm-nav'),
                md_items             = carousel.data('md-items'),
                md_nav               = carousel.data('md-nav'),
                lg_items             = carousel.data('lg-items'),
                lg_nav               = carousel.data('lg-nav'),
                xl_items             = carousel.data('xl-items'),
                xl_nav               = carousel.data('xl-nav'),
                center               = carousel.data('center'),
                dots_global          = carousel.data('dots'),
                xs_dots              = carousel.data('xs-dots'),
                sm_dots              = carousel.data('sm-dots'),
                md_dots              = carousel.data('md-dots'),
                lg_dots              = carousel.data('lg-dots'),
                xl_dots              = carousel.data('xl-dots'),
                animate_out          = carousel.data('animate-out'),
                animate_in           = carousel.data('animate-in'),
                mouse_drag           = carousel.data('mouse-drag');

                carousel.owlCarousel({
                    autoplayHoverPause: (autoplay_hover_pause ? autoplay_hover_pause : false),
                    loop: (loop ? loop : false),
                    items: (items_general ? items_general : 1),
                    lazyLoad: true,
                    margin: (margin ? margin : 0),
                    autoplay: (autoplay ? autoplay : false),
                    autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
                    smartSpeed: (smartSpeed ? smartSpeed : 250),
                    dots: (dots_global ? dots_global : false),
                    nav: (nav_general ? nav_general : false),
                    navText: ["<i class='fas fa-arrow-left' aria-hidden='true'></i>", "<i class='fas fa-arrow-right' aria-hidden='true'></i>"],
                    navSpeed: (navSpeed ? navSpeed : false),
                    center: (center ? center : false),
                    responsiveClass: true,
                    animateOut: (animate_out ? animate_out : false),
                    animateIn: (animate_in ? animate_in : false),
                    mouseDrag: mouse_drag,
                    responsive: {
                        0: {
                            items: (xs_items ? xs_items : (items_general ? items_general : 1)),
                            nav: (xs_nav ? xs_nav : (nav_general ? nav_general : false)),
                            dots: (xs_dots ? xs_dots : (dots_global ? dots_global : false))
                        },
                        480: {
                            items: (sm_items ? sm_items : (xs_items ? xs_items : (items_general ? items_general : 1))),
                            nav: (sm_nav ? sm_nav : (xs_nav ? xs_nav : (nav_general ? nav_general : false))),
                            dots: (sm_dots ? sm_dots : (xs_dots ? xs_dots : (dots_global ? dots_global : false)))
                        },
                        768: {
                            items: (md_items ? md_items : (sm_items ? sm_items : (xs_items ? xs_items : (items_general ? items_general : 1)))),
                            nav: (md_nav ? md_nav : (sm_nav ? sm_nav : (xs_nav ? xs_nav : (nav_general ? nav_general : false)))),
                            dots: (md_dots ? md_dots : (sm_dots ? sm_dots : (xs_dots ? xs_dots : (dots_global ? dots_global : false))))
                        },
                        992: {
                            items: (lg_items ? lg_items : (md_items ? md_items : (sm_items ? sm_items : (xs_items ? xs_items : (items_general ? items_general : 1))))),
                            nav: (lg_nav ? lg_nav : (md_nav ? md_nav : (sm_nav ? sm_nav : (xs_nav ? xs_nav : (nav_general ? nav_general : false))))),
                            dots: (lg_dots ? lg_dots : (md_dots ? md_dots : (sm_dots ? sm_dots : (xs_dots ? xs_dots : (dots_global ? dots_global : false)))))
                        },
                        1199: {
                            items: (xl_items ? xl_items : (lg_items ? lg_items : (md_items ? md_items : (sm_items ? sm_items : (xs_items ? xs_items : (items_general ? items_general : 1)))))),
                            nav: (xl_nav ? xl_nav : (lg_nav ? lg_nav : (md_nav ? md_nav : (sm_nav ? sm_nav : (xs_nav ? xs_nav : (nav_general ? nav_general : false)))))),
                            dots: (xl_dots ? xl_dots : (lg_dots ? lg_dots : (md_dots ? md_dots : (sm_dots ? sm_dots : (xs_dots ? xs_dots : (dots_global ? dots_global : false))))))
                        }
                    }
                });
                
            });
        }
        var owl = $('.owl-carousel.owl-with-ctrl');
        owl.owlCarousel();
        $('.owl-ctrl .ctrl-next').click(function() {
            owl.trigger('next.owl.carousel', [400]);
        })
        $('.owl-ctrl .ctrl-prev').click(function() {
            owl.trigger('prev.owl.carousel', [400]);
        })
    };
    var owlCarouselOverlay = function () {
        var ocOverlay = $(".owl-carousel-overlay");
        if (ocOverlay.length) {
            ocOverlay.each(function() {
                var self = $(this),
                ocHeight = self.outerHeight();
                self.find(".owl-item > *").height(ocHeight);
            });
        }
    }

    /*-------------------------------------------------*/
    /* MAGNIFIC POPUP
    /*-------------------------------------------------*/
    var magnificPopup = function() {

        $('.img-popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            }
        });

        $('.img-popup').each(function() {
            var $self = $(this),
                imgSrc = $self.find('img').attr('src');
            $self.attr({
                href: imgSrc
            });
        });

        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            iframe: {
                patterns: {
                    youtube: {
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1' /* URL that will be set as a source for iframe. */
                    },
                    vimeo: {
                        src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: 'https://maps.google.'
                    }
                }
            }
        });
    };

    /*-------------------------------------------------*/
    /* NAVBAR PLACEHOLDER
    /*-------------------------------------------------*/
    var navbarPlaceholder = function(){
        if ($('.navbar-placeholder').length) {
            $(".navbar-placeholder").height(jQuery(".navbar").outerHeight());
        }
    }

    /*-------------------------------------------------*/
    /* CONTACT FORM
    /*-------------------------------------------------*/
    var formajax = function(){
        $("form[data-form-validate=true]").each( function() {
            var self = $(this);
            self.validate({
                errorPlacement: function(error, element) {
                    error.addClass("invalid-feedback form-error-message");
                    error.insertAfter( element );
                },
                submitHandler: function(form) {

                    var subscriberesponse = self.find('.form-response'),
                    submitbutton = self.find('button[type=submit]'),
                    formdata = self.serialize();

                    submitbutton.attr('disabled', 'disabled');

                    $.ajax({
                        type: 'POST',
                        url: self.attr('action'),
                        data: formdata,
                        dataType : 'html',
                        success:function(data) {
                            subscriberesponse.show()
                            .html(data);
                            if (data.match('success') != null) {
                                self[0].reset();
                            }
                        },
                        error:function() {
                            subscriberesponse.show()
                            .html('<div class="alert alert-danger" role="alert">Oops! An error occured.</div>');
                        },
                        complete:function() {
                            submitbutton.removeAttr('disabled');
                        }
                    });
                }
            });
        });
    }

    /*-------------------------------------------------*/
    /* WHEN DOCUMENT IS READY
    /*-------------------------------------------------*/
    $(document).ready(function() {
        bgImage();
        carouselSlider();
        magnificPopup();
        navbarPlaceholder();
        formajax();
    });

    /*-------------------------------------------------*/
    /* WHEN WINDOW IS LOADED
    /*-------------------------------------------------*/
    $(window).on("load", function() {
        /* Do Something */
    });

    /*-------------------------------------------------*/
    /* WHEN WINDOW IS SCROLLED
    /*-------------------------------------------------*/
    $(window).on("scroll", function() {
        /* Do Something */
    });

    /*-------------------------------------------------*/
    /* WHEN WINDOW IS RESIZED
    /*-------------------------------------------------*/
    $(window).on("resize", function() {
        navbarPlaceholder();
    });


})(jQuery);