
  angular.module('lmsApp')

    .controller('signupCtrl', ['$scope', '$firebaseArray', '$firebaseAuth', function($scope, $firebaseArray, $firebaseAuth){


      $scope.firstname = "Franchette";
      $scope.lastname = "Camoro";
      $scope.email = "nicole@yahoo.com"
      $scope.Gend = "female";
      $scope.scrtQuestion1 = "Mother's maiden name";
      $scope.scrtans1 = "Geniza Sotto";
      $scope.scrtQuestion2 = "Favorite color";
      $scope.scrtans2 = "Blue";
      $scope.utype = "student";
      $scope.username = "xyronna";
      $scope.password = "Franchette";
      $scope.ConfPass = "Franchette";


      $scope.authObj = $firebaseAuth();
      var ref = firebase.database().ref("/users");
      var usersInfo = $firebaseArray(ref);

      console.log($firebaseAuth());
      // function to submit the form
      $scope.submitForm = function(){
        // check to make sure the form is completely valid
        console.log("Submit clicked!");

        if($scope.reg_form.$valid){

          $scope.authObj.$signInWithPopup("facebook").then(function(result) {
            console.log("Signed in as:", result);
          }).catch(function(error) {
            console.error("Authentication failed:", error.message);
          });



          // $scope.authObj.$createUserWithEmailAndPassword($scope.email, $scope.password)
          //   .then(function(firebaseUser) {
          //     console.log("Signed in as: " + firebaseUser.uid);
          //   }).catch(function(e) {
          //     console.error("Auth failed: " + e);
          //   })


          // try {
          //   usersInfo.push();
          //
          //   console.log('Everything\'s (I think) ok!');
          // } catch (e) {
          //   console.log('Something\'s wrong! ');
          //   console.error(e);
          // }


          // $scope..add({
          //   firstname: $scope.firstname;
          // });


        }
      };


    }]);
