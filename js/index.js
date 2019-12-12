$(window).on('load', function () {
    fetchCategories();
    fetchRetailers();
    var targetNode = null;
    var callback = null;
    const config = {attributes: true, childList: true, subtree: true};
    var retailers = localStorage.getItem('retailers');

    console.log('all retailers', JSON.parse(retailers));
    const currentRetailer = JSON.parse(retailers).find(item => window.location.toString().includes('.' + item.name + '.'));
    console.log('current retailer', currentRetailer);
    if (currentRetailer.selectors[0].cart_button) {
        console.log('current cart_button', currentRetailer.selectors[0].cart_button);
        eval(currentRetailer.selectors[0].cart_button).before("<img id='addToCartMM' style='margin: 10px 0;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
        if (currentRetailer.selectors[0].cart_wrapper) {
            targetNode = document.getElementById(currentRetailer.selectors[0].cart_wrapper);
            if (targetNode) {
                callback = function (mutationsList) {
                    for (let mutation of mutationsList) {
                        if (mutation.type === 'childList') {
                            if ($('#addToCartMM').length === 0) {
                                eval(currentRetailer.selectors[0].cart_button).before("<img id='addToCartMM' style='margin: 10px 0;' src='chrome-extension://" + chrome.runtime.id + "/images/Carts/add-to-cart.png'>");
                            }
                        }
                    }
                };
                const observer = new MutationObserver(callback);
                observer.observe(targetNode, config);
            }
        }
    }
    if (JSON.parse(retailers).some(item => window.location.toString().includes('.' + item.name + '.'))) {
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

                $('.magnify').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Carts/magnify.png');
                $('.setting').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Carts/setting.png');
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
            if ($(currentRetailer.selectors[0].title).text() !== '') {
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
                                }
                                else {
                                    const currentRetailerTitle = JSON.parse(retailers).find(item => window.location.toString().includes('.' + item.name + '.'));
                                    if (currentRetailerTitle) {
                                        console.log('currentRetailerTitle', currentRetailerTitle);
                                        if ($(currentRetailerTitle.selectors[0].title).text() !== '') {
                                            console.log('currentRetailerTitle Name', currentRetailerTitle.name);
                                            product = productAdd(currentRetailerTitle.name);
                                        }
                                    } else {
                                        message = 'Please select a product.';
                                        showMessage(message);
                                    }
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
