angular.module('lmsApp')

.directive('dirFileInput', [function() {

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var onChangeFunc = scope.$eval(attrs.dirFileInput);
      element.bind('change', onChangeFunc);
    }
  };

}]);
