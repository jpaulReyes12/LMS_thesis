
angular.module('lmsApp')

  .controller('adminGroupCtrl', ['$scope', 'Groups' , function($scope, Groups){

    $scope.theGroups = Groups.getAllGroups();

    //sort and filters
    $scope.searchGroups = '';
    $scope.sortType = 'grade';
    $scope.sortReverse = 'false';

    $scope.deactivate = function(id) {
      Groups.deactivate(id);
    };

    $scope.activate = function(id) {
      Groups.activate(id);
    };

  }]);
