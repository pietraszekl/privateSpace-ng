var myApp = angular.module('myApp', ['ngRoute', 'firebase'])
  .constant('FIREBASE_URL', 'https://boiling-torch-4677.firebaseio.com');



myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    }).
    when('/success', {
      templateUrl: 'views/success.html',
      controller: 'SuccessController'
    }).
    otherwise({
      redirectTo: '/login'
    });
}]);