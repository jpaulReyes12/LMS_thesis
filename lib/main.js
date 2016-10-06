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
          data: {
            requireAuth: 'none'
          }

        })

        .when('/home', {
          title: 'STC Learning Management System',
          templateUrl: 'view/home.html',
          css: 'style/home.css',
          controller: 'loginCtrl',
          data: {
            requireAuth: 'none'
          }
        })

        .when('/profile_info/:user', {
          title: 'STC Learning Management System',
          templateUrl: 'view/profileInfo.html',
          css: 'style/signup.css',
          controller: 'profileInfoCtrl',
          data: {
            requireAuth: 'none'
          }
        })

        .when('/student_page', {
          title: 'Student page',
          templateUrl: 'view/student/student_page.html',
          controller: 'TabsDemoCtrl',
          css: [
            {href: 'style/profile.css', preload: true},
            {href: 'style/student-page.css', preload: true}
          ],
          data: {requireAuth: ['teacher', 'student']},
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }],
            "currentUser": [function() {
              return firebase.auth().currentUser;

            }]
          }
        })

        .when('/profile', {
          title: 'Profile',
          templateUrl: 'view/studentProfile.html',
          css: 'style/profile.css',
          controller: 'studentProfile',
          data: {
            requireAuth: 'none'
          },
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
          data: {
            requireAuth: 'none'
          }
        })

        .when('/signup', {
          title: 'Sign Up',
          templateUrl: 'view/signup.html',
          css: 'style/signup.css',
          controller: 'signupCtrl',
          data: {
            requireAuth: 'none'
          }
        })

        .when('/class_dashboard/class_recordList', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/classRecord.html',
          css: [ 'style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/classdash.css'],
          data: {
            requireAuth: 'none'
          },
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
          data : {
            requireAuth: ['teacher', 'student']
          },
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
          data:{
            requireAuth: ['teacher', 'student']
          },
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
          data: {
            requireAuth: ['teacher', 'student']
          },
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
          data:{
            requireAuth: 'teacher'
          },
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
          data: {
            requireAuth: 'teacher'
          },
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/modernizr.custom.js', 'lib/classie.js']});
                 }]
              }
        })

        .when('/group', {
          title: 'Your Groups',
          templateUrl: 'view/group/group.html',
          controller: 'groupCtrl',
          css: [
            {href:'style/group.css', preload: true},
            {href:'style/profile.css', preload: true}
          ],
          data:{
            requireAuth: ['teacher', 'student']
          },
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }]
          }
        })

        .when('/group/page', {
          title: 'Your Groups',
          templateUrl: 'view/group/group_page.html',
          css: [
            {href:'style/group.css', preload: true},
            {href:'style/profile.css', preload: true}
          ],
          data:{
            requireAuth: ['teacher', 'student']
          },
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }]
          }
        })

        .when('/group/page', {
          title: 'Your Groups',
          templateUrl: 'view/group/group_page.html',
          css: [
            {href:'style/group.css', preload: true},
            {href:'style/profile.css', preload: true}
          ],
          data:{
            requireAuth: ['teacher', 'student']
          },
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
          data: {
            requireAuth: 'none'
          }
        })

        .when('/start_quiz', {
          title: 'start quiz',
          templateUrl: 'view/student/start_quiz.html',
          requireAuth: false,
          css: [
            {href: 'style/profile.css', preload: true},
            {href: 'style/student_quiz.css', preload: true}
          ],
          data: {
            requireAuth: 'none'
          }

          // controller: 'PaginationDemoCtrl'
        })

        .when('/take_quiz', {
          title: 'take quiz',
          templateUrl: 'view/student/student_quiz.html',
          controller: 'PaginationDemoCtrl',
          css: [
            {href: 'style/profile.css', preload: true},
            {href: 'style/student_quiz.css', preload: true}
          ],
          data: {
            requireAuth: 'none'
          }

        })

        .when('/forum_post', {
          title: 'Forum',
          templateUrl: 'view/forum_post.html',
          css: [
            {href: 'style/forum/forum_post.css', preload: true},
            {href:'style/profile.css', preload: true}
          ],
          data: {
            requireAuth: 'none'
          }

        })

        .when('/create_forum_form', {
          title: 'Create Forum',
          templateUrl: 'view/create_forum_form.html',
          controller: 'addForumCtrl',
          css: [
            {href: 'style/profile.css', preload: true},
            {href: 'style/forum/forum_home.css', preload: true}
          ],
          data: {
            requireAuth: ['teacher', 'student']
          },
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
          data: {requireAuth: 'admin'},
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
          data: {requireAuth: 'admin'},
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
          data: {requireAuth: 'admin'},
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
          data: {requireAuth: 'admin'},
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }]
          }
        })

        .when('/admin/sections', {
          title: 'Admin Page',
          templateUrl: 'view/admin/sections.html',
          css: { href: 'style/admin.css', preload: true},
          controller: 'eventsCtrl',
          data: {requireAuth: 'admin'},
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }]
          }
        })

        .when('/admin/subjects', {
          title: 'Admin Page',
          templateUrl: 'view/admin/subjects.html',
          css: { href: 'style/admin.css', preload: true},
          controller: 'aSubjectsCtrl',
          data: {requireAuth: 'admin'},
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
          data: {requireAuth: 'admin'},
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
          data: {requireAuth: 'admin'},
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }]
          }
        })

        .when('/teacher/uploads', {
          title: 'Uploads Page',
          templateUrl: 'view/teacher/uploads.html',
          css: 'style/uploads.css',
          data:{requireAuth: 'none'}
        })
        .when('/teacher/classes', {
          title: 'Classes Page',
          templateUrl: 'view/teacher/classes.html',
          css: 'style/teacher/classes.css',
          data:{requireAuth: 'none'}
        })

        .when('/teacher/home', {
          title: 'Home Page',
          templateUrl: 'view/teacher/homeMenubars.html',
          css: 'style/teacher/home.css',
          data:{requireAuth: 'none'}
        })


        .when('/teacher/assignment', {
          title: 'Assignment Page',
          templateUrl: 'view/teacher/assignments.html',
          css: 'style/teacher/assignments.css',
          data:{requireAuth: 'none'}
        })

        .otherwise({
          redirectTo: '/',
          data:{requireAuth: 'none'}
        });


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
.controller( 'addForumCtrl', ['$scope', 'Forum', function($scope, Forum) {



  $scope.addForum = function(forum){
    console.log(forum);
    Forum.addForum(forum);

    $scope.forum = {titles:'', contents:''};

    $scope.form_group.$setPristine;

    console.log("added");
  }

}])

