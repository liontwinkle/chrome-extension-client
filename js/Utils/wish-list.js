// Link to bigcommerce wish list page.

const favorite = () => {
    chrome.storage.local.set({lastPageCompany: location.href}, function () {
    });
    chrome.runtime.sendMessage({
        greeting: 'updateLastPageCompany',
        data: location.href
    }, function (response) {
    });
    chrome.storage.local.get(['favCartDetails'], function (result) {
        var favorites = JSON.parse(result.favCartDetails);
        chrome.runtime.sendMessage({
            greeting: 'sendShoppingCartDetails',
            data: favorites
        }, function (response) {
        });
        chrome.storage.local.get(['accessToken'], function (result) {
            var accessToken = 'Bearer ' + result.accessToken;
            $.ajax({
                // url: 'https://cors-anywhere.herokuapp.com/https://2908cd1b.ngrok.io/api/checkout/saveFavorite',
                url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/checkout/save-favorite',
                type: 'post',
                dataType: 'json',
                data: {
                    'favorite': favorites
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', accessToken);
                },
                success: function (data) {
                    if (data) {
                        window.open('https://lets-go-ship-new.mybigcommerce.com/wishlist.php');
                    }
                }
            });
        });
    });
}
