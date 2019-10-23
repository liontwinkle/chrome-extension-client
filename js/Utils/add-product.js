const addProductOne = () => {

    chrome.storage.local.get(['productOne', 'accessToken'], function (result) {
        var product = JSON.parse(result.productOne);
        chrome.runtime.sendMessage({
            greeting: 'sendShoppingCartDetails',
            data: product
        }, function (response) {
        });
        var accessToken = 'Bearer ' + result.accessToken;
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://2d0c4f6c.ngrok.io/api/save-product',
            // url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/save-product',
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
            }
        });
    });
};
