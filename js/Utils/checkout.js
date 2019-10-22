// The checkout function, link to bigCommerce cart page

const goCheckout = () => {
    chrome.storage.local.set({lastPageCompany: location.href}, function () {
    });
    chrome.runtime.sendMessage({
        greeting: 'updateLastPageCompany',
        data: location.href
    }, function (response) {
    });
    chrome.storage.local.get(['cartDetails', 'accessToken'], function (result) {
        var products = JSON.parse(result.cartDetails);
        console.log('>>>>>>>>product', products);
        chrome.runtime.sendMessage({
            greeting: 'sendShoppingCartDetails',
            data: products
        }, function (response) {
        });
        var count = 0;
        var accessToken = 'Bearer ' + result.accessToken;
        // for (var i = 0; i < products.length; i++) {
            $.ajax({
                url: 'https://cors-anywhere.herokuapp.com/https://44774f5b.ngrok.io/api/checkout/save-product',
                // url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/checkout/save-product',
                type: 'post',
                dataType: 'json',
                data: {
                    'product': products
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', accessToken);
                },
                success: function (data) {
                    // count += 1;
                    // if (data && count === products.length) {
                    if (data) {
                        // chrome.storage.local.remove(['cartDetails'], function (result) {
                        // });
                        window.open(data.status);
                    }
                }
            });
        // }
    });
};
