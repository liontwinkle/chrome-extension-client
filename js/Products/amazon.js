const productAmazon = () => {

    var store = 'amazon';
    var available = true;
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
        if ($(selClass + ' .majorValue').text() || $(selClass + ' .minorValue').text()) {
            tempProductPrice = $(selClass + ' .majorValue').text() + '.' + $(selClass + ' .minorValue').text();
            console.log('tempProductPrice', tempProductPrice);
            tempProductCurrencySymbol = $(selClass + ' .currencySymbol').text();
        } else {
            available = false;
        }
    } else {
        var tempProduct =
            $('#priceblock_ourprice').text() ||
            $('#priceblock_dealprice').text() ||
            $('#priceblock_saleprice').text() ||
            $('#buyNew_noncbb span').text();
        var splitIndex = tempProduct.indexOf('-');
        if (splitIndex > 0) {
            tempProduct = tempProduct.slice(0, splitIndex - 1);
        }
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
    }
    var count = $('#quantity option:selected').text() || 1;
    var productName = $.trim($('#productTitle').text()).replace("'", '').slice(0, 100);
    console.log('productName', productName);
    // var imageUrl = $('.a-dynamic-image').attr('src');
    var imageUrl = $('.image.selected .imgTagWrapper img').attr('src') || $('.a-button-selected img').attr('src');
    console.log('imageUrl', imageUrl);
    var isImageAvailable = imageUrl.includes('data:image');
    var colorExist = $.trim($('#variation_color_name').find('.selection').text());
    var color = colorExist ? colorExist : null;
    console.log('color', color);
    var sizeExist = $.trim($('#dropdown_selected_size_name').find('.a-dropdown-prompt').text());
    var size = sizeExist ? sizeExist : null;
    console.log('size', size);
    var width = null;
    console.log('tempProductCurrencySymbol', tempProductCurrencySymbol);
    console.log('tempProductPrice', tempProductPrice);
    console.log('count', count);
    tempProductPrice = tempProductPrice * count;

    addProduct(tempProductCurrencySymbol, tempProductPrice, productName, imageUrl, color, size, count, available, store, width, isImageAvailable);
};
