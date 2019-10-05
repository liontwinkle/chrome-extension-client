const wishNike = () => {

    $.getScript('addWish.js');

    var tempProductPriceStr = $('[data-test = product-price]')[0].innerHTML;
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('GBP', '£');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    var productName = $.trim($('#pdp_product_title').text());
    productName = productName.replace("'", '');
    var sizeExist = $('input[name=skuAndSize]').attr('aria-label');
    var sizeTemp = $('input[name=skuAndSize]:checked').attr('aria-label');
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    var colorExist = $('a[aria-selected=false]').attr('title');
    var color = colorExist ? ($('a[aria-selected=true]').attr('title')) : null;

    addWish(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size);
};
