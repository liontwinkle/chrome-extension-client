$(window).ready(function(){

	localStorage.setItem('lastUrl-letsGoShip', '/html/Orders.html')

	// Changing from default name on page
	var userDetails = JSON.parse(localStorage.getItem('details'));

	userName.innerText = userDetails.user.name;

	console.log(userName)

	$('.loadingIcon').css('display','block');

	// Asking background to give orders list
	chrome.runtime.sendMessage({ notifications: 'orderList'}, function(response){

		
	})

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

			// Got order list from background page

			if(request.response == 'gotOrderList' ){

				$('#orderListContainer').empty();

				var ordersList = request.data

				console.log(ordersList);

				$('.loadingIcon').css('display','none');

				if(ordersList){

					for(i=0;i<ordersList.length;i++){

						var element = '<div class="content2"><div style="display: inline-block;"><i class="fas fa-user-circle" style="font-size: 1rem;"></i></div><h6 style="display: inline-block;padding-left: 1rem;" class="orderDetails" data-orderid='+ ordersList[i].id +'>Order Number ' + ordersList[i].id + '</h6><div style="display: inline-block;float: right;"><i class="fas fa-chevron-right"></i></div></div>'

						$('#orderListContainer').append(element);
					}

				} else {

					var element = '<div style="text-align: center;"><p>No orders to display</p></div>'

					$('#orderListContainer').append(element);

				}

			}

			// Response for successful login from background script
			if (request.response == "signOutTrue") { 


				console.log(request.data);				

				// $('#shippingProfilePage').css('display','none');

				// $('#usaAddressPage').css('display', 'block');

				window.location.href = '/html/index.html';


			}

	})


	// Taking to order detail page when clicked on an order

	$('body').on('click', '.orderDetails', function(){

		localStorage.setItem('orderSummaryDetails', $(this).attr('data-orderid'))

		window.location.href = '/html/orderSummary.html';


	})

	

})