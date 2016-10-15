angular.module('lmsApp')

.factory('DisplayAss',['$firebaseArray', "$firebaseObject", function($firebaseArray){

  var ref = firebase.database().ref('/assignment');
  var assList = $firebaseArray(ref);

  function displayAss(ass){
    assList.$add(ass);
  }

  function getDspAss()
  {
    return assList;
  }

  return{
  displayAss: displayAss,
  getDspAss: getDspAss
  }
}])
