var app=angular.module('healthApp');

// app.directive('dashboard', function(){

// return {
//     replace: false,
//     restrict: 'E',
//     templateUrl: 'partials/dashboard.html' 
// }

// });

app.directive('sidebar', function(){
    
    return {
        replace: false,
        restrict: 'E',
        templateUrl: 'partials/sidebar.html' 
    }
    
});




