const productEbay = () => {
    var store = 'ebay';
    var available = true;
    var width = null;
    var isImageAvailable = null;
    var priceStr =  $('#prcIsum').text() || $('#mm-saleDscPrc').text() || $('.display-price').text() || $('#prcIsum_bidPrice').text();
    priceStr = priceStr.replace(',', '');
    console.log('priceStr>>>>>>>>>', priceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var price = priceStr.match(regex)[0];
    let currencySymbol = priceStr.replace(',', '');
    currencySymbol = currencySymbol.replace('USD', '$');
    currencySymbol = currencySymbol.replace(price, '');
    currencySymbol = currencySymbol.replace('US', '');
    currencySymbol = currencySymbol.replace('/ea', '');
    currencySymbol = currencySymbol.trim();
    console.log('price', price);
    console.log('currencySymbol', currencySymbol);
    var title = $('#itemTitle').clone().children().remove().end().text() || $('.product-card-wrapper .product-title').text();
    title = title.replace("'", '');
    var imageUrl = $('img[itemprop=image]').attr('src');
    var count = $('#qtyTextBox').val() || 1;
    price = price * count;
    console.log('imageUrl', imageUrl);
    console.log('count', count);
    var colorTemp1 = $('#msku-sel-1 option:selected').text() || '';
    var colorTemp2 = $('#msku-sel-2 option:selected').text() || '';
    var size = ($('#msku-sel-1').attr('name') || '').toLowerCase().includes('size') ?
        (colorTemp1.toLowerCase().includes('select') ? 'select' : colorTemp1) :
        (($('#msku-sel-2').attr('name') || '').toLowerCase().includes('size') ?
            (colorTemp2.toLowerCase().includes('select') ? 'select' : colorTemp2) : null);
    var color = ($('#msku-sel-1').attr('name') || '').toLowerCase().includes('colo') ?
        (colorTemp1.toLowerCase().includes('select') ? '' : colorTemp1) :
        (($('#msku-sel-2').attr('name') || '').toLowerCase().includes('colo') ?
            (colorTemp2.toLowerCase().includes('select') ? '' : colorTemp2) : null);
    console.log('size', size);
    console.log('color', color);
    console.log('title', title);
    return {currencySymbol, price, title, imageUrl, color, size, count, available, store, width, isImageAvailable};
};

