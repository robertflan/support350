// JavaScript Document
$(document).ready(function(){

	/*********************Menu*********************/

	$('#nav').onePageNav({
		scrollSpeed: 1600,
		scrollOffset: 100,
		scrollThreshold: 0.2,
		//filter: ':not(.services-page)',
		filter: '',
		easing: 'easeOutQuart',
		begin: function() {
			//console.log('start')
		},
		end: function() {
		//console.log('stop')
		}
	});
	
	
	/*function getURLParameter(name) {
            return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
        }*/
		
$('.brand, .home-link').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 1200, 'easeOutQuart');
	return false;
		
});

$('.about-link').click(function(){
	$('.about-menu-link a').trigger('click');
});

$('.portfolio-link').click(function(){
	$('.portfolio-menu-link a').trigger('click');
});

$('.contact-link').click(function(){
	var contactTopPosi	=	$('#contact-us').offset().top-65;
	$("html, body").animate({ scrollTop: contactTopPosi }, 1200, 'easeOutQuart');
	return false;
		
});



/***********Loader***********/
progressJs().setOptions({overlayMode: true, theme: 'blueOverlay'}).start().autoIncrease(4, 500);
      
  if(window.attachEvent) {
	  window.attachEvent('onload', function(){ progressJs().end(); });
  } else {
	  if(window.onload) {
		  var curronload = window.onload;
		  var newonload = function() {
			  curronload();
			  progressJs().end();
		  };
		  window.onload = newonload;
	  } else {
		  window.onload = function(){ progressJs().end(); };
	  }
  }
	
	
	
	
	
	
});
/**************************Document.ready end**************************/
$(window).load(function(){

});

$(window).resize(function(){

});

$(window).scroll(function(){


		
});










