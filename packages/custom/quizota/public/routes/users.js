'use strict';

// Setting up route
angular.module('mean.quizota').config(['$meanStateProvider',
  function ($meanStateProvider) {
    // states for users
    $meanStateProvider
      .state('auth', {
        url: '/auth',
        abstract: true,
        templateUrl: 'quizota/views/users/index.html'
      })
      .state('auth.login', {
        url: '/login',
        templateUrl: 'quizota/views/users/login.html',
        resolve: {
          loggedin: function (MeanUser) {
            return MeanUser.checkLoggedOut()
          }
        }
      })
      .state('auth.register', {
        url: '/register',
        templateUrl: 'quizota/views/users/register.html',
        resolve: {
          loggedin: function (MeanUser) {
            return MeanUser.checkLoggedOut()
          }
        }
      })
      .state('forgot-password', {
        url: '/forgot-password',
        templateUrl: 'quizota/views/users/forgot-password.html',
        resolve: {
          loggedin: function (MeanUser) {
            return MeanUser.checkLoggedOut()
          }
        }
      })
      .state('reset-password', {
        url: '/reset/:tokenId',
        templateUrl: 'quizota/views/users/reset-password.html',
        resolve: {
          loggedin: function (MeanUser) {
            return MeanUser.checkLoggedOut()
          }
        }
      });
  }
]);
