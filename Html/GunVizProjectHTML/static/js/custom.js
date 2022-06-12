(function($) {
    "use strict";
    var cursor = document.querySelector('.cursor');
    var cursorinner = document.querySelector('.cursor2');
    var a = document.querySelectorAll('a');
    document.addEventListener('mousemove',
	function(e) {
	    var x = e.clientX;
	    var y = e.clientY;
	    cursor.style.transform = `translate3d(calc($ {
			e.clientX
	    }
		px - 50 % ), calc($ {
			e.clientY
}
		px - 50 % ), 0)`
});
$('a').hover(function() {
    $('.cursor2').css({
        "background-color": "transparent"
    });
},
function() {
    $('.cursor2').css({
        "background-color": "#D90A2C"
    });
});
document.addEventListener('mousemove',
function(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});
document.addEventListener('mousedown',
function() {
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});
document.addEventListener('mouseup',
function() {
    cursor.classList.remove('click'); cursorinner.classList.remove('cursorinnerhover')
});
a.forEach(item =>{
    item.addEventListener('mouseover', () =>{
        cursor.classList.add('hover');
});
item.addEventListener('mouseleave', () =>{
    cursor.classList.remove('hover');
});
}) ;
jQuery(window).on('load',
function() {
    $(".preloader_area_wrap").delay(1600).fadeOut("slow");
});
const currentLocation = location.href;
const menuItem = document.querySelectorAll('ul li a');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}
$(window).on('scroll',
function() {
    if ($(this).scrollTop() > 200) {
        $('.position_top').addClass('sticky');
    } else {
        $('.position_top').removeClass('sticky');
    }
});
$(window).on('scroll',
function() {
    if ($(this).scrollTop() > 800) {
        $('.scroll-top').fadeIn().addClass('opacity');
    } else {
        $('.scroll-top').fadeOut();
    }
});
$('.scroll-top').on('click',
function() {
    $("html, body").animate({
        scrollTop: 0
    },
    1000);
    return false;
});
$('.cross-btn').on('click',
function(event) {
    $(this).toggleClass('h-active');
    $('.main-nav').toggleClass('slidenav');
});
$(".main-nav .bi").on('click',
function(event) {
    var $fl = $(this);
    $(this).parent().siblings().find('.sub-menu').slideUp();
    $(this).parent().siblings().find('.bi').addClass('bi-chevron-down');
    if ($fl.hasClass('bi-chevron-down')) {
        $fl.removeClass('bi-chevron-down').addClass('bi-chevron-up');
    } else {
        $fl.removeClass('bi-chevron-up').addClass('bi-chevron-down');
    }
    $fl.next(".sub-menu").slideToggle();
});
$('.odometer').counterUp({
    delay: 10,
    time: 1000
});
$('ul.project-filter-tab li').on('click',
function() {
    $("ul.project-filter-tab li").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr('data-filter');
    $(".project-items-wrapper").isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
        }
    });
    return false;
});
$('.portfolio-masonary-wrapper').masonry({
    itemSelector: '.portfolio-masonary',
});
$(".progress-bar-circle").loading();
$('#bar1').barfiller();
$('#bar2').barfiller();
$('#bar3').barfiller();
$('#bar4').barfiller();
$('.popup-video').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});
var swiper = new Swiper(".hero-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: true,
    effect: 'fade',
    centeredSlides: true,
    roundLengths: true,
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 4000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".portfolio-slider", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        320 : {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480 : {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768 : {
            slidesPerView: 3,
            spaceBetween: 40
        },
        992 : {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1400 : {
            slidesPerView: 5,
            spaceBetween: 40
        },
    }
});
var swiper = new Swiper(".releted-project-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        320 : {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480 : {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768 : {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});
var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".work-process", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
} (jQuery));