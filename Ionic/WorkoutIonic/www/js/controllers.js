angular.module('controllers', ['services'])
.controller('HistoryController', function($scope) {
})
.controller('HistoryDetailController', function($scope, $stateParams) {
  	$stateParams.workoutId;
})
.controller('WorkoutController', function($scope, WorkoutData) {
  $scope.workoutData = WorkoutData;
})
.controller('NewWorkoutController', function($scope,$stateParams, WorkoutData){
	var _type = $stateParams.type
	$scope.data = {
        type: _type,
        newWorkout : {}
    };

    $scope.data.workout = angular.copy(_.find(WorkoutData.workouts, function(w){
        return (w.type === _type);
    }));

    $scope.saveWorkout = function(){
        var _storedWorkout = Storage.get(KEY);
        $scope.data.workout.date = new Date();
        _storedWorkout.push($scope.data.workout);
        Storage.set(KEY, _storedWorkout);
        $location.path('/');
    };
})
