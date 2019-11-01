const saveProduct = () => {

    chrome.storage.local.get(['productOne', 'accessToken'], function (result) {
        var product = JSON.parse(result.productOne);
        chrome.runtime.sendMessage({
            greeting: 'sendShoppingCartDetails',
            data: product
        }, function (response) {
        });
        var accessToken = 'Bearer ' + result.accessToken;
        $.ajax({
            // url: 'https://cors-anywhere.herokuapp.com/https://b94f3505.ngrok.io/api/save-product',
            url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/save-product',
            type: 'post',
            dataType: 'json',
            data: {
                'product': product
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', accessToken);
            },
            success: function (data) {
                console.log('productOne success', data);
            },
            error: function (data) {
                console.log('error', data)
            }
        });
    });
};
