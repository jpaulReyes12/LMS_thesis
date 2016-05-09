angular.module('lmsApp')
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'view/home.html',
        css: 'style/home.css'
      })
      .when('/home', {
        title: 'STC Learning Management System',
        templateUrl: 'view/home.html',
        css: 'style/home.css'
      })
      .when('/student', {
        title: 'Profile',
        templateUrl: 'view/studentProfile.html',
        css: 'style/profile.css'
      })
      .when('/about', {
        title: 'About Us',
        templateUrl: 'view/about.html',
        css: [
          {
            href: 'style/home.css',
            preload: true
          },
          {
            href: 'style/aboutus.css',
            preload: true
          }

        ]
      })
      .when('/signup', {
        title: 'Sign Up',
        templateUrl: 'view/signup.html',
        css: 'style/signup.css'
      })
      .otherwise({
        redirectTo: '/'
      })
  });


  angular.module('lmsApp')
  .run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

      if (current.hasOwnProperty('$$route')) {

          $rootScope.title = current.$$route.title;
      }

    });
  }]);
