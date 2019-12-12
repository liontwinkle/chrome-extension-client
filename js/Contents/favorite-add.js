$('#favouriteCart').ready(function () {
    $('body').on('click', '#favouriteCart', function () {
        $('#addToCart-Ok').on('click', function () {
            $('#page-mask').css('display', 'none');
            $('#addToCartModal').hide();
        });
        var message  = null;
        var retailers = localStorage.getItem('retailers');
        chrome.storage.local.get(['loggedIn'], function (result) {
            var wish = null;
            if (result.loggedIn === 'false' || result.loggedIn === undefined) {
                message = 'Please Login.';
                showMessage(message);
            } else {
                if ($.trim($('#productTitle').text()) !== '') {
                    wish = productAmazon();
                }
                else {
                    const currentRetailerTitle = JSON.parse(retailers).find(item => window.location.toString().includes('.' + item.name + '.'));
                    if (currentRetailerTitle) {
                        console.log('currentRetailerTitle', currentRetailerTitle);
                        if ($(currentRetailerTitle.selectors[0].title).text() !== '') {
                            console.log('currentRetailerTitle Name', currentRetailerTitle.name);
                            wish = productAdd(currentRetailerTitle.name);
                        }
                    } else {
                        message = 'Please select a product';
                        showMessage(message);
                    }
                }
                if (wish) {
                    addFavorite(wish.currencySymbol, wish.price, wish.title, wish.imageUrl, wish.color, wish.size, wish.count, wish.available, wish.store, wish.width, wish.isImageAvailable);
                }
            }
        });
    });
});

