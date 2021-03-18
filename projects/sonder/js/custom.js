//Change shit up if document is longer than window
$(window).on("resize", function () {
	var docH = $(document).height(),
    viewPortH = $(window).height();
	if (docH > viewPortH) {
		$('body').css({'height':'auto' , 'overflow':'scroll'});
		$('html').css('overflow','scroll');
		$('#slide-about').css('position','relative');
		$('.social').css({'position':'relative' , 'top':'auto' , 'margin-top':'4em' , 'margin-bottom':'.5em'});
	} else {
		$('body').css({'height':'100vh' , 'overflow':'hidden'});
		$('html').css('overflow','hidden');
		$('#slide-about').css('position','absolute');
		$('.social').css({'position':'absolute' , 'top':'95vh' , 'margin-top':'0' , 'margin-bottom':'0'});
	}
}).resize();