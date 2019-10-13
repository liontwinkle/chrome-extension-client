$(window).ready(function () {

    localStorage.setItem('lastUrl-letsGoShip', '/html/store.html');

    var storeLists = [ 'amazon', 'ebay', 'nike', 'fashionnova', 'revolve', 'kyliecosmetics', 'colourpop', 'prettylittlething', 'forever21', '6pm', 'ralphlauren', 'kkwbeauty'];
    var categoryList = [
        ['sports', 'books', 'electronic', 'beauty', 'clothing'],
        ['clothing', 'sports'],
        ['sports', 'books', 'electronic', 'beauty', 'clothing'],
        ['clothing'],
        ['clothing'],
        ['clothing'],
        ['sports'],
        ['books'],
        ['books'],
        ['clothing'],
        ['clothing'],
        ['clothing'],
    ];
    let checker = (arr, target) => target.every(v => arr.includes(v));
    var selectedFilters = [];
    $('#searchBar').on('change paste keyup', function () {
        const inputKey = $('#searchBar input').val();
        storeLists.forEach((service, i) => {
           if (service.includes(inputKey)) {
               $('#item-group').children().eq(i).css('display', 'flex');
           } else {
               $('#item-group').children().eq(i).css('display', 'none');
           }
        });
    });

    $('#setting').on('click', function () {
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

    $('.category-item').on('click', function () {

        if ($(this).hasClass('category-selected')) {
            $(this).removeClass('category-selected');
            selectedFilters.splice(selectedFilters.indexOf($(this).text()), 1);
        } else {
            $(this).addClass('category-selected');
            selectedFilters.push($(this).text());
        }
        $('.apply-btn').text('Apply Filters (' + selectedFilters.length + ')');
    });

    $('.apply-btn').on('click', function () {

        categoryList.forEach((category, i) => {

            if (checker(category, selectedFilters)) {
                $('#item-group').children().eq(i).css('display', 'flex');
            } else {
                $('#item-group').children().eq(i).css('display', 'none');
            }
        });
        $('#popup-modal').css('display', 'flex');
        $('#filter-category').css('display', 'none');
    });
});
