
angular.module('lmsApp')

.factory('Todo', [ '$firebaseArray', function ($firebaseArray) {

  var uid;
  var ref = firebase.database().ref('users/' + uid + '/todos');

  function getTodos(IDuser) {
    var ref = firebase.database().ref('users/' + IDuser + '/todos');
    var todoLists = $firebaseArray(ref);
    return todoLists;
  }

  function addTodo(data) {
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
