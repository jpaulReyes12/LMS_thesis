angular.module('lmsApp')
.factory('Forum', ['$firebaseArray', function($firebaseArray){

  var ref = firebase.database().ref('forum/');
  var details = $firebaseArray(ref);
  var toPost = [];

  function addForum(forum){
    details.$add(forum);
  }

  function getForum() {
    return details;
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

  return{
    addForum: addForum,
    getForum: getForum,
    deactivate: deactivate,
    activate: activate
  };


}]);
