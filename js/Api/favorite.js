// Link to bigcommerce wish list page.

const goFavorite = () => {

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
                url: 'https://cors-anywhere.herokuapp.com/https://c1e97312.ngrok.io/api/favorite-url',
                // url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/favorite-url',
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
};
