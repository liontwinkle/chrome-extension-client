// The checkout function, link to bigCommerce cart page

const goCheckout = () => {
    chrome.storage.local.get(['cartDetails', 'accessToken'], function (result) {
        var products = JSON.parse(result.cartDetails);
        chrome.runtime.sendMessage({
            greeting: 'sendShoppingCartDetails',
            data: products
        }, function (response) {
        });
        var accessToken = 'Bearer ' + result.accessToken;
            $.ajax({
                url: 'https://cors-anywhere.herokuapp.com/https://2d0c4f6c.ngrok.io/api/checkout',
                // url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/checkout',
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
                        window.open(data.status);
                    }
                }
            });
    });
};
