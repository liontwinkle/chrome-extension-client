
const bigCommerceAPIHeader = {
					
						"X-Auth-Client": "nj06x4zm6z3qpc3lrask0e4y1uzbjwf",

						"X-Auth-Token": "ai7xl0xzt65ig6u6u7mbsxgf1l4vj85",

						"Authorization": "Bearer ai7xl0xzt65ig6u6u7mbsxgf1l4vj85",

						"Content-Type": "application/json"

				} ;


const bigCommerceOrdersAPI = "https://api.bigcommerce.com/stores/ptqw56w7uz/v2/orders"; 

const bigCommerceCredentials = {

ACCESS TOKEN: "ai7xl0xzt65ig6u6u7mbsxgf1l4vj85"
CLIENT ID: "nj06x4zm6z3qpc3lrask0e4y1uzbjwf"
CLIENT SECRET: "iv1xgh78bqotelf194gkud1shmvymzk"
NAME: "firstone"
API PATH: "https://api.bigcommerce.com/stores/ptqw56w7uz/v3/"

}


// Ajax call for data transfer with server.
$.ajax({
				method:'GET',
				url: "http://ex.travelcast.us/api/*/",
				headers: {
						
						"Content-Type": "application/x-www-form-urlencoded",

						"Authorization": "Bearer " + "Token",
						"Accept": "application/json"					
				}
			}).done(function(info){

			}).fail(function(info){

			})

// More detailed information of API calls here https://documenter.getpostman.com/view/1482619/S1ENwxmZ


const signupAPI = 'http://ex.travelcast.us/api/register?XDEBUG_SESSION_START=PHPSTORM'

const signinAPI = "http://ex.travelcast.us/api/login?XDEBUG_SESSION_START=PHPSTORM"

const logoutAPI = "http://ex.travelcast.us/api/logout?XDEBUG_SESSION_START=PHPSTORM"

const usaAddressAPI = "http://ex.travelcast.us/api/warehouse-address?XDEBUG_SESSION_START=PHPSTORM"

const createLocalAddressAPI = "http://ex.travelcast.us/api/local-address?XDEBUG_SESSION_START=PHPSTORM"

const updateLocalAddressAPI = "http://ex.travelcast.us/api/local-address/" + "requestID"

const getLocalAddressAPI = "http://ex.travelcast.us/api/local-address/"