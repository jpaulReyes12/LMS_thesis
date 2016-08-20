
  angular.module('lmsApp')

    .controller('eventsCtrl', ['$scope', function($scope){

      $scope.toggleAdd = true;


      // DATE MANIPULATION
      //current
      var datetime = new Date();
      $scope.dateNow = datetime;


      //future
      var future = new Date();
      var futureSet = future.setFullYear(future.getFullYear() + 20);
      $scope.futureDate = futureSet;



      // TODO: add filter and sort functions. Schedule: can be edited, add subject field with dropdown.
      // form validation. Events can be edited, add button different color when toggled. topics can be edited. can add topics

      // FIXME: file manipulation

    }]);
