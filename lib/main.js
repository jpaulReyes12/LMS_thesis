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

        .when('/class_dashboard/class_recordList', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/classRecord.html',
          css: [ 'style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/classdash.css'],
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
          // 'style/classDash/classThumb.css'
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
          // 'style/classDash/classThumb.css'
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

        .when('/admin', {
          title: 'Admin Page',
          templateUrl: 'view/admin/home.html',
          css: 'style/admin.css',
          requireAuth: true
        })

        .when('/admin/schedule', {
          title: 'Admin Page',
          templateUrl: 'view/admin/schedule.html',
          css: 'style/admin.css',
          requireAuth: true
        })

        .when('/admin/groups', {
          title: 'Admin Page',
          templateUrl: 'view/admin/groups.html',
          css: 'style/admin.css',
          requireAuth: true
        })

        .when('/admin/events', {
          title: 'Admin Page',
          templateUrl: 'view/admin/events.html',
          css: { href: 'style/admin.css', preload: true},
          controller: 'eventsCtrl',
          requireAuth: true
        })

        .when('/admin/forum', {
          title: 'Admin Page',
          templateUrl: 'view/admin/forum.html',
          css: 'style/admin.css',
          requireAuth: true
        })

        .when('/admin/forum_topics', {
          title: 'Admin Page',
          templateUrl: 'view/admin/forum_topics.html',
          css: 'style/admin.css',
          requireAuth: true
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
  .controller('createQuizCtrl', ['$scope', function($scope){

    var ref = firebase.database().ref("/quiz");
    console.log(ref);
    $scope.setQuiz = function(settings) {


      ref.push({
        q_num: settings.qnum,
        q_title: settings.qtitle,
        q_type: settings.qtype
      });

      console.log("pushing");

    }






  }]);


  angular.module('lmsApp')

    .controller('loginCtrl', ['$scope', '$firebaseAuth', '$firebaseArray','$location', function($scope, $firebaseAuth, $firebaseArray, $location){


      $scope.authObj = $firebaseAuth();
      var ref = firebase.database().ref("/users");
      var userInfo = $firebaseArray(ref);

      //facebook
      $scope.LoginFacebook = function() {

        $scope.authObj.$signInWithPopup("facebook").then(function(result) {
          getUtype(result.user.uid);
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });

      };

      $scope.LoginGoogle = function() {
        $scope.authObj.$signInWithPopup("google").then(function(result) {
          getUtype(result.user.uid);
        }).catch(function(error) {
          console.error("Authentication failed:", error.message);
        });
      }

      $scope.LoginEmail = function(info) {

        $scope.authObj.$signInWithEmailAndPassword(info.email, info.password)
        .then(function(result) {
            getUtype(result.user.uid);
        }).catch(function(error) {
          alert("Authentication failed:" + error.message);
        });

      }




      var getUtype = function(id) {

        function hasID() {
          ref.on('value', function(snapshot) {
            return snapshot
          })
        }

        var user = firebase.auth().currentUser;
        if (hasID()) {
          ref.child(id).on('value', function(snapshot) {
            var type = snapshot.val().utype;

            switch (type) {
              case "student":
                $location.path('/profile');
                break;
              case "teacher":
                $location.path('/profile');
                break;
              case "admin":
                $location.path('/profile');
                break;
              default:
                $location.path('/profile_info/' + user.uid   );
                // FIXME: where to redirect if no info
            }

          })
        }
        else {
          $location.path('/profile_info/' + user.uid   );

        }

      }

    }]);


  angular.module('lmsApp')

    .controller('profileInfoCtrl', ['$scope', '$firebaseObject', '$location', '$routeParams', '$firebaseAuth', 'pageAuth', function($scope, $firebaseObject, $location, $routeParams, $firebaseAuth, pageAuth){

      // INITIALIZE
      $scope.profileInfo = {utype: "student"};

      // $scope.$on('$routeChangeStart', function(event, next) {
      //
      //   pageAuth.canAccess(event, next);
      // });


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



        userInfo.$save()
        .then(function(response) {

          if (firebaseUser) {
            console.log("Signed in as:", firebaseUser.uid);
            $location.path('/profile');
          } else {
            $location.path('/');
          }
        })
        .catch(function(e) {
          console.log(e);
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


          ref.child(result.user.uid).update({
            email: result.user.email,
            id: result.user.uid
          });

          // REVIEW: add alert + to all other functions

          $location.path('/profile_info/' + result.user.uid);

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


          ref.child(result.user.uid).update({
            email: result.user.email,
            id: result.user.uid
          });

          $location.path('/profile_info/' + result.user.uid);

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


          authObj.$createUserWithEmailAndPassword(info.email, info.password)
            .then(function(result) {

              $scope.load = true;
              ref.child(result.uid).update({
                email: result.email,
                id: result.uid
              });

              $location.path('/profile_info/' + result.uid);


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

angular.module("lmsApp").config(["$routeProvider","$locationProvider",function(s){s.when("/",{title:"STC Learning Management System",templateUrl:"view/home.html",css:"style/home.css",controller:"loginCtrl",requireAuth:!1}).when("/home",{title:"STC Learning Management System",templateUrl:"view/home.html",css:"style/home.css",controller:"loginCtrl",requireAuth:!1}).when("/profile_info/:user",{title:"STC Learning Management System",templateUrl:"view/profileInfo.html",css:"style/signup.css",controller:"profileInfoCtrl"}).when("/profile",{title:"Profile",templateUrl:"view/studentProfile.html",css:"style/profile.css"}).when("/about",{title:"About Us",templateUrl:"view/about.html",css:[{href:"style/home.css",preload:!0},{href:"style/aboutus.css",preload:!0}]}).when("/signup",{title:"Sign Up",templateUrl:"view/signup.html",css:"style/signup.css",controller:"signupCtrl"}).when("/class_dashboard/class_recordList",{title:"Manage your class",templateUrl:"view/classDash/classRecord.html",css:["style/classDash/component.css","style/classDash/default.css","style/classDash/classdash.css"],resolve:{lazy:["$ocLazyLoad",function(s){return s.load({files:["lib/classie.js","lib/modernizr.custom.js"]})}]}}).when("/class_dashboard/class_recordThumb",{title:"Manage your class",templateUrl:"view/classDash/classRecord2.html",css:["style/classDash/component.css","style/classDash/default.css","style/classDash/classdash.css"],resolve:{lazy:["$ocLazyLoad",function(s){return s.load({files:["lib/classie.js","lib/modernizr.custom.js"]})}]}}).when("/class_dashboard/resources",{title:"Manage your class",templateUrl:"view/classDash/classResources.html",css:["style/classDash/component.css","style/classDash/default.css","style/classDash/classdash.css"],resolve:{lazy:["$ocLazyLoad",function(s){return s.load({files:["lib/modernizr.custom.js","lib/classie.js"]})}]}}).when("/class_dashboard/createannouncement",{title:"Manage your class",templateUrl:"view/classDash/announcementtab.html",css:["style/classDash/component.css","style/classDash/default.css","style/classDash/classdash.css"],resolve:{lazy:["$ocLazyLoad",function(s){return s.load({files:["lib/modernizr.custom.js","lib/classie.js"]})}]}}).when("/class_dashboard/createassignment",{title:"View your resources",templateUrl:"view/classDash/assignmenttab.html",css:["style/classDash/component.css","style/classDash/default.css","style/classDash/classdash.css"],resolve:{lazy:["$ocLazyLoad",function(s){return s.load({files:["lib/modernizr.custom.js","lib/classie.js"]})}]}}).when("/class_dashboard/createquiz",{title:"Manage your class",templateUrl:"view/classDash/quiztab.html",css:["style/classDash/component.css","style/classDash/default.css","style/classDash/classdash.css"],controller:"createQuizCtrl",resolve:{lazy:["$ocLazyLoad",function(s){return s.load({files:["lib/modernizr.custom.js","lib/classie.js"]})}]}}).when("/group",{title:"Your Groups",templateUrl:"view/group.html",css:[{href:"style/group.css",preload:!0},{href:"style/profile.css",preload:!0}]}).when("/forum_home",{title:"Latest Forum Topics",templateUrl:"view/forum_home.html",css:[{href:"style/forum/forum_home.css",preload:!0},{href:"style/profile.css",preload:!0}]}).when("/forum_post",{title:"Forum",templateUrl:"view/forum_post.html",css:[{href:"style/forum/forum_post.css",preload:!0},{href:"style/profile.css",preload:!0}]}).when("/admin",{title:"Admin Page",templateUrl:"view/admin/home.html",css:"style/admin.css",requireAuth:!0}).when("/admin/schedule",{title:"Admin Page",templateUrl:"view/admin/schedule.html",css:"style/admin.css",requireAuth:!0}).when("/admin/groups",{title:"Admin Page",templateUrl:"view/admin/groups.html",css:"style/admin.css",requireAuth:!0}).when("/admin/events",{title:"Admin Page",templateUrl:"view/admin/events.html",css:{href:"style/admin.css",preload:!0},controller:"eventsCtrl",requireAuth:!0}).when("/admin/forum",{title:"Admin Page",templateUrl:"view/admin/forum.html",css:"style/admin.css",requireAuth:!0}).when("/admin/forum_topics",{title:"Admin Page",templateUrl:"view/admin/forum_topics.html",css:"style/admin.css",requireAuth:!0}).otherwise({redirectTo:"/"})}]),angular.module("lmsApp").run(["$rootScope",function(s){s.$on("$routeChangeSuccess",function(e,l){l.hasOwnProperty("$$route")&&(s.title=l.$$route.title)})}]);
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


  angular.module('lmsApp')

    .controller('eventsCtrl', ['$scope', function($scope){

      $scope.toggleAdd = true;


      // DATE MANIPULATION
      //current
      var datetime = new Date();
      $scope.dateNow = datetime;


      //future
      var future = new Date();
      var futureSet = future.setFullYear(future.getFullYear() + 20);
      $scope.futureDate = futureSet;



      // TODO: add filter and sort functions. Schedule: can be edited, add subject field with dropdown.
      // form validation. Events can be edited, add button different color when toggled. topics can be edited. can add topics

      // FIXME: file manipulation

    }]);

angular.module("lmsApp").controller("createQuizCtrl",["$scope",function(e){var t=firebase.database().ref("/quiz");console.log(t),e.setQuiz=function(e){t.push({q_num:e.qnum,q_title:e.qtitle,q_type:e.qtype}),console.log("pushing")}}]);