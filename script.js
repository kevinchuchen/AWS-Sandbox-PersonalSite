//TODO :	DONE--rewrite focus on navbutton
//			DONE--clean up section 1 Navbar HTML code (reduce duplicates)
//			Add social links (github, linkedin, personal site)
//			View counter via javascript
//			API calls to Dynamo DB
//			Add background on section 1
//			change nav-icon color to white
//			DONE--Set hyperlink and navbar redirection
//			DONE--Brand-logo wraps on small device, try and change responsive font size
//			DONE--make scrolling work on touchpad
$(function() {
	$.scrollify({
		section: "section",
		scrollSpeed:1400,
		easing: "easeOutExpo",
		touchScroll:false,
		scrollbars:true,
		afterRender:function(i, panels){
		$.scrollify.update()
		$(".pagination a").on("click",$.scrollify.move);
		}
	});
});



