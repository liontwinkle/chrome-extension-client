const productAmazon = () => {
    var isLargeValue = $('.price-large').text();
    var productCount;
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
        console.log($('#buyNew_noncbb span').html());
        var tempProduct = $('#priceblock_ourprice').text() ||
            $('#priceblock_dealprice').text() ||
            $('#priceblock_saleprice').text() ||
            $('#buyNew_noncbb span').text();
        var splitIndex = tempProduct.indexOf("-");
        if (splitIndex > 0) {
            tempProduct = tempProduct.slice(0, splitIndex - 1);
        }
        console.log('>>>>>>>>>>>', tempProduct);
        tempProductPrice = tempProduct.replace(',', '');
        var regex = /[+-]?\d+(\.\d+)?/g;
        tempProductPrice = tempProductPrice.match(regex) && tempProductPrice.match(regex)[0] || '';
        tempProductCurrencySymbol = tempProduct.replace(',', '');
        tempProductCurrencySymbol = tempProductCurrencySymbol.replace(tempProductPrice, '');
        tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
        if (tempProductCurrencySymbol === '€') {
            tempProductPrice = tempProductPrice.replace('.', '');
            tempProductPrice = tempProductPrice / 100;
        }
        productCount = $('#quantity option:selected').text() || 1;
        console.log('>>>>>>>>>>>count', productCount);
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
                var productDetails = {
                    'productTitle': $.trim($('#productTitle').text()).replace("'", ''),
                    'productPrice': tempProductPrice,
                    'productCurrency': tempProductCurrencySymbol,
                    'productImage': $('.a-dynamic-image').attr('src'),
                    'productColor': $.trim($('#variation_color_name').find('.selection').text()),
                    'productPage': location.href,
                    'productSize': $.trim($('#dropdown_selected_size_name').find('.a-dropdown-prompt').text()),
                    'itemCount': parseInt(productCount),
                    'productSKU': location.pathname.slice(1).replace('/', '-')
                };
                chrome.storage.local.get(['cartDetails'], function (result) {
                    if (result && result.cartDetails && JSON.parse(result.cartDetails).length > 0) {
                        var productListPostAdd = JSON.parse(result.cartDetails);
                        var sameProductSKU = false;
                        for (i = 0; i < productListPostAdd.length; i++) {
                            if ((productDetails.productSKU === productListPostAdd[i].productSKU)
                                && (productDetails.productColor === productListPostAdd[i].productColor)
                                && (productDetails.productSize === productListPostAdd[i].productSize)) {
                                sameProductSKU = true;
                                var newItemCount = productListPostAdd[i].itemCount + parseInt(productCount);
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
                                chrome.storage.local.set({cartDetails: JSON.stringify(productListPostAdd)}, function () {
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
                                $('#companyNotification').text(tempCount);
                                $('#page-mask').css('display', 'block');
                                $('#addToCartModal').css('display', 'block');
                                $("#successIcon").css('display', 'initial');
                                $('#addToCartProductDetail').css('display', 'block');
                                $('#addToCartTitle').text($.trim($('#productTitle').text()));
                                $('#addToCartImage').attr('src', $('.a-dynamic-image').attr('src'));
                                $('#addToCart-checkOut').css('display', 'block');
                                $('#resetCurrency').css('display', 'none');
                                $('#addToCartError').css('display', 'none');
                                $('#addToCart-Ok').css('display', 'none');
                            }
                        }
                        if (sameProductSKU == false) {
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
                                chrome.storage.local.get(['cartDetails'], function (result) {
                                    if (result) {
                                        var cartDetails = JSON.parse(result.cartDetails);
                                        cartDetails.push(productDetails);
                                        chrome.storage.local.set({cartDetails: JSON.stringify(cartDetails)}, function () {
                                        });
                                        chrome.runtime.sendMessage({
                                            greeting: "setCartDetails",
                                            data: cartDetails
                                        }, function (response) {
                                        });
                                        var subtotal = 0;
                                        subtotal = parseInt(subtotal);
                                        for (k = 0; k < cartDetails.length; k++) {
                                            subtotal = subtotal + parseFloat(cartDetails[k].productPrice)
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
                                        $("#successIcon").css('display', 'inline');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'block');
                                        $('#addToCartTitle').text($.trim($('#productTitle').text()));
                                        $('#addToCartImage').attr('src', $('.a-dynamic-image').attr('src'));
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
                            var cartDetails = [];
                            cartDetails.push(productDetails);
                            chrome.storage.local.set({cartDetails: JSON.stringify(cartDetails)}, function () {
                            });
                            chrome.storage.local.get(['cartDetails'], function (result) {
                            });
                            chrome.runtime.sendMessage({
                                greeting: "setCartDetails",
                                data: cartDetails
                            }, function (response) {
                            });
                            var tempCount = 0;
                            for (l = 0; l < cartDetails.length; l++) {
                                tempCount = tempCount + cartDetails[l].itemCount
                            }
                            $('#companyNotification').css('display', 'flex');
                            $('#companyNotification').text(tempCount);
                            $('#page-mask').css('display', 'block');
                            $("#successIcon").css('display', 'inline');
                            $('#addToCartModal').css('display', 'block');
                            $('#addToCartProductDetail').css('display', 'block');
                            $('#addToCartTitle').text($.trim($('#productTitle').text()));
                            $('#addToCartImage').attr('src', $('.a-dynamic-image').attr('src'));
                            $('#addToCart-checkOut').css('display', 'block');
                            $('#resetCurrency').css('display', 'none');
                            $('#addToCart-Ok').css('display', 'none');
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
