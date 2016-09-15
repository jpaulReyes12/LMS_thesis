angular.module('lmsApp')
  .controller('createQuizCtrl', ['$scope', function($scope){

    var ref = firebase.database().ref("/quiz");
    console.log(ref);
    $scope.setQuiz = function(settings) {


      ref.push({
        q_num: settings.qnum,
        q_title: settings.qtitle,
        q_type: settings.qtype
      });

      console.log("pushing");

    }

    // $scope.QuestionData = [];

    // $scope.addQuestion = function(){
    //   // $scope.QuestionData.push({
    //   //   q_question: q.quest,
    //   //   q_answer: q.answer,
    //   //   q_dummy1: q.dummy1,
    //   //   q_dummy2: q.dummy2,
    //   //   q_dummy3: q.dummy3
    //   // });
    //   console.log('q');
    // }


    //
    // $scope.submitQuest = function(){
    //   // Questions.addQuiz($scope.QuestionData);
    //   console.log('submitQuest');
    // }

    $scope.saveQuiz = function() {

      console.log("save");

    }






  }]);
