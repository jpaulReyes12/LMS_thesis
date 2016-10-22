angular.module('lmsApp')
  .controller('DisplayAssCtrl', ['$scope', 'DisplayAss', '$location', function($scope,DisplayAss, $location){

  $scope.DspAss = DisplayAss.getDspAss();

  $scope.postAss = function(a){
    DisplayAss.displayAss(a);
  }


  $scope.assCont = {cont: "Click on an assignment to see the details"};
  $scope.content = function(cont) {
    $scope.assCont = cont;
  }


}])
