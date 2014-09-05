angular.module('lowerAlbinaApp', [
  'ngRoute',
  'lowerAlbinaApp.filters',
  'lowerAlbinaApp.services',
  'lowerAlbinaApp.directives',
  'lowerAlbinaApp.controllers'
])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'partials/map.html',
    controller: 'mapController'
  })

  .when('/view2', {
    templateUrl: 'partials/partial2.html',
    controller: 'MyCtrl2'
  })

  .otherwise({
    redirectTo: '/'
  });

}]);
