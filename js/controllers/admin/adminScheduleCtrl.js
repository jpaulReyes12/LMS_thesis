
  angular.module('lmsApp')

    .controller('adminScheduleCtrl', ['$scope', 'Schedule' , function($scope, Schedule){

      $scope.toggleAdd = true;
      //
      //   //sort and filters
      //   $scope.searchUsers = '';
      //   $scope.sortType = 'Email';
      //   $scope.sortReverse = 'false';
      //
      //   //checkbox function
      //   $scope.checkAll = function () {
      //     if ($scope.selectedAll) {
      //         $scope.selectedAll = true;
      //     } else {
      //         $scope.selectedAll = false;
      //     }
      //     angular.forEach($scope.theUsers, function (user) {
      //         user.Selected = $scope.selectedAll;
      //     });
      //
      // };


      

      $scope.theSchedule = Schedule.getSched();

      $scope.insertSched = function(data) {

        //set times to millisecond format
        data.timeStart = data.timeStart.getTime();
        data.timeEnd = data.timeEnd.getTime();

        Schedule.addSched(data);
      }





    }]);
