
  angular.module('lmsApp')

    .controller('signupCtrl', ['$scope', '$firebaseArray', '$firebaseAuth', '$location', function($scope, $firebaseArray, $firebaseAuth, $location){

      $scope.load = false;

      var authObj = $firebaseAuth();

      var ref = firebase.database().ref("/users");
      var userInfo = $firebaseArray(ref);



      // FACEBOOK SIGNUP
      $scope.LoginFacebook = function(){
        $scope.load = true;


        authObj.$signInWithPopup("facebook")
        .then(function(result) {


          ref.child(result.user.uid).update({
            email: result.user.email,
            id: result.user.uid
          });

          // REVIEW: add alert + to all other functions

          $location.path('/profile_info/' + result.user.uid);

        })
        .catch(function(e) {
          $scope.load = false;
          alert("Authentication failed: ", e.message);
        });
        // end authObj


      };






      // GOOGLE SIGNUP
      $scope.LoginGoogle = function(){
        $scope.load = true;


        authObj.$signInWithPopup("google")
        .then(function(result) {


          ref.child(result.user.uid).update({
            email: result.user.email,
            id: result.user.uid
          });

          $location.path('/profile_info/' + result.user.uid);

        })
        .catch(function(e) {
          $scope.load = false;
          alert("Authentication failed: ", e.message);
        });
        // end authObj


      };





      // EMAIL SIGNUP
      $scope.submitForm = function(info){

        if($scope.reg_form.$valid){


          authObj.$createUserWithEmailAndPassword(info.email, info.password)
            .then(function(result) {

              $scope.load = true;
              ref.child(result.uid).update({
                email: result.email,
                id: result.uid
              });

              $location.path('/profile_info/' + result.uid);


            })
            .catch(function(e) {
                $scope.load = false;
                if (e.code == "auth/email-already-in-use") {
                    alert(e.message);
                }else {
                    console.log("Auth failed: " + e);
                }
            })

        }
      };


    }]);
