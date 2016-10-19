
angular.module('lmsApp')

  .controller('adminForumCtrl', ['$scope', 'Forum' , function($scope, Forum){

    $scope.theForums = Forum.getForum();

    //sort and filters
    $scope.searchForums = '';
    $scope.sortType = 'grade';
    $scope.sortReverse = 'true';

    $scope.deactivate = function(id) {
      Groups.deactivate(id);
    };

    $scope.activate = function(id) {
      Groups.activate(id);
    };

  }]);
