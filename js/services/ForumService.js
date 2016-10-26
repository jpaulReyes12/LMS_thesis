angular.module('lmsApp')
.factory('Forum', ['$firebaseArray', function($firebaseArray){//accessing arrays

  var ref = firebase.database().ref('forum/');//initialising table to database
  var details = $firebaseArray(ref);//assigning array
  var toPost = [];

  function addForum(forum){//inserting details to the table
    details.$add(forum);
  }

  function getForum() {//for reading data
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
  };//for displaying data


}]);
