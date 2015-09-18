angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('EventCtrl', function ($http,$scope, $stateParams, FbLoginFactory, TwitterLoginFactory, LikeFactory, EventFactory, DateFactory) {

      EventFactory.get($scope, $stateParams);

      $scope.get = function()
      {
        EventFactory.get($scope, $stateParams);
      }

      $scope.getLocation = function(loc)
      {
        EventFactory.getLocation($scope, loc);

      }

       $scope.like = function (id)
        {
            LikeFactory.like($scope, id);
           
        
        }

         $scope.fbLogin = function ()
        {
        
            FbLoginFactory.login();

        }

     $scope.twitterLogin = function () 
      {
            TwitterLoginFactory.login();
      }

});
