
  angular.module('lmsApp')

    .controller('adminScheduleCtrl', ['$scope', 'Schedule', 'Users' , 'uibButtonConfig', function($scope, Schedule, Users, uibButtonConfig){

      $scope.theSchedule = Schedule.getSched();
      $scope.theTeachers = Users.getUsers();
      $scope.toggleAdd = true;
      uibButtonConfig.activeClass = 'btn-primary';

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


      $scope.Days ={
        mon: false,
        tue: true,
        wed: false,
        thu: false,
        fri: false
      }
      $scope.sched = {
        Section: null
      };
      $scope.insertSched = function(data) {
        var yearNow = new Date().getFullYear();
        var yearNext = yearNow + 1;
        //set times to millisecond format
        data.timeStart = data.timeStart.getTime();
        data.timeEnd = data.timeEnd.getTime();
        data.isActive = true;
        data.SY = String(yearNow) + " - " + String(yearNext) ;

        console.log(data.SY);


        Schedule.addSched(data);
      }





    }]);
