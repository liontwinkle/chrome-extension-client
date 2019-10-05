const productNova = () => {

    $.getScript('addProduct.js');

    var tempProductPriceStr = $('[itemprop = offers] .deal span span').text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    console.log('tempProductPriceStr>>>>>>', tempProductPriceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    console.log('tempProductPrice>>>>>>>', tempProductPrice);
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    console.log('tempProductCurrencySymbol-Nova>>>>>>', tempProductCurrencySymbol);
    var productName = $.trim($('[itemprop = name]').text());
    productName = productName.replace("'", '');
    var sizeTemp = $('.single-option-selector option:selected').text();
    var size = sizeTemp ? sizeTemp : '';
    console.log('size>>>>>>', size);
    var colorExist = $('a[aria-selected=false]').attr('title');
    var color = colorExist ? ($('a[aria-selected=true]').attr('title')) : null;
    var imageUrl = $.trim($("[alt^='" + productName + "']").attr('src'));
    imageUrl = imageUrl.slice(0, imageUrl.indexOf('?'));
    imageUrl = 'https:' + imageUrl;
    console.log('imageUrl', imageUrl);
    var count = 1;

    addProduct(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size, count);
}
