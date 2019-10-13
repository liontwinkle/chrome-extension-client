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
                    $.getScript('WishList/amazon.js');
                    wishAmazon();
                } else if ($.trim($('#pdp_product_title').text()) !== '') {
                    $.getScript('WishList/nike.js');
                    wishNike();
                } else if ($.trim($('#itemTitle').text()) !== '') {
                    $.getScript('WishList/ebay.js');
                    wishEbay();
                } else if ($.trim($('#product-info [itemprop = name]').text()) !== '') {
                    $.getScript('WishList/nova.js');
                    wishNova();
                } else if ($.trim($('.product-name--lg').text()) !== '') {
                    $.getScript('WishList/revolve.js');
                    wishRevolve();
                } else if ($('.product-details__title').text() !== '') {
                    $.getScript('WishList/colourPop.js');
                    wishColourPop();
                } else if ($('.section-title h1').text() !== '') {
                    $.getScript('WishList/cosmetics.js');
                    wishCosmetics();
                } else if ($('.product-view-title').text() !== '') {
                    $.getScript('WishList/pretty.js');
                    wishPretty();
                } else if ($('#h1Title').text() !== '') {
                    $.getScript('WishList/forever.js');
                    wishForever();
                } else if ($('#overview .rr').text() !== '') {
                    $.getScript('WishList/six.js');
                    wishSix();
                } else if ($('#product-detail-section .product-name').text() !== '') {
                    $.getScript('WishList/ralph.js');
                    wishRalph();
                } else if ($('.P__info .P__title').text() !== '') {
                    $.getScript('WishList/kkwbeauty.js');
                    wishKkwBeauty();
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

