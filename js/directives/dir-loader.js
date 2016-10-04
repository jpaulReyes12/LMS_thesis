angular.module('lmsApp')

.directive('dirLoader', [function() {



  return {
    restrict: 'E',
    template: '<div class="loader-wrapper">'+
      '<div class="loader">'+
      '<div class="dot"></div>'+
      '<div class="dot"></div>'+
      '<div class="dot"></div>'+
      '</div>'
  };

}]);
