angular.module('lmsApp')

.factory('Assignment',['$firebaseArray', "$firebaseObject", function($firebaseArray){

  var ref = firebase.database().ref('/assignment');
  var assList = $firebaseArray(ref);

  function addAss(cont){
    assList.$add(cont);
  }
  return{
    addAss: addAss
  }
}])
