$('#cartDetailSection').ready(function () {
    $('body').on('click', '.removeItem', function (event) {
        const id = $(this).siblings('.itemCount').attr('id');
        chrome.storage.local.get(['cartDetails'], function (result) {
            var productList = JSON.parse(result.cartDetails);
            var count = productList[id].itemCount;
            count--;
            if (count > 0) {
                productList[id].itemCount = count;
                chrome.storage.local.set({'cartDetails': JSON.stringify(productList)}, function () {
                });
                chrome.runtime.sendMessage({
                    greeting: 'setCartDetails',
                    data: productList
                }, function (response) {
                });
                $(this).siblings('.itemCount').text(count);
                var oldPrice = productList[id].productPrice;
                oldPrice = parseFloat(oldPrice);
                // var count = count;
                count = parseInt(count);
                var newPrice = oldPrice - oldPrice / (count + 1);
                newPrice = newPrice.toFixed('2');
                productList[id].productPrice = newPrice;
                chrome.storage.local.set({'cartDetails': JSON.stringify(productList)}, function () {
                });
                chrome.runtime.sendMessage({
                    greeting: 'setCartDetails',
                    data: productList
                }, function (response) {
                });
                $('#cartDetailSection').empty();
                viewCart(productList);
                var subtotal = 0;
                subtotal = parseInt(subtotal);
                for (i = 0; i < productList.length; i++) {
                    subtotal = subtotal + parseFloat(productList[i].productPrice);
                }
                subtotal = subtotal.toFixed(2);
                $('#subtotal').text(subtotal);
                $('#companyNotification').css('display', 'flex');
                var tempCount = 0;
                for (i = 0; i < productList.length; i++) {
                    tempCount = tempCount + productList[i].itemCount
                }
                $('#companyNotification').text(tempCount);
            }
        })
    });
    $('body').on('click', '.addItem', function () {
        const id = $(this).siblings('.itemCount').attr('id');
        chrome.storage.local.get(['cartDetails'], function (result) {
            var productList = JSON.parse(result.cartDetails);
            var count = productList[id].itemCount;
            count++;
            if (count === 0) {
                productList.splice(id, 1);
                chrome.storage.local.set({cartDetails: JSON.stringify(productList)}, function () {
                });
                chrome.runtime.sendMessage({
                    greeting: 'setCartDetails',
                    data: productList
                }, function (response) {
                });
                $('#companyNotification').css('display', 'flex');
                var tempCount = 0;
                for (i = 0; i < productList.length; i++) {
                    tempCount = tempCount + productList[i].itemCount
                }
                $('#companyNotification').text(tempCount);
                if (productList.length === 0) {
                    $('#companyNotification').css('display', 'none');
                }
                $('#cartDetailSection').empty();
                chrome.storage.local.get(['cartDtails'], function (result) {
                    var cartProductsPostRemove = JSON.parse(result.cartDetails);
                    viewCart(cartProductsPostRemove);
                });
            }
            else {
                productList[id].itemCount = count;
                $(this).siblings('.itemCount').text(count);
                var oldPrice = productList[id].productPrice;
                oldPrice = parseFloat(oldPrice);
                // var count = count;
                count = parseInt(count);
                var newPrice = oldPrice + oldPrice / (count - 1);
                newPrice = newPrice.toFixed(2);
                productList[id].productPrice = newPrice;
                chrome.storage.local.set({cartDetails: JSON.stringify(productList)}, function () {
                });
                chrome.runtime.sendMessage({
                    greeting: 'setCartDetails',
                    data: productList
                }, function (response) {
                });
                $('#cartDetailSection').empty();
                viewCart(productList);
                var subtotal = 0;
                subtotal = parseInt(subtotal);
                for (i = 0; i < productList.length; i++) {
                    subtotal = subtotal + parseFloat(productList[i].productPrice)
                }
                subtotal = subtotal.toFixed(2);
                $('#subtotal').text(subtotal);
                $('#companyNotification').css('display', 'flex');
                tempCount = 0;
                for (i = 0; i < productList.length; i++) {
                    tempCount = tempCount + productList[i].itemCount
                }
                $('#companyNotification').text(tempCount);
            }
        });
    });
    $('body').on('click', '.removeButton', function () {
        const id = $(this).attr('id');
        chrome.storage.local.get(['cartDetails'], function (result) {
            var productList = JSON.parse(result.cartDetails);
            productList.splice(id, 1);
            chrome.storage.local.set({cartDetails: JSON.stringify(productList)}, function () {
            });
            chrome.runtime.sendMessage({greeting: 'setCartDetails', data: productList}, function (response) {
            });
            if (productList.length === 0) {
                $('#companyNotification').css('display', 'none');
                $('#subtotal').text(0);
            }
            else {
                var subtotal = 0;
                subtotal = parseInt(subtotal);
                for (i = 0; i < productList.length; i++) {
                    subtotal = subtotal + parseFloat(productList[i].productPrice)
                }
                subtotal = subtotal.toFixed(2);
                $('#subtotal').text(subtotal);
                $('#companyNotification').css('display', 'flex');
                var tempCount = 0;
                for (i = 0; i < productList.length; i++) {
                    tempCount = tempCount + productList[i].itemCount
                }
                $('#companyNotification').text(tempCount);
            }
            $('#cartDetailSection').empty();

            chrome.storage.local.get(['cartDetails'], function (result) {
                var cartProductsPostRemove = JSON.parse(result.cartDetails);
                viewCart(cartProductsPostRemove);
            });
        });
    });
});
