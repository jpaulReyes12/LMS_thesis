  angular.module('lmsApp', [

    'ngRoute',
    'ngAnimate',
    'angularCSS',
    'oc.lazyLoad',
    'firebase',
    'ui.bootstrap'
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

angular.module('lmsApp')
  .controller('createQuizCtrl', ['$scope', 'Questions', function($scope, Questions){

    var ref = firebase.database().ref("/quiz");

    $scope.setQuiz = function(settings) {

      ref.push({
        q_num: settings.qnum,
        q_title: settings.qtitle,
        q_type: settings.qtype
      });
      console.log("pushing");

    }
    
    $scope.QuestionData = [];
    $scope.addQuiz = function(q) {
      $scope.QuestionData.push({
        q_question: q.quest,
        q_answer: q.answer,
        q_dummy1: q.dummy1,
        q_dummy2: q.dummy2,
        q_dummy3: q.dummy3
      });

      console.log("add quiz");
    }



    $scope.saveQuiz = function() {

      Questions.addQuiz($scope.QuestionData);
      console.log("save");

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
        });

      };

      $scope.LoginGoogle = function() {
        $scope.authObj.$signInWithPopup("google").then(function(result) {
          getUtype(result.user.uid);
        });
      }

      $scope.LoginEmail = function(info) {

        $scope.authObj.$signInWithEmailAndPassword(info.email, info.password)
        .then(function(result) {
            getUtype(result.user.uid);
        }).catch(function(error) {
          console.log(error);
        });

      }




      var getUtype = function(id) {


        ref.child(id).on('value', function(snapshot) {


          var user = firebase.auth().currentUser;
          if (snapshot.val() !== null) {
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
                  $location.path('/admin');
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


        })

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
      var dateToday = new Date(Date.now()).toLocaleString();


      $scope.submitInfo = function(data) {

        userInfo.utype = data.utype;
        userInfo.firstname = data.firstname;
        userInfo.lastname = data.lastname;
        userInfo.description = data.Description;
        userInfo.email = firebaseUser.email;
        userInfo.dateCreated = dateToday;
        userInfo.dateSignedIn = dateToday;
        userInfo.isActive = true;

        userInfo.$save()
        .then(function(response) {
          ref.update({
            uid: response.key
          })

          if (firebaseUser) {
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
              $location.path('/profile_info/' + result.uid);


            })
            .catch(function(e) {
                $scope.load = false;
                if (e.code === "auth/email-already-in-use") {
                    alert(e.message);
                }else {
                    console.log("Auth failed: " + e);
                }
            })

        }
      };


    }]);

angular.module('lmsApp')

.directive('dirAdminNav', ['$location' , function($location) {


  var linker = function(scope) {
    scope.logOutUser = function() {
      firebase.auth().signOut();
      $location.path('/');
    }

    scope.location = function(href) {
      return href.substr(1) === $location.url();
    };

    scope.name = "";
  }




  return {
    restrict: 'E',
    templateUrl: 'components/partials/adminNav.html',
    link: linker
  };

}]);

angular.module('lmsApp')

.directive('dirFileInput', [function() {

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var onChangeFunc = scope.$eval(attrs.dirFileInput);
      element.bind('change', onChangeFunc);
    }
  };

}]);

angular.module('lmsApp')

.directive('dirNav', ['$location' , function($location) {


  var linker = function(scope) {
    scope.logOutUser = function() {
      firebase.auth().signOut();
      $location.path('/');
    }

    scope.location = function(href) {
      return href.substr(1) === $location.url();
    };

    scope.name = "";

    scope.NotifNum = 3;
    scope.MessageNum = 2;
  }




  return {
    restrict: 'A',
    // transclude: true,
    templateUrl: 'components/partials/navbar.html',
    link: linker
  };

}]);


angular.module('lmsApp')

.factory('Events', [ '$firebaseArray', function ($firebaseArray) {


  var ref = firebase.database().ref('/events');
  var eventList = $firebaseArray(ref);

  function getEvents() {
    return eventList;
  }

  function addEvent(data) {
    eventList.$add(data);
  }

  return {
    getEvents: getEvents,
    addEvent: addEvent
  }
}]);


angular.module('lmsApp')

.factory('File', [function () {

  var file,
      storageRef,
      task,
      dl_URL;

  function getFile(aFile) {
    file = aFile;
    console.log(file);
  }

  function setStorage(path, filename) {
    storageRef = firebase.storage().ref(path + filename);
    console.log(path);
  }


  function upload() {
    task = storageRef.put(file);
    return task;
  }

  function progress(snapshot) {
    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    return percentage;
  }

  function getURL() {
    return storageRef.getDownloadURL();
  }

  return{
    getFile: getFile,
    setStorage: setStorage,
    upload: upload,
    progress: progress,
    getURL:getURL
  }




//   var uploadTask = storageRef.child('images/rivers.jpg').put(file);
//
// // Register three observers:
// // 1. 'state_changed' observer, called any time the state changes
// // 2. Error observer, called on failure
// // 3. Completion observer, called on successful completion
// uploadTask.on('state_changed', function(snapshot){
//   // Observe state change events such as progress, pause, and resume
//   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//   console.log('Upload is ' + progress + '% done');
//   switch (snapshot.state) {
//     case firebase.storage.TaskState.PAUSED: // or 'paused'
//       console.log('Upload is paused');
//       break;
//     case firebase.storage.TaskState.RUNNING: // or 'running'
//       console.log('Upload is running');
//       break;
//   }
// }, function(error) {
//   // Handle unsuccessful uploads
// }, function() {
//   // Handle successful uploads on complete
//   // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//   var downloadURL = uploadTask.snapshot.downloadURL;
// });


}]);


