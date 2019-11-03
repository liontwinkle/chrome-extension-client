$(window).ready(function () {

    localStorage.setItem('lastUrl-letsGoShip', '/html/index.html');

    $('#searchBar').on('click', function () {
        $('#item-amazon').css('display', 'none !important');
    });

    $('#login').on('click', function () {
        $('#loginbody').css('display', 'block');
        $('#signupbody').css('display', 'none');
        // $('#signup').attr('class', 'btn btn-outline-dark');
        $('#titleHeadingId').text('');
        $('#passwordErrorHeading').css('display', 'none');
        $('#emailErrorHeading').css('display', 'none');
        $('#pwdMatchErrorHeading').css('display', 'none');
        $('#successHeading').css('display', 'none');
        $('#successHeading').css('display', 'none');
        $('#login').css('display', 'none');
    });

    $('#signup').on('click', function () {
        $('#loginbody').css('display', 'none');
        $('#signupbody').css('display', 'block');
        $('#login').css('display', 'block');
        // $('#signup').attr('class', 'btn btn-dark');
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
        var loaderElement = '<div id="page-mask-custom" style="position:fixed;left : 0;right: 0;bottom: 0;top: 0;background-color: rgba(0,0,0,0.6);display: flex; align-items: center; justify-content: center; z-index: 99999;"><div class="loader-custom"></div></div>';
        $('body').append(loaderElement);
        if ($('.userPassword').val() !== $('.confirmPassword').val()) {
            $('#page-mask-custom').remove();
            $('#pwdMatchErrorHeading').css('display', 'block');
            $('#pwdMatchErrorHeading').css('color', 'red');
        }

        chrome.runtime.sendMessage({notifications: 'signUp', message: signUpDetails}, function (response) {
            var responseData = response.data;
            $('#page-mask-custom').remove();
            if (response.success) {
                $('#loginbody').css('display', 'block');
                $('#signupbody').css('display', 'none');
                // $('#login').attr('class', 'btn btn-dark');
                $('#login').css('display', 'none');
                // $('#signup').attr('class', 'btn btn-outline-dark');
                $('#emailErrorHeading').css('display', 'none');
                $('#passwordErrorHeading').css('display', 'none');
                $('#titleHeadingId').text('');
                $('#pwdMatchErrorHeading').css('display', 'none');
                $('#successHeading').css('display', 'none');

            }
            else {
                var responseSignUpData = responseData;
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
        });
    });

    $('#loginButton').on('click', function () {
        $('#successHeading').css('display', 'none');
        var logInDetails = {
            'email': $('#loginEmail').val(),
            'password': $('#loginPass').val()
        };
        var loaderElement = '<div id="page-mask-custom" style="position:fixed;left : 0;right: 0;bottom: 0;top: 0;background-color: rgba(0,0,0,0.6);display: flex; align-items: center; justify-content: center; z-index: 99999;"><div class="loader-custom"></div></div>';
        $('body').append(loaderElement);
        chrome.runtime.sendMessage({notifications: 'logIn', message: logInDetails}, function (response) {
            var responseData = response.data;
            $('#page-mask-custom').remove();
            if (response.success) {
                if (responseData.access_token !== undefined) {
                    chrome.storage.local.set({'accessToken': responseData.access_token}, function () {
                    });
                    localStorage.setItem('loggedIn', 'true');

                    chrome.storage.local.set({'loggedIn': 'true'}, function () {});
                    localStorage.setItem('details', JSON.stringify(responseData));
                    var currentTabUrl;
                    var query = {active: true, currentWindow: true};
                    function callback(tabs) {
                        currentTabUrl = tabs[0].url;
                        window.location.href = '../../html/store.html';

                    }
                    chrome.tabs.query(query, callback);
                } else {
                    localStorage.setItem('loggedIn', 'false');
                    chrome.storage.local.set({'loggedIn': 'false'}, function () {});
                    $('.errorLogin').css('border-bottom', '1px solid red');
                    $('#envelopeIcon').css('color', 'red');
                    $('#lockIcon').css('color', 'red');
                }
            } else {
                $('.errorLogin').css('border-bottom', '1px solid red');
                $('#envelopeIcon').css('color', 'red');
                $('#lockIcon').css('color', 'red');
                $('#passwordErrorHeading').text(response.data.responseJSON.errors);
                $('#passwordErrorHeading').css('display', 'block');
            }
        });
    });

    $('#logOutButton').on('click', function () {
        chrome.runtime.sendMessage({
            notifications: 'logOut',
            message: localStorage.getItem('details')
        }, function (response) {
            if (response.success) {
                // logout success
            } else {}
        });
    });
});
