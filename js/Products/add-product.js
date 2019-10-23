function showMessage(message) {
    $('#page-mask').css('display', 'block');
    $('#addToCartModal').css('display', 'block');
    $('#successIcon').css('display', 'none');
    $('#addToCartProductDetail').css('display', 'none');
    $('#addToCartError').css('display', 'block');
    $('#addToCartError').html(message);
    $('#addToCart-Ok').css('display', 'block');
    $('#addToCart-Ok').css('width', '270px');
    $('#resetCurrency').css('display', 'none');
    $('#addToCart-checkOut').css('display', 'none');
}
function showProductInfo(count, productName, imageUrl) {
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
const addProduct = (ProductCurrencySymbol, ProductPrice,  productName, imageUrl, color, size, count, available, store, width, isImageAvailable) => {
    if (available === true) {
        if (!isImageAvailable) {
            if (ProductCurrencySymbol === '$' ||
                ProductCurrencySymbol === '£' ||
                ProductCurrencySymbol === '€') {
                chrome.storage.local.get(['ProductCurrencySymbol'], function (result) {
                    var isAddedCurrency = false;
                    if (!result.ProductCurrencySymbol) {
                        chrome.storage.local.set({'ProductCurrencySymbol': ProductCurrencySymbol}, function () {
                        });
                        isAddedCurrency = true;
                    }
                    if (isAddedCurrency || result.ProductCurrencySymbol === ProductCurrencySymbol) {
                        console.log('location.href', location.href);
                        let productDetails = {
                            'productTitle': productName,
                            'productPrice': ProductPrice,
                            'productImage': imageUrl,
                            'productColor': color,
                            'productCurrency': ProductCurrencySymbol,
                            'productPage': location.href,
                            'productSize': size,
                            'productWidth': width || '',
                            'productStore': store,
                            'itemCount': parseInt(count)
                        };
                        chrome.storage.local.get(['cartDetails'], function (result) {
                            var message = null;
                            if (result && result.cartDetails && JSON.parse(result.cartDetails).length > 0) {
                                var productListPostAdd = JSON.parse(result.cartDetails);
                                var isAddedProduct = false;
                                for (i = 0; i < productListPostAdd.length; i++) {
                                    if ((productDetails.productColor === productListPostAdd[i].productColor)
                                        && (productDetails.productTitle === productListPostAdd[i].productTitle)
                                        && (productDetails.productWidth === productListPostAdd[i].productWidth)
                                        && (productDetails.productSize === productListPostAdd[i].productSize)) {
                                        isAddedProduct = true;
                                        var newItemCount = productListPostAdd[i].itemCount + parseInt(count);
                                        productListPostAdd[i].itemCount = newItemCount;
                                        newItemCount = parseInt(newItemCount);
                                        var oldPrice = productListPostAdd[i].productPrice;
                                        oldPrice = parseFloat(oldPrice);
                                        var newPrice = oldPrice + parseFloat(ProductPrice);
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
                                        var tempCount = 0;
                                        for (j = 0; j < productListPostAdd.length; j++) {
                                            tempCount = tempCount + productListPostAdd[j].itemCount
                                        }
                                        showProductInfo(tempCount, productName, imageUrl)
                                    }
                                }
                                if (isAddedProduct === false) {
                                    if (productDetails.productSize === 'select') {
                                        message = 'Please select a product size.';
                                        showMessage(message);
                                    } else if (productDetails.productColor === '') {
                                        message = 'Please select a product color.';
                                        showMessage(message);
                                    } else if (productDetails.productWidth === 'select') {
                                        message = 'Please select a product width.';
                                        showMessage(message);
                                    } else if (productDetails.productPrice === '') {
                                        message = 'Please select a product with price.';
                                       showMessage(message);
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

                                                var tempCount = 0;
                                                for (l = 0; l < cartDetails.length; l++) {
                                                    tempCount = tempCount + cartDetails[l].itemCount
                                                }
                                                showProductInfo(tempCount, productName, imageUrl)

                                                chrome.storage.local.set({productOne: JSON.stringify(productDetails)}, function () {
                                                });
                                                chrome.storage.local.get(['productOne'], function (result) {
                                                    addProductOne();
                                                });
                                            }
                                        });
                                    }
                                }
                            }
                            else {
                                if (productDetails.productSize === 'select') {
                                    message = 'Please select a product size.';
                                    showMessage(message);
                                } else if (productDetails.productWidth === 'select') {
                                    message = 'Please select a product width.';
                                    showMessage(message);
                                } else if (productDetails.productColor === '') {
                                    message = 'Please select a product color.';
                                    showMessage(message);
                                } else if (productDetails.productPrice === '') {
                                    message = 'Please select a product with price.';
                                    showMessage(message);
                                } else {
                                    var cartDetails = [];
                                    cartDetails.push(productDetails);
                                    chrome.storage.local.set({cartDetails: JSON.stringify(cartDetails)}, function () {});
                                    chrome.storage.local.get(['cartDetails'], function (result) {
                                    });
                                    chrome.runtime.sendMessage({
                                        greeting: 'setCartDetails',
                                        data: cartDetails
                                    }, function (response) {
                                    });
                                    showProductInfo(count, productName, imageUrl)
                                    chrome.storage.local.set({productOne: JSON.stringify(productDetails)}, function () {
                                    });
                                    chrome.storage.local.get(['productOne'], function (result) {
                                        addProductOne();
                                    });
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
                var message = 'This currency is not allowed </br></br> USD, EUR and GBP are available';
                showMessage(message);
            }
        } else {
            message = 'Network problem.</br> Please try again';
            showMessage(message);
        }
    } else {
        message = 'This product is not available';
        showMessage(message);
    }
};
