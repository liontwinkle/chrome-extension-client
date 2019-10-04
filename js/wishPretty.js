const wishPretty = () => {

    $.getScript("addWish.js");

    var tempProductPriceStr = $(".price-container .price").text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    console.log('tempProductPriceStr>>>>>>', tempProductPriceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    console.log('tempProductPrice>>>>>', tempProductPrice);
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    console.log('tempProductCurrencySymbol-Pretty>>>>>>', tempProductCurrencySymbol);
    var productName = $(".product-view-title").text();
    productName = productName.replace("'", '');
    var sizeExist = $(".selproduct-size-ect");
    var sizeTemp = $(".selproduct-size-ect .selected").text();
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    console.log('size>>>>>>', size);
    var colorExist = $(".colour-option-label .value").text();
    var color = colorExist ? colorExist : null;
    var imageUrl = $('#js-id-imagegallery .slick-current img').attr('src');
    var count = '1';
    console.log('color>>>>>>', color);
    console.log('imageUrl>>>>>', imageUrl);

    addWish(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size);

};
