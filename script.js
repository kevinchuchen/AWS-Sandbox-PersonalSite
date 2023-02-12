//TODO :	DONE--rewrite focus on navbutton
//			DONE--clean up section 1 Navbar HTML code (reduce duplicates)
//			DONE--Add social links (github, linkedin, personal site)
//			DONE--View counter via javascript
//			DONE--API calls to Dynamo DB
//			DONE--Add background on section 1
//			Remove touchscroll completely
//			Add animations to make it more interactive
//			Add error.html
//			DONE--Modify discription of architectural roadmap
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

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

// var client = new HttpClient();
// client.get('https://api.kevinlim.cc/incrementViewCount',function(response) {
//     // update page view with custom API call
// 	pageView = "Page views: " + String(response); 
// 	document.getElementById("pageview").textContent= pageView;
// 	console.log(response);
// });

