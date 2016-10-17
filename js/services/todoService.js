
angular.module('lmsApp')

.factory('Todo', [ '$firebaseArray', '$firebaseObject',function ($firebaseArray, $firebaseObject) {

  var uid;
  var ref = firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/todos');

  function getTodos(IDuser) {
    var ref = firebase.database().ref('users/' + IDuser + '/todos');
    var todoLists = $firebaseArray(ref);
    return todoLists;
  }

  function removeTodo(id) {
    var newRef = ref.child(id);
    var todoLists = $firebaseObject(newRef);
    todoLists.$remove();
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
    removeTodo: removeTodo,
    addTodo: addTodo,
    setUID: setUID
  }

}]);
