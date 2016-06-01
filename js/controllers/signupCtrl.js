// angular.module('lmsApp')
//   .controller('signupCtrl', ['$scope', function($scope) {
//     $scope.greeting = 'Hola!';
//   }]);
  var lmsApp=angular.module('lmsApp',[]);

    // create angular controller

    lmsApp.controller('signupCtrl', function($scope){
      // function to submit the form
      $scope.submitForm=function(){
        // check to make sure the form is completely valid
        if($scope.reg_form.$valid){
          alert("successfully registered");
        }
      };
    });
