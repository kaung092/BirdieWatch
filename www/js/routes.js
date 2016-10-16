angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


    .state('menu.tallySheet', {
    url: '/tallySheet',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tallySheet.html',
        controller: 'tallySheetCtrl'
      }
    },
    params:{
      params:null
    }

  })

  .state('menu.addSpecies', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addSpecies.html',
        controller: 'addSpeciesCtrl'
      }
    }
  })

  .state('menu.cloud', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/tallySheet')

  

});
