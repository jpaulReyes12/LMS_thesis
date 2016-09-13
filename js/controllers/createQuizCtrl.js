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






  }]);
