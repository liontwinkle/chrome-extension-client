$(window).ready(function () {

    var storeLists = [ 'amazon', 'ebay', 'nike', 'fashionnova', 'revolve', 'kyliecosmetics', 'colourpop', 'prettylittlething', 'forever21', '6pm', 'ralphlauren', 'kkwbeauty', 'walmart', 'shopdisney'];
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
        ['clothing'],
        ['clothing'],
    ];
    let checker = (arr, target) => target.every(v => arr.includes(v));
    var selectedFilters = [];

    $('body').on('click', '#browse-btn', function () {
        $('#go-Modal').css('opacity', '1');
        $('#go-Modal').css('display', 'block');
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

        $('#searchBar').on('change paste keyup', function () {
            const inputKey = $('#searchBar input').val();
            // storeLists.forEach((service, i) => {
            //     if (service.includes(inputKey)) {
            //         $('#retailerWrapper').children().eq(i).css('display', 'flex');
            //     } else {
            //         $('#retailerWrapper').children().eq(i).css('display', 'none');
            //     }
            // });
            fetchRetailer(selectedFilters = null, inputKey);
        });

        $('#setting').on('click', function () {
            $('#popup-modal').css('display', 'none');
            $('#filter-category').css('display', 'block');
        });

        $('#filter-close').on('click', function () {
            $('#popup-modal').css('display', 'block');
            $('#filter-category').css('display', 'none');
        });

        $('.clear-btn').on('click', function () {
            $('.category-item').removeClass('category-selected');
            selectedFilters = [];
            $('.apply-btn').text('Apply Filters');
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
            $('#retailerWrapper').empty();
            var searchKey = '';
            fetchRetailer(selectedFilters = null, searchKey);
            // categoryList.forEach((category, i) => {
            //     if (checker(category, selectedFilters)) {
            //         $('#item-group').children().eq(i).css('display', 'flex');
            //     } else {
            //         $('#item-group').children().eq(i).css('display', 'none');
            //     }
            // });
            $('#popup-modal').css('display', 'block');
            $('#filter-category').css('display', 'none');
        });
    });
});
