// <!--=============MAIN SLIDER================-->
$(document).on('ready', function() {
	$(".multiple-items").slick({
      infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	 	responsive: [
	    	{
			    breakpoint: 992,
			    	settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			    }
			},
			{
		    	breakpoint: 732,
			    	settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			    }
		    }
	  	]
    });
});
// <!--=============SERTIFICATION SLIDER================-->
$(document).on('ready', function() {
	$(".multiple-items-2").slick({
      infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	 	responsive: [
	    	{
		    breakpoint: 732,
		    	settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
	    	}
	  	]
    });
});