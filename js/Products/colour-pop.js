const productColourPop = () => {

    var store = 'colourpop';
    var available = true;
    var tempProductPriceStr = $('.product-details__right .product-details__price--sale').clone().children().remove().end().text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    console.log('tempProductPriceStr>>>>>>>>>', tempProductPriceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    console.log('tempProductPrice>>>>>', tempProductPrice);
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    console.log('tempProductCurrencySymbol-colourpop>>>>>>', tempProductCurrencySymbol);
    var productName = $('.showtablet .product-details__title').text();
    productName = productName.replace("'", '');
    var sizeExist = $('input[name=size-options]').attr('value');
    var sizeTemp = $('input[name=size-options]:checked').attr('value');
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    console.log('size>>>>>>', size);
    var colorExist = $('.selectedColor').text();
    var color = colorExist ? ($('.selectedColor').text()) : null;
    var imageUrl = $('.product-images__carousel .product-image img').attr('src');
    imageUrl =  'https:' + imageUrl;
    imageUrl = imageUrl.split('?')[0];
    var count = $('.product-actions__quantity--input').val();

    addProduct(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size, count, available, store);
};
