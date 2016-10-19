angular.module('lmsApp')
  .controller('teacherUploadsCtrl', ['$scope', '$location', 'File', '$firebaseArray', '$routeParams',function($scope, $location, File, $firebaseArray, $routeParams){

    $scope.classID = $routeParams.id;

    $scope.class = getResources();
    function getResources(){
      var currentTeacher = firebase.auth().currentUser.uid;
      var ref = firebase.database().ref('schedule');
      var query = ref.orderByChild("Teacher").startAt(currentTeacher).endAt(currentTeacher);

      return $firebaseArray(query);
    }


}])