angular.module('lmsApp')

.service('pageAuth', ['$location', '$rootScope', function ($location, $rootScope) {

  var canAccess = function(event, next, prev, error) {

      // if (next.$$route.requireAuth && theUser === null) {
      //   console.log(theUser);
      //   event.preventDefault();
      //   alert("You must be logged in to access page!" + theUser);
      //
      // }
      // else if (next.$$route.requireAuth == false && theUser !== null) {
      //   event.preventDefault();
      //
      // }

      
      if (error === "AUTH_REQUIRED") {
        $location.path("/");

      }

  }

  $rootScope.$on('$routeChangeError',canAccess);
  // $rootScope.$on('$routeChangeSuccess',canAccess);
}]);


angular.module('lmsApp')
  .run(function runApp(pageAuth){
  });

angular.module('lmsApp')

.factory('Questions',['$firebaseArray', function($firebaseArray){

  var ref = firebase.database().ref('/quiz/questions');
  var questionList = $firebaseArray(ref);

  function addQuiz(q){
    questionList.$add(q);
  }

  return{
    addQuiz: addQuiz
  }

}])


angular.module('lmsApp')

.factory('Schedule', [ '$firebaseArray', function ($firebaseArray) {


  var ref = firebase.database().ref('/schedule');
  var scheduleList = $firebaseArray(ref);

  function getSched() {
    return scheduleList;
  }

  function addSched(data) {
    scheduleList.$add(data);
  }

  return {
    getSched: getSched,
    addSched: addSched
  }
}]);


angular.module('lmsApp')

.factory('Users', [ '$firebaseArray', function ($firebaseArray) {


  var ref = firebase.database().ref('/users');
  var userList = $firebaseArray(ref);

  function getUsers() {
    return userList;
  }

  return {
    getUsers: getUsers
  }
}]);


  angular.module('lmsApp')

    .controller('adminScheduleCtrl', ['$scope', 'Schedule', 'Users' , 'uibButtonConfig', function($scope, Schedule, Users, uibButtonConfig){

      $scope.theSchedule = Schedule.getSched();
      $scope.theTeachers = Users.getUsers();
      $scope.toggleAdd = true;
      uibButtonConfig.activeClass = 'btn-primary';

      //sort and filters
      $scope.searchSchedule = '';
      $scope.sortType = 'Section';
      $scope.sortReverse = 'false';

      //checkbox function
      $scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.theSchedule, function (sched) {
            sched.Selected = $scope.selectedAll;
        });

      };


      $scope.Days ={
        mon: false,
        tue: true,
        wed: false,
        thu: false,
        fri: false
      }
      $scope.sched = {
        Section: null
      };
      $scope.insertSched = function(data) {
        var yearNow = new Date().getFullYear();
        var yearNext = yearNow + 1;
        //set times to millisecond format
        data.timeStart = data.timeStart.getTime();
        data.timeEnd = data.timeEnd.getTime();
        data.isActive = true;
        data.SY = String(yearNow) + " - " + String(yearNext) ;

        console.log(data.SY);


        Schedule.addSched(data);
      }





    }]);


  angular.module('lmsApp')

    .controller('adminUsersCtrl', ['$scope', 'Users' , function($scope, Users){

      $scope.theUsers = Users.getUsers();

      //sort and filters
      $scope.searchUsers = '';
      $scope.sortType = 'email';
      $scope.sortReverse = 'false';

      //checkbox function
      $scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.theUsers, function (user) {
            user.Selected = $scope.selectedAll;
        });

      };

    }]);


angular.module('lmsApp')

  .controller('eventsCtrl', ['$scope', 'File', 'Events', function($scope, File, Events){

    $scope.toggleAdd = true;
    $scope.theEvents = Events.getEvents();


    // DATE MANIPULATION
    //current
    var datetime = new Date();
    $scope.dateNow = datetime;


    //future
    var future = new Date();
    var futureSet = future.setFullYear(future.getFullYear() + 20);
    $scope.futureDate = futureSet;



    //sort and filters
    $scope.searchEvents = '';
    $scope.sortType = 'email';
    $scope.sortReverse = 'false';

    //checkbox function
    $scope.checkAll = function () {
      if ($scope.selectedAll) {
          $scope.selectedAll = true;
      } else {
          $scope.selectedAll = false;
      }
      angular.forEach($scope.theEvents, function (event) {
          event.Selected = $scope.selectedAll;
      });

    };


    // TODO: add filter and sort functions. Schedule: can be edited, add subject field with dropdown.
    // form validation. Events can be edited, add button different color when toggled. topics can be edited. can add topics

    $scope.insertEvent = function(data) {
      data.startEvent = data.start.toString();
      data.endEvent = data.end.toString();
      console.log(data);
      Events.addEvent(data);
    }



    $scope.fileGetter = function() {
      var file = event.target.files[0];
      File.getFile(file);
      File.setStorage("events/", file.name);

      //call these afer click submit
      File.upload().on('state_changed',
        function progress(snapshot) {
          File.progress(snapshot);
        },
        function error(error) {
          console.log(error);
        },
        function success() {
          File.getURL().then(function(snapshot) {
            console.log(snapshot);
          })
        }
      )
    };




}]);
