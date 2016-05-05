angular.module('lmsApp')
  .config(function($routeProvider){
    $routeProvider
      .when('/home', {
        templateUrl: 'view/home.html'
      })
      .when('/student', {
        templateUrl: 'view/studentProfile.html'
      })
      .otherwise({
        redirectTo: '/home'
      })
  });
