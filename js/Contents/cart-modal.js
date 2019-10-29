$('body').on('click', function (e) {
    var posX = 1 * e.clientX;
    var posY = 1 * e.clientY;
    if ($('#addToCartModal').length > 0) {
        var left = 1 * $('#addToCartModal')[0].offsetLeft;
        var right = left + 1 * $('#addToCartModal')[0].offsetWidth;
        var top = 1 * $('#addToCartModal')[0].offsetTop;
        var bottom = top + 1 * $('#addToCartModal')[0].offsetHeight;

        if (posX === 0 && posY === 0) return;
        if (posX >= left && posX <= right && posY >= top && posY <= bottom) {
            $('#addToCartModal').css('display', 'block');
            $('#page-mask').css('display', 'block');
        } else if (left && right && top && bottom) {
            $('#addToCartModal').css('display', 'none');
            $('#page-mask').css('display', 'none');
        }
    }
});

$('body').on('click', function (e) {
    if ($('#viewCartModal').length > 0) {
        var left = 1 * $('#viewCartModal')[0].offsetLeft;
        var right = left + 1 * $('#viewCartModal')[0].offsetWidth;
        var top = 1 * $('#viewCartModal')[0].offsetTop;
        var bottom = top + 1 * $('#viewCartModal')[0].offsetHeight;
        var posX = 1 * e.clientX;
        var posY = 1 * e.clientY;

        if (posX === 0 && posY === 0) return;
        if (posX >= left && posX <= right && posY >= top && posY <= bottom) {
            $('#viewCartModal').css('display', 'block');
            $('#page-mask').css('display', 'block');
        } else if (left && right && top && bottom) {
            $('#viewCartModal').css('display', 'none');
            $('#ConfirmCheckout').css('display', 'none');
            $('#page-mask').css('display', 'none');
        }
    }
});
