angular.module('lmsApp')

.directive('dirNav', ['$location', 'LoggedInUser', '$firebaseAuth' , function($location, LoggedInUser, $firebaseAuth) {


  var linker = function(scope) {
    var id = firebase.auth().currentUser.uid;

    scope.logOutUser = function() {
      $firebaseAuth().$signOut();
      $location.path('/');

      firebase.auth().onAuthStateChanged(function(user) {
       if (!user) {
         $location.path('/');
        }
      });

    }

    scope.newPass = function(pass) {

      var user = firebase.auth().currentUser;

      user.updatePassword(pass).then(function() {
        console.log(pass)
      }, function(error) {
        console.log(error);
      });
    }

    scope.location = function(href) {
      return href.substr(1) === $location.url();
    };

    // scope.utype_dash;
    scope.utypePath;
    (function typeToPath() {
      userTypeData = LoggedInUser.getUsertype();

      if (userTypeData == "student") {
        setUtype_Path("#/student_page");
      }else if (userTypeData == "teacher") {
        setUtype_Path("#/teacher/home");
      }
    })()

    function setUtype_Path(path) {
      scope.utypePath = path;
    }


    function getNewPath() {
      return utypePath;
    }


    scope.name = firebase.auth().currentUser.displayName;
    scope.id = id;

    // scope.NotifNum = 3;

  }




  return {
    restrict: 'A',
    templateUrl: 'components/partials/navbar.html',
    link: linker
  };

}]);
