angular.module('lmsApp')
.factory('Comment', ['$firebaseArray', function($firebaseArray){

  var id;
  var ref =  firebase.database().ref('forum/' +id+ '/comment');
  var commentList = $firebaseArray(ref);

  function addComment(newcomment) {
    commentList.$add(newcomment);

  }

  function setId(forum_id) {
    id = forum_id;
  }


  function getComment() {
    return commentList;
  }

  return {
    setId: setId,
    addComment: addComment,
    getComment: getComment
  }
}])
