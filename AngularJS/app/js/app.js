angular.module('AngularWorkout', ['ngRoute', 'controllers','services'])
    .constant('KEY', 'AngularWorkout')
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl:'partials/home.html',
                controller:'MainController'
            })
            .when('/workouts/:type', {
                templateUrl:'partials/new-workout.html',
                controller:'NewWorkoutController'
            })
            .when('/workout/:index', {
                templateUrl: 'partials/view-workout.html',
                controller: 'ViewWorkoutController'
            })
            .otherwise({
                redirectTo: '/'
            })
    });