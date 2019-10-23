const wishForever = () => {
    var tempProductPriceStr = $('#ItemPrice div:first-child span').text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace(/\u200C/g, '');
    var productName = $('#h1Title').text();
    productName = productName.replace("'", '');
    var sizeExist = $('#sizeButton');
    var sizeTemp = $('#sizeButton .selected').text();
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    var colorExist = $('#selectedColorName').text();
    var color = colorExist ? colorExist : null;
    var imageUrl = $('#imageButtonList li img').attr('src');

    addWish(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size);
};
