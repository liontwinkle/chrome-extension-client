const fetchRetailer = (selectedFilters, searchKey) => {
    chrome.storage.local.get(['accessToken'], function (result) {
        var accessToken = 'Bearer ' + result.accessToken;
        var loaderElement = '<div id="retailer-page-mask" style="position:absolute;left : 0;right: 0;bottom: 0;top: 0;background-color: rgba(0,0,0,0.6);display: flex; justify-content: center; align-items: center; z-index: 99999;"><div class="loader-retailer" style="width: 50px; height: 50px;"></div></div>';
        if ( $('#retailer-page-mask').length === 0) {
            $('#go-Modal-content').append(loaderElement);
        }
        if (selectedFilters && selectedFilters.length === 0) selectedFilters = null;
        $.ajax({
            // url: 'https://cors-anywhere.herokuapp.com/https://a657b664.ngrok.io/api/retailers',
            url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/retailers',
            type: 'post',
            dataType: 'json',
            data: {
                'categories': selectedFilters,
                'tags' : searchKey
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', accessToken);
            },
            success: function (data) {
                $('#retailer-page-mask').remove();
                $('#retailerWrapper').empty();
                console.log('retailers', data);
                const retailerItems = data.retailers.reduce((all, item) => `${all}<a href="${item.link}" target="_blank" class="store-item"><img id=${item.name} src="${item.logoUrl}"></a>`, '');
                $('#retailerWrapper').append(retailerItems);
            },
            error: function (data) {
                $('#retailer-page-mask').remove();
                console.log('error', data)
            }
        });
    });
};
