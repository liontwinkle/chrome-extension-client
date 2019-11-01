const productRevolve = () => {

    var store = 'revolve';
    var available = true;
    var width = null;
    var isImageAvailable = null;
    var priceStr = $('#retailPrice').text();
    priceStr = priceStr.replace(',', '');
    console.log('priceStr>>>>>>', priceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var price = priceStr.match(regex)[0];
    console.log('price>>>>>', price);
    var currencySymbol = priceStr.replace(price, '');
    currencySymbol = currencySymbol.replace('USD', '');
    currencySymbol = currencySymbol.trim();
    console.log('currencySymbol-Revolve>>>>>>', currencySymbol);
    var title = $('.product-name--lg').text();
    title = title.replace("'", '');
    var sizeExist = $('input[name=size-options]').attr('value');
    var sizeTemp = $('input[name=size-options]:checked').attr('value');
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    console.log('size>>>>>>', size);
    var colorExist = $('.selectedColor').text();
    var color = colorExist ? ($('.selectedColor').text()) : null;
    var imageUrl = $('#img_2').attr('src');
    var count = '1';
    console.log('color>>>>>>', color);
    console.log('imageUrl>>>>>', imageUrl);

    return {currencySymbol, price,  title, imageUrl, color, size, count, available, store, width, isImageAvailable};
};
