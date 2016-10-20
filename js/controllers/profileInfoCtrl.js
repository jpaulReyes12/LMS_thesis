
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
        userInfo.isActive = true;

        userInfo.$save()
        .then(function(response) {
          ref.update({
            uid: response.key
          })

          var user = firebase.auth().currentUser;

          //FIXME: login user if email then verify
          user.sendEmailVerification().then(function() {
            alert("Please check your inbox to verify your e-mail");
          });


          // FIXME: signin email then update profile
          user.updateProfile({
            displayName: data.firstname + ' ' + data.lastname
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
