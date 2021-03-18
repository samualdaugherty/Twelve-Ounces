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



//Smooth page transitions
$(document).ready(function() {
    $('body').delay(500).queue(function(){$(this).addClass('open')});
});

$(document).ready(function() {
    $("a.transfade").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
			$('.menu-closed').removeClass('open-nav');
			$('.overlay').removeClass('open').delay(900).fadeOut(100, redirectPage);
			setTimeout(function() {
			       $('body').removeClass('open');
			   }, 500);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});


//Reset fadeOut to load on every page
window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    window.location.reload();
  }
});