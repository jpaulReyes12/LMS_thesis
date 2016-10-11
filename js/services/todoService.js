
angular.module('lmsApp')

.factory('Todo', [ '$firebaseArray', function ($firebaseArray) {

  var uid;

  function getTodos() {
    var ref = firebase.database().ref('users/' + uid + '/todos');
    var todoList = $firebaseArray(ref);
    return todoList;
  }

  function addTodo(data) {
    var ref = firebase.database().ref('users/' + uid + '/todos');
    var todoList = $firebaseArray(ref);
    todoList.$add(data);
  }

  function setUID(id) {
    uid = id;
  }


  return {
    getTodos: getTodos,
    addTodo: addTodo,
    setUID: setUID
  }

}]);
