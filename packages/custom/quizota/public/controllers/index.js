'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function ($scope, Global) {
    $scope.global = Global;
    $scope.sites = [{
      'name': 'makeapoint',
      'text': 'Makeapoint is a platform to craft and fine-tune ideas and messages providing a graphical experience which brough an offline methodlogy online',
      'author': 'Linnovate',
      'link': 'http://www.linnovate.net',
      'image': '/quizota/assets/img/makeapoint.png'
    }, {
      'name': 'Cactus Intranet',
      'text': 'Cactus Intranet is an enterprise social network with features like real-time newsfeed, notifications, groups, events, polls, referral system etc. The system has role based permission system, allowing different stakeholders access and controls relevant to them.',
      'author': 'QED42',
      'link': 'http://www.qed42.com',
      'image': '/quizota/assets/img/cactus.png'
    }];

    $scope.$watch(function () {
      for (var i = 0; i < $scope.sites.length; i += 1) {
        if ($scope.sites[i].active) {
          return $scope.sites[i];
        }
      }
    }, function (currentSlide, previousSlide) {
      if (currentSlide !== previousSlide) {
        console.log('currentSlide:', currentSlide);
      }
    });
  }
]);
