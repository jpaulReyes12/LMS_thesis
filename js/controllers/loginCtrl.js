
  angular.module('lmsApp')

    .controller('loginCtrl', ['$scope', '$firebaseAuth', '$location', function($scope, $firebaseAuth, $location){


      $scope.authObj = $firebaseAuth();


      //facebook
      $scope.LoginFacebook = function() {

        $scope.authObj.$signInWithPopup("facebook").then(function(result) {
          console.log("Signed in as:", result);
          $location.path('/profile');
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });

      };

      $scope.LoginGoogle = function() {
        console.log(firebase.auth());
        $scope.authObj.$signInWithPopup("google").then(function(result) {
          console.log("Signed in as:", result);
          $location.path('/profile');
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });
      }

      $scope.LoginEmail = function(info) {

        $scope.authObj.$signInWithEmailAndPassword(info.email, info.password)
        .then(function(result) {
          console.log("Signed in as:", result);
          $location.path('/profile');
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });

      }



    }]);
