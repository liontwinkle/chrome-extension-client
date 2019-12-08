var selectedFilters = [];
const fetchRetailer = (selectedFilters, searchKey) => {
    console.log('selectedFilters2222', selectedFilters);
    console.log('searchKey2222', searchKey);
    chrome.storage.local.get(['accessToken'], function (result) {
        var accessToken = 'Bearer ' + result.accessToken;
        var loaderElement = '<div id="retailer-page-mask" style="position:absolute;left : 0;right: 0;bottom: 0;top: 0;background-color: rgba(0,0,0,0.6);display: flex; justify-content: center; align-items: center; z-index: 99999;"><div class="loader-retailer" style="width: 50px; height: 50px;"></div></div>';
        $('body').append(loaderElement);
        if (selectedFilters && selectedFilters.length === 0) selectedFilters = null;
        $.ajax({
            // url: 'https://cors-anywhere.herokuapp.com/https://a657b664.ngrok.io/api/retailers',
            url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/retailers',
            type: 'post',
            dataType: 'json',
            data: {
                'categories': selectedFilters,
                'tags': searchKey,
                'app_type' : 'extension'
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', accessToken);
            },
            success: function (data) {
                $('#retailer-page-mask').remove();
                $('.retailer-content').empty();
                console.log('retailers', data);
                const retailerItems = data.retailers.reduce((all, item) => `${all}<a href="${item.link}" target="_blank" class="pop-store-item"><img id=${item.name} src="${item.logoUrl}" style="width: 100%;"></a>`, '');
                $('.retailer-content').append(retailerItems);
            },
            error: function (data) {
                $('#retailer-page-mask').remove();
                console.log('error', data)
            }
        });
    });
};

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

                const categoryItems = data.categories.reduce((all, item) => `${all}<span class="category-item" categoryId=${item.id}>${item.name}</span>`, '');
                $('.category-content').append(categoryItems);
                console.log('cat', data.categories);
                $('.category-item').on('click', function () {
                    if ($(this).hasClass('category-selected')) {
                        $(this).removeClass('category-selected');
                        selectedFilters.splice(selectedFilters.indexOf($(this).text()), 1);
                    } else {
                        $(this).addClass('category-selected');
                        console.log('this', $(this).attr('categoryId'));
                        selectedFilters.push($(this).attr('categoryId'));
                        console.log('selectedFilters push', selectedFilters);
                    }
                    $('.apply-btn').text('Apply Filters (' + selectedFilters.length + ')');
                });
            },
            error: function (data) {
                console.log('error', data)
            }
        });
    });
};
$(window).ready(function () {
    var searchKey = null;
    fetchRetailer(selectedFilters, searchKey);
    fetchCategory();
    localStorage.setItem('lastUrl-letsGoShip', '/html/store.html');
    $('.searchBar').on('keyup', function (e) {
        if(e.keyCode === 13) {
            const inputKey = $('.searchBar input').val();
            fetchRetailer(selectedFilters, inputKey);
        }
    });

    $('.setting').on('click', function () {
        $('#popup-modal').css('display', 'none');
        $('#filter-category').css('display', 'block');
    });

    $('#filter-close').on('click', function () {
        $('#popup-modal').css('display', 'flex');
        $('#filter-category').css('display', 'none');
    });

    $('.clear-btn').on('click', function () {
        $('.category-item').removeClass('category-selected');
        $('.apply-btn').text('Apply Filters');
        selectedFilters = [];
    });

    $('.apply-btn').on('click', function () {
        $('.retailer-content').empty();
        console.log('selectedFilters apply', selectedFilters);
        fetchRetailer(selectedFilters, searchKey);
        $('#popup-modal').css('display', 'flex');
        $('#filter-category').css('display', 'none');
        $('.searchBar input').val('');
    });
});
