angular.module('lmsApp')

  .controller('ResourceCtrl', ['$scope', 'File', 'Events', function($scope, File, Events){

    $scope.fileGetter = function() {
      var file = event.target.files[0];
      File.getFile(file);
      File.setStorage("resources/", file.name);
    };

    File.upload().on('state_changed',
        function progress(snapshot) {

          $scope.percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        function error(error) {
          //what to do on error
        },
        function success() {
        //what to do when done uploading
        }
      )

}]);
