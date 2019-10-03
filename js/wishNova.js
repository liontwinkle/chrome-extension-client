const wishNova = () => {

    $.getScript("addWish.js");

    var tempProductPriceStr = $("#retailPrice").text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    console.log('tempProductPriceStr>>>>>>', tempProductPriceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    console.log('tempProductPrice>>>>>', tempProductPrice);
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    console.log('tempProductCurrencySymbol-Revolve>>>>>>', tempProductCurrencySymbol);
    var productName = $(".product-name--lg").text();
    productName = productName.replace("'", '');
    var sizeExist = $("input[name=size-options]").attr('value');
    var sizeTemp = $("input[name=size-options]:checked").attr('value');
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    console.log('size>>>>>>', size);
    var colorExist = $(".selectedColor").text();
    var color = colorExist ? ($(".selectedColor").text()) : null;
    var imageUrl = $('#img_2').attr('src');
    console.log('color>>>>>>', color);
    console.log('imageUrl>>>>>', imageUrl);

    addWish(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size);

};