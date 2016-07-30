  angular.module('lmsApp', [

    'ngRoute',
    'ngAnimate',
    'angularCSS',
    'oc.lazyLoad',
    'firebase'
  ]);


  angular.module('lmsApp')
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
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


  angular.module('lmsApp')

    .controller('loginCtrl', ['$scope', '$firebaseAuth', '$location', function($scope, $firebaseAuth, $location){


      $scope.authObj = $firebaseAuth();
      console.log($firebaseAuth());


      $scope.LoginFacebook = function() {

        $scope.authObj.$signInWithPopup("facebook").then(function(result) {
          console.log("Signed in as:", result);
          $location.path('/group');
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });

      };

      $scope.LoginGoogle = function() {
        $scope.authObj.$signInWithPopup("google").then(function(result) {
          console.log("Signed in as:", result);
          $location.path('/group');
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });
      }



    }]);


  angular.module('lmsApp')

    .controller('signupCtrl', ['$scope', '$firebaseArray', '$firebaseAuth', '$location', function($scope, $firebaseArray, $firebaseAuth, $location){

      // console.log($scope.formInfo.email);
      var authObj = $firebaseAuth();
      var ref = firebase.database().ref("/users");
      var userInfo = $firebaseArray(ref);

      $scope.LoginFacebook = function() {

        authObj.$signInWithPopup("facebook").then(function(result) {
          console.log("Signed in as:", result);
          $location.path('/group');
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });

      };

      $scope.LoginGoogle = function() {
        authObj.$signInWithPopup("google").then(function(result) {
          console.log("Signed in as:", result);
          $location.path('/group');
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });
      }

      // function to submit the form
      $scope.submitForm = function(info){
        if($scope.reg_form.$valid){

          authObj.$createUserWithEmailAndPassword(info.email, info.password)
            .then(function(firebaseUser) {
              console.log("Signed in as: " + firebaseUser.uid);
              // $location.path('/group');
              var user = angular.copy(info);

              userInfo.$add({
                email: user.email
              }).then(function(newUser) {
                console.log("User inserted to database! " + newUser.id + " and" + newUser.key);
              });

            }).catch(function(e) {

                if (e.code == "auth/email-already-in-use") {
                    alert(e.message);
                }else {
                    console.log("Auth failed: " + e);
                }
            })


        }
      };


    }]);
