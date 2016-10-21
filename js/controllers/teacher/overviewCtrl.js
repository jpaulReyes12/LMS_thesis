angular.module('lmsApp')
.controller( 'overviewCtrl', ['$scope', 'Todo', 'Events', '$firebaseArray',function($scope, Todo, Events, $firebaseArray) {

  Todo.setUID(firebase.auth().currentUser.uid);
  $scope.theEvents = Events.getEvents();

  $scope.theTodos = Todo.getTodos(firebase.auth().currentUser.uid);

  $scope.getAnnouncement=function(ann) {
    $scope.selectedPost = ann;
  };

  $scope.addTodos = function(task) {
    Todo.addTodo(task);
    $scope.task = {desc: null};
  };

  $scope.deleteTodo = function(id) {
    Todo.removeTodo(id);
  }



  function display_ann(){
    var currentTeacher = firebase.auth().currentUser.uid;
    var ref = firebase.database().ref('schedule');
    var query = ref.orderByChild("Teacher").startAt(currentTeacher).endAt(currentTeacher);

    return $firebaseArray(query);
  }

  $scope.theAnnouncements = display_ann();


}]);
