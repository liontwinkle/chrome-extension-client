const addFavorite = (currencySymbol, price, title, imageUrl, color, size, count, available, store, width, isImageAvailable) => {
    if (available === true) {
        if (!isImageAvailable) {
            if (currencySymbol === '$' ||
                currencySymbol === '£' ||
                currencySymbol === '€') {
                chrome.storage.local.get(['currencySymbol'], function (result) {
                    var isAddedProduct = false;
                    if (!result.currencySymbol) {
                        chrome.storage.local.set({'currencySymbol': currencySymbol}, function () {
                        });
                        isAddedProduct = true;
                    }
                    if (isAddedProduct || result.currencySymbol === currencySymbol) {
                        var productDetails = {
                            // 'productTitle': title + store + size + price + color,
                            'productTitle': title,
                            'productPrice': price,
                            'productImage': imageUrl,
                            'productColor': color,
                            'productCurrency': currencySymbol,
                            'productPage': location.href,
                            'productSize': size,
                            'productWidth': width || '',
                            'productStore': store,
                            'itemCount': 1
                        };
                        if (productDetails.productSize === 'select') {
                            message = 'Please select a product size.';
                            showMessage(message);
                        } else if (productDetails.productColor === '') {
                            message = 'Please select a product color.';
                            showMessage(message);
                        } else if (productDetails.productWidth === 'select') {
                            message = 'Please select a product width.';
                            showMessage(message);
                        } else if (productDetails.productPrice === '') {
                            message = 'Please select a product with price.';
                            showMessage(message);
                        } else {
                            $('#favouriteIcon').attr('src', 'chrome-extension://' + chrome.runtime.id + '/images/Carts/favouriteAdd.png');
                            chrome.storage.local.set({productTwo: JSON.stringify(productDetails)}, function () {
                            });
                            chrome.storage.local.get(['productTwo'], function () {
                                saveFavorite();
                            });
                        }
                    }
                    else {
                        var message = 'The currency doesn\'t not match';
                        showMessage(message);
                    }
                });
            } else {
                var message = 'This currency is not allowed </br></br> USD, EUR and GBP are available';
                showMessage(message);
            }
        }
        else {
            message = 'Network problem.</br> Please try again';
            showMessage(message);
        }
    } else {
        message = 'This product is not available';
        showMessage(message);
    }
};