// FIXME: magbutang paka ug forum service okieeee???????

angular.module('lmsApp')
  .controller('createQuizCtrl', ['$scope', 'Questions', function($scope, Questions){

    var ref = firebase.database().ref("/quiz");

    $scope.setQuiz = function(settings) {

      var quizKey = ref.push({
        q_num: settings.qnum,
        q_title: settings.qtitle,
        q_type: settings.qtype
      }).key;

      console.log(quizKey);
      Questions.setKey(quizKey);

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
        console.log(Questions.getKey());
      Questions.addQuiz($scope.QuestionData, Questions.getKey());
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
      }

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
                  $location.path('/student_page');
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
.controller('PaginationDemoCtrl', ['$scope', function ($scope) {
  $scope.totalItems = 100;
  // $scope.currentPage = 4;





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
      $scope.LoginFacebook = function() {
        authObj.$signInWithPopup("facebook")
        .then(function(result) {


          $location.path('/profile_info/' + result.user.uid);

        })
        .catch(function(e) {
          $scope.load = false;
          alert("Authentication failed: ", e.message);
        });
      }

      // GOOGLE SIGNUP
      $scope.LoginGoogle = function() {
        authObj.$signInWithPopup("google")
        .then(function(result) {


          $location.path('/profile_info/' + result.user.uid);

        })
        .catch(function(e) {
          $scope.load = false;
          alert("Authentication failed: ", e.message);
        });
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

      // var signInWithPopup = function(provider) {
      //   $scope.load = true;
      //
      //
      //   authObj.$signInWithPopup(provider)
      //   .then(function(result) {
      //
      //
      //     $location.path('/profile_info/' + result.user.uid);
      //
      //   })
      //   .catch(function(e) {
      //     $scope.load = false;
      //     alert("Authentication failed: ", e.message);
      //   });
      //   // end authObj
      // }


    }]);


  angular.module('lmsApp')

    .controller('studentProfile', ['$scope', '$firebaseArray', '$firebaseAuth', '$location', function($scope, $firebaseArray, $firebaseAuth, $location){

      $scope.load = false;

      var authObj = $firebaseAuth();

      var ref = firebase.database().ref("/users");
      var userInfo = $firebaseArray(ref);

    }]);

angular.module('lmsApp')
.controller('TabsDemoCtrl', ['$scope', function ($scope) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2' }
  ];

  $scope.model = {
    name: 'Tabs'
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

.directive('dirLoader', [function() {



  return {
    restrict: 'E',
    template: '<div class="loader-wrapper">'+
      '<div class="loader">'+
      '<div class="dot"></div>'+
      '<div class="dot"></div>'+
      '<div class="dot"></div>'+
      '</div>'
  };

}]);

angular.module('lmsApp')

.directive('dirNav', ['$location', 'LoggedInUser' , function($location, LoggedInUser) {


  var linker = function(scope) {
    scope.logOutUser = function() {
      $location.path('/');
      firebase.auth().signOut();
    }

    scope.location = function(href) {
      return href.substr(1) === $location.url();
    };

    // scope.utype_dash;
    scope.utypePath;
    (function typeToPath() {
      userTypeData = LoggedInUser.getUsertype();

      if (userTypeData == "student") {
        setUtype_Path("#/student_page");
      }else if (userTypeData == "teacher") {
        setUtype_Path("#/class_dashboard/createquiz");
      }
    })()

    function setUtype_Path(path) {
      scope.utypePath = path;
    }


    function getNewPath() {
      return utypePath;
    }

    // FIXME: dynamic user from database
    scope.name = firebase.auth().currentUser.displayName;

    scope.NotifNum = 3;
    scope.MessageNum = 2;
  }




  return {
    restrict: 'A',
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

  function deactivate(id) {
    ref.child(id).update({
      isActive: false
    });

  }

  function activate(id) {
    ref.child(id).update({
      isActive: true
    });

  }

  return {
    getEvents: getEvents,
    addEvent: addEvent,
    deactivate: deactivate,
    activate: activate
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

}]);

angular.module('lmsApp')
.factory('Forum', ['$firebaseArray', function($firebaseArray){

  var ref = firebase.database().ref('forum/');
  var details = $firebaseArray(ref);
  var toPost = [];

  function addForum(forum){
    details.$add(forum)
  }

  return{
    addForum: addForum
  }


}])


angular.module('lmsApp')

.factory('Groups', [ '$firebaseArray', function ($firebaseArray) {


  var ref = firebase.database().ref('/groups');
  var groupList = $firebaseArray(ref);


  function addGroup(data, uid) {
    groupList.$add(data).then(function(result) {
      var id = result.key;
      console.log(result);
      firebase.database().ref('users/' + uid + '/groups').push(id);

    });
  }

  function getGrpID() {
    return grpID
  }

  function addMember() {

  }

  return{
    addGroup: addGroup,
    getGrpID: getGrpID
  }

}]);


angular.module('lmsApp')

.factory('LoggedInUser', [function() {

  var userLoggedin;
  var id = "";

   firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      //CHECK AUTH
      id = user.uid;

      //CHECK DATABASE
      firebase.database().ref('/users/' + id).on("value", function(snapshot) {
        setUserLoggedin(snapshot.val().utype);
      })
    }
    else {
      setUserLoggedin("noUser");
    }
  });

  function setUserLoggedin(user_type) {
    userLoggedin = user_type;
  }



  function getUsertype() {
    return userLoggedin;
  }

  function getUID() {
    return id;
  }


  return {
    getUsertype: getUsertype,
    getUID: getUID
  };
}])

.service('pageAuth', ['$location', '$rootScope', 'LoggedInUser', function ($location, $rootScope, LoggedInUser) {

  var canAccess = function(event, next, prev, error)
  {
    if (error === "AUTH_REQUIRED")
    {
      event.preventDefault();
      alert("You must be logged in to access page!");

      if (prev)
      {
        $location.path(prev.$$route.originalPath);
      }
    }
  }

  var checkUser = function (event, next, prev, err) {


    if ( $location.path() === "/" && LoggedInUser.getUsertype() !== "noUser"
      || $location.path() === "/home" && LoggedInUser.getUsertype() !== "noUser") {

        if (prev) {
          $location.path(prev.$$route.originalPath);

        }
    }

    var utype = LoggedInUser.getUsertype();
    if (utype !== "noUser") {
      switch (utype) {
        case "teacher":
          checkIfAllowed(utype);
          break;
        case "student":
          checkIfAllowed(utype);
          break;
        default:
          console.log("default");
          break;

      }

    }

    function checkIfAllowed(type) {
      var nextRouteAuth = next.data.requireAuth;

      if (nextRouteAuth !== "none") {


        if (Array.isArray(nextRouteAuth)) {

          var allowed = nextRouteAuth.some(function(user) {

              if (user === type)
                return true;
              else return false;
          });

          if (allowed !== true) {
            event.preventDefault();
            alert("You are not authorized to access the page!");
          }

        }
        else {

          if (type !== nextRouteAuth) {
            event.preventDefault();
            alert("You are not authorized to access the page!");
          }


        } //end else
      }
    }//end checkIfAllowed


  }

  $rootScope.$on('$routeChangeError',canAccess);
  $rootScope.$on('$routeChangeStart',checkUser);
}]);


angular.module('lmsApp')
  .run(function runApp(pageAuth){
  });

angular.module('lmsApp')

.factory('Questions',['$firebaseArray', "$firebaseObject", function($firebaseArray){

  var ref = firebase.database().ref('/quiz/');
  var key = "";

  function setKey(q_key) {
    key = q_key;
    console.log(key);
  }

  function getKey() {
    console.log(key);
    return key;
  }

  function addQuiz(q, parentKey){
    var ref = firebase.database().ref('/quiz/' + parentKey + "/questions");
    var questionList = $firebaseArray(ref);
    return questionList.$save(q).key;
  }

  return{
    addQuiz: addQuiz,
    setKey: setKey,
    getKey: getKey
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

  function deactivate(id) {
    ref.child(id).update({
      isActive: false
    });

  }

  function activate(id) {
    ref.child(id).update({
      isActive: true
    });

  }

  return {
    getSched: getSched,
    addSched: addSched,
    deactivate: deactivate,
    activate: activate
  }
}]);


angular.module('lmsApp')

.factory('Subjects', [ '$firebaseArray', function ($firebaseArray) {


  var ref = firebase.database().ref('/subjects');
  var subjectList = $firebaseArray(ref);

  function getSubjects() {
    return subjectList;
  }

  function addSubject(data) {
    subjectList.$add(data);
  }

  function deactivate(id) {
    ref.child(id).update({
      isActive: false
    });

  }

  function activate(id) {
    ref.child(id).update({
      isActive: true
    });

  }

  return {
    getSubjects: getSubjects,
    addSubject: addSubject,
    deactivate: deactivate,
    activate: activate
  }
}]);


angular.module('lmsApp')

.factory('Users', [ '$firebaseArray', function ($firebaseArray) {


  var ref = firebase.database().ref('/users');
  var userList = $firebaseArray(ref);

  function getUsers() {
    return userList;
  }

  function deactivate(id) {
    ref.child(id).update({
      isActive: false
    });

  }

  function activate(id) {
    ref.child(id).update({
      isActive: true
    });

  }

  return {
    getUsers: getUsers,
    deactivate: deactivate,
    activate: activate
  }
}]);


  angular.module('lmsApp')

    .controller('adminScheduleCtrl', ['$scope', 'Schedule', 'Users' , 'Subjects', 'uibButtonConfig', function($scope, Schedule, Users, Subjects, uibButtonConfig){

      $scope.theSchedule = Schedule.getSched();
      $scope.theTeachers = Users.getUsers();
      $scope.theSubjects = Subjects.getSubjects();
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

      $scope.deactivate = function(id) {
        console.log(id);
        Schedule.deactivate(id);
      }

      $scope.activate = function(id) {
        console.log(id);
        Schedule.activate(id);
      }

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

        Schedule.addSched(data);
      }





    }]);


angular.module('lmsApp')

  .controller('aSubjectsCtrl', ['$scope', 'Subjects', function($scope, Subjects){

    $scope.toggleAdd = true;
    $scope.theSubjects = Subjects.getSubjects();
    $scope.load = false;


    //sort and filters
    $scope.searchSubject = '';
    $scope.sortType = 'name';
    $scope.sortReverse = true;

    //checkbox function
    $scope.checkAll = function () {
      if ($scope.selectedAll) {
          $scope.selectedAll = true;
      } else {
          $scope.selectedAll = false;
      }
      angular.forEach($scope.theSubjects, function (event) {
          event.Selected = $scope.selectedAll;
      });

    };

    $scope.insertSubject = function(data) {
      data.isActive = true;
      Subjects.addSubject(data);
      $scope.toggleAdd = !toggleAdd;
    }


    $scope.deactivate = function(id) {
      Subjects.deactivate(id);
    }

    $scope.activate = function(id) {
      Subjects.activate(id);
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

      $scope.deactvate = function(id) {
        Users.deactivate(id);
      }

      $scope.activate = function(id) {
        Users.activate(id);
      }

    }]);


angular.module('lmsApp')

  .controller('eventsCtrl', ['$scope', 'File', 'Events', function($scope, File, Events){

    $scope.toggleAdd = true;
    $scope.theEvents = Events.getEvents();
    $scope.load = false;

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
    $scope.sortType = 'name';
    $scope.sortReverse = true;

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



    $scope.insertEvent = function(data) {
      data.startEvent = data.start.getTime();
      data.endEvent = data.end.getTime();
      data.isActive = true;
      $scope.load = true;

      File.upload().on('state_changed',
        function progress(snapshot) {
          console.log(snapshot)
          $scope.percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        function error(error) {
          console.log(error);
        },
        function success() {
          File.getURL().then(function(snapshot) {
            data.url = snapshot;
            Events.addEvent(data);

            $scope.load = false;
            $scope.event = null;
            $scope.toggleAdd = true;

          })
        }
      )

    }


    $scope.deactvate = function(id) {
      Events.deactivate(id);
    }

    $scope.activate = function(id) {
      Events.activate(id);
    }


    $scope.fileGetter = function() {
      var file = event.target.files[0];
      File.getFile(file);
      File.setStorage("events/", file.name);

    };




}]);

angular.module('lmsApp')

.controller('groupCtrl', ['$scope', 'Groups', 'LoggedInUser', function($scope, Groups, LoggedInUser) {

  $scope.setPrivacy = [
    { code: "Public", privacy: "Public" },
    { code: "Private", privacy: "Private" }
  ];

  $scope.newGroup = function(info) {

    info.created = Math.floor(Date.now() / 1000);
    info.owner = LoggedInUser.getUID();
    Groups.addGroup(info, info.owner);



    // var usergrpRef = firebase.database.ref('users/' + info.owner + '/groups');
    //
    // usergrpRef.push(grpKey);
  }


}])

angular.module('lmsApp')
.controller('take_quizCtrl', ['$scope', 'Questions', function ($scope, Questions) {

}])
