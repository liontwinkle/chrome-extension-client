$(window).ready(function () {

    var loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    if (loggedIn === false) {
        $("#logout").css("display", "none")
    }

    if (loggedIn === true) {
        $("#logOutButton").on("click", function () {
            localStorage.setItem('loggedIn', JSON.stringify(false));
            chrome.storage.local.set({'loggedIn': JSON.stringify(false)}, function () {});
            window.location.href = "/html/index.html"
        })
    }
    var flag = false;
    $("#toggleButton1").on("click", function () {
        if (flag === false) {
            flag = !flag;
        }
        else if (flag === true) {
            flag = !flag
        }
    })
});
