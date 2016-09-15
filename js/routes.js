
  angular.module('lmsApp')
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
      $routeProvider
        .when('/', {
          title: 'STC Learning Management System',
          templateUrl: 'view/home.html',
          css: 'style/home.css',
          controller: 'loginCtrl',
          requireAuth: false
        })

        .when('/home', {
          title: 'STC Learning Management System',
          templateUrl: 'view/home.html',
          css: 'style/home.css',
          controller: 'loginCtrl',
          requireAuth: false
        })

        .when('/profile_info/:user', {
          title: 'STC Learning Management System',
          templateUrl: 'view/profileInfo.html',
          css: 'style/signup.css',
          controller: 'profileInfoCtrl',
          requireAuth: false
        })

        .when('/profile', {
          title: 'Profile',
          templateUrl: 'view/studentProfile.html',
          css: 'style/profile.css',
          requireAuth: true,
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }],
            "currentUser": [function() {
              return firebase.auth().currentUser;

            }]


          }
        })

        .when('/about', {
          title: 'About Us',
          templateUrl: 'view/about.html',
          css: [
            {href: 'style/home.css', preload: true},
            {href: 'style/aboutus.css', preload: true}
          ],
          requireAuth: false
        })

        .when('/signup', {
          title: 'Sign Up',
          templateUrl: 'view/signup.html',
          css: 'style/signup.css',
          controller: 'signupCtrl',
          requireAuth: false
        })

        .when('/class_dashboard/class_recordList', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/classRecord.html',
          css: [ 'style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/classdash.css'],
          requireAuth: false,
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/classie.js', 'lib/modernizr.custom.js' ]});
                 }]
              }
        })

        .when('/class_dashboard/class_recordThumb', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/classRecord2.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/classdash.css'],
          requireAuth: false,
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/classie.js', 'lib/modernizr.custom.js' ]});

                 }]
              }
        })

        .when('/class_dashboard/resources', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/classResources.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/classdash.css'],
          // 'style/classDash/classThumb.css'
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/modernizr.custom.js', 'lib/classie.js']});
                 }]
          }
        })

        .when('/class_dashboard/createannouncement', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/announcementtab.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/classdash.css'],
          // 'style/classDash/classThumb.css'
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/modernizr.custom.js', 'lib/classie.js']});
                 }]
              }
        })

        .when('/class_dashboard/createassignment', {
          title: 'View your resources',
          templateUrl: 'view/classDash/assignmenttab.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/classdash.css'],
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/modernizr.custom.js', 'lib/classie.js']});
                 }]
              }
        })

        .when('/class_dashboard/createquiz', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/quiztab.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/classdash.css'],
          controller: 'createQuizCtrl',
          requireAuth: true,
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
          ],
          requireAuth: true,
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }]
          }
        })

        .when('/forum_home', {
          title: 'Latest Forum Topics',
          templateUrl: 'view/forum_home.html',
          css: [
            {href: 'style/forum/forum_home.css', preload: true},
            {href:'style/profile.css', preload: true}
          ],
          requireAuth: true,
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }]
          }
        })

        .when('/forum_post', {
          title: 'Forum',
          templateUrl: 'view/forum_post.html',
          css: [
            {href: 'style/forum/forum_post.css', preload: true},
            {href:'style/profile.css', preload: true}
          ],
          requireAuth: true,
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }]
          }
        })

        .when('/admin', {
          title: 'Admin Page',
          templateUrl: 'view/admin/home.html',
          css: 'style/admin.css',
          controller: 'adminUsersCtrl',
          requireAuth: true,
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }]
          }
        })

        .when('/admin/schedule', {
          title: 'Admin Page',
          templateUrl: 'view/admin/schedule.html',
          css: 'style/admin.css',
          controller: 'adminScheduleCtrl',
          requireAuth: true,
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }]
          }
        })

        .when('/admin/groups', {
          title: 'Admin Page',
          templateUrl: 'view/admin/groups.html',
          css: 'style/admin.css',
          requireAuth: true,
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }]
          }
        })

        .when('/admin/events', {
          title: 'Admin Page',
          templateUrl: 'view/admin/events.html',
          css: { href: 'style/admin.css', preload: true},
          controller: 'eventsCtrl',
          requireAuth: true,
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }]
          }
        })

        .when('/admin/forum', {
          title: 'Admin Page',
          templateUrl: 'view/admin/forum.html',
          css: 'style/admin.css',
          requireAuth: true,
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }]
          }
        })

        .when('/admin/forum_topics', {
          title: 'Admin Page',
          templateUrl: 'view/admin/forum_topics.html',
          css: 'style/admin.css',
          requireAuth: true,
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }]
          }
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
