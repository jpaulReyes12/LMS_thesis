
  angular.module('lmsApp')
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
      $routeProvider
        .when('/', {
          title: 'STC Learning Management System',
          templateUrl: 'view/home.html',
          css: 'style/home.css',
          controller: 'loginCtrl'
        })

        .when('/home', {
          title: 'STC Learning Management System',
          templateUrl: 'view/home.html',
          css: 'style/home.css',
          controller: 'loginCtrl'
        })
        
        .when('/profile_info/:user', {
          title: 'STC Learning Management System',
          templateUrl: 'view/profileInfo.html',
          css: 'style/signup.css',
          controller: 'profileInfoCtrl'
        })

        .when('/profile', {
          title: 'Profile',
          templateUrl: 'view/studentProfile.html',
            css: 'style/profile.css'
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
          controller: 'signupCtrl'
        })

        .when('/class_dashboard', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/classDash.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/Sample.css'],
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/modernizr.custom.js', 'lib/classie.js']});
                 }]
              }
        })

        .when('/class_dashboard/class_recordList', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/classRecord.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/Sample.css'],
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/classie.js', 'lib/modernizr.custom.js' ]});
                 }]
              }
        })

        .when('/class_dashboard/class_recordThumb', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/classRecord2.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/Sample.css'],
          // 'style/classDash/classThumb.css'
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/classie.js', 'lib/modernizr.custom.js' ]});
                 }]
              }
        })

        .when('/class_dashboard/resources', {
          title: 'View your resources',
          templateUrl: 'view/classDash/classResources.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/Sample.css'],
          // 'style/classDash/classThumb.css'
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
        })

        .when('/forum_home', {
          title: 'Latest Forum Topics',
          templateUrl: 'view/forum_home.html',
          css: [
            {href: 'style/forum/forum_home.css', preload: true},
            {href:'style/profile.css', preload: true}
          ]
        })

        .when('/forum_post', {
          title: 'Forum',
          templateUrl: 'view/forum_post.html',
          css: [
            {href: 'style/forum/forum_post.css', preload: true},
            {href:'style/profile.css', preload: true}
          ]
        })

        .otherwise({
          redirectTo: '/'
        });

      // $locationProvider.html5Mode(true);
    }]);


  angular.module('lmsApp')
  .run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

      if (current.hasOwnProperty('$$route')) {

          $rootScope.title = current.$$route.title;
      }

    });
  }]);
