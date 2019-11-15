const fetchCategory = () => {
    chrome.storage.local.get(['accessToken'], function (result) {
        var accessToken = 'Bearer ' + result.accessToken;
        $.ajax({
            // url: 'https://cors-anywhere.herokuapp.com/https://a657b664.ngrok.io/api/categories',
            url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/categories',
            type: 'get',
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', accessToken);
            },
            success: function (data) {
                const categoryItems = data.categories.reduce((all, item) => `${all}<span class="category-item">${item.name}</span>`, '');
                $('#categoryWrapper').append(categoryItems);
                console.log('cat', data.categories)
            },
            error: function (data) {
                console.log('error', data)
            }
        });
    });
};
