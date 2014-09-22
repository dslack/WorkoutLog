angular.module('services', [])
.factory('WorkoutData', function(){
  return window.WORKOUT;
})
.filter('escape', function() {
  return window.escape;
});
