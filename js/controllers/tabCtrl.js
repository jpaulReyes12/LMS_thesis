angular.module('lmsApp')
.controller('TabsDemoCtrl', ['$scope', 'Questions', 'Events', '$firebaseArray', '$firebaseObject','$routeParams',function ($scope, Questions, Events, $firebaseArray, $firebaseObject, $routeParams) {
  $scope.model = {
    name: 'Tabs'
  };

 //  $scope.classID = $routeParams.id;
 //
 //  $scope.uploads = getResources();
 //  function getResources(){
 //  // var currentStudent = firebase.auth().currentStudent.uid;
 //  var ref = firebase.database().ref('schedule/');
 //
 //  $firebaseArray(ref).$loaded()
 //  .then(function(result) {
 //    $scope.files = result;
 //  });
 // }


  var subject_list = [];
  var currentStudent =  firebase.auth().currentUser.uid;
  var ref = firebase.database().ref('users').child(currentStudent).child('classes');
  $firebaseArray(ref).$loaded().then(function(result) {
    for (var i = 0; i < result.length; i++) {
      subject_list.push(result[i].subject);
    };

    getSubjectInfo(subject_list);

  });

  var class_list = [];
  function getSubjectInfo(list) {
    for (var i = 0; i < list.length; i++) {
      var schedRef = firebase.database().ref('schedule').child(list[i]);
      $firebaseObject(schedRef).$loaded().then(function(schedResult) {
        class_list.push(schedResult)
      })
    }

    $scope.theSchedule = class_list;
  }

  $scope.theEvents = Events.getEvents();
  $scope.theQizzes = Questions.getQuizzes();
  // $scope.theResoures = Files.getFiles(sched.resources);
  // $scope.fies = Files.getFile();

  // $scope.theFiles = Files.displayFiles();





}]);
