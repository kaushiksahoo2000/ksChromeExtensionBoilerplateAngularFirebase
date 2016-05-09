angular.module('angularFirebaseChromeExtension', ['ui.router', 'angularFirebaseChromeExtension.controllers', 'firebase'])
  .config(function($stateProvider){

  $stateProvider

  .state('index', {
    url:'/index',
    templateUrl: './index.html',
    controller: 'IndexCtrl'
  })

  })
