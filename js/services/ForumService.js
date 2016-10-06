angular.module('lmsApp')
.factory('Forum', ['$firebaseArray', function($firebaseArray){

  var ref = firebase.database().ref('forum/');
  var details = $firebaseArray(ref);
  var toPost = [];

  function addForum(forum){
    details.$add(forum)
  }


  function getForum() {
    return details;
  }

  return{
    addForum: addForum,
    getForum: getForum
  }


}])
