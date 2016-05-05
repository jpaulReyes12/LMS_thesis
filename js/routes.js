angular.module('lmsApp')
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'view/home.html'
      })
      .when('/home', {
        templateUrl: 'view/home.html'
      })
      .when('/student', {
        templateUrl: 'view/studentProfile.html'
      })
      .when('/teacher', {

      })
      .otherwise({
        redirectTo: '/'
      })
  });
