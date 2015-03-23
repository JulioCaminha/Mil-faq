'use strict';
/**
* @ngdoc overview
* @name milfaqApp
* @description
* # milfaqApp
*
* Main module of the application.
*/
angular
  .module('milfaqApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'usersFactory',
    'problemsFactory',
    'profilesFactory',
  ])

.config(function ($stateProvider,$urlRouterProvider) {
   $stateProvider
    .state('/', {
      url:'/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })

    //Users
    .state('usersIndex', {
      url:'/users',
      templateUrl: 'views/users/index.html',
      controller: 'UsersIndexController'
    })
    .state('usersShow', {
      url: '/users/:id/show',
      templateUrl: 'views/users/show.html',
      controller: 'UsersShowController'
    })
    .state('usersNew', {
      url:'/users/new',
      templateUrl: 'views/users/new.html',
      controller: 'UsersNewController'
    })
    .state('usersEdit', {
      url:'/users/:id/edit',
      templateUrl: 'views/users/edit.html',
      controller: 'UsersEditController'
    })

    //Problems
    .state('problemsIndex', {
      url:'/problems',
      templateUrl: 'views/problems/index.html',
      controller: 'ProblemsIndexController'
    })
    .state('problemsShow', {
      url: '/problems/:id/show',
      templateUrl: 'views/problems/show.html',
      controller: 'ProblemsShowController'
    })
    .state('problemsNew', {
      url:'/problems/new',
      templateUrl: 'views/problems/new.html',
      controller: 'ProblemsNewController'
    })
    .state('problemsEdit', {
      url:'/problems/:id/edit',
      templateUrl: 'views/problems/edit.html',
      controller: 'ProblemsEditController'
    })

   $urlRouterProvider.otherwise('/');
});
