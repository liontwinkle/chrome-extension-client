const productShopDisney = () => {

    var store = 'shopdisney';
    var available = true;
    var width = null;
    var isImageAvailable = null;
    var color = null;
    if ($('.prices .sales .value').length > 1) {
        available = false;
    }
    var priceStr = $('.prices .sales .value').text();
    priceStr = priceStr.replace(',', '');
    console.log('priceStr>>>>>>', priceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var price = priceStr.match(regex)[0];
    console.log('price>>>>>', price);
    var currencySymbol = priceStr.replace(price, '');
    currencySymbol = currencySymbol.replace('USD', '');
    currencySymbol = currencySymbol.trim();
    console.log('currencySymbol-shopdisney>>>>>>', currencySymbol);
    var title = $('.product-detail__content-summary .product-name').text();
    title = title.replace("'", '');
    var sizeExist = $('.select-size');
    console.log('sizeExist', sizeExist);
    var sizeTemp = $('.select-size .selected a span').text();
    var size =sizeExist.length > 0 ? (sizeTemp ? sizeTemp : 'select'): null;
    var count = $('input[name=product__qty_input]').attr('data-url');
    count = count.slice(count.indexOf('&quantity') + 10) || 1;
    var imageUrl = $('.thumbnail-carousel__img').attr('src');
    console.log('imageUrl>>>>>', imageUrl);
    console.log('count>>>>>', count);
    console.log('size>>>>>', size);
    price = price * count;


    return {currencySymbol, price,  title, imageUrl, color, size, count, available, store, width, isImageAvailable};
};
