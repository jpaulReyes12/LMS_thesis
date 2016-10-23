angular.module('lmsApp')
.controller('addCommentCtrl', ['$scope', 'Comment', '$routeParams', '$firebaseObject', function($scope, Comment, $routeParams, $firebaseObject) {

  var id = $routeParams.id;
  $scope.forum = {};

  var ref = firebase.database().ref('forum').child(id);
  $firebaseObject(ref).$loaded().then(function(result) {
    $scope.forum = result;
  });

  $scope.theComment = Comment.getComment();

  $scope.addComment = function(comment) {
    Comment.addComment(comment);
  }

}])
