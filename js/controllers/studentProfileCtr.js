
  angular.module('lmsApp')

    .controller('studentProfile', ['$scope', '$firebaseObject', '$firebaseAuth', '$location', '$routeParams', function($scope, $firebaseObject, $firebaseAuth, $location, $routeParams){

      $scope.load = false;
      var id = $routeParams.id;
      var ref = firebase.database().ref("/users").orderByKey().startAt(id).endAt(id);
      var userInfo = $firebaseObject(ref);
      console.log(userInfo);
    }]);
