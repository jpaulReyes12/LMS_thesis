
  angular.module('lmsApp')

    .controller('adminScheduleCtrl', ['$scope', 'Schedule' , function($scope, Schedule){

      $scope.theSchedule = Schedule.getSched();
      $scope.toggleAdd = true;

      //sort and filters
      $scope.searchSchedule = '';
      $scope.sortType = 'section';
      $scope.sortReverse = 'false';

        //checkbox function
        $scope.checkAll = function () {
          if ($scope.selectedAll) {
              $scope.selectedAll = true;
          } else {
              $scope.selectedAll = false;
          }
          angular.forEach($scope.theSchedule, function (sched) {
              sched.Selected = $scope.selectedAll;
          });

      };

      // TODO: dynamic teacher dropdown
      $scope.sched = {Section: null};
      $scope.insertSched = function(data) {

        //set times to millisecond format
        data.timeStart = data.timeStart.getTime();
        data.timeEnd = data.timeEnd.getTime();

        Schedule.addSched(data);
      }





    }]);
