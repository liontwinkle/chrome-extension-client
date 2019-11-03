// The function to rearrange the products in view cart

function viewCart(cartProductsPostRemove) {
    for (let i = 0; i < cartProductsPostRemove.length; i++) {
        var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right; width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProductsPostRemove[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>" + cartProductsPostRemove[i].productStore + ".com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProductsPostRemove[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProductsPostRemove[i].productCurrency + cartProductsPostRemove[i].productPrice + "</div><div style='user-select: none; display: flex; margin-top: 15px; box-shadow: 0 4px 8px 0rgba(0,0,0,0.03);	border: 1px solid #E2E5E6;	border-radius: 5px; width: min-content;'><span class='removeItem' style='padding: 2px 10px;cursor: pointer;'>-</span><span class='itemCount' id='" + i + "' style=' padding: 2px 7px;'>" + cartProductsPostRemove[i].itemCount + "</span><span class='addItem' style='padding: 2px 10px;cursor: pointer;'>+</span></div></div><div style='float: right; width: 100px;'><div style='width: 100px; height: 100px;display: flex; justify-content: center'><img style='max-width: 100%; max-height: 100%; width: unset;' src='" + cartProductsPostRemove[i].productImage + "'/></div><div id='" + i + "'  class='removeButton' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</div></div></div></div>";
        $('#cartDetailSection').prepend(element);
    }
}

$('#viewCartModal').ready(function () {

    $('body').on('click', '#cartButton', function () {
        $('#cartsWrapper').css('display', 'block');
        $('#favWrapper').css('display', 'none');
        $('#cartButton').css({'background': '#E2E5E6', 'opacity': '1'});
        $('#favButton').css({'background': 'none', 'opacity': '1'});
    });

    $('body').on('click', '#favButton', function () {
        $('#cartsWrapper').css('display', 'none');
        $('#favWrapper').css('display', 'block');
        $('#cartButton').css('background', 'none');
        $('#favButton').css({'background': '#E2E5E6', 'opacity': '1'});

        $('#favCartDetailSection').empty();
        chrome.storage.local.get(['favCartDetails'], function (result) {
            var cartProducts = JSON.parse(result.favCartDetails);

            for (let i = 0; i < cartProducts.length; i++) {
                $('#viewCartModal').css('height', 'calc(100vh - 65px)');
                var element = "<div style='padding: 20px 0; border-bottom: 1px solid #D1D1D1'><div style='float: right;width: 100%;'><div style='float: left; width: 55%;'><a href='" + cartProducts[i].productPage + "' style='text-decoration: none;color: #FF7E18;font-size: 14px;line-height: 19px;'>" + cartProducts[i].productStore + ".com</a><div style='font-size: 14px;line-height: 19px; margin-top: 10px;'>Title: " + cartProducts[i].productTitle + "</div><div style='font-size: 16px;font-weight: 600;line-height: 20px; margin-top: 10px;'>" + cartProducts[i].productCurrency + cartProducts[i].productPrice + "</div></div><div style='float: right; width: 100px;'><img style='max-width: 100%;' src='" + cartProducts[i].productImage + "'/><div id='" + i + "'  class='removeButtonFav' style='float: right;margin-top: 40px;color: #D0021B;font-size: 14px;border: none;background: white;'>Remove</div></div></div></div>";
                $('#favCartDetailSection').prepend(element);
            }
        });
    });
});
