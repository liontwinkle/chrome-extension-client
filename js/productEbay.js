const productEbay = () => {
    var tempProductPrice1 = $("[itemprop = price]") && $("[itemprop = price]").length > 0 && $("[itemprop = price]")[0].innerHTML ||
        $.trim($('#prcIsum').html()) ||
        $.trim($('#mm-saleDscPrc').html()) ||
        $.trim($('.display-price').html()) ||
        $.trim($('#prcIsum_bidPrice').html());
    let tempProductPrice = tempProductPrice1.replace(',', '');
    var regex = /[+-]?\d+(\.\d+)?/g;
    tempProductPrice = tempProductPrice.match(regex)[0];
    let tempProductCurrencySymbol = tempProductPrice1.replace(',', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('US', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('/ea', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('GBP', '£');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    if (tempProductCurrencySymbol === 'EUR') {
        tempProductCurrencySymbol = '€';
    }
    // var productImage = $.trim($("#icImg").attr('src')) || $.trim($("li[data-index=0] .app-filmstrip__image").attr('src'))
    var productImage = $.trim($("#icImg").attr('src')) || $.trim($(".vi-image-gallery__enlarge-link img").attr('src'))
    console.log('image', productImage)
    console.log(tempProductCurrencySymbol);
    var productName = $.trim($('#itemTitle').text()) || $.trim($('.product-card-wrapper .product-title').text());
    productName = productName.replace("'", '');
    var colorExist = $.trim($('#msku-sel-1[name="Color"]').text()) ||
        $.trim($('#msku-sel-2[name="Color"]').text()) ||
        $.trim($('#msku-sel-1[name="color"]').text()) ||
        $.trim($('#msku-sel-2[name="color"]').text()) ||
        $.trim($('#msku-sel-1[name="Main Colour"]').text()) ||
        $.trim($('#msku-sel-2[name="Main Colour"]').text()) ||
        $.trim($('#msku-sel-1[name="Colors"]').text()) ||
        $.trim($('#msku-sel-2[name="Colors"]').text()) ||
        $.trim($('#msku-sel-1[name="Colour"]').text()) ||
        $.trim($('#msku-sel-2[name="Colour"]').text());
    var sizeExist = $.trim($('#msku-sel-1[name="Size"]').text()) ||
        $.trim($('#msku-sel-2[name="Size"]').text()) ||
        $.trim($('#msku-sel-1[name="Modle"]').text()) ||
        $.trim($('#msku-sel-1[name="size"]').text()) ||
        $.trim($('#msku-sel-2[name="size"]').text()) ||
        $.trim($('#msku-sel-1[name="Sizes"]').text()) ||
        $.trim($('#msku-sel-2[name="Sizes"]').text()) ||
        $.trim($('#msku-sel-1[name="Size (Women\'s)"]').text()) ||
        $.trim($('#msku-sel-2[name="Size (Women\'s)"]').text()) ||
        $.trim($('#msku-sel-1[name="Size (Men\'s)"]').text()) ||
        $.trim($('#msku-sel-2[name="Size (Men\'s)"]').text()) ||
        $.trim($('#msku-sel-1[name="Style"]').text()) ||
        $.trim($('#msku-sel-2[name="Style"]').text()) ||
        $.trim($('#msku-sel-1[name="Shoe Size"]').text()) ||
        $.trim($('#msku-sel-1[name="Light Source"]').text()) ||
        $.trim($('#msku-sel-2[name="Shoe Size"]').text()) ||
        $.trim($('#msku-sel-1[name="US Shoe Size (Men\'s)"]').text()) ||
        $.trim($('#msku-sel-2[name="US Shoe Size (Men\'s)"]').text()) ||
        $.trim($('#msku-sel-1[name="US Shoe Size (Women\'s)"]').text()) ||
        $.trim($('#msku-sel-2[name="US Shoe Size (Women\'s)"]').text());
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
                    'productTitle': productName,
                    'productPrice': tempProductPrice,
                    'productImage': productImage,
                    'productColor': colorExist ? (
                        $.trim($('#msku-sel-1[name="Color"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="Color"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="color"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="color"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="Main Colour"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="Main Colour"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="Colors"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="Colors"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="Colour"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="Colour"] option:selected').text())) : null,
                    'productPage': location.href,
                    'productCurrency': tempProductCurrencySymbol,
                    'productSize': sizeExist ? (
                        $.trim($('#msku-sel-1[name="Size"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="Size"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="size"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="size"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="Sizes"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="Sizes"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="Size (Women\'s)"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="Size (Women\'s)"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="Size (Men\'s)"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="Size (Men\'s)"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="Modle"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="Modle"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="Style"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="Style"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="US Shoe Size (Men\'s)"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="US Shoe Size (Men\'s)"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="US Shoe Size (Women\'s)"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="US Shoe Size (Women\'s)"] option:selected').text()) ||
                        $.trim($('#msku-sel-1[name="Shoe Size"] option:selected').text()) ||
                        $.trim($('#msku-sel-2[name="Shoe Size"] option:selected').text())) : null,
                    'itemCount': 1,
                    'productSKU': location.href
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
                                $('#addToCartProductDetail').css('display', 'block');
                                $('#addToCartTitle').text(productName);
                                $('#addToCartImage').attr('src', productImage);
                                $('#addToCart-checkOut').css('display', 'block');
                                $('#resetCurrency').css('display', 'none');
                                $('#addToCartError').css('display', 'none');
                                $('#addToCart-Ok').css('display', 'none');
                                $("#successIcon").css('display', 'inline');
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
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'block');
                                        $('#addToCartTitle').text(productName);
                                        $('#addToCartImage').attr('src', productImage);
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
                            $('#companyNotification').css('display', 'flex');
                            $('#companyNotification').text(cartDetails.length);
                            $('#page-mask').css('display', 'block');
                            $('#addToCartModal').css('display', 'block');
                            $('#addToCartProductDetail').css('display', 'block');
                            $("#successIcon").css('display', 'inline');
                            $('#addToCartTitle').text($.trim($('#pdp_product_title').text()));
                            $('#addToCartImage').attr('src', productImage);
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
