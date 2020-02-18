$(function() {

    var mixer = $('.products__inner-box').length ? mixitup('.products__inner-box') : false;


    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });

    $('.products-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
    });


    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });


    $('.icon-th-list').on('click', function() {
        $('.product-page__items .products__item').addClass('list');
        $('.icon-th-large').removeClass('active');
        $(this).addClass('active');
    });
    $('.icon-th-large').on('click', function() {
        $('.product-page__items .products__item').removeClass('list');
        $('.icon-th-list').removeClass('active');
        $(this).addClass('active');
    });


    $('.header__btn-menu').on('click', function() {
        $('.header__box').toggleClass('active');
    });

    $('.menu__btn').on('click', function() {
        $('.menu-list').slideToggle();
    });












});