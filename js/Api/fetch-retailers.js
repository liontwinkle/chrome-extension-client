const fetchRetailers = ( ) => {
    chrome.storage.local.get(['accessToken'], function (result) {
        var accessToken = 'Bearer ' + result.accessToken;
        var loaderElement = '<div id="retailer-page-mask" style="position:absolute;left : 0;right: 0;bottom: 0;top: 0;background-color: rgba(0,0,0,0.6);display: flex; justify-content: center; align-items: center; z-index: 99999;"><div class="loader-retailer" style="width: 50px; height: 50px;"></div></div>';
        if ( $('#retailer-page-mask').length === 0) {
            $('#go-Modal-content').append(loaderElement);
        }
        $.ajax({
            // url: 'https://cors-anywhere.herokuapp.com/https://08dafb32.ngrok.io/api/retailers',
            url: 'https://cors-anywhere.herokuapp.com/http://api.letsgoship.com/api/retailers',
            type: 'post',
            dataType: 'json',
            data: {
                'categories': null,
                'tags' : null,
                'app_type' : 'extension'
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', accessToken);
            },
            success: function (data) {
                $('#retailer-page-mask').remove();
                $('#retailerWrapper').empty();
                console.log('fetch-retailers', data.retailers);
                const retailerItems = data.retailers.reduce((all, item) => `${all}<a href="${item.link}" target="_blank" class="store-item"><img id=${item.name} src="${item.logoUrl}"></a>`, '');
                $('#retailerWrapper').append(retailerItems);
                localStorage.setItem('retailers', JSON.stringify(data.retailers));
            },
            error: function (data) {
                $('#retailer-page-mask').remove();
                console.log('error', data)
            }
        });
    });
};
