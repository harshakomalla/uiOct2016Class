(function(angular){
  'use strict';

  function UserFactory(){
    var self = this;

    self.user = {
      username: '',
      password: ''
    }
  };

  UserFactory.$inject = [];

  angular.module('komallaApp.services').factory('UserFactory',UserFactory);
})(window.angular || (window.angular = {}));
