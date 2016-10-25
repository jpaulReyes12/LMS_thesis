
  angular.module('lmsApp')

    .controller('studentProfile', ['$scope', '$firebaseObject', '$firebaseAuth', '$location', '$routeParams', 'Class', function($scope, $firebaseObject, $firebaseAuth, $location, $routeParams, Class){

      $scope.load = false;
      var id = $routeParams.id;
      var ref = firebase.database().ref("/users").child(id);
      var userInfo = $firebaseObject(ref);
      userInfo.$loaded().then(function(result) {
        $scope.userInfo = result;
      });
      $scope.id = id;
      $scope.DspClass = Class.getClass();
    }]);
