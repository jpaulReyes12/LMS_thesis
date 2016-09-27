
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

  return {
    getSubjects: getSubjects,
    addSubject: addSubject
  }
}]);
