var services  = angular.module('stripe.service', [])


.factory('StripeFactory',['$http',function ($http) {

               return{
                    get: function()
                    {
                    var handler = StripeCheckout.configure({
                        // test key
                         key: 'pk_test_QTWZlzwsA6mjhPbwoYQNAnRa',
                        image: "",
                        token: function(token) {

            // make charge api call

//app.use('/charge/:token/:amount', api.charge);



                }
           
                }); // end of get function
                    
                            handler.open({
                                  name: "Kevin Hart Live",
                                  description: "1 ticket",
                                  amount: 2000
                                });


                    }

}

}]);
