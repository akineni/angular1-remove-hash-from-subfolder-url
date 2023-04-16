var app = angular.module('myApp', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/list',
      {
        templateUrl: 'templates/list.html',
        controller: 'ListController'
      });
  
    $routeProvider.when('/new',
      {
        templateUrl: 'templates/new.html',
        controller: 'EditController'
      });
    
    //Default URL
    $routeProvider.otherwise({redirectTo:'list'});
    
    //html5Mode don't need /app/#/ anymore, just /app/
    $locationProvider.html5Mode(true).hashPrefix('!'); //the hashPrefix is for SEO
  })
;