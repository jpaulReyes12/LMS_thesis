angular.module('lmsApp')
.controller('take_quizCtrl', ['$scope', 'Questions', '$routeParams', function ($scope, Questions, $routeParams) {

  $scope.questions = Questions.getQuestions($routeParams.id);

  console.log(Questions.getQuestions($routeParams.id));
}])
