var loggedIn=JSON.parse(localStorage.getItem("loggedIn"))
$('#logOutButton').on('click', function(){


	if( loggedIn == false){

		window.location.href = '/html/index.html';
	} else {

		// Sending a message to background script for making the logout api call
		chrome.runtime.sendMessage({ notifications: "logOut", message: localStorage.getItem('details')}, function (response) {
			//console.log(response.data);
		});

	}

	

})

$('#shippingProfileButton').on('click', function(){


	if(loggedIn == false){

		window.location.href = '/html/index.html';
	} else {

		window.location.href = '/html/shippingProfile.html'

	}


})


chrome.runtime.onMessage.addListener (
	function(request, sender, sendResponse){

		// Response for successful login from background script
		if (request.response == "signOutTrue") { 


			console.log(request.data);

			

			// $('#shippingProfilePage').css('display','none');

			// $('#usaAddressPage').css('display', 'block');

			window.location.href = '/html/index.html';


		}

})
if(loggedIn==false || loggedIn==null)
{
	$("#loginSignupButton").css("display","block");
	// $("#signupButton").css("display","block");
	$("#shippingProfileButton").css("display","none");
	$("#contactusButton").css("display","none");
	$("#logOutButton").css("display","none");
}
if(loggedIn==true)
{
	$("#loginSignupButton").css("display","none");
	// $("#signupButton").css("display","none");
	$("#shippingProfileButton").css("display","block");
	$("#contactusButton").css("display","block");
	$("#logOutButton").css("display","block");
}