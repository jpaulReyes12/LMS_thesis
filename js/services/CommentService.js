angular.module('lmsApp')
.factory('Comment', ['$firebaseArray', function($firebaseArray){

  var ref =  firebase.database().ref('/comment');
  var commentList = $firebaseArray(ref);

  function addComment(newcomment) {
    commentList.$add(newcomment);

  }

  var addComment = function(newcomment) {
    commentList.$add(newcomment);

  }

  function getComment() {
    return commentList;
  }

  return {
    addComment: addComment,
    getComment: getComment
  }
}])
