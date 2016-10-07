angular.module('lmsApp')
.controller( 'addForumCtrl', ['$scope', 'Forum', function($scope, Forum) {



  $scope.addForum = function(forum){
    console.log(forum);
    Forum.addForum(forum);

    $scope.forum = {titles:'', contents:''};

    // $scope.form_group.$setPristine;

    console.log("added");
  };

}]);

// FIXME: magbutang paka ug forum service okieeee???????
