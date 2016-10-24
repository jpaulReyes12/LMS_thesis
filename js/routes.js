
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
          data: {requireAuth: ['teacher', 'student', 'admin']},
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }],
            "currentUser": [function() {
              return firebase.auth().currentUser;

            }]
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

        .when('/profile/:id', {
          title: 'Profile',
          templateUrl: 'view/studentProfile.html',
          css: 'style/profile.css',
          controller: 'studentProfile',
          data: {
            requireAuth: ['admin', 'teacher', 'student']
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

        .when('/class_dashboard/:id/class_recordList', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/classRecord.html',
          controller : "classRecordCtrl",
          css: [ 'style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/classdash.css'],
          data: {
            requireAuth: ['teacher', 'student']
          },
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/classie.js', 'lib/modernizr.custom.js' ]});
                 }],
                 "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
                   return $firebaseAuth().$requireSignIn();
                 }],
                 "currentUser": [function() {
                   return firebase.auth().currentUser;

                 }]
              }
        })
        //
        // .when('/class_dashboard/:id/class_recordThumb', {
        //   title: 'Manage your class',
        //   templateUrl: 'view/classDash/classRecord2.html',
        //   css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/classdash.css'],
        //   data : {
        //     requireAuth: ['teacher', 'student']
        //   },
        //   resolve: {
        //          lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
        //             return $ocLazyLoad.load({files: ['lib/classie.js', 'lib/modernizr.custom.js' ]});
        //
        //          }]
        //       }
        // })

        .when('/class_dashboard/:id/resources', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/classResources.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/classdash.css'],
          controller: 'ResourceCtrl',
          data:{
            requireAuth: ['teacher', 'student']
          },
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/modernizr.custom.js', 'lib/classie.js']});
                 }],
                 "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
                   return $firebaseAuth().$requireSignIn();
                 }],
                 "currentUser": [function() {
                   return firebase.auth().currentUser;
                  }]
          }
        })

        .when('/class_dashboard/:id/post', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/postTab.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/classdash.css'],
          controller: 'AnnouncementCtrl',
          data: {
            requireAuth: ['teacher', 'student']
          },
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/modernizr.custom.js', 'lib/classie.js']});
                 }],
                 "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
                   return $firebaseAuth().$requireSignIn();
                 }],
                 "currentUser": [function() {
                   return firebase.auth().currentUser;
                  }]
          }
        })

        .when('/class_dashboard/:id/createannouncement', {
          title: 'Manage your class',
          templateUrl: 'view/classDash/announcementtab.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/classdash.css'],
          data: {
            requireAuth: ['teacher', 'student']
          },
          controller: 'AnnouncementCtrl',
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/modernizr.custom.js', 'lib/classie.js']});
                 }],
                 "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
                   return $firebaseAuth().$requireSignIn();
                 }],
                 "currentUser": [function() {
                   return firebase.auth().currentUser;

                 }]
              }
        })

        .when('/class_dashboard/:id/createassignment', {
          title: 'Create assignment',
          templateUrl: 'view/classDash/assignmenttab.html',
          css: ['style/classDash/component.css', 'style/classDash/default.css', 'style/classDash/classdash.css'],
          data:{
            requireAuth: 'teacher'
          },
          controller: 'AssignmentCtrl',
          resolve: {
                 lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['lib/modernizr.custom.js', 'lib/classie.js']});
                 }],
                 "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
                   return $firebaseAuth().$requireSignIn();
                 }],
                 "currentUser": [function() {
                   return firebase.auth().currentUser;

                 }]
              }
        })

        .when('/class_dashboard/:id/createquiz', {
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
                 }],
                 "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
                   return $firebaseAuth().$requireSignIn();
                 }],
                 "currentUser": [function() {
                   return firebase.auth().currentUser;

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
            }],
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }],
            "currentUser": [function() {
              return firebase.auth().currentUser;

            }]
          }
        })

        .when('/group/page/:id', {
          title: 'Your Groups',
          templateUrl: 'view/group/group_page.html',
          controller: 'groupPageCtrl',
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
            }],
            "currentUser": [function() {
              return firebase.auth().currentUser;

            }]
          }
        })


        .when('/forum_home', {
          title: 'Latest Forum Topics',
          templateUrl: 'view/forum_home.html',
          controller: 'addForumCtrl',
          css: [
            {href: 'style/forum/forum_home.css', preload: true},
            {href:'style/profile.css', preload: true}
          ],
          data: {
            requireAuth: ['student', 'teacher', 'admin']
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

        .when('/start_quiz/:id', {
          title: 'start quiz',
          templateUrl: 'view/student/start_quiz.html',
          css: [
            {href: 'style/profile.css', preload: true},
            {href: 'style/student_quiz.css', preload: true}
          ],
          data: {
            requireAuth: ['teacher', 'student']
          },
          controller: 'start_quizCtrl',
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }],
            "currentUser": [function() {
              return firebase.auth().currentUser;
            }]
          }
        })

        .when('/take_quiz/:id', {
          title: 'take quiz',
          templateUrl: 'view/student/student_quiz.html',
          controller: 'take_quizCtrl',
          css: [
            {href: 'style/profile.css', preload: true},
            {href: 'style/student_quiz.css', preload: true}
          ],
          data: {
            requireAuth: ['student']
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

        .when('/forum_post/:id', {
          title: 'Forum',
          templateUrl: 'view/forum_post.html',
          controller: 'addCommentCtrl',
          css: [
            {href: 'style/forum/forum_post.css', preload: true},
            {href:'style/profile.css', preload: true}
          ],
          data: {
            requireAuth: ['student', 'teacher', 'admin']
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

        .when('/admin/class_management', {
          title: 'Admin Page',
          templateUrl: 'view/admin/class_management.html',
          css: 'style/admin.css',
          controller: 'adminScheduleCtrl',
          data: {requireAuth: 'admin'}
          // resolve: {
          //   "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
          //     return $firebaseAuth().$requireSignIn();
          //   }]
          // }
        })

        .when('/admin/groups', {
          title: 'Admin Page',
          templateUrl: 'view/admin/groups.html',
          css: 'style/admin.css',
          controller: 'adminGroupCtrl',
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
          controller: 'adminSectionCtrl',
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
          controller: 'adminForumCtrl',
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
          controller: 'teacherUploadsCtrl',
          css: [{href: 'style/teacher/uploads.css ', preload: true},{href:'style/profile.css', preload: true}],
          data:{requireAuth: 'teacher'},
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }],
            "currentUser": [function() {
              return firebase.auth().currentUser;
            }]
          }
        })

        .when('/teacher/classes', {
          title: 'Classes Page',
          templateUrl: 'view/teacher/classes.html',
          controller: 'ClassCtrl',
          css: [{href: 'style/teacher/classes.css', preload: true}, {href:'style/profile.css', preload: true}],
          data:{requireAuth: 'teacher'},
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }],
            "currentUser": [function() {
              return firebase.auth().currentUser;
            }]
          }
        })

        .when('/teacher/home', {
          title: 'Home Page',
          templateUrl: 'view/teacher/homeMenubars.html',
          controller: 'overviewCtrl',
          css: [
            {href:'style/teacher/home.css', preload: true},
            {href:'style/profile.css', preload:true}
          ],
          data:{requireAuth: 'teacher'},
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }],
            "currentUser": [function() {
              return firebase.auth().currentUser;

            }]
          }
        })


        .when('/teacher/assignment', {
          title: 'Assignment Page',
          templateUrl: 'view/teacher/assignments.html',
          controller: 'DisplayAssCtrl',
           css: [
             {href:'style/teacher/assignments.css', preload: true}, {href:'style/profile.css', preload:true}
           ],
          data:{requireAuth: 'teacher'},
          resolve: {
            "currentAuth": [ '$firebaseAuth', function($firebaseAuth) {
              return $firebaseAuth().$requireSignIn();
            }],
            "currentUser": [function() {
              return firebase.auth().currentUser;
            }]
          }
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
