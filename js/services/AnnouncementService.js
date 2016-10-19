angular.module('lmsApp')

.factory('Announcement',['$firebaseArray', "$firebaseObject", function($firebaseArray){

  var ref = firebase.database().ref('/schedule/');
  var schedList = $firebaseArray(ref);

  function addAncmnt(cont, index){
    var schedID = schedList[index].$id;
    var newRef = ref.child(schedID + '/Announcement');
    var anncmentList = $firebaseArray(newRef);

    anncmentList.$add(cont);

  }

  function getAncmnt(index)
  {
    var schedID;
    var list;
    return schedList.$loaded().then(function(result) {
      schedID = result[index].$id;
      var newRef = ref.child(schedID + '/Announcement');
      var anncmentList = $firebaseArray(newRef);
      return anncmentList;
    });

  }

  return{
    addAncmnt: addAncmnt,
    getAncmnt: getAncmnt
  }
}])
