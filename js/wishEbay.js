const wishEbay = () => {
    var tempProductPrice = $.trim($('#prcIsum').html());
    tempProductPrice = tempProductPrice.replace(',', '');
    var regex = /[+-]?\d+(\.\d+)?/g;
    tempProductPrice = tempProductPrice.match(regex)[0];
    let tempProductCurrencySymbol = $.trim($('#prcIsum').html()).replace(',', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('US', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('/ea', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('GBP', '£');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    if (tempProductCurrencySymbol === 'EUR') {
        tempProductCurrencySymbol = '€';
    }

    console.log(tempProductCurrencySymbol);
    var productName = $.trim($('#itemTitle').text());
    productName = productName.replace("'", '');
    var colorExist = $.trim($('#msku-sel-1[name="Color"]').text()) ||
        $.trim($('#msku-sel-1[name="Colors"]').text()) ||
        $.trim($('#msku-sel-1[name="Colour"]').text());
    var sizeExist = $.trim($('#msku-sel-1[name="Size"]').text()) ||
        $.trim($('#msku-sel-1[name="Modle"]').text()) ||
        $.trim($('#msku-sel-1[name="Shoe Size"]').text());
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
                    'productImage': $.trim($("#icImg").attr('src')),
                    'productColor': colorExist ? (
                        $.trim($('#msku-sel-1[name="Color"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="Colors"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="Colour"] option:selected').text())) : null,
                    'productPage': location.href,
                    'productCurrency': tempProductCurrencySymbol,
                    'productSize': sizeExist ? (
                        $.trim($('#msku-sel-1[name="Size"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="Modle"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="Shoe Size"] option:selected').text())) : null,
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
                                chrome.storage.local.set({favCrtDetails: JSON.stringify(productListPostAdd)}, function () {
                                });
                                chrome.runtime.sendMessage({
                                    greeting: "setCartDetails",
                                    data: productListPostAdd
                                }, function (response) {
                                });
                                $("#favouriteIcon").attr('src', "chrome-extension://" + chrome.runtime.id + "/images/favouriteAdd.png");
                            }
                        }
                        if (sameProductSKU == false) {
                            if (productDetails.productSize === '' || productDetails.productSize === '- Select -' || productDetails.productSize === '- Selecteer -') {
                                $('#page-mask').css('display', 'block');
                                $('#addToCartModal').css('display', 'block');
                                $('#addToCartProductDetail').css('display', 'none');
                                $('#addToCartError').css('display', 'block');
                                $('#addToCartError').text("Please select a product size.");
                                $('#addToCart-Ok').css('display', 'block');
                                $('#addToCart-Ok').css('width', '270px');
                                $('#resetCurrency').css('display', 'none');
                                $('#addToCart-checkOut').css('display', 'none');
                                $("#successIcon").css('display', 'none');
                            } else if (productDetails.productColor === '' || productDetails.productColor === '- Select -' || productDetails.productColor === '- Selecteer -') {
                                $('#page-mask').css('display', 'block');
                                $('#addToCartModal').css('display', 'block');
                                $('#addToCartProductDetail').css('display', 'none');
                                $('#addToCartError').css('display', 'block');
                                $('#addToCartError').text("Please select a product color.");
                                $('#addToCart-Ok').css('display', 'block');
                                $('#addToCart-Ok').css('width', '270px');
                                $('#resetCurrency').css('display', 'none');
                                $("#successIcon").css('display', 'none');
                                $('#addToCart-checkOut').css('display', 'none');
                            } else if (productDetails.productPrice === '') {
                                $('#page-mask').css('display', 'block');
                                $('#addToCartModal').css('display', 'block');
                                $('#addToCartProductDetail').css('display', 'none');
                                $('#addToCartError').css('display', 'block');
                                $('#addToCartError').text("Please select a product with price.");
                                $('#addToCart-Ok').css('display', 'block');
                                $('#addToCart-Ok').css('width', '270px');
                                $('#resetCurrency').css('display', 'none');
                                $("#successIcon").css('display', 'none');
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
                                        $('#companyNotification').text(tempCount);
                                        $('#page-mask').css('display', 'block');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'block');
                                        $('#addToCartTitle').text($.trim($('#itemTitle').text()));
                                        $('#addToCartImage').attr('src', $.trim($("#icImg").attr('src')));
                                        $('#addToCart-Ok').css('display', 'none');
                                        $("#successIcon").css('display', 'inline');
                                        $('#addToCart-checkOut').css('display', 'block');
                                        $('#addToCartError').css('display', 'none');
                                        $('#resetCurrency').css('display', 'none');
                                    }
                                });
                            }
                        }
                    }
                    else {
                        if (productDetails.productSize === "- Select -" || productDetails.productSize === "- Selecteer -") {
                            $('#page-mask').css('display', 'block');
                            $('#addToCartModal').css('display', 'block');
                            $('#addToCartProductDetail').css('display', 'none');
                            $('#addToCartError').css('display', 'block');
                            $('#addToCartError').text("Please select a product size.");
                            $('#addToCart-Ok').css('display', 'block');
                            $('#addToCart-Ok').css('width', '270px');
                            $('#resetCurrency').css('display', 'none');
                            $("#successIcon").css('display', 'none');
                            $('#addToCart-checkOut').css('display', 'none');
                        } else if (productDetails.productColor === "- Select -" || productDetails.productColor === "- Selecteer -") {
                            $('#page-mask').css('display', 'block');
                            $('#addToCartModal').css('display', 'block');
                            $('#addToCartProductDetail').css('display', 'none');
                            $('#addToCartError').css('display', 'block');
                            $("#successIcon").css('display', 'none');
                            $('#addToCartError').text("Please select a product color.");
                            $('#addToCart-Ok').css('display', 'block');
                            $('#addToCart-Ok').css('width', '270px');
                            $('#resetCurrency').css('display', 'none');
                            $('#addToCart-checkOut').css('display', 'none');
                        } else if (productDetails.productPrice === '') {
                            $('#page-mask').css('display', 'block');
                            $('#addToCartModal').css('display', 'block');
                            $('#addToCartProductDetail').css('display', 'none');
                            $('#addToCartError').css('display', 'block');
                            $("#successIcon").css('display', 'none');
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
                            $('#page-mask').css('display', 'block');
                            $('#addToCartModal').css('display', 'block');
                            $('#addToCartProductDetail').css('display', 'block');
                            $("#successIcon").css('display', 'inline');
                            $('#addToCartTitle').text($.trim($('#pdp_product_title').text()));
                            $('#addToCartImage').attr('src', $.trim($("#icImg").attr('src')));
                            $('#addToCart-checkOut').css('display', 'block');
                            $('#addToCart-Ok').css('display', 'none');
                            $('#resetCurrency').css('display', 'none');
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
                $('#addToCartError').html("The currency doesn't not match");
                $('#addToCart-Ok').css('display', 'block');
                $('#addToCart-Ok').css('width', '270px');
                $('#resetCurrency').css('display', 'none');
                $('#addToCart-Ok').html("Ok");
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
