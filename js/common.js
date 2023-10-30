//= ../../node_modules/bootstrap/js/dist/index.js
'use strict';
// $(function() {
//    var pathLogo = $('header .logotype picture source').attr('srcset');
//    var pathLogoWhite = $('header .logotype picture img').attr('src');
// 	$(document).ready(function() {
// 		if($(window).width() < 991 && $(window).width() > 675) {
// 			var block = $('.move-mobile-logo');
// 			var gran = $('.move-to-logotype');
// 			/*$('.move-to-logotype').remove();
// 			$('.move-mobile-logo').remove();
// 			$('.footer-section__bottom .after-block').after(block);
// 			$('.footer-section__bottom .after-block').append(gran);*/

// 			var btn = $('header .btn');
// 			$('header .btn').remove();
// 			$('header .d-lg-none').after(btn);
// 			$('header .navbar-nav + .btn').removeClass('d-md-none d-none');
// 		}
// 		///
// 		if($(this).scrollTop() > 100) {
// 			$('header').addClass("fixed-bg");
// 		}
// 		$(document).scroll(function(e) {
// 			if($(this).scrollTop() > 100) {
// 				$('header').addClass("fixed-bg");
// 				$('header .logotype picture source').attr('srcset', pathLogoWhite);
// 			} else {
// 				$('header').removeClass("fixed-bg");
// 				$('header .logotype picture source').attr('srcset', pathLogo);
// 			}
// 		});
		
// 		if(document.cookie.match('accept')) {
// 			$('#cookie').fadeOut(300);
// 			$('footer').removeClass('cookie');
// 		} else {
// 			setTimeout(function(){$('#cookie').fadeIn(300);}, 2000);
// 		}

// 		// Custom JS
// 		$('.navbar-nav a[href^="#"], header button.btn, .informate .btn, .bg-banner .btn').click(function(e) {
// 			e.preventDefault();
// 			var __this;
// 			if($(this)[0].nodeName == 'BUTTON') {
// 				__this = '#' + $(this).attr('data-href');
// 			} else {
// 				__this = $(this).attr('href');
// 			}
// 			if($('body').find(__this).length == false) return false;
// 			$('html, body').animate({scrollTop: $(__this).offset().top+'px'});
// 			__this = null;
// 			return false;
// 		});

// 		// $('.block-video-btn .btn-video, .block-video-btn .btn-video-second').click(function(e) {
// 		// 	e.preventDefault();
// 		// 	$('#video-gallery').lightGallery({
// 		// 		autoplay: true,
// 		// 	}); 
// 		// 	$('#video-gallery1').lightGallery({
// 		// 		autoplay: true,
// 		// 	}); 
// 		// });
// 		function initGallery(id) {
// 			$(id).lightGallery({
// 				autoplay: true,
// 			});
// 		};
// 		initGallery('#video-gallery');
// 		initGallery('#video-gallery1');

// 		$('.block-video-btn').on('click', '.btn-video, .btn-video-second', function(e) {
// 			e.preventDefault();
// 			initGallery('#video-gallery');
// 			initGallery('#video-gallery1');
// 		});
			
// 		$("#cookie .btn-accetp-cookie").click(function(e) {
// 			if(document.cookie.match('accept')) {
// 				$('#cookie').fadeOut(300);
// 				$('footer').removeClass('cookie');
// 			} else {
// 				document.cookie = 'accept=true';
// 				$('#cookie').fadeOut(300);
// 				$('footer').removeClass('cookie');
// 			}
// 		});
// 	});

// 	// on table and mobile 
// 	if($(window).width() < 991) {
// 		var formTop = $('#form').offset().top - $('#form').outerHeight();
// 		function f_scroll() {

// 		   last_scroll_top = 0;
// 		   top_display = 100;
// 		   $(window).off('scroll')
// 		   $(window).on('scroll', function(){

// 			   var scroll_top = $(this).scrollTop();

// 			   if ((scroll_top > last_scroll_top) && (scroll_top >top_display)) {
// 				   //downscroll code
// 				   $('.js-header').addClass('has-transform-header');
// 				   //$('.js-footer').addClass('has-transform-footer');
// 				   if(scroll_top <= formTop) {
// 				   		console.log('1');
// 				   		$('.js-footer').removeClass('has-transform-footer');
// 				   } else {
// 				   		console.log('2');
// 				   		$('.js-footer').addClass('has-transform-footer');
// 				   }
				   
// 			   } else {
// 					$('.js-header').removeClass('has-transform-header');
// 			   		if(scroll_top >= formTop) {
// 			   			return false;
// 				   } else {
// 				   		$('.js-footer').removeClass('has-transform-footer');
// 				   }
// 				   //$('header .logotype picture source').attr('srcset', pathLogoWhite);
// 				   if(scroll_top == 0){
// 						//$('header .logotype picture source').attr('srcset', pathLogo);
// 				   }
// 			   }

