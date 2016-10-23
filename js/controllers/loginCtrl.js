
  angular.module('lmsApp')

    .controller('loginCtrl', ['$scope', '$firebaseAuth', '$firebaseArray','$location', 'Users',function($scope, $firebaseAuth, $firebaseArray, $location, Users){


      $scope.authObj = $firebaseAuth();
      var ref = firebase.database().ref("/users");
      var userInfo = $firebaseArray(ref);

      //facebook
      $scope.LoginFacebook = function() {
        $scope.authObj.$signInWithPopup("facebook").then(function(result) {
          getUtype(result.user.uid);
        }).catch(function(error) {
          alert(error.message);
        });
      }

      $scope.LoginGoogle = function() {
        $scope.authObj.$signInWithPopup("google").then(function(result) {
          getUtype(result.user.uid);
        }).catch(function(error) {
          alert(error.message);
        });
      }

      $scope.LoginEmail = function(info) {

        $scope.authObj.$signInWithEmailAndPassword(info.email, info.password)
        .then(function(result) {
            getUtype(result.uid);
        }).catch(function(error) {
          alert(error.message);
        });

      }

      $scope.forgot = function(email) {
        var u = Users.getUsers();
        var isSent = false;

        u.$loaded().then(function(result) {

          for (var i = 0; i < result.length; i++) {
            if (result[i].email === email) {
              isSent = true;

              var auth = firebase.auth();
              auth.sendPasswordResetEmail(email).then(function() {
                alert("Password reset e-mail was sent to your inbox!")
              }, function(error) {
                alert(error.message);
              });
            }
          }

          return isSent;

        }).then(function(result) {
          if (result === false) {
            alert("This email is not registered");
          }
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
