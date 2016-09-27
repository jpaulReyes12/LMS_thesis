angular.module('lmsApp')

.factory('Questions',['$firebaseArray', "$firebaseObject", function($firebaseArray){

  var ref = firebase.database().ref('/quiz/');
  var key = "";

  function setKey(q_key) {
    key = q_key;
    console.log(key);
  }

  function getKey() {
    console.log(key);
    return key;
  }

  function addQuiz(q, parentKey){
    var ref = firebase.database().ref('/quiz/' + parentKey + "/questions");
    var questionList = $firebaseArray(ref);
    return questionList.$save(q).key;
  }

  return{
    addQuiz: addQuiz,
    setKey: setKey,
    getKey: getKey
  }

}])
