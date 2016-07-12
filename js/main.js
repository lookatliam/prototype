//test function html append
for(var n = 0; n < 100; n++) {
	$(".window").append(n+"<br>")
}

function main() {
	//var params
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var windowClassWidth = $(".window").width();
	var maxHeight = windowHeight - $(".top").height();
	var blocksHeight = windowHeight + $(this).scrollTop() - 300;
	var containerWidth = $(".container").width();
	var coef;

	//scroll functions
	if (blocksHeight >= maxHeight) {
		blocksHeight = maxHeight;
		$(".top").addClass("top-fix");
	} else {
		$(".top").removeClass("top-fix");
	}
	$(".details").height(blocksHeight);
	$(".chat").height(blocksHeight);

	jQuery(function() {
		jQuery('.scroll-pane').jScrollPane();
	});
	$(".details").scrollTop(10000);
	$(".chat").scrollTop(10000);

	//margin left function
	var leftMargin = (windowWidth - containerWidth)/2 + windowClassWidth;
	var leftCenterMargin = (windowWidth - containerWidth)/2 + windowClassWidth + $(".details").width();
	$(".details").css({"left": leftMargin});
	$(".chat").css({"left": leftCenterMargin});

	var leftTopMargin = (windowWidth - $(".logo").width() - $(".user").width() - $(".navi").width())/2;
	if(windowWidth > 900) {
		$(".navi").css({"left":leftTopMargin});
	}

	//adaptive block functions
	if(windowWidth < 900) {
		$(".details").hide();
		$(".chat").hide();
		$(".window").width(containerWidth);
	} else if(windowWidth >= 900 && windowWidth < 1300) {
		$(".details").show();
		$(".chat").hide();

		coef = containerWidth/2;
		$(".window").width(coef*1.25);
		$(".details").width(coef*0.75);
	} else if (windowWidth >= 1300) {
		$(".details").show();
		$(".chat").show();
		coef = containerWidth/4;
		$(".window").width(coef*1.54);
		$(".details").width(coef*1.23);
		$(".chat").width(coef*1.23);
	}
}
$(window).scroll(function() {
	main();
	main();
});

$(window).resize(function() {
	main();
	main();
});

$(document).ready(function() {
	main();
	main();
});


jQuery(function() {
	jQuery('.scroll-pane').jScrollPane();
});

//other page events
$(".add-bookmark").click(function() {
	$(this).toggleClass("active-bookmark");
	return false;
});

$(".add-visitcard").click(function() {
	$(this).toggleClass("active-card");
	return false;
});

$(".add-buyin").click(function() {
	$(this).toggleClass("active-buyin");
	return false;
});

$(".navi > ul > li > a").click(function() {
	$(".navi > ul > li").removeClass("active");
	$(this).parent().addClass("active");
	return false;
});