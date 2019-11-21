const deleteFavorite = (productId) => {
    console.log('productId', productId)
    chrome.storage.local.get(['accessToken'], function (result) {
        var accessToken = 'Bearer ' + result.accessToken;
        $.ajax({
            // url: 'https://cors-anywhere.herokuapp.com/https://a657b664.ngrok.io/api/favorite-url',
            url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/favorites',
            type: 'delete',
            dataType: 'json',
            data: {
                'product_id': productId
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', accessToken);
            },
            success: function (data) {
                if (data) {
                    console.log('Delete Favorite successful')
                }
            }
        });
    });
};
