$(window).ready(function(){

    function viewCart(cartProductsPostRemove) {
        for (var i = 0; i < cartProductsPostRemove.length; i++) {
            if (cartProductsPostRemove[i].productColor === "" && cartProductsPostRemove[i].productSize == "") {
                if (cartProductsPostRemove[i].productPage.slice(12, 14) == 'am') {
                    var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProductsPostRemove[i].productTitle + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProductsPostRemove[i].productPage + "'>From Amazon</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProductsPostRemove[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                } else if (cartProductsPostRemove[i].productPage.slice(12, 14) == 'ni') {
                    var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProductsPostRemove[i].productTitle + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProductsPostRemove[i].productPage + "'>From Nike</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProductsPostRemove[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                } else {
                    var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProductsPostRemove[i].productTitle + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProductsPostRemove[i].productPage + "'>From Ebay</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProductsPostRemove[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                }
            } else if (!cartProductsPostRemove[i].productColor ) {
                if (cartProductsPostRemove[i].productPage.slice(12, 14) == 'am') {
                    var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProductsPostRemove[i].productTitle + "</div><div>Size: " + cartProductsPostRemove[i].productSize + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProductsPostRemove[i].productPage + "'>From Amazon</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProductsPostRemove[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                } else if (cartProductsPostRemove[i].productPage.slice(12, 14) == 'ni') {
                    var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProductsPostRemove[i].productTitle + "</div><div>Size: " + cartProductsPostRemove[i].productSize + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProductsPostRemove[i].productPage + "'>From Nike</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProductsPostRemove[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                } else {
                    var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProductsPostRemove[i].productTitle + "</div><div>Size: " + cartProductsPostRemove[i].productSize + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProductsPostRemove[i].productPage + "'>From Ebay</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProductsPostRemove[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                }
            } else if (!cartProductsPostRemove[i].productSize ) {
                if (cartProductsPostRemove[i].productPage.slice(12, 14) == 'am') {
                    var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProductsPostRemove[i].productTitle + "</div><div>color: " + cartProductsPostRemove[i].productColor + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProductsPostRemove[i].productPage + "'>From Amazon</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProductsPostRemove[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                } else if (cartProductsPostRemove[i].productPage.slice(12, 14) == 'ni') {
                    var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProductsPostRemove[i].productTitle + "</div><div>color: " + cartProductsPostRemove[i].productColor + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProductsPostRemove[i].productPage + "'>From Nike</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProductsPostRemove[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                } else {
                    var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProductsPostRemove[i].productTitle + "</div><div>color: " + cartProductsPostRemove[i].productColor + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProductsPostRemove[i].productPage + "'>From Ebay</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProductsPostRemove[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                }
            } else {
                if (cartProductsPostRemove[i].productPage.slice(12, 14) == 'am') {
                    var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProductsPostRemove[i].productTitle + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: " + cartProductsPostRemove[i].productColor + "</div><div>Size: " + cartProductsPostRemove[i].productSize + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProductsPostRemove[i].productPage + "'>From Amazon</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProductsPostRemove[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                } else if (cartProductsPostRemove[i].productPage.slice(12, 14) == 'ni') {
                    var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProductsPostRemove[i].productTitle + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: " + cartProductsPostRemove[i].productColor + "</div><div>Size: " + cartProductsPostRemove[i].productSize + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProductsPostRemove[i].productPage + "'>From Nike</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProductsPostRemove[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                } else {
                    var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProductsPostRemove[i].productTitle + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: " + cartProductsPostRemove[i].productColor + "</div><div>Size: " + cartProductsPostRemove[i].productSize + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProductsPostRemove[i].productPage + "'>From Ebay</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProductsPostRemove[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                }
            }
            $('#cartDetailSection').prepend(element);
        }
    }
    function goCheckout() {
        chrome.storage.local.set({lastPageCompany: location.href}, function () {});
        chrome.runtime.sendMessage({
            greeting: "updateLastPageCompany",
            data: location.href
        }, function (response) {});
        chrome.storage.local.get(['cartDetails'], function (result) {
            var products = JSON.parse(result.cartDetails);
            chrome.runtime.sendMessage({
                greeting: "sendShoppingCartDetails",
                data: products
            }, function (response) {});
            chrome.storage.local.get(['random_id', 'random_name', 'random_email'], function (result) {
                var random_id = result.random_id;
                var random_name = result.random_name;
                var random_email = result.random_email;
                $.ajax({
                    url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/checkout/saveProduct',
                    type: 'post',
                    dataType: 'json',
                    data: {
                        "product": products,
                        "random_id": random_id,
                        "random_name": random_name,
                        "random_email": random_email
                    },
                    success: function (data) {
                        if (data) {
                            window.open('https://ex.travelcast.us/checkout/' + random_id);
                        }
                    }
                });
            });
        });
    }

    if (window.location.toString().match('^https://www.amazon.com/') || window.location.toString().match('^https://www.nike.com/') || window.location.toString().match('^https://www.ebay.com/')) {
        $.get("chrome-extension://" + chrome.runtime.id + "/html/topbar.html", function (data) {
            $("body").prepend(data);
        });
        var pageMaskElement = '<div id="page-mask" style="position: fixed;left: 0;right: 0;bottom: 0;top: 0;background-color: rgba(0,0,0,0.6);display: none; z-index: 100;"></div>'

        $('body').append(pageMaskElement);
        $('#companyLogo').ready(function () {
            var logo = "chrome-extension://" + chrome.runtime.id + "/images/topbarLogo.png";
            setTimeout(function () {
                $('#companyLogo').attr('src', logo);
                $('#amazon').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/amazon.png");
                $('#ebay').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/ebay.png");
                $('#nike').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/nike.png");
            }, 200)
        });

        $('#viewCartIcon').ready(function () {

            var cartIcon = "chrome-extension://" + chrome.runtime.id + "/images/cartIcon.png";

            setTimeout(function () {
                $('#viewCartIcon').attr('src', cartIcon);
                chrome.storage.local.get(['cartDetails'], function (result) {
                    var notificationProducts = JSON.parse(result.cartDetails);
                    if (notificationProducts.length > 0) {
                        $('#companyNotification').css('display', 'block');
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
                            if (subtotal == 0) {
                                var element = "<div id='emptyCartMM'><hr style='margin-top: 15px; margin-bottom: 20px;'><div>Your Cart is Empty</div></div>"
                                $('#cartDetailSection').prepend(element);
                                $('#checkOut').css('display', 'none');
                                $('#viewCartModal').css('height', '512px');
                            }
                            for (var i = 0; i < cartProducts.length; i++) {
                                if ((!cartProducts[i].productColor && !cartProducts[i].productSize) ||
                                    ((cartProducts[i].productColor == "" || cartProducts[i].productColor === 'null') &&
                                    (cartProducts[i].productSize == "" || cartProducts[i].productSize === 'null' ))) {
                                    $('#checkOut').css('display', 'block');
                                    $('#emptyCartMM').css('display', 'none');
                                    $('#viewCartModal').css('height', '575px');
                                    if (cartProducts[i].productPage.slice(12, 14) == 'am') {
                                        var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProducts[i].productTitle + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProducts[i].productPage + "'>From Amazon</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProducts[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                                    } else if (cartProducts[i].productPage.slice(12, 14) == 'ni') {
                                        var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProducts[i].productTitle + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProducts[i].productPage + "'>From Nike</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProducts[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                                    } else if (cartProducts[i].productPage.slice(12, 14) == 'eb') {
                                        var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProducts[i].productTitle + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProducts[i].productPage + "'>From Ebay</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProducts[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                                    }
                                } else if ((cartProducts[i].productColor == "" || cartProducts[i].productColor === 'null') || !cartProducts[i].productColor) {
                                    $('#checkOut').css('display', 'block');
                                    $('#emptyCartMM').css('display', 'none');
                                    $('#viewCartModal').css('height', '575px');
                                    if (cartProducts[i].productPage.slice(12, 14) == 'am') {
                                        var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProducts[i].productTitle + "</div><div>Size: " + cartProducts[i].productSize + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProducts[i].productPage + "'>From Amazon</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProducts[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                                    } else if (cartProducts[i].productPage.slice(12, 14) == 'ni') {
                                        var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProducts[i].productTitle + "</div><div>Size: " + cartProducts[i].productSize + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProducts[i].productPage + "'>From Nike</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProducts[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                                    } else if (cartProducts[i].productPage.slice(12, 14) == 'eb') {
                                        var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProducts[i].productTitle + "</div><div>Size: " + cartProducts[i].productSize + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProducts[i].productPage + "'>From Ebay</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProducts[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                                    }
                                } else if ((cartProducts[i].productSize == "" || cartProducts[i].productSize === 'null' ) || !cartProducts[i].productSize) {
                                    $('#checkOut').css('display', 'block');
                                    $('#emptyCartMM').css('display', 'none');
                                    $('#viewCartModal').css('height', '575px');
                                    if (cartProducts[i].productPage.slice(12, 14) == 'am') {
                                        var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProducts[i].productTitle + "</div><div>color: " + cartProducts[i].productColor + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProducts[i].productPage + "'>From Amazon</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProducts[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                                    } else if (cartProducts[i].productPage.slice(12, 14) == 'ni') {
                                        var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProducts[i].productTitle + "</div><div>color: " + cartProducts[i].productColor + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProducts[i].productPage + "'>From Nike</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProducts[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                                    } else if (cartProducts[i].productPage.slice(12, 14) == 'eb') {
                                        var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProducts[i].productTitle + "</div><div>color: " + cartProducts[i].productColor + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProducts[i].productPage + "'>From Ebay</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProducts[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                                    }
                                } else {
                                    $('#checkOut').css('display', 'block');
                                    $('#emptyCartMM').css('display', 'none');
                                    $('#viewCartModal').css('height', '575px');
                                    if (cartProducts[i].productPage.slice(12, 14) == 'am') {
                                        var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProducts[i].productTitle + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: " + cartProducts[i].productColor + "</div><div>Size: " + cartProducts[i].productSize + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProducts[i].productPage + "'>From Amazon</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProducts[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                                    }
                                    else if (cartProducts[i].productPage.slice(12, 14) == 'ni') {
                                        var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProducts[i].productTitle + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: " + cartProducts[i].productColor + "</div><div>Size: " + cartProducts[i].productSize + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProducts[i].productPage + "'>From Nike</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProducts[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                                    }
                                    else if (cartProducts[i].productPage.slice(12, 14) == 'eb') {
                                        var element = "<hr style='margin-top: 15px; margin-bottom: 20px;'><div style='height: 225px;'><div style='float: left; width: 100px; height: 100px; margin-top: 5px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/></div><div style='float: right;'><div style='float: left; width: 284px;'><div>Title: " + cartProducts[i].productTitle + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><div>color: " + cartProducts[i].productColor + "</div><div>Size: " + cartProducts[i].productSize + "</div><hr style='margin-top: 5px; margin-bottom: 5px'><a href='" + cartProducts[i].productPage + "'>From Ebay</a><div style='display: block; margin-top: 15px;'><span class='removeItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style='border: 1px solid black; padding: 2px 7px;'>" + cartProducts[i].itemCount + "</span><span class='addItem' style='border: 1px solid black;padding: 2px 10px;background: rgb(220,220,220);cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div>$ " + cartProducts[i].productPrice + "</div><button id='" + i + "' class='removeButton btn btn-outline-secondary' style='margin-top: 110px;'>Remove</button></div></div></div>";
                                    }
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
                        goCheckout();
                    });

                    if ($('#viewCartModal').css('display') === 'block') {
                        $('#viewCartModal').css('display', 'none');
                        $('#page-mask').css('display', 'none');
                    } else {
                        $('#viewCartModal').css('display', 'block');
                        $('#page-mask').css('display', 'block');
                    }
                    $('#addToCartModal').css('display', 'none');
                    e.stopPropagation();
                });
            }, 200)
        });

        $('#cartDetailSection').ready(function () {
            $('body').on('click','.removeItem', function (event) {
                const id = $(this).siblings('.itemCount').attr('id');
                chrome.storage.local.get(['cartDetails'], function (result) {
                    var productList = JSON.parse(result.cartDetails);
                    var count = productList[id].itemCount;
                    count--;
                    if (count > 0) {
                        productList[id].itemCount = count;
                        chrome.storage.local.set({'cartDetails': JSON.stringify(productList)}, function () {                        });
                        chrome.runtime.sendMessage({
                            greeting: "setCartDetails",
                            data: productList
                        }, function (response) {
                        });
                        $(this).siblings('.itemCount').text(count);
                        var oldPrice = productList[id].productPrice;
                        oldPrice = parseFloat(oldPrice);
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
                        var subtotal = 0;
                        subtotal = parseInt(subtotal);
                        for (i = 0; i < productList.length; i++) {
                            subtotal = subtotal + parseFloat(productList[i].productPrice);
                        }
                        subtotal = subtotal.toFixed(2);
                        $('#subtotal').text(subtotal);
                        $('#companyNotification').css('display', 'block');
                        var tempCount = 0;
                        for (i = 0; i < productList.length; i++) {
                            tempCount = tempCount + productList[i].itemCount
                        }
                        $('#companyNotification').text(tempCount);

                        $('#cartDetailSection').empty();

                        chrome.storage.local.get(['cartDetails'], function (result) {
                            var cartProductsPostRemove = JSON.parse(result.cartDetails);
                            viewCart(cartProductsPostRemove);
                        });
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
                        $('#companyNotification').css('display', 'block');
                        var tempCount = 0;
                        for (i = 0; i < productList.length; i++) {
                            tempCount = tempCount + productList[i].itemCount
                        }
                        $('#companyNotification').text(tempCount);
                        if (productList.length == 0) {
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
                        $('#companyNotification').css('display', 'block');
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
                    chrome.storage.local.set({cartDetails: JSON.stringify(productList)}, function () {});
                    chrome.runtime.sendMessage({greeting: "setCartDetails", data: productList}, function (response) {});
                    if (productList.length == 0) {
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
                        $('#companyNotification').css('display', 'block');
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
                $('#page-mask').css('display', 'none');
            }
        });

        $('#addToCartMM').ready(function () {

            if (($.trim($('#productTitle').text()) !== '')
                || ($.trim($('#itemTitle').text()) !== '')
                || ($.trim($('#pdp_product_title').text()) !== '')) {
                $('body').on('click', '#addToCartMM', function () {

                    $('#addToCart-continueShopping').on('click', function () {
                        $('#page-mask').css('display', 'none');
                        $('#addToCartModal').hide();
                    });
                    $('#addToCart-Ok').on('click', function () {
                        $('#page-mask').css('display', 'none');
                        $('#addToCartModal').hide();
                    });
                    $('.go-shipping').off('click');
                    $('.go-shipping').on('click', function () {
                        goCheckout();
                    });
                    $("#addToCartModal").on('click', function (e) {
                        e.stopPropagation();
                    });

                    $('#successIcon').attr('src', "chrome-extension://" + chrome.runtime.id + "/images/success.png");
                    var productDetails = {};
                    if ($.trim($('#productTitle').text()) !== '') {
                        var isLargeValue = $('.price-large').text();
                        var tempProductPrice = "";
                        if( isLargeValue ){
                            var optionValue = $('input[name=BuyboxType]:checked').val();
                            var selClass = "#new-button-price";
                            if( optionValue === 'new'){
                                selClass = "#new-button-price";
                            }else{
                                selClass = "#used-button-price";
                            }
                            tempProductPrice = $(selClass+" .majorValue").text()+"."+$(selClass+" .minorValue").text()
                            console.log(tempProductPrice);
                        }else{
                            tempProductPrice = $('#priceblock_ourprice').text();
                            tempProductPrice = tempProductPrice.replace('$', '');
                        }
                        productDetails = {
                            'productTitle': $.trim($('#productTitle').text()),
                            'productPrice': tempProductPrice,
                            'productImage': $('.a-dynamic-image').attr('src'),
                            'productColor': $.trim($('#variation_color_name').find('.selection').text()),
                            'productPage': location.href,
                            'productSize': $.trim($('#dropdown_selected_size_name').find('.a-dropdown-prompt').text()),
                            'itemCount': 1,
                            'productSKU': location.href
                        }
                    } else if ($.trim($('#pdp_product_title').text()) !== '') {
                        var tempProductPrice = $("[data-test = product-price]").text();
                        tempProductPrice = tempProductPrice.replace('€', '');
                        tempProductPrice = parseInt(tempProductPrice).toFixed(2);
                        var productName = $.trim($('#pdp_product_title').text());
                        var sizeExist = $("input[name=skuAndSize]").val();
                        var sizeTemp = $("input[name=skuAndSize]:checked").val();
                        var size = sizeExist ? ((sizeTemp) ? sizeTemp.split(':')[1] : 'select') : '';
                        var colorExist = $("a[aria-selected=false]").attr('title');
                        var color = colorExist ? ($("a[aria-selected=true]").attr('title')) : null;
                        productDetails = {
                            'productTitle': productName,
                            'productPrice': tempProductPrice,
                            'productImage': $.trim($("[alt^='" + productName + "']").attr('src')),
                            'productColor': color,
                            'productPage': location.href,
                            'productSize': size,
                            'itemCount': 1,
                            'productSKU': location.href
                        };
                    }
                    else if ($.trim($('#itemTitle').text()) !== '') {
                        var tempProductPrice = $.trim($('#prcIsum').html());
                        var regex = /[+-]?\d+(\.\d+)?/g;
                        var tempProductPrice = tempProductPrice.match(regex).map(function (v) {
                            return parseFloat(v);
                        })[0];
                        var productName = $.trim($('#itemTitle').text());
                        var colorExist = $.trim($('#msku-sel-1[name="Color"]').text()) || $.trim($('#msku-sel-1[name="Colors"]').text());
                        var sizeExist = $.trim($('#msku-sel-1[name="Size"]').text()) || $.trim($('#msku-sel-1[name="Modle"]').text());
                        productDetails = {
                            'productTitle': productName,
                            'productPrice': tempProductPrice,
                            'productImage': $.trim($("#icImg").attr('src')),
                            'productColor': colorExist ? ($.trim($('#msku-sel-1[name="Color"] option:selected').text()) || $.trim($('#msku-sel-1[name="Colors"] option:selected').text())) : null,
                            'productPage': location.href,
                            'productSize': sizeExist ? (($.trim($('#msku-sel-1[name="Size"] option:selected').text()) || $.trim($('#msku-sel-1[name="Modle"] option:selected').text()))) : null,
                            'itemCount': 1,
                            'productSKU': location.href
                        }
                    }
                    if ($.trim($('#productTitle').text()) !== '') {
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
                                        chrome.storage.local.set({cartDetails: JSON.stringify(productListPostAdd)}, function () {});
                                        chrome.runtime.sendMessage({
                                            greeting: "setCartDetails",
                                            data: productListPostAdd
                                        }, function (response) {});
                                        $('#companyNotification').css('display', 'block');
                                        var tempCount = 0;
                                        for (j = 0; j < productListPostAdd.length; j++) {
                                            tempCount = tempCount + productListPostAdd[j].itemCount
                                        }
                                        $('#companyNotification').text(tempCount);
                                        $('#page-mask').css('display', 'block');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'block');
                                        $('#addToCartTitle').text($.trim($('#productTitle').text()));
                                        $('#addToCartImage').attr('src', $('.a-dynamic-image').attr('src'));
                                        $('#addToCart-checkOut').css('display', 'block');
                                        $('#addToCartError').css('display', 'none');
                                        $('#addToCart-Ok').css('display', 'none');
                                    }
                                }
                                if (sameProductSKU == false) {
                                    if (productDetails.productSize === "Select") {
                                        $('#page-mask').css('display', 'block');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'none');
                                        $('#addToCartError').css('display', 'block');
                                        $('#addToCartError').text("Please select a product size.");
                                        $('#addToCart-Ok').css('display', 'block');
                                        $('#addToCart-checkOut').css('display', 'none');
                                    } else if (productDetails.productColor === "Select") {
                                        $('#page-mask').css('display', 'block');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'none');
                                        $('#addToCartError').css('display', 'block');
                                        $('#addToCartError').text("Please select a product color.");
                                        $('#addToCart-Ok').css('display', 'block');
                                        $('#addToCart-checkOut').css('display', 'none');
                                    } else if (productDetails.productPrice == '') {
                                        $('#page-mask').css('display', 'block');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'none');
                                        $('#addToCartError').css('display', 'block');
                                        $('#addToCartError').text("Please select a product with price.");
                                        $('#addToCart-Ok').css('display', 'block');
                                        $('#addToCart-checkOut').css('display', 'none');
                                    } else {
                                        chrome.storage.local.get(['cartDetails'], function (result) {
                                            if (result) {
                                                var cartDetails = JSON.parse(result.cartDetails);
                                                cartDetails.push(productDetails);
                                                chrome.storage.local.set({cartDetails: JSON.stringify(cartDetails)}, function () {});
                                                chrome.runtime.sendMessage({
                                                    greeting: "setCartDetails",
                                                    data: cartDetails
                                                }, function (response) {});
                                                var subtotal = 0;
                                                subtotal = parseInt(subtotal)
                                                for (k = 0; k < cartDetails.length; k++) {
                                                    subtotal = subtotal + parseFloat(cartDetails[k].productPrice)
                                                }
                                                subtotal = subtotal.toFixed(2);
                                                $('#subtotal').text(subtotal);
                                                $('#companyNotification').css('display', 'block');
                                                var tempCount = 0;
                                                for (l = 0; l < cartDetails.length; l++) {
                                                    tempCount = tempCount + cartDetails[l].itemCount
                                                }
                                                $('#companyNotification').text(tempCount);
                                                $('#page-mask').css('display', 'block');
                                                $('#addToCartModal').css('display', 'block');
                                                $('#addToCartProductDetail').css('display', 'block');
                                                $('#addToCartTitle').text($.trim($('#productTitle').text()));
                                                $('#addToCartImage').attr('src', $('.a-dynamic-image').attr('src'));
                                                $('#addToCart-Ok').css('display', 'none');
                                                $('#addToCart-checkOut').css('display', 'block');
                                                $('#addToCartError').css('display', 'none')
                                            }
                                        });
                                    }
                                }
                            }
                            else {
                                if (productDetails.productSize === "Select") {
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $('#addToCartError').text("Please select a product size.");
                                    $('#addToCart-Ok').css('display', 'block');
                                    $('#addToCart-checkOut').css('display', 'none');
                                } else if (productDetails.productColor === "Select") {
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $('#addToCartError').text("Please select a product color.");
                                    $('#addToCart-Ok').css('display', 'block');
                                    $('#addToCart-checkOut').css('display', 'none');
                                } else if (productDetails.productPrice == '') {
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $('#addToCartError').text("Please select a product with price.");
                                    $('#addToCart-Ok').css('display', 'block');
                                    $('#addToCart-checkOut').css('display', 'none');
                                } else {
                                    var cartDetails = [];
                                    cartDetails.push(productDetails);
                                    chrome.storage.local.set({cartDetails: JSON.stringify(cartDetails)}, function () {});
                                    chrome.storage.local.get(['cartDetails'], function (result) {});
                                    chrome.runtime.sendMessage({
                                        greeting: "setCartDetails",
                                        data: cartDetails
                                    }, function (response) {});
                                    $('#companyNotification').css('display', 'block');
                                    $('#companyNotification').text(cartDetails.length);
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'block');
                                    $('#addToCartTitle').text($.trim($('#productTitle').text()));
                                    $('#addToCartImage').attr('src', $('.a-dynamic-image').attr('src'));
                                    $('#addToCart-checkOut').css('display', 'block');
                                }
                            }
                        })
                    }
                    else if (($.trim($('#pdp_product_title').text()) !== '')) {
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
                                        subtotal = parseInt(subtotal)
                                        for (a = 0; a < productListPostAdd.length; a++) {
                                            subtotal = subtotal + parseFloat(productListPostAdd[a].productPrice)
                                        }
                                        $('#subtotal').text(subtotal);
                                        chrome.storage.local.set({cartDetails: JSON.stringify(productListPostAdd)}, function () {});
                                        chrome.runtime.sendMessage({
                                            greeting: "setCartDetails",
                                            data: productListPostAdd
                                        }, function (response) {});
                                        $('#companyNotification').css('display', 'block');
                                        var tempCount = 0;
                                        for (j = 0; j < productListPostAdd.length; j++) {
                                            tempCount = tempCount + productListPostAdd[j].itemCount
                                        }
                                        $('#companyNotification').text(tempCount);
                                        $('#page-mask').css('display', 'block');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'block');
                                        $('#addToCartTitle').text($.trim($('#pdp_product_title').text()));
                                        // $('#addToCartImage').attr('src', $.trim($("[alt^='" + productName + "']").attr('src')));
                                        $('#addToCartImage').attr('src', $('.a-dynamic-image').attr('src'));
                                        $('#addToCart-checkOut').css('display', 'block');
                                        $('#addToCartError').css('display', 'none');
                                        $('#addToCart-Ok').css('display', 'none');
                                    }
                                }
                                if (sameProductSKU == false) {
                                    if (productDetails.productSize === 'select') {
                                        $('#page-mask').css('display', 'block');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'none');
                                        $('#addToCartError').css('display', 'block');
                                        $('#addToCartError').text("Please select a product size.");
                                        $('#addToCart-Ok').css('display', 'block');
                                        $('#addToCart-checkOut').css('display', 'none');
                                    } else if (productDetails.productColor === '') {
                                        $('#page-mask').css('display', 'block');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'none');
                                        $('#addToCartError').css('display', 'block');
                                        $('#addToCartError').text("Please select a product color.");
                                        $('#addToCart-Ok').css('display', 'block');
                                        $('#addToCart-checkOut').css('display', 'none');
                                    } else if (productDetails.productPrice === '') {
                                        $('#page-mask').css('display', 'block');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'none');
                                        $('#addToCartError').css('display', 'block');
                                        $('#addToCartError').text("Please select a product with price.");
                                        $('#addToCart-Ok').css('display', 'block');
                                        $('#addToCart-checkOut').css('display', 'none');
                                    } else {
                                        chrome.storage.local.get(['cartDetails'], function (result) {
                                            if (result) {
                                                var cartDetails = JSON.parse(result.cartDetails);
                                                cartDetails.push(productDetails);
                                                chrome.storage.local.set({cartDetails: JSON.stringify(cartDetails)}, function () {});
                                                chrome.runtime.sendMessage({
                                                    greeting: "setCartDetails",
                                                    data: cartDetails
                                                }, function (response) {});
                                                var subtotal = 0;
                                                subtotal = parseInt(subtotal);
                                                for (k = 0; k < cartDetails.length; k++) {
                                                    subtotal = subtotal + parseFloat(cartDetails[k].productPrice);
                                                }
                                                subtotal = subtotal.toFixed(2);
                                                $('#subtotal').text(subtotal);
                                                $('#companyNotification').css('display', 'block');
                                                var tempCount = 0;
                                                for (l = 0; l < cartDetails.length; l++) {
                                                    tempCount = tempCount + cartDetails[l].itemCount
                                                }
                                                $('#companyNotification').text(tempCount);
                                                $('#page-mask').css('display', 'block');
                                                $('#addToCartModal').css('display', 'block');
                                                $('#addToCartProductDetail').css('display', 'block');
                                                $('#addToCartTitle').text($.trim($('#pdp_product_title').text()));
                                                $('#addToCartImage').attr('src', $('.a-dynamic-image').attr('src'));
                                                // $('#addToCartImage').attr('src', $.trim($("[alt^='" + productName + "']").attr('src')));
                                                $('#addToCart-Ok').css('display', 'none');
                                                $('#addToCart-checkOut').css('display', 'block');
                                                $('#addToCartError').css('display', 'none')
                                            }
                                        });
                                    }
                                }
                            }
                            else {
                                if (productDetails.productSize === 'select') {
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $('#addToCartError').text("Please select a product size.");
                                    $('#addToCart-Ok').css('display', 'block');
                                    $('#addToCart-checkOut').css('display', 'none');
                                } else if (productDetails.productColor === '') {
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $('#addToCartError').text("Please select a product color.");
                                    $('#addToCart-Ok').css('display', 'block');
                                    $('#addToCart-checkOut').css('display', 'none');
                                } else if (productDetails.productPrice === '') {
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $('#addToCartError').text("Please select a product with price.");
                                    $('#addToCart-Ok').css('display', 'block');
                                    $('#addToCart-checkOut').css('display', 'none');
                                } else {
                                    var cartDetails = [];
                                    cartDetails.push(productDetails);
                                    chrome.storage.local.set({cartDetails: JSON.stringify(cartDetails)}, function () {});
                                    chrome.storage.local.get(['cartDetails'], function (result) {});
                                    chrome.runtime.sendMessage({
                                        greeting: "setCartDetails",
                                        data: cartDetails
                                    }, function (response) {});
                                    $('#companyNotification').css('display', 'block');
                                    $('#companyNotification').text(cartDetails.length);
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'block');
                                    $('#addToCartTitle').text($.trim($('#pdp_product_title').text()));
                                    $('#addToCartImage').attr('src', $('.a-dynamic-image').attr('src'));
                                    // $('#addToCartImage').attr('src', $.trim($("[alt^='" + productName + "']").attr('src')));
                                    $('#addToCart-checkOut').css('display', 'block');
                                }
                            }
                        })
                    }
                    else if (($.trim($('#itemTitle').text()) !== '')) {
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
                                        chrome.storage.local.set({cartDetails: JSON.stringify(productListPostAdd)}, function () {});
                                        chrome.runtime.sendMessage({
                                            greeting: "setCartDetails",
                                            data: productListPostAdd
                                        }, function (response) {});
                                        $('#companyNotification').css('display', 'block');
                                        var tempCount = 0;
                                        for (j = 0; j < productListPostAdd.length; j++) {
                                            tempCount = tempCount + productListPostAdd[j].itemCount
                                        }
                                        $('#companyNotification').text(tempCount);
                                        $('#page-mask').css('display', 'block');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'block');
                                        $('#addToCartTitle').text($.trim($('#itemTitle').text()));
                                        $('#addToCartImage').attr('src', $.trim($("#icImg").attr('src')));
                                        $('#addToCart-checkOut').css('display', 'block');
                                        $('#addToCartError').css('display', 'none');
                                        $('#addToCart-Ok').css('display', 'none');
                                    }
                                }
                                if (sameProductSKU == false) {
                                    if (productDetails.productSize === '' || productDetails.productSize === '- Select -') {
                                        $('#page-mask').css('display', 'block');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'none');
                                        $('#addToCartError').css('display', 'block');
                                        $('#addToCartError').text("Please select a product size.");
                                        $('#addToCart-Ok').css('display', 'block');
                                        $('#addToCart-checkOut').css('display', 'none');
                                    } else if (productDetails.productColor === '' || productDetails.productColor === '- Select -') {
                                        $('#page-mask').css('display', 'block');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'none');
                                        $('#addToCartError').css('display', 'block');
                                        $('#addToCartError').text("Please select a product color.");
                                        $('#addToCart-Ok').css('display', 'block');
                                        $('#addToCart-checkOut').css('display', 'none');
                                    } else if (productDetails.productPrice === '') {
                                        $('#page-mask').css('display', 'block');
                                        $('#addToCartModal').css('display', 'block');
                                        $('#addToCartProductDetail').css('display', 'none');
                                        $('#addToCartError').css('display', 'block');
                                        $('#addToCartError').text("Please select a product with price.");
                                        $('#addToCart-Ok').css('display', 'block');
                                        $('#addToCart-checkOut').css('display', 'none');
                                    } else {
                                        chrome.storage.local.get(['cartDetails'], function (result) {
                                            if (result) {
                                                var cartDetails = JSON.parse(result.cartDetails);
                                                cartDetails.push(productDetails);
                                                chrome.storage.local.set({cartDetails: JSON.stringify(cartDetails)}, function () {});
                                                chrome.runtime.sendMessage({
                                                    greeting: "setCartDetails",
                                                    data: cartDetails
                                                }, function (response) {});
                                                var subtotal = 0;
                                                subtotal = parseInt(subtotal);
                                                for (k = 0; k < cartDetails.length; k++) {
                                                    subtotal = subtotal + parseFloat(cartDetails[k].productPrice)
                                                }
                                                subtotal = subtotal.toFixed(2);
                                                $('#subtotal').text(subtotal);
                                                $('#companyNotification').css('display', 'block');
                                                var tempCount = 0;
                                                for (l = 0; l < cartDetails.length; l++) {
                                                    tempCount = tempCount + cartDetails[l].itemCount
                                                }
                                                $('#companyNotification').text(tempCount);
                                                $('#page-mask').css('display', 'block');
                                                $('#addToCartModal').css('display', 'block');
                                                $('#addToCartProductDetail').css('display', 'block');
                                                $('#addToCartTitle').text($.trim($('#itemTitle').text()));
                                                $('#addToCartImage').attr('src', $.trim($("#icImg").attr('src')));
                                                $('#addToCart-Ok').css('display', 'none');
                                                $('#addToCart-checkOut').css('display', 'block');
                                                $('#addToCartError').css('display', 'none')
                                            }
                                        });
                                    }
                                }
                            }
                            else {
                                if (productDetails.productSize === "- Select -") {
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $('#addToCartError').text("Please select a product size.");
                                    $('#addToCart-Ok').css('display', 'block');
                                    $('#addToCart-checkOut').css('display', 'none');
                                } else if (productDetails.productColor === "- Select -") {
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $('#addToCartError').text("Please select a product color.");
                                    $('#addToCart-Ok').css('display', 'block');
                                    $('#addToCart-checkOut').css('display', 'none');
                                } else if (productDetails.productPrice === '') {
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'none');
                                    $('#addToCartError').css('display', 'block');
                                    $('#addToCartError').text("Please select a product with price.");
                                    $('#addToCart-Ok').css('display', 'block');
                                    $('#addToCart-checkOut').css('display', 'none');
                                } else {
                                    var cartDetails = [];
                                    cartDetails.push(productDetails);
                                    chrome.storage.local.set({cartDetails: JSON.stringify(cartDetails)}, function () {});
                                    chrome.storage.local.get(['cartDetails'], function (result) {});
                                    chrome.runtime.sendMessage({
                                        greeting: "setCartDetails",
                                        data: cartDetails
                                    }, function (response) {});
                                    $('#companyNotification').css('display', 'block');
                                    $('#companyNotification').text(cartDetails.length);
                                    $('#page-mask').css('display', 'block');
                                    $('#addToCartModal').css('display', 'block');
                                    $('#addToCartProductDetail').css('display', 'block');
                                    $('#addToCartTitle').text($.trim($('#pdp_product_title').text()));
                                    $('#addToCartImage').attr('src', $.trim($("#icImg").attr('src')));
                                    $('#addToCart-checkOut').css('display', 'block');
                                }
                            }
                        })
                    }
                    else {
                        $('#page-mask').css('display', 'block');
                        $('#addToCartModal').css('display', 'block');
                        $('#addToCartProductDetail').css('display', 'none');
                        $('#addToCartError').css('display', 'block');
                        $('#addToCartError').text("Please select a product.");
                        $('#addToCart-Ok').css('display', 'block');
                        $('#addToCart-checkOut').css('display', 'none');
                    }
                })
            } else {
                $('#addToCartMM').css('opacity', '0.4');
            }
        });
    }
});
