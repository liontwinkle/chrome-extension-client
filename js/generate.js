$(window).ready(function () {

    $.urlParam = function (query) {
        query = query.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        let expr = "[\\?&]" + query + "=([^&#]*)";
        let regex = new RegExp(expr);
        let results = regex.exec(window.location.href);
        if (results !== null) {
            return results[1];
        } else {
            return false;
        }
    };

    function getRandomToken() {
        let randomPool = new Uint8Array(16);
        crypto.getRandomValues(randomPool);
        let hex = '';
        for (let i = 0; i < randomPool.length; ++i) {
            hex += randomPool[i].toString(16);
        }
        return hex;
    }

    let random_id = getRandomToken();
    let rdKey = $.urlParam('rdKey');
    if (rdKey) {
        chrome.storage.local.set({'random_id': rdKey}, function () {
        });
    }
    chrome.storage.local.get(['random_id'], function (result) {
        if (!result.random_id) {
            chrome.storage.local.set({'random_id': random_id}, function () {
            });
        }
    });
    let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    for (let i = 0; i < 15; i++) {
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    let random_email = string + '@domain.com';

    chrome.storage.local.get(['random_name'], function (result) {
        if (!result.random_name) {
            chrome.storage.local.set({'random_name': string}, function () {
            });
        }
    });

    chrome.storage.local.get(['random_email'], function (result) {
        if (!result.random_email) {
            chrome.storage.local.set({'random_email': random_email}, function () {
            });
        }
    });

    $('body').on('click', '#browse-btn', function () {
        $('#go-Modal').css('opacity', '1');
        $('#go-Modal').css('display', 'block');
        $('#go-Modal').css('background-color', 'rgba(0,0,0,0.5)');
        $('#go-Modal-content').css('opacity', '1');
        $('#go-Modal-content').css('display', 'block');
        $('#go-Modal-content').css('transition', 'all 0.5s');

        $('#go-Modal-content').on('click', function (e) {
            e.stopPropagation();
        });

        $('#go-Modal').on('click', function (e) {
            if (e.target !== $('#go-Modal-content')) {
                $('#go-Modal').css('opacity', '0');
                $('#go-Modal').css('display', 'none');
                $('#go-Modal-content').css('opacity', '0');
                $('#go-Modal-content').css('display', 'none');
            }
        });
        $('#close-btn').on('click', function () {
            $('#go-Modal').css('opacity', '0');
            $('#go-Modal').css('display', 'none');
            $('#go-Modal-content').css('opacity', '0');
            $('#go-Modal-content').css('display', 'none');
        });
    });

});
