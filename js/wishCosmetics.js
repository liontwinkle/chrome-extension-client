const wishCosmetics = () => {

    $.getScript("addWish.js");

    var tempProductPriceStr = $(".product-price").text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    console.log('tempProductPriceStr>>>>>>>>>', tempProductPriceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    console.log('tempProductPrice>>>>>>.', tempProductPrice);
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    console.log('tempProductCurrencySymbol-cosmetics>>>>>>', tempProductCurrencySymbol);
    var productName = $(".section-title h1").text();
    productName = productName.replace("'", '');
    var sizeExist = $("input[name=size-options]").attr('value');
    var sizeTemp = $("input[name=size-options]:checked").attr('value');
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    console.log('size>>>>>>', size);
    var colorExist = $(".selectedColor").text();
    var color = colorExist ? ($(".selectedColor").text()) : null;
    var imageUrl = $('#thumbnail-gallery img').attr('src');
    imageUrl =  'https:' + imageUrl;
    imageUrl = imageUrl.split('?')[0];
    var count = $("input[aria-label=quantity]").val();
    console.log("count>>>>>>>>>>>", count);
    console.log('color>>>>>>', color);
    console.log('imageUrl', imageUrl);

    addWish(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size);
};
