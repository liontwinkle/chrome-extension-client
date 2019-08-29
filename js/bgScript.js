$(window).ready(function(){

    $('.loadingIcon').css('display','block');

    var loggedIn=JSON.parse(localStorage.getItem('loggedIn'));
    var query = { active: true, currentWindow: true };

    function callback(tabs) {
        var currentTabUrl = tabs[0].url;

        if( (currentTabUrl.startsWith("https://www.amazon.com" )) || (currentTabUrl.startsWith("https://www.ebay.com" )) ||
            (currentTabUrl.startsWith("https://www.nike.com" )))
        {

            if(loggedIn === true){
                window.location.href = '/html/orders.html'
            } else {
                window.location.href = '/html/index.html'
            }
        }
        if(currentTabUrl.startsWith("https://www.amazon.com/gp/buy/addressselect/handlers/"))
        {
            if(loggedIn === false || loggedIn==null){
                window.location.href = '/html/index.html';
            } else {
                if(localStorage.getItem('lastUrl-letsGoShip')){
                    window.location.href = localStorage.getItem('lastUrl-letsGoShip');
                    console.log('in last url else')
                }
                $('.loadingIcon').css('display','none');
            }
        }
        else
        {
            if(loggedIn === false || loggedIn == null){
                window.location.href = '/html/index.html';
            }
            $("#btnMain").attr("class","btn btn-danger btn-lg disabled");
            $("h5").css("display","block");
            $('.loadingIcon').css('display','none');
        }
    }
    chrome.tabs.query(query, callback);
});
