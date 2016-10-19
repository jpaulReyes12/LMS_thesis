
angular.module('lmsApp')

.factory('Section', [ '$firebaseArray', function ($firebaseArray) {


  var ref = firebase.database().ref('/sections');
  var sectionList = $firebaseArray(ref);

  function getSection() {
    return sectionList;
  }

  function addSection(data) {
    sectionList.$add(data);
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
    getSection: getSection,
    addSection: addSection,
    deactivate: deactivate,
    activate: activate
  }
}]);
