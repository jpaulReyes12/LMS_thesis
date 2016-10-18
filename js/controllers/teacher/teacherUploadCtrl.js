angular.module('lmsApp')
  .controller('classRecordCtrl', ['$scope', '$location', 'File', '$firebaseArray', '$routeParams', 'Class',function($scope, $location, File, $firebaseArray, $routeParams, Class){

    $scope.classID = $routeParams.id;

}])
