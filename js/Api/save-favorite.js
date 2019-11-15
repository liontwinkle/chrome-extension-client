const saveFavorite = () => {
    chrome.storage.local.get(['productTwo', 'accessToken'], function (result) {
        var favorite = JSON.parse(result.productTwo);
        var accessToken = 'Bearer ' + result.accessToken;
        $.ajax({
            // url: 'https://cors-anywhere.herokuapp.com/https://a657b664.ngrok.io/api/favorite',
            url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/favorite',
            type: 'post',
            dataType: 'json',
            data: {
                'favorite': favorite
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', accessToken);
            },
            success: function (data) {
                favoriteStorage(data.favorite)
            },
            error: function (data) {
                console.log('error', data)
            }
        });
    });
};
