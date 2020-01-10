const favoriteStorage = (data) => {

    var currencySymbol = data.currency;
    var price = data.price;
    var title = data.title;
    var imageUrl = data.image;
    var color = data.color;
    var size = data.size;
    var count = data.item_count;
    var store = data.store;
    var width = data.width;
    var id = data.product_id;

    var productDetails = {
        'productTitle': title,
        'productPrice': price,
        'productImage': imageUrl,
        'productColor': color,
        'productCurrency': currencySymbol,
        'productPage': location.href,
        'productSize': size,
        'productCount': count,
        'productWidth': width || '',
        'productStore': store,
        'itemCount': 1,
        'productId': id
    };
    chrome.storage.local.get(['favCartDetails'], function (result) {
        if (result && result.favCartDetails && JSON.parse(result.favCartDetails).length > 0) {
            var productListPostAdd = JSON.parse(result.favCartDetails);
            var sameProductSKU = false;
            for (i = 0; i < productListPostAdd.length; i++) {
                if ((productDetails.productTitle === productListPostAdd[i].productTitle)
                    && (productDetails.productColor === productListPostAdd[i].productColor)
                    && (productDetails.productWidth === productListPostAdd[i].productWidth)
                    && (productDetails.productSize === productListPostAdd[i].productSize)) {
                    sameProductSKU = true;
                    var newItemCount = productListPostAdd[i].itemCount + 1;
                    productListPostAdd[i].itemCount = newItemCount;
                    newItemCount = parseInt(newItemCount);
                    var oldPrice = productListPostAdd[i].price;
                    oldPrice = parseFloat(oldPrice);
                    price = parseFloat(price);
                    var newPrice = oldPrice + price;
                    newPrice = newPrice.toFixed('2');
                    productListPostAdd[i].price = newPrice;
                    chrome.storage.local.set({favCartDetails: JSON.stringify(productListPostAdd)}, function () {
                    });
                }
            }
            if (sameProductSKU === false) {
                chrome.storage.local.get(['favCartDetails'], function (result) {
                    if (result) {
                        var favCartDetails = JSON.parse(result.favCartDetails);
                        favCartDetails.push(productDetails);
                        chrome.storage.local.set({favCartDetails: JSON.stringify(favCartDetails)}, function () {
                        });
                    }
                });
            }
        } else {
            var favCartDetails = [];
            favCartDetails.push(productDetails);
            chrome.storage.local.set({favCartDetails: JSON.stringify(favCartDetails)}, function () {
            });
        }
    })

};
