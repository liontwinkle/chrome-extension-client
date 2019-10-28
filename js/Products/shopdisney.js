const productShopDisney = () => {

    var store = 'shopdisney';
    var available = true;
    if ($('.prices .sales .value').length > 1) {
        available = false;
    }
    var tempProductPriceStr = $('.prices .sales .value').text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    console.log('tempProductPriceStr>>>>>>', tempProductPriceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    console.log('tempProductPrice>>>>>', tempProductPrice);
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    console.log('tempProductCurrencySymbol-shopdisney>>>>>>', tempProductCurrencySymbol);
    var productName = $('.product-detail__content-summary .product-name').text();
    productName = productName.replace("'", '');
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
    var color = null;


    addProduct(tempProductCurrencySymbol, tempProductPrice, productName, imageUrl, color, size, count, available, store);
};
