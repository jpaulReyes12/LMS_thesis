
angular.module('lmsApp')

  .controller('eventsCtrl', ['$scope', 'File', 'Events', function($scope, File, Events){

    $scope.toggleAdd = true;
    $scope.theEvents = Events.getEvents();
    $scope.load = false;

    // DATE MANIPULATION
    //current
    var datetime = new Date();
    $scope.dateNow = datetime;


    //future
    var future = new Date();
    var futureSet = future.setFullYear(future.getFullYear() + 20);
    $scope.futureDate = futureSet;



    //sort and filters
    $scope.searchEvents = '';
    $scope.sortType = 'name';
    $scope.sortReverse = true;

    //checkbox function
    $scope.checkAll = function () {
      if ($scope.selectedAll) {
          $scope.selectedAll = true;
      } else {
          $scope.selectedAll = false;
      }
      angular.forEach($scope.theEvents, function (event) {
          event.Selected = $scope.selectedAll;
      });

    };



    $scope.insertEvent = function(data) {
      data.startEvent = data.start.getTime();
      data.endEvent = data.end.getTime();
      data.isActive = true;
      $scope.load = true;

      File.upload().on('state_changed',
        function progress(snapshot) {
          console.log(snapshot)
          $scope.percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        function error(error) {
          console.log(error);
        },
        function success() {
          File.getURL().then(function(snapshot) {
            data.url = snapshot;
            Events.addEvent(data);

            $scope.load = false;
            $scope.event = null;
            $scope.toggleAdd = true;

          })
        }
      )

    }



    $scope.fileGetter = function() {
      var file = event.target.files[0];
      File.getFile(file);
      File.setStorage("events/", file.name);

    };




}]);
