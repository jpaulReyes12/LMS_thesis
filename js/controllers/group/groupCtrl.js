angular.module('lmsApp')

.controller('groupCtrl', ['$scope', 'Groups', 'LoggedInUser', function($scope, Groups, LoggedInUser) {

  $scope.setPrivacy = [
    { code: "Public", privacy: "Public" },
    { code: "Private", privacy: "Private" }
  ];

  $scope.newGroup = function(info) {

    info.created = Math.floor(Date.now() / 1000);
    info.owner = LoggedInUser.getUID();
    Groups.addGroup(info, info.owner);
    info = {};
  }

  $scope.theUsersGroups = Groups.getOwnGroups(LoggedInUser.getUID());


}])
