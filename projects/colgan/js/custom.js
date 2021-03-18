equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.equals');
});


$(window).resize(function(){
  equalheight('.equals');
});


//Black navbar when scroll
$(function() {
        var scrollBreakPoint = 25;
        $(window).scroll(function() {
            var scrollPos = $(window).scrollTop();
            if (scrollPos > scrollBreakPoint) {
                $('#navb').addClass('fadeMe');
            } else {
                $('#navb').removeClass('fadeMe');
            }
        });
    });


//add black background when mobile nav is open
$(".navbar-toggle").click(function() {
	$("#navb").delay(500).toggleClass("navbar-black");
});