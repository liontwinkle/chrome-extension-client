const wishAmazon = () => {
    var isLargeValue = $('.price-large').text();
    var tempProductPrice = "";
    var tempProductCurrencySymbol = "";
    if (isLargeValue) {
        var optionValue = $('input[name=BuyboxType]:checked').val();
        var selClass = "#new-button-price";
        if (optionValue === 'new') {
            selClass = "#new-button-price";
        } else {
            selClass = "#used-button-price";
        }
        tempProductPrice = $(selClass + " .majorValue").text() + "." + $(selClass + " .minorValue").text()
    } else {
        var tempProduct = $('#priceblock_ourprice').text() ||
            $('#priceblock_dealprice').text() ||
            $('#priceblock_saleprice').text() ||
            $('#buyNew_noncbb span').text();
        ;
        tempProductPrice = tempProduct.replace(',', '');
        var regex = /[+-]?\d+(\.\d+)?/g;
        tempProductPrice = tempProductPrice.match(regex)[0];
        tempProductCurrencySymbol = tempProduct.replace(',', '');
        tempProductCurrencySymbol = tempProductCurrencySymbol.replace(tempProductPrice, '');
        tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
        if (tempProductCurrencySymbol === '€') {
            tempProductPrice = tempProductPrice.replace('.', '');
            tempProductPrice = tempProductPrice / 100;
        }
    }
    console.log('tempProductCurrencySymbol', tempProductCurrencySymbol);
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
                productDetails = {
                    'productTitle': $.trim($('#productTitle').text()).replace("'", ''),
                    'productPrice': tempProductPrice,
                    'productCurrency': tempProductCurrencySymbol,
                    'productImage': $('.a-dynamic-image').attr('src'),
                    'productColor': $.trim($('#variation_color_name').find('.selection').text()),
                    'productPage': location.href,
                    'productSize': $.trim($('#dropdown_selected_size_name').find('.a-dropdown-prompt').text()),
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
                                var oldPrice = productListPostAdd[i].productPrice;
                                oldPrice = parseFloat(oldPrice);
                                tempProductPrice = parseFloat(tempProductPrice);
                                var newPrice = oldPrice + tempProductPrice;
                                newPrice = newPrice.toFixed('2');
                                productListPostAdd[i].productPrice = newPrice;
                                chrome.storage.local.set({favCartDetails: JSON.stringify(productListPostAdd)}, function () {
                                });
                                $("#favouriteIcon").attr('src', "chrome-extension://" + chrome.runtime.id + "/images/favouriteAdd.png");
                            }
                        }
                        if (sameProductSKU === false) {
                            if (productDetails.productSize === "Select") {
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
                            } else if (productDetails.productColor === "Select") {
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
                            } else if (productDetails.productPrice == '') {
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
                                        $("#favouriteIcon").attr('src', "chrome-extension://" + chrome.runtime.id + "/images/favouriteAdd.png");
                                    }
                                });
                            }
                        }
                    }
                    else {
                        if (productDetails.productSize === "Select") {
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
                        } else if (productDetails.productColor === "Select") {
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
                        } else if (productDetails.productPrice == '') {
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
                $('#addToCartError').html("The currency doesn't not match.");
                $('#addToCart-Ok').css('display', 'block');
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
