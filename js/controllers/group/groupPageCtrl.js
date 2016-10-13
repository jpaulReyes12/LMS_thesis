angular.module('lmsApp')

.controller('groupPageCtrl', ['$scope', 'Groups', '$routeParams', function($scope, Groups, $routeParams) {

  $scope.grpInfo = Groups.getOneGroup($routeParams.id);

  $scope.addGrpPost = function functionName(post) {
    post.ownerID = firebase.auth().currentUser.displayName;
    post.time = Math.floor(Date.now()/1000);
    Groups.addGroupPost($routeParams.id, post);



  };

  $scope.posts = Groups.getPosts($routeParams.id);



}])
