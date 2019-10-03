const productNike = () => {

    $.getScript("addProduct.js");

    var tempProductPrice = $("[data-test = product-price]")[0].innerHTML;
    var regex = /[+-]?\d+(\.\d+)?/g;
    tempProductPrice = tempProductPrice.match(regex)[0];
    var tempProductCurrencySymbol = $("[data-test = product-price]")[0].innerHTML.replace(',', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('GBP', '£');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    console.log('tempProductCurrencySymbol-Nike>>>>>>', tempProductCurrencySymbol);
    var productName = $.trim($('#pdp_product_title').text());
    productName = productName.replace("'", '');
    var sizeExist = $("input[name=skuAndSize]").attr("aria-label");
    var sizeTemp = $("input[name=skuAndSize]:checked").attr("aria-label");
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    var colorExist = $("a[aria-selected=false]").attr('title');
    var color = colorExist ? ($("a[aria-selected=true]").attr('title')) : null;

    var imageUrl = $.trim($("[alt^='" + productName + "']").attr('src'));
    var count = '1';

    addProduct(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size, count);
}
