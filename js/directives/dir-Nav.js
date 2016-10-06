angular.module('lmsApp')

.directive('dirNav', ['$location', 'LoggedInUser' , function($location, LoggedInUser) {


  var linker = function(scope) {
    scope.logOutUser = function() {
      $location.path('/');
      firebase.auth().signOut();
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
        setUtype_Path("#/class_dashboard/createquiz");
      }
    })()

    function setUtype_Path(path) {
      scope.utypePath = path;
    }


    function getNewPath() {
      return utypePath;
    }

    // FIXME: dynamic user from database
    scope.name = firebase.auth().currentUser.displayName;

    scope.NotifNum = 3;
    scope.MessageNum = 2;
  }




  return {
    restrict: 'A',
    templateUrl: 'components/partials/navbar.html',
    link: linker
  };

}]);
