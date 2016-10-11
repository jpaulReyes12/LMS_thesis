angular.module('lmsApp')
.controller( 'overviewCtrl', ['$scope', 'Todo', 'Events', 'currentUser', function($scope, Todo, Events, currentUser) {

  $scope.theTodos = Todo.getTodos();
  $scope.theEvents = Events.getEvents();

  Todo.setUID(firebase.auth().currentUser.uid);

  // $scope.task = {desc: "add task"};
  $scope.addTodos = function(task) {
    Todo.addTodo(task);
    
  };


}]);
