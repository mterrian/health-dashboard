var app = angular.module('healthApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            controller: 'loginCtrl',
            templateUrl: 'partials/login.html'
        })
        .when('/dashboard', {
            controller: 'dashboardCtrl',
            templateUrl: 'partials/dashboard.html'
        })
        .when('/deductibles', {
            controller: 'deductibleCtrl',
            templateUrl: 'partials/deductibles.html'
        })
        .when('/your-care', {
            controller: 'dashboardCtrl',
            templateUrl: 'partials/your-care.html'
        })
        .when('/plan-ahead', {
            controller: 'planCtrl',
            templateUrl: 'partials/plan-ahead.html'
        })
        .otherwise({
            redirectTo: '/login'
        });
});
