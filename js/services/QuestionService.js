angular.module('lmsApp')

.factory('Questions',['$firebaseArray', function($firebaseArray){

  var ref = firebase.database().ref('/quiz/questions');
  var questionList = $firebaseArray(ref);

  function addQuiz(q){
    questionList.$add(q);
  }

  return{
    addQuiz: addQuiz
  }

}])
