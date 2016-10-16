angular.module('lmsApp')
  .controller('AssignmentCtrl', ['$scope', 'Assignment', '$routeParams', function($scope, Assignment, $routeParams){

  $scope.saveAss = function(a){
    a.timecreated = Math.floor(Date.now()/1000);
    Assignment.addAss(a);
  }

  $scope.classID = $routeParams.id;
}])
