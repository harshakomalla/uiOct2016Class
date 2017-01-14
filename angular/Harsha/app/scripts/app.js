// IIFE Construct
(function(angular){
  'use strict';

  function AppConfig($routeProvider){
    $routeProvider
      .when('/home',{
        templateUrl: '../views/main.html',
        controller: 'mainController as mainCtrl'
      })
      .when('/about',{
        templateUrl: '../views/about.html',
        controller: 'aboutController',
        controllerAs: 'aboutCtrl'
      })
      .otherwise('/main');
  }
  AppConfig.$inject = ['$routeProvider'];

  function AppRun($rootScope){
    $rootScope.user = {
      Email: '',
      password: ''
    };
  }
  AppRun.$inject = ['$rootScope'];

  // to define the app module, we write:
  angular.module('projectApp',
                ['ngAnimate',
                  'ngCookies',
                  'ngMessages',
                  'ngAria',
                  'ngResource',
                  'ngRoute',
                  'ngSanitize',
                  'ngTouch',
                  'harshaApp.controllers',
                  'harshaApp.services',
                  'harshaApp.directives',
                  'ui.grid'])
    .config(AppConfig)
    .run(AppRun);

  // create a custom module for controllers
  angular.module('harshaApp.controllers',[]);
  // create a custom module for services
  angular.module('harshaApp.services',[]);
  // create a custom module for directives
  angular.module('harshaApp.directives',[]);
})(window.angular || (window.angular = {}));
