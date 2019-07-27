$(window).ready(function(){

		localStorage.setItem('lastUrl-letsGoShip', '/html/shippingProfile.html')

		// Sending message to background to signout
		$('#logOutButton').on('click', function(){


			// Sending a message to background script for making the logout api call
			chrome.runtime.sendMessage({ notifications: "logOut", message: localStorage.getItem('details')}, function (response) {
				//console.log(response.data);
			});

		})

		// Listening to positive response for sign out
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

		// Changing from default name on page
		var userDetails = JSON.parse(localStorage.getItem('details'));

		userName.innerText = userDetails.user.name;

		console.log(userName)

		// Redirection to usa address page
		$('.content1').on('click', function(){

			// Sending message to background script to get USA Address
			chrome.runtime.sendMessage({ notifications: "usaAddress"}, function (response) {
				//console.log(response.data)
			});

		})

		chrome.runtime.onMessage.addListener (
			function(request, sender, sendResponse){

				// Response for successful login from background script
				if (request.response == "getUsaAddress") { 


					console.log(request.data);

					localStorage.setItem('usaAddressValue', JSON.stringify(request.data));

					// $('#shippingProfilePage').css('display','none');

					// $('#usaAddressPage').css('display', 'block');

					window.location.href = '/html/usaAddress.html';


				}

		})


		// Redirection to local address page
		$('.content2').on('click', function(){

			// Send message to background to find local address
			chrome.runtime.sendMessage({ notifications: "getLocalAddress"}, function (response) {
				//console.log(response.data)
			});


			chrome.runtime.onMessage.addListener (
			function(request, sender, sendResponse){

				// Response for successfully got local address from background script
				if (request.response == "gotLocalAddress") { 

					


					window.location.href = '/html/localAddress.html';


				}

				// No local address available so create one
				if (request.response == "noLocalAddress") { 


					window.location.href = '/html/createLocalAddress.html';


				}


			})


		})


})