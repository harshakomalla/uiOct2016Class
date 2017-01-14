
(function(angular){
  'use strict';

  function aboutController($rootScope,UserFactory,LoginService){
    var vm = this;

    vm.init = function(){

      vm.user = angular.copy(UserFactory.user);

      vm.classRooms = angular.copy(UserFactory.classRooms);

      LoginService.checkLogin(vm);
    };
    vm.init();
  }
  aboutController.$inject = ['$rootScope','UserFactory','LoginService'];


  angular.module('harshaApp.controllers').controller('aboutController',aboutController);
})(window.angular || (window.angular = {}));
