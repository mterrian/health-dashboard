var app=angular.module('healthApp', ['ngRoute']);

app.config(function($routeProvider){

$routeProvider
.when('/login',{
controller: 'loginCtrl',
templateUrl: 'partials/login.html'
})
.when('/dashboard',{
    controller: 'mainCtrl',
    templateUrl: 'partials/dashboard.html'
})
.when('/deductibles',{
    controller: 'deductibleCtrl',
    templateUrl: 'partials/deductibles.html'
})
.otherwise({redirectTo: '/login'});

});