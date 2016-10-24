angular.module('lmsApp')
.controller('addCommentCtrl', ['$scope', 'Comment', '$routeParams', '$firebaseObject', '$firebaseArray',function($scope, Comment, $routeParams, $firebaseObject, $firebaseArray) {

  var id = $routeParams.id;
  var user = firebase.auth().currentUser.uid;
  $scope.forum = {};

  var ref = firebase.database().ref('forum').child(id);
  $firebaseObject(ref).$loaded().then(function(result) {
    $scope.forum = result;
  });



  $scope.addComment = function(comment) {
    comment.postedBy = firebase.auth().currentUser.displayName;
    comment.postedById = user;

    var newref =  firebase.database().ref('forum/' + id + '/comment');
    var commentList = $firebaseArray(newref);
    commentList.$add(comment);
    $scope.comment= {};
  }

}])
