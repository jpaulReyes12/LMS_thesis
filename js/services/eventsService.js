
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
