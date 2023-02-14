//TODO :	DONE--rewrite focus on navbutton
//			DONE--clean up section 1 Navbar HTML code (reduce duplicates)
//			DONE--Add social links (github, linkedin, personal site)
//			DONE--View counter via javascript
//			DONE--API calls to Dynamo DB
//			DONE--Add background on section 1
//			DONE -- Remove touchscroll completely
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
			 if( $(window).width() < 992) {
				$.scrollify.destroy()
			}else{
				$.scrollify.enable()
			}
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

window.addEventListener("load", (event) => {
	/* const observer = new IntersectionObserver((entries) => {
		console.log(entries);
		entries.forEach((entry) => {
			const target= entry.target.querySelector('.ful-resp');
			if (entry.isIntersecting) {
				target.classList.add('animate__animated', 'animate__fadeIn');
				

				return; // if we added the class, exit the function
			}
			target.classList.remove('animate__animated', 'animate__fadeIn');

		});
		
		
	});
	const observeList = document.querySelectorAll('.roadmap-wrapper');
	
	observeList.forEach((observe)=>{
		
		
	})
	observer.observe(document.querySelectorAll('.roadmap-wrapper')); */



	// Register IntersectionObserver
	const io = new IntersectionObserver((entries) => {
	  entries.forEach((entry) => {
		if (entry.intersectionRatio > 0) {
		  // Add 'active' class if observation target is inside viewport
		  entry.target.classList.add('animate__animated', 'animate__fadeIn');
		} else {
		  // Remove 'active' class otherwise
<<<<<<< HEAD
		  //entry.target.classList.remove('animate__animated', 'animate__fadeIn');
=======
		  entry.target.classList.remove('animate__animated', 'animate__fadeIn');
>>>>>>> 53874a64aa39fe6885088e172397956d2edd1de2
		}
	  })
	})

	// Declares what to observe, and observes its properties.
	const boxElList = document.querySelectorAll('.ful-resp');
	boxElList.forEach((el) => {
	  io.observe(el);
	})


},false);