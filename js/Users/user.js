$(window).ready(function () {

    localStorage.setItem('lastUrl-letsGoShip', '/html/index.html');

    $('#login').on('click', function () {
        $('#loginbody').css('display', 'block');
        $('#signupbody').css('display', 'none');
        $('#login').attr('class', 'btn btn-dark');
        $('#signup').attr('class', 'btn btn-outline-dark');
        $('#titleHeadingId').text('Please Login');
        $('#passwordErrorHeading').css('display', 'none');
        $('#emailErrorHeading').css('display', 'none');
        $('#pwdMatchErrorHeading').css('display', 'none');
        $('#successHeading').css('display', 'none');
        $('#successHeading').css('display', 'none');
    });

    $('#signup').on('click', function () {
        $('#loginbody').css('display', 'none');
        $('#signupbody').css('display', 'block');
        $('#login').attr('class', 'btn btn-outline-dark');
        $('#signup').attr('class', 'btn btn-dark');
        $('#titleHeadingId').text('Please Create Account');
        $('#passwordErrorHeading').css('display', 'none');
        $('#pwdMatchErrorHeading').css('display', 'none');
        $('#emailErrorHeading').css('display', 'none');
        $('#successHeading').css('display', 'none');
    });

    $('.submitSignupForm').on('click', function () {
        var signUpDetails = {
            'name': $('.userName').val(),
            'email': $('.userEmail').val(),
            'password': $('.userPassword').val()
        };
        if ($('.userPassword').val() !== $('.confirmPassword').val()) {
            $('#pwdMatchErrorHeading').css('display', 'block');
            $('#pwdMatchErrorHeading').css('color', 'red');
        }
        chrome.runtime.sendMessage({notifications: 'signUp', message: signUpDetails}, function (response) {});
        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
                if (request.response === 'signUpTrue') {
                    $('#loginbody').css('display', 'block');
                    $('#signupbody').css('display', 'none');
                    $('#login').attr('class', 'btn btn-dark');
                    $('#signup').attr('class', 'btn btn-outline-dark');
                    $('#emailErrorHeading').css('display', 'none');
                    $('#passwordErrorHeading').css('display', 'none');
                }
                if (request.response === 'signUpFalse') {
                    var responseSignUpData = request.data;
                    if (responseSignUpData.responseJSON.email !== undefined) {
                        $('#emailErrorHeading').text(responseSignUpData.responseJSON.email);
                        $('#emailErrorHeading').css('display', 'block');
                        $('.errorSignUpEmail').css('border-bottom', '1px solid red');
                    }
                    if (responseSignUpData.responseJSON.password !== undefined) {
                        $('#passwordErrorHeading').text(responseSignUpData.responseJSON.password);
                        $('#passwordErrorHeading').css('display', 'block');
                        $('.errorSignUpPassword').css('border-bottom', '1px solid red');
                        $('#signUpLockIcon').css('color', 'red');
                    }
                }
                return true
            })
    });

    $('#loginButton').on('click', function () {
        $('#successHeading').css('display', 'none');
        var logInDetails = {
            'email': $('#loginEmail').val(),
            'password': $('#loginPass').val()
        };
        chrome.runtime.sendMessage({notifications: 'logIn', message: logInDetails}, function (response) {});
        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
                if (request.response === 'signInTrue') {
                    var responseData = request.data;
                    chrome.storage.local.set({'email': responseData['user']['email']}, function () {});
                    if (responseData.access_token !== undefined) {
                        chrome.storage.local.set({'accessToken': responseData.access_token}, function () {
                        });
                        localStorage.setItem('loggedIn', 'true');

                        chrome.storage.local.set({'loggedIn': 'true'}, function () {});
                        localStorage.setItem('details', JSON.stringify(request.data));
                        var currentTabUrl;
                        var query = {active: true, currentWindow: true};
                        function callback(tabs) {
                            currentTabUrl = tabs[0].url;
                            // if ((currentTabUrl.startsWith("https://www.amazon.com")) ||
                            //     (currentTabUrl.includes('ebay')) ||
                            //     (currentTabUrl.includes('fashionnova')) ||
                            //     (currentTabUrl.includes('revolve')) ||
                            //     (currentTabUrl.startsWith("https://www.nike"))) {
                            //     window.location.href = '../../html/welcome.html';
                            // } else {
                            window.location.href = '../../html/store.html';
                            // }
                        }
                        chrome.tabs.query(query, callback);
                    } else {
                        localStorage.setItem('loggedIn', 'false');
                        chrome.storage.local.set({'loggedIn': 'false'}, function () {});
                        $('.errorLogin').css('border-bottom', '1px solid red');
                        $('#envelopeIcon').css('color', 'red');
                        $('#lockIcon').css('color', 'red');
                    }
                }
                if (request.response === 'signInFalse') {
                    $('.errorLogin').css('border-bottom', '1px solid red');
                    $('#envelopeIcon').css('color', 'red');
                    $('#lockIcon').css('color', 'red');
                    $('#passwordErrorHeading').text(request.data.responseJSON.errors);
                    $('#passwordErrorHeading').css('display', 'block');
                }
                return true
            })
    });

    $('#logOutButton').on('click', function () {
        chrome.runtime.sendMessage({
            notifications: 'logOut',
            message: localStorage.getItem('details')
        }, function (response) {});
    });
});
