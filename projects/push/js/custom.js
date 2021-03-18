$(document).ready(function() {
	$('.menu-closed').on('click', function() {
		$(this).addClass('open-nav');
		$('.menu-open').addClass('open-nav');
		$('.overlay').addClass('open');
	});
	
	
	$('.menu-open').on('click', function() {
		$(this).removeClass('open-nav');		
		$('.menu-closed').removeClass('open-nav');
		$('.overlay').removeClass('open');
	});
});