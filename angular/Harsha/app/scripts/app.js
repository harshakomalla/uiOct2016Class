
(function(angular){
  'use strict';

  function AppConfig(){

  }
  AppConfig.$inject = [];

  function AppRun(){
  }
  AppRun.$inject = [];


  angular.module('harshaApp',
                [ 'ngAnimate',
                  'ngCookies',
                  'ngMessages',
                  'ngAria',
                  'ngResource',
                  'ngRoute',
                  'ngSanitize',
                  'ngTouch',
                  'harshaApp.directives'])
    .config(AppConfig)
    .run(AppRun);

  angular.module('harshaApp.directives',[]);
})(window.angular || (window.angular = {}));
