angular.module('expedia', [ 
	'expedia.service',
	'expedia.hotels',
	'ngRoute'
	])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/deals.html',
    controller: 'expediaController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
                          