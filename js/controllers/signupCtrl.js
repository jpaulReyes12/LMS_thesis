
  var lmsApp=angular.module('lmsApp',[]);

    // create angular controller

    lmsApp.controller('signupCtrl', function($scope, $http){


      $scope.firstname = "Franchette";
      $scope.lastname = "Camoro";
      $scope.Gend = "female";
      $scope.scrtQuestion1 = "Mother's maiden name";
      $scope.scrtans1 = "Geniza Sotto";
      $scope.scrtQuestion2 = "Favorite color";
      $scope.scrtans2 = "Blue";
      $scope.utype = "student";
      $scope.username = "xyronna";
      $scope.password = "Franchette";
      $scope.ConfPass = "Franchette";


      var form_data = {
        'firstname':$scope.firstname,
        'lastname':$scope.lastname,
        'Gend':$scope.Gend,
        'scrtQuestion1':$scope.scrtQuestion1,
        'scrtans1':$scope.scrtans1,
        'scrtQuestion2':$scope.scrtQuestion2,
        'scrtans2':$scope.scrtans2,
        'utype':$scope.utype,
        'username':$scope.username,
        'password':$scope.password,
        'ConfPass':$scope.ConfPass
      }

      // function to submit the form
      $scope.submitForm=function(){
        // check to make sure the form is completely valid
        if($scope.reg_form.$valid){

          $http.post('connection/signup.php', form_data)
          .then(
            // Success callback
            function(data, status, headers, config){
            console.log("inserted successfully");
            alert("successfully registered");

            },
            // error callback
            function(response){
              console.log("error\n" + response);
            }
          );

        }
      };


    });
