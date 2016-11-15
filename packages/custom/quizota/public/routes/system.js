'use strict';

// Setting up route
angular.module('mean.quizota').config(['$meanStateProvider', '$urlRouterProvider',
  function ($meanStateProvider, $urlRouterProvider) {
    // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // states for my app
    $meanStateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'quizota/views/system/index.html'
      })
      .state('intro', {
        url: '/',
        templateUrl: 'quizota/views/system/intro.html'
      })

    ;
  }
]).config(['$locationProvider',
  function ($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);
