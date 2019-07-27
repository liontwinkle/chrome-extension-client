// This is a config file for the extension and this is where all the variables are stored and all the ajax calls are made.

var bcBaseURL = "https://api.bigcommerce.com/stores/uvlzmu2rho/v2/";

var bcXAuthClient = "ek43ls3mj6cqdjeb1pot6sz8piz0bxv";

var bcXAuthToken = "kipx1slwk3udekozntfkk6tj7a4jv4z";

var bcAuthorization = "Bearer kipx1slwk3udekozntfkk6tj7a4jv4z";

var lgsBaseUrl = "http://ex.travelcast.us/api/";



chrome.runtime.onMessage.addListener (


	function(request, sender, sendResponse){

		// Post shopping cart details to the server for redirection

		if(request.greeting = 'sendShoppingCartDetails'){

				$.ajax({
						method:'POST',
						url: lgsBaseUrl + "cartdetails",
						data: JSON.stringify(request.data),
						headers: {

								"Accept": "application/json"
						}
					}).done(function(info){

						console.log(info)

					}).fail(function(info){

						console.log(info)

					})


		}
		// End of posting shopping cart details


		// Get an order summary

		if(request.notifications == 'orderSummary'){

			var orderID = JSON.parse(localStorage.getItem('orderSummaryDetails'))

			// creating the order if customer already exists
				$.ajax({
					method:'GET',
					url: bcBaseURL + "orders/" + orderID + "/products",
					data: {},
					headers: {
									
							"X-Auth-Client": bcXAuthClient,

							"X-Auth-Token": bcXAuthToken,

							"accept": "application/json",

							"Content-Type": "application/json"
					}
				}).done(function(info){

					console.log(info)

					chrome.runtime.sendMessage({ response: 'gotOrderSummary', data: info }, function(response){

						localStorage.setItem('orderSummary-letsGoShip', JSON.stringify(info));

					})

					

				}).fail(function(info){

					console.log(info)
				})

		}

		// Get orders list

		if(request.notifications == 'orderList'){

			function randomPassword(length) {
			    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
			    var pass = "";
			    for (var x = 0; x < length; x++) {
			        var i = Math.floor(Math.random() * chars.length);
			        pass += chars.charAt(i);
			    }
			    return pass;
			}

			var userDetailsOrderList = JSON.parse(localStorage.getItem('details'))

			if(localStorage.getItem('bcCustomerDetails')){


				var customerInfo = { 'customer_id': JSON.parse(localStorage.getItem('bcCustomerDetails')).customerID}
				// creating the order if customer already exists
				$.ajax({
					method:'GET',
					url: bcBaseURL + "orders",
					data: customerInfo,
					headers: {
									
							"X-Auth-Client": bcXAuthClient,

							"X-Auth-Token": bcXAuthToken,

							"accept": "application/json",

							"Content-Type": "application/json"
					}
				}).done(function(info){

					console.log(info)

					chrome.runtime.sendMessage({ response: 'gotOrderList', data: info}, function(){

						// console.log(response.data)
					})

					localStorage.setItem('orderList-letsGoShip', JSON.stringify(info))

				}).fail(function(info){

					console.log(info)
				})


			} else {

				var bcCustomerDetails = {

						'_authentication': {

							'password': randomPassword((userDetailsOrderList.user.email).length)
						},
						'first_name': userDetailsOrderList.user.name,
						'last_name': userDetailsOrderList.user.name,
						'email': userDetailsOrderList.user.email
					}


					console.log(bcCustomerDetails);

					// localStorage.setItem('bcCustomerDetails', JSON.stringify(bcCustomerDetails))

					// Creating a customer in bigcommerce using email id and server access token as password when customer id isn't there
					$.ajax({
						method:'POST',
						url: bcBaseURL + "customers",
						data: JSON.stringify(bcCustomerDetails),
						headers: {
							
								"X-Auth-Client": bcXAuthClient,

								"X-Auth-Token": bcXAuthToken,

								"Authorization": bcAuthorization,

								"Content-Type": "application/json"
						}
					}).done(function(info){

						console.log(info)

						console.log($(info).find('id').text())

						bcCustomerDetails['customerID'] = $(info).find('id').text();
						localStorage.setItem('bcCustomerDetails', JSON.stringify(bcCustomerDetails))

						console.log(typeof(info))

						var bcCustomerInfo = JSON.parse(localStorage.getItem('bcCustomerDetails'))

						var customerInfo = { 'customer_id': JSON.parse(localStorage.getItem('bcCustomerDetails')).customerID}
						// creating the order if customer already exists
						$.ajax({
							method:'GET',
							url: bcBaseURL + "orders",
							data: customerInfo,
							headers: {
											
									"X-Auth-Client": bcXAuthClient,

									"X-Auth-Token": bcXAuthToken,

									"accept": "application/json",

									"Content-Type": "application/json"
							}
						}).done(function(info){

							console.log(info)

							chrome.runtime.sendMessage({ response: 'gotOrderList', data: info}, function(){

								console.log(response.data)
							})

							localStorage.setItem('orderList-letsGoShip', JSON.stringify(info))

						}).fail(function(info){

							console.log(info)
						})

					}).fail(function(info){

						console.log(info)
					})
			}
		}


		// Creating order in bigcommerce
		if(request.notifications == 'createOrder'){


			localStorage.setItem('cartItems-LetsGoShip', JSON.stringify(request.message));


			var userDetails = JSON.parse(localStorage.getItem('details'))

			function randomPassword(length) {
			    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
			    var pass = "";
			    for (var x = 0; x < length; x++) {
			        var i = Math.floor(Math.random() * chars.length);
			        pass += chars.charAt(i);
			    }
			    return pass;
			}


			// Checking if the customer id already exists

			if(localStorage.getItem('bcCustomerDetails')){

					var bcCustomerInfo = JSON.parse(localStorage.getItem('bcCustomerDetails'))

					var productDetails = []

					console.log(typeof(request.message[0].productQuantity))
					console.log(parseInt(request.message[0].productQuantity))

					for(i=0;i<request.message.length;i++){

						productDetails.push({

							"name": request.message[i].productTitle,
							"quantity": parseInt(request.message[i].productQuantity),
							"price_inc_tax": parseFloat((request.message[i].productPrice).slice(4)),
							"price_ex_tax": parseFloat((request.message[i].productPrice).slice(4)),
							"sku": request.message[i].productSKU + "&&&" + request.message[i].productImage
							
						})
					}

					console.log(productDetails)

					var orderDetails = {
								  "customer_id": bcCustomerInfo.customerID,
								  "billing_address": {
								    "first_name": "Name",
								    "last_name": "Name",
								    "street_1": "123 Main Street",
								    "city": "Austin",
								    "state": "Texas",
								    "zip": "78751",
								    "country": "United States",
								    "country_iso2": "US",
								    "email": "janedoe@email.com"
								  },
								  "shipping_addresses": [
								    {
								      "first_name": "Trish",
								      "last_name": "Test",
								      "company": "Acme Pty Ltd",
								      "street_1": "666 Sussex St",
								      "city": "Austin",
								      "state": "Texas",
								      "zip": "78751",
								      "country": "United States",
								      "country_iso2": "US",
								      "email": "elsie@example.com"
								    }
								  ],
								  "products": productDetails
								}

					// creating the order if customer already exists
							$.ajax({
								method:'POST',
								url: bcBaseURL + "orders",
								data: JSON.stringify(orderDetails),
								headers: {
									
										"X-Auth-Client": bcXAuthClient,

										"X-Auth-Token": bcXAuthToken,

										"Authorization": bcAuthorization,

										"Content-Type": "application/json"
								}
							}).done(function(info){

								console.log(info)

									}).fail(function(info){

								console.log(info)
							})



			} else {

					var bcCustomerDetails = {

						'_authentication': {

							'password': randomPassword((userDetails.user.email).length)
						},
						'first_name': userDetails.user.name,
						'last_name': userDetails.user.name,
						'email': userDetails.user.email
					}


					console.log(bcCustomerDetails);

					// localStorage.setItem('bcCustomerDetails', JSON.stringify(bcCustomerDetails))

					// Creating a customer in bigcommerce using email id and server access token as password when customer id isn't there
					$.ajax({
						method:'POST',
						url: bcBaseURL + "customers",
						data: JSON.stringify(bcCustomerDetails),
						headers: {
							
								"X-Auth-Client": bcXAuthClient,

								"X-Auth-Token": bcXAuthToken,

								"Authorization": bcAuthorization,

								"Content-Type": "application/json"
						}
					}).done(function(info){

						console.log(info)

						console.log($(info).find('id').text())

						bcCustomerDetails['customerID'] = $(info).find('id').text();
						localStorage.setItem('bcCustomerDetails', JSON.stringify(bcCustomerDetails))

						console.log(typeof(info))

						var bcCustomerInfo = JSON.parse(localStorage.getItem('bcCustomerDetails'))

							for(i=0;i<request.message.length;i++){

						productDetails.push({

							"name": request.message[i].productTitle,
							"quantity": request.message[i].productQuantity,
							"price_inc_tax": parseFloat((request.message[i].productPrice).slice(4)),
							"price_ex_tax": parseFloat((request.message[i].productPrice).slice(4)),
							"sku": request.message[i].productSKU + "&&&" + request.message[i].productImage
								})
							}

							var orderDetails = {
										  "customer_id": bcCustomerInfo.customerID,
										  "billing_address": {
										    "first_name": "Name",
										    "last_name": "Name",
										    "street_1": "123 Main Street",
										    "city": "Austin",
										    "state": "Texas",
										    "zip": "78751",
										    "country": "United States",
										    "country_iso2": "US",
										    "email": "janedoe@email.com"
										  },
										  "shipping_addresses": [
										    {
										      "first_name": "Trish",
										      "last_name": "Test",
										      "company": "Acme Pty Ltd",
										      "street_1": "666 Sussex St",
										      "city": "Austin",
										      "state": "Texas",
										      "zip": "78751",
										      "country": "United States",
										      "country_iso2": "US",
										      "email": "elsie@example.com"
										    }
										  ],
										  "products": productDetails
										}

							// creating the order if customer is created
							$.ajax({
								method:'POST',
								url: bcBaseURL + "orders",
								data: JSON.stringify(orderDetails),
								headers: {
									
										"X-Auth-Client": bcXAuthClient,

										"X-Auth-Token": bcXAuthToken,

										"Authorization": bcAuthorization,

										"Content-Type": "application/json"
								}
							}).done(function(info){

								console.log(info)

								

							}).fail(function(info){

								console.log(info)


							})

					}).fail(function(info){

						console.log(info)
					})

			}


			// creating the order if customer is created
							// $.ajax({
							// 	method:'POST',
							// 	url: bcBaseURL + "orders",
							// 	data: JSON.stringify(orderDetails),
							// 	headers: {
									
							// 			"X-Auth-Client": bcXAuthClient,

							// 			"X-Auth-Token": bcXAuthToken,

							// 			"Authorization": bcAuthorization,

							// 			"Content-Type": "application/json"
							// 	}
							// }).done(function(info){

							// 	console.log(info)

							// }).fail(function(info){

							// 	console.log(info)
							// })
		

		}


		// Making API call for signup
		if (request.notifications == "signUp") {

			$.ajax({
				method:'POST',
				url: lgsBaseUrl + "register?XDEBUG_SESSION_START=PHPSTORM",
				data: request.message,
				headers: {
					
						"Content-Type": "application/x-www-form-urlencoded"
				}
			}).done(function(info){

				console.log(info)

				// Sending response back to where signup request came from
                    chrome.runtime.sendMessage({ response: "signUpTrue", data: info}, function(response) {
                        
                    });
				
				
			}).fail(function(info){

					 console.log(info); 

					 // Sending response back to where signup request came from
					 chrome.runtime.sendMessage({ response: "signUpFalse", data: info}, function(response) {
                        
                     });                                  

			});
		}

		// Making API call for login
		if (request.notifications == "logIn") {

			
			console.log(request.message);


			$.ajax({
				method:'POST',
				url: lgsBaseUrl + "login?XDEBUG_SESSION_START=PHPSTORM",
				data: request.message,
				headers: {
						
						"Content-Type": "application/x-www-form-urlencoded"
				}
			}).done(function(info){

				console.log(info)


				
				
				// Sending response back to where login request came from
                chrome.runtime.sendMessage({ response: "signInTrue", data: info}, function(response) {
                        
                });
				
				
			}).fail(function(info){

				 console.log(info);                                   

				 chrome.runtime.sendMessage({ response: "signInFalse", data: info}, function(response) {
                        
                });
			});
		}



		// Making API call for logout
		if (request.notifications == "logOut") {

			
			console.log(request.message);


			detailsObject = JSON.parse(localStorage.getItem('details'));



			$.ajax({
				method:'POST',
				url: lgsBaseUrl + "logout?XDEBUG_SESSION_START=PHPSTORM",
				headers: {
						
						"Content-Type": "application/x-www-form-urlencoded",

						"Authorization": "Bearer " + detailsObject.access_token
				}
			}).done(function(info){

				console.log(info)

				localStorage.removeItem('details')

				localStorage.setItem('loggedIn', 'false');

				// Sending response back to where login request came from
                chrome.runtime.sendMessage({ response: "signOutTrue", data: info}, function(response) {
                        
                });
				
				
			}).fail(function(info){

				 console.log(info);                                   

			});
		}


		if(request.notifications == 'usaAddress'){

			detailsObject = JSON.parse(localStorage.getItem('details'));

			$.ajax({
				method:'GET',
				url: lgsBaseUrl + "warehouse-address?XDEBUG_SESSION_START=PHPSTORM",
				headers: {
						
						"Content-Type": "application/x-www-form-urlencoded",

						"Authorization": "Bearer " + detailsObject.access_token
				}
			}).done(function(info){

				console.log(info)

				// Sending response back for usa address page to load.
				chrome.runtime.sendMessage({ response: "getUsaAddress", data: info}, function(response) {
                        
                });

				
				
				
			}).fail(function(info){

				 console.log(info);                                   

			});	


		}


		if(request.notifications == 'createLocalAddress'){

			detailsObject = JSON.parse(localStorage.getItem('details'));

			$.ajax({
				method:'POST',
				url: lgsBaseUrl + "local-address?XDEBUG_SESSION_START=PHPSTORM",
				data: request.message,
				headers: {
						
						"Content-Type": "application/x-www-form-urlencoded",

						"Authorization": "Bearer " + detailsObject.access_token						
				}
			}).done(function(info){

				console.log(info)

				localStorage.setItem('localAddress', JSON.stringify(request.message))
				// Sending response back for usa address page to load.
				chrome.runtime.sendMessage({ response: "createdLocalAddress"}, function(response) {
                        
                });

				
				
				
			}).fail(function(info){

				 console.log(info);                                   

			});	


		}


		if(request.notifications == 'updateLocalAddress'){

			detailsObject = JSON.parse(localStorage.getItem('details'));

			console.log(detailsObject)


			$.ajax({
				method:'PUT',
				url: lgsBaseUrl + "local-address/" + request.id,
				data: request.message,
				headers: {
						
						"Content-Type": "application/x-www-form-urlencoded",

						"Authorization": "Bearer " + detailsObject.access_token,

						"Accept": "application/json"					
				}
			}).done(function(info){

				console.log(info)

				var addressId = info.id

				console.log(addressId)

				localStorage.setItem('localAddressId', addressId);

				localStorage.setItem('localAddress', JSON.stringify(request.message))
				// Sending response back for confirmation of updated local address.
				chrome.runtime.sendMessage({ response: "updatedLocalAddress"}, function(response) {
                        ;
                });

				
				
				
			}).fail(function(info){

				 console.log(info);      

				 // Notify that update local address was not successful                             

			});	


		}


		if(request.notifications == 'getLocalAddress'){

			detailsObject = JSON.parse(localStorage.getItem('details'));

			$.ajax({
				method:'GET',
				url: lgsBaseUrl + "local-address/",
				headers: {
						
						"Content-Type": "application/x-www-form-urlencoded",

						"Authorization": "Bearer " + detailsObject.access_token,

						"Accept": "application/json"					
				}
			}).done(function(info){

				console.log(info[0])

				if(info[0] !== undefined){

					localStorage.setItem('localAddress', JSON.stringify(info[0]))
					// Sending response back for local address page to load.
					chrome.runtime.sendMessage({ response: "gotLocalAddress"}, function(response) {
	                        ;
	                });

				} else {


					chrome.runtime.sendMessage({ response: "noLocalAddress"}, function(response) {
                        ;
                	});	
				}

				

				
				
				
			}).fail(function(info){

				chrome.runtime.sendMessage({ response: "noLocalAddress"}, function(response) {
                        
                });				

				 console.log(info);                                   

			});	


		}		


	})