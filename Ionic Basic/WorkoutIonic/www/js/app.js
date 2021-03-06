angular.module('IonicWorkout', ['ionic', 'controllers', 'services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tab.history', {
      url: '/history',
      views: {
        'tab-history': {
          templateUrl: 'templates/tab-history.html',
          controller: 'HistoryController'
        }
      }
    })

    .state('tab.workout', {
      url: '/workout',
      views: {
        'tab-workout': {
          templateUrl: 'templates/tab-workout.html',
          controller: 'WorkoutController'
        }
      }
    });
  $urlRouterProvider.otherwise('/tab/workout');

});