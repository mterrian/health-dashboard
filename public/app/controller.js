var app = angular.module('healthApp');

app.controller('mainCtrl', function($scope, $timeout){



});


app.controller('loginCtrl', function($scope, $timeout, $location){
    
    $scope.submitWords=function(userInfo){
        // healthFactory.checkLogin(userInfo)
        $location.path('/dashboard');
      }
    
        
});