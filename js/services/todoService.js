
angular.module('lmsApp')

.factory('Todo', [ '$firebaseArray', function ($firebaseArray) {


  var ref = firebase.database().ref('/todos');
  var todoList = $firebaseArray(ref);

  function getTodos() {
    return todoList;
  }

  function addTodo(data) {
    todoList.$add(data);
  }


  return {
    getTodos: getTodos,
    addTodo: addTodo
  };
}]);
