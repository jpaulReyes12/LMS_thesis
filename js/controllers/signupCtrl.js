
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
          // TODO: better data structure
          console.log(result.user.uid);

          userInfo.$add({
            email: result.user.email,
            id: result.user.uid
          })
          .then(function(newUser) {
            // console.log(newUser);
            $location.path('/profile_info/' + newUser.key);
          });

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
          console.log(result);

          userInfo.$add({
            email: result.user.email,
            id: result.user.uid
          })
          .then(function(newUser) {
            // console.log(newUser);
            $location.path('/profile_info/' + newUser.key);
          });

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
          $scope.load = true;

          authObj.$createUserWithEmailAndPassword(info.email, info.password)
            .then(function(result) {


              ref.push({
                email: result.email,
                id: result.uid
              })
              .then(function(newUser) {
                console.log(newUser);
                $location.path('/profile_info/' + newUser.key);
              });


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
