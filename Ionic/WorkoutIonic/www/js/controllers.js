angular.module('controllers', ['services'])
.controller('HistoryController', function($scope, Storage, KEY) {
    $scope.history = Storage.get(KEY);
})
.controller('HistoryDetailController', function($scope, $stateParams, Storage, KEY) {
    var _index = $stateParams.workoutId;;
    var workout = Storage.get(KEY)[_index];
    $scope.workout = workout;
})
.controller('WorkoutController', function($scope, WorkoutData) {
  $scope.workoutData = WorkoutData;
})
.controller('NewWorkoutController', function($scope, $stateParams, $state, WorkoutData, Storage, KEY){
	var _type = $stateParams.type;
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
        $state.go('tab.history');
    };
})
