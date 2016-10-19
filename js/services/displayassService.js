angular.module('lmsApp')

.factory('DisplayAss',['$firebaseArray', "$firebaseObject", function($firebaseArray){


  var ref = firebase.database().ref('assignment');
  var assList = $firebaseArray(ref);

  function displayAss(ass){
    assList.$add(ass);
  }

  function getDspAss()
  {
    var teacher = firebase.auth().currentUser.uid;
    var query = ref.orderByChild("teacher").startAt(teacher).endAt(teacher);
    return $firebaseArray(query);
  }

  return{
    displayAss: displayAss,
    getDspAss: getDspAss
  }
}])
