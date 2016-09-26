
  angular.module('lmsApp')

    .controller('signupCtrl', ['$scope', '$firebaseArray', '$firebaseAuth', '$location', function($scope, $firebaseArray, $firebaseAuth, $location){

      $scope.load = false;

      var authObj = $firebaseAuth();

      var ref = firebase.database().ref("/users");
      var userInfo = $firebaseArray(ref);



      // FACEBOOK SIGNUP
      $scope.LoginFacebook = signInWithPopup("facebook");

      // GOOGLE SIGNUP
      $scope.LoginGoogle = signInWithPopup("google");

      // EMAIL SIGNUP
      $scope.submitForm = function(info){

        if($scope.reg_form.$valid){


          authObj.$createUserWithEmailAndPassword(info.email, info.password)
            .then(function(result) {
              $location.path('/profile_info/' + result.uid);


            })
            .catch(function(e) {
                $scope.load = false;
                if (e.code === "auth/email-already-in-use") {
                    alert(e.message);
                }else {
                    console.log("Auth failed: " + e);
                }
            })

        }
      };

      var signInWithPopup = function(provider) {
        $scope.load = true;


        authObj.$signInWithPopup(provider)
        .then(function(result) {


          $location.path('/profile_info/' + result.user.uid);

        })
        .catch(function(e) {
          $scope.load = false;
          alert("Authentication failed: ", e.message);
        });
        // end authObj
      }


    }]);
