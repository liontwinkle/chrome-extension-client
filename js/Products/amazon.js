const productAmazon = () => {
    var isLargeValue = $('.price-large').text();
    var tempProductPrice = '';
    var tempProductCurrencySymbol = '';
    var count;
    if (isLargeValue) {
        var optionValue = $('input[name=BuyboxType]:checked').val();
        var selClass = '#new-button-price';
        if (optionValue === 'new') {
            selClass = '#new-button-price';
        } else {
            selClass = '#used-button-price';
        }
        tempProductPrice = $(selClass + '.majorValue').text() + '.' + $(selClass + '.minorValue').text()
    } else {
        console.log($('#buyNew_noncbb span').html());
        var tempProduct = $('#priceblock_ourprice').text() ||
            $('#priceblock_dealprice').text() ||
            $('#priceblock_saleprice').text() ||
            $('#buyNew_noncbb span').text();
        var splitIndex = tempProduct.indexOf('-');
        if (splitIndex > 0) {
            tempProduct = tempProduct.slice(0, splitIndex - 1);
        }
        console.log('>>>>>>>>>>>', tempProduct);
        tempProductPrice = tempProduct.replace(',', '');
        var regex = /[+-]?\d+(\.\d+)?/g;
        tempProductPrice = tempProductPrice.match(regex) && tempProductPrice.match(regex)[0] || '';
        tempProductCurrencySymbol = tempProduct.replace(',', '');
        tempProductCurrencySymbol = tempProductCurrencySymbol.replace(tempProductPrice, '');
        tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
        if (tempProductCurrencySymbol === '€') {
            tempProductPrice = tempProductPrice.replace('.', '');
            tempProductPrice = tempProductPrice / 100;
        }
        count = $('#quantity option:selected').text() || 1;
    }
    var productName = $.trim($('#productTitle').text()).replace("'", '');
    var imageUrl = $('.a-dynamic-image').attr('src');
    var colorExist = $.trim($('#variation_color_name').find('.selection').text());
    var color = colorExist ? colorExist : null;
    var sizeExist =  $.trim($('#dropdown_selected_size_name').find('.a-dropdown-prompt').text());
    var size = sizeExist ? sizeExist : null;
    console.log('tempProductCurrencySymbol', tempProductCurrencySymbol);

    addProduct(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size, count);
}
