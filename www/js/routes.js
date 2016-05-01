angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('menu.part', {
    url: '/part/:partId',
    views: {
      'part': {
        templateUrl: 'templates/part.html',
        controller: 'partCtrl'
      }
    }
  })
  .state('menu.lektion', {
  url: '/lektion/:lektionId',
  views: {
    'lektion': {
      templateUrl: 'templates/lektion.html',
      controller: 'lektionCtrl'
    }
  }
})

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    abstract:true,
    controller : 'menuCtrl'
  })

$urlRouterProvider.otherwise('/menu/part/dka1');



});
