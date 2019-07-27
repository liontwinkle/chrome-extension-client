$(window).ready(function(){

		chrome.runtime.onMessage.addListener(gotMessage);

		console.log("chrome extension go")

		function gotMessage(message,sender,sendResponse){
			document.getElementById("enterAddressFullName").value=message.customerName
			document.getElementById("enterAddressAddressLine1").value=message.addressLine1
			document.getElementById("enterAddressAddressLine2").value=message.addressLine2
			document.getElementById("enterAddressCity").value=message.city
			document.getElementById("enterAddressStateOrRegion").value=message.state
			document.getElementById("enterAddressPostalCode").value=message.zip
			document.getElementById("enterAddressPhoneNumber").value=message.phone
		}

		if(location.href == 'https://www.amazon.com/gp/buy/payselect/handlers/display.html?hasWorkingJavascript=1'){

			$('body').on('click', '#dummyButton', function(){

				console.log('make ajax call to place order');

				var cartDetails = JSON.parse(localStorage.getItem("cartItems-LetsGoShip"));

				chrome.runtime.sendMessage({ notifications: "createOrder", message: cartDetails}, function (response) {
						//console.log(response.data);
				});


			})

			var element = '<button id="dummyButton">Dummy</button>'
			$('#nav-inner').prepend(element)


		}

		$('body').on('click', '#sc-buy-box-ptc-button', function(){

			console.log('checkout clicked')


			console.log($('.sc-list-item').length);

			if(localStorage.getItem('cartItems-LetsGoShip')){

					localStorage.removeItem('cartItems-LetsGoShip');

			}

			var cartArray = [];

			for(i=0;i<$('.sc-list-item').length;i++){

				if($($('.sc-list-item')[i]).attr('data-itemtype')=='active'){
					var productSKU = $($('.sc-list-item')[i]).attr('data-asin');

					console.log(productSKU);

					var productTitle = $.trim($($('.sc-list-item')[i]).find('.sc-product-title').text());

					console.log(productTitle);

					var productPrice = $.trim($($('.sc-list-item')[i]).find('.sc-product-price').text());

					console.log(productPrice);

					var productQuantity = $.trim($($('.sc-list-item')[i]).find('.a-dropdown-prompt').text());

					console.log(productQuantity);

					var productImage = $($('.sc-list-item')[i]).find('.sc-product-image').attr('src')

					console.log(productImage);

					var cartProduct = {

						"productSKU" : productSKU,

						'productTitle' : productTitle,

						'productPrice' : productPrice,

						'productQuantity' : productQuantity,

						'productImage' : productImage


					}

					cartArray.push(cartProduct);

					console.log(cartArray);
				}	


			}

			// chrome.runtime.sendMessage({ notifications: "createOrder", message: cartArray}, function (response) {
			// 		//console.log(response.data);
			// });

			localStorage.setItem('cartItems-LetsGoShip', JSON.stringify(cartArray));
			


		})


		// Run below code when extension is on amazon site
		if(window.location.toString().match('^https://www.amazon.com/')){

				console.log('loading in amazon webpage')

				$.get("chrome-extension://" + chrome.runtime.id + "/html/topbar.html", function( data ) {

		   			$("body").prepend(data);


				})

				var pageMaskElement = '<div id="page-mask" style="position: fixed;left: 0;right: 0;bottom: 0;top: 0;background-color: rgba(0,0,0,0.6);display: none;"></div>'

				$('body').append(pageMaskElement)

				$('#companyLogo').ready(function(){


					var logo = "chrome-extension://" + chrome.runtime.id + "/images/topbarLogo.png";
					console.log(logo)

					setTimeout(function(){

						$('#companyLogo').attr('src',logo);

					}, 2000)
					
				})

				var details={
						name:$("#productTitle").innerText,
						price:$("#priceblock_ourprice").innerText,
						color:$("#variation_color_name .selection").innerText,
						size:$("#variation_size_name .selection").innerText,
						style:$("#variation_style_name .selection").innerText,
				}
				$("#addButton").on("click",function(){
					console.log(details)
					chrome.runtime.sendMessage(details)
				})

				$('#companyNotification').ready(function(){

					var notificationProducts = JSON.parse(localStorage.getItem('cartDetails'))

					// if(notificationProducts.length > 0){

					// 		$('#companyNotification').css('display', 'block');

					// 		var tempCount = 0;

					// 		for(i=0; i<notificationProducts.length; i++){


					// 				tempCount = tempCount + notificationProducts[i].itemCount

					// 				console.log(notificationProducts[i].itemCount)
					// 		}

					// 		console.log(tempCount)

					// 		$('#companyNotification').text(tempCount);
					// }
				})



				$('#viewCartIcon').ready(function(){

						var cartIcon = "chrome-extension://" + chrome.runtime.id + "/images/cartIcon.png";
						console.log(cartIcon)

						setTimeout(function(){

							$('#viewCartIcon').attr('src',cartIcon);

							var notificationProducts = JSON.parse(localStorage.getItem('cartDetails'))

							if(notificationProducts.length > 0){

									$('#companyNotification').css('display', 'block');

									var tempCount = 0;

									for(i=0; i<notificationProducts.length; i++){


											tempCount = tempCount + notificationProducts[i].itemCount

											console.log(notificationProducts[i].itemCount)
									}

									console.log(tempCount)

									$('#companyNotification').text(tempCount);
							}


									$('#viewCartIcon').hover(hoverIn, hoverOut);

									$('#viewCartModal').mouseleave(function(){

										$('#viewCartModal').css('display','none');
										$('#page-mask').css('display', 'none')
									})

									function hoverOut(){


									}

									function hoverIn(){

											$('#cartDetailSection').empty();

										var cartProducts = JSON.parse(localStorage.getItem('cartDetails'))

										if(cartProducts == null ){

											console.log('nothing in cart')

											$('#subtotal').text(0);

											$('#viewCartModal').toggle();
										} else {

													console.log(cartProducts);

													var subtotal = 0;
														
																subtotal = parseInt(subtotal)
																
																for(i=0; i<cartProducts.length; i++){

																	subtotal = subtotal + parseFloat(cartProducts[i].productPrice)

																	console.log(cartProducts[i].productPrice);

																}

																console.log(subtotal)

																subtotal = subtotal.toFixed(2);

																$('#subtotal').text(subtotal);

																if(subtotal == 0){

																	var element = "<div id='emptyCartMM'><hr style='margin-top: 15px; margin-bottom: 20px;'><div>Your Cart is Empty</div></div>"

																	$('#cartDetailSection').prepend(element);

																	$('#checkOut').css('display','none');

																	$('#viewCartModal').css('height', '512px');

																}


												for (var i = 0; i < cartProducts.length; i++) {

														if (cartProducts[i].productColor == "" && cartProducts[i].productSize =="") {

															$('#checkOut').css('display','block');

															$('#emptyCartMM').css('display','none');

															$('#viewCartModal').css('height', '575px');

															var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProducts[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProducts[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProducts[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProducts[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProducts[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";

														} else if (cartProducts[i].productColor == "") {
															
															$('#checkOut').css('display','block');
															$('#emptyCartMM').css('display','none');

															$('#viewCartModal').css('height', '575px');

															var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProducts[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProducts[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>Size: "+cartProducts[i].productSize+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProducts[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProducts[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProducts[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
														
														} else if (cartProducts[i].productSize =="") {

															$('#checkOut').css('display','block');
															$('#emptyCartMM').css('display','none');

															$('#viewCartModal').css('height', '575px');

															var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProducts[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProducts[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: "+cartProducts[i].productColor+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProducts[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProducts[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProducts[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";						
														
														} else{
														
															$('#checkOut').css('display','block');
															$('#emptyCartMM').css('display','none');

															$('#viewCartModal').css('height', '575px');

															var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProducts[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProducts[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: "+cartProducts[i].productColor+"</div><div>Size: "+cartProducts[i].productSize+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProducts[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProducts[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProducts[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
														
														}
														
														$('#cartDetailSection').prepend(element);
														
													}


													$('#viewCartModal').toggle();

													$('#page-mask').css('display', 'block')
													console.log($('#viewCartModal').css("display"));


													console.log('view cart click')

													console.log("remove button ready")

										}


									}

						}, 2000)

						

				})
				

				$('#viewCart').ready(function(){

					$('#viewCart-continueShopping').on('click', function(){

						$('#viewCartModal').css('display','none');

						$('#page-mask').css('display', 'none')


					})

					// $('#viewCartModal').mouseleave(function(){

					// 	$('#viewCartModal').css('display', 'none');

					// })

					// localStorage.setItem('viewCartState', 'false');

					
					

					$('body').on('click', '#viewCartIcon', function(){

						localStorage.setItem('lastPageCompany', location.href )

						chrome.runtime.sendMessage({greeting: "updateLastPageCompany", data: location.href }, function(response) {
										  console.log(response.farewell);
						});


						window.open('https://letsgoship.com')
					})

					$('body').on('click', '#checkOut', function(){

						localStorage.setItem('lastPageCompany', location.href )

						chrome.runtime.sendMessage({greeting: "updateLastPageCompany", data: location.href }, function(response) {
										  console.log(response.farewell);
						});

						chrome.runtime.sendMessage({greeting: "sendShoppingCartDetails", data: JSON.parse(localStorage.getItem('cartDetails')) }, function(response){

							
						})

						// window.open('https://letsgoship.com')
					})

					$('body').on('click', '#addToCart-checkOut', function(){

						localStorage.setItem('lastPageCompany', location.href )

						chrome.runtime.sendMessage({greeting: "updateLastPageCompany", data: location.href }, function(response) {
										  console.log(response.farewell);
						});

						window.open('https://letsgoship.com')
					})					
				
				})


				$('#cartDetailSection').ready(function(){


						$('body').on('click', '.removeItem', function(event){

									console.log('remove Item');

									console.log($(this).siblings('.itemCount').attr('id'));

									var productList = JSON.parse(localStorage.getItem('cartDetails'));

									var count = productList[$(this).siblings('.itemCount').attr('id')].itemCount

									count--

									// remove item from list if item count gets to zero
									if (count == 0) {


										console.log('minimum count should be 1 item')
									

									} else {

										console.log('item removed')

										productList[$(this).siblings('.itemCount').attr('id')].itemCount = count; 

										localStorage.setItem('cartDetails', JSON.stringify(productList));

										// setting value in eventpage local storage
										chrome.runtime.sendMessage({greeting: "setCartDetails", data: productList }, function(response) {
										  console.log(response.farewell);
										});

										chrome.runtime.sendMessage

										$(this).siblings('.itemCount').text(count)

										// updating product price
												var oldPrice = productList[$(this).siblings('.itemCount').attr('id')].productPrice;


												oldPrice = parseFloat(oldPrice);


												count = parseInt(count);

												var newPrice = oldPrice - oldPrice/(count + 1)

												newPrice = newPrice.toFixed('2');

												productList[$(this).siblings('.itemCount').attr('id')].productPrice = newPrice;


												localStorage.setItem('cartDetails', JSON.stringify(productList));

												// setting value in eventpage local storage
												chrome.runtime.sendMessage({greeting: "setCartDetails", data: productList }, function(response) {
												  console.log(response.farewell);
												});

												// udpating subtotal
												var subtotal = 0;
												
												subtotal = parseInt(subtotal)
												
												for(i=0; i<productList.length; i++){

													subtotal = subtotal + parseFloat(productList[i].productPrice)

													console.log(productList[i].productPrice);

												}

												console.log(subtotal)

												subtotal = subtotal.toFixed(2);

												$('#subtotal').text(subtotal);

										$('#companyNotification').css('display', 'block');

												var tempCount = 0;

												for(i=0; i<productList.length; i++){


													tempCount = tempCount + productList[i].itemCount

												}

										$('#companyNotification').text(tempCount);


										$('#cartDetailSection').empty();

										var cartProductsPostRemove = JSON.parse(localStorage.getItem('cartDetails'))

										console.log(cartProductsPostRemove);

										console.log(cartProductsPostRemove[0])



										// for (var i = 0; i < cartProductsPostRemove.length; i++) {

										// 	var element = "<div style='height: 180px;'><img src='"+cartProductsPostRemove[i].productImage+"' style='width: 100px; height: 100px; margin-top: 5px; position: absolute;' /><button id='"+i+"' class='removeButton' style='margin-top: 110px;'>Remove</button><div style='float: right; width: 484px;'><div>Title: "+cartProductsPostRemove[i].productTitle+"</div><div>color: "+cartProductsPostRemove[i].productColor+"</div><div>Price: "+cartProductsPostRemove[i].productPrice+"</div><div>Size: "+cartProductsPostRemove[i].productSize+"</div><a href='"+cartProductsPostRemove[i].productPage+"'>Amazon</a><div>No. of items: </div><div style='border: 1px solid black;width: 50px;padding-left: 7px;'><span class='removeItem'>-</span><span class='itemCount' id='"+i+"'>"+cartProductsPostRemove[i].itemCount+"</span><span style='cursor: pointer;' class='addItem'>+</span></div></div></div>";


										// 	$('#cartDetailSection').prepend(element);
											
										// }

										for (var i = 0; i < cartProductsPostRemove.length; i++) {

												if (cartProductsPostRemove[i].productColor == "" && cartProductsPostRemove[i].productSize =="") {

													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProductsPostRemove[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProductsPostRemove[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProductsPostRemove[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProductsPostRemove[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProductsPostRemove[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";

												} else if (cartProductsPostRemove[i].productColor == "") {
													
													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProductsPostRemove[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProductsPostRemove[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>Size: "+cartProductsPostRemove[i].productSize+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProductsPostRemove[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProductsPostRemove[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProductsPostRemove[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
												
												} else if (cartProductsPostRemove[i].productSize =="") {

													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProductsPostRemove[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProductsPostRemove[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: "+cartProductsPostRemove[i].productColor+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProductsPostRemove[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProductsPostRemove[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProductsPostRemove[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";						
												
												} else{
												
													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProductsPostRemove[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProductsPostRemove[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: "+cartProductsPostRemove[i].productColor+"</div><div>Size: "+cartProductsPostRemove[i].productSize+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProductsPostRemove[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProductsPostRemove[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProductsPostRemove[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
												
												}
												
												$('#cartDetailSection').prepend(element);
												
										}


									}
						})

						// add item count for a product in a cart

						$('body').on('click', '.addItem', function(event){

									console.log('add Item');

									console.log($(this).siblings('.itemCount').attr('id'));

									var productList = JSON.parse(localStorage.getItem('cartDetails'));

									var count = productList[$(this).siblings('.itemCount').attr('id')].itemCount

									count++

									// redundant code
									if (count == 0) {

										productList.splice($(this).siblings('.itemCount').attr('id'), 1);

										console.log(productList);

										localStorage.setItem('cartDetails', JSON.stringify(productList));

										// setting value in eventpage local storage
										chrome.runtime.sendMessage({greeting: "setCartDetails", data: productList }, function(response) {
										  console.log(response.farewell);
										});

										$('#companyNotification').css('display', 'block');

										var tempCount = 0;

										for(i=0; i<productList.length; i++){


											tempCount = tempCount + productList[i].itemCount

										}

										$('#companyNotification').text(tempCount);


										if(productList.length == 0){

											$('#companyNotification').css('display', 'none');
										}

										$('#cartDetailSection').empty();

										var cartProductsPostRemove = JSON.parse(localStorage.getItem('cartDetails'))

										console.log(cartProductsPostRemove);

										console.log(cartProductsPostRemove[0])

										for (var i = 0; i < cartProductsPostRemove.length; i++) {

												if (cartProductsPostRemove[i].productColor == "" && cartProductsPostRemove[i].productSize =="") {

													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProductsPostRemove[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProductsPostRemove[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProductsPostRemove[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProductsPostRemove[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProductsPostRemove[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";

												} else if (cartProductsPostRemove[i].productColor == "") {
													
													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProductsPostRemove[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProductsPostRemove[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>Size: "+cartProductsPostRemove[i].productSize+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProductsPostRemove[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProductsPostRemove[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProductsPostRemove[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
												
												} else if (cartProductsPostRemove[i].productSize =="") {

													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProductsPostRemove[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProductsPostRemove[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: "+cartProductsPostRemove[i].productColor+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProductsPostRemove[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProductsPostRemove[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProductsPostRemove[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";						
												
												} else{
												
													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProductsPostRemove[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProductsPostRemove[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: "+cartProductsPostRemove[i].productColor+"</div><div>Size: "+cartProductsPostRemove[i].productSize+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProductsPostRemove[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProductsPostRemove[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProductsPostRemove[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
												
												}
												
												$('#cartDetailSection').prepend(element);
												
										}

									} else {

										console.log('item added')

										productList[$(this).siblings('.itemCount').attr('id')].itemCount = count; 
										
										$(this).siblings('.itemCount').text(count)

										var oldPrice = productList[$(this).siblings('.itemCount').attr('id')].productPrice;

										oldPrice = parseFloat(oldPrice);

										var count = count;

										count = parseInt(count);

										var newPrice = oldPrice + oldPrice/(count-1)

										newPrice = newPrice.toFixed(2);

										productList[$(this).siblings('.itemCount').attr('id')].productPrice = newPrice;

										localStorage.setItem('cartDetails', JSON.stringify(productList));

										// setting value in eventpage local storage
										chrome.runtime.sendMessage({greeting: "setCartDetails", data: productList }, function(response) {
										  console.log(response.farewell);
										});

										$('#cartDetailSection').empty();

										// for (var i = 0; i < productList.length; i++) {

										// 	var element = "<div style='height: 180px;'><img src='"+productList[i].productImage+"' style='width: 100px; height: 100px; margin-top: 5px; position: absolute;' /><button id='"+i+"' class='removeButton' style='margin-top: 110px;'>Remove</button><div style='float: right; width: 484px;'><div>Title: "+productList[i].productTitle+"</div><div>color: "+productList[i].productColor+"</div><div>Price: "+productList[i].productPrice+"</div><div>Size: "+productList[i].productSize+"</div><a href='"+productList[i].productPage+"'>Amazon</a><div>No. of items: </div><div style='border: 1px solid black;width: 50px;padding-left: 7px;'><span class='removeItem'>-</span><span class='itemCount' id='"+i+"'>"+productList[i].itemCount+"</span><span style='cursor: pointer;' class='addItem'>+</span></div></div></div>";


										// 	$('#cartDetailSection').prepend(element);
											
										// }

										for (var i = 0; i < productList.length; i++) {

												if (productList[i].productColor == "" && productList[i].productSize =="") {

													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+productList[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+productList[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+productList[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+productList[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+productList[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";

												} else if (productList[i].productColor == "") {
													
													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+productList[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+productList[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>Size: "+productList[i].productSize+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+productList[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+productList[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+productList[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
												
												} else if (productList[i].productSize =="") {

													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+productList[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+productList[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: "+productList[i].productColor+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+productList[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+productList[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+productList[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";						
												
												} else{
												
													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+productList[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+productList[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: "+productList[i].productColor+"</div><div>Size: "+productList[i].productSize+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+productList[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+productList[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+productList[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
												
												}
												
												$('#cartDetailSection').prepend(element);
												
										}

										// udpating subtotal
										var subtotal = 0;
										
										subtotal = parseInt(subtotal)
										
										for(i=0; i<productList.length; i++){

											subtotal = subtotal + parseFloat(productList[i].productPrice)

											console.log(productList[i].productPrice);

										}

										subtotal = subtotal.toFixed(2)
										console.log(subtotal)

										$('#subtotal').text(subtotal);

										// showing notification bubble count
										$('#companyNotification').css('display', 'block');

										var tempCount = 0;

										for(i=0; i<productList.length; i++){


											tempCount = tempCount + productList[i].itemCount

										}

										$('#companyNotification').text(tempCount);


									}
						})

						$('body').on('click', '.removeButton', function(event) {

										console.log('remove click')

										console.log($(this).attr('id'));

										console.log($(this).attr('id'));

										var productList = JSON.parse(localStorage.getItem('cartDetails'));

										productList.splice($(this).attr('id'), 1);

										console.log(productList);

										localStorage.setItem('cartDetails', JSON.stringify(productList));

										// setting value in eventpage local storage
										chrome.runtime.sendMessage({greeting: "setCartDetails", data: productList }, function(response) {
										  console.log(response.farewell);
										});

										// $('#companyNotification').text(productList.length);


										if(productList.length == 0){

											$('#companyNotification').css('display', 'none');

											$('#subtotal').text(0);

										} else {

												var subtotal = 0;
										
												subtotal = parseInt(subtotal)
												
												for(i=0; i<productList.length; i++){

													subtotal = subtotal + parseFloat(productList[i].productPrice)

													console.log(productList[i].productPrice);

												}

												console.log(subtotal)

												subtotal = subtotal.toFixed(2);

												$('#subtotal').text(subtotal);


												$('#companyNotification').css('display', 'block');

												var tempCount = 0;

												for(i=0; i<productList.length; i++){


													tempCount = tempCount + productList[i].itemCount

												}




												$('#companyNotification').text(tempCount);
										}

										$('#cartDetailSection').empty();

										var cartProductsPostRemove = JSON.parse(localStorage.getItem('cartDetails'))

										console.log(cartProductsPostRemove);

										console.log(cartProductsPostRemove[0])

										for (var i = 0; i < cartProductsPostRemove.length; i++) {

												if (cartProductsPostRemove[i].productColor == "" && cartProductsPostRemove[i].productSize =="") {

													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProductsPostRemove[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProductsPostRemove[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProductsPostRemove[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProductsPostRemove[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProductsPostRemove[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";

												} else if (cartProductsPostRemove[i].productColor == "") {
													
													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProductsPostRemove[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProductsPostRemove[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>Size: "+cartProductsPostRemove[i].productSize+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProductsPostRemove[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProductsPostRemove[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProductsPostRemove[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
												
												} else if (cartProductsPostRemove[i].productSize =="") {

													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProductsPostRemove[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProductsPostRemove[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: "+cartProductsPostRemove[i].productColor+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProductsPostRemove[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProductsPostRemove[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProductsPostRemove[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";						
												
												} else{
												
													var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img src='"+cartProductsPostRemove[i].productImage+"'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: "+cartProductsPostRemove[i].productTitle+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: "+cartProductsPostRemove[i].productColor+"</div><div>Size: "+cartProductsPostRemove[i].productSize+"</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='"+cartProductsPostRemove[i].productPage+"'>From Amazon</a><div style='display: block; margin-top: 4px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='"+i+"' style='border: 1px solid black; padding: 2px 7px;'>"+cartProductsPostRemove[i].itemCount+"</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ "+cartProductsPostRemove[i].productPrice+"</div><button id='"+i+"' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
												
												}
												
												$('#cartDetailSection').prepend(element);
												
										}

								})

				})

					$('.removeButton').on('click', function(){

						console.log($(this).attr('id'));
					})
				

				$(document).mouseup(function(e) 
				{


				    var container = $("#addToCartModal");

				    var continueShopping = $('#addToCart-continueShopping')

				    if(continueShopping.is(e.target)){
				    	container.hide()
				    	$('#page-mask').css('display', 'none')
				    } else
				    // if the target of the click isn't the container nor a descendant of the container
				    (!container.is(e.target) && container.has(e.target).length === 0) 
				    {	
				        container.hide();
				        $('#page-mask').css('display', 'none')
				    }
				});

				// $(document).mouseup(function(e){

				// 	var container2 = $('#viewCartModal');

				// 	(!container2.is(e.target) && container2.has(e.target).length === 0) 
				//     {
				//         container2.hide();
				//     }

				// })

				$('#addToCartMM').on('click', '#addToCart-continueShopping', function(){

						$('#page-mask').css('display', 'none')
						$('#addToCartModal').hide();

						console.log('hide modal')
					})

				$('#addToCartMM').ready(function(){

					if($.trim($('#productTitle').text()) !== ''){

						console.log('this is a product page')

						// Do something when add to cart button is clicked
						$('body').on('click', '#addToCartMM', function(){


							$('#successIcon').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/success.png")
							console.log('add to cart clicking')

							console.log($.trim($('#productTitle').text()));
							console.log($('#priceblock_ourprice').text());
							console.log($('.a-dynamic-image').attr('src'));
							console.log($.trim($('#dropdown_selected_size_name').find('.a-dropdown-prompt').text()));
							console.log($.trim($('#variation_color_name').find('.selection').text()));

							// console.log($('#usedPitchPrice').find('.price-large').text())

							console.log($.trim($('#variation_color_name').find('.a-form-label').text()) + $.trim($('#variation_color_name').find('.selection').text()));

							console.log($.type($.trim($('#dropdown_selected_size_name').find('.a-dropdown-prompt').text())));

							console.log(location.href);

							var tempProductPrice = $('#priceblock_ourprice').text();

							tempProductPrice = tempProductPrice.replace('$', '');

							var productSKU = $('#addToCart').children('#ASIN').attr('value');

							console.log(productSKU);

							var productDetails = {

								'productTitle': $.trim($('#productTitle').text()),
								'productPrice': tempProductPrice,
								'productImage': $('.a-dynamic-image').attr('src'),
								'productColor': $.trim($('#variation_color_name').find('.selection').text()),
								'productPage': location.href,
								'productSize': $.trim($('#dropdown_selected_size_name').find('.a-dropdown-prompt').text()),
								'itemCount': 1,
								'productSKU': $('#addToCart').children('#ASIN').attr('value')

							}

							
							if($.trim($('#productTitle').text()) !== '')
								
							{// Check if cartdetails exist and not empty


											if (localStorage.getItem('cartDetails') && JSON.parse(localStorage.getItem('cartDetails')).length>0 ) {
							
												var productListPostAdd = JSON.parse(localStorage.getItem('cartDetails'))
							
												var sameProductSKU = false;
												console.log('inside')
												for(i=0;i< productListPostAdd.length; i++){
							
													console.log('loop')
														// check if product already in cart
							
														console.log(productDetails.productPage)
														console.log(productListPostAdd[i].productPage)
							
														console.log(productDetails.productSKU)
							
														console.log(productListPostAdd[i].productSKU)
							
														if (productDetails.productSKU == productListPostAdd[i].productSKU ) {
							
															sameProductSKU = true;
							
															console.log('same product')
															var newItemCount = productListPostAdd[i].itemCount + 1;
							
							
															productListPostAdd[i].itemCount = newItemCount;
							
															newItemCount = parseInt(newItemCount);
							
															console.log(newItemCount)
														
															var oldPrice = productListPostAdd[i].productPrice;
							
															console.log("oldPrice " + oldPrice )
															
															oldPrice = parseFloat(oldPrice);
							
															console.log('old price ' + oldPrice)
									
															tempProductPrice = parseFloat(tempProductPrice);
							
															var newPrice = oldPrice + tempProductPrice;
							
															newPrice = newPrice.toFixed('2');
							
															productListPostAdd[i].productPrice = newPrice;
							
															console.log("newPrice " + newPrice)
							
															var subtotal = 0;
															
															subtotal = parseInt(subtotal)
															
															for(a=0; a<productListPostAdd.length; a++){
							
																subtotal = subtotal + parseFloat(productListPostAdd[a].productPrice)
							
																console.log(productListPostAdd[a].productPrice);
							
															}
							
															console.log(subtotal)
							
															$('#subtotal').text(subtotal);
							
															localStorage.setItem('cartDetails', JSON.stringify(productListPostAdd));

															// setting value in eventpage local storage
															chrome.runtime.sendMessage({greeting: "setCartDetails", data: productListPostAdd }, function(response) {
															  console.log(response.farewell);
															});
							
															$('#companyNotification').css('display', 'block');
							
															var tempCount = 0;
							
															for(j=0; j<productListPostAdd.length; j++){
							
																tempCount = tempCount + productListPostAdd[j].itemCount
							
															}
							
															$('#companyNotification').text(tempCount);
															

															$('#page-mask').css('display', 'block')							
															$('#addToCartModal').css('display','block');
							
															$('#addToCartProductDetail').css('display','block');
															$('#addToCartTitle').text($.trim($('#productTitle').text()))
															
															$('#addToCartImage').attr('src',$('.a-dynamic-image').attr('src'));
							
															$('#addToCart-checkOut').css('display', 'block');
							
															$('#addToCartError').css('display', 'none');
							
															$('#addToCart-Ok').css('display', 'none');
							
							
														} 
												}
							
												if(sameProductSKU == false){
							
													if (productDetails.productSize == "Select") {
																	$('#page-mask').css('display', 'block')
																	$('#addToCartModal').css('display','block');
																	$('#addToCartProductDetail').css('display','none');
																	$('#addToCartError').css('display','block');
																	$('#addToCartError').text("Please select a product size.")
																	$('#addToCart-Ok').css('display','block');
																	$('#addToCart-checkOut').css('display','none');
							
																} else if (productDetails.productColor == "Select") {
							
																	$('#page-mask').css('display', 'block')
																	$('#addToCartModal').css('display','block');
																	$('#addToCartProductDetail').css('display','none');
																	$('#addToCartError').css('display','block');
																	$('#addToCartError').text("Please select a product color.");
																	$('#addToCart-Ok').css('display','block');
																	$('#addToCart-checkOut').css('display','none');
							
																} else if (productDetails.productPrice == '') {

																	$('#page-mask').css('display', 'block')
																	$('#addToCartModal').css('display','block');
																	$('#addToCartProductDetail').css('display','none');
																	$('#addToCartError').css('display','block');
																	$('#addToCartError').text("Please select a product with price.");
																	$('#addToCart-Ok').css('display','block');
																	$('#addToCart-checkOut').css('display','none');


																} else {
							
																		// $('#addToCart').text("Adding")
												    		// 			$('#addToCart').attr("class","btn btn-warning btn-block mt-1 mr-3")
							
												    				// redundant check but good to take details
																	if(localStorage.getItem('cartDetails')){
							
																		var cartDetails = JSON.parse(localStorage.getItem('cartDetails'))
							
																		
							
																		cartDetails.push(productDetails);
							
																		localStorage.setItem('cartDetails', JSON.stringify(cartDetails));

																		// setting value in eventpage local storage
																		chrome.runtime.sendMessage({greeting: "setCartDetails", data: cartDetails }, function(response) {
																		  console.log(response.farewell);
																		});
							
							
																		// udpating subtotal
																		var subtotal = 0;
																		
																		subtotal = parseInt(subtotal)
																		
																		for(k=0; k<cartDetails.length; k++){
							
																			subtotal = subtotal + parseFloat(cartDetails[k].productPrice)
							
																			console.log(cartDetails[k].productPrice);
							
																		}
							
																		subtotal = subtotal.toFixed(2);
																		console.log(subtotal)
							
																		$('#subtotal').text(subtotal);
							
							
																		// updating notification bubble count
																		$('#companyNotification').css('display', 'block');
							
																		var tempCount = 0;
							
																		for(l=0; l<cartDetails.length; l++){
							
							
																			tempCount = tempCount + cartDetails[l].itemCount
							
																		}
							
																		$('#companyNotification').text(tempCount);
							
																		$('#page-mask').css('display', 'block')
																		$('#addToCartModal').css('display','block');
							
																		$('#addToCartProductDetail').css('display','block');
																		$('#addToCartTitle').text($.trim($('#productTitle').text()))
																		
																		$('#addToCartImage').attr('src',$('.a-dynamic-image').attr('src'));
							
																		$('#addToCart-Ok').css('display','none');
																		$('#addToCart-checkOut').css('display','block');
							
																		$('#addToCartError').css('display','none')
																	
							
																	} 
							
																}
												}
							
											} else {
							
																		var cartDetails = []
							
																		cartDetails.push(productDetails);
																		localStorage.setItem('cartDetails', JSON.stringify(cartDetails));

																		// setting value in eventpage local storage
																		chrome.runtime.sendMessage({greeting: "setCartDetails", data: cartDetails }, function(response) {
																		  console.log(response.farewell);
																		});
							
																		$('#companyNotification').css('display', 'block');
																		$('#companyNotification').text(cartDetails.length);
							
																		$('#page-mask').css('display', 'block')
																		$('#addToCartModal').css('display','block');
							
																		$('#addToCartProductDetail').css('display','block');
																		$('#addToCartTitle').text($.trim($('#productTitle').text()))
																		
																		$('#addToCartImage').attr('src',$('.a-dynamic-image').attr('src'));
							
																		$('#addToCart-checkOut').css('display', 'block');
																			
											}
							} else{

								console.log('not a product page')

								$('#page-mask').css('display', 'block')
								$('#addToCartModal').css('display','block');
								$('#addToCartProductDetail').css('display','none');
								$('#addToCartError').css('display','block');
								$('#addToCartError').text("Please select a product.")
								$('#addToCart-Ok').css('display','block');
								$('#addToCart-checkOut').css('display','none');

							}

						console.log(JSON.parse(localStorage.getItem('cartDetails')));


						})
						
					} else {

						$('#addToCartMM').css('opacity', '0.4');

						console.log('adding opaciy')

					}

					console.log('add to cart button ready')

				})
				

				console.log('consoling')

		}

})