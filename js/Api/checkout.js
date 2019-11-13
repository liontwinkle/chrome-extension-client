// The checkout function, link to bigCommerce cart page

const goCheckout = () => {
    chrome.storage.local.get(['cartDetails', 'accessToken'], function (result) {
        var products = JSON.parse(result.cartDetails).map(product => ({
            productId: product.productId,
            productCount: product.productCount
        }));
        console.log('products', products);
        if (products.length > 0) {
            chrome.runtime.sendMessage({
                greeting: 'sendShoppingCartDetails',
                data: products
            }, function (response) {
            });
            var loaderElement = '<div id="page-mask-custom" style="position:fixed;left : 0;right: 0;bottom: 0;top: 0;background-color: rgba(0,0,0,0.6);display: flex; justify-content: center; align-items: center; z-index: 99999;"><div class="loader-custom"></div></div>';
            $('body').append(loaderElement);
            var accessToken = 'Bearer ' + result.accessToken;
            $.ajax({
                url: 'https://cors-anywhere.herokuapp.com/https://c1e97312.ngrok.io/api/checkout-url',
                // url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/checkout-url',
                type: 'post',
                dataType: 'json',
                data: {
                    'products': products
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', accessToken);
                },
                error: function (data) {
                    $('#page-mask-custom').remove();
                    var message = 'The network problem, please try again';
                    if (data.status === 'unauthorized') {
                        showMessage(message);
                        chrome.runtime.sendMessage({
                            notifications: 'logOut',
                            message: localStorage.getItem('details')
                        }, function (response) {
                        });
                        localStorage.setItem('loggedIn', JSON.stringify(false));
                        chrome.storage.local.set({'loggedIn': JSON.stringify(false)}, function () {
                        });
                    }
                },
                success: function (data) {
                    if (data) {
                        chrome.storage.local.remove(['cartDetails'], function (result) {
                        });
                        $('#page-mask-custom').remove();
                        window.open(data.status);
                    }
                }
            });
        }
    });
};
