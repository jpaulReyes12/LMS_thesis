
angular.module('lmsApp')

.factory('Users', [ '$firebaseArray', function ($firebaseArray) {


  var ref = firebase.database().ref('/users');
  var userList = $firebaseArray(ref);

  function getUsers() {
    return userList;
  }

  return {
    getUsers: getUsers
  }
}]);
