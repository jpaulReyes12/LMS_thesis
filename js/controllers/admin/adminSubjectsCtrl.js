
angular.module('lmsApp')

  .controller('aSubjectsCtrl', ['$scope', 'Subjects', function($scope, Subjects){

    $scope.toggleAdd = true;
    $scope.theSubjects = Subjects.getSubjects();
    $scope.load = false;


    //sort and filters
    $scope.searchSubject = '';
    $scope.sortType = 'name';
    $scope.sortReverse = true;

    //checkbox function
    $scope.checkAll = function () {
      if ($scope.selectedAll) {
          $scope.selectedAll = true;
      } else {
          $scope.selectedAll = false;
      }
      angular.forEach($scope.theSubjects, function (event) {
          event.Selected = $scope.selectedAll;
      });

    };

    $scope.insertSubject = function(data) {
      data.isActive = true;
      Subjects.addSubject(data);
      $scope.toggleAdd = !toggleAdd;
    }



}]);
