angular.module('lmsApp')

.service('pageAuth', ['$location', '$rootScope', function ($location, $rootScope) {

  var canAccess = function(event, next, prev, error) {

      // if (next.$$route.requireAuth && theUser === null) {
      //   console.log(theUser);
      //   event.preventDefault();
      //   alert("You must be logged in to access page!" + theUser);
      //
      // }
      // else if (next.$$route.requireAuth == false && theUser !== null) {
      //   event.preventDefault();
      //
      // }

      console.log(next);
      if (error === "AUTH_REQUIRED") {
        $location.path("/");

      }

  }

  $rootScope.$on('$routeChangeError',canAccess);
  // $rootScope.$on('$routeChangeSuccess',canAccess);
}]);


angular.module('lmsApp')
  .run(function runApp(pageAuth){
  });
