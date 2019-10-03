$(window).ready(function () {

    $("#submit.add-to-cart").before("<div id='addToCartMM' style='background: black;color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:10px 5px;margin-bottom: 10px; '>Add to LetsGoShip</div>");

    if (window.location.toString().includes('fashion')) {
        $("#add-to-cart-button").before("<div id='addToCartMM' style='background: black;color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:10px 5px;margin-bottom: 10px; '>Add to LetsGoShip</div>");
    }
    if (window.location.toString().includes('amazon')) {
        $("#atc-declarative").before("<div id='addToCartMM' style='background: black;color:white;border-radius: 4px; text-align: center; border:1px solid black; padding: 7px;font-size: 14px; margin-bottom: 10px;'>Add to LetsGoShip Cart</div>");
    }
    else if (window.location.toString().includes('ebay')) {
        $("#binBtn_btn").before("<div id='addToCartMM' style='background: black;color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:10px 5px;margin-bottom: 10px;'>Add to LetsGoShip</div>");
    }
    else if (window.location.toString().match('^https://www.fashionnova.com/')) {
        $(".item-primary-cta").before("<div id='addToCartMM' style='background: black;color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:15px 5px;margin-bottom: 10px;font-size: 20px'>Add to LetsGoShip</div>");
    }
    else if (window.location.toString().includes('revolve')) {
        $(".product-buttons").before("<div id='addToCartMM' style='background: black;color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:15px 5px;margin-bottom: 10px;font-size: 20px'>Add to LetsGoShip</div>");
    }
    else if (window.location.toString().includes('colourpop')) {
        $(".product-details__actions").after("<div id='addToCartMM' style='background: black;color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:15px 5px;margin: 10px 0;font-size: 14px'>Add to LetsGoShip</div>");
    }
    else if (window.location.toString().match('^https://www.kyliecosmetics.com/')) {
        $("#AddToCart").after("<div id='addToCartMM' style='background: black; color:white;border-radius: 4px; text-align: center; border:1px solid black; padding:10px 5px;margin-bottom: 10px; '>Add to LetsGoShip</div>");
    }

    function viewCart(cartProductsPostRemove) {
        for (var i = 0; i < cartProductsPostRemove.length; i++) {
            if (cartProductsPostRemove[i].productPage.includes('amazon')) {
                var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right; width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Amazon.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProductsPostRemove[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
            } else if (cartProductsPostRemove[i].productPage.includes('nike')) {
                var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Nike.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProductsPostRemove[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
            } else if (cartProductsPostRemove[i].productPage.includes('ebay')) {
                var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Ebay.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProductsPostRemove[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
            } else if (cartProductsPostRemove[i].productPage.includes('fashionnova')) {
                var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>fashionnova.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProductsPostRemove[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
            } else if (cartProductsPostRemove[i].productPage.includes('revolve')) {
                var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>revolve.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProductsPostRemove[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
            } else if (cartProductsPostRemove[i].productPage.includes('colourpop')) {
                var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>colourpop.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProductsPostRemove[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
            } else if (cartProductsPostRemove[i].productPage.includes('kyliecosmetics')) {
                var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>kyliecosmetics.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProductsPostRemove[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
            }
            $('#cartDetailSection').prepend(element);
        }
    }

    function goCheckout() {
        chrome.storage.local.set({lastPageCompany: location.href}, function () {
        });
        chrome.runtime.sendMessage({
            greeting: "updateLastPageCompany",
            data: location.href
        }, function (response) {
        });
        chrome.storage.local.get(['cartDetails'], function (result) {
            var products = JSON.parse(result.cartDetails);
            console.log('>>>>>>>>product', products);
            chrome.runtime.sendMessage({
                greeting: "sendShoppingCartDetails",
                data: products
            }, function (response) {
            });
            chrome.storage.local.get(['email'], function (result) {
                var email = result.email;
                $.ajax({
                    // url: 'https://cors-anywhere.herokuapp.com/https://8fc534bc.ngrok.io/api/checkout/saveProduct',
                    url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/checkout/saveProduct',
                    type: 'post',
                    dataType: 'json',
                    data: {
                        "product": products,
                        "email": email
                    },
                    success: function (data) {
                        if (data) {
                            chrome.storage.local.remove(['cartDetails'], function (result) {
                            });
                            // var ids = data.status.map(status => status['product_id']).join(',');
                            // var counts = data.status.map(status => status['counts']).join(',');
                            // window.open('https://lets-go-ship-new.mybigcommerce.com' + '?ids=' + ids + '&counts=' + counts);
                            window.open(data.status);
                        }
                    }
                });
            });
        });
    }

    function favorite() {
        chrome.storage.local.set({lastPageCompany: location.href}, function () {
        });
        chrome.runtime.sendMessage({
            greeting: "updateLastPageCompany",
            data: location.href
        }, function (response) {
        });
        chrome.storage.local.get(['favCartDetails'], function (result) {
            var favorites = JSON.parse(result.favCartDetails);
            chrome.runtime.sendMessage({
                greeting: "sendShoppingCartDetails",
                data: favorites
            }, function (response) {
            });
            chrome.storage.local.get(['email'], function (result) {
                var email = result.email;
                console.log('email', email);
                $.ajax({
                    // url: 'https://cors-anywhere.herokuapp.com/https://57f6e4cd.ngrok.io/api/checkout/saveFavorite',
                    url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/checkout/saveFavorite',
                    type: 'post',
                    dataType: 'json',
                    data: {
                        "favorite": favorites,
                        "email": email
                    },
                    success: function (data) {
                        if (data) {
                            window.open('https://lets-go-ship-new.mybigcommerce.com/wishlist.php');
                        }
                    }
                });
            });
        });
    }

    if (window.location.toString().match('^https://www.amazon') ||
        window.location.toString().match('^https://www.nike.com/') ||
        window.location.toString().match('^https://www.nike.com.br/') ||
        window.location.toString().match('^https://www.nike.com.hk/') ||
        window.location.toString().match('.ebay.') ||
        window.location.toString().match('^https://www.fashionnova.com/') ||
        window.location.toString().match('^https://www.revolve.com/') ||
        window.location.toString().match('^https://www.prettylittlething.com/') ||
        window.location.toString().match('^https://colourpop.com/') ||
        window.location.toString().match('^https://www.kyliecosmetics.com/')
    ) {
        $.get("chrome-extension://" + chrome.runtime.id + "/html/topBar.html", function (data) {
            $("body").prepend(data);
        });
        var pageMaskElement = '<div id="page-mask" style="position:fixed;left : 0;right: 0;bottom: 0;top: 0;background-color: rgba(0,0,0,0.6);display: none; z-index: 100;"></div>'

        $('body').append(pageMaskElement);

        $('#companyLogo').ready(function () {
            var logo = "chrome-extension://" + chrome.runtime.id + "/images/topBarLogo.png";
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
                            favouriteIcon = "chrome-extension://" + chrome.runtime.id + "/images/favouriteAdd.png";
                        } else {
                            favouriteIcon = "chrome-extension://" + chrome.runtime.id + "/images/favourite.png";
                        }
                        $("#favouriteIcon").attr('src', favouriteIcon);
                    } else {
                        $("#favouriteIcon").attr('src', "chrome-extension://" + chrome.runtime.id + "/images/favourite.png");
                    }
                });

                $('#companyLogo').attr('src', logo);
                $("div[data-browse-component=ATCButton]").before(" <div id='addToCartMM' style='background: black;color:white;border-radius: 30px; text-align: center; border:1px solid black; padding:18px 24px; font-size: 1.25rem;margin-bottom: 10px;'>Add to LetsGoShip Cart</div>");
                $('#amazon').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/amazon.png");
                $('#ebay').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/ebay.png");
                $('#nike').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/nike.png");
                $('#magnify').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/magnify.png");
                $('#setting').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/setting.png");
                $('#fashionNova').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/fashionNova.png");
                $('#revolve').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/revolve.png");
                $('#color').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/color.png");
                $('#cosmetics').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/cosmetics.png");
            }, 200)
        });

        $('#favouriteCart').ready(function () {

            $('body').on('click', '#favouriteCart', function (e) {

                $('#addToCart-Ok').on('click', function () {
                    $('#page-mask').css('display', 'none');
                    $('#addToCartModal').hide();
                });

                chrome.storage.local.get(['loggedIn'], function (result) {
                    if (result.loggedIn === 'false' || result.loggedIn === undefined) {
                        $('#page-mask').css('display', 'block');
                        $('#addToCartModal').css('display', 'block');
                        $("#successIcon").css('display', 'none');
                        $('#addToCartProductDetail').css('display', 'none');
                        $('#addToCartError').css('display', 'block');
                        $('#addToCartError').text("Please Login.");
                        $('#addToCart-Ok').css('display', 'block');
                        $('#addToCart-Ok').css('width', '270px');
                        $('#resetCurrency').css('display', 'none');
                        $('#addToCart-checkOut').css('display', 'none');
                    } else {
                        var productDetails = {};

                        if ($.trim($('#productTitle').text()) !== '') {
                            $.getScript("wishAmazon.js");
                            wishAmazon();
                        }
                        else if ($.trim($('#pdp_product_title').text()) !== '') {
                            $.getScript("wishNike.js");
                            wishNike();
                        }
                        else if ($.trim($('#itemTitle').text()) !== '') {
                            $.getScript("wishEbay.js");
                            wishEbay();
                        }
                        else if ($.trim($("#product-info [itemprop = name]").text()) !== '') {
                            $.getScript("wishNova.js");
                            wishNova();
                        }
                        else if ($.trim($(".product-name--lg").text()) !== '') {
                            $.getScript("wishRevolve.js");
                            wishRevolve();
                        }
                        else if ($(".product-details__title").text() !== '') {
                            $.getScript("wishColourPop.js");
                            wishColourPop();
                        }
                        else if ($(".section-title h1").text() !== '') {
                            $.getScript("wishCosmetics.js");
                            wishCosmetics();
                        }
                        else {
                            $('#page-mask').css('display', 'block');
                            $('#addToCartModal').css('display', 'block');
                            $('#addToCartProductDetail').css('display', 'none');
                            $('#addToCartError').css('display', 'block');
                            $("#successIcon").css('display', 'none');
                            $('#addToCartError').text("Please select a product.");
                            $('#addToCart-Ok').css('display', 'block');
                            $('#addToCart-checkOut').css('display', 'none');
                        }
                    }
                });
            });
        });

        $('#viewCartIcon').ready(function () {

            var cartIcon = "chrome-extension://" + chrome.runtime.id + "/images/cartIcon.png";

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
                                // if ((!cartProducts[i].productColor && !cartProducts[i].productSize) ||
                                //     ((cartProducts[i].productColor === "" || cartProducts[i].productColor === 'null') &&
                                //         (cartProducts[i].productSize === "" || cartProducts[i].productSize === 'null'))) {
                                //     $('#checkOut').css('display', 'block');
                                //     $('#emptyCartMM').css('display', 'none');
                                //     $('#viewCartModal').css('height', 'calc(100vh - 65px)');
                                //     if (cartProducts[i].productPage.includes('amazon')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Amazon.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     } else if (cartProducts[i].productPage.includes('nike')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Nike.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     } else if (cartProducts[i].productPage.includes('ebay')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Ebay.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     } else if (cartProducts[i].productPage.includes('fashionnova')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>fashionnova.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     } else if (cartProducts[i].productPage.includes('revolve')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>revolve.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     }
                                // } else if ((cartProducts[i].productColor == "" || cartProducts[i].productColor === 'null') || !cartProducts[i].productColor) {
                                $('#checkOut').css('display', 'block');
                                $('#emptyCartMM').css('display', 'none');
                                $('#viewCartModal').css('height', 'calc(100vh - 65px)');
                                if (cartProducts[i].productPage.includes('amazon')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Amazon.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                } else if (cartProducts[i].productPage.includes('nike')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Nike.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                } else if (cartProducts[i].productPage.includes('ebay')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Ebay.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                } else if (cartProducts[i].productPage.includes('fashionnova')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>fashionnova.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                } else if (cartProducts[i].productPage.includes('revolve')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>revolve.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                } else if (cartProducts[i].productPage.includes('colourpop')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>colourpop.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                } else if (cartProducts[i].productPage.includes('kyliecosmetics')) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>kyliecosmetics.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                }
                                // } else if ((cartProducts[i].productSize == "" || cartProducts[i].productSize === 'null') || !cartProducts[i].productSize) {
                                //     $('#checkOut').css('display', 'block');
                                //     $('#emptyCartMM').css('display', 'none');
                                //     $('#viewCartModal').css('height', 'calc(100vh - 65px)');
                                //     if (cartProducts[i].productPage.includes('amazon')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Amazon.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     } else if (cartProducts[i].productPage.includes('nike')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Nike.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     } else if (cartProducts[i].productPage.includes('ebay')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Ebay.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     } else if (cartProducts[i].productPage.includes('fashionnova')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>fashionnova.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     } else if (cartProducts[i].productPage.includes('revolve')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>revolve.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     }
                                // } else {
                                //     $('#checkOut').css('display', 'block');
                                //     $('#emptyCartMM').css('display', 'none');
                                //     $('#viewCartModal').css('height', 'calc(100vh - 65px)');
                                //     if (cartProducts[i].productPage.includes('amazon')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Amazon.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     } else if (cartProducts[i].productPage.includes('nike')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Nike.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     } else if (cartProducts[i].productPage.includes('ebay')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Ebay.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     } else if (cartProducts[i].productPage.includes('fashionnova')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>fashionnova.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     } else if (cartProducts[i].productPage.includes('revolve')) {
                                //         var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>revolve.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><button id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                                //     }
                                // }
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
                        // $("#viewCartModal").css('filter', 'blur(2px)');
                        // $("#viewCartModal").css('background', '#777');
                        // $("#ConfirmCheckout").css('display', 'flex');
                        $('#companyNotification').css('display', 'none');
                        $('#viewCartModal').css('display', 'none');
                        $('#page-mask').css('display', 'none');
                        goCheckout();

                    });
                    $('#favWishList').off('click');
                    $('#favWishList').on('click', function () {
                        favorite();
                    });
                    // $('#ConfirmButton').off('click');
                    // $('#ConfirmButton').on('click', function () {
                    //     $('#viewCartModal').css('display', 'none');
                    //     $("#ConfirmCheckout").css('display', 'none');
                    //     $('#page-mask').css('display', 'none');
                    //     $('#companyNotification').css('display', 'none');
                    //     goCheckout();
                    // });

                    if ($('#viewCartModal').css('display') === 'block') {
                        $('#viewCartModal').css('display', 'none');
                        $("#ConfirmCheckout").css('display', 'none');
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

        $('body').on('click', '.removeButtonFav', function (event) {

            const id = $(this).attr('id');
            chrome.storage.local.get(['favCartDetails'], function (result) {
                var productList = JSON.parse(result.favCartDetails);
                productList.splice(id, 1);
                chrome.storage.local.set({favCartDetails: JSON.stringify(productList)}, function () {
                });
                chrome.runtime.sendMessage({
                    greeting: "setCartDetails",
                    data: productList
                }, function (response) {
                });
                $('#favCartDetailSection').empty();
                chrome.storage.local.get(['favCartDetails'], function (result) {
                    var cartProductsPostRemove = JSON.parse(result.favCartDetails);

                    for (var i = 0; i < cartProductsPostRemove.length; i++) {
                        if (cartProductsPostRemove[i].productPage.includes('amazon')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right; width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Amazon.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        } else if (cartProductsPostRemove[i].productPage.includes('nike')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Nike.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        } else if (cartProductsPostRemove[i].productPage.includes('ebay')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Ebay.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        } else if (cartProductsPostRemove[i].productPage.includes('fashionnova')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>fashionnova.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        } else if (cartProductsPostRemove[i].productPage.includes('fashionnova')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>fashionnova.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        } else if (cartProductsPostRemove[i].productPage.includes('revolve')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>revolve.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        } else if (cartProductsPostRemove[i].productPage.includes('colourpop')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>colourpop.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        } else if (cartProductsPostRemove[i].productPage.includes('kyliecosmetics')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>kyliecosmetics.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: block; margin-top: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        }
                        $('#favCartDetailSection').prepend(element);
                    }
                });
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
                            favouriteIcon = "chrome-extension://" + chrome.runtime.id + "/images/favouriteAdd.png";
                        } else {
                            favouriteIcon = "chrome-extension://" + chrome.runtime.id + "/images/favourite.png";
                        }
                        $("#favouriteIcon").attr('src', favouriteIcon);
                    } else {
                        $("#favouriteIcon").attr('src', "chrome-extension://" + chrome.runtime.id + "/images/favourite.png");
                    }
                });
            });
        });

        $('#viewCartModal').ready(function () {

            $('body').on('click', '#cartButton', function (event) {
                $('#cartsWrapper').css('display', 'block');
                $('#favWrapper').css('display', 'none');
                $('#cartButton').css('background', '#E2E5E6');
                $('#cartButton').css('opacity', '1');
                $('#favButton').css('background', 'none');
                $('#favButton').css('opacity', '0.4');
            });

            $('body').on('click', '#favButton', function (event) {
                $('#cartsWrapper').css('display', 'none');
                $('#favWrapper').css('display', 'block');
                $('#cartButton').css('background', 'none');
                $('#cartButton').css('opacity', '0.4');
                $('#favButton').css('background', '#E2E5E6');
                $('#favButton').css('opacity', '1');

                $('#favCartDetailSection').empty();
                chrome.storage.local.get(['favCartDetails'], function (result) {
                    var cartProducts = JSON.parse(result.favCartDetails);

                    for (var i = 0; i < cartProducts.length; i++) {
                        $('#viewCartModal').css('height', 'calc(100vh - 65px)');
                        if (cartProducts[i].productPage.includes('amazon')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Amazon.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        } else if (cartProducts[i].productPage.includes('nike')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Nike.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        } else if (cartProducts[i].productPage.includes('ebay')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>Ebay.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        } else if (cartProducts[i].productPage.includes('fashionnova')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>fashionnova.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        } else if (cartProducts[i].productPage.includes('revolve')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>revolve.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        } else if (cartProducts[i].productPage.includes('colourpop')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>colourpop.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        } else if (cartProducts[i].productPage.includes('kyliecosmetics')) {
                            var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>kyliecosmetics.com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/><button id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</button></div></div></div>";
                        }
                        $('#favCartDetailSection').prepend(element);
                    }
                });
            });
        });

        $('#cartDetailSection').ready(function () {
            $('body').on('click', '.removeItem', function (event) {
                const id = $(this).siblings('.itemCount').attr('id');
                chrome.storage.local.get(['cartDetails'], function (result) {
                    var productList = JSON.parse(result.cartDetails);
                    var count = productList[id].itemCount;
                    count--;
                    if (count > 0) {
                        productList[id].itemCount = count;
                        chrome.storage.local.set({'cartDetails': JSON.stringify(productList)}, function () {
                        });
                        chrome.runtime.sendMessage({
                            greeting: "setCartDetails",
                            data: productList
                        }, function (response) {
                        });
                        $(this).siblings('.itemCount').text(count);
                        var oldPrice = productList[id].productPrice;
                        oldPrice = parseFloat(oldPrice);
                        var count = count;
                        count = parseInt(count);
                        var newPrice = oldPrice - oldPrice / (count + 1);
                        newPrice = newPrice.toFixed('2');
                        productList[id].productPrice = newPrice;
                        chrome.storage.local.set({'cartDetails': JSON.stringify(productList)}, function () {
                        });
                        chrome.runtime.sendMessage({
                            greeting: "setCartDetails",
                            data: productList
                        }, function (response) {
                        });
                        $('#cartDetailSection').empty();
                        viewCart(productList);
                        var subtotal = 0;
                        subtotal = parseInt(subtotal);
                        for (i = 0; i < productList.length; i++) {
                            subtotal = subtotal + parseFloat(productList[i].productPrice);
                        }
                        subtotal = subtotal.toFixed(2);
                        $('#subtotal').text(subtotal);
                        $('#companyNotification').css('display', 'flex');
                        var tempCount = 0;
                        for (i = 0; i < productList.length; i++) {
                            tempCount = tempCount + productList[i].itemCount
                        }
                        $('#companyNotification').text(tempCount);
                    }
                })
            });
            $('body').on('click', '.addItem', function (event) {
                const id = $(this).siblings('.itemCount').attr('id');
                chrome.storage.local.get(['cartDetails'], function (result) {
                    var productList = JSON.parse(result.cartDetails);
                    var count = productList[id].itemCount;
                    count++;
                    if (count == 0) {
                        productList.splice(id, 1);
                        chrome.storage.local.set({cartDetails: JSON.stringify(productList)}, function () {
                        });
                        chrome.runtime.sendMessage({
                            greeting: "setCartDetails",
                            data: productList
                        }, function (response) {
                        });
                        $('#companyNotification').css('display', 'flex');
                        var tempCount = 0;
                        for (i = 0; i < productList.length; i++) {
                            tempCount = tempCount + productList[i].itemCount
                        }
                        $('#companyNotification').text(tempCount);
                        if (productList.length === 0) {
                            $('#companyNotification').css('display', 'none');
                        }
                        $('#cartDetailSection').empty();
                        chrome.storage.local.get(['cartDtails'], function (result) {
                            var cartProductsPostRemove = JSON.parse(result.cartDetails);
                            viewCart(cartProductsPostRemove);
                        });
                    }
                    else {
                        productList[id].itemCount = count;
                        $(this).siblings('.itemCount').text(count);
                        var oldPrice = productList[id].productPrice;
                        oldPrice = parseFloat(oldPrice);
                        var count = count;
                        count = parseInt(count);
                        var newPrice = oldPrice + oldPrice / (count - 1);
                        newPrice = newPrice.toFixed(2);
                        productList[id].productPrice = newPrice;
                        chrome.storage.local.set({cartDetails: JSON.stringify(productList)}, function () {
                        });
                        chrome.runtime.sendMessage({
                            greeting: "setCartDetails",
                            data: productList
                        }, function (response) {
                        });
                        $('#cartDetailSection').empty();
                        viewCart(productList);
                        var subtotal = 0;
                        subtotal = parseInt(subtotal);
                        for (i = 0; i < productList.length; i++) {
                            subtotal = subtotal + parseFloat(productList[i].productPrice)
                        }
                        subtotal = subtotal.toFixed(2);
                        $('#subtotal').text(subtotal);
                        $('#companyNotification').css('display', 'flex');
                        var tempCount = 0;
                        for (i = 0; i < productList.length; i++) {
                            tempCount = tempCount + productList[i].itemCount
                        }
                        $('#companyNotification').text(tempCount);
                    }
                });
            });
            $('body').on('click', '.removeButton', function (event) {
                const id = $(this).attr('id');
                chrome.storage.local.get(['cartDetails'], function (result) {
                    var productList = JSON.parse(result.cartDetails);
                    productList.splice(id, 1);
                    chrome.storage.local.set({cartDetails: JSON.stringify(productList)}, function () {
                    });
                    chrome.runtime.sendMessage({greeting: "setCartDetails", data: productList}, function (response) {
                    });
                    if (productList.length === 0) {
                        $('#companyNotification').css('display', 'none');
                        $('#subtotal').text(0);
                    }
                    else {
                        var subtotal = 0;
                        subtotal = parseInt(subtotal);
                        for (i = 0; i < productList.length; i++) {
                            subtotal = subtotal + parseFloat(productList[i].productPrice)
                        }
                        subtotal = subtotal.toFixed(2);
                        $('#subtotal').text(subtotal);
                        $('#companyNotification').css('display', 'flex');
                        var tempCount = 0;
                        for (i = 0; i < productList.length; i++) {
                            tempCount = tempCount + productList[i].itemCount
                        }
                        $('#companyNotification').text(tempCount);
                    }
                    $('#cartDetailSection').empty();

                    chrome.storage.local.get(['cartDetails'], function (result) {
                        var cartProductsPostRemove = JSON.parse(result.cartDetails);
                        viewCart(cartProductsPostRemove);
                    });
                });
            });
        });

        $("body").on('click', function (e) {
            var posX = 1 * e.clientX;
            var posY = 1 * e.clientY;
            var left = 1 * $("#addToCartModal")[0].offsetLeft;
            var right = left + 1 * $("#addToCartModal")[0].offsetWidth;
            var top = 1 * $("#addToCartModal")[0].offsetTop;
            var bottom = top + 1 * $("#addToCartModal")[0].offsetHeight;

            if (posX === 0 && posY === 0) return;
            if (posX >= left && posX <= right && posY >= top && posY <= bottom) {
                $('#addToCartModal').css('display', 'block');
                $('#page-mask').css('display', 'block');
            } else if (left && right && top && bottom) {
                $('#addToCartModal').css('display', 'none');
                $('#page-mask').css('display', 'none');
            }
        });

        $("body").on('click', function (e) {
            var left = 1 * $("#viewCartModal")[0].offsetLeft;
            var right = left + 1 * $("#viewCartModal")[0].offsetWidth;
            var top = 1 * $("#viewCartModal")[0].offsetTop;
            var bottom = top + 1 * $("#viewCartModal")[0].offsetHeight;
            var posX = 1 * e.clientX;
            var posY = 1 * e.clientY;

            if (posX === 0 && posY === 0) return;
            if (posX >= left && posX <= right && posY >= top && posY <= bottom) {
                $('#viewCartModal').css('display', 'block');
                $('#page-mask').css('display', 'block');
            } else if (left && right && top && bottom) {
                $('#viewCartModal').css('display', 'none');
                $("#ConfirmCheckout").css('display', 'none');
                $('#page-mask').css('display', 'none');
            }
        });

        $('#addToCartMM').ready(function () {
            if (($.trim($('#productTitle').text()) !== '')
                || ($.trim($('#itemTitle').text()) !== '')
                || ($.trim($('.product-card-wrapper .product-title').text()) !== '')
                || ($.trim($('#pdp_product_title').text()) !== '')
                || ($("#product-info [itemprop = name]").text() !== '')
                || ($(".product-name--lg").text() !== '')
                || ($(".product-details__title").text() !== '')
                || ($(".section-title h1").text() !== '')
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
                        // $('.go-shipping').off('click');
                        // $('.go-shipping').on('click', function () {
                        //     goCheckout();
                        // });
                        $("#addToCartModal").on('click', function (e) {
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

                        $('#successIcon').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/success.png");

                        chrome.storage.local.get(['loggedIn'], function (result) {
                            let count;
                            if (result.loggedIn === 'false' || result.loggedIn === undefined) {
                                $('#page-mask').css('display', 'block');
                                $('#addToCartModal').css('display', 'block');
                                $("#successIcon").css('display', 'none');
                                $('#addToCartProductDetail').css('display', 'none');
                                $('#addToCartError').css('display', 'block');
                                $('#addToCartError').text("Please Login.");
                                $('#addToCart-Ok').css('display', 'block');
                                $('#addToCart-Ok').css('width', '270px');
                                $('#resetCurrency').css('display', 'none');
                                $('#addToCart-checkOut').css('display', 'none');
                            } else {
                                var productDetails = {};

                                if ($.trim($('#productTitle').text()) !== '') {
                                    $.getScript("productAmazon.js");
                                    productAmazon();
                                }
                                else if (($.trim($('#itemTitle').text()) !== '') ||
                                    ($.trim($('.product-card-wrapper .product-title').text()) !== '')
                                ) {
                                    $.getScript("productEbay.js");
                                    productEbay();
                                }
                                else if ($.trim($('#pdp_product_title').text()) !== '') {
                                    $.getScript("productNike.js");
                                    productNike();
                                }
                                else if ($.trim($("#product-info [itemprop = name]").text()) !== '') {
                                    $.getScript("productNova.js");
                                    productNova();
                                }
                                else if ($.trim($(".product-name--lg").text()) !== '') {
                                    $.getScript("productRevolve.js");
                                    productRevolve();
                                }
                                else if ($(".product-details__title").text() !== '') {
                                    $.getScript("productColourPop.js");
                                    productColourPop();
                                }
                                else if ($(".section-title h1").text() !== '') {
                                    $.getScript("productCosmetics.js");
                                    productCosmetics();
                                }
                                else {
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $("#successIcon").css('display', 'none');
                                    $('#addToCartError').text("Please select a product.");
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
