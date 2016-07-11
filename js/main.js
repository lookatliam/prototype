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
	}
	$(".details").height(blocksHeight);
	$(".chat").height(blocksHeight);

	//margin left function
	var leftMargin = (windowWidth - containerWidth)/2 + windowClassWidth;
	console.log("leftMargin: "+leftMargin);
	var leftCenterMargin = (windowWidth - containerWidth)/2 + windowClassWidth + $(".details").width();
	$(".details").css({"left": leftMargin});
	$(".chat").css({"left": leftCenterMargin});

	//adaptive block functions
	if(windowWidth < 900) {
		$(".details").hide();
		$(".chat").hide();
		$(".window").width(containerWidth);
		console.log("minimum\n"+"windowWidth: "+windowWidth+"\ncontainerWidth: "+containerWidth);
	} else if(windowWidth >= 900 && windowWidth < 1300) {
		$(".details").show();
		$(".chat").hide();

		coef = containerWidth/2;
		$(".window").width(coef*1.25);
		$(".details").width(coef*0.75);
		console.log("center\n"+"windowWidth: "+windowWidth+"\ncontainerWidth: "+containerWidth);
	} else if (windowWidth >= 1300) {
		$(".details").show();
		$(".chat").show();
		coef = containerWidth/4;
		$(".window").width(coef*1.54);
		$(".details").width(coef*1.23);
		$(".chat").width(coef*1.23);
		console.log("large\n"+"windowWidth: "+windowWidth+"\ncontainerWidth: "+containerWidth);
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







$(".logo").click(function() {
	main();
});