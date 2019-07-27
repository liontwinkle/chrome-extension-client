$(window).ready(function(){

		localStorage.setItem('lastUrl-letsGoShip', '/html/localAddress.html')

		// Changing from default name on page
		var userDetails = JSON.parse(localStorage.getItem('details'));

		userName.innerText = userDetails.user.name;

		console.log(userName)

		var flag=false;
		$("#toggleButton").on("click",function(){
			if(flag==false)
			{
				$("#navCol").css("background-color","rgba(233, 299, 255, 0.95)")
				flag=!flag;
			}
			else if(flag==true)
			{
				$("#navCol").css("background-color","rgba(233, 299, 255, 0)")
				flag=!flag
			}
		})


		var userDetails = JSON.parse(localStorage.getItem('details'));

		userName.innerText = userDetails.user.name;


		if(localStorage.getItem('localAddress')){

		// Alot local address value here

			var localAddressValue = JSON.parse(localStorage.getItem('localAddress'));

					customerName.innerText = JSON.parse(localStorage.getItem('details')).user.name
					addressLine1Local.innerText = localAddressValue.address_1;
					addressLine2Local.innerText = localAddressValue.address_2;
					cityLocal.innerText = localAddressValue.city;
					stateLocal.innerText = localAddressValue.state;
					countryLocal.innerText = localAddressValue.country;
					zipLocal.innerText = localAddressValue.zip;
					phoneLocal.innerText = localAddressValue.phone;


		} else {




		}

		$('#updateLocalAddress').on('click', function(){

			window.location.href = '/html/updateLocalAddress.html';
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