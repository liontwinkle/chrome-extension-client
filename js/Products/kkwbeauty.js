const productKkwBeauty = () => {

    var store = 'kkwbeauty';
    var available = true;
    var tempProductPriceStr = $('.js-variant-price').text();
    // var tempProductPriceStr = $('.P__info .P__price').clone().children().remove().end().text();
    tempProductPriceStr = tempProductPriceStr.replace(',', '');
    console.log('tempProductPriceStr>>>>>>', tempProductPriceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var tempProductPrice = tempProductPriceStr.match(regex)[0];
    console.log('tempProductPrice>>>>>', tempProductPrice);
    var tempProductCurrencySymbol = tempProductPriceStr.replace(tempProductPrice, '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.replace('USD', '');
    tempProductCurrencySymbol = tempProductCurrencySymbol.trim();
    console.log('tempProductCurrencySymbol-Revolve>>>>>>', tempProductCurrencySymbol);
    var productName = $('h2[itemprop=name]').text();
    productName = productName.replace("'", '');
    var size = null;
    var color = null;
    var width = null;
    // var sizeExist = $('#pdp-size-select');
    // var sizeTemp = $('#pdp-size-select option:selected').text();
    // var size = sizeExist ? ((sizeTemp !== 'Select a Size') ? sizeTemp : 'select') : '';
    console.log('size>>>>>>', size);

    // var widthExist = $('#pdp-width-select');
    // var widthTemp = $('#pdp-width-select option:selected').text();
    // var width = widthExist ? ((widthTemp !== 'Select a Width') ? widthTemp : 'select') : '';
    // width = $('.rg .Sp .Qp .bq').text() ? $('.rg .Sp .Qp .bq').clone().children().remove().end().text() : width;
    console.log('width>>>>>>', width);
    color = $('.js-item-dropdown span.width-100').text() || null;
    // var colorExist = $('select[name=color].P__select');
    // var colorTemp = $('select[name=color].P__select option:selected').text();
    // var color = colorTemp ? colorTemp : null;
    console.log('color>>>>>>', color);

    var imageUrl = $('.swiper-slide-active>div>img').attr('src');
    imageUrl = imageUrl.slice(0, imageUrl.indexOf('?'));
    imageUrl = 'https:' + imageUrl;
    var count = $('.js-quantity').val();
    console.log('imageUrl>>>>>', imageUrl);
    console.log('count>>>>>', count);
    tempProductPrice = tempProductPrice * count;
    addProduct(tempProductCurrencySymbol, tempProductPrice,  productName, imageUrl, color, size, count, available, store);
};
