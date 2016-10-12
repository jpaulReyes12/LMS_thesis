angular.module('lmsApp')

.controller('groupPageCtrl', ['$scope', 'Groups', 'LoggedInUser', '$routeParams', function($scope, Groups, LoggedInUser, $routeParams) {

  $scope.grpInfo = Groups.getOneGroup($routeParams.id);



}])
