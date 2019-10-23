// The checkout function, link to bigCommerce cart page

const goCheckout = () => {
    // chrome.storage.local.set({lastPageCompany: location.href}, function () {
    // });
    // chrome.runtime.sendMessage({
    //     greeting: 'updateLastPageCompany',
    //     data: location.href
    // }, function (response) {
    // });
    chrome.storage.local.get(['cartDetails', 'accessToken'], function (result) {
        var products = JSON.parse(result.cartDetails);
        chrome.runtime.sendMessage({
            greeting: 'sendShoppingCartDetails',
            data: products
        }, function (response) {
        });
        var accessToken = 'Bearer ' + result.accessToken;
            $.ajax({
                url: 'https://cors-anywhere.herokuapp.com/https://2d0c4f6c.ngrok.io/api/checkout/save-product',
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
                    if (data) {
                        // chrome.storage.local.remove(['cartDetails'], function (result) {
                        // });
                        window.open(data.status);
                    }
                }
            });
    });
};
