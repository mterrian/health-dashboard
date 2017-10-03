var app=angular.module('healthApp');


app.directive('sidebar', function(){
    
    return {
        replace: false,
        restrict: 'E',
        templateUrl: 'partials/sidebar.html' 
    }
    
});




