
angular.module('lmsApp')

.factory('Schedule', [ '$firebaseArray', function ($firebaseArray) {


  var ref = firebase.database().ref('/schedule');
  var scheduleList = $firebaseArray(ref);

  function getSched() {
    return scheduleList;
  }

  function addTeacherSched(id, data) {
    var ref = firebase.database().ref("users/" + id + '/schedule');
    var tSchedList = $firebaseArray(ref);
    data.Teacher = null;
    tSchedList.$add(data);
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
    addTeacherSched: addTeacherSched,
    deactivate: deactivate,
    activate: activate
  }
}]);
