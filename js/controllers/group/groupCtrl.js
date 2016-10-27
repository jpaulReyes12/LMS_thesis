angular.module('lmsApp')

.controller('groupCtrl', ['$scope', 'Groups', 'LoggedInUser', function($scope, Groups, LoggedInUser) {

  $scope.setPrivacy = [
    { code: "Public", privacy: "Public" },
    { code: "Private", privacy: "Private" }
  ];

  $scope.newGroup = function(info) {

    info.created = Math.floor(Date.now() / 1000);
    info.owner = LoggedInUser.getUID();
    info.isActive = true;
    Groups.addGroup(info, info.owner);
    info = {};
  }
  $scope.user = firebase.auth().currentUser.uid;
  $scope.theUsersGroups = Groups.getOwnGroups(LoggedInUser.getUID());


}])
