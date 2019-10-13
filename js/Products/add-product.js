const addProduct = (tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size, count, available, width ) => {
    if (available === true) {
        if (tempProductCurrencySymbol === '$' ||
            tempProductCurrencySymbol === '£' ||
            tempProductCurrencySymbol === '€') {
            chrome.storage.local.get(['tempProductCurrencySymbol'], function (result) {
                var isAdded = false;
                if (!result.tempProductCurrencySymbol) {
                    chrome.storage.local.set({'tempProductCurrencySymbol': tempProductCurrencySymbol}, function () {
                    });
                    isAdded = true;
                }
                if (isAdded || result.tempProductCurrencySymbol === tempProductCurrencySymbol) {
                    let productDetails = {
                        'productTitle': productName,
                        'productPrice': tempProductPrice,
                        'productImage': imageUrl,
                        'productColor': color,
                        'productCurrency': tempProductCurrencySymbol,
                        'productPage': location.href,
                        'productSize': size,
                        'productWidth': width || '',
                        'itemCount': parseInt(count),
                        'productSKU': location.pathname.slice(1).replace('/', '-')
                    };
                    chrome.storage.local.get(['cartDetails'], function (result) {
                        if (result && result.cartDetails && JSON.parse(result.cartDetails).length > 0) {
                            var productListPostAdd = JSON.parse(result.cartDetails);
                            var sameProductSKU = false;
                            for (i = 0; i < productListPostAdd.length; i++) {
                                if ((productDetails.productSKU === productListPostAdd[i].productSKU)
                                    && (productDetails.productColor === productListPostAdd[i].productColor)
                                    && (productDetails.productWidth === productListPostAdd[i].productWidth)
                                    && (productDetails.productSize === productListPostAdd[i].productSize)) {
                                    sameProductSKU = true;
                                    var newItemCount = productListPostAdd[i].itemCount + parseInt(count);
                                    productListPostAdd[i].itemCount = newItemCount;
                                    newItemCount = parseInt(newItemCount);
                                    var oldPrice = productListPostAdd[i].productPrice;
                                    oldPrice = parseFloat(oldPrice);
                                    tempProductPrice = parseFloat(tempProductPrice);
                                    var newPrice = oldPrice + tempProductPrice;
                                    newPrice = newPrice.toFixed('2');
                                    productListPostAdd[i].productPrice = newPrice;
                                    var subtotal = 0;
                                    subtotal = parseInt(subtotal);
                                    for (var a = 0; a < productListPostAdd.length; a++) {
                                        subtotal = subtotal + parseFloat(productListPostAdd[a].productPrice)
                                    }
                                    $('#subtotal').text(subtotal);
                                    chrome.storage.local.set({cartDetails: JSON.stringify(productListPostAdd)}, function () {
                                    });
                                    chrome.runtime.sendMessage({
                                        greeting: 'setCartDetails',
                                        data: productListPostAdd
                                    }, function (response) {
                                    });
                                    $('#companyNotification').css('display', 'flex');
                                    var tempCount = 0;
                                    for (j = 0; j < productListPostAdd.length; j++) {
                                        tempCount = tempCount + productListPostAdd[j].itemCount
                                    }
                                    $('#companyNotification').text(tempCount);
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'block');
                                    $('#addToCartTitle').text(productName);
                                    $('#addToCartImage').attr('src', imageUrl);
                                    $('#addToCart-checkOut').css('display', 'block');
                                    $('#successIcon').css('display', 'inline');
                                    $('#addToCart-Ok').css('display', 'none');
                                    $('#resetCurrency').css('display', 'none');
                                    $('#addToCartError').css('display', 'none');

                                }
                            }
                            if (sameProductSKU === false) {
                                if (productDetails.productSize === 'select') {
                                    $('#page-mask').css('display', 'block');
                                    $('#successIcon').css('display', 'none');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $('#addToCartError').text('Please select a product size.');
                                    $('#addToCart-Ok').css('display', 'block');
                                    $('#addToCart-Ok').css('width', '270px');
                                    $('#resetCurrency').css('display', 'none');
                                    $('#addToCart-checkOut').css('display', 'none');
                                } else if (productDetails.productColor === '') {
                                    $('#page-mask').css('display', 'block');
                                    $('#successIcon').css('display', 'none');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $('#addToCartError').text('Please select a product color.');
                                    $('#addToCart-Ok').css('display', 'block');
                                    $('#addToCart-Ok').css('width', '270px');
                                    $('#resetCurrency').css('display', 'none');
                                    $('#addToCart-checkOut').css('display', 'none');
                                } else if (productDetails.productWidth === 'select') {
                                    $('#page-mask').css('display', 'block');
                                    $('#successIcon').css('display', 'none');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $('#addToCartError').text('Please select a product width.');
                                    $('#addToCart-Ok').css('display', 'block');
                                    $('#addToCart-Ok').css('width', '270px');
                                    $('#resetCurrency').css('display', 'none');
                                    $('#addToCart-checkOut').css('display', 'none');
                                } else if (productDetails.productPrice === '') {
                                    $('#page-mask').css('display', 'block');
                                    $('#successIcon').css('display', 'none');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $('#addToCartError').text('Please select a product with price.');
                                    $('#addToCart-Ok').css('display', 'block');
                                    $('#addToCart-Ok').css('width', '270px');
                                    $('#resetCurrency').css('display', 'none');
                                    $('#addToCart-checkOut').css('display', 'none');
                                } else {
                                    chrome.storage.local.get(['cartDetails'], function (result) {
                                        if (result) {
                                            var cartDetails = JSON.parse(result.cartDetails);
                                            cartDetails.push(productDetails);
                                            chrome.storage.local.set({cartDetails: JSON.stringify(cartDetails)}, function () {
                                            });
                                            chrome.runtime.sendMessage({
                                                greeting: 'setCartDetails',
                                                data: cartDetails
                                            }, function (response) {
                                            });
                                            var subtotal = 0;
                                            subtotal = parseInt(subtotal);
                                            for (k = 0; k < cartDetails.length; k++) {
                                                subtotal = subtotal + parseFloat(cartDetails[k].productPrice);
                                            }
                                            subtotal = subtotal.toFixed(2);
                                            $('#subtotal').text(subtotal);
                                            $('#companyNotification').css('display', 'flex');
                                            var tempCount = 0;
                                            for (l = 0; l < cartDetails.length; l++) {
                                                tempCount = tempCount + cartDetails[l].itemCount
                                            }
                                            $('#companyNotification').text(tempCount);
                                            $('#page-mask').css('display', 'block');
                                            $('#successIcon').css('display', 'inline');
                                            $('#addToCartModal').css('display', 'block');
                                            $('#addToCartProductDetail').css('display', 'block');
                                            $('#addToCartTitle').text(productName);
                                            $('#addToCartImage').attr('src', imageUrl);
                                            $('#addToCart-Ok').css('display', 'none');
                                            $('#addToCart-checkOut').css('display', 'block');
                                            $('#resetCurrency').css('display', 'none');
                                            $('#addToCartError').css('display', 'none');

                                        }
                                    });
                                }
                            }
                        }
                        else {
                            if (productDetails.productSize === 'select') {
                                $('#page-mask').css('display', 'block');
                                $('#addToCartModal').css('display', 'block');
                                $('#successIcon').css('display', 'none');
                                $('#addToCartProductDetail').css('display', 'none');
                                $('#addToCartError').css('display', 'block');
                                $('#addToCartError').text('Please select a product size.');
                                $('#addToCart-Ok').css('display', 'block');
                                $('#addToCart-Ok').css('width', '270px');
                                $('#resetCurrency').css('display', 'none');
                                $('#addToCart-checkOut').css('display', 'none');
                            } else if (productDetails.productWidth === 'select') {
                                $('#page-mask').css('display', 'block');
                                $('#addToCartModal').css('display', 'block');
                                $('#successIcon').css('display', 'none');
                                $('#addToCartProductDetail').css('display', 'none');
                                $('#addToCartError').css('display', 'block');
                                $('#addToCartError').text('Please select a product width.');
                                $('#addToCart-Ok').css('display', 'block');
                                $('#addToCart-Ok').css('width', '270px');
                                $('#resetCurrency').css('display', 'none');
                                $('#addToCart-checkOut').css('display', 'none');
                            } else if (productDetails.productColor === '') {
                                $('#page-mask').css('display', 'block');
                                $('#addToCartModal').css('display', 'block');
                                $('#successIcon').css('display', 'none');
                                $('#addToCartProductDetail').css('display', 'none');
                                $('#addToCartError').css('display', 'block');
                                $('#addToCartError').text('Please select a product color.');
                                $('#addToCart-Ok').css('display', 'block');
                                $('#addToCart-Ok').css('width', '270px');
                                $('#resetCurrency').css('display', 'none');
                                $('#addToCart-checkOut').css('display', 'none');
                            } else if (productDetails.productPrice === '') {
                                $('#page-mask').css('display', 'block');
                                $('#successIcon').css('display', 'none');
                                $('#addToCartModal').css('display', 'block');
                                $('#addToCartProductDetail').css('display', 'none');
                                $('#addToCartError').css('display', 'block');
                                $('#addToCartError').text('Please select a product with price.');
                                $('#addToCart-Ok').css('display', 'block');
                                $('#addToCart-Ok').css('width', '270px');
                                $('#resetCurrency').css('display', 'none');
                                $('#addToCart-checkOut').css('display', 'none');
                            } else {
                                var cartDetails = [];
                                cartDetails.push(productDetails);
                                chrome.storage.local.set({cartDetails: JSON.stringify(cartDetails)}, function () {
                                });
                                chrome.storage.local.get(['cartDetails'], function (result) {
                                });
                                chrome.runtime.sendMessage({
                                    greeting: 'setCartDetails',
                                    data: cartDetails
                                }, function (response) {
                                });
                                $('#companyNotification').css('display', 'flex');
                                $('#companyNotification').text(count);
                                $('#page-mask').css('display', 'block');
                                $('#successIcon').css('display', 'inline');
                                $('#addToCartModal').css('display', 'block');
                                $('#addToCartProductDetail').css('display', 'block');
                                $('#addToCartTitle').text(productName);
                                $('#addToCartImage').attr('src', imageUrl);
                                $('#addToCart-checkOut').css('display', 'block');
                                $('#addToCart-Ok').css('display', 'none');
                                $('#resetCurrency').css('display', 'none');
                                $('#addToCartError').css('display', 'none');
                            }
                        }
                    })
                }
                else {
                    $('#page-mask').css('display', 'block');
                    $('#addToCartModal').css('display', 'block');
                    $('#successIcon').css('display', 'none');
                    $('#addToCartProductDetail').css('display', 'none');
                    $('#addToCartError').css('display', 'block');
                    $('#addToCartError').html("The currency doesn't not match.</br></br> Do you want to reset your cart and continue?");
                    $('#resetCurrency').css('display', 'block');
                    $('#resetCurrency').css('width', 'calc(50% - 5px)');
                    $('#addToCart-Ok').css('display', 'block');
                    $('#addToCart-Ok').css('width', 'calc(50% - 5px)');
                    $('#addToCart-Ok').html('OK');
                    $('#addToCart-checkOut').css('display', 'none');
                }
            });
        } else {
            $('#page-mask').css('display', 'block');
            $('#addToCartModal').css('display', 'block');
            $('#successIcon').css('display', 'none');
            $('#addToCartProductDetail').css('display', 'none');
            $('#addToCartError').css('display', 'block');
            $('#addToCartError').html('This currency is not allowed </br></br> USD, EUR and GBP are available');
            $('#addToCart-Ok').css('display', 'block');
            $('#addToCart-Ok').css('width', '270px');
            $('#resetCurrency').css('display', 'none');
            $('#addToCart-checkOut').css('display', 'none');
        }
    } else {
        $('#page-mask').css('display', 'block');
        $('#addToCartModal').css('display', 'block');
        $('#successIcon').css('display', 'none');
        $('#addToCartProductDetail').css('display', 'none');
        $('#addToCartError').css('display', 'block');
        $('#addToCartError').html('This product is not available');
        $('#addToCart-Ok').css('display', 'block');
        $('#addToCart-Ok').css('width', '270px');
        $('#resetCurrency').css('display', 'none');
        $('#addToCart-checkOut').css('display', 'none');
    }
}
