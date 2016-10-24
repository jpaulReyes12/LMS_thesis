angular.module('lmsApp')
.controller( 'addForumCtrl', ['$scope', 'Forum', 'Announcement', 'Events', '$location',function($scope, Forum, Announcement, Events, $location) {

  $scope.theForum = Forum.getForum();
  $scope.theEvents = Events.getEvents();
  $scope.toggleAdd = true;

  $scope.tags = "";


  $scope.addForum = function(forum){



    forum.creator = firebase.auth().currentUser.displayName;
    forum.creatorID = firebase.auth().currentUser.uid;


    forum.timePosted = Math.floor(Date.now() / 1000);
    Forum.addForum(forum);


    $scope.forum = {titles:'', contents:''};
    $location.path('/forum_home');
    // $scope.form_group.$setPristine;

  }

  // $scope.theAnnounce = Announcement.getAncmnt();





}])
