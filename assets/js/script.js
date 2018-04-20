$(document).ready(function()  {


	$(".picture").click(function() {
		 // jQuery Function Number #1 //
		$(this).addClass("pic-click");
		 // jQuery Function Number #2 //
		$("#overlay").show();
		 // jQuery Function Number #3 //
		$("#overlay").click(function(){
			 // jQuery Function Number #4 //
			$(this).hide();
			 // jQuery Function Number #5 //
			$(".picture").removeClass("pic-click");
			 // jQuery Function Number #6 //
		})
	});

	$(".picture").click(function() {
		$(this).addClass("pic-click");
		$("#overlay").show();
		$("#overlay").click(function(){
			$(this).hide();
			$(".picture").removeClass("pic-click");
		})
	});

});



