angular.module('controllers', ['services'])
.controller('HistoryController', function($scope, $ionicModal, Storage){
    $scope.data = {
        history: Storage.get("workout")
    };
    $scope.clearWorkouts = function(){
        Storage.set("workout", []);
        $scope.data.history = Storage.get("workout");    
    }
})
.controller('WorkoutController', function($scope, WorkoutData, Storage) {
    $scope.data = {	
        workouts: WorkoutData.getWorkouts()
    };

    $scope.addWorkout = function(){
        //We have the workout available...
        WorkoutData.addWorkout($scope.data.workoutType);
        $scope.data.workout = null;
        $scope.data.history = Storage.get("workout");
    };
});
