$(window).on('load', function () {
    var targetNode = null;
    var callback = null;
    const config = {attributes: true, childList: true, subtree: true};
    if (window.location.toString().includes('amazon')) {
        $('#submit\\.add-to-cart-ubb').before("<img id='addToCartMM' style='margin: 10px 0; height: 45px;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
        $('#submit\\.add-to-cart').before("<img id='addToCartMM' style='margin: 10px 0;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
        targetNode = document.getElementById('dp-container');
        if (targetNode) {
            callback = function (mutationsList, observer) {
                for (let mutation of mutationsList) {
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
    }
    else if (window.location.toString().includes('.ebay.')) {
        // $('#binBtn_btn').after("<img id='addToCartMM' style='display: flex; width:240px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
        ($('.watchListCmp') || $('#binBtn_btn')).after("<img id='addToCartMM' style='display: flex; width:240px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
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
        targetNode = document.getElementById('root');
        if (targetNode) {
            callback = function (mutationsList, observer) {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        if ($('#addToCartMM').length === 0) {
                            if ($('button[data-track-value="Add-To-Cart"]').length > 0) {
                                location.reload();
                            }
                            // $('button[data-track-value="Add-To-Cart"]').after("<img id='addToCartMM' style='display: flex; width:270px; height: 50px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
                        }
                    }
                }
            };
            const observer = new MutationObserver(callback);
            observer.observe(targetNode, config);
        }
    }
    else if (window.location.toString().includes('.ralphlauren.')) {
        $('#add-to-cart').after("<img id='addToCartMM' style='display:flex; width:80%; height: 50px; margin: 10px 0;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
        targetNode = document.getElementById('pdpMain');
        if (targetNode) {
            callback = function (mutationsList, observer) {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        if ($('#addToCartMM').length === 0) {
                            $('#add-to-cart').after("<img id='addToCartMM' style='display: flex; width:80%; height: 50px; margin: 10px 0;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
                        }
                    }
                }
            };
            const observer = new MutationObserver(callback);
            observer.observe(targetNode, config);
        }
    }
    else if (window.location.toString().includes('kkwbeauty')) {
        $('.js-add-to-cart-button').after("<img id='addToCartMM' style='display: flex; width:270px; height: 50px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }
    else if (window.location.toString().includes('walmart')) {
        $('.prod-product-cta-add-to-cart button').after("<img id='addToCartMM' style='display: flex; width:140px; height:40px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }
    else if (window.location.toString().includes('shopdisney')) {
        $('.add-to-cart').after("<img id='addToCartMM' style='display: flex; width:80%; height: 65px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }
    else if (window.location.toString().includes('.boohoo.')) {
        $('.product-add-to-cart #add-to-cart').after("<img id='addToCartMM' style='display: flex; width:350px; height: 70px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
        targetNode = document.getElementById('pdpMain');
        if (targetNode) {
            callback = function (mutationsList) {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        if ($('#addToCartMM').length === 0) {
                            $('.product-add-to-cart #add-to-cart').after("<img id='addToCartMM' style='display: flex; width:350px; height: 70px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
                        }
                    }
                }
            };
            const observer = new MutationObserver(callback);
            observer.observe(targetNode, config);
        }
    }
    else if (window.location.toString().includes('modaoperandi')) {
        $('.add_to_bag').before("<img id='addToCartMM' style='display: flex; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
        targetNode = document.getElementById('wraps-body-content');
        if (targetNode) {
            callback = function (mutationsList) {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        if ($('#addToCartMM').length === 0) {
                            $('.add_to_bag').before("<img id='addToCartMM' style='display: flex; width:350px; height: 70px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
                        }
                    }
                }
            };
            const observer = new MutationObserver(callback);
            observer.observe(targetNode, config);
        }
    }
    else if (window.location.toString().includes('missguided')) {
        $('#add-to-cart').before("<img id='addToCartMM' style='display: flex; width:80%; height: 65px; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }
    // else if (window.location.toString().includes('shein.')) {
    //     $('.goodsd-btn button').first().before("<img id='addToCartMM' style='display: flex; width:70%; height: 65px; margin: 10px 0;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    // }
    else if (window.location.toString().includes('.hm.')) {
        $('.product-button-wrapper').first().before("<img id='addToCartMM' style='display: flex;margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
    }
    else if (window.location.toString().includes('.fabletics.')) {
        $('.product-cta').first().before("<img id='addToCartMM' style='display: flex;margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
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
        window.location.toString().includes('shopdisney') ||
        window.location.toString().includes('.boohoo.') ||
        window.location.toString().includes('modaoperandi') ||
        window.location.toString().includes('missguided') ||
        window.location.toString().includes('bestbuy') ||
        // window.location.toString().includes('shein.') ||
        window.location.toString().includes('.hm.') ||
        window.location.toString().includes('.fabletics.')
    ) {
        // add-to-cart button for bestbuy
        $('.v-border-top .fulfillment-add-to-cart-button').before("<img id='addToCartMM' style='display: flex; margin: 10px auto;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");

        $.get('chrome-extension://' + chrome.runtime.id + '/html/top-bar.html', function (data) {
            $('body').prepend(data);
        });
        var pageMaskElement = '<div id="page-mask" style="position:fixed;left: 0;right: 0;bottom: 0;top: 0;background-color: rgba(0,0,0,0.6);display: none; z-index: 99999;"></div>'
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
                fetchCategory();
                fetchRetailers();
                // $("#retailerWrapper").lazyScrollLoading({isDefaultLazyImageMode :true });
                $('div[data-browse-component=ATCButton]').before("<img id='addToCartMM' style='margin: 10px 0;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
                $('.magnify').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Carts/magnify-top.png');
                $('.setting').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Carts/setting-top.png');
            }, 200)
        });

        $('#viewCartIcon').ready(function () {
            var cartIcon = 'chrome-extension://' + chrome.runtime.id + '/images/Carts/cartIcon.png';
            var userIcon = 'chrome-extension://' + chrome.runtime.id + '/images/Carts/userIcon.png';
            setTimeout(function () {
                $('#viewCartIcon').attr('src', cartIcon);
                $('#favouriteIcon').attr('src', favouriteIcon);
                $('#userIcon').attr('src', userIcon);
                chrome.storage.local.get(['cartDetails'], function (result) {
                    var notificationProducts = JSON.parse(result.cartDetails);
                    if (notificationProducts.length > 0) {
                        $('.companyNotification').css('display', 'flex');
                        var tempCount = 0;
                        for (i = 0; i < notificationProducts.length; i++) {
                            tempCount = tempCount + notificationProducts[i].itemCount
                        }
                        $('.companyNotification').text(tempCount);
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
                            chrome.storage.local.get(['ProductCurrencySymbol'], function (result) {
                                $('#currency').text(result.ProductCurrencySymbol);
                            });
                            for (let i = 0; i < cartProducts.length; i++) {
                                $('#checkOut').css('display', 'flex');
                                $('#emptyCartMM').css('display', 'none');
                                $('#viewCartModal').css('height', 'calc(100vh - 65px)');
                                var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>" + cartProducts[i].productStore + ".com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px; word-break: break-all;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div><div style='user-select: none; display: flex; margin-top: 15px; box-shadow: 0 4px 8px 0rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProducts[i].productImage + "'/></div><div id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</div></div></div></div>";
                                $('#cartDetailSection').prepend(element);
                            }
                        }
                    });
                    $('#viewCart-continueShopping').off('click');
                    $('#viewCart-continueShopping').on('click', function () {
                        $('#viewCartModal').css('display', 'none');
                        $('#page-mask').css('display', 'none');
                    });
                    $('.go-shipping').off('click');
                    $('.go-shipping').on('click', function () {
                        $('.companyNotification').css('display', 'none');
                        $('#viewCartModal').css('display', 'none');
                        $('#page-mask').css('display', 'none');
                        goCheckout();
                    });
                    $('#favWishList').off('click');
                    $('#favWishList').on('click', function () {
                        goFavorite();
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
                || ($('h2[itemprop=name]').text() !== '')
                || ($('.prod-ProductTitle').text() !== '')
                || ($('.product-detail__content-summary .product-name').text() !== '') //shopdisney
                || ($('.product-detail .product-name').text() !== '') //boohoo
                || ($('.product-essential__title .product-essential__name').text() !== '') //missguided
                || ($('.product_description .product_title').text() !== '') //modaoperandi
                || ($('.sku-title h1').text() !== '') //bestbuy
                || ($('.goodsd-right .name').text() !== '') //shein
                || ($('.product-item-headline').text() !== '') //hm
                // || ($('.product-description .pdp-title div').text() !== '') //lululemon
                || ($('.manhattan-detail-heading .product-name[itemprop=name]').text() !== '') //fabletics
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
                            $('.companyNotification').css('display', 'none');
                        });

                        $('#successIcon').attr('src', 'chrome-extension://' + chrome.runtime.id + "/images/Carts/success.png");

                        chrome.storage.local.get(['loggedIn'], function (result) {
                            var product = null;
                            if (result.loggedIn === 'false' || result.loggedIn === undefined) {
                                message = 'Please Login.';
                                showMessage(message);
                            } else {
                                if ($.trim($('#productTitle').text()) !== '') {
                                    product = productAmazon();
                                } else if (($.trim($('#itemTitle').text()) !== '') || ($.trim($('.product-card-wrapper .product-title').text()) !== '')) {
                                    product = productEbay();
                                } else if ($.trim($('#pdp_product_title').text()) !== '') {
                                    product = productNike();
                                } else if ($.trim($('#product-info [itemprop = name]').text()) !== '') {
                                    product = productNova();
                                } else if ($.trim($('.product-name--lg').text()) !== '') {
                                    product = productRevolve();
                                } else if ($('.product-details__title').text() !== '') {
                                    product = productColourPop();
                                } else if ($('.section-title h1').text() !== '') {
                                    product = productCosmetics();
                                } else if ($('.product-view-title').text() !== '') {
                                    product = productPretty();
                                } else if ($('#h1Title').text() !== '') {
                                    product = productForever();
                                } else if ($('#overview span[itemprop=name]').text() !== '') {
                                    product = productSix();
                                } else if ($('#product-detail-section .product-name').text() !== '') {
                                    product = productRalph();
                                } else if ($('h2[itemprop=name]').text() !== '') {
                                    product = productKkwBeauty();
                                } else if ($('.prod-ProductTitle').text() !== '') {
                                    product = productWalmart();
                                } else if ($('.product-detail__content-summary .product-name').text() !== '') {
                                    product = productShopDisney();
                                }  else if ($('.product-detail .product-name').text() !== '') {
                                    product = productBoohoo();
                                } else if ($('.product_description .product_title').text() !== '') {
                                    product = productModaoperandi();
                                } else if ($('.product-essential__title .product-essential__name').text() !== '') {
                                    product = productMissguided();
                                } else if ($('.sku-title h1').text() !== '') {
                                    product = productBestbuy();
                                } else if ($('.goodsd-right .name').text() !== '') {
                                    product = productShein();
                                } else if ($('.product-item-headline').text() !== '') {
                                    product = productHm();
                                } else if ($('.manhattan-detail-heading .product-name[itemprop=name]').text() !== '') {
                                    product = productFabletics();
                                }
                                else {
                                    message = 'Please select a product.';
                                    showMessage(message);
                                }
                                if (product) {
                                    addProduct(product.currencySymbol, product.price, product.title, product.imageUrl, product.color, product.size, product.count, product.available, product.store, product.width, product.isImageAvailable);
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
