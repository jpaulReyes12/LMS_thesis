angular.module('lmsApp')
  .controller('createQuizCtrl', ['$scope', 'Questions', function($scope, Questions){

    var ref = firebase.database().ref("/quiz");

    $scope.setQuiz = function(settings) {

      ref.push({
        q_num: settings.qnum,
        q_title: settings.qtitle,
        q_type: settings.qtype
      });
      console.log("pushing");

    }
    
    $scope.QuestionData = [];
    $scope.addQuiz = function(q) {
      $scope.QuestionData.push({
        q_question: q.quest,
        q_answer: q.answer,
        q_dummy1: q.dummy1,
        q_dummy2: q.dummy2,
        q_dummy3: q.dummy3
      });

      console.log("add quiz");
    }



    $scope.saveQuiz = function() {

      Questions.addQuiz($scope.QuestionData);
      console.log("save");

    }






  }]);
