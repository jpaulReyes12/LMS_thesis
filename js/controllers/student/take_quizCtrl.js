angular.module('lmsApp')
.controller('take_quizCtrl', ['$scope', 'Questions', 'Answers','$routeParams', function ($scope, Questions, Answers, $routeParams) {

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

  
    answerList.subject = questions.q_subjectID;
    answerList.quiz = questions.$id;
    Answers.addDone(answerList);

    var counter = 0;
    for (var i = 0; i < answerList.length; i++) {


      if (answerList[i].correct === true) {
        counter++
      }
    }

    var answers = {
      "student": firebase.auth().currentUser.uid,
      "score": counter
    };
    Questions.addAnswered(answers,questions.$id);


  }


}])
