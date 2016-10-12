angular.module('lmsApp')
  .controller('AssignmentCtrl', ['$scope', 'Assignment', function($scope, Assignment){

  $scope.saveAss = function(a){
    a.timecreated = Math.floor(Date.now()/1000);
    Assignment.addAss(a);
  }
}])
