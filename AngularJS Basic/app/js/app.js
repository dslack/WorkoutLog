angular.module('AngularWorkout', ['ngRoute', 'controllers','services'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl:'partials/home.html',
                controller:'MainController'
            })
            .otherwise({
                redirectTo: '/'
            })
    });