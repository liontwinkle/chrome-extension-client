const productEbay = () => {
    if (
        $("[itemprop = price]") && $("[itemprop = price]").length > 0 && $("[itemprop = price]")[0].innerHTML ||
        $.trim($('#prcIsum').html()) ||
        $.trim($('#mm-saleDscPrc').html()) ||
        $.trim($('.display-price').html()) ||
        $.trim($('#prcIsum_bidPrice').html())) {

        var tempProductPriceStr = $("[itemprop = price]") && $("[itemprop = price]").length > 0 && $("[itemprop = price]")[0].innerHTML ||
            $.trim($('#prcIsum').html()) ||
            $.trim($('#mm-saleDscPrc').html()) ||
            $.trim($('.display-price').html()) ||
            $.trim($('#prcIsum_bidPrice').html());
        var tempProductPrice = tempProductPriceStr.replace(',', '');
        var regex = /[+-]?\d+(\.\d+)?/g;
        tempProductPrice = tempProductPrice.match(regex)[0];
        var ProductPrice = tempProductPrice / 100;
        console.log('tempProductPriceStr', tempProductPriceStr);
        console.log('ProductPrice', ProductPrice);
        var ProductCurrencySymbol = tempProductPriceStr.replace(',', '');
        ProductCurrencySymbol = ProductCurrencySymbol.replace('USD', '$');
        ProductCurrencySymbol = ProductCurrencySymbol.replace(tempProductPrice, '');
        ProductCurrencySymbol = ProductCurrencySymbol.replace('US', '');
        ProductCurrencySymbol = ProductCurrencySymbol.replace('/ea', '');
        ProductCurrencySymbol = ProductCurrencySymbol.replace('GBP', '£');
        ProductCurrencySymbol = ProductCurrencySymbol.trim();
        if (ProductCurrencySymbol === 'EUR') {
            ProductCurrencySymbol = '€';
        }
        var imageUrl = $.trim($("#icImg").attr('src')) || $.trim($(".vi-image-gallery__enlarge-link img").attr('src'))
        console.log('image', imageUrl);
        console.log(ProductCurrencySymbol);
        var productName = $.trim($('#itemTitle').text()) || $.trim($('.product-card-wrapper .product-title').text());
        productName = productName.replace("'", '');
        var colorExist = $.trim($('#msku-sel-1[name="Color"]').text()) ||
            $.trim($('#msku-sel-2[name="Color"]').text()) ||
            $.trim($('#msku-sel-1[name="color"]').text()) ||
            $.trim($('#msku-sel-2[name="color"]').text()) ||
            $.trim($('#msku-sel-1[name="Main Colour"]').text()) ||
            $.trim($('#msku-sel-2[name="Main Colour"]').text()) ||
            $.trim($('#msku-sel-1[name="Colors"]').text()) ||
            $.trim($('#msku-sel-2[name="Colors"]').text()) ||
            $.trim($('#msku-sel-1[name="Colour"]').text()) ||
            $.trim($('#msku-sel-2[name="Colour"]').text());
        var sizeExist = $.trim($('#msku-sel-1[name="Size"]').text()) ||
            $.trim($('#msku-sel-2[name="Size"]').text()) ||
            $.trim($('#msku-sel-1[name="Modle"]').text()) ||
            $.trim($('#msku-sel-1[name="size"]').text()) ||
            $.trim($('#msku-sel-2[name="size"]').text()) ||
            $.trim($('#msku-sel-1[name="Sizes"]').text()) ||
            $.trim($('#msku-sel-2[name="Sizes"]').text()) ||
            $.trim($('#msku-sel-1[name="Size (Women\'s)"]').text()) ||
            $.trim($('#msku-sel-2[name="Size (Women\'s)"]').text()) ||
            $.trim($('#msku-sel-1[name="Size (Men\'s)"]').text()) ||
            $.trim($('#msku-sel-2[name="Size (Men\'s)"]').text()) ||
            $.trim($('#msku-sel-1[name="Style"]').text()) ||
            $.trim($('#msku-sel-2[name="Style"]').text()) ||
            $.trim($('#msku-sel-1[name="Shoe Size"]').text()) ||
            $.trim($('#msku-sel-1[name="Light Source"]').text()) ||
            $.trim($('#msku-sel-2[name="Shoe Size"]').text()) ||
            $.trim($('#msku-sel-1[name="US Shoe Size (Men\'s)"]').text()) ||
            $.trim($('#msku-sel-2[name="US Shoe Size (Men\'s)"]').text()) ||
            $.trim($('#msku-sel-1[name="US Shoe Size (Women\'s)"]').text()) ||
            $.trim($('#msku-sel-2[name="US Shoe Size (Women\'s)"]').text());
        var color = colorExist ? (
            $.trim($('#msku-sel-1[name="Color"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="Color"] option:selected').text()) ||
            $.trim($('#msku-sel-1[name="color"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="color"] option:selected').text()) ||
            $.trim($('#msku-sel-1[name="Main Colour"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="Main Colour"] option:selected').text()) ||
            $.trim($('#msku-sel-1[name="Colors"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="Colors"] option:selected').text()) ||
            $.trim($('#msku-sel-1[name="Colour"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="Colour"] option:selected').text())) : null;

        var size = sizeExist ? (
            $.trim($('#msku-sel-1[name="Size"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="Size"] option:selected').text()) ||
            $.trim($('#msku-sel-1[name="size"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="size"] option:selected').text()) ||
            $.trim($('#msku-sel-1[name="Sizes"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="Sizes"] option:selected').text()) ||
            $.trim($('#msku-sel-1[name="Size (Women\'s)"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="Size (Women\'s)"] option:selected').text()) ||
            $.trim($('#msku-sel-1[name="Size (Men\'s)"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="Size (Men\'s)"] option:selected').text()) ||
            $.trim($('#msku-sel-1[name="Modle"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="Modle"] option:selected').text()) ||
            $.trim($('#msku-sel-1[name="Style"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="Style"] option:selected').text()) ||
            $.trim($('#msku-sel-1[name="US Shoe Size (Men\'s)"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="US Shoe Size (Men\'s)"] option:selected').text()) ||
            $.trim($('#msku-sel-1[name="US Shoe Size (Women\'s)"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="US Shoe Size (Women\'s)"] option:selected').text()) ||
            $.trim($('#msku-sel-1[name="Shoe Size"] option:selected').text()) ||
            $.trim($('#msku-sel-2[name="Shoe Size"] option:selected').text())) : null;
        var store = 'ebay';
        var available = true;
        var count = 1;
    } else {
        available = false;
    }

    addProduct(ProductCurrencySymbol, ProductPrice,  productName, imageUrl, color, size, count, available, store);
};
