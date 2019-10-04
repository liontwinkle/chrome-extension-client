const wishNike = () => {
    var tempProductPrice = $("[data-test = product-price]")[0].innerHTML;
    var regex = /[+-]?\d+(\.\d+)?/g;
    tempProductPrice = tempProductPrice.match(regex)[0];
    let tempProductCurrencySymbol = $("[data-test = product-price]")[0].innerHTML.replace(',', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('GBP', '£');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    console.log('tempProductCurrencySymbol-Nike>>>>>>', tempProductCurrencySymbol);
    var productName = $.trim($('#pdp_product_title').text());
    productName = productName.replace("'", '');
    var sizeExist = $("input[name=skuAndSize]").attr("aria-label");
    var sizeTemp = $("input[name=skuAndSize]:checked").attr("aria-label");
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    var colorExist = $("a[aria-selected=false]").attr('title');
    var color = colorExist ? ($("a[aria-selected=true]").attr('title')) : null;
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
                    'productTitle': productName,
                    'productPrice': tempProductPrice,
                    'productImage': $.trim($("[alt^='" + productName + "']").attr('src')),
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
                                        $("#favouriteIcon").attr('src', "chrome-extension://" + chrome.runtime.id + "/images/favouriteAdd.png");
                                        $('#companyNotification').text(tempCount);
                                        $('#page-mask').css('display', 'block');
                                        $("#successIcon").css('display', 'inline');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'block');
                                        $('#addToCartTitle').text($.trim($('#pdp_product_title').text()));
                                        $('#addToCartImage').attr('src', $.trim($("[alt^='" + productName + "']").attr('src')));
                                        $('#addToCart-Ok').css('display', 'none');
                                        $('#addToCart-checkOut').css('display', 'block');
                                        $('#addToCartError').css('display', 'none');
                                        $('#resetCurrency').css('display', 'none');
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
                            $('#page-mask').css('display', 'block');
                            $("#successIcon").css('display', 'inline');
                            $('#addToCartModal').css('display', 'block');
                            $('#addToCartProductDetail').css('display', 'block');
                            $('#addToCartTitle').text($.trim($('#pdp_product_title').text()));
                            $('#addToCartImage').attr('src', $.trim($("[alt^='" + productName + "']").attr('src')));
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
