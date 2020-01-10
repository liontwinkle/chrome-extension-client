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
            // url: 'https://cors-anywhere.herokuapp.com/https://37db1bf9.ngrok.io/api/products',
            url: 'https://cors-anywhere.herokuapp.com/http://api.letsgoship.com/api/products',
            type: 'post',
            dataType: 'json',
            data: {
                'products': product
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', accessToken);
            },
            success: function (data) {
                productStorage(data.products);
            },
            error: function (data) {
                console.log('error', data);
            }
        });
    });
};
