var main = function(){
	var state = true; // toggle effect for off-canvas left menu by clicking on the hamburger button
	$('.hamburgerToggleButton').click(function() {
		if (state) {
			$('.sideMenu').animate({left: "0px"}, 200);
			$('body').animate({left: "300px"}, 200);
			$('body').css("overflow", "hidden");
		}
		else {
			$('.sideMenu').animate({left: "-300px"}, 200);
			$('body').animate({left: "0px"}, 200);
			$('body').css("overflow", "auto");
		}
		state = !state;
	});

	var toggle = $('.hamburgerToggleButton').on();
	if (toggle) {
		$('main').click(function() {
			$('.sideMenu').animate({left: "-300px"}, 200);
			$('body').animate({left: "0px"}, 200);
			$('body').css("overflow", "auto");
		});
		$('.sideMenu').click(function() {
			$('.sideMenu').animate({left: "-300px"}, 200);
			$('body').animate({left: "0px"}, 200);
			$('body').css("overflow", "auto");
		});
	}
};

$(document).ready(main);