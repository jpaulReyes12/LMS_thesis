
angular.module('lmsApp')

.factory('Groups', [ '$firebaseArray', function ($firebaseArray) {


  var ref = firebase.database().ref('/groups');
  var groupList = $firebaseArray(ref);


  function addGroup(data, uid) {
    groupList.$add(data).then(function(result) {
      var id = result.key;
      console.log(result);
      firebase.database().ref('users/' + uid + '/groups').push(id);

    });
  }

  function getGrpID() {
    return grpID
  }

  function addMember() {

  }

  return{
    addGroup: addGroup,
    getGrpID: getGrpID
  }

}]);
