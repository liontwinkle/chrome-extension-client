var lgsBaseUrl = "http://ex.travelcast.us/api/";

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        if (request.greeting = 'sendShoppingCartDetails') {

            $.ajax({
                method: 'POST',
                url: lgsBaseUrl + "cartdetails",
                data: JSON.stringify(request.data),
                headers: {
                    "Accept": "application/json"
                }
            }).done(function (info) {

                console.log(info);

            }).fail(function (info) {

                console.log(info);
            })
        }

        if (request.notifications === "signUp") {

            $.ajax({
                method: 'POST',
                url: lgsBaseUrl + "register?XDEBUG_SESSION_START=PHPSTORM",
                data: request.message,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).done(function (info) {

                chrome.runtime.sendMessage({response: "signUpTrue", data: info}, function (response) {

                });

            }).fail(function (info) {
                chrome.runtime.sendMessage({response: "signUpFalse", data: info}, function (response) {});
            });
        }

        if (request.notifications === "logIn") {
            $.ajax({
                method: 'POST',
                url: lgsBaseUrl + "login?XDEBUG_SESSION_START=PHPSTORM",
                data: request.message,
                headers: {"Content-Type": "application/x-www-form-urlencoded"}
            }).done(function (info) {
                chrome.runtime.sendMessage({response: "signInTrue", data: info}, function (response) {});

            }).fail(function (info) {
                chrome.runtime.sendMessage({response: "signInFalse", data: info}, function (response) {});
            });
        }

        if (request.notifications === "logOut") {

            detailsObject = JSON.parse(localStorage.getItem('details'));
            $.ajax({
                method: 'POST',
                url: lgsBaseUrl + "logout?XDEBUG_SESSION_START=PHPSTORM",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "Bearer " + detailsObject.access_token
                }
            }).done(function (info) {
                localStorage.removeItem('details');
                localStorage.setItem('loggedIn', 'false');
                chrome.runtime.sendMessage({response: "signOutTrue", data: info}, function (response) {                });
            })
        }
    });
