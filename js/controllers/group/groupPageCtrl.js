angular.module('lmsApp')
.controller('groupPageCtrl', ['$scope', 'Users','Groups', '$routeParams', function($scope, Users, Groups, $routeParams, Class) {

  $scope.grpInfo = Groups.getOneGroup($routeParams.id);

  $scope.addGrpPost = function functionName(post) {
    post.ownerID = firebase.auth().currentUser.displayName;
    post.time = Math.floor(Date.now()/1000);
    Groups.addGroupPost($routeParams.id, post);
  };

  $scope.posts = Groups.getPosts($routeParams.id);

  $scope.classID = $routeParams.id;

  $scope.users = Users.getUsers();

  //checkbox
  $scope.selection = [];

  $scope.toggleSelection = function toggleSelection(id) {
    var idx = $scope.selection.indexOf(id);
    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }
    else {
      $scope.selection.push(id);
    }
  };

  $scope.addStudents = function() {

    for (var i = 0; i < $scope.selection.length; i++) {

      currentStudent = $scope.selection[i];

      //get student info
      ref = firebase.database().ref('users').child(currentStudent);
      studInfo = $firebaseObject(ref);
      studInfo.$loaded().then(function(result) {
        insertData = {
          fname: result.firstname,
          lname: result.lastname,
          uid: result.uid,
          email: result.email
        }

        getid(currentStudent, insertData);
      })

    }

  }

  function getid(id, info) {

    var parent = Class.getClass();
    var parent_class = parent[$routeParams.id];
    var classList = $firebaseArray(firebase.database().ref('users').child(id).child('classes'));


    classList.$add({
      subject: parent_class.$id,
      subject_name: parent_class.Subject,
    });


    Class.addStudent($scope.classID, {
      fname: info.fname,
      lname: info.lname,
      email: info .email,
      s_id: info.uid
    });

  }

  $scope.students = function functionName() {
    var classes =  Class.getClass();
    return classes[$routeParams.id];
  };

  $scope.removeStudent = function(id){

    Class.removeStudent(id, $routeParams.id);
  }




}])
