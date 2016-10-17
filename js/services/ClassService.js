angular.module('lmsApp')

.factory('Class',['$firebaseArray', 'LoggedInUser', function($firebaseArray, LoggedInUser){

  var ref = firebase.database().ref('/schedule');
  var scheduleList = $firebaseArray(ref);


  function displayClass(sched){
    scheduleList.$add(sched);
  }

  function addStudent(student, data) {
    var newref= ref.child('students');
    var student = $firebaseArray(newref);

    student.$add(data);
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
    getAllStudents: getAllStudents
    }
}])
