//TODO :	DONE--rewrite focus on navbutton
//			DONE--clean up section 1 Navbar HTML code (reduce duplicates)
//			Add background on section 1
//			change nav-icon color to white
//			DONE--Set hyperlink and navbar redirection
//			Brand-logo wraps on small device, try and change responsive font size
//			DONE--make scrolling work on touchpad
$(function() {
	$.scrollify({
		section: "section",
		scrollSpeed:1400,
		easing: "easeOutExpo",
		touchScroll:true,
		scrollbars:true,
		afterRender:function(i, panels){
		$.scrollify.update()
		$(".pagination a").on("click",$.scrollify.move);
		}
	});
});



