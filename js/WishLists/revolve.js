const wishRevolve = () => {

    $.getScript('addWish.js');

    var tempProductPriceStr = $('#retailPrice').text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '').trim();
    var productName = $('.product-name--lg').text();
    productName = productName.replace("'", '');
    var sizeExist = $('input[name=size-options]').attr('value');
    var sizeTemp = $('input[name=size-options]:checked').attr('value');
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    var colorExist = $('.selectedColor').text();
    var color = colorExist ? ($('.selectedColor').text()) : null;
    var imageUrl = $('#img_2').attr('src');

    addWish(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size);
};
