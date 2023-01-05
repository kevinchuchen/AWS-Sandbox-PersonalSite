//TODO :	DONE--rewrite focus on navbutton
//			clean up section 1 Navbar HTML code (reduce duplicates)
//			Add background on section 1
//			change nav-icon color to white
//			Set hyperlink
//			Brand-logo wraps on small device, try and change responsive font size
//			make it work on touchpad
$(function() {
	$.scrollify({
		section: "section",
		scrollSpeed:200,
		touchScroll:true,
		before:function(i,panels){
			console.log(i);
			console.log("test");
			console.log(panels);
			
		}
	});
});

