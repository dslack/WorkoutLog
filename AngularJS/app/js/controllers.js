angular.module('controllers',['ngRoute'])
    .controller('GlobalController', function($rootScope){
        $rootScope.WORKOUT = window.WORKOUT;
    })
    .controller('MainController', function($scope, Storage, KEY){
        $scope.history = Storage.get(KEY);
    })
    .controller('NewWorkoutController', function($scope, $routeParams, $location, Storage, KEY){
        var _type = $routeParams.type;
        $scope.data = {
            type: _type,
            newWorkout : {}
        };

        $scope.data.workout = angular.copy(_.find($scope.WORKOUT.workouts, function(w){
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
    .controller('ViewWorkoutController', function($scope, $routeParams, Storage, KEY){
        var _index = $routeParams.index;
        var workout = Storage.get(KEY)[_index];
        $scope.workout = workout;
    });