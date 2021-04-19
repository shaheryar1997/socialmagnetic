$(function(){
                $('.pricing-box .card-body ul').slimScroll({
                    height: '210px',
                    railVisible: true,
                    alwaysVisible: true,
                    railColor: '#e8e8e8',
                    color:'#6c6c6c',
                    railOpacity: 0.3
                });
                $('.comments .card-body').slimScroll({
                    height: '110px',
                    railVisible: true,
                    alwaysVisible: true,
                    railColor: '#e8e8e8',
                    color:'#6c6c6c',
                    railOpacity: 0.3
                });
            });
            $(document).ready(function(){
                $('.popupBox').click(function(){
                    $('#getQuote').modal('show')
                });
                $('.service-desc .btn').on('click', function () {
                    $('.signupForm #name').focus()
                })
                $('#hamburger').click(function() {
                    $(this).toggleClass( "active" );
                    $('#mainNavbar').slideToggle()
                });
                $('ul.tabs li').click(function(){
                    var tab_id = $(this).attr('data-tab');
    
                    $('ul.tabs li').removeClass('current');
                    $('.tab-content').removeClass('current');
    
                    $(this).addClass('current');
                    $("#"+tab_id).addClass('current');
                });

                $('.slider').on('init', function(e, slick) {
                    var $firstAnimatingElements = $('.banner:first-child').find('[data-animation]');
                    doAnimations($firstAnimatingElements);    
                });
                $('.slider').slick({
                    dots: true,
                    arrows: true,
                    speed: 300,
                    fade: true,
                    prevArrow:"<button type='button' class='slick-prev'><img src='./img/arrow.png'/><span class='num'></span></button>",
                    nextArrow:"<button type='button' class='slick-next'><span class='num'></span><img src='./img/arrow.png'/></button>",
                });
                
                $('.slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
                    var $animatingElements = $('.banner[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                    doAnimations($animatingElements);  
                });
                function doAnimations(elements) {
                    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                    elements.each(function() {
                        var $this = $(this);
                        var $animationDelay = $this.data('delay');
                        var $animationType = 'animated ' + $this.data('animation');
                        $this.css({
                            'animation-delay': $animationDelay,
                            '-webkit-animation-delay': $animationDelay
                        });
                        $this.addClass($animationType).one(animationEndEvents, function() {
                            $this.removeClass($animationType);
                        });
                    });
                }
                
                appendNumber();
                function appendNumber(params) {
                    var currentSlick = $('.slider').slick('getSlick');
                    var currentSlider= $('.slider').slick('slickCurrentSlide')
                    $(".slider .slick-prev .num").html(currentSlick.slideCount);
                    $(".slider .slick-next .num").html(currentSlider + 2);  
                    $('.slider').on('afterChange', function(slick, currentSlide){
                        $(".slider .slick-prev .num").html(currentSlide.currentSlide); 
                        var temp = currentSlide.currentSlide + 2;
                        if(temp > currentSlide.slideCount){
                            temp = 1
                            $(".slider .slick-next .num").html(temp);
                        }else{
                            $(".slider .slick-next .num").html(currentSlide.currentSlide + 2); 
                        }
                    });

                }
                $('.tab-packageSlider').not('.slick-initialized').slick({
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    speed: 300, 
                    autoplay: true,
                    responsive: [
                        {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2
                        }
                        },
                        {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1
                        }
                        }
                    ]
                });
                $('.nav-pills a').on('shown.bs.tab', function() {
                    let $tabPane = $($(this).attr('href'));
                    $('.tab-packageSlider', $tabPane).slick('refresh');
                });
                
                $('#serviceSlider').slick({
                    dots: true,
                    arrows: false,
                    speed: 300, 
                    autoplay: true,
                    fade: true,
                    cssEase: 'linear'
                });
                $('.satisfaction').slick({
                    dots: false,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: false,
                    speed: 300, 
                    autoplay: true,
                    responsive: [
                        {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4
                        }
                        },
                        {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3
                        }
                        },
                        {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2
                        }
                        }
                    ]
                });
                $('.nav-pills a').on('shown.bs.tab', function() {
                    let $tabPane = $($(this).attr('href'));
                    $('.satisfaction', $tabPane).slick('refresh');
                });
                $('.creativity').slick({
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    speed: 300, 
                    autoplay: true,
                    responsive: [
                        {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2
                        }
                        },
                        {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1
                        }
                        }
                    ]
                });
                $('.nav-pills a').on('shown.bs.tab', function() {
                    let $tabPane = $($(this).attr('href'));
                    $('.creativity', $tabPane).slick('refresh');
                });

                $('.progressContent').slick({
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    speed: 300, 
                    autoplay: false,
                    responsive: [
                        {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2
                        }
                        },
                        {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1
                        }
                        }
                    ]
                });

                $('.whyList').slick({
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    speed: 300, 
                    autoplay: true,
                    responsive: [
                        {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2
                        }
                        },
                        {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1
                        }
                        }
                    ]
                });
                $('.testiProfile').slick({
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    speed: 300, 
                    autoplay: true,
                    prevArrow:"<button type='button' class='slick-prev'><img src='./img/arrow.png'/></button>",
                    nextArrow:"<button type='button' class='slick-next'><img src='./img/arrow.png'/></button>",
                    responsive: [
                        {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1
                        }
                        },
                        {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                        }
                    ]
                });
                $('.secretDelievery ul.list-center').slick({
                    dots: false,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: false,
                    speed: 300, 
                    autoplay: true,
                    responsive: [
                        {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 3
                        }
                        },
                        {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2
                        }
                        },
                        {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1
                        }
                        }
                    ]
                });
                $('.nav-pills a').on('shown.bs.tab', function() {
                    let $tabPane = $($(this).attr('href'));
                    $('.secretDelievery ul.list-center', $tabPane).slick('refresh');
                });
                
                $('.count-num').countUp({
                    'time': 2000,
                    'delay': 10

                });
                $('.workList').magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    callbacks: {
                    elementParse: function(item) {
                        // Function will fire for each target element
                        // "item.el" is a target DOM element (if present)
                        // "item.src" is a source that you may modify
                        console.log(item.el.context.className);
                        console.log(item)
                        if(item.el.context.className == 'video') {
                            item.type = 'iframe'
                        } else {
                        item.type = 'image',
                        item.tLoading = 'Loading image #%curr%...',
                        item.mainClass = 'mfp-img-mobile',
                            item.image = {
                                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                            }
                        }

                    }
                    },
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1] 
                    }        
                });
                $(".progress-bar").loading();

                AOS.init({
                    once: true
                });
                var hash = document.location.hash;
                if (hash) {
                    $('.nav-pills a[href='+hash+']').tab('show');
                } 
                $('.nav-pills a').on('shown.bs.tab', function (e) {
                    window.location.hash = e.target.hash;
                });
            })