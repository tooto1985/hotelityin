$(function() {
	$(window).scroll(function() {

		if (!$(".tip>img").hasClass("show") && $(window).scrollTop() > $(".tip").offset().top - parseInt($(".tip").css("margin-top"))  - $(window).height() + ($(".tip").outerHeight(true)/2)) {
			
				$(".tip>img").addClass("show");
			
		}

	}).scroll();
});