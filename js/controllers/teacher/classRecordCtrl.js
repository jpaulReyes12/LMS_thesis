angular.module('lmsApp')
  .controller('classRecordCtrl', ['$scope', '$location', 'Users', '$firebaseArray', '$routeParams', 'Class',function($scope, $location, Users, $firebaseArray, $routeParams, Class){

    $scope.classID = $routeParams.id;

    $scope.users = Users.getUsers();

    //checkbox
    $scope.selection = [];

    $scope.toggleSelection = function toggleSelection(id) {
      var idx = $scope.selection.indexOf(id);

      // is currently selected
      if (idx > -1) {
        $scope.selection.splice(idx, 1);
      }

      // is newly selected
      else {
        $scope.selection.push(id);
      }
    };

    // $scope.add = function(val) {
    //   ref.on('child_added', function(snap) {
    //       if (snap.val().email === val) {
    //         getid(snap.key, snap.val());
    //
    //       }
    //   });
    //
    //   $scope.selectStudents = "";
    // }
    //
    // function getid(id, info) {
    //
    //   var parent = Class.getClass();
    //   var parent_class = parent[$routeParams.id];
    //   var classList = $firebaseArray(ref.child(id).child('classes'));
    //
    //
    //   classList.$add({
    //     subject: parent_class.$id,
    //     subject_name: parent_class.Subject,
    //   });
    //
    //
    //   Class.addStudent($scope.classID, {
    //     fname: info.firstname,
    //     lname: info.lastname,
    //     email: info .email,
    //     s_id: info.uid
    //   });
    //
    // }
    //
    // $scope.students = function functionName() {
    //   var classes =  Class.getClass();
    //   return classes[$routeParams.id];
    // };
    //
    // $scope.removeStudent = function(id){
    //
    //   Class.removeStudent(id, $routeParams.id);
    // }

}]);
