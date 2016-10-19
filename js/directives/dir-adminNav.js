angular.module('lmsApp')

.directive('dirAdminNav', ['$location', '$firebaseAuth' , function($location, $firebaseAuth) {


  var linker = function(scope) {
    scope.logOutUser = function() {
      $firebaseAuth().$signOut();
      $location.path('/');
    }

    scope.location = function(href) {
      return href.substr(1) === $location.url();
    };

  }




  return {
    restrict: 'E',
    templateUrl: 'components/partials/adminNav.html',
    link: linker
  };

}]);
