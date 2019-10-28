$(window).on('load', function () {
    var targetNode = null;
    var callback = null;
    const config = { attributes: true, childList: true, subtree: true };
    if (window.location.toString().includes('amazon')) {
        $('#submit\\.add-to-cart-ubb').before("<img id='addToCartMM' style='margin: 10px 0; height: 45px;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
        $('#submit\\.add-to-cart').before("<img id='addToCartMM' style='margin: 10px 0;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
        targetNode = document.getElementById('dp-container');
        callback = function(mutationsList, observer) {
            for(let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    if ($('#addToCartMM').length === 0) {
                        $('#submit\\.add-to-cart-ubb').before("<img id='addToCartMM' style='margin: 10px 0; height: 45px;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
                        $('#submit\\.add-to-cart').before("<img id='addToCartMM' style='margin: 10px 0;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
                    }
                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }
    else if (window.location.toString().includes('ebay')) {
        $('#binBtn_btn').before("<img id='addToCartMM' style='display: flex; width:170px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }
    else if (window.location.toString().includes('fashionnova')) {
        $('#add-to-cart-button').before("<img id='addToCartMM' style='display: flex; width:80%; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }
    else if (window.location.toString().includes('revolve')) {
        $('.product-buttons').before("<img id='addToCartMM' style='display: flex; width:90%; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }
    else if (window.location.toString().includes('kyliecosmetics')) {
        $('#AddToCart').after("<img id='addToCartMM' style='display: flex; height: 50px; width:270px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }
    else if (window.location.toString().includes('colourpop')) {
        $('.product-details__actions').after("<img id='addToCartMM' style='display: flex; width:75%; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }
    else if (window.location.toString().includes('prettylittlething')) {
        $('#add-to-bag').after("<img id='addToCartMM' style='display: flex; width:270px; height: 50px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }
    else if (window.location.toString().includes('forever21')) {
        $('#AddToBagButton').after("<img id='addToCartMM' style='display: flex; width:270px; height: 50px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }
    else if (window.location.toString().includes('.6pm.')) {
        $('button[data-track-value="Add-To-Cart"]').after("<img id='addToCartMM' style='display: flex; width:270px; height: 50px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
        targetNode = document.getElementById('main');
        callback = function (mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    if ($('form #addToCartMM').length === 0) {
                        $('button[data-track-value="Add-To-Cart"]').after("<img id='addToCartMM' style='display: flex; width:270px; height: 50px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
                    }
                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }
    else if (window.location.toString().includes('.ralphlauren.')) {
        $('#add-to-cart').after("<img id='addToCartMM' style='display: flex; width:270px; height: 50px; margin: 10px;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
        targetNode = document.getElementById('pdpMain');
        callback = function (mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    if ($('.addtocart  #addToCartMM').length === 0) {
                        $('#add-to-cart').after("<img id='addToCartMM' style='display: flex; width:270px; height: 50px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
                    }
                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }
    else if (window.location.toString().includes('kkwbeauty')) {
        $('.P__button').after("<img id='addToCartMM' style='display: flex; width:270px; height: 50px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }
    else if (window.location.toString().includes('walmart')) {
        $('.prod-product-cta-add-to-cart button').after("<img id='addToCartMM' style='display: flex; width:140px; height:40px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }
    else if (window.location.toString().includes('shopdisney')) {
        $('.add-to-cart').after("<img id='addToCartMM' style='display: flex; width:80%; height: 65px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }

    if (window.location.toString().match('^https://www.amazon') ||
        window.location.toString().includes('www.nike') ||
        window.location.toString().includes('.ebay.') ||
        window.location.toString().match('^https://www.fashionnova.com/') ||
        window.location.toString().match('^https://www.revolve.com/') ||
        window.location.toString().match('^https://www.prettylittlething.com/') ||
        window.location.toString().match('^https://colourpop.com/') ||
        window.location.toString().match('^https://www.kyliecosmetics.com/') ||
        window.location.toString().includes('forever21') ||
        window.location.toString().includes('.6pm.') ||
        window.location.toString().includes('ralphlauren') ||
        window.location.toString().includes('kkwbeauty') ||
        window.location.toString().includes('walmart') ||
        window.location.toString().includes('shopdisney')
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
                $('div[data-browse-component=ATCButton]').before("<img id='addToCartMM' style='margin: 10px 0;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
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
                $('#six-pm').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Stores/six.png');
                $('#ralph').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Stores/ralph.png');
                $('#kkwbeauty').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Stores/kkwbeauty.png');
                $('#walmart').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Stores/walmart.png');
                $('#shopdisney').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Stores/shopdisney.png');
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
                            for (let i = 0; i < cartProducts.length; i++) {
                                $('#checkOut').css('display', 'block');
                                $('#emptyCartMM').css('display', 'none');
                                $('#viewCartModal').css('height', 'calc(100vh - 65px)');
                                var storeLists = ['amazon', 'nike', 'ebay', 'fashionnova', 'revolve', 'colourpop', 'kyliecosmetics', 'prettylittlething', 'forever21', '6pm', 'ralphlauren', 'kkwbeauty', 'walmart', 'shopdisney'];
                                const storeItem = storeLists.find(item => cartProducts[i].productPage.includes(item));
                                if (storeItem) {
                                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>" + storeItem + ".com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: flex; margin-top: 15px; box-shadow: 0 4px 8px 0rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><div id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</div></div></div></div>";
                                    $('#cartDetailSection').prepend(element);
                                }
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
            var message = null;
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
                || ($('#overview span[itemprop=name]').text() !== '')
                || ($('#product-detail-section .product-name').text() !== '')
                || ($('.P__info .P__title').text() !== '')
                || ($('.prod-ProductTitle').text() !== '')
                || ($('.product-detail__content-summary .product-name').text() !== '')
                || ($('.gl-price__value').text() !== '')
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
                            chrome.storage.local.remove(['ProductCurrencySymbol', 'cartDetails'], function (result) {
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
                            if (result.loggedIn === 'false' || result.loggedIn === undefined) {
                               message = 'Please Login.';
                                showMessage(message);
                                // $('#page-mask').css('display', 'block');
                                // $('#addToCartModal').css('display', 'block');
                                // $('#successIcon').css('display', 'none');
                                // $('#addToCartProductDetail').css('display', 'none');
                                // $('#addToCartError').css('display', 'block');
                                // $('#addToCartError').text('Please Login.');
                                // $('#addToCart-Ok').css('display', 'block');
                                // $('#addToCart-Ok').css('width', '270px');
                                // $('#resetCurrency').css('display', 'none');
                                // $('#addToCart-checkOut').css('display', 'none');
                            } else {

                                if ($.trim($('#productTitle').text()) !== '') {
                                    productAmazon();
                                }
                                else if (($.trim($('#itemTitle').text()) !== '') ||
                                    ($.trim($('.product-card-wrapper .product-title').text()) !== '')
                                ) {
                                    productEbay();
                                }
                                else if ($.trim($('#pdp_product_title').text()) !== '') {
                                    productNike();
                                }
                                else if ($.trim($('#product-info [itemprop = name]').text()) !== '') {
                                    productNova();
                                }
                                else if ($.trim($('.product-name--lg').text()) !== '') {
                                    productRevolve();
                                }
                                else if ($('.product-details__title').text() !== '') {
                                    productColourPop();
                                }
                                else if ($('.section-title h1').text() !== '') {
                                    productCosmetics();
                                }
                                else if ($('.product-view-title').text() !== '') {
                                    productPretty();
                                }
                                else if ($('#h1Title').text() !== '') {
                                    productForever();
                                }
                                else if ($('#overview span[itemprop=name]').text() !== '') {
                                    productSix();
                                }
                                else if ($('#product-detail-section .product-name').text() !== '') {
                                    productRalph();
                                }
                                else if ($('.P__info .P__title').text() !== '') {
                                    productKkwBeauty();
                                }
                                else if ($('.prod-ProductTitle').text() !== '') {
                                    productWalmart();
                                }
                                else if ($('.product-detail__content-summary .product-name').text() !== '') {
                                    productShopDisney();
                                }
                                else {
                                    message = 'Please select a product.';
                                    showMessage(message);
                                    // $('#page-mask').css('display', 'block');
                                    // $('#addToCartModal').css('display', 'block');
                                    // $('#addToCartProductDetail').css('display', 'none');
                                    // $('#addToCartError').css('display', 'block');
                                    // $('#successIcon').css('display', 'none');
                                    // $('#addToCartError').text('Please select a product.');
                                    // $('#addToCart-Ok').css('display', 'block');
                                    // $('#addToCart-checkOut').css('display', 'none');
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

