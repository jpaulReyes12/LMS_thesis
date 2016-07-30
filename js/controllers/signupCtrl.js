
  angular.module('lmsApp')

    .controller('signupCtrl', ['$scope', '$firebaseArray', '$firebaseAuth', '$location', function($scope, $firebaseArray, $firebaseAuth, $location){

      $scope.load = false;
      var authObj = $firebaseAuth();
      var ref = firebase.database().ref("/users");
      var userInfo = $firebaseArray(ref);

      $scope.LoginFacebook = function() {
        $scope.load = true;
        authObj.$signInWithPopup("facebook").then(function(result) {
          console.log("Signed in as:", result);
          $location.path('/group');
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });

      };

      $scope.LoginGoogle = function() {
        $scope.load = true;
        authObj.$signInWithPopup("google").then(function(result) {
          console.log("Signed in as:", result);
          $location.path('/group');
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });
      }

      // function to submit the form
      $scope.submitForm = function(info){
        $scope.load = true;
        if($scope.reg_form.$valid){

          authObj.$createUserWithEmailAndPassword(info.email, info.password)
            .then(function(firebaseUser) {
              console.log("Signed in as: " + firebaseUser.uid);
              // $location.path('/group');
              var user = angular.copy(info);

              userInfo.$add({
                email: user.email
              }).then(function(newUser) {
                console.log("User inserted to database! " + newUser.id + " and" + newUser.key);
              });

            }).catch(function(e) {

                if (e.code == "auth/email-already-in-use") {
                    alert(e.message);
                }else {
                    console.log("Auth failed: " + e);
                }
            })
        }
      };


    }]);
