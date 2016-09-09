angular.module('lmsApp')

.service('pageAuth', ['$location', '$rootScope',function ($location, $rootScope) {

  var canAccess = function(event, next, current) {

    var user = firebase.auth().currentUser;

    if (next.$$route.requireAuth && user == null ) {

      event.preventDefault();
      alert("You must be logged in to access page!");

    }
    else if (next.$$route.requireAuth == false && user !== null) {
      $location.path('/profile'); //dashboard
    }


  }

$rootScope.$on('$routeChangeStart',canAccess);
}]);


angular.module('lmsApp')
    .run(function runApp(pageAuth){
 //rest of your stuff
});
