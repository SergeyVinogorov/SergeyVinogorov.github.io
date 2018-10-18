$(document).ready(function(){
		$('.bxslider').bxSlider({
			autoControls: true,
			pager: false,
			captions: true,
			pause: 6000,
			controls: true
		})

		});




  $(".pause-slide").click(function(){
    $("#myCarousel2").carousel('pause');
  });


$(document).ready(function(){

    $("#menu").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href'),



        $('body,html').animate({scrollTop: top}, 1500);

    });

});


