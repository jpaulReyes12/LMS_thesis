
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
