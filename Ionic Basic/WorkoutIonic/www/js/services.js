angular.module('services', [])
.factory('Storage', function(){
    var _storage = window.localStorage;
    return {
        get: function(key){
            var _item = _storage.getItem(key);
            if (!_item) {
                return [];
            }
            return JSON.parse(_item);
        },
        set: function(key, value){
            _storage.removeItem(key);
            _storage.setItem(key, JSON.stringify(value));
        }
    };
})
.factory('WorkoutData', function(Storage){
    var workoutData = window.WORKOUT;
    var workouts = workoutData.workouts;

    return {
        getWorkouts: function(){
            return workouts;
        },
        addWorkout: function(workoutName) {
            var toAddWorkout = _.find(workouts, function(workout){
                return (workoutName === workout.type);
            });

            toAddWorkout.workoutDate = new Date();

            //add to local storage.
            var storedWorkouts = Storage.get("workout");
            storedWorkouts.push(toAddWorkout);
            Storage.set("workout", storedWorkouts);
        }
    };
});
