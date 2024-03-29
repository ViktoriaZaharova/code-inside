$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.community-slider').slick({
    slidesToShow: 3,
    dots: true,
    appendArrows: '.community-slider-nav',
    appendDots: '.community-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 870,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


$('.news-slider').slick({
    slidesToShow: 3,
    dots: true,
    appendArrows: '.news-slider-nav',
    appendDots: '.news-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.reviews-slider1').slick({
    slidesToShow: 2,
    dots: true,
    appendArrows: '.reviews-slider-nav1',
    appendDots: '.reviews-slider-nav1',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.reviews-slider2').slick({
    slidesToShow: 2,
    dots: true,
    appendArrows: '.reviews-slider-nav2',
    appendDots: '.reviews-slider-nav2',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.partners-slider').slick({
    slidesToShow: 8,
    slidesToScroll: 2,
    dots: true,
    appendArrows: '.partners-slider-nav',
    appendDots: '.partners-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 7,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('.cases-slider').slick({
    slidesToShow: 3,
    dots: true,
    appendArrows: '.cases-slider-nav',
    appendDots: '.cases-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.cases-row-slider').slick({
    slidesToShow: 1,
    dots: true,
    appendArrows: '.cases-row-slider__nav',
    appendDots: '.cases-row-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});


$('.stages-work-slider').slick({
    slidesToShow: 3,
    dots: true,
    appendArrows: '.stages-work-slider-nav',
    appendDots: '.stages-work-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    variableWidth: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                variableWidth: false,
                centerMode: false,
                slidesToShow: 1,
            }
        }
    ]
});

$('.worth-image').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.worth-content-slider'
});

$('.worth-content-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    asNavFor: '.worth-image',
    appendArrows: '.worth-content-slider__nav',
    appendDots: '.worth-content-slider__nav'
});

// slick active
$(window).on('load resize', function () {
    if ($(window).width() < 576) {
        $('.trust-us-slider:not(.slick-initialized)').slick({
            dots: true,
            appendArrows: '.trust-us-slider-nav',
            appendDots: '.trust-us-slider-nav',
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
            slidesToShow: 1,
        });
    } else {
        $(".trust-us-slider.slick-initialized").slick("unslick");
    }
});
// slick active



$('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});

