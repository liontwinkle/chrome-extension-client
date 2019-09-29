const wishNova = () => {
    var tempProductPrice = $("[itemprop = offers] div span span").text();
    tempProductPrice = tempProductPrice.replace(',', '');
    console.log('tempProductPrice>>>>>>>>>', tempProductPrice);
    var regex = /[+-]?\d+(\.\d+)?/g;
    tempProductPrice = tempProductPrice.match(regex)[0];
    console.log('tempProductPrice.....regex......', tempProductPrice);
    let tempProductCurrencySymbol = $("[itemprop = offers] div span span").text().replace(',', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    console.log('tempProductCurrencySymbol-fashion>>>>>>', tempProductCurrencySymbol);
    var productName = $.trim($("[itemprop = name]").text());
    productName = productName.replace("'", '');
    var sizeTemp = $(".single-option-selector option:selected").text();
    var size = sizeTemp ? sizeTemp : '';
    console.log('size>>>>>>', size);
    var colorExist = $("a[aria-selected=false]").attr('title');
    var color = colorExist ? ($("a[aria-selected=true]").attr('title')) : null;
    var imageUrl = $.trim($("[alt^='" + productName + "']").attr('src'));
    imageUrl = imageUrl.slice(0, imageUrl.indexOf('?'));
    imageUrl = "https:" + imageUrl
    console.log('imageUrl', imageUrl);

    if (tempProductCurrencySymbol == '$' ||
        tempProductCurrencySymbol == '£' ||
        tempProductCurrencySymbol == '€') {
        chrome.storage.local.get(['tempProductCurrencySymbol'], function (result) {
            var isAdded = false;
            if (!result.tempProductCurrencySymbol) {
                chrome.storage.local.set({'tempProductCurrencySymbol': tempProductCurrencySymbol}, function () {
                });
                isAdded = true;
            }
            if (isAdded || result.tempProductCurrencySymbol === tempProductCurrencySymbol) {
                productDetails = {
                    'productTitle': productName,
                    'productPrice': tempProductPrice,
                    'productImage': imageUrl,
                    'productColor': color,
                    'productCurrency': tempProductCurrencySymbol,
                    'productPage': location.href,
                    'productSize': size,
                    'itemCount': 1,
                    'productSKU': location.href
                };
                chrome.storage.local.get(['favCartDetails'], function (result) {
                    if (result && result.favCartDetails && JSON.parse(result.favCartDetails).length > 0) {
                        var productListPostAdd = JSON.parse(result.favCartDetails);
                        var sameProductSKU = false;
                        for (i = 0; i < productListPostAdd.length; i++) {
                            if ((productDetails.productSKU === productListPostAdd[i].productSKU)
                                && (productDetails.productColor === productListPostAdd[i].productColor)
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
                                var subtotal = 0;
                                subtotal = parseInt(subtotal);
                                for (a = 0; a < productListPostAdd.length; a++) {
                                    subtotal = subtotal + parseFloat(productListPostAdd[a].productPrice)
                                }
                                $('#subtotal').text(subtotal);
                                chrome.storage.local.set({favCartDetails: JSON.stringify(productListPostAdd)}, function () {
                                });
                                chrome.runtime.sendMessage({
                                    greeting: "setCartDetails",
                                    data: productListPostAdd
                                }, function (response) {
                                });
                                $('#companyNotification').css('display', 'flex');
                                var tempCount = 0;
                                for (j = 0; j < productListPostAdd.length; j++) {
                                    tempCount = tempCount + productListPostAdd[j].itemCount
                                }
                                $("#favouriteIcon").attr('src', "chrome-extension://" + chrome.runtime.id + "/images/favouriteAdd.png");
                            }
                        }
                        if (sameProductSKU == false) {
                            if (productDetails.productSize === 'select') {
                                $('#page-mask').css('display', 'block');
                                $("#successIcon").css('display', 'none');
                                $('#addToCartModal').css('display', 'block');
                                $('#addToCartProductDetail').css('display', 'none');
                                $('#addToCartError').css('display', 'block');
                                $('#addToCartError').text("Please select a product size.");
                                $('#addToCart-Ok').css('display', 'block');
                                $('#addToCart-Ok').css('width', '270px');
                                $('#resetCurrency').css('display', 'none');
                                $('#addToCart-checkOut').css('display', 'none');
                            } else if (productDetails.productColor === '') {
                                $('#page-mask').css('display', 'block');
                                $("#successIcon").css('display', 'none');
                                $('#addToCartModal').css('display', 'block');
                                $('#addToCartProductDetail').css('display', 'none');
                                $('#addToCartError').css('display', 'block');
                                $('#addToCartError').text("Please select a product color.");
                                $('#addToCart-Ok').css('display', 'block');
                                $('#addToCart-Ok').css('width', '270px');
                                $('#resetCurrency').css('display', 'none');
                                $('#addToCart-checkOut').css('display', 'none');
                            } else if (productDetails.productPrice === '') {
                                $('#page-mask').css('display', 'block');
                                $("#successIcon").css('display', 'none');
                                $('#addToCartModal').css('display', 'block');
                                $('#addToCartProductDetail').css('display', 'none');
                                $('#addToCartError').css('display', 'block');
                                $('#addToCartError').text("Please select a product with price.");
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
                                            greeting: "setCartDetails",
                                            data: favCartDetails
                                        }, function (response) {
                                        });
                                        var subtotal = 0;
                                        subtotal = parseInt(subtotal);
                                        for (k = 0; k < favCartDetails.length; k++) {
                                            subtotal = subtotal + parseFloat(favCartDetails[k].productPrice);
                                        }
                                        subtotal = subtotal.toFixed(2);
                                        $('#subtotal').text(subtotal);
                                        $('#companyNotification').css('display', 'flex');
                                        var tempCount = 0;
                                        for (l = 0; l < favCartDetails.length; l++) {
                                            tempCount = tempCount + favCartDetails[l].itemCount
                                        }
                                        $("#favouriteIcon").attr('src', "chrome-extension://" + chrome.runtime.id + "/images/favouriteAdd.png");
                                    }
                                });
                            }
                        }
                    }
                    else {
                        if (productDetails.productSize === 'select') {
                            $('#page-mask').css('display', 'block');
                            $('#addToCartModal').css('display', 'block');
                            $("#successIcon").css('display', 'none');
                            $('#addToCartProductDetail').css('display', 'none');
                            $('#addToCartError').css('display', 'block');
                            $('#addToCartError').text("Please select a product size.");
                            $('#addToCart-Ok').css('display', 'block');
                            $('#addToCart-Ok').css('width', '270px');
                            $('#resetCurrency').css('display', 'none');
                            $('#addToCart-checkOut').css('display', 'none');
                        } else if (productDetails.productColor === '') {
                            $('#page-mask').css('display', 'block');
                            $('#addToCartModal').css('display', 'block');
                            $("#successIcon").css('display', 'none');
                            $('#addToCartProductDetail').css('display', 'none');
                            $('#addToCartError').css('display', 'block');
                            $('#addToCartError').text("Please select a product color.");
                            $('#addToCart-Ok').css('display', 'block');
                            $('#addToCart-Ok').css('width', '270px');
                            $('#resetCurrency').css('display', 'none');
                            $('#addToCart-checkOut').css('display', 'none');
                        } else if (productDetails.productPrice === '') {
                            $('#page-mask').css('display', 'block');
                            $("#successIcon").css('display', 'none');
                            $('#addToCartModal').css('display', 'block');
                            $('#addToCartProductDetail').css('display', 'none');
                            $('#addToCartError').css('display', 'block');
                            $('#addToCartError').text("Please select a product with price.");
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
                                greeting: "setCartDetails",
                                data: favCartDetails
                            }, function (response) {
                            });
                            $("#favouriteIcon").attr('src', "chrome-extension://" + chrome.runtime.id + "/images/favouriteAdd.png");
                        }
                    }
                })
            }
            else {
                $('#page-mask').css('display', 'block');
                $('#addToCartModal').css('display', 'block');
                $("#successIcon").css('display', 'none');
                $('#addToCartProductDetail').css('display', 'none');
                $('#addToCartError').css('display', 'block');
                $('#addToCartError').html("The currency doesn't not match.</br></br> Do you want to reset your cart and continue?");
                $("#resetCurrency").css('display', 'block');
                $("#resetCurrency").css('width', 'calc(50% - 5px)');
                $('#addToCart-Ok').css('display', 'block');
                $('#addToCart-Ok').css('width', 'calc(50% - 5px)');
                $('#addToCart-Ok').html("Cancel");
                $('#addToCart-checkOut').css('display', 'none');
            }
        });
    } else {
        $('#page-mask').css('display', 'block');
        $('#addToCartModal').css('display', 'block');
        $("#successIcon").css('display', 'none');
        $('#addToCartProductDetail').css('display', 'none');
        $('#addToCartError').css('display', 'block');
        $('#addToCartError').html("This currency is not allowed </br></br> USD, EUR and GBP are available");
        $('#addToCart-Ok').css('display', 'block');
        $('#addToCart-Ok').css('width', '270px');
        $('#resetCurrency').css('display', 'none');
        $('#addToCart-checkOut').css('display', 'none');
    }
}
