(function(angular){
  'use strict';

  function OnlyNumbers($window){
    var attr = {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope,element,attribute,ngModelCtrl){
        ngModelCtrl.$parsers.push(function(text){
          if(text){
            var numbersValue = text.replace(/[^0-9]/g, '');
            if(numbersValue !== text){
              ngModelCtrl.$setViewValue(numbersValue);
              ngModelCtrl.$render();
            }
            return numbersValue;
          }
          return undefined;
        });
      }
    };

    return attr;
  }
  OnlyNumbers.$inject = ['$window'];


  angular.module('harshaApp.directives').directive('OnlyNumbers',OnlyNumbers);
})(window.angular || (window.angular = {}));
