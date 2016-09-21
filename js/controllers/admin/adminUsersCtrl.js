
  angular.module('lmsApp')

    .controller('adminUsersCtrl', ['$scope', 'Users' , function($scope, Users){

      $scope.theUsers = Users.getUsers();

      //sort and filters
      $scope.searchUsers = '';
      $scope.sortType = 'Email';
      $scope.sortReverse = 'false';

      //checkbox function
      $scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
      angular.forEach($scope.theUsers, function (user) {
          user.Selected = $scope.selectedAll;
      });

    };

    }]);
