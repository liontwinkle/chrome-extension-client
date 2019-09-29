$(window).ready(function () {

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
    });

});
