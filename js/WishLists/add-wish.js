const addWish = (ProductCurrencySymbol, ProductPrice, productName, imageUrl, color, size, count, available, store, width, isImageAvailable) => {
    if (available === true) {
        if (!isImageAvailable) {
            if (ProductCurrencySymbol === '$' ||
                ProductCurrencySymbol === '£' ||
                ProductCurrencySymbol === '€') {
                chrome.storage.local.get(['tempProductCurrencySymbol'], function (result) {
                    var isAddedProduct = false;
                    if (!result.tempProductCurrencySymbol) {
                        chrome.storage.local.set({'tempProductCurrencySymbol': ProductCurrencySymbol}, function () {
                        });
                        isAddedProduct = true;
                    }
                    if (isAddedProduct || result.tempProductCurrencySymbol === ProductCurrencySymbol) {
                        var productDetails = {
                            'productTitle': productName,
                            'productPrice': ProductPrice,
                            'productImage': imageUrl,
                            'productColor': color,
                            'productCurrency': ProductCurrencySymbol,
                            'productPage': location.href,
                            'productSize': size,
                            'productWidth': width || '',
                            'productStore': store,
                            'itemCount': 1
                        };
                        chrome.storage.local.get(['favCartDetails'], function (result) {
                            if (result && result.favCartDetails && JSON.parse(result.favCartDetails).length > 0) {
                                var productListPostAdd = JSON.parse(result.favCartDetails);
                                var sameProductSKU = false;
                                for (i = 0; i < productListPostAdd.length; i++) {
                                    if ((productDetails.productTitle === productListPostAdd[i].productTitle)
                                        && (productDetails.productColor === productListPostAdd[i].productColor)
                                        && (productDetails.productWidth === productListPostAdd[i].productWidth)
                                        && (productDetails.productSize === productListPostAdd[i].productSize)) {
                                        sameProductSKU = true;
                                        var newItemCount = productListPostAdd[i].itemCount + 1;
                                        productListPostAdd[i].itemCount = newItemCount;
                                        newItemCount = parseInt(newItemCount);
                                        var oldPrice = productListPostAdd[i].productPrice;
                                        oldPrice = parseFloat(oldPrice);
                                        ProductPrice = parseFloat(ProductPrice);
                                        var newPrice = oldPrice + ProductPrice;
                                        newPrice = newPrice.toFixed('2');
                                        productListPostAdd[i].productPrice = newPrice;
                                        chrome.storage.local.set({favCartDetails: JSON.stringify(productListPostAdd)}, function () {
                                        });
                                        chrome.runtime.sendMessage({
                                            greeting: 'setCartDetails',
                                            data: productListPostAdd
                                        }, function (response) {
                                        });
                                        $('#favouriteIcon').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Carts/favouriteAdd.png');
                                    }
                                }
                                if (sameProductSKU == false) {
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
                                        message = 'Please select a product price.';
                                        showMessage(message);
                                    } else {
                                        chrome.storage.local.get(['favCartDetails'], function (result) {
                                            if (result) {
                                                var favCartDetails = JSON.parse(result.favCartDetails);
                                                favCartDetails.push(productDetails);
                                                chrome.storage.local.set({favCartDetails: JSON.stringify(favCartDetails)}, function () {
                                                });
                                                chrome.runtime.sendMessage({
                                                    greeting: 'setCartDetails',
                                                    data: favCartDetails
                                                }, function (response) {
                                                });
                                                $('#favouriteIcon').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Carts/favouriteAdd.png');
                                            }
                                        });
                                    }
                                }
                            }
                            else {
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
                                    var favCartDetails = [];
                                    favCartDetails.push(productDetails);
                                    chrome.storage.local.set({favCartDetails: JSON.stringify(favCartDetails)}, function () {
                                    });
                                    chrome.storage.local.get(['favCartDetails'], function (result) {
                                    });
                                    chrome.runtime.sendMessage({
                                        greeting: 'setCartDetails',
                                        data: favCartDetails
                                    }, function (response) {
                                    });
                                    $('#favouriteIcon').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Carts/favouriteAdd.png');
                                }
                            }
                        })
                    }
                    else {
                        var message = 'The currency doesn\'t not match';
                        showMessage(message);
                    }
                });
            } else {
                var message = 'This currency is not allowed </br></br> USD, EUR and GBP are available';
                showMessage(message);
            }
        }
        else {
            message = 'Network problem.</br> Please try again';
            showMessage(message);
        }
    } else {
        message = 'This product is not available';
        showMessage(message);
    }
};
