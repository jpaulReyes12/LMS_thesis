
angular.module('lmsApp')

.factory('Groups', [ '$firebaseArray', function ($firebaseArray) {


  var ref = firebase.database().ref('/groups');
  var groupList = $firebaseArray(ref);


  function addGroup(data, uid) {
    groupList.$add(data).then(function(result) {
      data.id = result.key;
      firebase.database().ref('users/' + uid + '/groups').push(data);

    });
  }

  function getGrpID() {
    return grpID
  }

  function addMember() {

  }

  function getOwnGroups(id) {
    this.ref = $firebaseArray(firebase.database().ref('users/'+ id + '/groups'));
    return this.ref;
  }

  return{
    addGroup: addGroup,
    getGrpID: getGrpID,
    getOwnGroups: getOwnGroups
  }

}]);
