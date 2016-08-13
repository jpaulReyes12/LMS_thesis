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


  angular.module('lmsApp')

    .controller('loginCtrl', ['$scope', '$firebaseAuth', '$location', function($scope, $firebaseAuth, $location){


      $scope.authObj = $firebaseAuth();


      //facebook
      $scope.LoginFacebook = function() {

        $scope.authObj.$signInWithPopup("facebook").then(function(result) {
          console.log("Signed in as:", result);
          $location.path('/profile');
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });

      };

      $scope.LoginGoogle = function() {
        console.log(firebase.auth());
        $scope.authObj.$signInWithPopup("google").then(function(result) {
          console.log("Signed in as:", result);
          $location.path('/profile');
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });
      }

      $scope.LoginEmail = function(info) {

        $scope.authObj.$signInWithEmailAndPassword(info.email, info.password)
        .then(function(result) {
          console.log("Signed in as:", result);
          $location.path('/profile');
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });

      }



    }]);


  angular.module('lmsApp')

    .controller('profileInfoCtrl', ['$scope', '$firebaseObject', '$location', '$routeParams', '$firebaseAuth', function($scope, $firebaseObject, $location, $routeParams, $firebaseAuth){

      // INITIALIZE
      $scope.profileInfo = {utype: "student"};


      var authObj = $firebaseAuth();
      var firebaseUser = authObj.$getAuth();

      //get current user ID from URL
      var newUser = $routeParams.user;

      var ref = firebase.database().ref("/users/" + newUser);
      var userInfo = $firebaseObject(ref);


      $scope.submitInfo = function(data) {

        userInfo.utype = data.utype;
        userInfo.firstname = data.firstname;
        userInfo.lastname = data.lastname;
        userInfo.description = data.Description;


        console.log(data);

        userInfo.$save()
        .then(function(response) {
          console.log(response + " Yey");

          if (firebaseUser) {
            console.log("Signed in as:", firebaseUser.uid);
            $location.path('/profile');
          } else {
            console.log("Signed out");
            $location.path('/');
          }
        })
        .catch(function(e) {
          console.log( e + " BOO");
        });

      }







    }]);


  angular.module('lmsApp')

    .controller('signupCtrl', ['$scope', '$firebaseArray', '$firebaseAuth', '$location', function($scope, $firebaseArray, $firebaseAuth, $location){

      $scope.load = false;

      var authObj = $firebaseAuth();

      var ref = firebase.database().ref("/users");
      var userInfo = $firebaseArray(ref); 



      // FACEBOOK SIGNUP
      $scope.LoginFacebook = function(){
        $scope.load = true;


        authObj.$signInWithPopup("facebook")
        .then(function(result) {
          // TODO: better data structure
          console.log(result.user.uid);

          userInfo.$add({
            email: result.user.email,
            id: result.user.uid
          })
          .then(function(newUser) {
            // console.log(newUser);
            $location.path('/profile_info/' + newUser.key);
          });

        })
        .catch(function(e) {
          $scope.load = false;
          alert("Authentication failed: ", e.message);
        });
        // end authObj


      };






      // GOOGLE SIGNUP
      $scope.LoginGoogle = function(){
        $scope.load = true;


        authObj.$signInWithPopup("google")
        .then(function(result) {
          console.log(result);

          userInfo.$add({
            email: result.user.email,
            id: result.user.uid
          })
          .then(function(newUser) {
            // console.log(newUser);
            $location.path('/profile_info/' + newUser.key);
          });

        })
        .catch(function(e) {
          $scope.load = false;
          alert("Authentication failed: ", e.message);
        });
        // end authObj


      };




      // EMAIL SIGNUP
      $scope.submitForm = function(info){

        if($scope.reg_form.$valid){
          $scope.load = true;

          authObj.$createUserWithEmailAndPassword(info.email, info.password)
            .then(function(result) {


              ref.push({
                email: result.email,
                id: result.uid
              })
              .then(function(newUser) {
                console.log(newUser);
                $location.path('/profile_info/' + newUser.key);
              });


            })
            .catch(function(e) {
                $scope.load = false;
                if (e.code == "auth/email-already-in-use") {
                    alert(e.message);
                }else {
                    console.log("Auth failed: " + e);
                }
            })

        }
      };


    }]);
