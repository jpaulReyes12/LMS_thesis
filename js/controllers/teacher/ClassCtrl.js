angular.module('lmsApp')
  .controller('ClassCtrl', ['$scope', 'Class', '$location', function($scope,Class, $location){

  $scope.DspClass = Class.getClass();
  $scope.id = firebase.auth().currentUser;


  
}])
