const productForever = () => {

    var store = 'forever21';
    var available = true;
    var width = null;
    var isImageAvailable = null;
    var priceStr = $('#ItemPrice div:first-child span').text();
    priceStr = priceStr.replace(',', '');
    console.log('priceStr>>>>>>', priceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var price = priceStr.match(regex)[0];
    console.log('price>>>>>', price);
    var currencySymbol = priceStr.replace(price, '');
    currencySymbol = currencySymbol.replace('USD', '');
    currencySymbol = currencySymbol.trim();
    currencySymbol = currencySymbol.replace(/\u200C/g, '');
    console.log('currencySymbol-Pretty-Length>>>>>>', currencySymbol.length);
    var title = $('#h1Title').text();
    title = title.replace("'", '');
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

    return {currencySymbol, price,  title, imageUrl, color, size, count, available, store, width, isImageAvailable};
};