// 			   last_scroll_top = scroll_top;
// 		   });

// 		   /*actions botons message and call*/ 

		   
// 		   var $window = $(window);
// 		   var maxWidth = 600; /* <--- Custom size here*/

// 		   $window.on('scroll resize', function(){

// 			   if ($(window).width() <= maxWidth) {  
// 				   $('.js-input-focus').on('focusin', function() {
// 					   $('.js-header').addClass('has-transform-header');
// 					   $('.js-footer').addClass('has-transform-footer');
// 				   });

// 				   $('.js-input-focus').on('focusout', function(){
// 					   $('.js-header').removeClass('has-transform-header');
// 					   $('.js-footer').removeClass('has-transform-footer');
// 				   });


// 			   }   

// 		   });

// 		}
// 		f_scroll();
// 	}

// });

$(document).ready(function() {
	$('.ba_description article .block-btn .btn-show-more').click(function() {
		const blockTxt = $('.ba_description article .text');
		if(blockTxt.is('.active')) {
			blockTxt.removeClass('active');
		} else {
			blockTxt.addClass('active');
		}
	});

	const windowWidth = $(window).width();
	$('.ba_configurar #svg-bg').attr('viewBox', '0 0 ' + windowWidth + ' 240');
	if($(window).width() < 991) {
		const headerMenuBtn = document.querySelector('header .mobile .menu-btn');
		const headerMenu = document.querySelector('header .desctop');
		headerMenuBtn.addEventListener('click', function() {
			if(this.classList.contains('active')) {
				this.classList.remove('active');
				headerMenu.classList.remove('fixed');
				document.body.style = 'overflow: auto';
			} else {
				this.classList.add('active');
				headerMenu.classList.add('fixed');
				document.body.style = 'overflow: hidden';
			}
		});
	}
	if($(window).width() < 675) {
		const mobAfter = $('.ba_configurar .mob-after');
		$('.ba_configurar .mob-after').remove();
		$('.ba_configurar .ba_configurar__list').append(mobAfter);
	}

	if($(this).scrollTop() > 100) {
		$('header').addClass("fixed-menu");
	}
	$(document).scroll(function(e) {
		if($(this).scrollTop() > 100) {
			$('header').addClass("fixed-menu");
		} else {
			$('header').removeClass("fixed-menu");
		}
	});

	$('header nav a[href^="#"], header .go-to, main .go-to, .fixed-button .go-to').click(function(e) {
		e.preventDefault();
		var __this;
		if($(this)[0].nodeName == 'BUTTON') {
			__this = '#' + $(this).attr('data-href');
		} else {
			__this = $(this).attr('href');
		}
		if($('body').find(__this).length == false) return false;
		$('html, body').animate({scrollTop: $(__this).offset().top+'px'});
		document.querySelector('header .mobile .menu-btn').classList.remove('active');
		document.querySelector('header .desctop').classList.remove('fixed');

		//headerMenuBtn.classList.remove('active');
		//headerMenu.classList.remove('fixed');
		document.body.style = 'overflow: auto';

		__this = null;
		return false;
	});

	$('.ba_accord .item').click(function() {
		const _this = $(this);
		if(_this.hasClass('active')) {
			_this.parents('.ba_accord').find('.item').removeClass('active');
			_this.parents('.ba_accord').find('.item .icon-plus').text('+');
		} else {
			_this.parents('.ba_accord').find('.item').removeClass('active');
			_this.parents('.ba_accord').find('.item .icon-plus').text('+');
			_this.find('.icon-plus').text('-');
			_this.addClass('active');
		}
	});

	// lightGallery(document.querySelector('.ow_map .map'), {
	// 	thumbnail: true,
	// });
	// on table and mobile 
	if($(window).width() < 991) {
		var formTop = $('#contact').offset().top - $('#contact').outerHeight();
		function f_scroll() {

			last_scroll_top = 0;
			top_display = 100;
			$(window).off('scroll');
			$(window).on('scroll', function(){
				var scroll_top = $(this).scrollTop();
				if ((scroll_top > last_scroll_top) && (scroll_top >top_display)) {
					if($('#contact').offset().top >= scroll_top) {
						$('header').addClass('has-transform-header');
						$('.mobile.fixed-button').addClass('has-transform-button');
						$('header').removeClass('hidden');
						$('.mobile.fixed-button').removeClass('hidden');
					} else {
						$('header').removeClass('has-transform-header');
						$('.mobile.fixed-button').removeClass('has-transform-button');
						$('.mobile.fixed-button').addClass('hidden');
						$('header').addClass('hidden');
					}
					
				} else {
					$('header').removeClass('has-transform-header');
					$('.mobile.fixed-button').removeClass('has-transform-button');
					if($('#contact').offset().top >= scroll_top) {
						$('header').removeClass('hidden');
						$('.mobile.fixed-button').removeClass('hidden');
					}
				}
				last_scroll_top = scroll_top;
			});

		}
		f_scroll();
	}
	if($(window).width() > 676 && $(window).width() < 999) {
		$('.ba_steps__blocks.ba-slider').slick({
			dots: true,
			arrows: false,
			infinite: false,
			speed: 300,
			slidesToShow: 3,
			centerMode: false,
			variableWidth: true,
			centerPadding: '5px',
			// responsive: [
			// 	{
			// 		breakpoint: 1520,
			// 		settings: {
			// 			slidesToShow: 3,
			// 			controls: true
			// 		}
			// 	},
			// 	{
			// 		breakpoint: 1024,
			// 		settings: {
			// 			slidesToShow: 3,
			// 		}
			// 	}
			// ]
		});

		// const slideItemWidth = $('.ba_steps__blocks.ba-slider .slick-slide').width();
		// const maxSlideItemWidth = parseFloat(slideItemWidth * $('.ba_steps__blocks.ba-slider .slick-slide').length);
		// $('.ba_steps .ba-slider.slick-dotted.slick-slider .slick-track').css('width', maxSlideItemWidth + 'px');
		
		$('.ba_photos__slider .slider').slick({
			dots: true,
			arrows: false,
			infinite: false,
			speed: 300,
			slidesToShow: 2,
			centerMode: false,
			variableWidth: true,
			centerPadding: '5px',
			// responsive: [
			// 	{
			// 		breakpoint: 1520,
			// 		settings: {
			// 			slidesToShow: 3,
			// 			controls: true
			// 		}
			// 	},
			// 	{
			// 		breakpoint: 1024,
			// 		settings: {
			// 			slidesToShow: 3,
			// 		}
			// 	}
			// ]
		});
		$('.ba_feedback__slider .slider').slick({
			dots: true,
			arrows: false,
			infinite: false,
			speed: 300,
			slidesToShow: 2,
			centerMode: false,
			variableWidth: true,
			centerPadding: '5px'
		});
	}
	if($(window).width() < 675) {
		$('.ba_photos__slider .slider').slick({
			dots: true,
			arrows: false,
			infinite: false,
			speed: 300,
			slidesToShow: 1.8,
			centerMode: false,
			// variableWidth: true,
			// centerPadding: '5px',
			// responsive: [
			// 	{
			// 		breakpoint: 1520,
			// 		settings: {
			// 			slidesToShow: 3,
			// 			controls: true
			// 		}
			// 	},
			// 	{
			// 		breakpoint: 1024,
			// 		settings: {
			// 			slidesToShow: 3,
			// 		}
			// 	}
			// ]
		});
		$('.ba_feedback__slider .slider').slick({
			dots: true,
			arrows: false,
			infinite: false,
			speed: 300,
			slidesToShow: 1.4,
			centerMode: false,
		});
		if($(window).width() < 475) {
			$('.ba_steps__blocks.ba-slider').slick({
				dots: true,
				arrows: false,
				infinite: false,
				speed: 300,
				slidesToShow: 1.4,
				centerMode: false,
				variableWidth: false,
				centerPadding: '25px'
			});
		} else {
			$('.ba_steps__blocks.ba-slider').slick({
				dots: true,
				arrows: false,
				infinite: false,
				speed: 300,
				slidesToShow: 2,
				centerMode: false,
				variableWidth: false,
				centerPadding: '5px'
			});
		}
	}

	

	// const list = $('.ow_photo__slider .link-thumb');
	// for(let i = 0; i < list.length; i++) {
	// 	let item = list[i];
	// 	$(list[i]).parents('a').attr('href', $(list[i]).attr('href'));
	// }

	// lightGallery(document.querySelector('.ow_photo__slider .slick-track'), {
	// 	thumbnail: true,
	// 	closable: true,
	// 	plugins: [lgZoom, lgThumbnail],
	// 	mobileSettings: {
	// 		controls: false,
	// 		showCloseIcon: true,
	// 		download: false,
	// 	},
	// });

	// document.querySelector('.ow_photo__slider .slick-track').addEventListener('click', function(){ 
	// 	setTimeout(function() {
	// 		const images = document.querySelector('.lg-outer.lg-grab .lg-current img');
	// 		const imagesTop = images.offsetTop;
	// 		const imagesHeight = images.offsetHeight;
	// 		document.querySelector('.lg-has-thumb .lg-toolbar + .lg-components').style.top = parseInt(imagesTop + imagesHeight + 60) + 'px';
	// 	}, 500);
	// })

});