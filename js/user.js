$(window).ready(function () {

    localStorage.setItem('lastUrl-letsGoShip', '/html/index.html')

    $("#login").on("click", function () {
        $("#loginbody").css("display", "block");
        $("#signupbody").css("display", "none");
        $("#login").attr("class", "btn btn-primary");
        $("#signup").attr("class", "btn btn-outline-primary");
        $("#titleHeadingId").text("Please Login");
        $('#passwordErrorHeading').css('display', 'none');
        $('#emailErrorHeading').css('display', 'none');
        $('#successHeading').css('display', 'none');

    });

    $("#signup").on("click", function () {
        $("#loginbody").css("display", "none");
        $("#signupbody").css("display", "block");
        $("#login").attr("class", "btn btn-outline-primary");
        $("#signup").attr("class", "btn btn-primary");
        $("#titleHeadingId").text("Please Create Account");
        $('#passwordErrorHeading').css('display', 'none');
        $('#emailErrorHeading').css('display', 'none');
        $('#successHeading').css('display', 'none');
    })


    $('.submitSignupForm').on('click', function () {

        var signUpDetails = {
            'name': $('.userName').val(),
            'email': $('.userEmail').val(),
            'password': $('.userPassword').val()
        };

        chrome.runtime.sendMessage({notifications: "signUp", message: signUpDetails}, function (response) {
            //console.log(response.data);
        });


        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
                // Response for successful sign up from background script
                if (request.response == "signUpTrue") {

                    console.log(request.data);
                    // Display login part of the form
                    $("#loginbody").css("display", "block")
                    $("#signupbody").css("display", "none")
                    $("#login").attr("class", "btn btn-primary")
                    $("#signup").attr("class", "btn btn-outline-primary")
                    $('#successHeading').css('display', 'block');
                    $('#emailErrorHeading').css('display', 'none');
                    $('#passwordErrorHeading').css('display', 'none');
                }
                // Response for unsuccessful signup from background script
                if (request.response == "signUpFalse") {


                    console.log(request.data);

                    var responseSignUpData = request.data;

                    if (responseSignUpData.responseJSON.email !== undefined) {

                        console.log('emailErrorHeading')


                        $('#emailErrorHeading').text(responseSignUpData.responseJSON.email)

                        $('#emailErrorHeading').css('display', 'block')

                        $(".errorSignUpEmail").css("border-bottom", "1px solid red")
                    }
                    if (responseSignUpData.responseJSON.password !== undefined) {

                        console.log('passwordErrorHeading')

                        $('#passwordErrorHeading').text(responseSignUpData.responseJSON.password);

                        $('#passwordErrorHeading').css('display', 'block');
                        $(".errorSignUpPassword").css("border-bottom", "1px solid red");
                        $("#signUpLockIcon").css("color", "red")
                    }
                }
            })
    });

    //  login form submit and making API call to server for the same
    $('#loginButton').on('click', function () {

        $('#successHeading').css('display', 'none');

        var logInDetails = {
            'email': $('#loginEmail').val(),
            'password': $('#loginPass').val()
        };

        // Sending a message to background script for making the api call
        chrome.runtime.sendMessage({notifications: "logIn", message: logInDetails}, function (response) {
            //console.log(response.data);
        });

        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
                // Response for successful login from background script
                if (request.response == "signInTrue") {

                    console.log(request.data['user']['email']);

                    chrome.storage.local.set({'email': request.data['user']['email']}, function () {
                    });

                    var responseData = request.data

                    if (responseData.access_token !== undefined) {

                        localStorage.setItem('loggedIn', 'true');

                        localStorage.setItem('details', JSON.stringify(request.data));

                        var currentTabUrl;

                        var query = {active: true, currentWindow: true};

                        function callback(tabs) {
                            var currentTabUrl = tabs[0].url;

                            if (currentTabUrl.startsWith("https://www.ebay.com"  )) {

                                window.location.href = '/html/Orders.html'

                                if (currentTabUrl.startsWith("https://www.amazon.com/gp/buy/addressselect/handlers/")) {

                                    window.location.href = "/html/shippingProfile.html"
                                }
                            }
                        }
                        chrome.tabs.query(query, callback);
                    } else {
                        localStorage.setItem('loggedIn', 'false');
                        $(".errorLogin").css("border-bottom", "1px solid red");
                        $("#envelopeIcon").css("color", "red");
                        $("#lockIcon").css("color", "red");
                    }
                }
                // Response for unsuccessful login from background script
                if (request.response == "signInFalse") {

                    console.log(request.data);

                    $(".errorLogin").css("border-bottom", "1px solid red")
                    $("#envelopeIcon").css("color", "red")
                    $("#lockIcon").css("color", "red")

                    $('#passwordErrorHeading').text(request.data.responseJSON.errors)
                    $('#passwordErrorHeading').css('display', 'block')

                }
            })
    });

    $('#logOutButton').on('click', function () {

        // Sending a message to background script for making the logout api call
        chrome.runtime.sendMessage({
            notifications: "logOut",
            message: localStorage.getItem('details')
        }, function (response) {
            //console.log(response.data);
        });
    });
});
