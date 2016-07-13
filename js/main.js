function main() {
	//var params
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var windowClassWidth = $(".window").width();
	var maxHeight = windowHeight - $(".top").height() - 10;
	var blocksHeight = windowHeight + $(this).scrollTop() - 250;
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
	$(".details > .price-block").height(blocksHeight);
	$(".talk").height(blocksHeight-139);
	$(".talk").css({"bottom":"98px"});

	jQuery(function() {
		jQuery('.scroll-pane').jScrollPane();
	});
	$(".details > .price-block").scrollTop(10000);
	$(".talk").scrollTop(10000);

	//margin left function
	var leftMargin = (windowWidth - containerWidth)/2 + windowClassWidth;
	var leftCenterMargin = (windowWidth - containerWidth)/2 + windowClassWidth + $(".details").width();
	$(".details").css({"left": leftMargin});
	$(".talk").css({"left": leftCenterMargin+1});
	$(".chat > .writing").css({"left": leftCenterMargin+1});

	var leftTopMargin = (windowWidth - $(".logo").width() - $(".user").width() - $(".navi").width())/2;
	if(windowWidth > 900) {
		$(".navi").css({"left":leftTopMargin});
	}

	//adaptive block functions
	if(windowWidth < 900) {
		$(".details").hide();
		$(".chat").hide();
		$(".window").width(containerWidth);
		$(".in-buyin").width(containerWidth);
		$(".menu > .addition").hide();
	} else if(windowWidth >= 900 && windowWidth < 1300) {
		$(".details").show();
		$(".chat").hide();

		coef = containerWidth/2;
		$(".window").width(coef*1.25);
		$(".in-buyin").width(coef*1.25);
		$(".details").width(coef*0.75 - 1);
		$(".menu > .addition").width(coef*0.75-1);
		$(".menu > .addition > .mini-menu").width(coef*0.75-1);
	} else if (windowWidth >= 1300) {
		$(".details").show();
		$(".chat").show();
		coef = containerWidth/4;
		$(".window").width(coef*1.54);
		$(".in-buyin").width(coef*1.54);
		$(".details").width(coef*1.23 - 1);
		$(".chat").width(coef*1.23);
		$(".menu > .addition").width(coef*2.46 - 1);
		$(".menu > .addition > .mini-menu").width(coef*1.23);
	}

	$(".talk").width($(".chat").width()-1);
	$(".chat > .writing").width($(".chat").width()-1);
	$(".chat > .writing > .input-text").width($(".chat").width()-11);
	$(".chat > .selection").width($(".chat").width());
	$(".chat > .selection").css({"bottom":blocksHeight-41, "left":leftCenterMargin});

	var productWidth = $(".window").width() - $('.product-img').outerWidth(true) - 20;
	$(".product-content").width(productWidth);
	$(".window > .price-product > .product-content > .product-addition > .description").width(productWidth - 90);
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

//local functions 

$(".toggleSwitches").click(function() {
	$(this).toggleClass("active");
	$(".switches").toggle();
	$(".filters").toggleClass("activeMargin");
});

$(".delivery-switch").click(function() {
	$(this).toggleClass("active");
});

$(".one-or-company input").click(function() {
	$(".one-or-company input").removeClass("active");
	$(this).addClass("active");
});

$(".preorder-or-instock input").click(function() {
	$(".preorder-or-instock input").removeClass("active");
	$(this).addClass("active");
});

$(".price-product").click(function() {
	$(this).toggleClass("active");
});

$(".window > .price-product > .product-img > .bookmark").click(function() {
	$(this).toggleClass("active-bookmark");
	return false;
});