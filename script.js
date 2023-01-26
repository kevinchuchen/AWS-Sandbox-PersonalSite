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

var client = new HttpClient();
client.get('api.kevinlim.cc',function(response) {
//https://5qrbpd5xb9.execute-api.us-east-1.amazonaws.com/default/incrementViewCount'
    // update page view with custom API call
	pageView = "Page views: " + String(response); 
	document.getElementById("pageview").textContent= pageView;
	console.log(response);
});

