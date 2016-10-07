angular.module('lmsApp')
.controller( 'oververiewCtrl', ['$scope', 'Todo', function($scope, Todo) {

  $scope.theTodos = Todo.getTodos();

  $scope.task = {desc: "add task"};
  $scope.addTodos = function() {
    console.log("Im clicked");
    console.log($scope.task);
    Todo.addTodo();
  };


}]);
