(function(angular){
  'use strict';

  function UserFactory(){
    var self = this;

    self.user = {
      email: '',
      password: '',
      SSN: ''
    };

    self.classRooms = [
      {
        firstName: 'Srikar',
        lastName: 'Shastry',
        rollNo: 11
      },
      {
        firstName: 'Viswa',
        lastName: 'Kandi',
        rollNo: 22
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        rollNo: 33
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        rollNo: 44
      },
      {
        firstName: 'Srikar',
        lastName: 'Shastry',
        rollNo: 11
      },
      {
        firstName: 'Viswa',
        lastName: 'Kandi',
        rollNo: 22
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        rollNo: 33
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        rollNo: 44
      },
      {
        firstName: 'Srikar',
        lastName: 'Shastry',
        rollNo: 11
      },
      {
        firstName: 'Viswa',
        lastName: 'Kandi',
        rollNo: 22
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        rollNo: 33
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        rollNo: 44
      }
    ];

    return self;
  }
  // inject the dependencies
  UserFactory.$inject = [];

  // define the factory service type
  angular.module('harshaApp.services').factory('UserFactory',UserFactory);
})(window.angular || (window.angular = {}));
