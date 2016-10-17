angular.module('lmsApp')
  .controller('AssignmentCtrl', ['$scope', 'Assignment', '$routeParams', function($scope, Assignment, $routeParams){

  var id = $routeParams.id
  
  $scope.saveAss = function(a, id){
    console.log(id);
    a.timecreated = Math.floor(Date.now()/1000);
    Assignment.addAss(a);
  }

  $scope.classID = $routeParams.id;
}])
