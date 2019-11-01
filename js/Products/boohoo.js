const productBoohoo = () => {
    var store = 'boohoo';
    var available = true;
    var width = null;
    var isImageAvailable = null;
    var priceStr = $('.product-price .price-sales').text();
    priceStr = priceStr.replace(',', '');
    console.log('priceStr>>>>>>>>>', priceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var price = priceStr.match(regex)[0];
    console.log('price>>>>>', price);
    var currencySymbol = priceStr.replace(price, '');
    currencySymbol = currencySymbol.replace('USD', '');
    currencySymbol = currencySymbol.trim();
    console.log('currencySymbol-colourpop>>>>>>', currencySymbol);
    var title = $('.product-detail .product-name').text();
    title = title.replace("'", '');
    var imageUrl = $('.product-primary-image .primary-image').attr('src');
    imageUrl = 'https:' + imageUrl;
    imageUrl = imageUrl.split('?')[0];
    var count = $('.product-actions__quantity--input').val() || 1;
    price = price * count;
    var colorExist = $('.product-variations .selected-value').first().text();
    var color = (colorExist === 'Please select') ? '' : colorExist;
    console.log('color', color);
    var sizeExist = $('.product-variations .selected-value').last().text();
    var size = sizeExist.includes('select') ? 'select' : sizeExist;
    console.log('size', size);

    return {currencySymbol, price,  title, imageUrl, color, size, count, available, store, width, isImageAvailable}
};
