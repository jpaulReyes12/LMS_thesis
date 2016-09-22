angular.module('lmsApp')

.directive('dirAdminNav', ['$location' , function($location) {


  var linker = function(scope) {
    scope.logOutUser = function() {
      firebase.auth().signOut();
      $location.path('/');
    }

    scope.location = function(href) {
      return href.substr(1) === $location.url();
    };

    scope.name = "";
  }




  return {
    restrict: 'E',
    templateUrl: 'components/partials/adminNav.html',
    link: linker
  };

}]);
