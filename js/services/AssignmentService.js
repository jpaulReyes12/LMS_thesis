angular.module('lmsApp')

.factory('Assignment',['$firebaseArray', "$firebaseObject", function($firebaseArray){

  var ref = firebase.database().ref('/assignment');
  var assignmentList = $firebaseArray(ref);

  var refSched = firebase.database().ref('/schedule/');
  var schedList = $firebaseArray(refSched);

  function addAss(cont, index){
    var schedID = schedList[0].$id;
    var newRef = refSched.child(schedID + '/Assignment');
    var assList = $firebaseArray(newRef);

    assList.$add(cont).then(function(refChild) {
      cont.linkToSched = schedID;
      cont.teacher = firebase.auth().currentUser.uid;
      assignmentList.$add(cont);
    });

  }

  return{
    addAss: addAss
  }
}])
