angular.module('lmsApp')
.controller('TabsDemoCtrl', ['$scope', 'Questions', 'Events', function ($scope, Questions, Events) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2' }
  ];

  $scope.model = {
    name: 'Tabs'
  };

  var currentStudent =  firebase.auth().currentUser.iud;
  var ref = firebase.database().ref('users');
  var query = ref.orderByChild("classes/subject_name").startAt(currentStudent).endAt(currentStudent)

  $scope.theEvents = Events.getEvents();
  $scope.theQizzes = Questions.getQuizzes();


}]);
