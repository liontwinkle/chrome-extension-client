const productPretty = () => {
    var store = 'pretty';
    var available = true;
    var width = null;
    var isImageAvailable = null;
    var priceStr = $('.price-container.new .price .price').text() || $('.price-container .price').text();
    priceStr = priceStr.replace(',', '');
    console.log('priceStr>>>>>>', priceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var price = priceStr.match(regex)[0];
    console.log('price>>>>>', price);
    var currencySymbol = priceStr.replace(price, '');
    currencySymbol = currencySymbol.replace('USD', '');
    currencySymbol = currencySymbol.trim();
    console.log('currencySymbol-Pretty>>>>>>', currencySymbol);
    var title = $('.product-view-title').text();
    title = title.replace("'", '');
    var sizeExist = $('.selproduct-size-ect');
    var sizeTemp = $('.selproduct-size-ect .selected').text();
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    console.log('size>>>>>>', size);
    var colorExist = $('.colour-option-label .value').text();
    var color = colorExist ? colorExist : null;
    var imageUrl = $('#js-id-imagegallery .slick-current img').attr('src') || $('#js-id-imagegallery .gallery-slide img').attr('src');
    var count = '1';
    console.log('color>>>>>>', color);
    console.log('imageUrl>>>>>', imageUrl);

    return {currencySymbol, price,  title, imageUrl, color, size, count, available, store, width, isImageAvailable};
};
