angular.module('lmsApp')
  .controller('DisplayAssCtrl', ['$scope', 'DisplayAss', '$location', function($scope,DisplayAss, $location){

  $scope.DspAss = DisplayAss.getDspAss();

  $scope.postAss = function(a){
    DisplayAss.displayAss(a);
  };

  $scope.deleteAss = function() {

    DisplayAss.delAss($scope.assCont.index);
    $scope.assCont = {};
  };



  $scope.assCont = {cont: "Click on an assignment to see the details"};
  $scope.content = function(cont, index) {
    cont.index = index;
    $scope.assCont = cont;
  };


}]);
