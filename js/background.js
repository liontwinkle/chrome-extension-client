var lgsBaseUrl = 'http://ex.travelcast.us/api/';

chrome.runtime.onMessage.addListener(
    function (request, response, sendResponse) {

        if (request.greeting === 'sendShoppingCartDetails') {

            $.ajax({
                method: 'POST',
                url: lgsBaseUrl + 'cartdetails',
                data: JSON.stringify(request.data),
                headers: {
                    'Accept': 'application/json'
                }
            })
        }

        if (request.notifications === 'signUp') {

            $.ajax({
                method: 'POST',
                url: lgsBaseUrl + 'register',
                data: request.message,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).done(function (info) {
                sendResponse({success: true, data: info});
            }).fail(function (info) {
                sendResponse({success: false, data: info});
            });
        }

        if (request.notifications === 'logIn') {
            $.ajax({
                method: 'POST',
                url: lgsBaseUrl + 'login',
                data: request.message,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).done(function (info) {
                sendResponse({success: true, data: info});
            }).fail(function (info) {
                sendResponse({success: false, data: info});
            });
        }

        if (request.notifications === 'logOut') {

            var detailsObject = JSON.parse(localStorage.getItem('details'));
            $.ajax({
                method: 'POST',
                url: lgsBaseUrl + 'logout',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + detailsObject.access_token
                }
            }).done(function (info) {
                localStorage.removeItem('details');
                localStorage.setItem('loggedIn', 'false');
                sendResponse({success: true, data: info});
            })
        }

        return true
    });
