const wishShopDisney = () => {

    $.getScript('addWish.js');

    var tempProductPriceStr = $('.prices .sales .value').text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    var productName = $('.product-detail__content-summary .product-name').text();
    productName = productName.replace("'", '');
    var size = null;
    var color = null;
    var imageUrl = $('.thumbnail-carousel__img').attr('src');
    console.log('imageUrl>>>>>', imageUrl);


    addWish(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size);
};
