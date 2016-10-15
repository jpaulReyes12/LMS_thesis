
  angular.module('lmsApp')

    .controller('adminSectionCtrl', ['$scope', 'Section' , function($scope, Section){

      $scope.theSections = Section.getSection();
      $scope.toggleAdd = true;

      //sort and filters
      $scope.searchSection = '';
      $scope.sortType = 'grade';
      $scope.sortReverse = 'false';

      $scope.insertSection = function(data) {
        data.isActive = true;
        Section.addSection(data);
        $scope.toggleAdd = !$scope.toggleAdd;
      }

      $scope.deactvate = function(id) {
        Section.deactivate(id);
      }

      $scope.activate = function(id) {
        Section.activate(id);
      }

    }]);
