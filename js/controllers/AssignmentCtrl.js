angular.module('lmsApp')
  .controller('AssignmentCtrl', ['$scope', 'Assignment', '$routeParams', '$location',function($scope, Assignment, $routeParams, $location){

  var id = $routeParams.id;

  $scope.saveAss = function(a, id){

    a.timecreated = Math.floor(Date.now()/1000);
    Assignment.addAss(a);
    $location.path('/teacher/assignment');
  };

  $scope.classID = $routeParams.id;
}]);
