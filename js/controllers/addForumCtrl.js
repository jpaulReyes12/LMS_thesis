angular.module('lmsApp')
.controller( 'addForumCtrl', ['$scope', 'Forum', 'Announcement', 'Events', '$location',
function($scope, Forum, Announcement, Events, $location) { //providers

  $scope.theForum = Forum.getForum();//for retrieving data
  $scope.theEvents = Events.getEvents();
  $scope.toggleAdd = true;

  // $scope.topics = [];


  $scope.addForum = function(forum){

    forum.creator = firebase.auth().currentUser.displayName;//uses .auth to determine current user
    forum.creatorID = firebase.auth().currentUser.uid;

    // forum.topics = $scope.topics;


    forum.timePosted = Math.floor(Date.now() / 1000);//formatting date
    Forum.addForum(forum);


    $scope.forum = {titles:'', contents:''};//refreshing inputs after submitting
    $location.path('/forum_home');//path after refreshing


  }

  // $scope.theAnnounce = Announcement.getAncmnt();





}])
