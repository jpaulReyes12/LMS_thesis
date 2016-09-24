
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
