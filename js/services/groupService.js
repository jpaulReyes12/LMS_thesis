
angular.module('lmsApp')

.factory('Groups', [ '$firebaseArray', '$firebaseObject', function ($firebaseArray, $firebaseObject) {


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


  function addGroupPost(id, post) {
    var group = ref.child(id + "/posts/");
    var groupContents = $firebaseArray(group);

    groupContents.$add(post);
  }

  function getPosts(id) {
    var group = ref.child(id + "/posts/");
    var groupContents = $firebaseArray(group);

    return groupContents;
  }

  function getOwnGroups(id) {
    this.ref = $firebaseArray(firebase.database().ref('users/'+ id + '/groups'));
    return this.ref;
  }

  function getOneGroup(id) {
    var ref = firebase.database().ref('/groups/' + id);
    var groupList = $firebaseObject(ref);

    return groupList;

  }

  return{
    addGroup: addGroup,
    getOwnGroups: getOwnGroups,
    getOneGroup: getOneGroup,
    addGroupPost: addGroupPost,
    getPosts: getPosts
  }

}]);
