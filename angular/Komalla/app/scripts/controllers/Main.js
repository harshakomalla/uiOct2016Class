(function(window){
  'use strict';

  function Main(LoginService){
    var vm = this;

    vm.user = angular.copy(UserFactory.user);
    vm.loginHasFailed = false;

    vm.loginUser = function(){
      LoginService.performLogin(vm);
    };
  }
  main.$inject = ['LoginService'];

  angular.module('komallaApp.controllers').controller('Main',Main);
})(window.angular || (window.angular = {}));
