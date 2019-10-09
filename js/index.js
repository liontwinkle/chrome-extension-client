$(window).ready(function () {

    $.getScript("Utils/checkout.js");
    $.getScript("Utils/wish-list.js");

    $('#submit.add-to-cart').before("<div id='addToCartMM' style='background: black;color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:10px 5px;margin-bottom: 10px; '>Add to LetsGoShip</div>");

    if (window.location.toString().includes('fashion')) {
        $('#add-to-cart-button').before("<div id='addToCartMM' style='background: black;color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:15px 5px; font-size: 16px; margin-bottom: 10px; '>Add to LetsGoShip</div>");
    }
    else if (window.location.toString().includes('amazon')) {
        $('#atc-declarative').before("<div id='addToCartMM' style='background: black;color:white;border-radius: 4px; text-align: center; border:1px solid black; padding: 7px;font-size: 14px; margin-bottom: 10px;'>Add to LetsGoShip Cart</div>");
    }
    else if (window.location.toString().includes('ebay')) {
        $('#binBtn_btn').before("<div id='addToCartMM' style='background: black;color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:10px 5px;margin-bottom: 10px;'>Add to LetsGoShip</div>");
    }
    else if (window.location.toString().match('^https://www.fashionnova.com/')) {
        $('.item-primary-cta').before("<div id='addToCartMM' style='background: black;color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:15px 5px;margin-bottom: 10px;font-size: 20px'>Add to LetsGoShip</div>");
    }
    else if (window.location.toString().includes('revolve')) {
        $('.product-buttons').before("<div id='addToCartMM' style='background: black;color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:15px 5px;margin-bottom: 10px;font-size: 20px'>Add to LetsGoShip</div>");
    }
    else if (window.location.toString().includes('colourpop')) {
        $('.product-details__actions').after("<div id='addToCartMM' style='background: black;color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:15px 5px;margin: 10px 0;font-size: 14px'>Add to LetsGoShip</div>");
    }
    else if (window.location.toString().match('^https://www.kyliecosmetics.com/')) {
        $('#AddToCart').after("<div id='addToCartMM' style='background: black; color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:12px 5px;margin-bottom: 10px; font-size: 16px; '>Add to LetsGoShip</div>");
    }
    else if (window.location.toString().includes('prettylittlething')) {
        $('#add-to-bag').after("<div id='addToCartMM' style='background: black; color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:12px 5px;margin: 10px 0; font-size: 17px; font-family: inherit '>Add to LetsGoShip</div>");
    }
    else if (window.location.toString().includes('forever21')) {
        $('#AddToBagButton').after("<div id='addToCartMM' style='background: black; color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:10px 5px;margin: 10px 0; font-size: 17px; font-family: inherit '>Add to LetsGoShip</div>");
    }

    if (window.location.toString().match('^https://www.amazon') ||
        window.location.toString().includes('www.nike') ||
        window.location.toString().includes('.ebay.') ||
        window.location.toString().match('^https://www.fashionnova.com/') ||
        window.location.toString().match('^https://www.revolve.com/') ||
        window.location.toString().match('^https://www.prettylittlething.com/') ||
        window.location.toString().match('^https://colourpop.com/') ||
        window.location.toString().match('^https://www.kyliecosmetics.com/') ||
        window.location.toString().includes('forever21')
    ) {
        $.get('chrome-extension://' + chrome.runtime.id + '/html/top-bar.html', function (data) {
            $('body').prepend(data);
        });
        var pageMaskElement = '<div id="page-mask" style="position:fixed;left : 0;right: 0;bottom: 0;top: 0;background-color: rgba(0,0,0,0.6);display: none; z-index: 99999;"></div>'
        var favouriteIcon = '';
        $('body').append(pageMaskElement);

        $('#companyLogo').ready(function () {
            var logo = 'chrome-extension://' + chrome.runtime.id + '/images/Logo/topBarLogo.png';
            setTimeout(function () {
                chrome.storage.local.get(['favCartDetails'], function (result) {
                    if (result.favCartDetails) {
                        var cartProducts = JSON.parse(result.favCartDetails);
                        var isFav = false;

                        for (var i = 0; i < cartProducts.length; i++) {
                            if (cartProducts[i].productPage === location.href) {
                                isFav = true;
                            }
                        }
                        if (isFav) {
                            favouriteIcon = 'chrome-extension://' + chrome.runtime.id + "/images/Carts/favouriteAdd.png";
                        } else {
                            favouriteIcon = 'chrome-extension://' + chrome.runtime.id + "/images/Carts/favourite.png";
                        }
                        $('#favouriteIcon').attr('src', favouriteIcon);
                    } else {
                        $('#favouriteIcon').attr('src', 'chrome-extension://' + chrome.runtime.id + "/images/Carts/favourite.png");
                    }
                });

                $('#companyLogo').attr('src', logo);
                $('div[data-browse-component=ATCButton]').before(" <div id='addToCartMM' style='background: black;color:white;border-radius: 30px; text-align: center; border:1px solid black; padding:12px 24px; font-size: 1.25rem;margin-bottom: 10px;'>Add to LetsGoShip Cart</div>");
                $('#magnify').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Carts/magnify.png');
                $('#setting').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Carts/setting.png');
                $('#amazon').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Stores/amazon.png');
                $('#ebay').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Stores/ebay.png');
                $('#nike').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Stores/nike.png');
                $('#fashionNova').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Stores/fashionNova.png');
                $('#revolve').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Stores/revolve.png');
                $('#color').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Stores/color.png');
                $('#cosmetics').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Stores/cosmetics.png');
                $('#pretty').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Stores/pretty.png');
                $('#forever21').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Stores/forever.png');
            }, 200)
        });

        $('#viewCartIcon').ready(function () {
            var cartIcon = 'chrome-extension://' + chrome.runtime.id + '/images/Carts/cartIcon.png';
            setTimeout(function () {
                $('#viewCartIcon').attr('src', cartIcon);
                $('#favouriteIcon').attr('src', favouriteIcon);
                chrome.storage.local.get(['cartDetails'], function (result) {
                    var notificationProducts = JSON.parse(result.cartDetails);
                    if (notificationProducts.length > 0) {
                        $('#companyNotification').css('display', 'flex');
                        var tempCount = 0;
                        for (i = 0; i < notificationProducts.length; i++) {
                            tempCount = tempCount + notificationProducts[i].itemCount
                        }
                        $('#companyNotification').text(tempCount);
                    }
                });
                $('body').on('click', '#viewCartIcon', function (e) {
                    $('#cartDetailSection').empty();
                    chrome.storage.local.get(['cartDetails'], function (result) {
                        var cartProducts = JSON.parse(result.cartDetails);
                        if (cartProducts == null) {
                            $('#subtotal').text(0);
                        }
                        else {
                            var subtotal = 0;
                            subtotal = parseInt(subtotal);
                            for (i = 0; i < cartProducts.length; i++) {
                                subtotal = subtotal + parseFloat(cartProducts[i].productPrice);
                            }
                            subtotal = subtotal.toFixed(2);
                            $('#subtotal').text(subtotal);
                            chrome.storage.local.get(['tempProductCurrencySymbol'], function (result) {
                                $('#currency').text(result.tempProductCurrencySymbol);
                            });
                            for (var i = 0; i < cartProducts.length; i++) {
                                $('#checkOut').css('display', 'block');
                                $('#emptyCartMM').css('display', 'none');
                                $('#viewCartModal').css('height', 'calc(100vh - 65px)');
                                if (cartProducts[i].productPage.includes('amazon')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Amazon.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: flex; margin-top: 15px; box-shadow: 0 4px 8px 0rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><div id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</div></div></div></div>";
                                } else if (cartProducts[i].productPage.includes('nike')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Nike.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: flex; margin-top: 15px; box-shadow: 0 4px 8px 0rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><div id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</div></div></div></div>";
                                } else if (cartProducts[i].productPage.includes('ebay')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Ebay.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: flex; margin-top: 15px; box-shadow: 0 4px 8px 0rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><div id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</div></div></div></div>";
                                } else if (cartProducts[i].productPage.includes('fashionnova')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>fashionnova.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: flex; margin-top: 15px; box-shadow: 0 4px 8px 0rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><div id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</div></div></div></div>";
                                } else if (cartProducts[i].productPage.includes('revolve')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>revolve.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: flex; margin-top: 15px; box-shadow: 0 4px 8px 0rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><div id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</div></div></div></div>";
                                } else if (cartProducts[i].productPage.includes('colourpop')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>colourpop.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: flex; margin-top: 15px; box-shadow: 0 4px 8px 0rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><div id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</div></div></div></div>";
                                } else if (cartProducts[i].productPage.includes('kyliecosmetics')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>kyliecosmetics.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: flex; margin-top: 15px; box-shadow: 0 4px 8px 0rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><div id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</div></div></div></div>";
                                } else if (cartProducts[i].productPage.includes('prettylittle')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>prettylittlething.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: flex; margin-top: 15px; box-shadow: 0 4px 8px 0rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><div id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</div></div></div></div>";
                                } else if (cartProducts[i].productPage.includes('forever21')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>forever21.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: flex; margin-top: 15px; box-shadow: 0 4px 8px 0rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><div id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</div></div></div></div>";
                                }
                                $('#cartDetailSection').prepend(element);
                            }
                        }
                    });

                    $('#viewCart-continueShopping').off('click');
                    $('#viewCart-continueShopping').on('click', function () {
                        $('#viewCartModal').css('display', 'none');
                        $('#page-mask').css('display', 'none')
                    });
                    $('.go-shipping').off('click');
                    $('.go-shipping').on('click', function () {
                        $('#companyNotification').css('display', 'none');
                        $('#viewCartModal').css('display', 'none');
                        $('#page-mask').css('display', 'none');
                        goCheckout();
                    });
                    $('#favWishList').off('click');
                    $('#favWishList').on('click', function () {
                        favorite();
                    });
                    if ($('#viewCartModal').css('display') === 'block') {
                        $('#viewCartModal').css('display', 'none');
                        $('#ConfirmCheckout').css('display', 'none');
                        $('#page-mask').css('display', 'none');
                    } else {
                        $('#viewCartModal').css('display', 'block');
                        $('#viewCartModal').css('background', 'white');
                        $('#viewCartModal').css('filter', 'unset');
                        $('#page-mask').css('display', 'block');
                    }
                    $('#addToCartModal').css('display', 'none');
                    e.stopPropagation();
                });
            }, 200)
        });

        $('#addToCartMM').ready(function () {
            if (($.trim($('#productTitle').text()) !== '')
                || ($.trim($('#itemTitle').text()) !== '')
                || ($.trim($('.product-card-wrapper .product-title').text()) !== '')
                || ($.trim($('#pdp_product_title').text()) !== '')
                || ($('#product-info [itemprop = name]').text() !== '')
                || ($('.product-name--lg').text() !== '')
                || ($('.product-details__title').text() !== '')
                || ($('.section-title h1').text() !== '')
                || ($('.product-view-title').text() !== '')
                || ($('#h1Title').text() !== '')
            ) {
                $('body').on('click', '#addToCartMM', function () {

                        $('#addToCart-continueShopping').on('click', function () {
                            $('#page-mask').css('display', 'none');
                            $('#addToCartModal').hide();
                        });
                        $('#addToCart-Ok').on('click', function () {
                            $('#page-mask').css('display', 'none');
                            $('#addToCartModal').hide();
                        });

                    $('#addToCartModal').on('click', function (e) {
                            e.stopPropagation();
                        });

                        $('#resetCurrency').on('click', function () {
                            chrome.storage.local.remove(['tempProductCurrencySymbol', 'cartDetails'], function (result) {
                            });
                            var element = "<div id='emptyCartMM'><div>Your Cart is Empty</div></div>";
                            $('#cartDetailSection').prepend(element);
                            $('#checkOut').css('display', 'none');
                            $('#viewCartModal').css('height', '512px');
                            $('#page-mask').css('display', 'none');
                            $('#addToCart-Ok').css('display', 'none');
                            $('#addToCartModal').hide();
                            $('#companyNotification').css('display', 'none');
                        });

                    $('#successIcon').attr('src', 'chrome-extension://' + chrome.runtime.id + "/images/Carts/success.png");

                        chrome.storage.local.get(['loggedIn'], function (result) {
                            // let count;
                            if (result.loggedIn === 'false' || result.loggedIn === undefined) {
                                $('#page-mask').css('display', 'block');
                                $('#addToCartModal').css('display', 'block');
                                $('#successIcon').css('display', 'none');
                                $('#addToCartProductDetail').css('display', 'none');
                                $('#addToCartError').css('display', 'block');
                                $('#addToCartError').text('Please Login.');
                                $('#addToCart-Ok').css('display', 'block');
                                $('#addToCart-Ok').css('width', '270px');
                                $('#resetCurrency').css('display', 'none');
                                $('#addToCart-checkOut').css('display', 'none');
                            } else {
                                // var productDetails = {};

                                if ($.trim($('#productTitle').text()) !== '') {
                                    $.getScript('Products/amazon.js');
                                    productAmazon();
                                }
                                else if (($.trim($('#itemTitle').text()) !== '') ||
                                    ($.trim($('.product-card-wrapper .product-title').text()) !== '')
                                ) {
                                    $.getScript('Products/ebay.js');
                                    productEbay();
                                }
                                else if ($.trim($('#pdp_product_title').text()) !== '') {
                                    $.getScript('Products/nike.js');
                                    productNike();
                                }
                                else if ($.trim($('#product-info [itemprop = name]').text()) !== '') {
                                    $.getScript('Products/nova.js');
                                    productNova();
                                }
                                else if ($.trim($('.product-name--lg').text()) !== '') {
                                    $.getScript('Products/revolve.js');
                                    productRevolve();
                                }
                                else if ($('.product-details__title').text() !== '') {
                                    $.getScript('Products/colourPop.js');
                                    productColourPop();
                                }
                                else if ($('.section-title h1').text() !== '') {
                                    $.getScript('Products/cosmetics.js');
                                    productCosmetics();
                                }
                                else if ($('.product-view-title').text() !== '') {
                                    $.getScript('Products/pretty.js');
                                    productPretty();
                                }
                                else if ($('#h1Title').text() !== '') {
                                    $.getScript('Products/forever.js');
                                    productForever();
                                }
                                else {
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $('#successIcon').css('display', 'none');
                                    $('#addToCartError').text('Please select a product.');
                                    $('#addToCart-Ok').css('display', 'block');
                                    $('#addToCart-checkOut').css('display', 'none');
                                }
                            }
                        });
                    }
                )
            } else {
                $('#addToCartMM').css('opacity', '0.4');
            }
        });
    }
});
