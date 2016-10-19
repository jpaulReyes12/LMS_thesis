
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
    // $scope.checkAll = function () {
    //   if ($scope.selectedAll) {
    //       $scope.selectedAll = true;
    //   } else {
    //       $scope.selectedAll = false;
    //   }
    //   angular.forEach($scope.theSubjects, function (event) {
    //       event.Selected = $scope.selectedAll;
    //   });
    //
    // };
    var defaultForm = {
      name: '',
      levels: '',
      description: ''
    };

    $scope.insertSubject = function(data) {
      data.isActive = true;
      Subjects.addSubject(data);

      $scope.toggleAdd = !$scope.toggleAdd;
      $scope.sub = angular.copy(defaultForm);
      $scope.subjectForm.$setPristine();
      $scope.subjectForm.$setUntouched();
    }


    $scope.deactivate = function(id) {
      Subjects.deactivate(id);
    }

    $scope.activate = function(id) {
      Subjects.activate(id);
    }



}]);
