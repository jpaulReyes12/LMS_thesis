
  angular.module('lmsApp')

    .controller('profileInfoCtrl', ['$scope', '$firebaseObject', '$location', '$routeParams', '$firebaseAuth', 'pageAuth', function($scope, $firebaseObject, $location, $routeParams, $firebaseAuth, pageAuth){

      // INITIALIZE
      $scope.profileInfo = {utype: "student"};

      // $scope.$on('$routeChangeStart', function(event, next) {
      //
      //   pageAuth.canAccess(event, next);
      // });


      var authObj = $firebaseAuth();
      var firebaseUser = authObj.$getAuth();

      //get current user ID from URL
      var newUser = $routeParams.user;

      var ref = firebase.database().ref("/users/" + newUser);
      var userInfo = $firebaseObject(ref);


      $scope.submitInfo = function(data) {

        userInfo.utype = data.utype;
        userInfo.firstname = data.firstname;
        userInfo.lastname = data.lastname;
        userInfo.description = data.Description;


        console.log(data);

        userInfo.$save()
        .then(function(response) {
          console.log(response + " Yey");

          if (firebaseUser) {
            console.log("Signed in as:", firebaseUser.uid);
            $location.path('/profile');
          } else {
            console.log("Signed out");
            $location.path('/');
          }
        })
        .catch(function(e) {
          console.log( e + " BOO");
        });

      }







    }]);
