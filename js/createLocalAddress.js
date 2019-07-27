$(window).ready(function(){

		localStorage.setItem('lastUrl-letsGoShip', '/html/createLocalAddress.html')

		// Changing from default name on page
		var userDetails = JSON.parse(localStorage.getItem('details'));

		userName.innerText = userDetails.user.name;

		console.log(userName)


		$('#createLocalAddress').on('click', function(){


			var createLocalAddressDetails = {

				address_1: $('#localAddressLine1').val(),
				address_2: $('#localAddressLine2').val(),
				city: $('#localAddressCity').val(),
				state: $('#localAddressState').val(),
				zip: $('#localAddressZip').val(),
				country: $('#localAddressCountry').val(),
				phone: $('#localAddressPhone').val()

			}	


			chrome.runtime.sendMessage({ notifications: "createLocalAddress", message: createLocalAddressDetails}, function (response) {
				//console.log(response.data);
			});


			chrome.runtime.onMessage.addListener (
			function(request, sender, sendResponse){

				// Response for successfully got local address from background script
				if (request.response == "createdLocalAddress") { 

					

					console.log('move to local address page')

					window.location.href = '/html/shippingProfile.html';


				}

				// No local address available so create one
				if (request.response == "notCreatedLocalAddress") { 


					console.log('not created local address')


				}


			})
		})


		$('#logOutButton').on('click', function(){


			// Sending a message to background script for making the logout api call
			chrome.runtime.sendMessage({ notifications: "logOut", message: localStorage.getItem('details')}, function (response) {
				//console.log(response.data);
			});

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

})