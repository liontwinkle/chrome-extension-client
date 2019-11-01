const productRalph = () => {
    var store = 'ralph';
    var available = true;
    var width = null;
    var isImageAvailable = null;
    if ($('#product-detail-section .price-sales').length > 1) {
        available = false;
    }
    var priceStr = $('#product-detail-section .price-sales').text() || $('#product-detail-section .lowblack').text() || '';
    priceStr = priceStr.replace(',', '');
    priceStr = priceStr.includes('-') ? '' : priceStr;
    console.log('priceStr>>>>>>', priceStr);
    console.log('priceStrLength>>>>>>', $('#product-detail-section .price-sales').length);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var price = priceStr ? priceStr.match(regex)[0] : '';
    console.log('price>>>>>', price);
    var currencySymbol = priceStr ? priceStr.replace(price, '') : '$';
    currencySymbol = currencySymbol.replace('USD', '');
    currencySymbol = currencySymbol.trim();
    console.log('currencySymbol-Revolve>>>>>>', currencySymbol);
    var title = $('#product-detail-section .product-name').text();
    title = title.replace("'", '');
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

    return {currencySymbol, price,  title, imageUrl, color, size, count, available, store, width, isImageAvailable};
};
