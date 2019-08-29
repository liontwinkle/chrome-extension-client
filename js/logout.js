$(window).ready(function () {

    var loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    if (loggedIn === false) {
        $("#logout").css("display", "none")
    }

    if (loggedIn === true) {
        $("#logOutButton").on("click", function () {
            localStorage.setItem('loggedIn', JSON.stringify(false));
            // localStorage.removeItem('bcCustomerDetails');
            window.location.href = "/html/index.html"
        })
    }
    var flag = false;
    $("#toggleButton1").on("click", function () {
        if (flag === false) {
            $("#navCol1").css("background-color", "rgba(233, 299, 255, 0.95)");
            flag = !flag;
        }
        else if (flag === true) {
            $("#navCol1").css("background-color", "rgba(233, 299, 255, 0)");
            flag = !flag
        }
    })
});
