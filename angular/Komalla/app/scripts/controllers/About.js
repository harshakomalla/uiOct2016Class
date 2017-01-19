(function(angular){
  'use strict';

  function About($rootScope,UserFactory,LoginService){
    var vm = this;

    vm.init = function(){

      vm.user = angular.copy(LoginService.returnUser());

      vm.classRooms = angular.copy(UserFactory.classRooms);

      LoginService.checkLogin(vm);
    };
    vm.init();
  }
  About.$inject = ['$rootScope','UserFactory','LoginService'];


  angular.module('komallaApp.controllers').controller('About',About);
})(window.angular || (window.angular = {}));
