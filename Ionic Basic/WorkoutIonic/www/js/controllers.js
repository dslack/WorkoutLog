angular.module('controllers', ['services'])
.controller('HistoryController', function($scope, $ionicModal, Storage){})
.controller('WorkoutController', function($scope, WorkoutData) {
  $scope.workoutData = WorkoutData;
});
