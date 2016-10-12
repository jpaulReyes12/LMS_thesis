angular.module('lmsApp')

.factory('Announcement',['$firebaseArray', "$firebaseObject", function($firebaseArray){

  var ref = firebase.database().ref('/announcement');
  var ancmntList = $firebaseArray(ref);

  function addAncmnt(cont){
    ancmntList.$add(cont);
  }

  function getAncmnt()
  {
    return ancmntList;
  }

  return{
    addAncmnt: addAncmnt,
    getAncmnt: getAncmnt
  }
}])
