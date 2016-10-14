angular.module('lmsApp')
.controller('take_quizCtrl', ['$scope', 'Questions', '$routeParams', function ($scope, Questions, $routeParams) {

  $scope.questions = Questions.getQuestions($routeParams.id);
  var questions = $scope.questions;

  $scope.answer = [];

  $scope.check = function() {

    var answerList = [];
    for (var i = 0; i < questions.q.length; i++) {

      var correct;
      if (questions.q[i].choice[0] === $scope.answer[i]) {
        correct = true;
      }
      else {
        correct = false;
      }


      answerList.push({
        "question": questions.q[i].quest,
        "answered": $scope.answer[i],
        "correct": correct
      });
    }

    console.log(answerList);


  }


}])
