function scrollResize() {
	var windowHeight = $(window).height();
	var maxHeight = $(window).height() - $(".top").height();
	var datailsHeight = windowHeight - 300 + $(this).scrollTop();
	if (datailsHeight >= maxHeight) {
		datailsHeight = maxHeight;
	}
	$(".details").height(datailsHeight);
	$(".chat").height(datailsHeight);

	//margin left function
	var leftMargin = ($(window).width() - $(".container").width())/2 + $(".window").width();
	var leftCenterMargin = ($(window).width() - $(".container").width())/2 + $(".window").width() + $(".details").width();
	var windowWidth = $(".window").width();
	$(".details").css({"left": leftMargin});
	$(".chat").css({"left": leftCenterMargin});

	var containerWidth = $(".container").width();
	if(containerWidth >= 900 && containerWidth <= 1200) {
		$(".chat").hide();
		var coef = containerWidth/2;

		$(".window").width(coef*1.25);
		$(".details").width(coef*0.75);
	} else if (containerWidth > 1200) {
		$(".chat").show();
		var coef = containerWidth/4;
		$(".window").width(coef*1.54);
		$(".details").width(coef*1.23);
		$(".chat").width(coef*1.23);
	} else if(containerWidth < 900) {
		$(".window").width(containerWidth);
		console.log(containerWidth);
		$(".details").hide();
		$(".chat").hide();
	}
}
$(window).scroll(function() {
	scrollResize();
});

$(window).resize(function() {
	scrollResize();
});

$(document).ready(function() {
	scrollResize();
});





//test function
for(var n = 0; n < 100; n++) {
	$(".window").append(n+"<br>")
}

