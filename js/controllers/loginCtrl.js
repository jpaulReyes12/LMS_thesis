
  angular.module('lmsApp')

    .controller('loginCtrl', ['$scope', '$firebaseAuth', '$firebaseArray','$location', function($scope, $firebaseAuth, $firebaseArray, $location){


      $scope.authObj = $firebaseAuth();
      var ref = firebase.database().ref("/users");
      var userInfo = $firebaseArray(ref);

      //facebook
      $scope.LoginFacebook = function() {

        $scope.authObj.$signInWithPopup("facebook").then(function(result) {
          getUtype(result.user.uid);
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });

      };

      $scope.LoginGoogle = function() {
        $scope.authObj.$signInWithPopup("google").then(function(result) {
          getUtype(result.user.uid);
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });
      }

      $scope.LoginEmail = function(info) {

        $scope.authObj.$signInWithEmailAndPassword(info.email, info.password)
        .then(function(result) {
            getUtype(result.user.uid);
        }).catch(function(error) {
          alert("Authentication failed:" + error.message);
        });

      }




      var getUtype = function(id) {

        function hasID() {
          ref.on('value', function(snapshot) {
            return snapshot
          })
        }

        var user = firebase.auth().currentUser;
        if (hasID()) {
          ref.child(id).on('value', function(snapshot) {
            var type = snapshot.val().utype;

            switch (type) {
              case "student":
                $location.path('/profile');
                break;
              case "teacher":
                $location.path('/profile');
                break;
              case "admin":
                $location.path('/profile');
                break;
              default:
                $location.path('/profile_info/' + user.uid   );
                // FIXME: where to redirect if no info
            }

          })
        }
        else {
          $location.path('/profile_info/' + user.uid   );

        }

      }

    }]);
