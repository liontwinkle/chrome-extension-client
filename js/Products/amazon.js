const productAmazon = () => {
    var store = 'amazon';
    var available = true;
    var isLargeValue = $('.price-large').text();
    var price = '';
    var width = null;
    var currencySymbol = '';
    if (isLargeValue) {
        var optionValue = $('input[name=BuyboxType]:checked').val();
        var selClass = '#new-button-price';
        if (optionValue === 'new') {
            selClass = '#new-button-price';
        } else {
            selClass = '#used-button-price';
        }
        if ($(selClass + ' .majorValue').text() || $(selClass + ' .minorValue').text()) {
            price = $(selClass + ' .majorValue').text() + '.' + $(selClass + ' .minorValue').text();
            console.log('price', price);
            currencySymbol = $(selClass + ' .currencySymbol').text();
        } else {
            available = false;
        }
    } else {
        var tempProduct =
            $('#priceblock_ourprice').text() ||
            $('#priceblock_dealprice').text() ||
            $('#priceblock_saleprice').text() ||
            $('#buyNew_noncbb span').text();
        var splitIndex = tempProduct.indexOf('-');
        if (splitIndex > 0) {
            tempProduct = tempProduct.slice(0, splitIndex - 1);
        }
        price = tempProduct.replace(',', '');
        var regex = /[+-]?\d+(\.\d+)?/g;
        price = price.match(regex) && price.match(regex)[0] || '';
        currencySymbol = tempProduct.replace(',', '');
        currencySymbol = currencySymbol.replace(price, '');
        currencySymbol = currencySymbol.trim();
        if (currencySymbol === '€') {
            price = price.replace('.', '');
            price = price / 100;
        }
    }
    var count = $('#quantity option:selected').text() || 1;
    var title = $.trim($('#productTitle').text()).replace("'", '').slice(0, 100);
    console.log('title', title);
    var imageUrl = "https://lp2.hm.com/hmgoepprod?set=source[/87/71/87712c91e735c5705e35475271e6bbdbc1e2352a.jpg],origin[dam],category[men_socks],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]";
    console.log('imageUrl', imageUrl);
    var isImageAvailable = imageUrl.includes('data:image');
    var colorExist = $.trim($('#variation_color_name').find('.selection').text());
    var color = colorExist ? colorExist : null;
    console.log('color', color);
    var sizeExist = $.trim($('#dropdown_selected_size_name').find('.a-dropdown-prompt').text());
    var size = sizeExist ? sizeExist : null;
    console.log('size', size);
    console.log('currencySymbol', currencySymbol);
    console.log('price', price);
    console.log('count', count);
    price = price * count;

    return {currencySymbol, price, title, imageUrl, color, size, count, available, store, width, isImageAvailable};
};
