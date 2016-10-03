
angular.module('lmsApp')
  .controller('createQuizCtrl', ['$scope', 'Questions', function($scope, Questions){

    var ref = firebase.database().ref("/quiz");
    $scope.getNumber = function() {
      return new Array(quizItemsSet);
    }

    $scope.openSettings = true;
    $scope.openAccordsTOF = false;
    $scope.openAccordsMC = false;

    var quizItemsSet;
    $scope.setQuiz = function(settings) {

      quizItemsSet = settings.qitem;
      if (settings.qtype === 'Multiple Choice') {
        $scope.openAccordsMC = true;
        $scope.openSettings = false;
      } else if (settings.qtype === 'True or False') {
        $scope.openAccordsTOF = true;
        $scope.openSettings = false;
      }
      var quizKey = ref.push({
        q_num: settings.qnum,
        q_title: settings.qtitle,
        q_desc: settings.qdesc,
        q_dura: settings.qduration,
        q_item: settings.qitem,
        q_type: settings.qtype
      }).key;

      Questions.setKey(quizKey);

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

    $scope.mc={};

    $scope.saveQuizMC = function() {
      console.log($scope.mc);
      Questions.addQuiz($scope.mc, Questions.getKey())
    }

    $scope.saveQuizTOF = function() {

    }


    //
    // $scope.saveQuiz = function() {
    //     console.log(Questions.getKey());
    //   Questions.addQuiz($scope.QuestionData, Questions.getKey());
    //   console.log("save");
    //
    // }






  }]);
