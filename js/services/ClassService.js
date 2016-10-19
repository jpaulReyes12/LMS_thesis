angular.module('lmsApp')

.factory('Class',['$firebaseArray', 'LoggedInUser', '$routeParams', '$firebaseObject',function($firebaseArray, LoggedInUser, $routeParams, $firebaseObject){

  var ref = firebase.database().ref('/schedule');
  var scheduleList = $firebaseArray(ref);


  function displayClass(sched){
    scheduleList.$add(sched);
  }

  function addStudent(id, data) {
    var schedID = scheduleList[id].$id;
    var newref = ref.child(schedID).child('students');
    var student = $firebaseArray(newref);

    student.$add(data);
  }

  function removeStudent(stud_id, sched_num) {

    scheduleList.$loaded(function(x) {
      var schedid = x[sched_num].$id;
      var studlist = $firebaseObject(ref.child(schedid).child('students').orderByChild("s_id").equalTo(stud_id));
      studlist.$remove().then(function() {
        var usersRef = firebase.database().ref('/users').child(stud_id).child('classes');
        var classesList = $firebaseObject(usersRef.orderByChild("subject").equalTo(schedid));

        classesList.$remove();

      });




    })

  }

  function getAllStudents() {
    var newref= ref.child('students');
    var student = $firebaseArray(newref);
    return student;
  }

  function getClass()
  {
    return scheduleList;
  }

  return{
    displayClass: displayClass,
    getClass: getClass,
    addStudent: addStudent,
    getAllStudents: getAllStudents,
    removeStudent: removeStudent
    }
}])
