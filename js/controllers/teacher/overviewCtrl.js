angular.module('lmsApp')
.controller( 'overviewCtrl', ['$scope', 'Todo', 'Events', 'currentUser', function($scope, Todo, Events, currentUser) {

  Todo.setUID(firebase.auth().currentUser.uid);
  $scope.theEvents = Events.getEvents();

  $scope.theTodos = Todo.getTodos(firebase.auth().currentUser.uid);
  // $scope.task = {desc: "add task"};
  $scope.addTodos = function(task) {
    Todo.addTodo(task);

  };


}]);
