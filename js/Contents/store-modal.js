var selectedFilters = [];
$('body').on('click', '.browse-btn', function () {
    $('#go-Modal').css('opacity', '1');
    $('#go-Modal').css('display', 'block');
    $('#popup-modal').css('display', 'block');
    $('#filter-category').css('display', 'none');
    $('#go-Modal').css('background-color', 'rgba(0,0,0,0.5)');
    $('#go-Modal-content').css('opacity', '1');
    $('#go-Modal-content').css('display', 'block');
    $('#go-Modal-content').css('transition', 'all 0.5s');
    $('#go-Modal-content').on('click', function (e) {
        e.stopPropagation();
    });
    $('#go-Modal').on('click', function (e) {
        if (e.target !== $('#go-Modal-content')) {
            $('#go-Modal').css('opacity', '0');
            $('#go-Modal').css('display', 'none');
            $('#go-Modal-content').css('opacity', '0');
            $('#go-Modal-content').css('display', 'none');
        }
    });
    $('#close-btn').on('click', function () {
        $('#go-Modal').css('opacity', '0');
        $('#go-Modal').css('display', 'none');
        $('#go-Modal-content').css('opacity', '0');
        $('#go-Modal-content').css('display', 'none');
    });
    $('.searchBar').on('keyup', function (e) {
        if(e.keyCode === 13) {
            const inputKey = $('.searchBar input').val();
            searchRetailer(selectedFilters, inputKey);
        }
    });
    $('.setting').on('click', function () {
        $('#popup-modal').css('display', 'none');
        $('#filter-category').css('display', 'block');
    });
    $('#filter-close').on('click', function () {
        $('#popup-modal').css('display', 'block');
        $('#filter-category').css('display', 'none');
    });
    $('.clear-btn').on('click', function () {
        $('.category-item').removeClass('category-selected');
        $('.apply-btn').text('Apply Filters');
    });
    // $('.category-item').on('click', function () {
    //     if ($(this).hasClass('category-selected')) {
    //         $(this).removeClass('category-selected');
    //         selectedFilters.splice(selectedFilters.indexOf($(this).text()), 1);
    //     } else {
    //         $(this).addClass('category-selected');
    //         console.log('this', $(this).text());
    //         selectedFilters.push($(this).text());
    //         console.log('selectedFilters push', selectedFilters);
    //     }
    //     $('.apply-btn').text('Apply Filters (' + selectedFilters.length + ')');
    // });
    $('.apply-btn').on('click', function () {
        $('#retailerWrapper').empty();
        $('.searchBar input').val('');
        var searchKey = '';
        console.log('selectedFilters apply', selectedFilters);
        searchRetailer(selectedFilters, searchKey);
        $('#popup-modal').css('display', 'block');
        $('#filter-category').css('display', 'none');
    });
});

