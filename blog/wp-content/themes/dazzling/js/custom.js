// JavaScript Document
$(document).ready(function(){

	
	/*********************Page Loader*********************/
	/*function centerLoader() {
	
		var winW = $(window).width();
		var winH = $(window).height();
	
		var spinnerW = $('.progressjs-inner').outerWidth();
		var spinnerH = $('.progressjs-inner').outerHeight();
	
		$('.progressjs-inner').css({
			'position':'absolute',
			'left':(winW/2)-(spinnerW/2),
			'top':(winH/2)-(spinnerH/2)
		});
	
	}

	centerLoader();
	$(window).resize(function(){
		centerLoader();
	});*/

	
	
	
	$(".wow").each(function() {
	  var wowHeight = $(this).height() -($(this).height()/2);
	  //alert(wowHeight);
	  $(this).attr("data-wow-offset", wowHeight);
	});
	/*$(".wow.portfolio-box").each(function() {
	  var wowHeight = $(this).height()-200;
	  $(this).attr("data-wow-offset", wowHeight);
	});*/
	/*$(".wow.path").each(function() {
		//alert($(this).height());
	  var wowHeight2 = $(this).height()/2;
	 // alert(wowHeight2);
	  $(this).attr("data-wow-offset", wowHeight2);
	});*/
	/*$('.banner-slider').bxSlider({
	  auto: true,
	  pager: false,
	  autoControls: false
	});*/
	
	$('.main-menu-part>li').hover(function(){
		if($(this).children('.submenu-container').css('display')=='none'){
			$(this).children('.submenu-container').slideDown();
		}else{
			$(this).children('.submenu-container').slideUp();
		}
	},function(){
		$(this).children('.submenu-container').slideUp();
	});
	
	/*$('.main-menu-part>li').click(function(){
		if($(this).children('.submenu-container').css('display')=='none'){
			$(this).children('.submenu-container').slideDown();
		}else{
			$(this).children('.submenu-container').slideUp();
		}	
	});*/
	
	$('.mobile-menu').click(function(){
		if($(this).parent().children('.main-menu-part').css('display')=='none'){
			$(this).parent().children('.main-menu-part').slideDown();
		}else{
			$(this).parent().children('.main-menu-part').slideUp();
		}	
		
	});
		
	/*************Get A Quote**************/
	$('.quote').click(function(){
		$('.get-a-quote-main-container').animate({top: '0'},800,'easeInOutQuint', function(){
			$('body').addClass('overflow-hidden');	
		});
		
	});
	$('.get-quote-close').click(function(){
		$('.get-a-quote-main-container').animate({top: '-100%'},800,'easeInOutQuint', function(){
			$('body').removeClass('overflow-hidden');
		});
		
	});
	
	
	/**************Client says**************/
	$('.client-arrow-container a').click(function(){
		if($(this).parents('.client-says-inner').find('.client-says-box02').css('display')=='none'){
			$('.client-says-box01').hide();
			$('.client-says-box02').show();
		}else if($(this).parents('.client-says-inner').find('.client-says-box01').css('display')=='none'){
			$('.client-says-box02').hide();
			$('.client-says-box01').show();
		}
	});
	
	/******************Our team*******************/
	$('.team-image').hover(function(){
		$(this).find('.team-hover').stop(true, true).fadeIn();
	},
	function(){
		$(this).find('.team-hover').stop(true, true).fadeOut();	
	});
	$('.team-name a, .team-name strong').click(function(){
		if($(this).parents('.team-box').find('.team-hover').css('display')=='none'){
			$(this).parents('.team-box').find('.team-hover').stop(true, true).fadeIn();	
		}else{
			$(this).parents('.team-box').find('.team-hover').stop(true, true).fadeOut();
		}
	});

	
	
	
	
	/***********************Condition Js************************/	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		
		$(".wow.path").each(function() {
		  $(this).attr("data-wow-offset", '100');
		});
		
	}else{}
	
	
	
	//alert($('.wire1 .anim').html());
	
	//Inner Page
	//Megamenu
	$('.megamenu-list li').click(function(){
		if($(this).children('.mega-sub-menu-pan').css('display')==='none'){
			$('.megamenu-list li').removeClass('active');
			$(this).addClass('active');
			$('.mega-sub-menu-pan').hide();
			$(this).children('.mega-sub-menu-pan').show();
		}
		
	});
	
	/*************Megamenu**************/
	$('.services-page').click(function(){
		$('.megamenu-main-container').animate({top: '0'},800,'easeInOutQuint', function(){
			$('body').addClass('overflow-hidden');	
		});
		
	});
	$('.menu-close').click(function(){
		$('.megamenu-main-container').animate({top: '-100%'},800,'easeInOutQuint', function(){
			$('body').removeClass('overflow-hidden');
		});
		
	});
	

	
	
	
});
/**************************Document.ready end**************************/
$(window).load(function(){
	//alert('hi');
	//$('.wire1').addClass('path');
	// Grab my Node
	//Center Spinner
	


	//$(".wire1 path").attr("class", "wow path animated");
	
	setTimeout(function (){
		$('.progressjs-container').fadeOut(300);		
	}.bind(this),50);
	
	/*****************Banner Animation********************/
	setTimeout(function (){
		$(".right-hand").attr("class", "right-hand wow animated right-hand-move");
		
	}.bind(this),1600);
	
	setTimeout(function (){
		$(".left-hand").attr("class", "left-hand wow animated left-hand-move");
		
	}.bind(this),1800);
	
	setTimeout(function (){
		$(".kyeboard-press02").attr("class", "kyeboard-press02 wow animated fadeIn");
		
	}.bind(this),2100);
	
	setTimeout(function (){
		$(".kyeboard-press01").attr("class", "kyeboard-press01 wow animated fadeIn");
		
	}.bind(this),2200);
	
	
	setTimeout(function (){
		$(".wire1 .wow").attr("class", "wow animated path");
		
	}.bind(this),2400);
	
	setTimeout(function (){
		$(".computer-on").attr("class", "computer-on wow animated fadeIn");
		
	}.bind(this),3600);
	
	setTimeout(function (){
		$(".left-message").attr("class", "left-message wow animated fadeInLeft");
		
	}.bind(this),3800);
	
	setTimeout(function (){
		$(".left-arrow").attr("class", "left-arrow wow animated fadeInLeft");
		
	}.bind(this),4000);
	
	
	setTimeout(function (){
		$(".wire2 .wow").attr("class", "wow animated path");
		
	}.bind(this),4200);
	
	
	setTimeout(function (){
		$(".glob-settings").attr("class", "glob-settings banner-icon wow animated rotation");
		
	}.bind(this),5300);
	
	setTimeout(function (){
		$(".green-settings").attr("class", "green-settings banner-icon wow animated rotationOut");
		
	}.bind(this),5400);
	
	setTimeout(function (){
		$(".blue-settings").attr("class", "blue-settings banner-icon wow animated rotation");
		
	}.bind(this),5500);
	
	setTimeout(function (){
		$(".aqua-blue-settings").attr("class", "aqua-blue-settings banner-icon wow animated rotation");
		
	}.bind(this),5600);
	
	setTimeout(function (){
		$(".watch-settings").attr("class", "watch-settings banner-icon wow animated rotationOut");
		
	}.bind(this),5700);
	
	setTimeout(function (){
		$(".green-small-settings").attr("class", "green-small-settings banner-icon wow animated rotationOut");
		
	}.bind(this),5800);
	
	setTimeout(function (){
		$(".light-aqua-blue-settings").attr("class", "light-aqua-blue-settings banner-icon wow animated rotationOut");
		
	}.bind(this),5700);
	
	setTimeout(function (){
		$(".blue-small-settings").attr("class", "blue-small-settings banner-icon wow animated rotationOut");
		
	}.bind(this),5700);

	setTimeout(function (){
		$(".wire3 .wow").attr("class", "wow animated path");
		
	}.bind(this),5800);
	
	setTimeout(function (){
		$(".laptop-on").attr("class", "laptop-on wow animated fadeIn");
		
	}.bind(this),6800);
	
	setTimeout(function (){
		$(".laptop-map").attr("class", "wow animated path");
		
	}.bind(this),7300);
	
	setTimeout(function (){
		$(".wire4 .wow").attr("class", "wow animated path");
		
	}.bind(this),7300);
	
	setTimeout(function (){
		$(".mobile-on").attr("class", "mobile-on wow animated fadeIn");
		
	}.bind(this),8500);
	
	setTimeout(function (){
		$(".sound").attr("class", "sound wow animated fadeInLeft");
		
	}.bind(this),8800);
	
	setTimeout(function (){
		$(".wire5 .wow").attr("class", "wow animated path");
		
	}.bind(this),9300);
	
	setTimeout(function (){
		$(".pad-on").attr("class", "pad-on wow animated fadeIn");
		
	}.bind(this),10100);
	
	setTimeout(function (){
		$(".right-message").attr("class", "right-message wow animated fadeInLeft");
		
	}.bind(this),10500);
	//computer-on wow fadeNone

});

$(window).resize(function(){

});

$(window).scroll(function(){
	menuPart();	

		
});

function menuPart(){
	var logoHeight	=	$('.brand').height();
	if ($(window).scrollTop() >= logoHeight) {
		$('.header-part').addClass('fixed-menu');
	}else{
		$('.header-part').removeClass('fixed-menu');
	} 

}

function scrollPart(){
	var winHeight	=	$(window).height();
	$('body').css('height',winHeight);

}








