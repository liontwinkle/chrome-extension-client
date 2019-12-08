const productSix = () => {
    var store = '6pm';
    var retailers = localStorage.getItem('retailers');
    const filtered = JSON.parse(retailers).find(item => item.name === store);
    var available = true;
    var isImageAvailable = null;
    var priceStr = $('#buyBox').prev().children('div').children('div').children('span').first().text();
    // console.log('filtered', filtered.selectors);
    // var priceStr = $(filtered.selectors.price).prev().children('div').children('div').children('span').first().text();
    console.log('priceStr', priceStr);
    if (priceStr.length === 0) {
        available = false;
    } else {
        priceStr = priceStr.replace(',', '');
        console.log('priceStr>>>>>>', priceStr);
        var regex = /[+-]?\d+(\.\d+)?/g;
        var price = priceStr.match(regex)[0];
        console.log('price>>>>>', price);
        var currencySymbol = priceStr.replace(price, '');
        currencySymbol = currencySymbol.replace('USD', '');
        currencySymbol = currencySymbol.trim();
        console.log('currencySymbol-Revolve>>>>>>', currencySymbol);
        var title = $('#overview span[itemprop=name]').text();
        // var title = $(filtered.selectors.title).text();
        title = title.replace("'", '');
        var sizeExist = $('#pdp-size-select');
        var sizeTemp = $('#pdp-size-select option:selected').text();
        // var sizeTemp = $(filtered.selectors.size).text();
        var size = sizeExist ? ((sizeTemp !== 'Select a Size') ? sizeTemp : 'select') : '';
        console.log('size>>>>>>', size);
        var widthExist = $('#pdp-width-select');
        // var widthTemp = $('#pdp-width-select option:selected').text();
        var widthTemp = $(filtered.style).text();
        var width = widthExist ? ((widthTemp !== 'Select a Width') ? widthTemp : 'select') : '';
        width = $('.rg .Sp .Qp .bq').text() ? $('.rg .Sp .Qp .bq').clone().children().remove().end().text() : width;
        console.log('width>>>>>>', width);
        var colorExist = $('#pdp-color-select');
        var colorTemp = $('#pdp-color-select option:selected').text();
        // var colorTemp = $(filtered.selectors.color).text();
        var color = colorExist ? ((colorTemp !== 'Select a Color') ? colorTemp : 'select') : '';
        color = $('meta[itemprop=color]').attr('content') ? $('meta[itemprop=color]').attr('content') : color;
        console.log('color>>>>>>', color);
        var imageUrl = $('button[aria-label="Zoom into product image"] img').first().attr('src');
        // var imageUrl = $(filtered.selectors.image_url).first().attr('src');
        var count = '1';
        console.log('imageUrl>>>>>', imageUrl);
    }

    return {currencySymbol, price, title, imageUrl, color, size, count, available, store, width, isImageAvailable};
};
