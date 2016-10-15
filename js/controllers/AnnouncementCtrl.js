angular.module('lmsApp')
  .controller('AnnouncementCtrl', ['$scope', 'Questions', 'Announcement', '$location', function($scope, Questions, Announcement, $location){

  $scope.Post = Announcement.getAncmnt();
  $scope.Quiz = Questions.getQuiz();

  $scope.saveAncmnt = function(a){
    a.timecreated = Math.floor(Date.now()/1000);
    Announcement.addAncmnt(a);
    alert("Successfully Created!");
    $location.path('/class_dashboard/post');
  }
}])
