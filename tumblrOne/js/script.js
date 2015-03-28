var main = function(){
	var state = true; // toggle effect for side left menu by clicking on the hamburger button
	$('.hamburgerToggleButton').click(function() {
		if (state) {
			$('.sideMenu').animate({left: "0px"}, 200);
			$('body').animate({left: "300px"}, 200);
		}
		else {
			$('.sideMenu').animate({left: "-300px"}, 200);
			$('body').animate({left: "0px"}, 200);
		}
		state = !state;
	});
};

$(document).ready(main);