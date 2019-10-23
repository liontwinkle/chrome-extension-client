const wishColourPop = () => {
    var tempProductPriceStr = $('.product-details__right .product-details__price--sale').clone().children().remove().end().text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    var productName = $('.product-details__title').text();
    productName = productName.replace("'", '');
    var sizeExist = $('input[name=size-options]').attr('value');
    var sizeTemp = $('input[name=size-options]:checked').attr('value');
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    var colorExist = $('.selectedColor').text();
    var color = colorExist ? ($('.selectedColor').text()) : null;
    var imageUrl = $('.product-images__carousel .product-image img').attr('src');
    imageUrl =  'https:' + imageUrl;
    imageUrl = imageUrl.split('?')[0];

    addWish(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size);
};
