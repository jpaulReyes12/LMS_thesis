angular.module('lmsApp')

.factory('Questions',['$firebaseArray', "$firebaseObject", function($firebaseArray, $firebaseObject){

  var ref = firebase.database().ref('/quiz/');
  var key = "";

  function getQuiz()
  {
      return $firebaseArray(ref);
  }

  function setKey(q_key) {
    key = q_key;
    console.log(key);
  }

  function getKey() {
    console.log(key);
    return key;
  }

  function addQuiz(q, parentKey){
    var ref = firebase.database().ref('/quiz/' + parentKey);
    ref.update(q);

  }

  function getQuestions(id) {

    var questions = ref.child(id);
    return $firebaseObject(questions);
  }

  function getQuizzes() {
    return $firebaseArray(ref);
  }


  return{
    addQuiz: addQuiz,
    getQuizzes: getQuizzes,
    getQuestions: getQuestions,
    setKey: setKey,
    getKey: getKey,
    getQuiz: getQuiz
  }

}])
