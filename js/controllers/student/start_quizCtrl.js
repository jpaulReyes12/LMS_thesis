angular.module('lmsApp')
.controller( 'start_quizCtrl', ['$scope', '$routeParams', 'Questions', function($scope, $routeParams, Questions) {

  var quizId = $routeParams.id;

  $scope.qdetails = Questions.getQuestions(quizId);

}])
