const productNike = () => {
    var store =  'nike';
    var available = true;
    var count = '1';
    var width = null;
    var isImageAvailable = null;
    var price = $('[data-test = product-price]')[0].innerHTML;
    var regex = /[+-]?\d+(\.\d+)?/g;
    price = price.match(regex)[0];
    var currencySymbol = $('[data-test = product-price]')[0].innerHTML.replace(',', '');
    currencySymbol = currencySymbol.replace(price, '');
    currencySymbol = currencySymbol.replace('GBP', '£');
    currencySymbol = currencySymbol.trim();
    console.log('currencySymbol-Nike>>>>>>', currencySymbol);
    var title = $('#pdp_product_title').text();
    title = title.replace("'", '');
    var sizeExist = $('input[name=skuAndSize]').attr('aria-label');
    var sizeTemp = $('input[name=skuAndSize]:checked').attr('aria-label');
    var size = sizeExist ? ((sizeTemp) ? sizeTemp : 'select') : '';
    var colorExist = $('a[aria-selected=false]').attr('title');
    var color = colorExist ? ($('a[aria-selected=true]').attr('title')) : null;
    var imageUrl = $("[alt^='" + title + "']").attr('src');

    return {currencySymbol, price,  title, imageUrl, color, size, count, available, store, width, isImageAvailable};
};
