
angular.module('lmsApp')

.factory('Users', [ '$firebaseArray', function ($firebaseArray) {


  var ref = firebase.database().ref('/users');
  var userList = $firebaseArray(ref);

  function getUsers() {
    return userList;
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
    getUsers: getUsers,
    deactivate: deactivate,
    activate: activate
  }
}]);
