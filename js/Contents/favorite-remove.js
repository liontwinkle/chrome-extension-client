$('body').on('click', '.removeButtonFav', function () {

    const id = $(this).attr('id');
    chrome.storage.local.get(['favCartDetails'], function (result) {
        var productList = JSON.parse(result.favCartDetails);
        console.log('product_id', productList[id].productId);
        var productId = productList[id].productId;
        deleteFavorite(productId);
        productList.splice(id, 1);
        chrome.storage.local.set({favCartDetails: JSON.stringify(productList)}, function () {
        });
        chrome.runtime.sendMessage({
            greeting: 'setCartDetails',
            data: productList
        }, function (response) {
        });
        $('#favCartDetailSection').empty();
        chrome.storage.local.get(['favCartDetails'], function (result) {
                var cartProductsPostRemove = JSON.parse(result.favCartDetails);
                for (let i = 0; i < cartProductsPostRemove.length; i++) {
                    var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right; width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>" + cartProductsPostRemove[i].productStore + ".com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px; word-break: break-all;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: flex; margin-top: 15px; box-shadow: 0 4px 8px 0rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProductsPostRemove[i].productImage + "'/><div id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</div></div></div></div>";
                    $('#favCartDetailSection').prepend(element);
                }
            }
        );
        chrome.storage.local.get(['favCartDetails'], function (result) {
            if (result.favCartDetails) {
                var cartProducts = JSON.parse(result.favCartDetails);
                var isFav = false;

                for (var i = 0; i < cartProducts.length; i++) {
                    if (cartProducts[i].productPage === location.href) {
                        isFav = true;
                    }
                }
                if (isFav) {
                    var favouriteIcon = 'chrome-extension://' + chrome.runtime.id + "/images/Carts/favouriteAdd.png";
                } else {
                    favouriteIcon = 'chrome-extension://' + chrome.runtime.id + "/images/Carts/favourite.png";
                }
                $('#favouriteIcon').attr('src', favouriteIcon);
            } else {
                $('#favouriteIcon').attr('src', 'chrome-extension://' + chrome.runtime.id + "/images/Carts/favourite.png");
            }
        });
    });
});
