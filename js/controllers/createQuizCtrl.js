angular.module('lmsApp')
  .controller('createQuizCtrl', ['$scope', 'Questions', '$routeParams', 'Schedule', function($scope, Questions, $routeParams, Schedule){

    $scope.classID = $routeParams.id;
    var sched = Schedule.getSched();
    $scope.length = sched.length + 1
    var datetime = new Date();
    $scope.dateNow = datetime;


    var ref = firebase.database().ref("/quiz");
    $scope.getNumber = function() {
      return new Array(quizItemsSet);
    }

    $scope.openSettings = true;
    $scope.openAccordsTOF = false;
    $scope.openAccordsMC = false;

    var quizItemsSet;
    $scope.setQuiz = function(settings) {


      var schedID =sched[$routeParams.id].$id;

      quizItemsSet = settings.qitem;
      if (settings.qtype === 'Multiple Choice') {
        $scope.openAccordsMC = true;
        $scope.openSettings = false;
      } else if (settings.qtype === 'True or False') {
        $scope.openAccordsTOF = true;
        $scope.openSettings = false;
      }

      var quizKey = ref.push({
        q_num: length,
        q_title: settings.qtitle,
        q_desc: settings.qdesc,
        q_deadline: Math.floor(Date.now(settings.qDeadline)/1000),
        // q_dura: settings.qduration,
        q_item: settings.qitem,
        q_type: settings.qtype,
        q_subjectID : schedID
      }).key;

      Questions.setKey(quizKey);

    }

    function schedID() {

    }

    $scope.mc={};
    $scope.saveQuizMC = function() {

      Questions.addQuiz($scope.mc, Questions.getKey());
      alert("Successfully Created!");
      location.reload();
    }

    $scope.tof={};
    $scope.saveQuizTOF = function() {
      Questions.addQuiz($scope.tof, Questions.getKey());
      alert("Successfully Created!");
      location.reload();
    }



  }]);
