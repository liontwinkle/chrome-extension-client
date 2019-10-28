const wishRalph = () => {
    var store = 'ralph';
    var available = true;
    if ($('#product-detail-section .price-sales').length > 1) {
        available = false;
    }
    var tempProductPriceStr = $('#product-detail-section .price-sales').text() || $('#product-detail-section .lowblack').text() || '';
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    tempProductPriceStr = tempProductPriceStr.includes('-') ? '' : tempProductPriceStr;
    console.log('tempProductPriceStr>>>>>>', tempProductPriceStr);
    console.log('tempProductPriceStrLength>>>>>>', $('#product-detail-section .price-sales').length);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr ? tempProductPriceStr.match(regex)[0] : '';
    console.log('tempProductPrice>>>>>', tempProductPrice);
    var tempProductCurrencySymbol = tempProductPriceStr ? tempProductPriceStr.replace(tempProductPrice, '') : '$';
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    console.log('tempProductCurrencySymbol-Revolve>>>>>>', tempProductCurrencySymbol);
    var productName = $('#product-detail-section .product-name').text();
    productName = productName.replace("'", '');
    var sizeExist = $('#product-detail-section .primarysize .selectable.selected a')
    var sizeTemp = $('#product-detail-section .primarysize .selectable.selected a').text();
    var size = sizeExist ? ( sizeTemp ? sizeTemp : 'select') : '';
    console.log('size>>>>>>', size);

    var colorExist = $('#product-detail-section .colorname .selectable.selected img').attr('alt');
    var color = colorExist ? colorExist : '';
    console.log('color>>>>>>', color);

    var imageUrl = $('.popup-img').attr('src');
    var count = '1';
    console.log('imageUrl>>>>>', imageUrl);

    addWish(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size, count, available, store);
};
