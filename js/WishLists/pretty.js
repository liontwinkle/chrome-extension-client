const wishPretty = () => {

    $.getScript('addWish.js');

    var tempProductPriceStr = $('.price-container .price').text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    var productName = $('.product-view-title').text();
    productName = productName.replace("'", '');
    var sizeExist = $('.selproduct-size-ect');
    var sizeTemp = $('.selproduct-size-ect .selected').text();
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    var colorExist = $('.colour-option-label .value').text();
    var color = colorExist ? colorExist : null;
    var imageUrl = $('#js-id-imagegallery .slick-current img').attr('src');

    addWish(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size);

};
