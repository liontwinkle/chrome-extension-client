const wishAmazon = () => {

    $.getScript('addWish.js');

    var isLargeValue = $('.price-large').text();
    var tempProductPrice = '';
    var tempProductCurrencySymbol = '';
    if (isLargeValue) {
        var optionValue = $('input[name=BuyboxType]:checked').val();
        var selClass = '#new-button-price';
        if (optionValue === 'new') {
            selClass = '#new-button-price';
        } else {
            selClass = '#used-button-price';
        }
        tempProductPrice = $(selClass + " .majorValue").text() + "." + $(selClass + " .minorValue").text()
    } else {
        var tempProduct = $('#priceblock_ourprice').text() ||
            $('#priceblock_dealprice').text() ||
            $('#priceblock_saleprice').text() ||
            $('#buyNew_noncbb span').text();
        ;
        tempProductPrice = tempProduct.replace(',', '');
        var regex = /[+-]?\d+(\.\d+)?/g;
        tempProductPrice = tempProductPrice.match(regex)[0];
        tempProductCurrencySymbol = tempProduct.replace(',', '');
        tempProductCurrencySymbol = tempProductCurrencySymbol.replace(tempProductPrice, '');
        tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
        if (tempProductCurrencySymbol === '€') {
            tempProductPrice = tempProductPrice.replace('.', '');
            tempProductPrice = tempProductPrice / 100;
        }
    }
    var productName = $.trim($('#productTitle').text()).replace("'", '');
    var imageUrl = $('.a-dynamic-image').attr('src');
    var colorExist = $.trim($('#variation_color_name').find('.selection').text());
    var color = colorExist ? colorExist : null;
    var sizeExist =  $.trim($('#dropdown_selected_size_name').find('.a-dropdown-prompt').text());
    var size = sizeExist ? sizeExist : null;

    addWish(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size);
}
