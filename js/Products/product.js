const productAdd = (name) => {
    var store = name;
    var retailers = localStorage.getItem('retailers');
    const filtered = JSON.parse(retailers).find(item => item.name === store);
    var available = true;
    var isImageAvailable = null;
    var width = null;
    var size = null;
    var color = null;
    console.log('filtered', filtered.selectors);
    var priceStr = eval(filtered.selectors[0].price);
    if (priceStr.length === 0) {
        available = false;
    } else {
        priceStr = priceStr.replace(',', '');
        priceStr = priceStr.includes('-') ? '' : priceStr;
        var regex = /[+-]?\d+(\.\d+)?/g;
        var price = priceStr.match(regex)[0];
        var currencySymbol = priceStr.replace(price, '');
        currencySymbol = currencySymbol.replace('USD', '');
        currencySymbol = currencySymbol.replace('US', '');
        currencySymbol = currencySymbol.replace('/ea', '');
        currencySymbol = currencySymbol.trim();
        if (currencySymbol === '€') {
            if (!price.includes('.')) price = price / 100;
        }
        var title = $(filtered.selectors[0].title).text();
        title = title.replace("'", '');
        eval(filtered.selectors[0].size);
        eval(filtered.selectors[0].color);
        var imageUrl = eval(filtered.selectors[0].image_url);
        if (imageUrl.includes('?')) imageUrl = imageUrl.slice(0, imageUrl.indexOf('?'));
        if (imageUrl.includes(';')) imageUrl = imageUrl.slice(0, imageUrl.indexOf(';'));
        if (!imageUrl.includes('https')) {
            console.log('image https include');
            imageUrl = 'https:' + imageUrl;
        }
        var count = eval(filtered.selectors[0].count) || '1';
        if (count.includes('quantity')) count = count.slice(count.indexOf('&quantity') + 10) || 1;
        console.log('priceStr>>>>>>', priceStr);
        console.log('currencySymbol-Revolve>>>>>>', currencySymbol);
        console.log('price>>>>>', price);
        console.log('title>>>>>>', title);
        console.log('color>>>>>>', color);
        console.log('size>>>>>>', size);
        console.log('count>>>>>>', count);
        console.log('imageUrl>>>>>', imageUrl);
    }

    return {currencySymbol, price, title, imageUrl, color, size, count, available, store, width, isImageAvailable};
};
