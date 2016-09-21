
  angular.module('lmsApp')

    .controller('profileInfoCtrl', ['$scope', '$firebaseObject', '$location', '$routeParams', '$firebaseAuth', function($scope, $firebaseObject, $location, $routeParams, $firebaseAuth){

      // INITIALIZE
      $scope.profileInfo = {utype: "student"};



      var authObj = $firebaseAuth();
      var firebaseUser = authObj.$getAuth();

      //get current user ID from URL
      var newUser = $routeParams.user;

      var ref = firebase.database().ref("/users/" + newUser);
      var userInfo = $firebaseObject(ref);
      var dateToday = new Date(Date.now()).toLocaleString();


      $scope.submitInfo = function(data) {

        userInfo.utype = data.utype;
        userInfo.firstname = data.firstname;
        userInfo.lastname = data.lastname;
        userInfo.description = data.Description;
        userInfo.email = firebaseUser.email;
        userInfo.dateCreated = dateToday;
        userInfo.dateSignedIn = dateToday;
        userInfo.isActive = true;

        userInfo.$save()
        .then(function(response) {
          ref.update({
            uid: response.key
          })

          if (firebaseUser) {
            $location.path('/profile');
          } else {
            $location.path('/');
          }
        })
        .catch(function(e) {
          console.log(e);
        });

      }







    }]);
