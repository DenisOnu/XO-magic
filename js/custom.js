(function($) {
    "use strict";
/* ..............................................
    Fixed Menu
    ................................................. */
    
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-header').addClass('fixed-menu');
            $('.heading').addClass('fixed-heading');
            $('.fflower').addClass('fixed-image');
		} else {
			$('.top-header').removeClass('fixed-menu');
            $('.heading').removeClass('fixed-heading');
            $('.fflower').removeClass('fixed-image');
		}
	});

    // --------------------
    //     PRELOADER
    // --------------------
	$(window).on('load', function() { 
        $('.preloader').fadeOut(); 
        $('.spinner-wrapper').delay(1550).fadeOut('slow'); 
        $('body').delay(450).css({'overflow':'visible'});
    });
	
}(jQuery));


// ------------------------------------------
//          COUNTDOWN   
// ------------------------------------------
 // Set the date we're counting down to
 var countDownDate = new Date("May 21, 2022 13:00:00").getTime();

 // Update the count down every 1 second
 var x = setInterval(function() {

 // Get today's date and time
 var now = new Date().getTime();
     
 // Find the distance between now and the count down date
 var distance = countDownDate - now;
     
 // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
 // Output the result in an element with id="demo"
 document.getElementById("timer").innerHTML = days + " Days " + hours + " Hours "
 + minutes + " Mins " + seconds + " Secs ";
     
 // If the count down is over, write some text 
//  if (distance < 0) {
//      clearInterval(x);
//      document.getElementById("timer").innerHTML = "EXPIRED";
//  }
 }, 1000);


// .............................................
//          CAROUSEL
// ..........................................
 let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

