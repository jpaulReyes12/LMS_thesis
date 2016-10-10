angular.module('lmsApp')
  .controller('AnnouncementCtrl', ['$scope', 'Announcement', function($scope, Announcement){

  $scope.Post = Announcement.getAncmnt();

  $scope.saveAncmnt = function(a){
    a.timecreated = Math.floor(Date.now()/1000);
    Announcement.addAncmnt(a);
  }
}])
