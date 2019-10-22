const productForever = () => {

    var store = 'forever21';
    var available = true;
    var tempProductPriceStr = $('#ItemPrice div:first-child span').text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    console.log('tempProductPriceStr>>>>>>', tempProductPriceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    console.log('tempProductPrice>>>>>', tempProductPrice);
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace(/\u200C/g, '');
    console.log('tempProductCurrencySymbol-Pretty-Length>>>>>>', tempProductCurrencySymbol.length);
    var productName = $('#h1Title').text();
    productName = productName.replace("'", '');
    var sizeExist = $('#sizeButton');
    var sizeTemp = $('#sizeButton .selected').text();
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    console.log('size>>>>>>', size);
    var colorExist = $('#selectedColorName').text();
    var color = colorExist ? colorExist : null;
    var imageUrl = $('#imageButtonList li img').attr('src');
    var count = '1';
    console.log('color>>>>>>', color);
    console.log('imageUrl>>>>>', imageUrl);

    addProduct(tempProductCurrencySymbol, tempProductPrice, productName, imageUrl, color, size, count, available, store);
};
