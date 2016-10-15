angular.module('lmsApp')
  .controller('DisplayAssCtrl', ['$scope', 'DisplayAss', '$location', function($scope,DisplayAss, $location){

  $scope.DspAss = DisplayAss.getDspAss();

  $scope.postAss = function(a){
    DisplayAss.displayAss(a);
  }
}])
