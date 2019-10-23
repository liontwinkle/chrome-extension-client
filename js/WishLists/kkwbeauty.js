const wishKkwBeauty = () => {
    var tempProductPriceStr = $('.P__info .P__price').clone().children().remove().end().text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    console.log('tempProductPriceStr>>>>>>', tempProductPriceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    console.log('tempProductPrice>>>>>', tempProductPrice);
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    console.log('tempProductCurrencySymbol-Revolve>>>>>>', tempProductCurrencySymbol);
    var productName = $('.P__info .P__title').text();
    productName = productName.replace("'", '');
    var sizeExist = $('#pdp-size-select');
    var sizeTemp = $('#pdp-size-select option:selected').text();
    var size = sizeExist ? ((sizeTemp !== 'Select a Size') ? sizeTemp : 'select') : '';
    console.log('size>>>>>>', size);

    var widthExist = $('#pdp-width-select');
    var widthTemp = $('#pdp-width-select option:selected').text();
    var width = widthExist ? ((widthTemp !== 'Select a Width') ? widthTemp : 'select') : '';
    width = $('.rg .Sp .Qp .bq').text() ? $('.rg .Sp .Qp .bq').clone().children().remove().end().text() : width
    console.log('width>>>>>>', width);

    var colorExist = $('select[name=color].P__select');
    var colorTemp = $('select[name=color].P__select option:selected').text();
    var color = colorTemp ? colorTemp : null;
    console.log('color>>>>>>', color);

    var imageUrl = $('.P__main_img').css('background-image');
    imageUrl = imageUrl.replace('url(','').replace(')','').replace(/\"/gi, "");
    console.log('imageUrl>>>>>', imageUrl);

    addWish(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size);

};
