angular.module('lmsApp')
.controller('TabsDemoCtrl', ['$scope', 'Questions', 'Events', function ($scope, Questions, Events) {

  $scope.model = {
    name: 'Tabs'
  };

  $scope.theEvents = Events.getEvents();
  $scope.theQizzes = Questions.getQuizzes();


}]);
