// angular.module('lmsApp')
//   .controller('signupCtrl', ['$scope', function($scope) {
//     $scope.greeting = 'Hola!';
//   }]);


var lmsApp=angular.module('lmsApp',[]);

  // create angular controller


  lmsApp.controller('signupCtrl', function($scope, $http, $location){

    //store models from form into info{} object
    var info = {
      firstname:  $scope.firstname,
      lastname:   $scope.lastname,
      gender:     $scope.Gend,
      question1:  $scope.scrtQuestion1,
      question2:  $scope.scrtQuestion2,
      ans1:       $scope.scrtans1,
      ans2:       $scope.scrtans2,
      type:       $scope.type,
      username:   $scope.username,
      password:   $scope.password
    };


    // function to submit the form
    $scope.submitForm=function(){

      // check to make sure the form is completely valid
      if($scope.reg_form.$valid){

        $http.post('connection/signup.php', {params: info})
       .then(
           function(response){
             // success callback
             console.log(response);
             alert("successfully registered");
             $location.path('/home');
           },
           function(response){
             alert("error");
           }
        );

      }
    };


  });
