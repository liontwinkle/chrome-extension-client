// The checkout function, link to bigCommerce cart page

const goCheckout = () => {
    chrome.storage.local.set({lastPageCompany: location.href}, function () {
    });
    chrome.runtime.sendMessage({
        greeting: 'updateLastPageCompany',
        data: location.href
    }, function (response) {
    });
    chrome.storage.local.get(['cartDetails'], function (result) {
        var products = JSON.parse(result.cartDetails);
        console.log('>>>>>>>>product', products);
        chrome.runtime.sendMessage({
            greeting: 'sendShoppingCartDetails',
            data: products
        }, function (response) {
        });
        chrome.storage.local.get(['accessToken'], function (result) {
            var accessToken = 'Bearer ' + result.accessToken;
            $.ajax({
                // url: 'https://cors-anywhere.herokuapp.com/https://2908cd1b.ngrok.io/api/checkout/saveProduct',
                url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/checkout/save-product',
                type: 'post',
                dataType: 'json',
                data: {
                    'product': products
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', accessToken);
                },
                success: function (data) {
                    if (data) {
                        chrome.storage.local.remove(['cartDetails'], function (result) {
                        });
                        window.open(data.status);
                    }
                }
            });
        });
    });
};
