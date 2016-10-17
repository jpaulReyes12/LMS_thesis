angular.module('lmsApp')
  .controller('AnnouncementCtrl', ['$scope', 'Questions', 'Announcement', '$location', '$routeParams', 'Schedule', function($scope, Questions, Announcement, $location, $routeParams, Schedule){

  $scope.classID = $routeParams.id;

  var sched = Schedule.getSched();
  $scope.schedID = sched[$routeParams.id];

  $scope.Post = Announcement.getAncmnt($scope.classID);
  $scope.Quiz = Questions.getQuiz($scope.classID);

  $scope.saveAncmnt = function(a){
    a.timecreated = Math.floor(Date.now()/1000);
    Announcement.addAncmnt(a, $scope.classID);
    alert("Successfully Created!");
    $location.path('/class_dashboard/'+ $scope.classID +'/post');
  }
}])
