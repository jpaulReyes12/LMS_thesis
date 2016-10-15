angular.module('lmsApp')

.factory('Class',['$firebaseArray', "$firebaseObject", function($firebaseArray){

  var ref = firebase.database().ref('/schedule');
  var scheduleList = $firebaseArray(ref);

  function displayClass(sched){
    assList.$add(sched);
  }

  function getClass()
  {
    return scheduleList;
  }

  return{
  displayClass: displayClass,
  getClass: getClass
  }
}])
