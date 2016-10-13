
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
