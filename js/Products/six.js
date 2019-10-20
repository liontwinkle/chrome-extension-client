const productSix = () => {

    $.getScript('addProduct.js');
    var available = true;
    var tempProductPriceStr = $('.kg .Bj.Gj').text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    console.log('tempProductPriceStr>>>>>>', tempProductPriceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    console.log('tempProductPrice>>>>>', tempProductPrice);
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    console.log('tempProductCurrencySymbol-Revolve>>>>>>', tempProductCurrencySymbol);
    var productName = $('#overview span[itemprop=name]').text();
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

    var colorExist = $('#pdp-color-select');
    var colorTemp = $('#pdp-color-select option:selected').text();
    var color = colorExist ? ((colorTemp !== 'Select a Color') ? colorTemp : 'select') : '';
    color = $('meta[itemprop=color]').attr('content') ? $('meta[itemprop=color]').attr('content') : color
    console.log('color>>>>>>', color);

    var imageUrl = $('.Sa.Wa img').attr('src');
    var count = '1';
    console.log('imageUrl>>>>>', imageUrl);

    addProduct(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size, count, available, width);
};
