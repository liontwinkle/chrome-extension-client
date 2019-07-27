$(window).ready(function(){

		localStorage.setItem('lastUrl-letsGoShip', '/html/orderSummary.html')

		// Changing from default name on page
		var userDetails = JSON.parse(localStorage.getItem('details'));

		userName.innerText = userDetails.user.name;

		console.log(userName)


		console.log('Order summary page running');


		$('.loadingIcon').css('display','block');


		// Asking background to give details of an order
		chrome.runtime.sendMessage({ notifications: 'orderSummary'}, function(response){

			
		})

		chrome.runtime.onMessage.addListener (function(request, sender, sendResponse){

				// Got order details from background page

				if(request.response == 'gotOrderSummary'){

					var orderSummary = request.data;

					console.log(orderSummary);

					$('#productList').empty();

					$('.loadingIcon').css('display','none');

					var userOrders = JSON.parse(localStorage.getItem('orderList-letsGoShip'))

					var orderSummary = JSON.parse(localStorage.getItem('orderSummary-letsGoShip'))


					for(i=0;i<userOrders.length;i++){

						console.log('user orders')
						if(userOrders[i].id == orderSummary[0].order_id){

							$('#customerName strong').text(userOrders[i].billing_address.first_name + " " + userOrders[i].billing_address.last_name );

							$('#shippingAddress').text(userOrders[i].billing_address.street_1 + ' ' + userOrders[i].billing_address.street_2 + ' ' + userOrders[i].billing_address.city + ' ' + userOrders[i].billing_address.state + ' ' + userOrders[i].billing_address.country + ' ' + userOrders[i].billing_address.zip);

							$('#totalPrice').text( userOrders[i].default_currency_code + " " + userOrders[i].total_inc_tax)

							$('#orderDate').text( userOrders[i].date_created)

							$('#orderID').text( userOrders[i].id)

						}

					}				

					for(j=0; j<orderSummary.length; j++){

						console.log(orderSummary[i])

						var urlsku = orderSummary[j].sku

						var sku = urlsku.substr(0, urlsku.indexOf('&&&')); 

						var element = '<div class="productDetails"><div style="width: 70%;"><h6 id="productName">' + orderSummary[j].name + '</h6><h6 id="productPrice">Price After Tax: $'+ orderSummary[j].total_inc_tax + '</h6><h6 id="productSKU">Product SKU: '+ sku +'</h6></div><div style="float: right; width: 31%; margin-top: -140px; margin-right: -40px;"><h6 id="productImage"><img src='+ urlsku.substr(urlsku.indexOf('&&&') + 3)  +'></h6></div></div><br>'
						
						$('#productList').append(element);
					}
				}

		})
})