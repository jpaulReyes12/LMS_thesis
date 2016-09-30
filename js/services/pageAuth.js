
angular.module('lmsApp')

.factory('loggedInUser', [function() {

  var userLoggedin = "noUser";
  var id = "";

   firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      id = user.uid;

      firebase.database().ref('/users/' + id).on("value", function(snapshot) {
        userLoggedin = snapshot.val().utype;
      })
    }
    else {
      userLoggedin = "noUser";
    }
  });

  function getUsertype() {

    return userLoggedin;
  }

  function getUID() {
    return id;
  }


  return {
    getUsertype: getUsertype,
    getUID: getUID
  };
}])

.service('pageAuth', ['$location', '$rootScope', 'loggedInUser', function ($location, $rootScope, loggedInUser) {

  var canAccess = function(event, next, prev, error)
  {
    if (error === "AUTH_REQUIRED")
    {
      event.preventDefault();
      alert("You must be logged in to access page!");

      if (prev)
      {
        $location.path(prev.$$route.originalPath);
      }
    }
  }

  var checkUser = function (event, next, prev, err) {
    if ( $location.path() === "/" && loggedInUser.getUsertype() !== "noUser"
      || $location.path() === "/home" && loggedInUser.getUsertype() !== "noUser") {
      $location.path(prev.$$route.originalPath);
    }

    var utype = loggedInUser.getUsertype();
    if (utype !== "noUser") {
      switch (utype) {
        case "teacher":
          checkIfAllowed(utype);
          break;
        case "student":
          checkIfAllowed(utype);
          break;
        default:
          console.log("default");
          break;

      }

    }

    function checkIfAllowed(type) {
      var nextRouteAuth = next.data.requireAuth;

      if (nextRouteAuth !== "none") {


        if (Array.isArray(nextRouteAuth)) {

          var allowed = nextRouteAuth.some(function(user) {

              if (user === type)
                return true;
              else return false;
          });

          if (allowed !== true) {
            event.preventDefault();
            alert("You are not authorized to access the page!");
          }

        }
        else {

          if (type !== nextRouteAuth) {
            event.preventDefault();
            alert("You are not authorized to access the page!");
          }


        } //end else
      }
    }//end checkIfAllowed


  }

  $rootScope.$on('$routeChangeError',canAccess);
  $rootScope.$on('$routeChangeStart',checkUser);
}]);


angular.module('lmsApp')
  .run(function runApp(pageAuth){
  });
