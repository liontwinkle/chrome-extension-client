const productStorage = (data) => {
    var ProductCurrencySymbol = data.currency;
    var ProductPrice = data.price;
    var title = data.title;
    var imageUrl = data.image;
    var color = data.color;
    var size = data.size;
    var count = data.item_count;
    var store = data.store;
    var width = data.width;
    var id = data.product_id;

    let productDetails = {
        'productTitle': title + store + size + ProductPrice + color,
        'productPrice': ProductPrice,
        'productImage': imageUrl,
        'productColor': color,
        'productCurrency': ProductCurrencySymbol,
        'productPage': location.href,
        'productSize': size,
        'productCount': count,
        'productWidth': width || '',
        'productStore': store,
        'itemCount': parseInt(count),
        'productId': id
    };

    chrome.storage.local.get(['cartDetails'], function (result) {
        console.log('cartDetails');
        if (result && result.cartDetails && JSON.parse(result.cartDetails).length > 0) {
            var productListPostAdd = JSON.parse(result.cartDetails);
            var isAddedProduct = false;
            for (var i = 0; i < productListPostAdd.length; i++) {
                if ((productDetails.productColor === productListPostAdd[i].productColor)
                    && (productDetails.productTitle === productListPostAdd[i].productTitle)
                    && (productDetails.productWidth === productListPostAdd[i].productWidth)
                    // && (productDetails.productPrice === productListPostAdd[i].productPrice)
                    && (productDetails.productSize === productListPostAdd[i].productSize)) {
                    isAddedProduct = true;
                    var newItemCount = productListPostAdd[i].itemCount + parseInt(count);
                    productListPostAdd[i].itemCount = newItemCount;
                    newItemCount = parseInt(newItemCount);
                    var oldPrice = productListPostAdd[i].productPrice;
                    oldPrice = parseFloat(oldPrice);
                    var newPrice = oldPrice + parseFloat(ProductPrice);
                    newPrice = newPrice.toFixed('2');
                    productListPostAdd[i].productPrice = newPrice;
                    var subtotal = 0;
                    subtotal = parseInt(subtotal);
                    for (var a = 0; a < productListPostAdd.length; a++) {
                        subtotal = subtotal + parseFloat(productListPostAdd[a].productPrice)
                    }
                    $('#subtotal').text(subtotal);
                    chrome.storage.local.set({cartDetails: JSON.stringify(productListPostAdd)}, function () {
                    });
                    chrome.runtime.sendMessage({
                        greeting: 'setCartDetails',
                        data: productListPostAdd
                    }, function (response) {
                    });
                    var tempCount = 0;
                    for (j = 0; j < productListPostAdd.length; j++) {
                        tempCount = tempCount + productListPostAdd[j].itemCount
                    }
                    $('.companyNotification').css('display', 'flex');
                    $('.companyNotification').text(tempCount);
                }
            }
            if (isAddedProduct === false) {
                console.log('isaddedprodcut false');
                chrome.storage.local.get(['cartDetails'], function (result) {
                    if (result) {
                        var cartDetails = JSON.parse(result.cartDetails);
                        cartDetails.push(productDetails);
                        chrome.storage.local.set({cartDetails: JSON.stringify(cartDetails)}, function () {
                        });
                        chrome.runtime.sendMessage({
                            greeting: 'setCartDetails',
                            data: cartDetails
                        }, function (response) {
                        });
                        var subtotal = 0;
                        subtotal = parseInt(subtotal);
                        for (k = 0; k < cartDetails.length; k++) {
                            subtotal = subtotal + parseFloat(cartDetails[k].productPrice);
                        }
                        subtotal = subtotal.toFixed(2);
                        $('#subtotal').text(subtotal);

                        var tempCount = 0;
                        for (l = 0; l < cartDetails.length; l++) {
                            tempCount = tempCount + cartDetails[l].itemCount
                        }
                        $('.companyNotification').css('display', 'flex');
                        $('.companyNotification').text(tempCount);
                    }
                });
            }
        }
        else {
            var cartDetails = [];
            cartDetails.push(productDetails);
            chrome.storage.local.set({cartDetails: JSON.stringify(cartDetails)}, function () {
            });
            chrome.storage.local.get(['cartDetails'], function (result) {
            });
            chrome.runtime.sendMessage({
                greeting: 'setCartDetails',
                data: cartDetails
            }, function (response) {
            });
            $('.companyNotification').css('display', 'flex');
            $('.companyNotification').text(count);
        }
    })
};
