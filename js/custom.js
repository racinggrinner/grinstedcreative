$( document ).ready(function() {

	$('#container').masonry({
		"gutter": 'gutter-sizer',
  	columnWidth: '.grid-sizer',
  	itemSelector: '.item'
 	});

 	$('.swipebox').swipebox({
		useCSS : true, // false will force the use of jQuery for animations
		useSVG : true, // false to force the use of png for buttons
		hideBarsOnMobile : true, // false will show the caption and navbar on mobile devices
		hideBarsDelay : 3000, // delay before hiding bars
		loopAtEnd: true
	});

});
