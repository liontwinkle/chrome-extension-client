const productWalmart = () => {

    var store = 'walmart';
    var available = true;
    var width = null;
    var isImageAvailable = null;
    var price = $('.prod-PriceSection #price .visuallyhidden').first().text();
    console.log('price>>>>>', price);
    price = $('.prod-PriceSection span[itemprop=priceCurrency]').length > 1 ? '' : price;
    var currencySymbol = $('.prod-PriceSection span[itemprop=priceCurrency]:eq(0)').text();
    console.log('currency>>>>>>>>>>>', currencySymbol);
    var title = $('.prod-ProductTitle').text();
    title = title.replace("'", '');
    var color = null;
    var size = null;
    if ($('.varslabel__content:eq(0)').prev().text().toLowerCase().includes('color')) {
        var colorTemp = $('.varslabel__content:eq(0)').text();
        color = colorTemp === 'Choose an option' ? '' : colorTemp;
        var sizeExist = $('.varslabel__content:eq(1)').prev().text().toLowerCase().includes('size');
        var sizeTemp = $('.varslabel__content:eq(1)').text();
        size = sizeExist ? (sizeTemp === 'Choose an option' ? 'select' : sizeTemp) : null;
    } else if ($('.varslabel__content:eq(0)').prev().text().toLowerCase().includes('size')) {
        var colorExist = $('.varslabel__content:eq(1)').prev().text().toLowerCase().includes('color');
        var colorTemp = colorExist ? $('.varslabel__content:eq(1)').text() : null;
        color = colorTemp === 'Choose an option' ? '' : colorTemp;
        var sizeTemp = $('.varslabel__content:eq(0)').text();
        size = sizeTemp === 'Choose an option' ? 'select' : sizeTemp;
    }
    var imageUrl = $('div[data-tl-id=ProductPage-alt-image0] img').attr('src');
    imageUrl = imageUrl.slice(0, imageUrl.indexOf('?'));
    imageUrl = 'https:' + imageUrl;
    var count = $('.QuantityPicker-select select option:selected').text() || 1;
    console.log('count>>>>>>>', count);
    console.log('colorTemp>>>>>>', colorTemp);
    console.log('color>>>>>>', color);
    console.log('size>>>>>>', size);
    console.log('imageUrl>>>>>', imageUrl);
    price = price * count;

    return {currencySymbol, price,  title, imageUrl, color, size, count, available, store, width, isImageAvailable};
};
