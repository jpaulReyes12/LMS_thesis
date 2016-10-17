
  angular.module('lmsApp')

    .controller('loginCtrl', ['$scope', '$firebaseAuth', '$firebaseArray','$location', function($scope, $firebaseAuth, $firebaseArray, $location){


      $scope.authObj = $firebaseAuth();
      var ref = firebase.database().ref("/users");
      var userInfo = $firebaseArray(ref);

      //facebook
      $scope.LoginFacebook = function() {
        $scope.authObj.$signInWithPopup("facebook").then(function(result) {
          getUtype(result.user.uid);
        });
      }

      $scope.LoginGoogle = function() {
        $scope.authObj.$signInWithPopup("google").then(function(result) {
          getUtype(result.user.uid);
        });
      }

      $scope.LoginEmail = function(info) {

        $scope.authObj.$signInWithEmailAndPassword(info.email, info.password)
        .then(function(result) {
            getUtype(result.user.uid);
        }).catch(function(error) {
          console.log(error);
        });

      }


      var getUtype = function(id) {


        ref.child(id).on('value', function(snapshot) {


          var user = firebase.auth().currentUser;
          if (snapshot.val() !== null) {
            ref.child(id).on('value', function(snapshot) {
              var type = snapshot.val().utype;

              switch (type) {
                case "student":
                  $location.path('/student_page');
                  break;
                case "teacher":
                  $location.path('/teacher/home');
                  break;
                case "admin":
                  $location.path('/admin');
                  break;
                default:
                  $location.path('/profile_info/' + user.uid   );

              }

            })
          }
          else {
            $location.path('/profile_info/' + user.uid   );
          }


        })

      }

    }]);
