const fetchCategories = () => {
    chrome.storage.local.get(['accessToken'], function (result) {
        var accessToken = 'Bearer ' + result.accessToken;
        $.ajax({
            // url: 'https://cors-anywhere.herokuapp.com/https://a657b664.ngrok.io/api/categories',
            url: 'https://cors-anywhere.herokuapp.com/http://api.letsgoship.com/api/categories',
            type: 'get',
            dataType: 'json',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'content-type': 'application/json',
                "X-Requested-With": "XMLHttpRequest"
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', accessToken);
            },
            success: function (data) {
                const categoryItems = data.categories.reduce((all, item) => `${all}<span class="category-item" categoryId=${item.id}>${item.name}</span>`, '');
                $('#categoryWrapper').append(categoryItems);
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
