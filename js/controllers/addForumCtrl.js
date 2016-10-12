angular.module('lmsApp')
.controller( 'addForumCtrl', ['$scope', 'Forum', 'Comment', function($scope, Forum) {

  $scope.theForum = Forum.getForum();

  $scope.addForum = function(forum){
    console.log(forum);

    forum.timePosted = Math.floor(Date.now() / 1000)
    Forum.addForum(forum);


    $scope.forum = {titles:'', contents:''};

    // $scope.form_group.$setPristine;

    console.log("added");
  }



}])
