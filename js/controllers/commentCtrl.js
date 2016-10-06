angular.module('lmsApp')
.controller('addCommentCtrl', ['$scope', 'Comment', function($scope, Comment) {

  $scope.theComment = Comment.getComment();

  $scope.addComment = function(comment) {
    Comment.addComment(comment);
  }

}])
