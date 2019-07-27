$(window).ready(function(){

		localStorage.setItem('lastUrl-letsGoShip', '/html/updateLocalAddress.html')

		// Changing from default name on page
		var userDetails = JSON.parse(localStorage.getItem('details'));

		userName.innerText = userDetails.user.name;

		console.log(userName)

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


		var localAddressValue = JSON.parse(localStorage.getItem('localAddress'))


		$('#localAddressLine1').val(localAddressValue.address_1);

		$('#localAddressLine2').val(localAddressValue.address_2);

		$('#localAddressCity').val(localAddressValue.city);

		$('#localAddressState').val(localAddressValue.state);

		$('#localAddressZip').val(localAddressValue.zip);

		$('#localAddressCountry').val(localAddressValue.country);

		$('#localAddressPhone').val(localAddressValue.phone);


		$('#updateLocalAddress').on('click', function(){

		console.log('clicked to update');


			var updateLocalAddressDetails = {

				address_1: $('#localAddressLine1').val(),
				address_2: $('#localAddressLine2').val(),
				city: $('#localAddressCity').val(),
				state: $('#localAddressState').val(),
				zip: $('#localAddressZip').val(),
				country: $('#localAddressCountry').val(),
				phone: $('#localAddressPhone').val()

			}	



			if(localAddressValue.id){

				var addressId = localAddressValue.id

				console.log(addressId)

				localStorage.setItem('localAddressId', addressId);	
			} else {

				var addressId = localStorage.getItem('localAddressId');
			}
			


			chrome.runtime.sendMessage({ notifications: "updateLocalAddress", message: updateLocalAddressDetails , id: addressId}, function (response) {
				//console.log(response.data);
			});


			chrome.runtime.onMessage.addListener (
			function(request, sender, sendResponse){

				// Response for successfully got local address from background script
				if (request.response == "updatedLocalAddress") { 

					console.log('move to local address page')

					window.location.href = '/html/localAddress.html';


				}

				// No local address available so create one
				if (request.response == "notupdatedLocalAddress") { 


					console.log('not created local address')


				}


			})


		})

})