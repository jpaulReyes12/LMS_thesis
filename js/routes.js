
  angular.module('lmsApp')
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          title: 'STC Learning Management System',
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
          css: 'style/profile.css',
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['js/controllers/studentProfileCtrl.js']});
                 }]
              }
        })
        .when('/about', {
          title: 'About Us',
          templateUrl: 'view/about.html',
          css: [
            {href: 'style/home.css', preload: true},
            {href: 'style/aboutus.css', preload: true}
          ]
        })
        .when('/signup', {
          title: 'Sign Up',
          templateUrl: 'view/signup.html',
          css: 'style/signup.css',
          controller: 'signupCtrl',
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['js/controllers/signupCtrl.js']});
                 }]
              }
        })
        .when('/class_dashbord', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/classDash.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/Sample.css'],
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/modernizr.custom.js', 'lib/classie.js']});
                 }]
              }
        })
        .when('/class_dashbord/class_record', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/classRecord.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/Sample.css'],
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/modernizr.custom.js', 'lib/classie.js']});
                 }]
              }
        })
        .when('/group', {
          title: 'Your Groups',
          templateUrl: 'view/group.html',
          css: [
            {href:'style/group.css', preload: true},
            {href:'style/profile.css', preload: true}
          ]
          // TODO: finish groups page
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
