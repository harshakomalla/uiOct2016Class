(function(angular){
  'use strict';
  function LoginService(UserFactory,$location,$window){
    var self = this;
    self.performLogic = function(vm){
      if(vm.user.username === 'Harsha' && vm.user.password === 'Komalla'){
        $window.sessionStorage.setItem('user',angular.toJson({username:vm.user.username,password:vm.user.password}));
        $location.path('/about');
      }
      else{
          vm.loginHasFailed = true;
      }
  };

  self.checkLogin = function($scope){
        var user = $window.sessionStorage.getItem('user');
        if(user === null){
          $location.path('/home');
        }
      };

      self.returnUser = function(){
        var user = $window.sessionStorage.getItem('user');
        return JSON.parse(user);
      };
    }

    LoginService.$inject = ['UserFactory','$location','$window'];

  angular.module('komallaApp.services').service('LoginService', LoginService);

})(window.angular || (window.angular = {}));
