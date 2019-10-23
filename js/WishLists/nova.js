const wishNova = () => {
    var tempProductPriceStr = $('[itemprop = offers] .deal span span').text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    var productName = $.trim($('[itemprop = name]').text());
    productName = productName.replace("'", '');
    var sizeTemp = $('.single-option-selector option:selected').text();
    var size = sizeTemp ? sizeTemp : '';
    var colorExist = $('a[aria-selected=false]').attr('title');
    var color = colorExist ? ($('a[aria-selected=true]').attr('title')) : null;
    var imageUrl = $.trim($("[alt^='" + productName + "']").attr('src'));
    imageUrl = imageUrl.slice(0, imageUrl.indexOf('?'));
    imageUrl = 'https:' + imageUrl;

    addWish(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size);
};
