// <!-- ===============SCROLL-SPY-(BOOTSTRAP)=================== -->
	$('body').scrollspy({ target: '#mySpyNav'})
	$('[data-spy="scroll"]').each(function () {
	  var $spy = $(this).scrollspy('refresh')
	})
// <!-- ===============SMOOTH-SCROLLING-(BOOTSTRAP)=================== -->
	$('body').scrollspy({target: ".navbar", offset: 50});
	$("#mySpyNav a").on('click', function(event) {
  	if (this.hash !== "") {
    	event.preventDefault();
    	var hash = this.hash;
	    $('html, body').animate({
	      scrollTop: $(hash).offset().top
	    }, 800, function(){
	      window.location.hash = hash;
	    });
  	}
});