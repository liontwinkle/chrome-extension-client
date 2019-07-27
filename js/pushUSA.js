$(window).ready(function(){

		localStorage.setItem('lastUrl-letsGoShip', '/html/usaAddress.html')

		// Changing from default name on page
		var userDetails = JSON.parse(localStorage.getItem('details'));

		userName.innerText = userDetails.user.name;

		console.log(userName)

		$("#pushAddress").on("click",function(){
			console.log("clicked")
			chrome.tabs.query({active:true,currentWindow:true},callback)
			function callback(tabs)
			{	
				var msg={
					customerName:$("#customerName").text(),
					addressLine1:$("#addressLine1Usa").text(),
					addressLine2:$("#addressLine2Usa").text(),
					city:$("#cityUsa").text(),
					state:$("#stateUsa").text(),
					zip:$("#zipUsa").text(),
					phone:$("#phoneUsa").text()
				}
				console.log(msg)	
				chrome.tabs.sendMessage(tabs[0].id,msg);
			}
		})

		var usaAddressValue = JSON.parse(localStorage.getItem('usaAddressValue'));

		addressLine1Usa.innerText = usaAddressValue.address_1;

		addressLine2Usa.innerText = usaAddressValue.address_2;

		cityUsa.innerText = usaAddressValue.city;

		zipUsa.innerText = usaAddressValue.zip;

		phoneUsa.innerText = usaAddressValue.phone

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