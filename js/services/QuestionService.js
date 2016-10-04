angular.module('lmsApp')

.factory('Questions',['$firebaseArray', function($firebaseArray){

  var ref = firebase.database().ref('/quiz/questions');
  var questionList = $firebaseArray(ref);
  var toAnswer = [];

  function getQuestions(id){
    ref.child(id).on('child_added', function(snapshot){
      snapshot.forEach(function(childSnapshot){
        toAnswer.push({
          question:childSnapshot.val().q_question,
          choice1: childSnapshot.val().q_choice1,
          choice2: childSnapshot.val().q_choice2,
          choice3: childSnapshot.val().q_choice3,
          choice4: childSnapshot.val().q_choice4
        })

      })
    })
    return toAnswer;

  }

  function addQuiz(q){
    questionList.$add(q);

  }

  return{
    addQuiz: addQuiz
  }

}])
