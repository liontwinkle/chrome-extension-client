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
            // url: 'https://cors-anywhere.herokuapp.com/https://d73724f1.ngrok.io/api/checkout',
            url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/checkout',
            type: 'post',
            dataType: 'json',
            data: {
                'product': products
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', accessToken);
            },
            fail: function (data) {
                // if (data.status === 'unauthorized') {
                chrome.runtime.sendMessage({
                    notifications: 'logOut',
                    message: localStorage.getItem('details')
                }, function (response) {
                });
                localStorage.setItem('loggedIn', JSON.stringify(false));
                chrome.storage.local.set({'loggedIn': JSON.stringify(false)}, function () {
                });
                // }
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
