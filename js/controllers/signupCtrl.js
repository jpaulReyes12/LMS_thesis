
  var lmsApp=angular.module('lmsApp',[]);

    // create angular controller
    // lmsApp.factory();
    lmsApp.controller('signupCtrl', function($scope, $firebaseArray){


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

      // var ref = firebase.database().ref();
      // $scope.data = $firebaseArray(ref);


      try {
        var ref = firebase.database().ref("/users");
        var syncObj = $firebaseObject(ref);
        syncObj.$bindTo($scope, "data");

        console.log('Everything\'s (I think) ok!');
      } catch (e) {
        console.log('Something\'s wrong! ');
      }

      // function to submit the form
      $scope.submitForm = function(){
        // check to make sure the form is completely valid
        if($scope.reg_form.$valid){
          console.log("Submit clicked!");

          // $scope..add({
          //   firstname: $scope.firstname;
          // });


        }
      };


    });
