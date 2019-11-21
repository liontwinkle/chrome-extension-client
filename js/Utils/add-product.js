function showMessage(message) {
    $('#page-mask').css('display', 'block');
    $('#addToCartModal').css('display', 'block');
    $('#successIcon').css('display', 'none');
    $('#addToCartProductDetail').css('display', 'none');
    $('#addToCartError').css('display', 'block');
    $('#addToCartError').html(message);
    $('#addToCart-Ok').css({'display': 'block', 'width': '270px'});
    $('#resetCurrency').css('display', 'none');
    $('#addToCart-checkOut').css('display', 'none');
}

function showProductInfo(count, title, imageUrl) {
    $('.companyNotification').css('display', 'none');
    $('.companyNotification').text(count);
    $('#page-mask').css('display', 'block');
    $('#successIcon').css('display', 'inline');
    $('#addToCartModal').css('display', 'block');
    $('#addToCartProductDetail').css('display', 'block');
    $('#addToCartTitle').text(title);
    $('#addToCartImage').attr('src', imageUrl);
    $('#addToCart-checkOut').css('display', 'block');
    $('#addToCart-Ok').css('display', 'none');
    $('#resetCurrency').css('display', 'none');
    $('#addToCartError').css('display', 'none');
}

const addProduct = (ProductCurrencySymbol, ProductPrice, title, imageUrl, color, size, count, available, store, width, isImageAvailable) => {
    if (available === true) {
        if (!isImageAvailable) {
            if (ProductCurrencySymbol === '$' ||
                ProductCurrencySymbol === '£' ||
                ProductCurrencySymbol === '€') {
                chrome.storage.local.get(['ProductCurrencySymbol'], function (result) {
                    var message = null;
                    var isAddedCurrency = false;
                    if (!result.ProductCurrencySymbol) {
                        chrome.storage.local.set({'ProductCurrencySymbol': ProductCurrencySymbol}, function () {
                        });
                        isAddedCurrency = true;
                    }
                    if (isAddedCurrency || result.ProductCurrencySymbol === ProductCurrencySymbol) {
                        let productDetails = {
                            'productTitle': title + store + size + ProductPrice + color,
                            'productPrice': ProductPrice,
                            'productImage': imageUrl,
                            'productColor': color,
                            'productCurrency': ProductCurrencySymbol,
                            'productPage': location.href,
                            'productSize': size,
                            'productWidth': width || '',
                            'productStore': store,
                            'itemCount': parseInt(count)
                        };
                        if (productDetails.productSize === 'select') {
                            message = 'Please select a product size.';
                            showMessage(message);
                        } else if (productDetails.productWidth === 'select') {
                            message = 'Please select a product width.';
                            showMessage(message);
                        } else if (productDetails.productColor === '') {
                            message = 'Please select a product color.';
                            showMessage(message);
                        } else if (productDetails.productPrice === '') {
                            message = 'Please select a product with price.';
                            showMessage(message);
                        } else {
                            showProductInfo(count, title, imageUrl);
                            chrome.storage.local.set({productOne: JSON.stringify(productDetails)}, function () {
                            });
                            chrome.storage.local.get(['productOne'], function () {
                                saveProduct();
                            });
                        }
                    } else {
                        $('#page-mask').css('display', 'block');
                        $('#addToCartModal').css('display', 'block');
                        $('#successIcon').css('display', 'none');
                        $('#addToCartProductDetail').css('display', 'none');
                        $('#addToCartError').css('display', 'block');
                        $('#addToCartError').html("The currency doesn't not match.</br></br> Do you want to reset your cart and continue?");
                        $('#resetCurrency').css('display', 'block');
                        $('#resetCurrency').css('width', 'calc(50% - 5px)');
                        $('#addToCart-Ok').css('display', 'block');
                        $('#addToCart-Ok').css('width', 'calc(50% - 5px)');
                        $('#addToCart-Ok').html('OK');
                        $('#addToCart-checkOut').css('display', 'none');
                    }
                });
            } else {
                var message = 'This currency is not allowed </br></br> USD, EUR and GBP are available';
                showMessage(message);
            }
        } else {
            message = 'Network problem.</br> Please try again';
            showMessage(message);
        }
    } else {
        message = 'This product is not available';
        showMessage(message);
    }
};
