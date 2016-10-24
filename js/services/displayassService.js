angular.module('lmsApp')

.factory('DisplayAss',['$firebaseArray', "$firebaseObject", function($firebaseArray, $firebaseObject){


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

  function delAss(index) {

    var teacher1 = firebase.auth().currentUser.uid;
    var query1 = ref.orderByChild("teacher").startAt(teacher1).endAt(teacher1);
    var list = $firebaseArray(query1);
    list.$loaded().then(function(result) {
      list.$remove(result[index]);
    });

  }

  return{
    delAss: delAss,
    displayAss: displayAss,
    getDspAss: getDspAss
  };

}]);
