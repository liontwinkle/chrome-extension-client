const addWish = (tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size, width) => {

    if (tempProductCurrencySymbol === '$' ||
        tempProductCurrencySymbol === '£' ||
        tempProductCurrencySymbol === '€') {
        chrome.storage.local.get(['tempProductCurrencySymbol'], function (result) {
            var isAddedProduct = false;
            if (!result.tempProductCurrencySymbol) {
                chrome.storage.local.set({'tempProductCurrencySymbol': tempProductCurrencySymbol}, function () {
                });
                isAddedProduct = true;
            }
            if (isAddedProduct || result.tempProductCurrencySymbol === tempProductCurrencySymbol) {
                var productDetails = {
                    'productTitle': productName,
                    'productPrice': tempProductPrice,
                    'productImage': imageUrl,
                    'productColor': color,
                    'productCurrency': tempProductCurrencySymbol,
                    'productPage': location.href,
                    'productSize': size,
                    'productWidth': width || '',
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
                                tempProductPrice = parseFloat(tempProductPrice);
                                var newPrice = oldPrice + tempProductPrice;
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
                                $('#addToCartError').text('Please select a product Width.');
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
                        } else if (productDetails.productWidth === 'select') {
                            $('#page-mask').css('display', 'block');
                            $('#addToCartModal').css('display', 'block');
                            $('#successIcon').css('display', 'none');
                            $('#addToCartProductDetail').css('display', 'none');
                            $('#addToCartError').css('display', 'block');
                            $('#addToCartError').text('Please select a product Width.');
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
                $('#page-mask').css('display', 'block');
                $('#addToCartModal').css('display', 'block');
                $('#successIcon').css('display', 'none');
                $('#addToCartProductDetail').css('display', 'none');
                $('#addToCartError').css('display', 'block');
                $('#addToCartError').html("The currency doesn't not match");
                $('#addToCart-Ok').css('display', 'block');
                $('#addToCart-Ok').css('width', '270px');
                $('#addToCart-Ok').html('Ok');
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
};
