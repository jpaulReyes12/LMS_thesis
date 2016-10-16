angular.module('lmsApp')

.factory('Answers',['$firebaseArray', 'LoggedInUser', function($firebaseArray, LoggedInUser){

  var user = firebase.auth();
  // var ref = firebase.database().ref("/answers");
  // var answerList = $firebaseArray(ref);

  function addDone(data) {

    var ref = firebase.database().ref('users/'+ user.currentUser.uid + "/answers");
    var answerList = $firebaseArray(ref);
    answerList.$add(data);
  }

  function getAnswers() {
    var ref = firebase.database().ref('users/'+ user.currentUser.uid + "/answers");
    var answerList = $firebaseArray(ref);
    return answerList;
  }


  return{
    addDone: addDone,
    getAnswers: getAnswers
  }
}])
