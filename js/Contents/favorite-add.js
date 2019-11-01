$('#favouriteCart').ready(function () {

    $('body').on('click', '#favouriteCart', function () {

        $('#addToCart-Ok').on('click', function () {
            $('#page-mask').css('display', 'none');
            $('#addToCartModal').hide();
        });
        var message  = null;
        chrome.storage.local.get(['loggedIn'], function (result) {
            var wish = null;
            if (result.loggedIn === 'false' || result.loggedIn === undefined) {
                message = 'Please Login.';
                showMessage(message);
            } else {
                if ($.trim($('#productTitle').text()) !== '') {
                    wish = productAmazon();
                } else if ($.trim($('#pdp_product_title').text()) !== '') {
                    wish = productNike();
                } else if ($.trim($('#itemTitle').text()) !== '') {
                    wish = productEbay();
                } else if ($.trim($('#product-info [itemprop = name]').text()) !== '') {
                    wish = productNova();
                } else if ($.trim($('.product-name--lg').text()) !== '') {
                    wish = productRevolve();
                } else if ($('.product-details__title').text() !== '') {
                    wish = productColourPop();
                } else if ($('.section-title h1').text() !== '') {
                    wish = productCosmetics();
                } else if ($('.product-view-title').text() !== '') {
                    wish = productPretty();
                } else if ($('#h1Title').text() !== '') {
                    wish = productForever();
                } else if ($('#overview span[itemprop=name]').text() !== '') {
                    wish = productSix();
                } else if ($('#product-detail-section .product-name').text() !== '') {
                    wish = productRalph();
                } else if ($('h2[itemprop=name]').text() !== '') {
                    wish = productKkwBeauty();
                } else if ($('.prod-ProductTitle').text() !== '') {
                    wish = productWalmart();
                } else if ($('.product-detail__content-summary .product-name').text() !== '') {
                    wish = productShopDisney();
                } else if ($('.product-detail .product-name').text() !== '') {
                    wish = productBoohoo();
                } else if ($('.product_description .product_title').text() !== '') {
                    wish = productModaoperandi();
                }
                else {
                    message = 'Please select a product';
                    showMessage(message);
                }
                if (wish) {
                    addWish(wish.currencySymbol, wish.price, wish.title, wish.imageUrl, wish.color, wish.size, wish.count, wish.available, wish.store, wish.width, wish.isImageAvailable);
                }
            }
        });
    });
});

