const wishRalph = () => {

    $.getScript('addWish.js');

    var tempProductPriceStr = $('#product-detail-section .price-sales').text() || $('#product-detail-section .lowblack').text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    var productName = $('#product-detail-section .product-name').text();
    productName = productName.replace("'", '');
    var sizeTemp = $('#product-detail-section .primarysize .selectable.selected a').text();
    var size = sizeTemp ? sizeTemp : 'select';
    var colorExist = $('#product-detail-section .colorname .selectable.selected img').attr('alt');
    var color = colorExist ? colorExist : '';
    var imageUrl = $('.popup-img').attr('src');

    addWish(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size);
};
