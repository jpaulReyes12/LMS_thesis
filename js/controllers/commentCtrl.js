angular.module('lmsApp')
.controller('addCommentCtrl', ['$scope', 'Comment', '$routeParams', function($scope, Comment, $routeParams) {

  $scope.theComment = Comment.getComment();

  


  $scope.addComment = function(comment) {
    Comment.addComment(comment);
  }

}])
