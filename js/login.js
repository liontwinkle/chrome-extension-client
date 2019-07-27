// var loginDetails;
// localStorage.setItem('loggedIn',JSON.stringify(false))

// if(localStorage.getItem('data')==null)
// {
// 	localStorage.setItem('data',JSON.stringify({email:"ab@ab",pass:"pass" }));	
// }
// else
// {
// 	loginDetails=JSON.parse(localStorage.getItem('data'))
// }
// $("#loginButton").on("click",function(){
// 	if($("#loginEmail").val()==loginDetails.email && $("#loginPass").val()==loginDetails.pass)
// 	{
// 		$("#loginButton").attr("href","/html/shippingProfile.html")
// 		localStorage.setItem('loggedIn',JSON.stringify(true))
// 	}
// 	else if($("#loginEmail").val()!=loginDetails.email || $("#loginPass").val()!=loginDetails.pass)
// 	{
// 		$(".inpLogin").css("border-bottom","1px solid red")
// 		$("#envelopeIcon").css("color","red")
// 		$("#lockIcon").css("color","red")
// 	}
// })
