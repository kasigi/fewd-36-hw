
jQuery("#grayButton").on('click',switchGray);
jQuery("#whiteButton").on('click',switchWhite);


function switchGray() {
	jQuery("body").css("background","gray");
	jQuery("body").css("color","white");
	jQuery(".pasture header").html("<h1>I am being modified</h1>");
}

function switchWhite() {
	jQuery("body").css("background","white");
	jQuery("body").css("color","black");
	jQuery(".pasture header").html("<h1>I am being modified</h1>");
}


