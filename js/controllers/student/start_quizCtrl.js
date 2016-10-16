angular.module('lmsApp')
.controller( 'start_quizCtrl', ['$scope', '$routeParams', 'Questions', 'Answers', function($scope, $routeParams, Questions, Answers) {

  var quizId = $routeParams.id;
  var auth = firebase.auth()
  $scope.qdetails = Questions.getQuestions(quizId);

  $scope.isAnswered = false;
  var ref = firebase.database().ref('users/'+ auth.currentUser.uid + "/answers");
  ref.on('child_added', function (snapshot) {
  

    if (snapshot.val().quiz === $scope.qdetails.$id) {
      $scope.isAnswered = true;
    }
  });


}])
