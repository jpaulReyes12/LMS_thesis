
angular.module('lmsApp')

  .controller('eventsCtrl', ['$scope', 'File', 'Events', function($scope, File, Events){

    $scope.toggleAdd = true;
    $scope.theEvents = Events.getEvents();


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
    $scope.sortType = 'email';
    $scope.sortReverse = 'false';

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


    // TODO: add filter and sort functions. Schedule: can be edited, add subject field with dropdown.
    // form validation. Events can be edited, add button different color when toggled. topics can be edited. can add topics

    $scope.insertEvent = function(data) {
      data.startEvent = data.start.getTime();
      data.endEvent = data.end.getTime();
      data.isActive = true;

      File.upload().on('state_changed',
        function progress(snapshot) {
          File.progress(snapshot);
        },
        function error(error) {
          console.log(error);
        },
        function success() {
          File.getURL().then(function(snapshot) {
            data.url = snapshot;
            Events.addEvent(data);
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
