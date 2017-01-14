// IIFE CONSTRUCT
(function(angular){
  'use strict';

  function LoginService(UserFactory,$location){

    var self = this;

    self.performLogin = function(){
      if(UserFactory.user.email === 'harsha@gmail.com' && UserFactory.user.password === 'harsha'){
        console.log('Login was successful');
        $location.path('/about');
      }
    };

    // logic to check if the username and password fields are not empty
    self.checkLogin = function($scope){
      if($scope.user.email === '' && $scope.user.password === ''){
        $location.path('/home');
      }
    };
  }
  // inject the dependencies
  LoginService.$inject = ['UserFactory','$location'];

  // define the factory service type
  angular.module('harshaApp.services').service('LoginService',LoginService);
})(window.angular || (window.angular = {}));
