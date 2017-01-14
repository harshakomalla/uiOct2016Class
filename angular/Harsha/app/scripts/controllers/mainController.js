
(function(angular){
  'use strict';


  function mainController(UserFactory,LoginService){

    var vm = this;
    vm.user = UserFactory.user;

    vm.loginUser = function(){
      LoginService.performLogin();
    };
  }

  mainController.$inject = ['UserFactory','LoginService'];


  angular.module('harshaApp.controllers').controller('mainController',mainController);
})(window.angular || (window.angular = {}));
