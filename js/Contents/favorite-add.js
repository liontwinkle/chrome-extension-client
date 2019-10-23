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
                $('#successIcon').css('display', 'none');
                $('#addToCartProductDetail').css('display', 'none');
                $('#addToCartError').css('display', 'block');
                $('#addToCartError').text('Please Login.');
                $('#addToCart-Ok').css('display', 'block');
                $('#addToCart-Ok').css('width', '270px');
                $('#resetCurrency').css('display', 'none');
                $('#addToCart-checkOut').css('display', 'none');
            } else {
                if ($.trim($('#productTitle').text()) !== '') {
                    wishAmazon();
                } else if ($.trim($('#pdp_product_title').text()) !== '') {
                    wishNike();
                } else if ($.trim($('#itemTitle').text()) !== '') {
                    wishEbay();
                } else if ($.trim($('#product-info [itemprop = name]').text()) !== '') {
                    wishNova();
                } else if ($.trim($('.product-name--lg').text()) !== '') {
                    wishRevolve();
                } else if ($('.product-details__title').text() !== '') {
                    wishColourPop();
                } else if ($('.section-title h1').text() !== '') {
                    wishCosmetics();
                } else if ($('.product-view-title').text() !== '') {
                    wishPretty();
                } else if ($('#h1Title').text() !== '') {
                    wishForever();
                } else if ($('#overview span[itemprop=name]').text() !== '') {
                    wishSix();
                } else if ($('#product-detail-section .product-name').text() !== '') {
                    wishRalph();
                } else if ($('.P__info .P__title').text() !== '') {
                    wishKkwBeauty();
                } else if ($('.prod-ProductTitle').text() !== '') {
                    wishWalmart();
                } else if ($('.product-detail__content-summary .product-name').text() !== '') {
                    wishShopDisney();
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
    });
});

